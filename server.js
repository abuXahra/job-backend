// import modules
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const errorMiddleware = require("./middlwares/errorMiddleware");
const connectDb = require("./config/connectDb");
const jobRoute = require("./routers/job.route");

//configuration
const app = express();
dotenv.config();
connectDb();

// middleware
app.use(express.json());
app.use("/api/v1/job", jobRoute);
app.use(errorMiddleware);

// server creation
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Sever is running on port ${PORT}`));
