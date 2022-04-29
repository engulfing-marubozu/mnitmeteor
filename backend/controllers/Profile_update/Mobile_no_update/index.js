const {send_mobile_otp} = require("./send_otp");
const {update_mobile_no_in_database} = require("./update_in_database")

const mobile_no_update = async (req, res)=>{
  const Id = req.user._id;
  const mobile_no = req.body.phoneNo;
  
  console.log(req.body);
  
   const user = await update_mobile_no_in_database(Id, mobile_no);
   res.status(200).send({user});
  
}
module.exports = {mobile_no_update};