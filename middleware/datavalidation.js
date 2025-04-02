const verifyVariables = (req, res, next) => {
    if (!!!req.body.username) {
        res.json({ status: "Failed", message: 'Username Required' })

    }
    else if (!!!req.body.password) {
        res.json({ status: "Failed", message: 'Password Required' })
    }
    else {
        next()
    }

}
module.exports = {
    verifyVariables
}