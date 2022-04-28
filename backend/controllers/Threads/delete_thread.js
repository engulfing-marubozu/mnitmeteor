const { Thread, User } = require("../../Models");
// recieves data as thread_id
const delete_thread = async (req, res) => {
  console.log(req.body);
  try {
    const user_id = req.user._id;
    const thread_id = req.body.thread_id;
    await Thread.findByIdAndDelete(thread_id);
    const updated_user = await User.findByIdAndUpdate(
      user_id,
      {
        $pull: {
          threads_posted: thread_id,
        },
      },
      { new: true }
    );

    const x = await User.updateMany(
      { threads_saved: { $in: { id: thread_id } } },
      { $pull: { threads_saved: { id: thread_id } } },
      { new: true }
    );
    console.log(x);

    const y = await User.updateMany(
      { threads_commented_or_replied: { $in: { id: thread_id } } },
      { $pull: { threads_commented_or_replied: { id: thread_id } } },
      { new: true }
    );
    if (req.body.flag === 1) {
        console.log("habibi")
      const all_thread = await Thread.find({});
      console.log(all_thread);
      res.status(200).send( all_thread );
    } else if (req.body.flag === 2) {
      const saved_thread_data = await User.findOne({ _id: user_id });
      const array = await Promise.all(
        saved_thread_data.threads_saved.map(async (object) => {
          return await Thread.findById(object.id);
        })
      );
      console.log(array);
      res.status(200).send(array);
    } else if(flag===3){
      const saved_thread_data = await User.findOne({ _id: user_id });
      const array = await Promise.all(
        saved_thread_data.threads_posted.map(async (object) => {
          return await Thread.findById(object);
        })
      );
      console.log(array);
      res.status(200).send(array);
    }
    else{
      res.status(200).send();
    }
  } catch (err) {
    res.status(200).send(err);
  }
};
module.exports = { delete_thread };
