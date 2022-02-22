const express = require("express");
const {new_thread} = require("../controllers/Threads/create_thread");
const { fetch_live_threads } = require("../Controllers/Threads/send_thread");
const { delete_thread } = require("../Controllers/Threads/delete_thread");
const { add_comment } = require("../Controllers/Threads/add_comments");
const {authorization} = require("../Middlewares/authorization")
const router = express.Router();

router.post('/create_thread', authorization, new_thread);
router.post('/fetch_live_threads', authorization, fetch_live_threads);
router.post('/delete_thread', authorization, delete_thread);
router.post('/add_comment', authorization,add_comment);

module.exports= router;