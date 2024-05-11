import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRouter from "./routes/user.route.js";

//env config
dotenv.config();
//connect to DB
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Database is Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.listen(3000, () => {
  console.log("Server is runing on port 3000!");
});

//api route

app.use("/api/user", UserRouter);
