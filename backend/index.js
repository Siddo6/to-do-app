const express = require("express");
const dotenv = require("dotenv");
const configureApp = require("./src/settings/config.js");
const mongoose = require("mongoose");

// Set the default environment
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// Load Environment variables from different files based on environment
const envFile = `.env.${process.env.NODE_ENV}`;

// configure dotenv earlier in application
dotenv.config({ path: envFile });

const app = express();
const port = process.env.PORT;

//  Parsing request body
app.use(express.json());

// Configure app
configureApp(app);

async function bootstrap() {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      dbName: process.env.DATABASE_NAME,
    });
    console.log("Connnected To MongoDB");
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

bootstrap();