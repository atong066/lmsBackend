const express = require('express')
const router = express.Router()
const Section = require('../controllers/sectionController')


router.get('/getSectionList', Section.getSectionList)
router.post('/addSection', Section.addSection)
router.post('/updateSection', Section.updateSection)
router.post('/archiveSection', Section.archiveSection)
router.post('/getSectionById', Section.getSectionById)
module.exports = router