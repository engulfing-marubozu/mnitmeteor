const { Product } = require("../Models");
const cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET
  });


//  const  postLoad = async (req, res)=>{
//      try{
        
//     const data = await  Product.find({isShown: true})
//           console.log(data);
//           data.map(iterator =>{ console.log(iterator.cloudlink)});
//           res.status(200).send("good!")
//        }
//      catch(err){

//          console.log(err);
//          res.status(200).send(err);
//      }
     
// }


const  products = async (req, res)=>{
    try{  
     const image_array = req.body.images;
     const title = req.body.details.adTtitle;
     const description= req.body.details.description;
     const category = req.body.details.categories;     

     const  image_cloud_link =await Promise.all( image_array.map(async (image)=>
     {
      const upload_response = await cloudinary.uploader.upload(image, {
        upload_preset: 'dev_setups',
      });
      console.log("deepak");
      return (upload_response.url);
     } ))
      
     console.log(image_cloud_link);
   
     const Product_save = new Product({
      title : title,
            category: category,
            description: description,
            images : image_cloud_link
     })
      try{
        Product_save.save()
        res.status(200).send("product saved in database");
      }
      catch(err)
      {
        console.log(err);
      }}
    catch(err){
        console.log(err);
        res.status(200).send(err);
    }
    
}

module.exports = { products};