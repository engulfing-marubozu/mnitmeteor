const {Thread, User} = require("../../Models")
// recieves data as thread_id , commenter_id, comment
const add_comment =async (req,res)=>{
    try{
        console.log("aa gaya");
        const date = new Date()
        const user_id = req.user._id;
        // console.log(req.user);

        console.log("user id is " +user_id);
        // const prof_pic = req.user.profile_pic;
        // console.log("backend ppic "+prof_pic );
        const thread_id = req.body.thread_id;
        const commenter_mnit_id = req.body.commentor_mnit_id;
        const comment_id = req.body.comment_id;
        const content = req.body.content;
        const replied_to = req.body.replied_to;
        console.log(replied_to);
        console.log(user_id);
        let prof_pic;
        try {
            prof_pic = await User.findById(user_id);
            prof_pic = prof_pic.profile_pic;
            console.log("backend ppic "+prof_pic );
        } catch (error) {
            console.log(error);
            return res.send("Error with profile pic");
        }
        
        if(!comment_id)
        {   
            console.log("helli")
            console.log(date);

        const updated_Thread = await Thread.findByIdAndUpdate(thread_id, {
            $push :{
               discussions : {
                   mnit_id : commenter_mnit_id,
                   commented_by : user_id,
                   content : content,
                   createdAt :date,
                   replied_to: replied_to,
                   profile_pic: prof_pic,
               }
            }}, {new:true}
        ) 
       
        console.log(updated_Thread);
         res.status(200).send(updated_Thread)
        }
        else{
            console.log("hello");
            console.log(comment_id);
            console.log(content);
            console.log(user_id)
           // const x = await Thread.find({ "discussions._id" : comment_id }).populate('discussions')
            // console.log(x)
           await Thread.updateOne({
              "discussions._id" : comment_id 
            }, {
                $push :{
                    "discussions.$.replies" : {
                       replied_by : user_id,
                       mnit_id : commenter_mnit_id,
                       content : content,
                       createdAt : date,
                       replied_to: replied_to,
                       profile_pic: prof_pic,
                   }
                }}, {new:true}
            )    
           const updated_Thread = await Thread.findOne({ 'discussions._id' : comment_id}, {'discussions.$':1});
         console.log(updated_Thread.discussions[0]);
           res.status(200).send(updated_Thread.discussions[0]);
        }
       
        }
        catch(err){
            res.status(200).send(err);
       }
}
module.exports = {add_comment}