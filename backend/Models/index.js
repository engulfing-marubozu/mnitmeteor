const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
          type: String
    },
     password :{
          type: String
     }
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
    }
    // img: {data: Buffer, contentType: String},
},{timestamps: true});


//make models
const Product = mongoose.model("Product", productsSchema);
const User = mongoose.model("User", userSchema);

module.exports= {User, Product};