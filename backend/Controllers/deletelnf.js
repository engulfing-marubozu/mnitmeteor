const { LostItem } = require("../Models");
const mongoose = require("mongoose");
const deleteLNF =(req,res) => {
    console.log("Deleting a lnf post");

    // id = mongoose.Types.ObjectId(req.body.objID);
    id = req.body.objID;
    console.log(id);
    
    LostItem.findByIdAndDelete(id, function(err,res) {
        console.log(err);
    });
    
    console.log(req.body.name);
}
module.exports = {deleteLNF};