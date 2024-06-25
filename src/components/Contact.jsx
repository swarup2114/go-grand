import React from "react";
import "../stylesComponents/contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="contact-image">
        <img
          src="https://rishikeshcamps.in/wp-content/uploads/2023/05/restaarant.jpg"
          alt="Restaurant"
        />
      </div>
    </section>
  );
}

export default Contact;
