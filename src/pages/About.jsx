// src/pages/About.jsx

import "../styles/About.css";

export default function About() {
  return (
    <div className="about-wrapper">
      <h2 className="section-title">Who We Are</h2>

      {/* 1. Introductory Section: Text + Optional Image/Visual */}
      <div className="about-intro-grid">
        <div className="about-main-content">
          <p className="lead-paragraph">
            **STARGOLD STEEL LLC** has been a pillar of precision and quality in
            steel fabrication since our founding in **2015**. Based in Jurf –
            Ajman, UAE, we have grown by focusing on **uncompromising
            standards** and building lasting partnerships across the commercial
            and industrial sectors.
          </p>
          <p>
            Our dedicated team combines traditional craftsmanship with
            cutting-edge technology to deliver bespoke metal solutions in
            Stainless Steel, Galvanized Iron, Mild Steel, and Aluminium. We are
            driven by innovation and a commitment to sustainability in every
            project we undertake.
          </p>
          {/* Enhanced Call-to-Action with icon for professionalism */}
          <a href="/contact" className="btn-secondary">
            Get in Touch with Our Experts <span className="arrow-icon">→</span>
          </a>
        </div>

        {/* Image now correctly placed here using the <img> tag */}
        <div className="about-visual-placeholder">
          <img
            src="/second.png"
            alt="STARGOLD STEEL fabrication facility or finished architectural work"
            className="about-image"
            loading="lazy"
          />
        </div>
      </div>

      {/* Horizontal Rule to separate concepts professionally */}
      <hr className="section-divider" />

      {/* 2. Vision & Mission Cards - Using the global grid and card styles */}
      <h2 className="section-title vision-mission-title">
        Our Guiding Principles
      </h2>

      <div className="item-grid vision-mission-grid">
        <div className="card mission-card">
          <h3>Vision 🌟</h3>
          <p>
            To be the **premier provider** of innovative and sustainable steel
            fabrication solutions—setting industry benchmarks for excellence and
            reliability across the Middle East.
          </p>
        </div>

        <div className="card mission-card">
          <h3>Mission 🎯</h3>
          <p>
            To deliver **superior fabrication services** with precision,
            innovation, integrity, and sustainability—creating long-term value
            for our customers and stakeholders.
          </p>
        </div>

        <div className="card mission-card">
          <h3>Our Story 📜</h3>
          <p>
            Our journey reflects a commitment to precision, quality, and
            customer satisfaction, constantly evolving to meet the dynamic needs
            of the modern construction and industrial landscape.
          </p>
        </div>
      </div>
    </div>
  );
}
