const { verifyToken } = require('../services/user')

module.exports = () => (req, res, next) => {
    // console.log(req.method);
    // console.log(req.body.email, req.body.username, req.body.password + ' create session');
    const token = req.headers['x-authorization']
    if (token) {
        try {
            const payload = verifyToken(token)
            req.user = payload
            req.token = token
        } catch (err) {
            return res.status(401).json({ message: 'Invalid authorization token' })
        }
    }
    next()
}