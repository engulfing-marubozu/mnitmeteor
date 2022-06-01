const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../../Models")
const expressjwt = require("express-jwt")
const Redis = require("redis");
const { transformReply } = require("@node-redis/search/dist/commands/AGGREGATE");
const redis = Redis.createClient();

require('dotenv').config()
redis.connect();
const timeConvert = (d) => {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    let ss;
    if(h){
        if(h==23){
            return "24 hours.";
        }
        return (h==1)?"an hour ":(h+ " hours.");
    }
    if(m){
        return (m + "minutes.");
    }
    if(s){
        return (s + " seconds." );
    }
    return hDisplay + mDisplay + sDisplay;
}
const admin_verification = async(req,res)=>{
    try {
        await redis.connect();
    } catch (error) {
        return res.status(402).send("Cannot connect to client");
    }
    var admin_emails = process.env.ADMINS;
    const admin_email_list = admin_emails.split(' ');
    const authHeader = req.headers.authorization;
    const unicode = req.body.unicode;
    console.log("unicode is " + unicode);
    //unicode 
    var check = authHeader.split(' ')[1];
    console.log(typeof (check));
    if (check == "undefined") check = 0;
    if(check==0){
        const to_send = {
            code: 403,
            message: 'Authorization failed',
        }
        return res.status(200).send(to_send);
    }
    //content 
    //submission form 
    //pointer 
    const token = authHeader?.split(' ')[1];
    const hs = await redis.ttl(token);
    if(hs==-1){
        console.log("user already tried wrong some times ");
    }
    if(hs==-1 || hs==-2){
        //get user details 
        jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
            const common_response = {
                code: 403,
                message: 'Error in verification.'
            }
            if (err) {
                console.log("error");
                const to_send = {
                    code: 403,
                    message: 'Authorization failed'
                }
                return res.status(200).send(to_send);
            }
            req.user = user;
            console.log(req.user);
            //check this guy's unicode
            var admin;
            try {
             admin = await User.findById(req.user._id);
            } catch (error) {
                return res.status(200).send(common_response);
            }
            bcrypt.compare(unicode, process.env.UNICODE, (err,data)=>{
                if(data){
                    console.log("data admin "+data);
                    console.log("Correct unicode, checking authenticity of admin");
                    if(admin_email_list.includes(admin.email)){
                        const obj = {
                            message: "Hey Admin!",
                            token: token,
                            code: 77
                        }
                        const to_send = JSON.stringify(obj);
                        return res.status(200).send(to_send);
                    }else{
                        //breach
                        console.log("unicode verified but admin is does not have the access");
                        const obj = {
                            message: "Not an admin. Admins have been reported for misuse of key",
                            code: 88
                        }
                        return res.status(200).send(JSON.stringify(obj));
                    }
                }
                //yahan dikkat ho skti if data exists even if 
                //incorrect unicode 
                //amd vo bande ke count check kr rha 
                // token count kese krna
                const redisHandler = async(token,res)=>{
                    hits = await redis.incr(token);
                    if(hits>2){
                        await redis.set(token, -1);
                        const blockingTime = 48;
                        var time_block = timeConvert(blockingTime);

                        await redis.expire(token, blockingTime); //40 seconds 
                        const obj = {
                            message: `You are blocked for ${time_block}.`,
                            code: 88
                        }
                        const to_send = JSON.stringify(obj);
                        return res.status(200).send(to_send);   
                    }
                    obj = {
                        message: `You are remaining with ${3- hits} attempts`,
                        code: 88
                    }
                    const to_send = JSON.stringify(obj);
                    return res.status(200).send(to_send);
                }
                redisHandler(token,res);
                return res.status(200).send(JSON.stringify(obj));
                
            })
        })
    }
    time_remaining = timeConvert(hs);
    to_send = {
        code: 88,
        message: `Owing to excessive attempts, you are blocked for ${time_remaining}.`
    }
    return res.status(418).send(to_send);

    
}
const admin_verification_s = async (req, res, next) => {
    try {
        await redis.connect();
    } catch (error) {
        console.log("Cannot connect to client");
    }
    var admin_emails = process.env.ADMINS;
    const admin_email_list = admin_emails.split(' ');
    const authHeader = req.headers.authorization;
    const unicode = req.body.unicode;
    console.log("unicode is " + unicode);
    //unicode 
    var check = authHeader.split(' ')[1];
    console.log(typeof (check));
    if (check == "undefined") check = 0;
    if (check) {
        const token = authHeader?.split(' ')[1];
        console.log(token);
        const hs = await redis.ttl(token);
        //-1 key exists but no expiry
        //-2 matlab no key 
        //baki returns time 

        console.log(hs);
        if (hs > 0 ) {
            var time_remaining = await redis.ttl(token);
            time_remaining = timeConvert(time_remaining);
            const obj = {
                message: `Hey, due to excessive attempts, you can not access it for ${time_remaining} `,
                code: 88
            }
            const to_send = JSON.stringify(obj);
            return res.status(200).send(obj);
        }
        //if key(token) == -1, you already have tried so much, try again after ttl(token) hours 
        jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
            if (err) {
                console.log("error");
                const to_send = {
                    code: 403,
                    message: 'Authorization failed'
                }
                return res.status(200).send();
            }
            req.user = user;
            console.log(req.user)
            const admin = await User.findById(req.user._id);
            console.log(admin.email);
            console.log("Unicode given in env " + process.env.UNICODE);
            console.log("Entered " + unicode);
            bcrypt.compare(unicode, process.env.UNICODE, (err, data) => {
                //if error than throw error
                // if (err) throw err
                
                //if both match than you can do anything
                if (data) {
                    console.log("Unicode is correct, now checking admin or not");
                    if (admin_email_list.includes(admin.email)) {
                        console.log("unicode verified and admin verified");
                        const obj = {
                            message: "Hey Admin!",
                            token: token,
                            code: 77
                        }
                        const to_send = JSON.stringify(obj);
                        res.status(200).send(to_send);
                    }
                    else {
                        {
                            console.log("unicode verified but admin is does not have the access");
                            const obj = {
                                message: "Not an admin. Admins have been reported for misuse of key",
                                code: 88
                            }
                            res.status(200).send(JSON.stringify(obj));
                        }
                    }
                } else {
                    console.log("Unicode is wrong ");

                    const redisHandler = async (token, res) => {
                        const hits = await redis.incr(token);
                        if (hits > 2) {
                            await redis.set(token, -1);
                            const blockingTime = 60*24*60;
                            var time_block = timeConvert(blockingTime);

                            await redis.expire(token, blockingTime); //40 seconds 
                            const obj = {
                                message: `You are blocked for ${time_block}.`,
                                code: 88
                            }
                            const to_send = JSON.stringify(obj);
                            return res.status(200).send(to_send);
                        }
                        const obj = {
                            message: ` You are remaining with ${3 - hits} attempts`,
                            code: 88
                        }
                        const to_send = JSON.stringify(obj);
                        res.status(200).send(to_send);
                    }
                    redisHandler(token, res);

                }

            });


        });
    } else {
        //authenticated hi nhi hai, baat khatam
        const to_send = {
            code: 403,
            message: 'Authorization failed',
        }
        res.status(200).send(to_send);
    }
};



module.exports = { admin_verification };