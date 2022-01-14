const express = require("express");
const { products, admin_postLoad, admin_response} = require("../controllers/postLoad");

const router = express.Router();


router.post('/product_details', products);
router.get('/admin_postLoad', admin_postLoad);
router.post('/admin_response', admin_response);


module.exports= router;