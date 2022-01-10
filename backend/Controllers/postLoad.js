const { Product } = require("../Models");

 const  postLoad = async (req, res)=>{
     try{
    const data = await  Product.find({isShown: true})
          console.log(data);
          data.map(iterator =>{ console.log(iterator.cloudlink)});
          res.status(200).send("good!")
       }
     catch(err){
         console.log(err);
         res.status(400).send(err);
     }
     
}


module.exports = {postLoad};
