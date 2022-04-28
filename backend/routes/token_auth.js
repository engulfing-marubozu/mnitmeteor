const express = require("express");

const {authorization} = require("../Middlewares/authorization")
const {auth_token} = require("../controllers/auth")
const router = express.Router();

router.post('/auth_token', authorization, auth_token); //saves with is_verified false

module.exports= router;
