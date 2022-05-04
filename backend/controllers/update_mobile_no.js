const {User} = require("../Models/index");
//naya mobile no function
const update_mobile_no = async(req,res)=>{
    const body = req.body;
    const uid = (req.user._id);
    console.log(body);
    const pno = body.phoneNo;
    let fresp;
    const comp_user = req.user;
    try {
        
    const resp = await User.findByIdAndUpdate(uid,{"Mobile_no":pno});
    const to_send = {
        mob: pno,
        user: comp_user
    }
    res.status(200).send(to_send);  
    } catch (error) {
        const to_send = {
            mob: -1,
            user: comp_user
        }
        res.status(200).send(to_send);    
    }finally{
        console.log("Done with phone number database operations ");
    }

}

module.exports = {update_mobile_no}; 