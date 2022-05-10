const {User} = require("../../Models")

const save_threads = async (req,res)=>{
    console.log("came to save/unsave threads");
  try{
   const user_id = req.user._id;
   const thread_id = req.body.thread_id;
   const bool = await User.exists({ _id: user_id,  threads_saved: {id : thread_id}});
   if(!bool)
   {  
    try {
      console.log("saved thread");
       await User.updateOne({_id : user_id}, { $addToSet: {threads_saved: {id : thread_id}}});
       const ut = await User.findById(user_id).threads_saved;
       console.log(ut); 
    } catch (error) {
      console.log("Error saving");
    } 
    
   } else
   {  console.log("unsaved thread");
   await User.updateOne({_id : user_id}, { $pull: {threads_saved: {id : thread_id}}});}
   res.status(200).send("saved succesfully in database");
 
}
  catch(err)
  {
      console.log(err);
  }
}

module.exports = {save_threads}