const bcrypt = require('bcrypt')
const jwtoken = require('jsonwebtoken')
const User = require('../models/User')

const JST_SECRET = 'ao12,kai1ntrmmqi12g'

const tokenBlacklist = new Set()

async function register(email, username, password) {
    const existing = await User.findOne({ email }).collation({ locale: 'en', strength: 2 })
    if (existing) {
        throw new Error('Email is taken')
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        email,
        username,
        hashedPassword
    })

    const token = createSession(user)
    return token

    // return {
    //     _id: user._id,
    //     email: user.emailm
    //     accessToken: createSession(user)
    // }
}

async function login(email, password) {
    const user = await User.findOne({ email }).collation({ locale: 'en', strength: 2 })
    if (!user) {
        throw new Error('Incorrect email or password')
    }

    const hasMatch = await bcrypt.compare(password, user.hashedPassword)

    if (hasMatch == false) {
        throw new Error('Incorrect email or password')
    }

    const token = createSession(user)
    return token
}

async function logout(token) {
    tokenBlacklist.add(token)
}

function createSession({ _id, email, username }) {
    const payload = {
        _id,
        email,
        username
    }

    const token = jwtoken.sign(payload, JST_SECRET)
    return token
}

function verifyToken(token) {
    //todo scan for token in blacklist
    return jwtoken.verify(token, JST_SECRET)
}

module.exports = {
    register,
    login,
    logout,
    createSession,
    verifyToken
}