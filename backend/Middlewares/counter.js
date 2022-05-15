// import { createClient } from 'redis';
// import  Val from  "./check"
const {Avatar} = require("../Models/index");
// redis.connect();

async function value(){

    // return 4;
    var uid = "62817ca403e3e34eddd1abae";
    var id;
    try {    

        const re = await Avatar.findByIdAndUpdate(uid,{$inc: {current_counter: 1}});
        console.log(re);
        return re.current_counter;
        
        
    } catch (error) {
        
        console.log(error);
        return -1;
    }
    
    // return newre.current_counter;
    // const client = red.createClient();
  
    // client.on('error', (err) => console.log('Redis Client Error', err));
  
    // await client.connect();
  
    // // await client.set('pic_ctr', '0');
    // var value = await client.get('pic_ctr');
    // //also increment the value 
    // value = parseInt(value);
    // // Val(value);
    // // console.log((value));
    // const incre = await client.incr('pic_ctr');
    // // console.log(incre);
    // return value;

}
// const counter = (async () => {
//  //   })();
//   console.log(number);
module.exports = {value}
