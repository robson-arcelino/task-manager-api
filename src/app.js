const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();


console.log(process.env.MONGO_URI);

const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB conectado");
  })
  .catch((error) => {
    console.log("Erro MongoDB:", error);
  });

app.use("/tasks", taskRoutes);
app.use("/auth", authRoutes);
module.exports = app;