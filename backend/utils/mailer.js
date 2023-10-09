const nodemailer = require("nodemailer");
// const colors = require("colors");

const settingsWWW = {
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
};

const sendEmail = async (options) => {
  // create transporter
  const transporter = nodemailer.createTransport({
    // service: "Gmail",
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    // Activate in gmail "less secure app" option
  });

  // def email options
  const mailOptions = {
    from: "JohnVas<john@travelh.io>",
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html:
  };
  // send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
