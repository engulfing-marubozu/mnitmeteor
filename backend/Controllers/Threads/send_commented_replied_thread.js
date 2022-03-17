const { User, Thread } = require("../../Models");

// always try to use async await in mongoose queries
// this function will fetch the user id from the jwt token and will will return all the favourites of any user
const send_commented_replied_threads = async (req, res) => {
  console.log("deepak madarchod ");
  console.log(req.user._id);
  user_id = req.user._id;
  const user = await User.findById(user_id);

  const saved_threads = user.threads_commented_or_replied;

  const data = await Promise.all(
    saved_threads.map(async (saved_thread) => {
      const datee = await Thread.findById(saved_thread.id);
      return datee;
    })
  );
  console.log(data);
  res.status(200).send(data);
};
module.exports = { send_commented_replied_threads };
