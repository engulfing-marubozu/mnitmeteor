const express = require("express");
const { send_interested_products, interested_update }= require("../controllers/interested");
const {authorization} = require("../Middlewares/authorization")
const router = express.Router();


router.get('/send_interested_products',authorization, send_interested_products);
router.post('/interested_update',authorization, interested_update);


module.exports= router;

