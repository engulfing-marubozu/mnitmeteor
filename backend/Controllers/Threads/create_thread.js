const {Thread, User} = require("../../Models")
const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});
// recieves data as mnit_id,title, description

const new_thread = async(req, res)=>{
    try{
        console.log("aa gaya");
       const user_id = req.user._id;
       const { title, description, document} = req.body;
        const user = await User.findById(req.user._id);
   //  console.log(document);
     const document_upload_response = await cloudinary.v2.uploader.upload(
       document,
      );
    
       const mnit_id = user.email.slice(0,11)
       const Thread_save = new Thread({
       posted_by : user_id,
       users_mnit_id: mnit_id,
       title: title,
       description: description,
       document : document_upload_response.secure_url
      });

      try{
          const saved_thread = await Thread_save.save();
          console.log(saved_thread);
          console.log(saved_thread.posted_by);
          console.log(saved_thread._id)
       const x=  await User.findByIdAndUpdate(saved_thread.posted_by, {
            $addToSet: {
                threads_posted : saved_thread._id },
          });
        
                    res
            .status(200)
            .send(
              "unverified thread saved in database with and user's thread updated"
            );
      }
      catch(err){
          console.log(err);
      }
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {new_thread};