const mongoose = require("mongoose");

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Error occure while connecting to Database: ", err.message);
  }
}

module.exports = connectDb;
