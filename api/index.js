import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

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
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is runing on port 3000!");
});

//api route

app.use("/api/user", UserRoutes);
app.use("/api/auth", authRoutes);
