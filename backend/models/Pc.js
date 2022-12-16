const { Schema, model, Types: { ObjectId } } = require('mongoose')

const pcSchema = new Schema({
    pcName: { type: String, required: true },
    cpu: { type: String, required: true },
    motherboard: { type: String, required: true },
    gpu: { type: String, required: true },
    ram: { type: String, required: true },
    storage: { type: String, required: true },
    powerSupply: { type: String, required: true },
    box: { type: String, required: true },
    price: { type: Number, required: true, min: [1, 'Price must be over 1 lv.'] },
    img: { type: String, required: true },
    _ownerId: { type: ObjectId, ref: 'User', required: true },
})

const Pc = model('Pc', pcSchema)

module.exports = Pc