const { Thread, User } = require("../../Models");
// recieves data as thread_id

const delete_thread = async (req, res) => {
  console.log(req.body);
  console.log("thread deletion starts ");
  try {
    const user_id = req.user._id;
    const thread_id = req.body.thread_id;
    // const flag = req.body.flag;

    // var respon;
    await Thread.findByIdAndDelete(thread_id);
    // 
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
    const rflag = req.body.flag;
    console.log("                 FLAG ISSSS   F F G " + rflag);
    if(rflag===3){
      const saved_thread_data = await User.findOne({ _id: user_id });
      const array = await Promise.all(
        saved_thread_data.threads_posted.map(async (object) => {
          return await Thread.findById(object);
        })
      );

      console.log("Ye delete hua " + array);
      console.log(array);
      let e = [];
      try {
        if(!array[0]){
          return res.status(200).send(e);
        }
      } catch (error) {
        return res.status(200).send(e);
      }
      res.status(200).send(array);
    }
    else{
      res.status(200).send("Flag was not 3");
    }
  } catch (err) {
    res.status(200).send(err);
  }
};
module.exports = { delete_thread };
