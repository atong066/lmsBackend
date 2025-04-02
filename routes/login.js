const express = require('express')
const router = express.Router()
const { user, loginController } = require('../controllers')
const { verifyVariables } = require('../middleware/datavalidation')

router.post('/register', verifyVariables, user.create)
router.post('/login', loginController.login)
module.exports = router