const  { User} = require ("../../../Models")

const update_mobile_no_in_database = (email, mobile_no)=>{
    const email = email;
    const mobile_no = mobile_no;
    try{
   const user =  await User.findOneAndUpdate({email:email}, {Mobile_no : mobile_no}, {new: true});
   return(user);
    }
    catch(err)
    {
    console.log(err);
    }
}
module.exports = {update_mobile_no_in_database};