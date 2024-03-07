"use strict";
const nodemailer = require("nodemailer");

async function mailer(email) {
  console.log("new task is triggered")
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.in",
    port: 465,
    secure: true,
    auth: {
      user: 'info@datacenterallianz.com',
      pass: 'p2Ui6dtRuct0',
    },
  });


  const info = await transporter.sendMail({
    from: 'info@datacenterallianz.com',
    to: email,
    subject: "Mail Working", // Subject line
    text: "Mails Working now", // plain text body
    html: "<b>Mails Working now</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = mailer;
