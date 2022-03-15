const express = require("express");
const { send_published_Ads, delete_published_Ads}= require("../controllers/published_Ads");
const {authorization} = require("../Middlewares/authorization")
const router = express.Router();


router.get('/send_published_Ads', authorization, send_published_Ads)
router.post('/delete_published_Ads', authorization, delete_published_Ads)


module.exports= router;