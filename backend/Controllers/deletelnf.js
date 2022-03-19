const { LostItem } = require("../Models");
const mongoose = require("mongoose");
const deleteLNF =(req,res) => {
    console.log("Deleting a lnf post");

    // id = mongoose.Types.ObjectId(req.body.objID);
    id = req.body.objID;
    console.log(id);
    flag = req.body.flag;
    posted_by = req.body.posted_by;
    LostItem.findByIdAndDelete(id, function(err,res) {
        console.log(err);
    });
    
    
    //delete from user database 
    if(flag==1){
        res.send(LostItem.find({is_verified: true}));
    }else if(flag==2){
        res.send(LostItem.find({is_verified: true, category: "Lost"}));
    }else if(flag==3){
        //found
        res.send(LostItem.find({is_verified: true, category: "Found"}));
    }else if(flag==4){
        res.send(LostItem.find({is_verified: true, posted_by: posted_by}));
    }else{
        console.log("Incorrect flag");
    }
    console.log(req.body.name);
}
module.exports = {deleteLNF};