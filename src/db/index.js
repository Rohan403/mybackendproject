import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "../constants.js";

const app = express();

const connectDB = async () => {
  try {
    const connectionPath = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.listen(process.env.PORT, () => {
      console.log(`Port successfully connected and running on ${connectionPath.connection.host}`);
    });
  } catch (error) {
    console.log("Error:", error);
    process.exit(1);
  }
};
export default connectDB;
