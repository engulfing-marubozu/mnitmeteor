const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
          type: String
    },
     password :{
          type: String
     }
    //  products_posted : {
    //       type :  [{ type: Schema.Types.ObjectId, ref: 'Product' }]
    //  }
}, {timestamps: true});

	
const productsSchema = new mongoose.Schema({
    title : {
        type: String
    },
    category  : {
        type : String
    },
    description: {
        type: String
    },
    images :{
        type: []
    },
    is_verified:{
        type : Boolean,
        default : false
    },
//     likes : {
//         type :  [{ type: Schema.Types.ObjectId, ref: 'User' }]
//    }
    // img: {data: Buffer, contentType: String},
},{timestamps: true});


//make models
const Product = mongoose.model("Product", productsSchema);
const User = mongoose.model("User", userSchema);

module.exports= {User, Product};