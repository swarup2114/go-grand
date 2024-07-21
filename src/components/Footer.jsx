
import React from 'react';
import '../stylesComponents/footer.css';

const Footer = () => {
  const usenav=useNavigate()

  return (
    <footer className="footer">
      <div className="footer-section address">
        <h4>Our Address</h4>
        <p>Village Restaurant</p>
        <p>8083383380</p>
        <p>
          opps. Kalyan jewellers ,Marathahalli bridge ,Bengaluru
          ,Karnataka,560037
        </p>
      </div>
      <div className="footer-section links">
        <h4>Quick Links</h4>
        
          <p >Terms of use</p>
          <p >Privacy policy</p>
         <p>Cookies</p>
          <p >Help</p>
          <p >FQAs</p>
       
      </div>
      <div className="footer-section newsletter">
        <h4>Newsletter</h4>
        <p>Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo dictum nec non quam. Tortor eu placerat rhoncus, lorem quam iaculis felis, sed lacus neque id eros.</p>
        <input type="email" placeholder="Email goes here" />
      </div>
    </footer>
  );
};

export default Footer;
