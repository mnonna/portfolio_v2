const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_NAME,
        pass: process.env.GMAIL_PASS
    }
});

function sendMessage({ from, subject, message }, callback) {
    const mailOptions = {
        from: from,
        to: process.env.GMAIL_NAME,
        subject: subject,
        text: message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            callback(error, null);
        } else {
            callback(null, info);
        }
    }); 
}

module.exports = sendMessage;