const { models: { User } } = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const secretKey = "adhlasbgfblbawd"
const login = async (req, res) => {
    try {
        const user = await User.findOne({ where: { username: req.body.username } })
        if (user) {
            const password = await bcrypt.compare(req.body.password, user.password)
            if (password) {
                const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' })
                res.cookie('jwt', token, { httpOnly: true, maxAge: 360 * 24 * 24 * 60 * 60 * 1000, secure: true })
                res.json({ status: 'success', msg: "Loged In" })
            }
            else {
                res.json({ status: 'failed', msg: "Invalid Password" })
            }
        }
        else {
            res.json('No User Found')
        }
    }
    catch (e) {
        res.json(e)
    }
}

module.exports = {
    login
}