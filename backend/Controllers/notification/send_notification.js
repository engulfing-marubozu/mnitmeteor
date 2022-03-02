const {User} = require("../../Models/index")

const send_notification = async (req,res)=>{
  console.log("aa gaya bhai")
  try{
  user_id = req.user._id;
  const user = await User.findById(user_id);
  res.status(200).send(user.notification);
  }
  catch(err)
  {
      console.log(err);
      res.status(200).send("error occured");
  }
}
module.exports = {send_notification};
