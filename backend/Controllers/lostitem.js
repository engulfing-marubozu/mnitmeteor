const { LostItem,User } = require("../Models");

const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});
const HandleAdmin = async(req,res) => {
  console.log("Admin bhai approve kro ");
  approval = req.body.is_verified;
  id = req.body._id;
  if(approval=="True"){
    console.log("approve ho gaya ");
    LostItem.findOneAndUpdate({_id:id}, {is_verified:true},function(err){
      console.log(err);
    })
  }else{
    LostItem.findOneAndDelete({_id:id});
  }
}
const SendLost = async (req,res) => {
    //error handling krni har jagah abhi 
    console.log("reached here body \n");
    console.log(req.body);
    title = req.body.title;
    description = req.body.description;
    category =  req.body.categories;
    console.log(req.body.title);
    console.log(req.body.description);
    console.log(req.body.categories);
    email = req.body.email;
    imgs = req.body.imgs;
    refID = req.body.posted_by;
    console.log(email);
    console.log("reached cloudinary part");
    image_cloud_links = "";
    try {
      if(imgs.length>0){
        const image_cloud_links = await Promise.all(
          imgs.map(async (image) => {
            const image_upload_response = await cloudinary.v2.uploader.upload(
              image.data_url,function(error,result){
                  console.log(error)
              }
            );
            
            return {image : image_upload_response.url} ;
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
            $addToSet: {lf_items_posted: saveLostItem._id },
          });
          console.log("Updated user database");
          // console.log(saveLostItem);
        } catch (error) {
          console.log(error);
        }
        
    }
    catch(err){
        console.log(err);
    }   
    
    
}
const LostCheck = async(req,res) => {
    title = req.body.title;
    description = req.body.description;
    category =  req.body.categories;
    console.log(req.body.title);
    console.log(req.body.description);
    console.log(req.body.categories);
    email = req.body.email;
    imgs = req.body.imgs;
    refID = req.body.posted_by;
    console.log(email);
    console.log("reached cloudinary part");
    try {
        const image_cloud_links = await Promise.all(
            imgs.map(async (image) => {
              const image_upload_response = await cloudinary.v2.uploader.upload(
                image.data_url,function(error,result){
                    console.log(error)
                    // not printing result right now
                }
              );
              
              return {image : image_upload_response.url} ;
            })
          );

        console.log(image_cloud_links);
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
          // await User.findByIdAndUpdate(refID, {
          //   $addToSet: {lf_items_posted: saveLostItem._id },
          // });
          // console.log("Updated user database");
          // console.log(saveLostItem);
        } catch (error) {
          console.log(error);
        }
        
    }
    catch(err){
        console.log(err);
    }   
    
}

module.exports = {SendLost,LostCheck,HandleAdmin};