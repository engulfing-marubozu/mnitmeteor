const {User} = require("../../Models")

const save_threads = async (req,res)=>{
    console.log("came to save threads");
  try{
   const user_id = req.user._id;
   const thread_id = req.body.thread_id;
   await User.updateOne({_id : user_id}, { $addToSet: {threads_saved: {id : thread_id}}});
   res.status(200).send("saved succesfully in database");
 }
  catch(err)
  {
      console.log(err);
  }
}

module.exports = {save_threads}