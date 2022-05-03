const { LostItem } = require("../Models");
const mongoose = require("mongoose");
const deleteLNF = async (req, res) => {
  console.log("Deleting a lnf post");

  // id = mongoose.Types.ObjectId(req.body.objID);
  id = req.body.objID;
  console.log(id);
  flag = req.body.flag;
  if(flag)
  posted_by = req.body.posted_by;
  LostItem.findByIdAndDelete(id, function (err, res) {
    console.log(err);
  });

  //delete from user database
  if(flag===4){
    data = await LostItem.find({ is_verified: true, posted_by: posted_by });
    res.status(200).send(data);
  }else{
    // res.status(200).send(null);
  }
  // if (flag === 1) {
  //   console.log("Recd Flag 1 ");
  //   // data = JSON.stringify(LostItem.find({is_verified: true}));
  //   data = await LostItem.find({ is_verified: true });
  //   // res.status(200).send(data);
  // } else if (flag === 2) {
  //   data  = await LostItem.find({ is_verified: true, category: "Lost" });
  //   // res.status(200).send(data);
  // } else if (flag === 3) {
  //   //found
  //   data = await LostItem.find({ is_verified: true, category: "Found" })
  //   // res.status(200).send(data);
  // } else if (flag === 4) {
  //   data = await LostItem.find({ is_verified: true, posted_by: posted_by });
  //   res.status(200).send(data);
  //   // res.send();
  // } else {
  //   console.log("Incorrect flag");
  //   res.status(200).send(null);
  // }
  console.log(req.body.name);
};
module.exports = { deleteLNF };
