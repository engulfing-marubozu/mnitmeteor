const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{

    },
     password :{

     }
}, {timestamps: true});

// const userSchema = new mongoose.Schema({
//     email:{

//     },
//      password :{

//      }
// }, {timestamps: true});


//make models
//const Product = mongoose.model('Product', productsSchema);
const User = mongoose.model("User", userSchema);
module.exports= {User};