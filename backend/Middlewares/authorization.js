const jwt = require ("jsonwebtoken");
const expressjwt = require("express-jwt")

const authorization = (req, res, next) => {
    // console.log(req.headers);
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        console.log(token);

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403).send("unauthorized user");
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};
module.exports = {authorization};