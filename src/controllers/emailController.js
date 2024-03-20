const emailService = require('../service/emailService')
const validation = require('../middleware/validation')
const sendEmail = async (req, res) => {
    try {
        const { userMail } = req.body
        // check email có hộp lệ hay không
        if (validation.isEmailValid(userMail) == true) {
            
            const respone = await emailService.sendEmailService(userMail)
            return res.status(200).json(respone)
        }
        return res.status(401).json({
            status: "err",
            message: "Email không hợp lệ!"
        })
    } catch (error) {
        console.log(error)
        return res.json({
            status: "err"
        })
    }
}

module.exports = {
    sendEmail
}