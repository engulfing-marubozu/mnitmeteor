const express = require("express");
const {signUp , signIn, resetPassword, resendOtp} = require("../controllers/auth");
const {update_mobile_no_in_database} = require("../controllers/Profile_update/Mobile_no_update/update_in_database")
const {authorization} = require("../Middlewares/authorization")
const router = express.Router();

router.post('/signIn', signIn );
router.post('/signUp',signUp);
router.post('/resetPassword', resetPassword );
router.post('/resendOtp', resendOtp );
router.post('/mobile_no_update', authorization, update_mobile_no_in_database)


module.exports= router;