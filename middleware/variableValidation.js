const Validator = require('validatorjs')
const { models: { Faculty } } = require('../models')
const rules = {
    lastName: "required|string",
    firstName: "required|string",
    gender: "required",
    email: "required",
    contactNumber: "required",
    address: "required"
}
const validate = async (req, res, next) => {
    try {
        const data = req.body
        const validator = new Validator(data, rules)
        if (validator.passes()) {
            const faculty = await Faculty.findOne({ where: { email: req.body.email } })
            console.log(faculty)
            if (faculty)
                res.json({ success: false, msg: "Email Already Taken" })
            else
                next()
        }
        else {
            res.json({ error: validator.errors.all() })
        }
    } catch (err) {
        res.json(err)
    }
}
module.exports = { validate }