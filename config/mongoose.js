const mongoose = require("mongoose");

// ***** Database connection with Mongoose (Connecting to mongoose Atlase)

mongoose.connect("mongodb+srv://admin:admin@cluster0.jj2okfx.mongodb.net/");

const db = mongoose.connection;


// Databse Error handling
db.on("error", () => {
  console.log("error");
});

// Authentication // Succefful on Database connection
db.once("open", function (err) {
  if (err) {
    console.log("Error in connecting the database", err);
  }
  console.log("Successfully connecting to the Database");
});
