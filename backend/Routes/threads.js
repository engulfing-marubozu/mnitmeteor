const express = require("express");
const {new_thread} = require("../controllers/Threads/create_thread");
const { fetch_live_threads, fetch_own_threads } = require("../Controllers/Threads/send_thread");
const { delete_thread } = require("../Controllers/Threads/delete_thread");
const { add_comment } = require("../Controllers/Threads/add_comments");
const {authorization} = require("../Middlewares/authorization")
const router = express.Router();

router.post('/create_thread', authorization, new_thread);
router.get('/fetch_live_threads',  fetch_live_threads);
router.get('/fetch_own_threads', authorization, fetch_own_threads)
router.post('/delete_thread', authorization, delete_thread);
router.post('/add_comment', authorization,add_comment);
//router.get('/update_likes', authorization, update_likes)
module.exports= router;