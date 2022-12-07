const { verifyToken } = require('../service/user')

module.exports = () => (req, res, next) => {
    const token = req.cookies.token
    if (token) {
        try {
            const userData = verifyToken(token)
            req.user = userData
        } catch (err) {
            // res.clearCookie('token')
            // res.redirect('/login')
            // return
            //todo
        }
    }

    next()
}