const { User, Product, LostItem, Thread } = require("./Models");
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

// const copyitem = async()=>{
//   const data = await Thread.findById("6270d8400f6aae891caf3e9c");

//   for (let step = 0; step < 60; step++) {
//     const item = new Thread({
//       posted_by: data.posted_by,
//       users_mnit_id: data.users_mnit_id,
//       title: step,
//       description: data.description,
//       document: data.document,
//       is_verified: true,
//     })
//     const sv = await item.save((res,err)=>{
//         console.log(res);
//     });  
//     console.log("Saved");
//   }
// }  
// copyitem();
// Local port connection
// LostItem.deleteMany().then(()=>{
//     console.log("Deleted all users ");
// }).catch((err)=>{
//     console.log(err);
// })
Thread.deleteMany().then(() => {
  console.log("Deleted all users ");
}).catch((err) => {
  console.log(err);
})
