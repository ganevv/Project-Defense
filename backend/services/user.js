const bcrypt = require('bcrypt')
const jwtoken = require('jsonwebtoken')
const User = require('../models/User')

const JST_SECRET = 'ao12,kai1ntrmmqi12g'

async function register(email, username, password) {
    const existing = await User.findOne({ email }).collation({ locale: 'en', strength: 2 })
    if (existing) {
        throw new Error('Email is taken')
    }

    const existingUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2 })
    if (existingUsername) {
        throw new Error('Username is taken')
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({
        username,
        email,
        hashedPassword
    })

    const token = createToken(user)
    return token

}

async function login(email, password) {
    const user = await User.findOne({ email }).collation({ locale: 'en' })

    if (!user) {
        throw new Error('Incorrect email or password')
    }

    const hasMatch = await bcrypt.compare(password, user.hashedPassword)

    if (hasMatch == false) {
        throw new Error('Incorrect email or password')
    }

    const token = createToken(user)
    return token
}

function createToken(user) {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
    }

    return {
        _id: user._id,
        username: user.username,
        email: user.email,
        accessToken: jwtoken.sign(payload, JST_SECRET)
    }
}

function verifyToken(token) {
    try {
        return jwtoken.verify(token, JST_SECRET)
    } catch (error) {
        throw new Error('Invalid access token!')
    }
}

module.exports = {
    register,
    login,
    verifyToken
}