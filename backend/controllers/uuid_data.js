//import jwt, create a token if matches code, 
//restrict the resources with seperate autorization file 
const jwt = require ("jsonwebtoken");

const uuidinput = (req,res)=>{

    input_code = req.body.code;
    // res.send(req.body);
    console.log(input_code);
    if(input_code === "harshit"){
        console.log("correct");
        const token =  jwt.sign({_id : input_code}, process.env.JWT_SECRET, {expiresIn: '7d'})
        //and admin panel khul jae 
        res.status(200).json({_id : input_code
        , token : token});  
    }else{
        res.status(403).send("Wrong UUID Code. Please do not access this portal if you are not admin.")
    }
    
    
}

module.exports = {uuidinput}