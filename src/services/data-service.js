const { CosmosClient } = require("@azure/cosmos");

class DataService {
  constructor() {
    const client = new CosmosClient({
      endpoint: process.env.COSMOS_ENDPOINT,
      key: process.env.COSMOS_KEY
    });
    
    const database = client.database(process.env.COSMOS_DATABASE_ID);
    
    this.container = database.container(process.env.COSMOS_CONTAINER_ID);
  }
}

module.exports = DataService;