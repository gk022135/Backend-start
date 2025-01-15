const express = require('express')
const route = express.Router();
const check = require('../controllers/check');
const postCtrl = require('../controllers/postCtrl');
const userCtrl = require('../controllers/userCtrl');
const likeCtrl = require('../controllers/likeCtrl');

route.get('/check',check);
route.post('/make-post',postCtrl);
route.post('/user-save',userCtrl);
route.post('/user-like',likeCtrl);

module.exports = route;