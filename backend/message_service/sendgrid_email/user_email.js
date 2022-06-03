const {get_credits} = require('./limit_checker');
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  process.env.SENDGRID_API_KEY
);
var SibApiV3Sdk = require('sib-api-v3-sdk');
SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = `${process.env.SIB_API_KEY}`;

let remain;
// backend/.env
const sibemail = (to_send,suc_text)=>{
    const sender = to_send.from;
    const subject = to_send.subject;
    const text = to_send.text;
    const to = to_send.to;
    new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail({

     "sender":{ "email":`${sender}`, "name":"MNIT Meteor"},
     "subject":`${subject}`,
     "htmlContent":"<!DOCTYPE html><html><body><h1></h1><p></p></body></html>",
     "params":{
        "greeting":"This is the default greeting",
        "headline":"This is the default headline"
     },
   "messageVersions":[
     //Definition for Message Version 1 
     {
         "to":[
            {
               "email":`${to}`,
               "name":`${to.slice(0,-11)}`
            }
         ],
         "htmlContent":`<!DOCTYPE html><html><body><h1></h1><p>${text}</p></body></html>`,
         "subject":`${subject}`
      },
     
     // Definition for Message Version 2
      
   ]

}).then(function(data) {
 
     console.log(suc_text);
  // console.log(data);
}, function(error) {
  console.log(error);
});

}
const sgemail = async (to_send,suc_text)=>{
    await sgMail
    .send(to_send)
    .then(() => {
      console.log(suc_text);
    })
    .catch((error) => {
      console.log(error);
    });

}

// /home/harshit/mm/backend/.env
const send_email = async (to_send,suc_text)=>{
    remain =  await get_credits();
    if(remain<=5){
        sibemail(to_send,suc_text);
    }else{
        sgemail(to_send,suc_text);
    }
    
}
// send_email();
module.exports = {send_email};
// console.log(remain);
