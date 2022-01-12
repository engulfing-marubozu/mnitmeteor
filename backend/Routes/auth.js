const express = require("express");
const {signUp , signIn, resetPassword, resendOtp} = require("../controllers/auth");

const router = express.Router();

router.post('/signIn', signIn );
router.post('/signUp',signUp);
router.post('/resetPassword', resetPassword );
router.post('/resendOtp', resendOtp );


module.exports= router;