const { LostItem } = require("../Models");


const FetchLost = async (req, res) => {
 
    try {
      const data = await LostItem.find();
      console.log("Reached fetched state");
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
      const data = await LostItem.find({category: "Found"});
      console.log("Reached fetched state");
      // const ldata = JSON.stringify(data);
      res.status(200).send(data);
    } catch (err) {
      console.log("tyuy");
      console.log(err);
      res.status(200).send(err);
    }
  };
  const FetchOnlyLost = async (req, res) => {
 
    try {
      const data = await LostItem.find({category: "Lost"});
      console.log("Reached fetched state");
      // const ldata = JSON.stringify(data);
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
      const data = await LostItem.find({posted_by:req.user._id });
      console.log("Reached fetched state");
      // const ldata = JSON.stringify(data);
      res.status(200).send(data);
    } catch (err) {
      console.log("tyuy");
      console.log(err);
      res.status(200).send(err);
    }
  };

  module.exports = {FetchLost,FetchOnlyLostUser,FetchOnlyLost,FetchOnlyFound}