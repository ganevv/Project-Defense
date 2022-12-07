const { authController } = require('../controllers/authController')
const { pcController } = require('../controllers/pcController')

module.exports = (app) => {
    app.use('/auth', authController)
    app.use('/pc', pcController)
}