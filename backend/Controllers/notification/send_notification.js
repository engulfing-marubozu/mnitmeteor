const {User} = require("../../Models/index")

const send_notification = async (req,res)=>{
  console.log("aa gaya bhai")
  try{
  user_id = req.user._id;
  
  const user = await User.findById(user_id);
  console.log(user.notification.length);
  const uses =  await User.findByIdAndUpdate( user_id, {$set :  {read_notif_count : user.notification.length }}, {new:true} ); 
 console.log(uses);
  res.status(200).send(user.notification);
  }
  catch(err)
  {
      console.log(err);
      res.status(200).send("error occured");
  }
}
module.exports = {send_notification};
