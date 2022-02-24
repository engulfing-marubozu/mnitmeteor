const {Thread} = require("../../Models")

const fetch_live_threads = async (req,res)=>{
    console.log("came to fetch threads");
  try{
  const user_id = req.user._id;
  const universal_threads = await Thread.find({});
  const user_specific_threads = await Thread.find({posted_by:user_id});
   res.status(400).send({universal_threads, user_specific_threads})
  }
 
 catch(err){
      res.status(400).send(err);
 }
}

module.exports = {fetch_live_threads}