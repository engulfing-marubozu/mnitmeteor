const {Thread, User} = require("../../Models")
// recieves data as thread_id
const delete_thread = async (req,res)=>{
    try{
        
        const user_id = req.user._id;
        const thread_id = req.body.thread_id;
        await Thread.findByIdAndDelete(thread_id)
        const updated_user = await User.findByIdAndUpdate(user_id, {
            $pull :{
               threads_posted: thread_id 
            }}, {new:true}
        )
         console.log(updated_user);
         res.status(400).send({updated_user})
        }
       
       catch(err){
            res.status(400).send(err);
       }
}
module.exports = {delete_thread}