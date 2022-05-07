const { User, Product, LostItem, Thread } = require("./Models");
const mongoose = require("mongoose");
// const time = require("time");
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

const copyitem = async()=>{
  const data = await Thread.find({email: "2019ume1141@mnit.ac.in"});

  for (let step = 0; step < 3; step++) {
    const item = new Thread({
      posted_by: "626ae7576f1bd23cf9b942f3",
      users_mnit_id: "2019ume1205",
      title: "item " + step,
      description: "hello",
      document: data.document,
      is_verified: true,
    })
    await delay(5000);
    const sv = await item.save((res,err)=>{
        console.log(res);
    });  
    console.log("Saved");
  }
}  
// copyitem();
// Local port connection
// LostItem.deleteOne({category: "Found"}).then(()=>{
//     console.log("Deleted all LNF ");
// }).catch((err)=>{
//     console.log(err);
// })
// Thread.deleteMany().then(() => {
//   console.log("Deleted all threads ");
// }).catch((err) => {
//   console.log(err);
// })
// Product.deleteMany({title:"fsdgsdfg"},(err,res)=>{
//   console.log(err);
// })
