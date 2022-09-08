"use strict";

const { application, json } = require("express");
// use this package to generate unique ids: https://www.npmjs.com/package/uuid
// const { v4: uuidv4 } = require("uuid");

const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
require("dotenv").config();
const { MONGO_URI } = process.env;
const request = require("request-promise");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const mtg = require("mtgsdk");
const express = require("express");
const app = express();
const { restart } = require("nodemon");

const dbFunction = async () => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("CardInformationStorage");
  console.log("connected!");
  await db.collection("oracleCards").find().toArray();
  client.close();
  console.log("disconnected!");
};

// const getCards = async (req, res) => {
//   const client = new MongoClient(MONGO_URI, options);

//   try {
//     await client.connect();
//     const db = client.db("CardStorage");
//     console.log(".connected.");

//     const cardInfo = await db.collection("oracleCards").find().toArray();

//     mtg.card.all().on("data", function (card) {
//       console.log("card.name", card.name);
//     });

//     res.status(200).json({ status: 200, data: cardInfo });
//   } catch (err) {
//     console.log(err.stack);
//     res.status(400).json({ status: 400, message: err.message });
//   }

//   client.close();
//   console.log(".disconnected.");
// };

const getCards = async () => {
  try {
    const response = await request("https://api.magicthegathering.io/v1/cards");
    const cardPool = JSON.parse(response);
    return cardPool.cards;
  } catch (err) {
    console.log(err);
  }
};

getCards().then((cardPool) => console.log(cardPool));

// returns a single card

// const getCard = async (req, res) => {
//   const client = new MongoClient(MONGO_URI, options);
//   const { id } = req.params;
//   console.log(id);
//   const objID = new ObjectId(id);

//   try {
//     await client.connect();
//     const db = client.db("CardStorage");
//     console.log(".connected!");
//     const foundCard = await db
//       .collection("oracleCards")
//       .findOne({ _id: objID });

//     console.log("foundCard", foundCard);
//     if (!foundCard) {
//       return res.status(404).json({ status: 404, message: "Card not found" });
//     } else {
//       return res.status(200).json({
//         status: 200,
//         data: foundCard,
//         message: "Card successfully found!",
//       });
//     }
//   } catch (err) {
//     console.log(err.stack);
//     res.status(400).json({ status: 400, message: err.message });
//   }
//   client.close();
//   console.log(".disconnected!");
// };

const getCard = async () => {
  const cardId = req.params;

  try {
    const result = await request("https://api.magicthegathering.io/v1/cards");
    const singleCard = JSON.parse(result);
    return singleCard;
  } catch (err) {
    console.log(err);
  }
};

mtg.card.find(386616).then((result) => {
  console.log(result.card.name);
});

/**
 * make endpoints to push deck collections to mongo
 *
 */

module.exports = {
  dbFunction,
  getCards,
  getCard,
};
