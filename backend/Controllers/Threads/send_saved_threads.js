const {User, Thread}  = require("../../Models")


// always try to use async await in mongoose queries
// this function will fetch the user id from the jwt token and will will return all the favourites of any user
const  send_saved_threads = async (req, res) => {
    console.log("deepak madarchod");
    console.log(req.user._id);
    user_id = req.user._id;
    const user = await User.findById(user_id);
  
    const thread_id = user.threads_saved;
    console.log(thread_id);
    const data = await Promise.all(
      thread_id.map(async (id) => {
          console.log(id);
        const datee = await Thread.findById(id);
        return datee;
      })
    );
    console.log(data);
    res.status(200).send(data);
  };
  module.exports = { send_saved_threads };
  