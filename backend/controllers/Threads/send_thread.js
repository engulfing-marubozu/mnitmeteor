const jwt = require("jsonwebtoken");
const { Thread, User } = require("../../Models")

const fetch_live_threads = async (req, res) => {
  console.log("came to fetch threads");
  const authHeader = req.body.token; 
  //is saved 
  // console.log("Authgead is " + authHeader);
  
  console.log("Pointer is " + req.body.pointer);
  // let user_id = req.body.user_id;
  const ptr = req.body.pointer;
  // console.log(ptr);
  // res.send(inov)
  let universal_threads;
  try {
    universal_threads = await Thread.find({is_verified: true}).sort({ 'createdAt': -1 }).skip(ptr-1).limit(20);
  } catch (error) {
    console.log("Error while fetchng universal threads ");
    console.log(error);
  }
  
  // console.log(user_id);

  try {
    if (!authHeader) {
      //   const user_id = req.user._id;
      // const universal_threads = await Thread.find({ is_verified: true }).sort({ 'createdAt': -1 }).skip(ptr - 1).limit(5);
      //   const user_specific_threads = await Thread.find({posted_by:user_id});
      // console.log(ptr);
      // console.log(universal_threads);
      return res.status(200).send({ universal_threads });
    }
    else {
      const token = authHeader.split(' ')[1];
      jwt.verify(token,process.env.JWT_SECRET,async (err,user)=>{
        if(err){
          return res.status(200).send({ universal_threads });
          console.log({universal_threads});
        }
        console.log("fist point ");
        console.log(user);
        // const email = user.email;
        const uid = user._id;
        console.log("User exists, saved threads: ")
      let threads_saved;
      // console.log(user);
        let udata =  await User.findById(uid);
        // const ut = User.find({email: email}, (err,dt)=>{
        //   if(err){
        //     return res.status(200).send({universal_threads});
        //   }
        
        if(!udata){
          udata = await User.findById(uid); 
        }
        // console.log(uid);
        try {
          threads_saved = udata.threads_saved;  
        } catch (error) {
          console.log("Some problem in threads  saved ")
        }
        
        let saved_threads = [];
        try {
          threads_saved.forEach((thread)=>{
            // console.log("check "+thread.id);
            saved_threads.push(thread.id);
          })
        } catch (error) {
          console.log(error);
        }

        // console.log(saved_threads);
        // console.log("callabck");
        // console.log("threads saved are ");
        
        
        try {
          //if no threads saved then return 
          // console.log(universal_threads);
          // console.log(ptr);
          universal_threads.forEach((thread)=>{
            //to check if the array contains this thread
            if( saved_threads.indexOf(thread.id)!==-1){
              console.log("reached here");
              thread.is_saved = true;
              console.log(thread);
            }
            // console.log(thread);
          });

        return res.status(200).send({universal_threads});
        // console.log("case 2");
        // console.log({universal_threads});
        } catch (error) {
          console.log(error);
          console.log("case 3");
        return res.status(200).send({universal_threads});
        // console.log({universal_threads});
        }
        
        // console.log(ptr);
        // console.log(universal_threads);
      })
      
    }
  }
  catch (err) {
    console.log(err);

    return res.status(200).send(err);
  }
}

const fetch_false_threads = async (req, res) => {
  console.log("Send threads to admin to approve/dis");
  try {
    //   const user_id = req.user._id;
    const universal_threads_false = await Thread.find({ is_verified: false }).sort({ date: -1 });
    //   const user_specific_threads = await Thread.find({posted_by:user_id});
    res.status(200).send(universal_threads_false);
  }

  catch (err) {
    res.status(200).send(err);
  }
}

const fetch_own_threads = async (req, res) => {
  console.log("came to fetch own threads");
  try {
    const user_id = req.user._id;
    const user = await User.findById(user_id);
    const user_specific_threads = await Thread.find({ posted_by: user_id, is_verified: true }).sort({ date: -1 });
    const saved_threads = user.threads_saved;
    console.log(saved_threads)
    res.status(200).send({ user_specific_threads, saved_threads })
  }

  catch (err) {
    res.status(200).send(err);
  }
}

const specific_thread = async (req, res) => {
  console.log("aa gayaaa");
  const { email, thread_id } = req.body;
  try {
    if (email) {
      const thread = await Thread.findById(thread_id);
      if (!thread)
        res.status(200).send("404");
      else {
        const user = await User.findOne({ email });
        const saved_status = user.threads_saved.includes(thread_id);

        res.status(200).send({ thread, saved_status });
      }
    }

    else {
      const thread = await Thread.findById(thread_id);
      if (!thread)
        res.status(200).send("404");
      else {
        res.status(200).send({ thread, saved_status: false });
      }
    }
  }
  catch (err) {
    res.status(200).send("404");
    console.log(err);
  }
}
module.exports = { fetch_live_threads, fetch_own_threads, fetch_false_threads, specific_thread }