const {Thread, User} = require("../../Models")

const fetch_live_threads = async (req,res)=>{
    console.log("came to fetch threads");
    const user_id = req.body.user_id;

    console.log(req.body);
  try{
    if(!user_id)
    {
//   const user_id = req.user._id;
  const universal_threads = await Thread.find({is_verified: true}).sort({'createdAt':-1});
//   const user_specific_threads = await Thread.find({posted_by:user_id});
   res.status(200).send({universal_threads})
  }
else{
  console.log("hbe")
  //   const user_id = req.user._id;
  const universal_threads = await Thread.find({is_verified: true}).sort({'createdAt':-1});
  const saved_threads = await User.findById(user_id, {saved_threads:1}).sort({'createdAt':-1});
//   const user_specific_threads = await Thread.find({posted_by:user_id});
   res.status(200).send({universal_threads, saved_threads})
}
  }
 catch(err){
      res.status(200).send(err);
 }
}

const fetch_false_threads = async(req,res)=>{
  console.log("Send threads to admin to approve/dis");
  try{
//   const user_id = req.user._id;
  const universal_threads_false = await Thread.find({is_verified:false}).sort({date:-1});
//   const user_specific_threads = await Thread.find({posted_by:user_id});
   res.status(200).send(universal_threads_false);
  }
 
 catch(err){
      res.status(200).send(err);
 }
}

const fetch_own_threads = async (req,res)=>{
     console.log("came to fetch own threads");
   try{
   const user_id = req.user._id;
  const user = await User.findById(user_id);
   const user_specific_threads = await Thread.find({posted_by:user_id , is_verified:true}).sort({date:-1});
   const saved_threads =  user.threads_saved;
   console.log(saved_threads)
    res.status(200).send({ user_specific_threads,saved_threads})
   }
  
  catch(err){
       res.status(200).send(err);
  }
 }
 
const specific_thread =async (req, res)=>{
  console.log("aa gayaaa");
 const {email, thread_id} = req.body;
 try{
  if(email)
  {
    const thread = await Thread.findById(thread_id);
    if(!thread)
    res.status(200).send("404");
    else{
    const user = await User.findOne({email});
    const saved_status = user.threads_saved.includes(thread_id);

    res.status(200).send({thread, saved_status});}
     }
  
else{
    const thread = await Thread.findById(thread_id);
    if(!thread)
    res.status(200).send("404");
    else{
    res.status(200).send({thread, saved_status:false});}
    }
 }
 catch(err)
 {
    res.status(200).send("404");
   console.log(err);
 }
} 
module.exports = {fetch_live_threads, fetch_own_threads,fetch_false_threads, specific_thread}