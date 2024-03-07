"use strict";
const nodemailer = require("nodemailer");

async function mailer(email) {
  console.log("task is triggered")
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'ticketshow33@gmail.com',
      pass: 'vgdlpfzsmmjohlka',
    },
  });


  const info = await transporter.sendMail({
    from: 'ticketshow33@gmail.com',
    to: email,
    subject: "Mail Working", // Subject line
    text: "Mails Working now", // plain text body
    html: "<b>Mails Working now</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = mailer;
