const express = require("express");
const { products, admin_postLoad, admin_response, fetch, get_details, favourites_upadte, send_favourites }= require("../controllers/postLoad");
const {authorization} = require("../Middlewares/authorization")
const router = express.Router();


router.post('/product_details', products);
router.post('/favourites_update', authorization, favourites_upadte)
router.get('/send_favourites', authorization, send_favourites)
router.get('/admin_postLoad', admin_postLoad);
router.post('/admin_response', admin_response);
router.post('/fetch', fetch);
router.get('/get_details', authorization, get_details);


module.exports= router;