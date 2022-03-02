const express = require("express");
const { send_notification  }= require("../controllers/notification/send_notification");
const {authorization} = require("../Middlewares/authorization")
const router = express.Router();



router.get('/send_notification', authorization, send_notification);


module.exports= router;