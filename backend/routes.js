const { authController } = require('./controllers/authController')
const { pcController } = require('./controllers/pcController')

const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({ message: 'REST WORKS!' })
})

router.use('/auth', authController)
router.use('/pc', pcController)


module.exports = router