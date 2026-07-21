import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URL;

const client = new MongoClient(uri);

try {
    await client.connect();
    console.log("Connected");
    await client.close();
} catch (err) {
    console.error(err);
}