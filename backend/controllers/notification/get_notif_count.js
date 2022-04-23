const { User } = require("../../Models/index");

const get_notif_alert_count = async (req, res) => {
  console.log("SENDING NOTIF COUNT");
  user_id = req.user._id;
  console.log(user_id);
  try {
  
    const user = await User.findById(user_id);
    const count = user.notification.length - user.read_notif_count;
    res.status(200).send({count: count});
  } catch (err) {
    console.log(err);
  }
};
module.exports = { get_notif_alert_count };
