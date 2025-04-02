const { attribute } = require('@sequelize/core/_non-semver-use-at-your-own-risk_/expression-builders/attribute.js');
const { models: { User } } = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const secretKey = "adhlasbgfblbawd"
module.exports = {
    create: async (req, res) => {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            await User.create({
                username, password: hashedPassword
            });
            res.json({ username })
        }
        catch (e) {
            res.json({ e })
        }
    },
    find: async (req, res) => {
        const token = req.cookies
        const decodedToken = jwt.verify(token.jwt, secretKey)
        req.userId = decodedToken.userId
        const user = await User.findOne({ where: { id: req.userId }, attributes: ["username", "isLogedIn", "id"] })
        res.json(user)
    }
}