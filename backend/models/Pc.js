const { Schema, model, Types: { ObjectId } } = require('mongoose')

const URL_PATTERN = /https?:\/\/./i

const pcSchema = new Schema({
    pcName: { type: String, required: true, minlength: [1, 'PC name must be at least one characters long!'] },
    cpu: { type: String, required: true, minlength: [1, 'CPU must be at least one characters long!'] },
    motherboard: { type: String, required: true, minlength: [1, 'Motherboard must be at least one characters long!'] },
    gpu: { type: String, required: true, minlength: [1, 'GPU must be at least one characters long!'] },
    ram: { type: String, required: true, minlength: [1, 'RAM must be at least one characters long!'] },
    storage: { type: String, required: true, minlength: [1, 'Storage must be at least one characters long!'] },
    powerSupply: { type: String, required: true, minlength: [1, 'Power supply must be at least one characters long!'] },
    box: { type: String, required: true, minlength: [1, 'Box must be at least one characters long!'] },
    price: { type: Number, required: true, min: [1, 'Price must be over 1 lv.'] },
    img: {
        type: String, required: true, validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: 'Invalid URL!'
        }
    },
    _ownerId: { type: ObjectId, ref: 'User', required: true },
    addToCart: { type: Array, default: [], required: false }
})

const Pc = model('Pc', pcSchema)

module.exports = Pc