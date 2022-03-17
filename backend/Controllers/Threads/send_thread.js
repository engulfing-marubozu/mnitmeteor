const {Thread} = require("../../Models")

const fetch_live_threads = async (req,res)=>{
    console.log("came to fetch threads");
  try{
//   const user_id = req.user._id;
  const universal_threads = await Thread.find({is_verified: true});
//   const user_specific_threads = await Thread.find({posted_by:user_id});
   res.status(200).send({universal_threads})
  }
 
 catch(err){
      res.status(200).send(err);
 }
}
const fetch_false_threads = async(req,res)=>{
  console.log("Send threads to admin to approve/dis");
  try{
//   const user_id = req.user._id;
  const universal_threads_false = await Thread.find({is_verified:false});
//   const user_specific_threads = await Thread.find({posted_by:user_id});
   res.status(200).send(universal_threads_false);
  }
 
 catch(err){
      res.status(200).send(err);
 }
}

const fetch_own_threads = async (req,res)=>{
     console.log("came to fetch threads");
   try{
   const user_id = req.user._id;

   const user_specific_threads = await Thread.find({posted_by:user_id});
    res.status(200).send({ user_specific_threads})
   }
  
  catch(err){
       res.status(200).send(err);
  }
 }
 
module.exports = {fetch_live_threads, fetch_own_threads,fetch_false_threads}