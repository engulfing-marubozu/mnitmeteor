const { Product, User } = require("../Models");
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
    const user_id = req.user._id;
      // console.log(user_id);
      // console.log(req.user);
    const image_cloud_link = await Promise.all(
      image_array.map(async (image) => {
        const upload_response = await cloudinary.uploader.upload(image.data_url, {
          upload_preset: "dev_setups",
        });
      
        return upload_response.url;
      })
    );

    console.log(image_cloud_link);

    const Product_save = new Product({
      title: title,
      category: category,
      description: description,
      posted_by: user_id,
      images: image_cloud_link,
    });
    try {
      const saved_product = await Product_save.save();
      console.log(saved_product);
      await User.findByIdAndUpdate( user_id, {$addToSet :  { products_posted : saved_product._id }} );
      res.status(200).send("unverified product saved in database with and user's orders updated");
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


 //fetch data to show live data
const fetch_livedata = async (req, res) => {
  // console.log(req.body.email);
   console.log("reached to pick up data");
    try{

        const email = req.body.email;
        const category = req.body.category;
        let fetch_post;
        console.log(category);
        if(category === "recommendation")
        {  console.log("hello");
              fetch_post = await Product
                                       .where("is_verified")
                                       .equals(true);
            
            console.log(fetch_post);
          //  res.status(200).send(fetch_post);                          
        }
        else{
          console.log("hemllo");
         fetch_post =await Product
                                  .where("category")
                                  .equals(category)
                                  .where("is_verified")
                                  .equals(true);
              console.log(fetch_post);                    
          //    res.status(200).send(fetch_post);                    
        }   
        
        if(email)
        {
           const {favourites} = await User.findOne({email : email});
           console.log(favourites);
           
           fetch_post.forEach((post)=>{
             console.log(post._id);
           if(favourites.indexOf( post._id ) !== -1)
            {
                  post.blue_heart = true;
            }
          console.log(post);
           })
           console.log(fetch_post);
           res.status(200).send(fetch_post);
        }
        else
        res.status(200).send(fetch_post);
        
    }
  catch (err) {
   console.log(err);
   res.status(200).send(err);
 }

};




module.exports = { products, admin_postLoad, admin_response , fetch_livedata };
