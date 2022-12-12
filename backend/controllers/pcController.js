const { hasUser } = require('../middlewares/guards')
const { getAll, create, getById, update, deleteById } = require('../services/pc')

const pcController = require('express').Router()

pcController.get('/', async (req, res) => {
    res.json(await getAll())
    // res.status(200).json(await getAll())
})

pcController.post('/', hasUser(), async (req, res) => {
    try {
        const data = Object.assign({ _ownerId: req.user._id }, req.body)
        res.json(await create(data))
    } catch (err) {
        res.status(400).json({ error: err.message })
        //todo - maybe must change err.message
    }
})

pcController.get('/:id', async (req, res, next) => {
    res.json(await getById(req.params.id))
})

pcController.put('/:id', hasUser(), async (req, res, next) => {
    const pc = await getById(req.params.id)
    if (req.user._id != pc._ownerId) {
        return res.status(403).json({ message: 'You cannot modify this Pc' })
    }
    try {
        res.json(await update(req.params.id, req.body))
    } catch (error) {
        res.status(400).json({ error: err.message })
    }
})

pcController.delete('/:id', hasUser(), async (req, res) => {
    const pc = await getById(req.params.id)
    if (req.user._id != pc._ownerId) {
        return res.status(403).json({ message: 'You cannot modify this Pc' })
    }
    try {
        await deleteById(req.params.id)
        res.status(204).end()
    } catch (error) {
        res.status(400).json({ error: err.message })
    }
})

module.exports = {
    pcController
}