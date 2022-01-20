const mongoose = require("mongoose");
const Schema = require('mongoose').Schema

const userSchema = new mongoose.Schema({
    email:{
          type: String
    },
     password :{
          type: String
     },
     products_posted : {
          type :  [{ type: Schema.Types.ObjectId, ref: 'Product' }]
     },
     favourites :{
         type :  [{ type: Schema.Types.ObjectId, ref: 'Product' }]
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
    },
    likes : {
        type :  [{ type: Schema.Types.ObjectId, ref: 'User' }]
   },

},{timestamps: true});


//make models
const Product = mongoose.model("Product", productsSchema);
const User = mongoose.model("User", userSchema);

module.exports= {User, Product};