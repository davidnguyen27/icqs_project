
const authRoute = require('./authentication')
const blogRoute = require('./blog')
const feedbackRoute = require('./feedback')
const accountRoute = require('./account')
const initWebRoute = (app) => {
    app.use("/auth", authRoute)
    app.use("/blog", blogRoute)
    app.use("/feedback", feedbackRoute)
    app.use("/account", accountRoute)
}

module.exports = initWebRoute