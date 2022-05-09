const { User } = require("../Models");
require("dotenv").config();
const bcrypt = require("bcrypt");
const sgMail = require("@sendgrid/mail");
// const { parse } = require("path/posix");
const {authorisation} = require("../index")
const jwt = require("jsonwebtoken");
const lib = require("../Middlewares/counter.js");

sgMail.setApiKey(
 process.env.SENDGRID_API_KEY
);

saltRounds = 8;
// var number;
// console.log(value);
var value;
async function check(){
 
    value = await lib.value();
    console.log("Lib value is "+value);
// console.log(t);
    
}
// console.log(lib.value().then());
console.log("Lib value is "+value);
// console.log(value);

///    SIGNUP FUNCTION
const signUp = async (req, res) => {               
  console.log("came to sign up");
  console.log("hellio");
  // console.log(req.body);
  try {
    console.log(req.body.email);
    console.log("yaar2");
    console.log(Object.keys(req.body).length);
    let email = req.body.email.toLowerCase();
    if (Object.keys(req.body).length !== 1) {
      //to store the incoming email and pass, and validate them
      console.log("reached api");
      let password = req.body.password;
      // var name = req.body.name;
      console.log("yaar");
      // check();
      value = await lib.value();
      console.log("value is "+value);
      const loadavatar = `https://freekiimages.herokuapp.com/img_load.png?value=${value}`;
      
      // genTwoPoke = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${value}.svg`
      // genTwoPoke = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${value}.png`;

      bcrypt.hash(password, saltRounds, function (err, hash) {
        const user = new User({
          email: email,
          password: hash,
          profile_pic: loadavatar
        });
        user.save(function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log("saved");
            res.status(200).send("user registered");
          }
        });
      });
    } else {
      console.log("phas gaya");
      const findUser = await User.findOne({ email });
      if (findUser) return res.status(200).send("already registered");

       otp = Math.floor(Math.random() * 1000 + 1000);

      const sendH = "Your OTP is " + otp;
      const msg = {
        to: email, // Change to your recipient
        from: "harshitgarg.edu@gmail.com", // Change to your verified sender
        subject: "MNIT Selling Platform",
        text: "Your OTP is " + otp,
        html: sendH,
      };
      sgMail
        .send(msg)
        .then(() => {
          console.log("Email sent");
        })
        .catch((error) => {
          console.error(error);
        });

      res.status(200).send({
        otp: otp,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

///   SIGNIN FUNCTION
const signIn = (req, res) => {
  try {
    console.log("came to sign In");
    const email = req.body.email.toLowerCase();
    const password = req.body.password;
    console.log("reached to match password");
    console.log(email);
    console.log(password);
    User.findOne({ email: email }, function (err, foundUser) {
      if (err) {
        console.log(err);
      } else {
        if (foundUser) {
          
          bcrypt.compare(password, foundUser.password, function (err, result) {
            if (result === true) {
              console.log("password matched in server");
              foundUser.password="";
             const token =  jwt.sign({_id : foundUser._id}, process.env.JWT_SECRET, {expiresIn: '30d'})
             const to_send = {user : foundUser._id
              , token : token, email: foundUser.email, phone_No:foundUser.Mobile_no}
              console.log(to_send);
              res.status(200).send(to_send);
            } else {
              console.log("password not  matched in server");
              res.status(200).send({ status: "wrong password" });
            }
          });
        } else {
          console.log("no user found ");
          res.status(200).send({ status: "user not found" });
        }
      }
    });
    console.log("returning from server");
  } catch (err) {
    console.log(err);
    res.status(400).send("error in login");
  }
};



// RESET_PASSWORD FUNCTION

const resetPassword = async (req, res) => {
  if (Object.keys(req.body).length === 1) {
    const { email } = req.body;
    try {
      await User.findOne({ email: email }, function (err, foundUser) {
        if (err) {
          console.log(err);
        } else {
          if (foundUser) {
            otp = Math.floor(Math.random() * 1000 + 1000);
            const sendH = "Your OTP is " + otp;
            const msg = {
              to: email, // Change to your recipient
              from: "harshitgarg.edu@gmail.com", // Change to your verified sender
              subject: "MNIT Selling Platform",
              text: "Your OTP is " + otp,
              html: sendH,
            };
            sgMail
              .send(msg)
              .then(() => {
                console.log("Email sent");
              })
              .catch((error) => {
                console.error(error);
              });

            res.status(200).send({
              otp: otp,
            });
          } else 
           {res.status(200).send("Use different e-mail");}
        }
      }).clone();
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      let { email, password } = req.body;
      const findUser = await User.findOne({ email });
      bcrypt.hash(password, saltRounds, function (err, hash) {
        findUser.password = hash;
        findUser.save(function (err) {
          if (err) {
            console.log(err);
          } else {
            res.status(200).send("password changed");
          }
        });
      });
    } catch (err) {
      console.log(err);
    }
  }
};

const resendOtp = async (req, res)=>{
   const  {email} = req.body;
   otp = Math.floor(Math.random() * 1000 + 1000);

   const sendH = "Your OTP is " + otp;
   const msg = {
     to: email, // Change to your recipient
     from: "harshitgarg.edu@gmail.com", // Change to your verified sender
     subject: "MNIT Selling Platform",
     text: "Your OTP is " + otp,
     html: sendH,
   };
   sgMail
     .send(msg)
     .then(() => {
       console.log("Email sent");
     })
     .catch((error) => {
       console.error(error);
     });

   res.status(200).send({
     otp: otp,
   });
}

const auth_token = (req, res)=>{
  
    res.status(200).send("authorised_user");
}

module.exports = { signIn, signUp, resetPassword , resendOtp, auth_token};
