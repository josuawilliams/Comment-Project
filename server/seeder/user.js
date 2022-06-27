const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://josuawilliams:joewils12@cluster0.tavyn.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const {hashpass} = require("../helper/hashpass")
const user = require("./user.json")

async function run() {
    try {
        await client.connect();
        const database = client.db("challenge-interview");
        const movies = database.collection('Users');
        user.map(item => {
            item.password = hashpass(item.password)
        })
        const option = {ordered:true}
        const result = await movies.insertMany(user,option)
    } finally {
        await client.close();
    }
}
run().catch(console.error);