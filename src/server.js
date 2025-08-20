const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

app.post("/send-email", (req, res) => {
  const { name, email, number, message } = req.body;

  const mailOptionsAdmin = {
    from: "your-email@gmail.com",
    to: "admin-email@example.com",
    subject: "New Contact Form Submission",
    text: `You received a new message from ${name} (${email}).\n\nPhone: ${number}\nMessage: ${message}`,
  };

  const mailOptionsUser = {
    from: "your-email@gmail.com",
    to: email,
    subject: "Thank You for Your Message!",
    text: `Hello ${name},\n\nThank you for contacting us. We have received your message and will get back to you soon.\n\nBest Regards,\nYour Company`,
  };

  transporter.sendMail(mailOptionsAdmin, (error, info) => {
    if (error) {
      console.error("Error sending admin email:", error);
      return res
        .status(500)
        .json({ success: false, message: "Failed to send admin email." });
    }

    transporter.sendMail(mailOptionsUser, (error, info) => {
      if (error) {
        console.error("Error sending user email:", error);
        return res
          .status(500)
          .json({ success: false, message: "Failed to send thank-you email." });
      }

      console.log("Emails sent successfully:", info.response);
      return res
        .status(200)
        .json({ success: true, message: "Form submitted successfully." });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
