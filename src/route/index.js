const express = require('express')
const router = express.Router()
const authRoute = require('./authentication')
const blogRoute = require('./blog')
const feedbackRoute = require('./feedback')
const initWebRoute = (app) => {
    app.use("/auth", authRoute)
    app.use("/blog", blogRoute)
    app.use("/feedback", feedbackRoute)
}

module.exports = initWebRoute