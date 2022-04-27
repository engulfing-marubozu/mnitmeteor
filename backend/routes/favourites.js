const express = require("express");
const { favourites_update, send_favourites}= require("../controllers/favourites");
const {authorization} = require("../Middlewares/authorization")
const router = express.Router();



router.post('/favourites_update', authorization, favourites_update)
router.get('/send_favourites', authorization, send_favourites)


module.exports= router;