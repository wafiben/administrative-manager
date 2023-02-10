const express = require("express");
const app = express();
const connect = require("./connectDb/connect");
const Person = require("../models/person.js");
const personRoute = require("../route/personRoute");
const cors = require("cors");
const port = 5000;
app.listen(port, (e) => {
  if (e) {
    console.log("server is failed");
  } else {
    console.log(`server is connected on port ${port}`);
  }
});
connect();
app.use(cors());
app.use(express.json());
app.use("/api", personRoute);
/* app.use("/api", articleRoute); */
