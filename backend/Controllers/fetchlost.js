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
  const FetchOnlyLost = async (req, res) => {
 
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

  const FetchOnlyLostUser = async (req, res) => {
 
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

  module.exports = {FetchLost,FetchOnlyLostUser,FetchOnlyLost,FetchOnlyFound}