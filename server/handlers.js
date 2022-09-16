"use strict";

const { application, json } = require("express");
// use this package to generate unique ids: https://www.npmjs.com/package/uuid
// const { v4: uuidv4 } = require("uuid");

const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
require("dotenv").config();
const { MONGO_URI } = process.env;
console.log("mongoURI", MONGO_URI);

const request = require("request-promise");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const mtg = require("mtgsdk");
const express = require("express");
const app = express();
const { restart } = require("nodemon");

const { card } = require("mtgsdk");

const getCards = async () => {
  try {
    const response = await request("https://api.magicthegathering.io/v1/cards");
    const cardPool = JSON.parse(response);
    return cardPool.cards;
  } catch (err) {
    console.log(err);
  }
};

// getCards().then((cardPool) => console.log(cardPool));

/**
 *  returns a single card
 */

const getCard = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  try {
    const result = await mtg.card.all({ name: id }).on("data", function (card) {
      console.log("card.name", card.name);
      res.status(200).json({ status: 200, data: card });
    });
    console.log("RESULT", result);
  } catch (err) {
    console.error(err);
  }
};

/**
 * make endpoints to push deck collections to mongo
 *
 */

const addUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("DatabaseInformation");
    console.log(".connected!");

    const details = {
      givenName: req.body.name,
      userName: req.body.userName,
      passWord: req.body.passWord,
      email: req.body.email,
    };

    await db.collection("users").insertOne(details);
    console.log("details", details);

    res.status(200).json({
      status: 200,
      data: details,
      message: "User Successfully Registered",
    });
  } catch (err) {
    console.log(err.stack);
    res.status(400).json({ status: 400, message: err.message });
  }
  client.close();
  console.log(".disconnected!");
};

module.exports = {
  getCards,
  getCard,
  addUser,
};

// try {
//   const result = await request("https://api.magicthegathering.io/v1/cards");
//   const singleCard = await result.json();
//   console.log("singleCard", singleCard);
//   console.log("result", result);
// } catch (err) {
//   console.log(err);
// }
