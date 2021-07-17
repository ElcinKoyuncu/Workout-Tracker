const express = require("express");
const mongoose = require("mongoose");
const logger = require ("morgan");
const path = require('path');
const apiRoutes = require('./routes/api-routes');



const PORT = process.env.PORT || 3000;

const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(express.static("public"));

app.use("/api",apiRoutes);

app.use (express.static(path.join(__dirname,'./routes')));

app.get("/",(req,res) =>{    
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get("/exercise",(req,res) => {   
  res.sendFile(path.join(__dirname,'./public/exercise.html'));
});

app.get("/stats",(req,res) =>{   
  res.sendFile(path.join(__dirname,'./public/stats.html'));
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});