const { getAll, create, getById, update, deleteById, addToCart } = require('../services/pc')

const pcController = require('express').Router()

pcController.get('/', async (req, res) => {
    const pcs = await getAll()
    res.status(200).json(pcs)
})

pcController.post('/', async (req, res) => {
    try {
        const data = Object.assign({ _ownerId: req.user._id }, req.body)
        res.json(await create(data))
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
    res.end()
})

pcController.get('/:id', async (req, res) => {
    try {
        const pc = await getById(req.params.id)
        if (!pc) {
            throw new Error('PC doesn\'t exist!')
        }
        return res.status(200).json(pc)
    } catch (error) {
        res.status(400).json({ error })
    }

})

pcController.put('/:id', async (req, res) => {
    try {
        const pc = await getById(req.params.id)
        if (req.user._id != pc._ownerId._id) {
            return res.status(403).json({ message: 'You cannot modify this Pc' })
        }
        const result = await update(req.params.id, req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ error: err.message })
    }
})

pcController.delete('/:id', async (req, res) => {
    try {
        const pc = await getById(req.params.id)
        if (req.user._id != pc._ownerId._id) {
            res.status(403).json({ err: err.message })
        }
        await deleteById(req.params.id)
        res.status(204).end()
    } catch (error) {
        res.status(400).json({ error: err.message })
    }
})

pcController.get('/:id', async (req, res) => {
    try {
        const pc = await getById(req.params.id)
        if (pc._ownerId._id != req.user._id && pc.addToCart.map(x => x.includes(req.user?._id) == false)) {
            try {
                await addToCart(req.params.id, req.user._id);
                const pc = await getById(req.params.id)
                return res.status(200).json(pc)
            } catch (error) {
                res.status(400).json({ err: error.message })
            }
        }
    } catch (error) {
        res.status(400).json({ err: error.message })

    }
});

module.exports = {
    pcController
}