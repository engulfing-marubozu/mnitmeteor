const { User } = require("../Models");
const bcrypt = require("bcrypt");
const sgMail = require("@sendgrid/mail");
const { parse } = require("path/posix");
const {authorisation} = require("../index")
const jwt = require("jsonwebtoken");
sgMail.setApiKey(
  "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"
);

saltRounds = 8;


///    SIGNUP FUNCTION
const signUp = async (req, res) => {               
  console.log("came to sign up");
  console.log(req.body);
  try {
    console.log(req.body.email);
    console.log(Object.keys(req.body).length);
    let email = req.body.email.toLowerCase();
    if (Object.keys(req.body).length !== 1) {
      //to store the incoming email and pass, and validate them
      console.log("reached api");
      let password = req.body.password;
      // var name = req.body.name;
      bcrypt.hash(password, saltRounds, function (err, hash) {
        const user = new User({
          email: email,
          password: hash,
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
    console.log(err);
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
             const token =  jwt.sign({_id : foundUser._id}, process.env.JWT_SECRET, {expiresIn: '7d'})
              res.status(200).json({user : foundUser
                , token : token});
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


module.exports = { signIn, signUp, resetPassword , resendOtp};
