const {Thread} = require("../../Models")
// recieves data as thread_id , commenter_id, comment
const add_comment =async (req,res)=>{
    try{
        console.log("aa gaya");
        const user_id = req.user._id;
        const thread_id = req.body.thread_id;
        const commenter_mnit_id = req.body.commenter_mnit_id;
        const content = req.body.content;
        // const x = await 
        const updated_Thread = await Thread.findByIdAndUpdate(thread_id, {
            $push :{
               discussions : {
                   mnit_id : commenter_mnit_id,
                   content : content
               }
            }}, {new:true}
        )
         res.status(400).send({updated_Thread})
        }
       
       catch(err){
            res.status(400).send(err);
       }
}
module.exports = {add_comment}