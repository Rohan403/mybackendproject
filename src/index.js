import "dotenv/config";
import connectDB from "./db/index.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running at post ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error", err);
  });

/*
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error:", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
})();
*/
