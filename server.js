const express = require("express");
const mongoose = require("mongoose");
const logger = require ("morgan");
const path = require('path');


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

app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});