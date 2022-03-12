const {Thread} = require("../../Models")
// recieves data as thread_id , commenter_id, comment
const add_comment =async (req,res)=>{
    try{
        console.log("aa gaya");
        const date = new Date()
        const user_id = req.user._id;
        const thread_id = req.body.thread_id;
        const commenter_mnit_id = req.body.commentor_mnit_id;
        const comment_id = req.body.comment_id;
        const content = req.body.content;
    console.log(user_id)
        if(!comment_id)
        {   
            console.log("helli")
            console.log(date)
        const updated_Thread = await Thread.findByIdAndUpdate(thread_id, {
            $push :{
               discussions : {
                   mnit_id : commenter_mnit_id,
                   commented_by : user_id,
                   content : content,
                   createdAt :date
               }
            }}, {new:true}
        ) 
         res.status(200).send({updated_Thread})
        }
        else{
            console.log("hello");
            console.log(comment_id);
            console.log(content);
            console.log(user_id)
           const x = await Thread.find({ "discussions._id" : comment_id })
           console.log(x)
            const updated_Thread = await Thread.updateMany({
              "discussions._id" : comment_id 
            }, {
                $push :{
                    "discussions.$.replies" : {
                       replied_by : user_id,
                       mnit_id : commenter_mnit_id,
                       content : content,
                       createdAt : date
                   }
                }}, {new:true}
            )    
            console.log(updated_Thread);
            console.log("jbfekj")
            res.status(200).send({updated_Thread}) 
        }
       
        }
        catch(err){
            res.status(200).send(err);
       }
}
module.exports = {add_comment}