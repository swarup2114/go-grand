import React from "react";
import "../stylesComponents/footer.css";
import { useNavigate } from "react-router-dom";

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
        <p onClick={()=>usenav("/menu")}>Menu</p>
        <p onClick={()=>usenav("/about")}>About</p>
        <p onClick={()=>usenav("/contact")}>Contact</p>
       
      </div>
      <div className="footer-section social">
        <h4>Follow US</h4>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
    </footer>
  );
};

export default Footer;
