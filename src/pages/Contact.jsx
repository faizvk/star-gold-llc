// src/pages/Contact.jsx

import { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  // Simple state management for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for your inquiry! We will contact you shortly.");
    // In a real app, you would submit this data to a backend API endpoint.
  };

  return (
    <div className="contact-wrapper">
      <h2 className="section-title">Get in Touch</h2>
      <p className="contact-subtitle">
        We're ready to discuss your fabrication needs. Contact us today for a
        precise quote or consultation.
      </p>

      <div className="contact-grid">
        {/* 1. Contact Form */}
        <div className="contact-form-area">
          <h3>Send us a Quick Message</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Fabrication Requirements / Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>

        {/* 2. Contact Information & Map */}
        <div className="contact-info-area">
          <h3>Our Details & Location</h3>

          {/* Information Block */}
          <div className="info-block">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <p>
                P.O Box 13866, Jurf 1 Ajman - UAE <br />
                <span className="location-name">STARGOLD STEEL LLC</span>
              </p>
            </div>
            <div className="info-item">
              <span className="info-icon">📧</span>
              <p>stargoldajman@gmail.com</p>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <p>+971 6 5523 3449</p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="map-placeholder">
            [Interactive Map Embed Placeholder]
          </div>
        </div>
      </div>
    </div>
  );
}
