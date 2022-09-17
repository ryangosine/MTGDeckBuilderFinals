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
 *  returns a single card from external database
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
 * gets user from database
 */

const getUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { email, password } = req.body;
  try {
    await client.connect();
    const db = client.db("DatabaseInformation");
    console.log(".connected!");

    console.log("email", email);
    console.log("password", password);

    const foundUser = await db
      .collection("users")
      .findOne({ email: email, passWord: password });
    console.log("foundUser", foundUser);

    if (foundUser === undefined) {
      res.status(404).json({ status: 404, message: "User Not Found" });
    } else {
      return res.status(200).json({
        status: 200,
        data: foundUser,
        message: "Found ya!",
      });
    }
  } catch (err) {
    console.log(err.stack);
    res.status(400).json({ status: 400, message: err.message });
  }
};

const addUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("DatabaseInformation");
    console.log(".connected!");

    const details = {
      givenName: req.body.givenName,
      userName: req.body.userName,
      password: req.body.passWord,
      email: req.body.email,
    };

    await db.collection("users").insertOne(details);

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

const addCard = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("DatabaseInformation");
    console.log(".connected!");

    await db.collection("decks").insertOne(details);
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
  getUser,
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
