const {User, Product, LostItem, Thread} = require("./Models");
const mongoose = require("mongoose");
require("dotenv").config();
database_url = process.env.MONGODB_ATLAS;
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
// LostItem.deleteMany().then(()=>{
//     console.log("Deleted all users ");
// }).catch((err)=>{
//     console.log(err);
// })
// Thread.deleteMany().then(()=>{
//     console.log("Deleted all users ");
// }).catch((err)=>{
//     console.log(err);
// })
