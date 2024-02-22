
const authRoute = require('./authentication')
const blogRoute = require('./blog')
const feedbackRoute = require('./feedback')
const accountRoute = require('./account')
const galery_project = require('./galery_project')
const initWebRoute = (app) => {
    app.use("/auth", authRoute)
    app.use("/blog", blogRoute)
    app.use("/feedback", feedbackRoute)
    app.use("/account", accountRoute)
    app.use("/galeryProject", galery_project)
}

module.exports = initWebRoute