// import { createClient } from 'redis';
// import  Val from  "./check"
const {Counter} = require("../Models/index");
// redis.connect();

async function value(){

    // return 4;

    const client = red.createClient();
  
    client.on('error', (err) => console.log('Redis Client Error', err));
  
    await client.connect();
  
    // await client.set('pic_ctr', '0');
    var value = await client.get('pic_ctr');
    //also increment the value 
    value = parseInt(value);
    // Val(value);
    // console.log((value));
    const incre = await client.incr('pic_ctr');
    // console.log(incre);
    return value;

}
// const counter = (async () => {
//  //   })();
//   console.log(number);
module.exports = {value}
