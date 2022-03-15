const express = require("express");
const router = express.Router();
const {SendLost}= require("../controllers/lostitem");
const {FetchLost} = require("../Controllers/fetchlost")
const {authorization} = require("../Middlewares/authorization")

router.post('/sendlostpost',authorization,SendLost); //lost form 
router.get('/fetchlost',FetchLost); //explore button

module.exports= router;