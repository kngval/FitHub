const express = require("express");
require("dotenv").config();
const workouts = require("./routes/workout");
const mongoose = require("mongoose");
//express app

const app = express();

app.use(express.json());

app.use("/api/workouts", workouts);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server started...`);
    });
  })
  .catch((err) => console.log(err));

//listen
