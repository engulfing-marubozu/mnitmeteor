const client = require('@sendgrid/client');
// require('dotenv').config();
require('dotenv').config({path:'../../.env'})

client.setApiKey(`${process.env.SENDGRID_API_KEY}`);
// console.log(process.env.SENDGRID_API_KEY);
const headers = {
  "Authorization": `Bearer ${process.env.SENDGRID_API_KEY}`,
};

const request = {
  url: `/v3/user/credits`,
  method: 'GET',
  headers: headers
}
const switch_email = false; 
var remain;
const get_credits = async()=>{
    await client.request(request)
  .then(([response, body]) => {
    // console.log(response.statusCode);
    // console.log(response.body.remain);
    remain = response.body.remain;
    // return remain;  
  })
  .catch(error => {
    // console.log(error.body);
    remain = -1;
    console.log("Error with GET Credits");
    console.log(error);
  });
  // return -1;
  return remain;
  
}

module.exports = {get_credits};