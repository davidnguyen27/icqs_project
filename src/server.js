const express = require('express');
const configViewEngine = require('./config/viewEngine');
const initWebRoute = require('./route/authentication');
const initBlogRoute = require('./route/blog.route');
// const connectionDatabse = require('./config/connectDB');
require('./config/connectDB')
require('dotenv').config();
const mail = require('../src/mailVirify')
const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Set up view engine
configViewEngine(app);
//int web route
initWebRoute(app);
//int blog route
// initBlogRoute(app);
// mail.sendVerificationEmail();




// app.use((req, res)=> {
//   return res.render('404.ejs');
// })

// const nodeMailer = require('nodemailer');
// const html = `
// <h1>Hello world</h1>
// <p> Is not NodeMailer userful?`
//   ;
// //mail verify
// async function main() {
//   const transporter = nodeMailer.createTransport({
//     host: 'mail.openjavascript.info',
//     port: 465,
//     secure: true,
//     auth: {
//       user: 'tanhpce171112@fpt.edu.vn',
//       pass: 'tan10810114248'
//     }
//   })
//   const info = await transporter.sendMail({
//     from: 'OpenJavascript <tanhpce171112@fpt.edu.vn>',
//     to: 'tanhpce171112@fpt.edu.vn',
//     subject: 'Testing, testing, 123',
//     html: html,
//   })
  
//   console.log("Message sent: ", info.messageID);
// }

// main.catch(e => console.log(e))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})