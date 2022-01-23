const { Product, User } = require("../Models");

// this function will take jwt token and product _id and will update the user in product and product in user  after he/she interested any post(many to many in mongoose)
const interested_update= async (req, res)=>
{  console.log("deepak_very_big_madarchod");
       console.log(req.user._id);
       console.log(req.body.productId);
       const user_id = req.user._id;
       const product_id = req.body.productId;
       const is_interested = req.body.isInterested;
       let updated_user ;
       console.log(is_interested);
       if(is_interested)
              {try{
                await Product.findOneAndUpdate({_id : product_id , is_verified : true}, { $addToSet : {interested_users : user_id}});
                updated_user =  await User.findByIdAndUpdate( user_id, {$addToSet :  {interested : product_id}} , {new : true} );
               }
            catch(err){
                 console.log(err);
               }
          }
          else{
                 console.log("heya .. came to delete");
               try{
                  await Product.findOneAndUpdate({_id : product_id , is_verified : true} , {$pull  : {interested_users : user_id}});
                  updated_user = await User.findByIdAndUpdate( user_id, {$pull : {interested : product_id}}, {new : true});
               }
               catch(err)
               {
                     console.log(err);
               }
          }
          console.log(updated_user);
          res.status(200).json({updatedUser : updated_user.interested});

}



// always try to use async await in mongoose queries
// this function will fetch the user id from the jwt token and will will return all the interested of any user
const send_interested_products = async (req, res) => {
    console.log("deepak madarchod");
    console.log(req.user._id);
    user_id = req.user._id;
    const user = await User.findById(user_id);
    console.log(user);
    const interested_id = user.interested;
    console.log(interested_id);
      const data =await Promise.all (interested_id.map(async (product_id)=>{
             const datee = await Product.findById(product_id);
             return datee;
      }));
    console.log(data);
    res.status(200).send(data);
  };
  module.exports = { send_interested_products, interested_update};
  