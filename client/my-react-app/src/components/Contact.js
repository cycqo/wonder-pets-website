import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1n6yx5p",
        "template_69862jn",
        form.current,
        "duMiG1BXDU5aeq7gE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Email sent successfully!"); // Set the success message
        },
        (error) => {
          console.log(error.text);
          setMessage("Failed to send email."); // Set the error message
        }
      );
  };

  return (
    <div className="form-container">
      <h1 className="info-head">Contact Us</h1>
      {message && <div className="message">{message}</div>} {/* Display the message box if a message exists */}
      <form ref={form} onSubmit={sendEmail}>
        <p>Send us a message!</p>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
