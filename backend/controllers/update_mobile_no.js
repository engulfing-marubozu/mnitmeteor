const {User} = require("../Models/index");
//naya mobile no function
const update_mobile_no = async(req,res)=>{
    const body = req.body;
    let uid;

    try{
        uid = (req.user._id);
    }catch{
        return res.status(403).send("Issue with user login. ");
    }
    console.log("UID is " + uid);
    //console.log(body);
    const pno = body.phoneNo;
    const authHeader = req.headers.authorization;
   
    const token = authHeader.split(' ')[1];
    var comp_user = req.user;
   // console.log("comp_user " + comp_user);
    //console.log(comp_user);
    var email; var profile_pic;
    try {
        email = await User.findById(uid );
        email = email.email;
        profile_pic = email.profile_pic;

    } catch (error) {
        console.log(error);
    }
    try {
        
    const resp = await User.findByIdAndUpdate(uid,{"Mobile_no":pno});
     comp_user = await User.findById(uid);
    const to_send = {
        phone_No: pno,
        user: comp_user._id.valueOf(),
        token: token,
        email: email,
        profile_pic: comp_user.profile_pic,
    }
    //console.log(to_send);
    res.status(200).send(to_send);  
    } catch (error) {
        const to_send = {
            phone_No: -1,
            user: comp_user._id.valueOf(),
            token: token,
            email: email,
            profile_pic: comp_user.profile_pic,
        }
       // console.log(to_send);
        res.status(200).send(to_send);    
    }finally{
        console.log("Done with phone number database operations ");
    }

}

module.exports = {update_mobile_no}; 