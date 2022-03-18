const express = require("express");
const {new_thread,handle_admin_thread} = require("../controllers/Threads/create_thread");
const { fetch_live_threads, fetch_own_threads,fetch_false_threads} = require("../Controllers/Threads/send_thread");
const {  send_saved_threads } = require("../Controllers/Threads/send_saved_threads");
const { save_threads} = require("../Controllers/Threads/save_thread");
const { delete_thread } = require("../Controllers/Threads/delete_thread");
const { delete_comment } = require("../Controllers/Threads/delete_comment");
const { delete_reply } = require("../Controllers/Threads/delete_reply");
const { add_comment } = require("../Controllers/Threads/add_comments&replies");
const {authorization} = require("../Middlewares/authorization")
const {send_commented_replied_threads}  = require("../Controllers/Threads/send_commented_replied_thread")
const {like_and_dislike_threads}  = require("../Controllers/Threads/like_and_dislike_threads")

const router = express.Router();

router.post('/create_thread', authorization, new_thread); //saves with is_verified false
router.post('/fetch_live_threads',  fetch_live_threads);
router.get('/fetch_own_threads', authorization, fetch_own_threads)
router.get('/fetch_false_threads',fetch_false_threads);
router.post('/handle_admin_thread',handle_admin_thread);
router.post('/delete_thread', authorization, delete_thread);
router.post('/add_comment', authorization,add_comment);
router.post('/save_threads', authorization, save_threads);
router.post('/send_saved_threads', authorization, send_saved_threads);
router.post('/send_commented_replied_threads', authorization, send_commented_replied_threads);
router.post('/delete_thread', authorization, delete_thread);
router.post('/delete_comment', authorization, delete_comment);
router.post('/delete_reply', authorization, delete_reply);
router.post('/like_and_dislike_threads', authorization, like_and_dislike_threads);
module.exports= router;

