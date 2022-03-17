const { Thread, User } = require("../../Models");
// recieves data as thread_id

const delete_reply = async (req, res) => {
  try {
    console.log("came to delete reply");
    const user_id = req.user._id;
    const thread_id = req.body.thread_id;
    const comment_id = req.body.comment_id;
    const reply_id = req.body.reply_id;
    console.log(thread_id, comment_id);
    const updated_thread = await Thread.findOneAndUpdate(
      {},
      { $pull: { "discussions.$[i].replies": { _id: reply_id } } },
      { arrayFilters: [{ "i._id": comment_id }], new: true }
    );
    console.log(updated_thread);
    res.status(200).send("success");
  } catch (err) {
    console.log(err);
  }
};
module.exports = { delete_reply };
