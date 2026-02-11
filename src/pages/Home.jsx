import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">

    

      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <img src="/images/paw.png" alt="paw" className="paw-image paw1" />
        <img src="/images/paw.png" alt="paw" className="paw-image paw2" />

        <div className="hero-content">
          <h1>Caring for Animals, Naturally</h1>
          <p>Premium healthcare products for animals that deserve the best.</p>
          <button className="shop-btn" onClick={() => navigate("/products")}>
            Shop Now
          </button>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-choose">
  <h2>Why Choose KGV Healthcare?</h2>
  <p>
    We keep animals healthy with nature-first formulas. Vet-trusted,
    farmer-approved, and made with care.
  </p>

  <div className="features-wrapper">
    <div className="features-grid scrollable-features">
      {/* First set */}
      <div className="feature-card">
        <span className="icon">🩺</span>
        <h3>Vet Trusted</h3>
        <p>Approved by experienced veterinarians.</p>
      </div>

      <div className="feature-card">
        <span className="icon">💚</span>
        <h3>Natural Care</h3>
        <p>Herbal & safe formulations.</p>
      </div>

      <div className="feature-card">
        <span className="icon">🌍</span>
        <h3>Quality Standards</h3>
        <p>Manufactured with global quality practices.</p>
      </div>

      <div className="feature-card">
        <span className="icon">♻️</span>
        <h3>Eco Friendly</h3>
        <p>Sustainable and responsible sourcing.</p>
      </div>

      {/* Duplicate set for smooth auto-scroll */}
      <div className="feature-card">
        <span className="icon">🩺</span>
        <h3>Vet Trusted</h3>
        <p>Approved by experienced veterinarians.</p>
      </div>

      <div className="feature-card">
        <span className="icon">💚</span>
        <h3>Natural Care</h3>
        <p>Herbal & safe formulations.</p>
      </div>

      <div className="feature-card">
        <span className="icon">🌍</span>
        <h3>Quality Standards</h3>
        <p>Manufactured with global quality practices.</p>
      </div>

      <div className="feature-card">
        <span className="icon">♻️</span>
        <h3>Eco Friendly</h3>
        <p>Sustainable and responsible sourcing.</p>
      </div>
    </div>
  </div>
</section>


      {/* ================= POPULAR PRODUCTS ================= */}
      {/* Popular Products */}
<section className="products">
  <h2>Popular Products</h2>

  <div className="product-wrapper">
    <div className="product-grid scrollable-products">

      {/* ORIGINAL PRODUCTS */}
      <div
        className="product-card clickable"
        onClick={() => navigate("/products/16")}
      >
        <h3 className="product-title">Fly Out+</h3>
        <img src="/images/products/flyout.png" alt="Fly Out+" />
        <p>Kills all stages of fly larvae.</p>
      </div>

      <div
        className="product-card clickable"
        onClick={() => navigate("/products/2")}
      >
        <h3 className="product-title">KGV King Feed</h3>
        <img src="/images/products/kingfeed.png" alt="King Feed" />
        <p>Nutritious feed for all cattle.</p>
      </div>

      <div
        className="product-card clickable"
        onClick={() => navigate("/products/1")}
      >
        <h3 className="product-title">Pro Grow</h3>
        <img src="/images/products/progrow.png" alt="Pro Grow" />
        <p>Protein growth powder with vitamins.</p>
      </div>

      {/* 🔁 DUPLICATES (MOBILE AUTO-SCROLL ONLY) */}
      <div
        className="product-card clickable duplicate"
        onClick={() => navigate("/products/16")}
      >
        <h3 className="product-title">Fly Out+</h3>
        <img src="/images/products/flyout.png" alt="Fly Out+" />
        <p>Kills all stages of fly larvae.</p>
      </div>

      <div
        className="product-card clickable duplicate"
        onClick={() => navigate("/products/2")}
      >
        <h3 className="product-title">KGV King Feed</h3>
        <img src="/images/products/kingfeed.png" alt="King Feed" />
        <p>Nutritious feed for all cattle.</p>
      </div>

      <div
        className="product-card clickable duplicate"
        onClick={() => navigate("/products/1")}
      >
        <h3 className="product-title">Pro Grow</h3>
        <img src="/images/products/progrow.png" alt="Pro Grow" />
        <p>Protein growth powder with vitamins.</p>
      </div>

    </div>

    <button className="buynow-btn" onClick={() => navigate("/products")}>
            Buy Now
          </button>

    {/* Swipe indicator (mobile only via CSS) */}
  
  </div>
</section>



      {/* ================= TESTIMONIALS ================= */}
      {/* Testimonials */}
<section className="testimonials">
  <h2>What Our Customers Say</h2>

  <div className="testimonial-wrapper">
    <div className="scrollable-testimonials">

      {/* ORIGINAL CARDS */}
      <div className="testimonial-card">
        <p>
          "KGV products have improved the health of my dairy cows. I trust them for
          safe and natural solutions."
        </p>
        <h4>- Vipul Shah</h4>
        <span>B2B Customer, Gujarat</span>
      </div>

      <div className="testimonial-card">
        <p>
          "The herbal supplements are amazing! My cows are healthier and more
          active than ever."
        </p>
        <h4>- Omkar Sarode</h4>
        <span> Farm Owner, Wavi</span>
      </div>

      <div className="testimonial-card">
        <p>
          "Affordable, eco-friendly, and effective. Exactly what I wanted for my
           farm."
        </p>
        <h4>- Manoj Gosavi</h4>
        <span> Farmer, Nashik</span>
      </div>

      {/* ⭐ NEW 4TH TESTIMONIAL */}
      <div className="testimonial-card">
        <p>
          "Noticeable improvement in animal immunity and overall health. Highly
          recommended for livestock care."
        </p>
        <h4>- Balasaheb Ghuge</h4>
        <span>Farm Owner, Wavi</span>
      </div>

      {/* 🔁 DUPLICATES (FOR MOBILE AUTO-SCROLL) */}
      <div className="testimonial-card duplicate">
        <p>
          "KGV products have improved the health of my dairy cows. I trust them for
          safe and natural solutions."
        </p>
        <h4>- Ramesh Patel</h4>
        <span>Farmer, Gujarat</span>
      </div>

      <div className="testimonial-card duplicate">
        <p>
          "The herbal supplements are amazing! My goats are healthier and more
          active than ever."
        </p>
        <h4>- Priya Sharma</h4>
        <span>Goat Farm Owner, Rajasthan</span>
      </div>

      <div className="testimonial-card duplicate">
        <p>
          "Affordable, eco-friendly, and effective. Exactly what I wanted for my
          poultry farm."
        </p>
        <h4>- Anil Kumar</h4>
        <span>Poultry Farmer, Maharashtra</span>
      </div>

      <div className="testimonial-card duplicate">
        <p>
          "Noticeable improvement in animal immunity and overall health. Highly
          recommended for livestock care."
        </p>
        <h4>- Suresh Mehta</h4>
        <span>Farm Owner, Madhya Pradesh</span>
      </div>

    </div>
  </div>
</section>



      {/* ================= INVITE SECTION ================= */}
      <section className="invite">
        <div className="invite-content">
          <h2>Join Us in Caring for Animals, Naturally</h2>
          <p>
            Partner with us to provide safe, herbal and effective healthcare
            solutions.
          </p>
          <button
            className="invite-btn"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
