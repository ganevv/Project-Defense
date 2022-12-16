const { verifyToken } = require('../services/user')

module.exports = () => (req, res, next) => {
    if (req.method == "OPTIONS") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end();
    }
    console.log(req.method);
    console.log(req.body.email, req.body.username, req.body.password + ' create session');
    const token = req.headers['x-authorization']
    if (token) {
        try {
            const userData = verifyToken(token)
            req.user = userData
            req.token = token
        } catch (err) {
            return res.status(401).json({ message: 'Invalid authorization token' })
        }
    }
    next()
}