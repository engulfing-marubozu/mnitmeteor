const { LostItem, User } = require("../Models");

const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});
//postman url to test 
const HandleAdmin = async (req, res) => {
  console.log("Admin bhai approve kro ");
  console.log(req.body);

  approval = req.body.to_approve;
  id = req.body._id;
  refID = req.body.posted_by;
  const name = req.body.name;
  const category = req.body.category;
  const date = new Date();
  if (approval) {
    console.log("approve ho gaya ");
    LostItem.findOneAndUpdate(
      { _id: id },
      { is_verified: true },
      function (err) {
        console.log(err);
      }
    );
    await User.findByIdAndUpdate(refID, {
      $addToSet: { lf_items_posted: id },
    });
    const xy=  await User.findByIdAndUpdate(req.body.posted_by, {
      $addToSet: {
        notification: {
          status: 1,
          content: `Dear User, we have approved your ${category} item "${name}". May you find it soon`,
          createdAt :date,
        },
      },
    });
    console.log("Updated user database");
    res.send("product approved");
    // console.log(saveLostItem);
  } else {
    console.log(id);
    console.log("This item should be deleted");
    await LostItem.findOneAndDelete({ _id: id });
    const xy=  await User.findByIdAndUpdate(req.body.posted_by, {
      $addToSet: {
        notification: {
          status: -1,
          content: `Hey, unfortunately, we couldn't approve your ${category} item "${name}" due to our policy.`,
          createdAt :date,
        },
      },
    });
    res.send("product Ad request declined");
  }
};
const SendLost = async (req, res) => {
  //error handling krni har jagah abhi
  console.log("reached here body \n");
  // console.log(req.body);
  title = req.body.title;
  description = req.body.description;
  category = req.body.categories;
  console.log(req.body.title);
  console.log(req.body.description);
  console.log(req.body.categories);
  email = req.body.email;
  imgs = req.body.imgs;
  refID = req.body.posted_by;
  console.log(email);
  console.log("reached cloudinary part");
  image_cloud_links = null;
  try {
    if (imgs.length > 0) {
      const image_cloud_links = await Promise.all(
        imgs.map(async (image) => {
          const image_upload_response = await cloudinary.v2.uploader.upload(
            image.data_url,
            function (error, result) {
              console.log(error);
            }
          );

          return { image: image_upload_response.url };
        })
      );

      console.log(image_cloud_links);
    }

    // console.log(image_cloud_links);
    // console.log(imgs);
    // database save a lost iem product
    const newLostItem = new LostItem({
      name: title,
      description: description,
      category: category,
      imgs: image_cloud_links,
      posted_by: refID,
      email: email,
      is_verified: false,
      //person info bhi honi chahiye
    });
    try {
      const saveLostItem = await newLostItem.save();
      await User.findByIdAndUpdate(refID, {
        $addToSet: { lf_items_posted: saveLostItem._id },
      });
      console.log("Updated user database");
      return res.status(200).send("saved");
      // console.log(saveLostItem);
    } catch (error) {
      return res.status(404).send("Error saving");
      console.log(error);
    }
  } catch (err) {
    return console.log(err);
  }
};
const LostCheck = async (req, res) => {
  title = req.body.title;
  description = req.body.description;
  category = req.body.categories;
  const authHeader = req.headers.authorization;
  console.log("Lost ");
  // console.log(req.headers.authorization);
  const user = authHeader.split(' ')[1];
  let prof_pic;
  console.log("User is ");
  console.log(user);
  try {
    
    prof_pic = await User.findById(user._id);
    prof_pic = prof_pic.profile_pic;
    console.log("1 "+prof_pic);
  } catch (error) {
    console.log(error);
  }

  console.log(req.body.title);
  console.log(req.body.description);
  console.log(req.body.categories);
  console.log()
  email = req.body.email;
  imgs = req.body.imgs;
  refID = req.body.posted_by;
  console.log(email);
  try {
    prof_pic = await User.findOne({email: email});
    prof_pic = prof_pic.profile_pic
  } catch (error) {
    console.log(error);
  }
  image_cloud_links = [];
  console.log("reached cloudinary part portal to db");
  try {
    if (imgs.length > 0) {
      image_cloud_links = await Promise.all(
        imgs.map(async (image) => {
          const image_upload_response = await cloudinary.v2.uploader.upload(
            image.data_url,
            function (error, result) {
              console.log(error);
              // not printing result right now
            }
          );

          return { image: image_upload_response.url };
        })
      );

      console.log(image_cloud_links);
      // console.log(image_cloud_links);
      // console.log(imgs);
      // database save a lost iem product
    }

    const newLostItem = new LostItem({
      name: title,
      description: description,
      category: category,
      imgs: image_cloud_links,
      posted_by: refID,
      email: email,
      is_verified: false,
      profile_pic: prof_pic,
      //person info bhi honi chahiye
    });
    try {
      const saveLostItem = await newLostItem.save((err,response)=>{
        console.log(response);
      });
      // const saveLostItem = 
      // await User.findByIdAndUpdate(refID, {
      //   $addToSet: {lf_items_posted: saveLostItem._id },
      // });
      // console.log("Updated user database");
      // console.log(saveLostItem);
    } catch (error) {
      console.log(error);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { SendLost, LostCheck, HandleAdmin };
