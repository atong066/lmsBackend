const express = require('express')
const router = express.Router()
const Post = require('../controllers')
const { verifyToken } = require('../middleware/authtoken')
const PostRoute = Post.postContnentController
const ReplyController = Post.postReplyController
router.post('/addpost', verifyToken, PostRoute.addPost)
router.get('/getallposts', PostRoute.getAllPosts)
router.post('/getpostbyid', verifyToken, PostRoute.getPostById)
router.post('/deletepost', verifyToken, PostRoute.deletePost)
router.post('/updatepost', verifyToken, PostRoute.updatePost)

router.post('/addReply', verifyToken, ReplyController.addReply)
router.post('/getReplies', verifyToken, ReplyController.getPostReply)

module.exports = router