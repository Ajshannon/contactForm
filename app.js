const express = require('express')
const app = express()
const port = 3000;

// allows us to process submitted form data
app.use(express.urlencoded({extended: true}));

app.post('/', function(req, res) {
  var name = req.body.user_name;
  var message = req.body.user_message;
  var email = req.body.user_mail;
  var iOS = req.body.user_iOS;
  var Android = req.body.user_Android;
  var Mac = req.body.user_Mac;
  var Windows = req.body.user_Windows;
  var Chrome = req.body.user_Chrome;
  var Linux = req.body.user_Linux;
  var inquiry = req.body.user_inquiry;
  var plan = req.body.user_plan;
  var message = req.body.user_message;

  console.log("Name: " + name);
  console.log("Message: " + message);
  console.log("E-Mail: " + email);
  console.log("Devices: " + iOS + " " + Android + " " + Mac + " " + Windows + " " + Chrome + " " + Linux);
  console.log("Inquiry: " + inquiry);
  console.log("Plan:" + plan);
  console.log("Message: " + message)

  res.send(`
    <h1>Thanks ${name}!</h1>
    <p>We received your message below, and will get back to you at <strong>${email}</strong>.</p>
    <blockquote>${message}</blockquote>
    `);
});

app.listen(port);