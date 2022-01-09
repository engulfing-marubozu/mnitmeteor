const { Product } = require("../Models");

 const  postLoad = async (req, res)=>{
     try{
      await Product.find({isShown: true}).then((res)=>{
          console.log(res);
          res.map(iterator =>{
                console.log(iterator.cloudlink)
          })
      })
    }
     catch(err){
         console.log(err);
     }
      res.status(200).send("good!")
}


module.exports = {postLoad};
