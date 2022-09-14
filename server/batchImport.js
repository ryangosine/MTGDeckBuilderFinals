const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const oracleCards = require("");

const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("CardStorage");
    console.log(".connected!");

    await db.collection("oracleCards").insertMany(oracleCards);
  } catch (err) {
    console.log(err.stack);
  }

  client.close();
  console.log(".disconnected");
};

batchImport();
