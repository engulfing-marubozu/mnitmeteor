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
          type :  [{ type: Schema.Types.ObjectId, ref: 'Product' }],
          default:[]
     },
     favourites :{
         type :  [{ type: Schema.Types.ObjectId, ref: 'Product' }],
         default: []
     },
     interested : {
         type : [ {type: Schema.Types.ObjectId, ref: 'Product' }],
         default:[]
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
    posted_by :{
       type: Schema.Types.ObjectId,
       ref: 'User' ,
    },
    images :{
        type: []
    },
    is_verified:{
        type : Boolean,
        default : false
    },
    likes : {
        type :  [{ type: Schema.Types.ObjectId, ref: 'User' }],
        default:[]
   },
   blue_heart : {
       type : Boolean,
       default : false
   }

},{timestamps: true});



const Product = mongoose.model("Product", productsSchema);
const User = mongoose.model("User", userSchema);

module.exports= {User, Product};