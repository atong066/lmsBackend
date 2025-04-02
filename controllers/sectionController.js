const { models: { Section } } = require('../models')
const { models: { Faculty } } = require('../models')
const getSectionList = async (req, res) => {
    try {
        const secitonList = await Section.findAll({
            include: {
                model: Faculty,
                attributes: ["lastName", "firstName", "middleName"]

            }
        })
        if (secitonList.length !== 0) {
            res.json({ success: true, data: secitonList })
        }
        else {
            res.json({ success: true, msg: "No Data" })
        }
    } catch (e) {
        res.json(e)
    }
}
const addSection = async (req, res) => {
    try {
        const section = await Section.create(req.body)
        const faculty = Faculty.findOne({ where: { id: req.body.facultyId } })
        faculty.set({ designation: 1 })
        faculty.save()
        if (section) res.json({ success: true, msg: "Section Added" })
        else res.json({ success: false, msg: "Failed to add Data" })
    } catch (e) {
        res.json(e)
    }
}

const updateSection = async (req, res) => {
    try {
        const section = await Section.findOne({ where: { id: req.body.id } })
        if (section.length !== 0) {
            section.set(req.body)
            section.save()
        }
    } catch (e) {
        res.json(e)
    }
}

const archiveSection = async (req, res) => {
    try {
        const section = await Section.findOne({ where: { id: req.body.id } })
        if (section.length !== 0) {
            section.set({ status: "2" })
            section.save()
        }

    } catch (e) {
        res.json(e)
    }
}
const getSectionById = async (req, res) => {
    try {
        console.log(req.body.id)
        const section = await Section.findOne({ where: { id: req.body.id } })
        if (section.length !== 0) {
            res.json(section)
        }
        else {
            res.json({ success: false, msg: "No Data" })
        }
    } catch (e) {
        res.json(e)
    }
}

module.exports = {
    addSection,
    updateSection,
    archiveSection,
    getSectionList,
    getSectionById
}