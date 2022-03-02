const {User} = require("../../Models/index")

const send_notification = async (req,res)=>{
  const id = req.user._id;
  try{
  const custom_notif = User.findById({id}, {Notification:1});
  res.status(200).send({custom_notif});
  }
  catch(err)
  {
      console.log(err);
      res.status(200).send("error occured");
  }
}
module.exports = {send_notification};
