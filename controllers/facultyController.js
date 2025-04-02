const { models: { Faculty } } = require('../models')

const addFaculty = async (req, res) => {

    try {
        await Faculty.create(req.body)
        res.json({ success: true, msg: "Faculty Added" })
    } catch (e) {
        res.json(e)
    }
}

const getAllFaculty = async (req, res) => {
    try {
        const facultyList = await Faculty.findAll()
        if (facultyList.length !== 0) {
            res.json({ success: true, data: facultyList })
        }
        else {
            res.json({ success: false, msg: "No Data" })
        }


    } catch (e) {
        res.json(e)
    }
}

const getFacultyById = async (req, res) => {
    try {
        const facultyMember = await Faculty.findOne({ where: { id: req.body.id } })
        if (facultyMember) {
            res.json(facultyMember)
        }
        else {
            res.json({ success: false, msg: "Not Found" })
        }
    } catch (e) {
        res.json(e)
    }
}

const updateFaculty = async (req, res) => {
    try {
        const faculty = await Faculty.findOne({ where: { id: req.body.id } })
        if (faculty) {
            faculty.set(req.body)
            if (faculty.save()) {
                res.json({ success: true, msg: "Faculty Record Updated" })
            }
            else {
                res.json({ success: false, msg: "Update Failed" })
            }

        }
    } catch (e) {
        res.json(e)
    }
}
const updateFacultyEmpStatus = async (req, res) => {
    try {
        const faculty = await Faculty.findOne({ where: { id: req.body.id } })
        if (faculty) {
            faculty.set({ empStatus: "2" })
            if (faculty.save()) {
                res.json({ success: true, msg: "Updated" })
            }
            else {
                res.json({ success: false, msg: "Update Failed" })
            }
        }
        else {
            res.json({ success: false, msg: "No User Found" })
        }
    } catch (e) {
        res.json(e)
    }
}
module.exports = {
    addFaculty,
    getAllFaculty,
    getFacultyById,
    updateFaculty,
    updateFacultyEmpStatus
}