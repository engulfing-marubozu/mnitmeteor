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

// if any user want to delete his Ads/posted products

const delete_published_Ads = async (req, res)=>
{
    try{     
          user_id = req.user._id;
          product_id = req.body.productId;

          await  Product.findByIdAndDelete(product_id);
          updated_user = await User.findByIdAndUpdate( user_id, {$pull : {products_posted : product_id}}, {new : true});
    }
    catch(err)
    {
      console.log(err);
    }

    res.status(200).send(updated_user.products_posted);

}
module.exports = { send_published_Ads, delete_published_Ads  };
