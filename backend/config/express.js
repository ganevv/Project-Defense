const express = require('express')
const session = require('../middlewares/session')


module.exports = (app) => {
    // const hbs = handlebars.create({
    //     extname: '.hbs'
    // })

    // app.engine('.hbs', hbs.engine)
    // app.set('view engine', '.hbs')

    // app.use('/static', express.static('static'))
    // app.use(cookieParser())
    // app.use(trimBody())
    app.use(express.urlencoded({ extended: true }))
    app.use(session())
}