const express = require("express");
const {signUp , signIn, resetPassword, resendOtp} = require("../controllers/auth");
const {mobile_no_update} = require("../controllers/Profile_update/Mobile_no_update")
const {authorization} = require("../Middlewares/authorization")
const router = express.Router();

router.post('/signIn', signIn );
router.post('/signUp',signUp);
router.post('/resetPassword', resetPassword );
router.post('/resendOtp', resendOtp );
router.post('/mobile_no_update', authorization, mobile_no_update)


module.exports= router;