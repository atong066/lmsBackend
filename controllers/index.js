const controller = {}
controller.user = require('./user')
controller.postController = require('./postTopicController')
controller.postContnentController = require('./postsController')
controller.loginController = require('./loginController')
controller.postReplyController = require('./postReplyController')
controller.facultyController = require('./facultyController')
controller.sectionController = require('./sectionController')

module.exports = controller