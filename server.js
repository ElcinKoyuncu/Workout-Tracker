const express = require("express");
const mongoose = require("mongoose");
const logger = require ("morgan");
const path = require('path');
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');


const PORT = process.env.PORT || 3000;

const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(express.static("public"));

app.use("/api-routes",apiRoutes);
app.use("/html-routes",htmlRoutes);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});