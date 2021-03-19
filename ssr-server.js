const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // might to delete that part

    // Configuring the database
    const dbConfig = require("./config/development.config.js");
    const mongoose = require("mongoose");
    mongoose.Promise = global.Promise;

    // Connecting to the database
    mongoose
      .connect(dbConfig.url, {
        useNewUrlParser: true,
      })
      .then(() => {
        console.log("Successfully connected to the express-mongo-app DB");
      })
      .catch((err) => {
        console.log("Could not connect to the database. Exiting now...", err);
        process.exit();
      });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
