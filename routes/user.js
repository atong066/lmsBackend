const express = require('express')
const router = express.Router()
const { user } = require('../controllers')
const { verifyToken } = require('../middleware/authtoken')

router.post('/register', user.create)
router.get('/getuserinfo', verifyToken, user.find)
module.exports = router