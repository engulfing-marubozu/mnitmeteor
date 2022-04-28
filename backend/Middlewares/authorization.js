const jwt = require ("jsonwebtoken");
const expressjwt = require("express-jwt")

const authorization = (req, res, next) => {
    
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        console.log(token);

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                console.log("error");
                return res.status(200).send("unauthorized user");
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};



module.exports = {authorization};