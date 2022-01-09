

const express = require("express");
const {postLoad} = require("../controllers/postLoad");

const router = express.Router();

router.get('/postLoad', postLoad );



module.exports= router;