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
       
     const x =  await User.updateMany({threads_saved : {$in : {id : thread_id}}}, 
           {$pull : {threads_saved: {id:thread_id}}} , {new: true
        } );
    console.log(x)
           
     const y=   await User.updateMany({threads_commented_or_replied : {$in : {id : thread_id}}}, 
            {$pull : {threads_commented_or_replied: {id : thread_id}}}  , {new:true});
 
  const all_thread = await Thread.find({});
         res.status(200).send({all_thread});
        }
       
       catch(err){
            res.status(400).send(err);
       }
}
module.exports = {delete_thread}