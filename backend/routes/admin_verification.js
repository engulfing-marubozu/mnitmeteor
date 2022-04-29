const express = require("express");
const {admin_verification} = require("../controllers/admin_verification/admin_verification");

const router = express.Router();

router.post('/admin_verification', admin_verification );



module.exports= router;