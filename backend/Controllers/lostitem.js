const { LostItem } = require("../Models");

const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const SendLost = async (req,res) => {
    //error handling krni har jagah abhi 
    console.log("reached here \n");
    console.log(req);
    title = req.body.title;
    description = req.body.description;
    category =  req.body.categories;
    console.log(req.body.title);
    console.log(req.body.description);
    console.log(req.body.categories);
    imgs = req.body.imgs;
    refID = req.body.posted_by;
    // console.log();
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
            posted_by: refID
            //person info bhi honi chahiye 
        });
        try {
          const saveLostItem = await newLostItem.save();
          console.log(saveLostItem);
        } catch (error) {
          console.log(error);
        }
        
    }
    catch(err){
        console.log(err);
    }   
    
    
}

module.exports = {SendLost};
