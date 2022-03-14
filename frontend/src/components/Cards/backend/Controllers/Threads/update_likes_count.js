const {Thread} = require("../../Models")
const update_likes = (req,res)=>{
    try{
    console.log("aa gaya");
    const user_id = req.user._id;
    const thread_id = req.body.thread_id;
    const comment_id = req.body.comment_id;
    const reply_id = req.body.reply_id;

    
    }
    catch(err){
        console.log(err);
    }
}