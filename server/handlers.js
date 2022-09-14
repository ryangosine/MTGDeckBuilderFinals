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

const auth0 = require("@auth0/auth0-react");

const authLogin = async () => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("db-name");
  console.log("connected!");
  console.log("auth", auth0);
  await db.collection("users").find().toArray();
  client.close();
  console.log("disconnected!");
};

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
  // try {
  //   const result = await request("https://api.magicthegathering.io/v1/cards");
  //   const singleCard = await result.json();
  //   console.log("singleCard", singleCard);
  //   console.log("result", result);
  // } catch (err) {
  //   console.log(err);
  // }
  const result = await mtg.card.find(id);
  res.status(200).json({ status: 200, data: result });
  console.log(result.card.name);
};

/**
 * make endpoints to push deck collections to mongo
 *
 */

module.exports = {
  authLogin,
  getCards,
  getCard,
};
