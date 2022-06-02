const { Product, User } = require("../Models");
const jwt = require("jsonwebtoken");

const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

//saves products into database that is uploaded by the user with a default verified value to false
const products = async (req, res) => {
  try {

  //  console.log("came to save to database");
    
    const image_array = req.body.details.images;
    const title = req.body.details.adTitle;
    const description = req.body.details.description;
    const category = req.body.details.categories;
    const user_id = req.user._id;
    // console.log(user_id);
    // console.log(req.user);
    // console.log(image_array);
    const image_cloud_link = await Promise.all(
      image_array.map(async (image) => {
        const image_upload_response = await cloudinary.v2.uploader.upload(
          image.data_url,
          {quality: 10,
          fetch_format : "webp"}
        );
        const thumbnail_upload_response = await cloudinary.v2.uploader.upload(
          image.data_url, {
          width: 250, height: 150,
          crop: "thumb",
          quality: "auto"
       }
        )
        return { image: image_upload_response.url, thumbnail: thumbnail_upload_response.url };
      })
    );

    //console.log(image_cloud_link);

    const Product_save = new Product({
      title: title,
      category: category,
      description: description,
      posted_by: user_id,
      images: image_cloud_link,
    });
    try {
      const saved_product = await Product_save.save();
    //  console.log(saved_product);
      // await User.findByIdAndUpdate(user_id, {
      //   $addToSet: { products_posted: saved_product._id },
      // });

      res
        .status(200)
        .send(
          "unverified product saved in database with and user's orders updated"
        );
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
    res.status(200).send(err);
  }
};

//fetches posts from database and sends to admin for approval
const admin_postLoad = async (req, res) => {
  try {
    const data = await Product.find({ is_verified: false });
    //   console.log(data);
    // data.map((iterator) => {
    //    console.log(iterator.images);
    // });
    res.status(200).send({ data: data });
  } catch (err) {
    console.log("tyuy");
    console.log(err);
    res.status(404).send(err);
  }
};

// make changes to database according to the approval/disappproval by the admin
const admin_response = async (req, res) => {
 // console.log("reached api");
  const { id, response } = req.body;
  const data = await Product.findOne({ _id: id });
  let user_id; let product_title;
  try {
    user_id = await User.findById(data.posted_by);  
    product_title = data.title;

  } catch (error) {
    return res.status(403).send("Please refresh the page, and try logging again.");
  }
  // user_id = await User.findById(data.posted_by);
  
  try {
    if (response) {
   //   console.log("came to save in database");
      await Product.findOneAndUpdate({ _id: id }, { is_verified: true });
      await User.findByIdAndUpdate(user_id, {
        $addToSet: { products_posted: id },
      });
      const date = new Date();
      await User.findByIdAndUpdate(user_id, {
        $addToSet: {
          notification: {
            status: 1,
            content: `Dear user, your Ad request for the product ${product_title} has been approved. We will notify you once we get any interested buyer for your item.`,
            createdAt: date,
          },
        },
      });
      res.status(200).send("product approved");
    } else {
      const date = new Date();
      await User.findByIdAndUpdate(user_id, {
        $addToSet: {
          notification: {
            status: -1,
            content: `Dear user, your Ad request for the product ${product_title} has been declined as it does not meet our policy.`,
            createdAt: date,
          },
        },
      });
      data.remove().then(() => console.log("product Ad request declined"));

      res.status(200).send("product Ad request declined");
    }
  } catch (err) {
    console.log(err);
    res.status(200).send(err);
  }
};

//fetch data to show live data
const fetch_livedata = async (req, res) => {
  // console.log(req.body.email);
  //  console.log("reached to pick up data");

  try {
    const authHeader = req.headers.authorization;
    console.log("home page ");
   // console.log("139 " + authHeader);
    // console.log(process.env.CLOUDINARY_SECRET);
    // console.log(authHeader.split(' ')[1]);

    const category = req.body.category;
    let fetch_post;

    const pointer = req.body.pointer;

    if (category === "recommendation") {

      //    fetch_post = await Product.where("is_verified").equals(true).sort({createdAt:-1});

      fetch_post = await Product.find({ is_verified: true }).sort({ createdAt: -1 }).skip(pointer - 1).limit(20);  // **first it will sort in order of date and then apply skip and limit
      // console.log(fetch_post);
      //  res.status(200).send(fetch_post);
    } else {

      // fetch_post = await Product.where("category")
      //   .equals(category)
      //   .where("is_verified")
      //   .equals(true);

      fetch_post = await Product.find({ is_verified: true, category: category }).sort({ createdAt: -1 }).skip(pointer - 1).limit(20);
      //  console.log(fetch_post);
      //    res.status(200).send(fetch_post);
    }
    let token;

    if (authHeader) token = authHeader.split(' ')[1];
    else return res.status(200).send(fetch_post);
    console.log("step 1");
    // let verified = 0;
    jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
      if (err) {
        //dont display hearts 

    //  console.log("user inactive and posts "+fetch_post);
        return res.status(200).send(fetch_post);
        //token se user kaise extract krna 
      }

   //   console.log(user);
      const id = user._id;
      // console.log()
      console.log("step 2");
      let favourites;
      const userd = await User.findById(id);
      favourites = userd.favourites;
    //  console.log("182 " + favourites);
   //   console.log("184 " + fetch_post);

      fetch_post.forEach((post) => {

  //      console.log("187 " + post);
        if (favourites.indexOf(post._id) !== -1) {
          console.log("Blued ");
          post.blue_heart = true;

        }
        //  console.log(post);
      });
      //     console.log(fetch_post);
      //console.log("user active and posts "+fetch_post);
      return res.status(200).send(fetch_post);
    });


  } catch (err) {
    console.log(err);
  }
};

// sends the data of a unique card with is like value of true or false to show on the bigger page when the user clicks on ant specific post

const send_specific_product = async (req, res) => {
 // console.log(req.body);
  try {
    const { email, product_id } = req.body;
    const product = await Product.findById(product_id);
    if (email) {
      const user = await User.findOne({ email });
    //  console.log(user);

      if (user.favourites.indexOf(product_id) !== -1) product.blue_heart = true;

      if (user.interested.indexOf(product_id) !== -1)
        product.show_interested = true;
    }
  //  console.log(product);
    res.status(200).send(product);
  } catch (err) {
    res.status(200).send("404");
    console.log(err);
  }
};

module.exports = {
  products,
  admin_postLoad,
  admin_response,
  fetch_livedata,
  send_specific_product,
};
