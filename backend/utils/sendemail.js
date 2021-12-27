const nodemailer = require("nodemailer");

async function sendEmail(options) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    secure: true, // true for 465, false for other ports
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL, // generated ethereal user
      pass: process.env.SMPT_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from: process.env.SMPT_MAIL, // sender address
    to: options.email, // list of receivers
    subject: options.subject, // Subject line
    text: options.message, // plain text body
  });
}

module.exports = sendEmail;
