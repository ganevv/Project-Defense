module.exports = () => (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-authorization')
    next()
}