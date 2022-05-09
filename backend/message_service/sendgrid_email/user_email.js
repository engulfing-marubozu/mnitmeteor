const {get_credits} = require('./limit_checker');
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  process.env.SENDGRID_API_KEY
);

let remain;
// backend/.env
const sibemail = ()=>{

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
        
    }else{
        sgemail(to_send,suc_text);
    }
    
}
// send_email();
module.exports = {send_email};
// console.log(remain);
