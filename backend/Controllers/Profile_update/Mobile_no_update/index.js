const send_mobile_otp = require("./send_otp");
const update_mobile_no_in_database = require("./update_in_database")

const mobile_no_update = (req, res)=>{
  const email = req.user._id;
  const mobile_no = req.phoneNo;
  const flag = req.flag;
  if(!flag)
  {
      const otp = send_mobile_otp(mobile_no);
      res.status(200).send(otp);

  }
  else
  {
   const user =  update_mobile_no_in_database(email, mobile_no);
   res.status(200).send(user);
  }
}
module.exports = {mobile_no_update};