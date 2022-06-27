const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.URI_MONGODB
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

let db
async function connection() {
    try {
        await client.connect();
        db = client.db("challenge-interview")
    } catch (error) {
        console.log(error, "not connetion to database")
    }
}

function getDataDb() {
    return db
}
module.exports = { getDataDb, connection }



