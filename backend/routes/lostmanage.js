const express = require("express");
const router = express.Router();
const {SendLost, LostCheck, HandleAdmin}= require("../controllers/lostitem");
const {FetchFalse, FetchLost,FetchOnlyFound,FetchOnlyLost,FetchOnlyLostUser} = require("../controllers/fetchlost")
const {authorization} = require("../Middlewares/authorization")
const {deleteLNF} = require("../controllers/deletelnf.js")

router.post('/sendlostpost',authorization,SendLost); //lost form 
router.get('/fetchlost',FetchLost); //explore button
router.get('/lnfmyitems',authorization,FetchOnlyLostUser); //my items button
router.get('/onlylost',FetchOnlyLost); //lost button
router.get('/onlyfound',FetchOnlyFound); //found button
router.post('/deleteLnfItem',deleteLNF);
router.post('/sendlftoadmin',authorization,LostCheck);
router.get('/sendfalseitems',FetchFalse);
router.post('/adminresponse',HandleAdmin);
module.exports= router;