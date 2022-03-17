const { Thread, User } = require("../../Models");
// recieves data as thread_id

const delete_comment = async (req, res) => {
  try {
    console.log("came to delete comment");
    const user_id = req.user._id;
    const thread_id = req.body.thread_id;
    const comment_id = req.body.comment_id;
    console.log(thread_id, comment_id);
    const updated_thread = await Thread.findOneAndUpdate(
      // select your doc in moongo

      { _id: thread_id }, // your query, usually match by _id
      { $pull: { discussions: { _id: comment_id } } }, // item(s) to match from array you want to pull/remove
      { new: true }
    );

    console.log(updated_thread);
    res.status(200).send("success");
  } catch (err) {
    console.log(err);
  }
};
module.exports = { delete_comment };
