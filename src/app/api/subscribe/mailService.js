var nodemailer = require("nodemailer");
//require('dotenv').config(); 
//-----------------------------------------------------------------------------
export async function sendMail(subject, toEmail, otpText) {
  var transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: 'ticketshow33@gmail.com',
      pass: 'vgdlpfzsmmjohlka',
    },
  });
  var mailOptions = {
    from: 'ticketshow33@gmail.com',
    to: toEmail,
    subject: subject,
    text: otpText,
  };

  
  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        // Handle the error locally and resolve with an error object
        resolve({ success: true, error: err.message || 'Unknown error' });
      } else {
        // Resolve with the response
        resolve({ success: true, response });
      }
    });
  });
}