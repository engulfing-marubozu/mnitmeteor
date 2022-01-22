const { Product ,User} = require("../Models");

const send_published_Ads= async(req, res)=>{
     console.log("deepak madarchod");
       console.log(req.user._id);
       user_id = req.user._id;
       const user =await  User.findById(user_id);
       console.log(user);
       const posted_products_id = user.products_posted;
  console.log(posted_products_id);
       const data =await Promise.all (posted_products_id.map(async (product_id)=>{
              const datee = await Product.findById(product_id);
              return datee;
       }));
     console.log(data);
     res.status(200).send(data);
    
}
module.exports = { send_published_Ads };
