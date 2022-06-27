const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://josuawilliams:joewils12@cluster0.tavyn.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function connect() {
    try {
        await client.connect();   
        const collection = client.db("challenge-interview").collection("Users");
        const movie = await collection.find().toArray()
        console.log(movie);
        client.close();
    } catch (error) {
        console.log(error);
    }
}
connect();



