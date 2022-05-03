const jwt = require ("jsonwebtoken");
const bcrypt = require("bcrypt");
const {User} = require("../../Models")
const expressjwt = require("express-jwt")
const Redis = require("redis");
const redis = Redis.createClient();
redis.connect();

const admin_verification = (req, res, next) => {
    
    const admin_email_list = ["2019ume1141@mnit.ac.in", "2019ume1827@mnit.ac.in", "2019ume1843@mnit.ac.in", "2019ume1205@mnit.ac.in"];
    const authHeader = req.headers.authorization;
    const unicode = req.body.unicode;
    console.log("unicode is " + unicode);
    //unicode 
    console.log(authHeader);
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        console.log(token);
        //if key(token) == -1, you already have tried so much, try again after ttl(token) hours 
        jwt.verify(token, process.env.JWT_SECRET,async (err, user) => {
            if (err) {
                console.log("error");
                return res.status(200).send("403");
            }
            req.user=user;
            console.log(req.user)
            const admin= await User.findById(req.user._id);
            console.log(admin)
        //    if(admin_email_list.includes(admin.email)  )
            //       res.status(200).send("200");
            //     else
            //       res.status(200).send("403");  
            bcrypt.compare(unicode, process.env.UNICODE, function (err, result) {
                if (result === true) {
                  
                    if(admin_email_list.includes(admin.email)  )
                         {console.log("unicode verified and admin verified");
                         console.log("sfhvhdjs")
                             res.status(200).send("200");}
                    else
                    {
                        {console.log("unicode verified but admin is does not have the access");
                        res.status(200).send("403");}
                    }
                }else {
                    //check krna 24 hours ki hai ki nhi 
                    //if key(token) == -1,  
                    // console.log("Unicode is wrong ");
                    // const hits = await redis.incr(token);
                    // //create the token with his key 
                    // if(hits<2){
                    //     const text= `You have ${3-hits}  attempts left`;
                    //     console.log("You have %d hits left",3-hits);
                    //     return res.send(200).send(text);
                    // }
                    // console.log("Try again after 24 hours");
                    //token()
                    //uss map mein key create violation ki 
                    res.status(200).send("You have ")
                }
              });
           
        
       
        });
    } else {
        //authenticated hi nhi hai, baat khatam
        
        res.status(200).send("403");
    }
};



module.exports = {admin_verification};