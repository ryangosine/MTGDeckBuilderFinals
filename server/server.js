"use strict";

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
app.use(cors());

app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

const { getCards, getCard, addUser } = require("./handlers");
const { application } = require("express");

// const cors = require("cors");
// const multer = require("multer");
// const upload = multer({ destination: "/uploads/" });

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(express.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // Nothing to modify above this line
  //          ENDPOINTS
  // ---------------------------------

  .get("/api/get-cards", getCards)
  .get("/api/get-card/:id", getCard)
  .post("/api/add-user", addUser)

  // ---------------------------------
  // Nothing to modify below this line

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 3000.
  .listen(8000, () => console.log(`Listening on port 8000`));
