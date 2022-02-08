const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "chiragbhayana2k@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}, Let me Know how you get along with this app.`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "chiragbhayana2k@gmail.com",
    subject: "Mail Regarding Cancelation!",
    text: `Hello ${name} Can We ask why you cancel our services`,
  });
};
module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
// sgMail
//   .send({
//     to: "chiragbhayana2k@gmail.com",
//     from: "chiragbhayana2k@gmail.com",
//     subject: "This is my first Creation!",
//     text: "I hope this one actually get to you.",
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
