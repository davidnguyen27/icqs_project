const express = require('express')
const router = express.Router()
const authRoute = require('./authentication')
const blogRoute = require('./blog')
const initWebRoute = (app) => {
    app.use("/auth", authRoute)
    app.use("/blog", blogRoute)
}

module.exports = initWebRoute