var nodemailer = require("nodemailer");
require('dotenv').config(); 
//-----------------------------------------------------------------------------
export async function sendMail(subject, toEmail, otpText) {
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user:  process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  var mailOptions = {
    from: 'ticketshow33@gmail.com',
    to: toEmail,
    subject: subject,
    text: otpText,
  };

  console.log(process.env.NODE_ENV.SMTP_PASS)
  console.log(process.env.NODE_ENV.SMTP_USER)

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}