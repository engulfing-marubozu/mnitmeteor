// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


const twilio_msg =()=>{
    client.messages
    .create({
       body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
       from: process.env.TWILIO_MOBILE_NO,
       to: '+917488960146'
     })
     .then(message => {
         console.log("msg sent");
         console.log(message.sid)}
         )
     .catch((err)=>console.log(err));
}
module.exports = {twilio_msg}