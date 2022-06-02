const { LostItem } = require("../Models");
//to create a sin
const FetchLost = async (req, res) => {
  console.log("Came to fetch lost people and items!");
  //queryasparam
  const pointer = req.query.pointer;
  // console.log(req.query);
  // console.log(req.params);
  
  console.log("lost items pointer "+pointer);
  console.log(pointer);
  // res.send(pointer);
  // console.log("pointer is "+pointer);
  if(pointer==null){
    console.error("Pointer is undefined ");
  }
  // //.sort({ 'createdAt': -1 }).skip(pointer - 1).limit(20).then((err)=>{
  // //   console.log(err);
  // // });
  try { 
    var data = await LostItem.find({ is_verified: true }).sort({ 'createdAt': -1 }).skip(pointer - 1).limit(20);
    // const data = await LostItem.find({is_verified: })
    console.log("Reached fetched state");
    try {
      if(Object.keys(data).length===0){
        data = [];
      }  
    } catch (error) {
      data = [];
    }
    
    // console.log(data);
    // const ldata = JSON.stringify(data);
    res.status(200).send(data);
   }catch(err){
     console.error(err);
   }
};
const FetchOnlyFound = async (req, res) => {
  // queryasparam
  const pointer = req.query.pointer;
  try {
    var data = await LostItem.find({ is_verified: true, category: "Found" }).sort({ 'createdAt': -1 }).skip(pointer - 1).limit(20);
    console.log("Reached fetched state");
    // const ldata = JSON.stringify(data);
    // console.log("data is " + data);
    // console.log(data);
    if(Object.keys(data).length===0){
      data = [];
    }
    res.status(200).send(data);
  } catch (err) {
    console.log("error ocurred");
    console.log(err);
    res.status(200).send(err);
  }
};
// .sort({createdAt: -1}).skip(pointer -1 ).limit(20)
const FetchOnlyLost = async (req, res) => {
  // queryasparam
  const pointer = req.query.pointer;
  try {
    // const ptr = req.body.pointer;
    var data = await LostItem.find({ is_verified: true, category: "Lost" }).sort({ 'createdAt': -1 }).skip(pointer - 1).limit(20);
    console.log("Reached fetched state");
    // const ldata = JSON.stringify(data);
    if(Object.keys(data).length===0){
      data = [];
    }
    res.status(200).send(data);
  } catch (err) {
    console.log("tyuy");
    console.log(err);
    res.status(200).send(err);
  }
};

const FetchOnlyLostUser = async (req, res) => {
  //current user specific products here
  // const pointer = req.query.pointer;
  
  console.log("\n");

  try {
    // const ptr = req.body.pointer;
    console.log(req.user._id);
    var data = await LostItem.find({ is_verified: true, posted_by: req.user._id }).sort({ 'createdAt': -1 });
    console.log("Reached fetched state");
    // const ldata = JSON.stringify(data);
    try {
      if(Object.keys(data).length===0){
        data = [];
      }  
    } catch (error) {
      data = [];
    }
    
    res.status(200).send(data);
  } catch (err) {
    console.log("tyuy");
    console.log(err);
    res.status(200).send(err);
  }
};
const FetchFalse = async (req, res) => {
  //current user specific products here
  // console.log(req);
  
  console.log("\n");
  try {
    var data = await LostItem.find({ is_verified: false }).sort({ 'createdAt': -1 });
    console.log("Sending items with false values ");
    // const ldata = JSON.stringify(data);
    res.status(200).send(data);
  } catch (err) {
    // console.log("");
    console.log(err);
    res.status(200).send(err);
  }
};
const FetchByID = async (req, res) => {
  const email = req.body.email;
  console.log("fetching by id for " + email);

  const uid = req.body.lnfcard_id;
  try {
    const data = await LostItem.find({ is_verified: true, _id: uid });
    res.status(200).send(data[0]);

  } catch (err) {
    console.log(err);
    res.status(200).send("404");
  }
}
module.exports = {
  FetchLost,
  FetchOnlyLostUser,
  FetchOnlyLost,
  FetchOnlyFound,
  FetchFalse,
  FetchByID
};
