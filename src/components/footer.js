import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3>KGV Healthcare</h3>
        <p>© 2025 KGV Healthcare. All Rights Reserved.</p>
      </div>

      

      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {/* <li><Link to="/OurTeam">Our Team</Link></li> */}

        </ul>
      </div>

      <div className="footer-contact">
        <h4>Contact Us</h4>
        <p>Email: kgvhealthcare@gmail.com, saleskgvhealthcare@gmail.com</p>

        <p>Mobile : 7387471991, 9890031621, 8485814506</p>

        {/* <p>Mobile : 7387471991</p> */}


      </div>
    </footer>
  );
}

export default Footer;
