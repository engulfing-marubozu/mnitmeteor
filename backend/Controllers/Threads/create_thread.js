const {Thread, User} = require("../../Models")

// recieves data as mnit_id,title, description

const new_thread = async(req, res)=>{
    try{
        console.log("aa gaya");
       const user_id = req.user._id;
       const { title, description} = req.body;
        const user = await User.findById(req.user._id);
     
       const mnit_id = user.email.slice(0,11)
       const Thread_save = new Thread({
       posted_by : user_id,
       users_mnit_id: mnit_id,
       title: title,
       description: description,
      });

      try{
          const saved_thread = await Thread_save.save();
          console.log(saved_thread);
          console.log(saved_thread.posted_by);
          console.log(saved_thread._id)
       const x=  await User.findByIdAndUpdate(saved_thread.posted_by, {
            $addToSet: {
                threads_posted : saved_thread._id },
          });
        
                    res
            .status(200)
            .send(
              "unverified thread saved in database with and user's thread updated"
            );
      }
      catch(err){
          console.log(err);
      }
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {new_thread};