const { User } = require("../../Models/index");

const delete_notification = async(req,res)=>{
    console.log("edvjndv")
   try{
    const {index} = req.body;
    user_id = req.user._id;
    console.log(user_id);
    
    const user = await User.findById(user_id);
    const updated_array = user.notification;
    updated_array.splice(user.notification.length - 1 - index , 1 );
    console.log(user);
    const y = await User.findByIdAndUpdate({"_id":user_id}, {"notification": updated_array, $inc: {read_notif_count: -1}} );
    //delete
    
    console.log("tycyuct");
    console.log(y);
    res.status(200).send(updated_array.reverse());
   }
   catch(err)
   {
       console.log(err);
   }
}

module.exports = {delete_notification};