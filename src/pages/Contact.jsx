import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-info-container">
      {/* 🌿 Header */}
      <section className="contact-info-hero">
        <h1>Contact KGV Healthcare</h1>
        <p>
          We’re here to help you with any questions regarding our animal health
          products or services. Reach out to us — we’d love to connect!
          
        </p>
      </section>

     {/* 🏢 Contact Details Section */}
<section className="contact-details-section">
  <div className="contact-cards-wrapper scrollable-contact">

    {/* ORIGINAL CARDS */}
    <div className="contact-card">
      <div className="icon">📍</div>
      <h3>Our Office</h3>
      <p>Kotamgaon, Nashik, Maharashtra, India</p>
    </div>

    <div className="contact-card">
      <div className="icon">📞</div>
      <h3>Call Us</h3>
      <p>7387471991, 9890031621, 8485814506</p>
    </div>

    <div className="contact-card">
      <div className="icon">📧</div>
      <h3>Email Us</h3>
      <p>kvghealthcare@gmail.com</p>
    </div>

    <div className="contact-card">
      <div className="icon">⏰</div>
      <h3>Working Hours</h3>
      <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
    </div>

    {/* 🔁 DUPLICATE CARDS FOR MOBILE AUTO-SCROLL */}
    <div className="contact-card duplicate">
      <div className="icon">📍</div>
      <h3>Our Office</h3>
      <p>Kotamgaon, Nashik, Maharashtra, India</p>
    </div>

    <div className="contact-card duplicate">
      <div className="icon">📞</div>
      <h3>Call Us</h3>

      <p>7387471991, 9890031621, 8485814506</p>

    </div>

    <div className="contact-card duplicate">
      <div className="icon">📧</div>
      <h3>Email Us</h3>

      <p>kvghealthcare@ gmail.com</p>
    </div>

    <div className="contact-card duplicate">
      <div className="icon">⏰</div>
      <h3>Working Hours</h3>
      <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
    </div>

  </div>
</section>


{/* map section */}


      <section className="map-section">
  <h2>Find Us Here</h2>
  <div className="map-container">
    <iframe
      title="KGV Healthcare Location"
      src = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3750.11992574467!2d73.90662767522802!3d19.961458181434033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDU3JzQxLjMiTiA3M8KwNTQnMzMuMSJF!5e0!3m2!1sen!2sin!4v1770804016210!5m2!1sen!2sin" 
      // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d702.3756342074307!2d73.90299913675736!3d19.95671801471914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddbf6451a46be3%3A0x88ed685334b32ed6!2sKotamgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1760037308431!5m2!1sen!2sin" 
      
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
</section>


      {/* 🌍 Closing */}
      <section className="contact-end">
        <h2>We’re always happy to assist you!</h2>
        <p>
          Whether you’re a farmer, distributor, or animal care professional — 
          KGV Healthcare is your trusted partner in animal wellness.
          
        </p>
        <p>KGV - Kindly Grow Veterinary.</p>
      </section>

      
    </div>
  );
};

export default Contact;
