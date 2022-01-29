const crypto = require("crypto");

const send_mobile_otp = (mobile_no)=>{

    const mobile_no = mobile_no;
    const otp = crypto.randomInt(1000, 9999);
    return(otp);

}
module.exports = {send_mobile_otp};