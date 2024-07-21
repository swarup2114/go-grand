import React from 'react';
import '../stylesComponents/contact.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <div>
      <section className="contact">
        <div className="contact-info">
          <h2>We Would Love to Hear From You</h2>
          <div>
            <p>Tel: 8083383380</p>
            <p>villagerestaurant@gmail.com</p>
          </div>
          <div>
            <p>opps. Kanlyan jewellers, Marathahalli bridge, Bengaluru, Karnataka, 560037</p>
          </div>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <input type="submit" value="Get In Touch" />
          </form>
        </div>
      </section>
      <div>
        <iframe
          title="Village Restaurant Location"
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=12.957579761,77.6995369+(Village%20Restaurant)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps trackers</a>
        </iframe>
      </div>
    </div>
  );
}

export default Contact;
