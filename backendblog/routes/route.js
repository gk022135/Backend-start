const express = require('express')
const route = express.Router();
const check = require('../controllers/check');
const postCtrl = require('../controllers/postCtrl');
const userCtrl = require('../controllers/userCtrl');
const likeCtrl = require('../controllers/likeCtrl');
const commentCtrl = require('../controllers/commentCtrl');
const AllCommentsToPost = require('../controllers/AllCommentsToPost');
const AllPosts = require('../controllers/AllPosts');
const disLike = require('../controllers/disLike');

route.get('/check',check);
route.post('/make-post',postCtrl);
route.post('/user-save',userCtrl);
route.post('/user-like',likeCtrl);
route.post('/user-dislike',disLike);

route.post('/user-comment',commentCtrl);


route.get('/post-comments/:id',AllCommentsToPost)
route.get('/post/:postId',AllPosts)

module.exports = route;