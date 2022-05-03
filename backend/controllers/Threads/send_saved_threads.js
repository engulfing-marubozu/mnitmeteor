const {User, Thread}  = require("../../Models")


// always try to use async await in mongoose queries
// this function will fetch the user id from the jwt token and will will return all the favourites of any user
const send_saved_threads = async (req, res) => {
    console.log(req.user._id);
    user_id = req.user._id;
    const user = await User.findById(user_id);
  
    const saved_threads = user.threads_saved;
    
    var data = await Promise.all(
      saved_threads.map(async (thread) => {
          console.log(thread.id);
        const datee = await Thread.findById(thread.id);
        return datee;
      })
    );
    // console.log(data);
    try {
      const check = data[0];
      if(check==null){
        data = [];
      }
    } catch (error) {
      data = [];
      console.log(error);
    }
    res.status(200).send(data);
  };
  module.exports = { send_saved_threads };
  