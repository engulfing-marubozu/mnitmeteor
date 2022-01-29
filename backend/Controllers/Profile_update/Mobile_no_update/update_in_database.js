const  { User} = require ("../../../Models")

const update_mobile_no_in_database = async (Id, mobile_no)=>{
    try{
        console.log(mobile_no);
   const user =  await User.findOneAndUpdate({_id:Id}, {Mobile_no : mobile_no}, {new: true});
   return(user);
    }
    catch(err)
    {
    console.log(err);
    }
}
module.exports = {update_mobile_no_in_database};