//it is the connect database to server........
const mongoose = require("mongoose");
const mongourl = "mongodb://127.0.0.1:27017/hotels";

// mongoose.connect(mongourl,{
//     useNewUrlParser : true ,
//     useUnifiedTopology : true ,
// }) due to older version
mongoose.connect(mongourl);
//get the default connection......
//mongoose maintains a default connnection objecct representing the MongoDB connection.....
const db = mongoose.connection;

//event listeners for database connections........
db.on("connected", () => {
  console.log("connected to database successfully");
});

db.on("error", (err) => {
  console.log("error in connecting to database", err);
});

db.on("disconnected", () => {
  console.log("disconnected from database");
});

module.exports = db;
