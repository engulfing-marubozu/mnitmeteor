const {User, Thread} = require("../../Models")

const save_threads = async (req,res)=>{

    console.log("came to save/unsave threads");
  try{
   const user_id = req.user._id;
   const thread_id = req.body.thread_id;
   const flag = req.body.flag;
   let to_send;
   
   if(flag==2){
     //saved topics mein hai, unsave dabaya 
      
     
   }
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
   {  
     
      console.log("Unsaved Thread");
      try {
        to_send =  await User.updateOne({_id : user_id}, { $pull: {threads_saved: {id : thread_id}}});  
     //   console.log(to_send);
        to_send = await User.findById(user_id);
        to_send = to_send.threads_saved;
        var to_send_data = await Promise.all(
          to_send.map(async (thread) => {
              console.log(thread.id);
              const datee = await Thread.findById(thread.id);
              datee.is_saved = true;
              return datee;
          })
        );

        // let to_send_data = await Promise
        if(flag===2){
          console.log("flag is 2");
       //   console.log(to_send_data);
          return res.status(200).send(to_send_data.reverse());
        }
      } catch (error) {
        console.log(error);
      }
      
  }
   res.status(200).send("saved succesfully in database");
 
}
  catch(err)
  {
      console.log(err);
  }
}

module.exports = {save_threads}