
const authRoute = require('./authentication')
const blogRoute = require('./blog')
const feedbackRoute = require('./feedback')
const accountRoute = require('./account')
const galery_projectRoute = require('./galery_project')
const emailRoute = require('./email')
const initWebRoute = (app) => {
    app.use("/auth", authRoute)
    app.use("/blog", blogRoute)
    app.use("/feedback", feedbackRoute)
    app.use("/account", accountRoute)
    app.use("/galeryProject", galery_projectRoute)
    app.use("/email", emailRoute)
}

module.exports = initWebRoute