const express = require("express");
const { send_interested_products, interested_update , un_interested_update}= require("../controllers/interested");
const {authorization} = require("../Middlewares/authorization")
const {api_call_limiter} = require("../Middlewares/api_call_limiter")
const router = express.Router();


router.get('/send_interested_products',authorization, send_interested_products);
router.post('/interested_update',authorization, interested_update);
router.post('/un_interested_update', api_call_limiter, authorization, un_interested_update);

module.exports= router;

