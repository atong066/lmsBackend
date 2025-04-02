const express = require('express')
const router = express.Router()
const topicController = require('../controllers')
const { verifyToken } = require('../middleware/authtoken')
router.post('/addTopic', topicController.postController.addTopic)
router.get('/getposts', topicController.postController.getPosts)
router.get('/getAllTopics', verifyToken, topicController.postController.getAllTopics)
router.post('/getTopicById', verifyToken, topicController.postController.getTopicById)

module.exports = router