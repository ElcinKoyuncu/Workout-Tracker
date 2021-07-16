const express = require("express");
const mongoose = require("mongoose");
const Workout = require ("./models/workout");


const PORT = process.env.PORT || 3000

const db = require("./models");

const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));



// routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});