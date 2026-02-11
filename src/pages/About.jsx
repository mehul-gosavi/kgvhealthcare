import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* 🟢 Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About KGV Healthcare</h1>
          <p>
            KGV Healthcare Pvt Ltd (Kindly Grow Veterinary) is a dedicated and
            forward-thinking company committed to enhancing animal health and
            productivity through scientifically formulated feed supplements and
            healthcare solutions. Established with a passion for veterinary
            well-being, we aim to support farmers, pet owners, and the animal
            husbandry industry by delivering high-quality, reliable, and
            affordable products.
          </p>
        </div>
      </section>

      

      {/* 🌿 Mission Section */}
      <section className="mission-section">
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            At <strong>KGV Healthcare</strong>, our mission is embedded in our
            name — <strong>Kindly Grow Veterinary</strong> — reflecting our commitment to
            nurturing growth, kindness, and care in every aspect of animal
            healthcare. We believe that healthy animals lead to healthier
            communities, and we work tirelessly to bring innovation, safety, and
            sustainability to the forefront of our products and practices.
          </p>
        </div>
      </section>

      {/* 🧩 What We Do Section */}
      <section className="whatwedo-section">
        <img src="/images/paw.png" alt="paw" className="paw one" />
        <img src="/images/paw.png" alt="paw" className="paw two" />

        <h2>What We Do</h2>
        <p className="whatwedo-intro">
          At KGV Healthcare, we integrate science and nature to deliver effective
          solutions for animal well-being. Our efforts span across research,
          product innovation, and farmer education.
        </p>

        <div className="whatwedo-grid">
          <div className="whatwedo-card">
            {/* <img src="/images/research.jpg" alt="Research & Innovation" /> */}
            <h3>Veterinary Healthcare Products</h3>
            <p>
              A range of solutions aimed at disease prevention, treatment, and performance enhancement,
               developed in collaboration with veterinary professionals.

            </p>
          </div>

          <div className="whatwedo-card">
            {/* <img src="/images/products.jpg" alt="Product Development" /> */}
            <h3>Customized Formulations</h3>
            <p>
              We work closely with clients to create specialized blends that address specific nutritional or therapeutic needs.

            </p>
          </div>

          <div className="whatwedo-card">
            {/* <img src="/images/support.jpg" alt="Customer Support" /> */}
            <h3>Animal Feed Supplements</h3>
            <p>
              Tailored nutritional products designed to boost immunity, growth, and overall health across species – from livestock to pets.

            </p>
          </div>
        </div>
      </section>

      {/* 🧪 Values Section */}
<section className="values-section">
  <h2>Our Core Values</h2>

  <div className="values-wrapper">
    <div className="values-grid scrollable-values">

      {/* ORIGINAL CARDS */}
      <div className="value-card">
        <span className="icon">💚</span>
        <h3>Compassion</h3>
        <p>We care deeply for animals and their wellbeing.</p>
      </div>

      <div className="value-card">
        <span className="icon">🌱</span>
        <h3>Natural Science</h3>
        <p>Our products combine nature and innovation.</p>
      </div>

      <div className="value-card">
        <span className="icon">🔬</span>
        <h3>Quality</h3>
        <p>Each product meets international standards of safety.</p>
      </div>

      <div className="value-card">
        <span className="icon">🤝</span>
        <h3>Integrity</h3>
        <p>We believe in transparency and long-term trust.</p>
      </div>

      {/* DUPLICATE CARDS FOR MOBILE AUTO SCROLL */}
      <div className="value-card duplicate">
        <span className="icon">💚</span>
        <h3>Compassion</h3>
        <p>We care deeply for animals and their wellbeing.</p>
      </div>

      <div className="value-card duplicate">
        <span className="icon">🌱</span>
        <h3>Natural Science</h3>
        <p>Our products combine nature and innovation.</p>
      </div>

      <div className="value-card duplicate">
        <span className="icon">🔬</span>
        <h3>Quality</h3>
        <p>Each product meets international standards of safety.</p>
      </div>

      <div className="value-card duplicate">
        <span className="icon">🤝</span>
        <h3>Integrity</h3>
        <p>We believe in transparency and long-term trust.</p>
      </div>

    </div>
  </div>
</section>

      {/* 🧭 Journey Section
      <section className="journey-section">
        <div className="journey-content">
          <h2>Our Journey</h2>
          <p>
            Starting as a small initiative with a passion for animal wellness,
            KGV Healthcare has grown into a trusted name across the animal
            healthcare industry. Our growth is driven by consistent innovation,
            ethical practices, and genuine love for animals.
          </p>
          <button className="journey-btn">Learn More</button>
        </div>
        
      </section> */}

      {/* 🌍 Closing Section */}
      <section className="about-closing">
        <h2>Let’s grow kindly. Let’s grow veterinary.</h2>
        <p>
          With a focus on research, quality assurance, and ethical business practices, KGV Healthcare Pvt Ltd is 
          emerging as a trusted name in the veterinary sector. Our goal is to be a partner in progress for those who care for animals
          — empowering them with products that make a real difference.

        </p>
      </section>
    </div>
  );
};

export default About;
