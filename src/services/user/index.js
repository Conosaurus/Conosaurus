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
