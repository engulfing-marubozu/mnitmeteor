const {User} = require("../Models/index");
const update_mobile_no = async(req,res)=>{
    const body = req.body;
    const uid = (req.user._id);
    console.log(body);
    const pno = body.phoneNo;
    const resp = await User.findByIdAndUpdate(uid,{"Mobile_no":pno});
    return res.status(200).send(resp);

}

module.exports = {update_mobile_no}; 