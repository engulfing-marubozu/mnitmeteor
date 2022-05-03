const jwt = require ("jsonwebtoken");
const bcrypt = require("bcrypt");
const {User} = require("../../Models")
const expressjwt = require("express-jwt")
const Redis = require("redis");
const redis = Redis.createClient();
redis.connect();
const timeConvert = (d)=>{
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay; 
}
const admin_verification = async(req, res, next) => {
    
    const admin_email_list = [ "2019ume1827@mnit.ac.in", "2019ume1843@mnit.ac.in", "2019ume1205@mnit.ac.in"];
    const authHeader = req.headers.authorization;
    const unicode = req.body.unicode;
    console.log("unicode is " + unicode);
    //unicode 
    console.log(authHeader);
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        console.log(token);
        const hs = await redis.get(token);
        console.log(hs);
        if(hs==-1){
            var time_remaining =  await redis.ttl(token); 
            time_remaining = timeConvert(time_remaining);
            return res.status(200).send(`Hey, due to excessive attempts, you can not access it for ${time_remaining} `);
        }
        //if key(token) == -1, you already have tried so much, try again after ttl(token) hours 
        jwt.verify(token, process.env.JWT_SECRET,async (err, user) => {
            if (err) {
                console.log("error");
                return res.status(200).send("403");
            }
            req.user=user;
            console.log(req.user)
            const admin= await User.findById(req.user._id);
            console.log(admin.email);
            console.log("Unicode given in env " + process.env.UNICODE);
            console.log("Entered " + unicode);
            if(unicode===process.env.UNICODE){
                console.log("Unicode is correct, now checking admin or not");
                if(admin_email_list.includes(admin.email)  )
                     {console.log("unicode verified and admin verified");
                     console.log("sfhvhdjs")
                         res.status(200).send("Hey Admin!");}
                else
                {
                    {console.log("unicode verified but admin is does not have the access");
                    res.status(200).send("Not an admin. Admins have been reported for misuse of key");}
                }
            }else{
                console.log("Unicode is wrong ");

                const redisHandler = async(token,res)=>{
                    const hits = await redis.incr(token);    
                    if(hits>2){
                        await redis.set(token,-1);
                        const blockingTime = 5;
                        var time_block = timeConvert(blockingTime);

                        await redis.expire(token,blockingTime); //40 seconds 
                        return res.status(200).send(`You are blocked for ${time_block}.`);
                    }
                    res.status(200).send(` You are remaining with ${3-hits} attempts`);    
                }
                redisHandler(token,res);
                
            }
            
       
        });
    } else {
        //authenticated hi nhi hai, baat khatam
        
        res.status(200).send("403");
    }
};



module.exports = {admin_verification};