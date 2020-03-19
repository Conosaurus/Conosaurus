// Run dotenv as early as possible
require('dotenv').config()

const { CosmosClient } = require("@azure/cosmos");

const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const databaseId = process.env.COSMOS_DATABASE_ID;
const containerId = process.env.COSMOS_CONTAINER_ID;
const partitionKey = { kind: "Hash", paths: ["/userId"] };

const client = new CosmosClient({
  endpoint,
  key
});

createDatabase()
  .then(createContainer)
  .catch((error) => {
    console.log(`Completed with error`);
    console.log(error);
  });

// One database is used for all data (pricing is database count * container count)
async function createDatabase() {
  const { database } = await client.databases.createIfNotExists({
    id: databaseId
  });
  
  console.log(`Created database: ${database.id}`);
  
  return database;
}

// One container is used for all data (pricing is database count * container count)
async function createContainer(database) {
 const { container } = await database.containers.createIfNotExists({
     id: containerId,
     partitionKey
   }, {
     offerThroughput: 400
   });
 
 console.log(`Created container: ${container.id}`);
}
