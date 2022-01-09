const express = require("express");
const {signUp , signIn} = require("../controllers/auth");

const router = express.Router();

router.post('/signIn', signIn );
router.post('/signUp',signUp);


module.exports= router;