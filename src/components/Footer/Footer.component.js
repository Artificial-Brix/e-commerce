import React from "react";
import "./Footer.styles.scss";
import logo from "../../assets/img/logo.png";
import elipse from "../../assets/img/Ellipse.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-inner">
        <img src={logo} alt="" className="logo" />
        <div>
          <h4 className="text-logo">Artificial Brix</h4>
          <div className="social-media">
            <span>- instagram</span>
            <span>- pinterest</span>
            <span>- facebook</span>
          </div>
        </div>
      </div>
      <div className="Footer-inner">
        <div className="faqs">
          <h4>FAQs</h4>
          <div className="inner">
            <span>Shopping</span>
            <span>Refund Policy</span>
            <span>Contact Us</span>
          </div>
        </div>
        <div className="contributers">
          <h4>Contributers</h4>
          <div className="inner">
            <span>
              <img src={elipse} alt="" /> Shashank
            </span>
            <span>
              <img src={elipse} alt="" /> Anirudh
            </span>
            <span>
              <img src={elipse} alt="" /> Andres
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
