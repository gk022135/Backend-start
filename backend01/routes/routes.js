const express = require('express');
const router = express.Router();
const post_test = require("../controllers/post-test")
const getData = require("../controllers/get-test")
const putData = require("../controllers/put-test")
const deleteData = require("../controllers/delete-test")


router.post('/simple',post_test);
router.get('/get-data/:id',getData);
router.put('/put-data',putData)
router.delete('/delete-test/:id', deleteData);

module.exports = router;



//http:localhost:3000/test-api/simple