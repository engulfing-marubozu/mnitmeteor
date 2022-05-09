const express = require("express");
const { products, admin_postLoad, admin_response, fetch_livedata, send_specific_product }= require("../controllers/postLoad");
const {uuidinput} = require('../controllers/uuid_data');
const { authorization} = require("../Middlewares/authorization")
// const {mod_authorization} = require("../Middlewares/au")
const {update_mobile_no} = require("../controllers/update_mobile_no");
const router = express.Router();

router.post('/uuidinput', uuidinput);
router.post('/product_details', authorization, products);
router.get('/admin_postLoad',  admin_postLoad);
router.post('/admin_response', admin_response);
router.post('/fetch', fetch_livedata);
router.post('/send_specific_product', send_specific_product);
router.post('/update_mobile_number', authorization, update_mobile_no);

module.exports= router;