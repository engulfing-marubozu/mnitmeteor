const Redis = require("redis");
const redis = Redis.createClient();
redis.connect();

const status_checker = async(req,res)=>{
    const authHeader = req.headers.authorization;
    let token;
    console.log("Route hit hua !");
    if(authHeader) token = authHeader.split(" ")[1];
    else res.status(200).send("Not authenticated");
    const number_of_req = await redis.incr(token);
    var ttl = await redis.ttl(token);
    if(ttl==-1){
        //key exist krti pr expiry set nhi 
        await redis.expire(token,40);
        ttl = 40;
    }
    if(number_of_req > 3){
        const to_send = {
            status: false,
            ttl: ttl,
            attempts: 0,
        }
        return res.status(200).send(to_send);
    }else{
        const to_send = {
            status: true,
            ttl: ttl,
            attempts: 3-number_of_req,
        }
        return res.status(200).send(to_send);
    }


}
module.exports = {status_checker};