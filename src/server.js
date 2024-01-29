const express = require('express');
const configViewEngine = require('./config/viewEngine');
const initWebRoute = require('./route/index');
require('./config/connectDB')


const mail = require('../src/mailVirify')
const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Set up view engine
configViewEngine(app);
//int web route
// mail.sendVerificationEmail();
initWebRoute(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})