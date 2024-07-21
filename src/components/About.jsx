import React from 'react';
import '../stylesComponents/about.css';
import about from "../Assests/about.jpeg";
import g2 from "../Assests/g2.jpeg";
import g3 from "../Assests/g3.jpeg";
import g4 from "../Assests/g4.jpeg";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const galleryImages = [ g3, g2, g4];

function About() {
  return (
    <div>
      <section id="about" className="about-container">
        <div className="about-content">
          <p className='welcome'>WELCOME TO Village Restaurant</p>
          <h2>
            Serving High-Quality Food for 5 Years
          </h2>
          <p>At Village Restaurant, we are committed to providing our customers with natural and high-quality food. Our dedication to excellence in service and taste has been our hallmark for the past five years.</p>
          <div className="food-details">
            <div className="food-detail">
              <h2>Natural Food</h2>
              <p>We use the freshest ingredients to prepare delicious and wholesome meals. Our commitment to natural food ensures that you enjoy the best flavors and health benefits.</p>
            </div>
            <div className="food-detail">
              <h2>High-Quality Standards</h2>
              <p>Our stringent quality standards guarantee that every dish served meets our high expectations for taste and presentation. We believe in delivering an exceptional dining experience.</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src={about} alt="Restaurant" />
        </div>
      </section>
      <div>
        <h1>Our Place</h1>
        <Carousel>
          {galleryImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`gallery-${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default About;
