const express = require("express");
const { products} = require("../controllers/postLoad");

const router = express.Router();


router.post('/product_details', products);


module.exports= router;