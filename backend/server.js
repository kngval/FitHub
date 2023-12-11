const express = require("express");
require("dotenv").config();
const workouts = require("./routes/workout");
const userRoutes = require('./routes/user')
const mongoose = require("mongoose");
const cors = require('cors')
//express app

const app = express();
app.use(cors())
app.use(express.json());

app.use("/api/workouts", workouts);
app.use('/api/user', userRoutes)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server started...`);
    });
  })
  .catch((err) => console.log(err));

//listen
