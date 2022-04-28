const express = require("express");
const { send_notification  }= require("../controllers/notification/send_notification");
const { get_notif_alert_count  }= require("../controllers/notification/get_notif_count");
const {authorization} = require("../Middlewares/authorization")
const {delete_notification} =  require("../controllers/notification/delete_notification");
const router = express.Router();



router.get('/send_notification', authorization, send_notification);
router.post('/delete_notification', authorization, delete_notification);
router.post('/get_notif_alert_count', authorization,get_notif_alert_count);
module.exports= router;