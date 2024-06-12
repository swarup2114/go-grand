import React from 'react';
import '../stylesComponents/about.css';
import about from "../Assests/about.jpeg"

function About() {
  return (
    <section id="about" className="about-container">
       <div className="about-image">
        <img src={about} alt="Restaurant" />
      </div>
      <div className="about-content">
        <h2>About Us</h2>
        <p>Welcome to our restaurant! We serve the <span className="highlight">best food in town</span>.</p>
        <p>Established in 2005, our restaurant has been dedicated to providing exceptional dining experiences. Our mission is to offer delicious and healthy meals made from the freshest ingredients.</p>
        <p>Our values are rooted in quality, customer satisfaction, and community. We strive to create a welcoming atmosphere where everyone feels at home.</p>
        <p>Come visit us and enjoy a culinary journey that will delight your taste buds!</p>
      </div>
     
    </section>
  );
}

export default About;
