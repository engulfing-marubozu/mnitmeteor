const express = require("express");
const router = express.Router();
const {SendLost}= require("../controllers/lostitem");
const {FetchLost,FetchOnlyFound,FetchOnlyLost,FetchOnlyLostUser} = require("../Controllers/fetchlost")
const {authorization} = require("../Middlewares/authorization")
const {deleteLNF} = require("../Controllers/deletelnf.js")

router.post('/sendlostpost',authorization,SendLost); //lost form 
router.get('/fetchlost',FetchLost); //explore button
router.get('/lnfmyitems',authorization,FetchOnlyLostUser); //my items button
router.get('/onlylost',FetchOnlyLost); //lost button
router.get('/onlyfound',FetchOnlyFound); //found button
router.post('/deleteLnfItem',deleteLNF);

module.exports= router;