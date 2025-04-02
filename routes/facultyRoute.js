const express = require('express')
const router = express.Router()
const Faculty = require('../controllers/facultyController')
const { validate } = require('../middleware/variableValidation')
router.get('/getFacultyList', Faculty.getAllFaculty)
router.post('/addFacultyMember', validate, Faculty.addFaculty)
router.post('/updateFaculty', Faculty.updateFaculty)
router.post('/getFacultyById', Faculty.getFacultyById)
router.post('/archiveFaculty', Faculty.updateFacultyEmpStatus)

module.exports = router