const express = require('express')
const app = express()
const cors = require('./middlewares/cors')
const { mongoose } = require('mongoose')
const session = require('./middlewares/session')
const router = require('./routes')

const connectionString = 'mongodb://127.0.0.1:27017/pcgenerator'

const initDB = () => mongoose.connect(connectionString)

start()

async function start() {
    initDB()
    app.use(express.json())
    app.use(cors())
    app.use(session())
    app.use(router)

    app.listen(3000, () => console.log('Server listening on port 3000'))
}