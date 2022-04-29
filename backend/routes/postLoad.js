const express = require("express");
const { products, admin_postLoad, admin_response, fetch_livedata, send_specific_product }= require("../controllers/postLoad");
const {uuidinput} = require('../controllers/uuid_data');
const {authorization} = require("../Middlewares/authorization")
const router = express.Router();

router.post('/uuidinput', uuidinput);
router.post('/product_details', authorization, products);
router.get('/admin_postLoad',  admin_postLoad);
router.post('/admin_response', authorization, admin_response);
router.post('/fetch', fetch_livedata);
router.post('/send_specific_product', send_specific_product);


module.exports= router;