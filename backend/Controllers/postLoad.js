const { Product } = require("../Models");
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

//saves products into database that is uploaded by the user with a default verified value to false
const products = async (req, res) => {
  try{
    const image_array = req.body.images;
    const title = req.body.details.adTitle;
    const description = req.body.details.description;
    const category = req.body.details.categories;

    const image_cloud_link = await Promise.all(
      image_array.map(async (image) => {
        const upload_response = await cloudinary.uploader.upload(image, {
          upload_preset: "dev_setups",
        });
        console.log("deepak");
        return upload_response.url;
      })
    );

    console.log(image_cloud_link);

    const Product_save = new Product({
      title: title,
      category: category,
      description: description,
      images: image_cloud_link,
    });
    try {
      Product_save.save();
      res.status(200).send("product saved in database");
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
    console.log(data);
    data.map((iterator) => {
      console.log(iterator.images);
    });
    res.status(200).send({ data: data });
  } catch (err) {
    console.log(err);
    res.status(200).send(err);
  }
};

// make changes to database according to the approval/disappproval by the admin
const admin_response = async (req, res) => {
   console.log("reached api")
   const {id , response} = req.body ;
  try {
    
     if (response)
     {
          await Product.findOneAndUpdate({ _id : id }, {is_verified: true});
          res.status(200).send("product approved");
     }
     else
     {   const data = await Product.findOne({ _id : id });
         data.remove().then(()=>console.log("product Ad request declined "));
         res.status(200).send("product Ad request declined");
     }
   
  } catch (err) {
    console.log(err);
    res.status(200).send(err);
  }
};

module.exports = { products, admin_postLoad, admin_response };
