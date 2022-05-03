const { LostItem } = require("../Models");
//to create a sin
const FetchLost = async (req, res) => {
  try {
    const data = await LostItem.find({ is_verified: true }).sort({ 'createdAt': -1 }).skip(pointer - 1).limit(20);
    console.log("Reached fetched state");

    console.log(data);
    // const ldata = JSON.stringify(data);
    res.status(200).send(data);
  } catch (err) {
    console.log("tyuy");
    console.log(err);
    res.status(200).send(err);
  }
};
const FetchOnlyFound = async (req, res) => {
  try {
    const data = await LostItem.find({ is_verified: true, category: "Found" }).sort({ 'createdAt': -1 }).skip(pointer - 1).limit(20);
    console.log("Reached fetched state");
    // const ldata = JSON.stringify(data);
    // console.log("data is " + data);
    // console.log(data);
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
// .sort({createdAt: -1}).skip(pointer -1 ).limit(20)
const FetchOnlyLost = async (req, res) => {
  try {
    const ptr = req.body.pointer;
    const data = await LostItem.find({ is_verified: true, category: "Lost" }).sort({ 'createdAt': -1 }).skip(pointer - 1).limit(20);
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
  console.log(req.user._id);
  console.log("\n");

  try {
    const ptr = req.body.pointer;
    const data = await LostItem.find({ is_verified: true, posted_by: req.user._id }).sort({ 'createdAt': -1 }).skip(pointer - 1).limit(20);
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
const FetchFalse = async (req, res) => {
  //current user specific products here
  // console.log(req);
  console.log("\n");
  try {
    const data = await LostItem.find({ is_verified: false }).sort({ 'createdAt': -1 });
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
