const express = require("express");
const { products, admin_postLoad, admin_response, fetch} = require("../controllers/postLoad");

const router = express.Router();


router.post('/product_details', products);
router.get('/admin_postLoad', admin_postLoad);
router.post('/admin_response', admin_response);
router.post('/fetch', fetch);


module.exports= router;