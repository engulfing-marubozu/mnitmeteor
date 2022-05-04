const  { User} = require ("../../../Models")

const update_mobile_no_in_database = async (req, res)=>{
    console.log("MObile numebr si : ");
    console.log(req.body.phoneNo);
    const pno = req.body.phoneNo;
    const auth = (req.user);
        console.log(auth);
let uid; 
    if(auth){
uid = auth._id;
}
    try {
        const user =  await User.findOneAndUpdate({_id:uid}, {Mobile_no : pno}, {new: true},);  
        console.log(user.Mobile_no);   
    } catch (error) {
        console.log(error);
    }
   
   
}
module.exports = {update_mobile_no_in_database};