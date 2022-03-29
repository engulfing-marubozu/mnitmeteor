// const Redis = require("redis");
// const redis = Redis.createClient();
// redis.connect();

// used redis to stop any kind of spam by allowing only 3 un_interest request by any specific user.This has been done with by making a variabe in redis database(which is stored in the ram of the server) and setting its
// expiry to the time we want the user to stop until next request.

// a very good thing to note here is how we pass variables from one middleware to the other by just making the variable by the name as (req.{variable}= {variable_value})    instead of     (const {variable} = {variable_value})


const api_call_limiter = async (req, res, next) => {

  const allowed_time_in_seconds = 100;
  req.allowed_hits = 3;
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  let token;
  req.ttl;
  if (authHeader) token = authHeader.split(" ")[1];
  else res.send(200);
  req.number_of_req = await redis.incr(token);
  if (req.number_of_req === 1) {
    await redis.expire(token, allowed_time_in_seconds);
    req.ttl = allowed_time_in_seconds;
  }
  req.ttl = await redis.ttl(token);

  if (req.number_of_req > req.allowed_hits)
    return res.status(200).json({
      status: false,
      ttl_seconds: req.ttl,
    });

  else {
    console.log("land bc")
    next();}
};

// module.exports = { api_call_limiter };
