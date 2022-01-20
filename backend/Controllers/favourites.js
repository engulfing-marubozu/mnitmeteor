const { Product ,User} = require("../Models");


// this function will take jwt token and product _id and will update the user in product and product in user (many to many in mongoose)
const favourites_update= async (req, res)=>
{
       console.log(req.user._id);
       console.log(req.body.product_id);
       const user_id = req.user._id;
       const product_id = req.body.product_id;
  try{
       await Product.findOneAndUpdate({_id : product_id , is_verified : true}, { $addToSet : {likes : user_id} });
       await User.findOneAndUpdate({_id : user_id}, {$addToSet :  {favourites : product_id}} );
     }
  catch(err){
      console.log(err);
  }
       res.status(200).send("ok");
}


// always try to use async await in mongoose queries
// this function will return all the favourites of any user and will fetch the user id from the jwt token
const send_favourites= async(req, res)=>
{     
       console.log(req.user._id);
       user_id = req.user._id;
       const user =await  User.findById(user_id);
       console.log(user);
       const favourites_id = user.favourites;
  console.log(favourites_id);
       const data =await Promise.all (favourites_id.map(async (favourite_id)=>{
              const datee = await Product.findById(favourite_id);
              return datee;
       }));
     console.log(data);
     res.status(200).send(data);
    
}
module.exports = { send_favourites, favourites_update };
