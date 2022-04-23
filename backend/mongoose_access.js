const {User, Product, LostItem, Thread} = require("./Models")
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
// variables
const port = 5000;

// Database connection

database_url = "mongodb://marubozu:qwerty%40123@cluster0-shard-00-00.2vl8j.mongodb.net:27017,cluster0-shard-00-01.2vl8j.mongodb.net:27017,cluster0-shard-00-02.2vl8j.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-ivzclp-shard-0&authSource=admin&retryWrites=true&w=majority";
// console.log(database_url);
mongoose
  .connect(database_url)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. Here \n${err}`);
  });

// Local port connection
LostItem.deleteMany().then(()=>{
    console.log("Deleted all users ");
}).catch((err)=>{
    console.log(err);
})
Thread.deleteMany().then(()=>{
    console.log("Deleted all users ");
}).catch((err)=>{
    console.log(err);
})
