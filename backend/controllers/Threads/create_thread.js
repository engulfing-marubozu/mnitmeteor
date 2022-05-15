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
    console.log(req.body);
    const user_id = req.user._id;

    //  const title = req.body.title;
    //  const description = req.body.description;

    const { title, description, document } = req.body;
    const user = await User.findById(req.user._id);
    const prof_pic = user.profile_pic;
    console.log("Users pic " + prof_pic);
    if (document === "")
      console.log(title)
    let document_upload_response = null;
    if (document !== "") {
      console.log("jfgvejf")
      console.log(document)
      const {binary} = document;
      document_upload_response = await cloudinary.v2.uploader.upload(binary);
      document_upload_response = document_upload_response.secure_url;
    }
    console.log(document_upload_response)

    const mnit_id = user.email.split('@')[0];
    const object = { link: document_upload_response, name: document.name }
    const Thread_save = new Thread({
      posted_by: user_id,
      users_mnit_id: mnit_id,
      title: title,
      description: description,
      document: object ,
      is_verified: false,
      profile_pic: prof_pic,
      is_saved: false,
    });
  
    // console.log(Thread_save);
    try {
      console.log("maza aa gaya")
      const saved_thread = await Thread_save.save();
      console.log("maza aa gaya")
       console.log(saved_thread);
      console.log(saved_thread.posted_by);
      console.log(saved_thread._id);
      console.log("Saved unverified thread");
      return res.status(200).send("saved");
    } catch (err) {
      return res.status(404).send("not saved");
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};
const handle_admin_thread = async (req, res) => {
  const date = new Date();
  console.log("Admin response is here! ");
  // console.log(req.body);
  approval = req.body.to_approve;
  id = req.body._id;
  refID = req.body.posted_by;
  const {title} =await  Thread.findById(id);
  if (approval) {
    //set verified to true
    Thread.findOneAndUpdate({ _id: id }, { is_verified: true }, async function (err) {
      console.log(err);
      const x = await User.findByIdAndUpdate(refID, {
        $addToSet: {
          threads_posted: id,
        },
      });
      const xy = await User.findByIdAndUpdate(req.body.posted_by, {
        $addToSet: {
          notification: {
            status: 1,
            content: `Dear user, your thread "${title}" has been approved. We wish you find a great team.`,
            createdAt: date,
          },
        },
      });
      console.log(xy);
      res
        .status(200)
        .send(
          "product approved"
        );
    });
  } else {
    console.log("NF");
    // console.log(id);
    // findByIdAndDelete(id)
    Thread.findByIdAndDelete(id, function (res) {
      console.log(res);
    });
    await User.findByIdAndUpdate(req.body.posted_by, {
      $addToSet: {
        notification: {
          status: -1,
          content: `Dear user, your thread "${title}" has been declined as it did not meet our policy. PLease look over it and try again`,
          createdAt: date,
        },
      },
    });
    res.send("product Ad request declined");
  }
};
module.exports = { new_thread, handle_admin_thread };
