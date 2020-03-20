const { User } = require('../../models');
const DataService = require('../data-service');

class UserService extends DataService {
  
  constructor() {
    super();
    
    this.documentType = "user";
  }
  
  async query() {
   const queryIterator = await this.container.items.query({
      query:
       `SELECT * FROM ${process.env.COSMOS_CONTAINER_ID} c
        WHERE c.type = '${this.documentType}'`,
      parameters: []
    });
    const feedResponse = await queryIterator.fetchAll();
    
    return feedResponse.resources.map(user => new User(user));
  }
  
  async get(userId) {
    const item = this.container.item(userId);
    const itemResponse = await item.read();
    const resource = itemResponse.resource;
    
    if (itemResponse.statusCode !== 404 && resource === undefined) {
      throw 'The database responded in an unexpected manner.';
    }
    
    return resource;
  }
  
  /*
  async create(user) {
    const itemResponse = await this.container.items.create({
      ...user,
      type: this.documentType
    });
    const resource = itemResponse.resource;
    
    return resource;
  }
  */
  
}

module.exports = UserService;
