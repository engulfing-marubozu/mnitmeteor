const bcrypt= require( "bcrypt");
const printt = async()=>{
    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
const password = await bcrypt.hash("hafnium72", salt);
console.log(password);
}
require('dotenv').config()
const password = "hafnium73";
console.log(process.env.UNICODE);
bcrypt.compare(password,process.env.UNICODE, (err, data) => {
    //if error than throw error
    if (err) throw err

    //if both match than you can do anything
    if (data) {
        console.log("sahi hai ");
    } else {
        console.log("sahi nh hai ");
    }

})
// printt();