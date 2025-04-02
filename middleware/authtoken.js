const jwt = require('jsonwebtoken')
const secretKey = "adhlasbgfblbawd"
const isJwtExpired = require('jwt-check-expiration')
const verifyToken = async (req, res, next) => {
    const token = req.cookies
    console.log("asfasd")
    if (!token) {
        return res.json({ status: "failed", msg: "Loged Out" })
    }
    else
        try {
            const decodedToken = await jwt.verify(token.jwt, secretKey)
            if (decodedToken) {
                req.userId = decodedToken.userId
                next()
            }
            else {
                res.json({ success: "false" })
            }

        }
        catch (e) {
            res.json({ success: "false", error: e })
        }
}
module.exports = { verifyToken }