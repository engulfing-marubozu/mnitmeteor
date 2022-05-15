const sgMail = require("@sendgrid/mail");
const {send_email} = require('./user_email');

sgMail.setApiKey(
  process.env.SENDGRID_API_KEY
);

//ye parameters hai 
//common params 

const send_interested_email = async (
  seller_email,
  buyer_email,
  product_title,
  seller_mobile_no,
  buyers_mobile_no
) => {
  const msg_seller = `Dear MNITian, we have found an interested buyer for your product, ${product_title}. You can contact him/her on +91${buyers_mobile_no}. Happy deal :)`;
  const msg_buyer = `Dear MNITian, you can now contact the seller of the product, ${product_title} on +91${seller_mobile_no}. Happy deal :)`;

  const draft_seller = {
    to: seller_email, // Change to your recipient
    from: "mnitmeteor@gmail.com", // Change to your verified sender
    subject: "MNIT Meteor",
    text: msg_seller,
    html: msg_seller,
  };
  let suc_text = "Deal initiation Email sent to the seller"
  // await sgMail
  //   .send(draft_seller)
  //   .then(() => {
  //     console.log(suc_text);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  await send_email(draft_seller,suc_text);

  const draft_buyer = {
    to: buyer_email, // Change to your recipient
    from: "mnitmeteor@gmail.com", // Change to your verified sender
    subject: "MNIT Meteor",
    text: msg_buyer,
    html: msg_buyer,
  };
  suc_text = "Deal initiation Email sent to the buyer";
  // await sgMail
  //   .send(draft_buyer)
  //   .then(() => {
  //     console.log(suc_text);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     });
  await send_email(draft_buyer,suc_text);
};

const send_un_interested_email = async (seller_email , seller_mobile_no, product_title)=>{
  const msg_seller = `Dear MNITian, the buyer with contact number ${seller_mobile_no} has cancelled the deal for product, ${product_title}.
  We wish you successful deals in future :)`
  const draft_seller ={
    to: seller_email, // Change to your recipient
    from: "mnitmeteor@gmail.com", // Change to your verified sender
    subject: "MNIT Meteor",
    text: msg_seller,
    html: msg_seller,
  }
  let suc_text = "Deal cancelation Email sent to the seller";
  // await sgMail
  // .send(draft_seller)
  // .then(() => {
  //   console.log(suc_text);
  // })
  // .catch((error) => {
  //   console.error(error);
  // });
  await send_email(draft_seller,suc_text);
}

const delete_product_email =async (interested_users_array, product_title)=>{
  console.log(interested_users_array);
  console.log(product_title);
   const msg_buyer = `Dear MNITian, The product, ${product_title} you were interested in has been deleted by the seller. We wish you some great deals in future.`
   const draft_seller ={
    to: interested_users_array, // Change to your recipient
    from: "mntimeteor@gmail.com", // Change to your verified sender
    subject: "MNIT Meteor",
    text: msg_buyer,
    html: msg_buyer,
  }
  let suc_text = "Deleted product update Email sent to buyers";
  // await sgMail
  // .send(draft_seller)
  // .then(() => {
  //   console.log("Deleted product update Email sent to buyers");
  // })
  // .catch((error) => {
  //   console.error(error);
  // });
  await send_email(draft_seller,suc_text);
}
module.exports = {  send_interested_email, send_un_interested_email , delete_product_email};
