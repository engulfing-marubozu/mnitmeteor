const { Thread, User } = require("../../Models");
const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});
// recieves data as mnit_id,title, description
const new_thread = async (req, res) => {
  // const document = '';
  console.log("You have clicked the submit button, it sav in db");
  try {
    console.log("aa gaya");
    // console.log(req.body);
    const user_id = req.user._id;
    //  const title = req.body.title;
    //  const description = req.body.description;

    const { title, description, document } = req.body;
    const user = await User.findById(req.user._id);
    if (document === "")
      console.log(title)
   let  document_upload_response = null;
    if (document !== "") {
      console.log("jfgvejf")
      document_upload_response = await cloudinary.v2.uploader.upload(document);
      document_upload_response = document_upload_response.secure_url;
    }

    const mnit_id = user.email.slice(0, 11);
    const Thread_save = new Thread({
      posted_by: user_id,
      users_mnit_id: mnit_id,
      title: title,
      description: description,
      // document: document_upload_response,
      is_verified: false,
    });
    // console.log(Thread_save);
    try {
      const saved_thread = await Thread_save.save();
      // console.log(saved_thread);
      console.log(saved_thread.posted_by);
      console.log(saved_thread._id);
      console.log("Saved unverified thread");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};
const handle_admin_thread = async (req, res) => {
  console.log("Admin response is here! ");
  // console.log(req.body);
  approval = req.body.to_approve;
  id = req.body._id;
  refID = req.body.posted_by;
  if (approval) {
    //set verified to true
    Thread.findOneAndUpdate({ _id: id }, { is_verified: true }, function (err) {
      console.log(err);
      const x = User.findByIdAndUpdate(refID, {
        $addToSet: {
          threads_posted: id,
        },
      });

      res
        .status(200)
        .send(
          "Verified thread saved in database with and user's thread updated"
        );
    });
  } else {
    Thread.findOneAndDelete({ _id: id });
  }
};
module.exports = { new_thread, handle_admin_thread };
