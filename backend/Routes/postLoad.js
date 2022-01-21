const express = require("express");
const { products, admin_postLoad, admin_response, fetch_livedata, get_details }= require("../controllers/postLoad");
const {authorization} = require("../Middlewares/authorization")
const router = express.Router();


router.post('/product_details', authorization, products);
router.get('/admin_postLoad', admin_postLoad);
router.post('/admin_response', admin_response);
router.post('/fetch', fetch_livedata);



module.exports= router;