const jwt = require ("jsonwebtoken");
const {User} = require("../../Models")
const expressjwt = require("express-jwt")

const admin_verification = (req, res) => {
    const admin_email_list = ["2019ume1141@mnit.ac.in", "2019ume1827@mnit.ac.in", "2019ume1843@mnit.ac.in", "2019ume1205@mnit.ac.in"];
    const authHeader = req.headers.authorization;
    const unicode = req.body.unicode;
    console.log(authHeader);
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        console.log(token);

        jwt.verify(token, process.env.JWT_SECRET,async (err, user) => {
            if (err) {
                console.log("error");
                return res.status(200).send("403");
            }
           else{
               const admin= await User.findById(req.user._id);
            //    if(admin_email_list.includes(admin.email)  )
            //       res.status(200).send("200");
            //     else
            //       res.status(200).send("403");  
            bcrypt.compare(unicode, process.env.UNICODE, function (err, result) {
                if (result === true) {
                  
                  if(admin_email_list.includes(admin.email)  )
                         {console.log("unicode verified and admin verified");
                             res.status(200).send("200");}
                else
                {
                    {console.log("unicode verified but admin is does not have the access");
                    res.status(200).send("403");}
                }
                } else {
                  console.log("unicode not  matched in server");
                  res.status(200).send("403");
                }
              });
           }
        
       
        });
    } else {
        res.status(200).send("403");
    }
};



module.exports = {admin_verification};