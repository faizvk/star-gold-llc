// src/components/Footer.jsx

import { Link } from "react-router-dom"; // Assuming internal links will use React Router
import "../styles/Footer.css"; // Note the capitalization

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container container">
        {/* Column 1: Branding & Contact Info */}
        <div className="footer-column footer-brand">
          <Link to="/" className="footer-logo">
            STARGOLD STEEL LLC
          </Link>
          <p className="brand-slogan">
            Precision steel solutions for a stronger tomorrow.
          </p>
          <div className="contact-info">
            <p>
              <strong>Email:</strong> info@stargoldsteel.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p>
              <strong>Address:</strong> 123 Industrial Ave, Dubai, UAE
            </p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Our Services</Link>
            </li>
            <li>
              <Link to="/products">Products Catalogue</Link>
            </li>
            <li>
              <Link to="/machinery">Machinery & Capability</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal & Resources */}
        <div className="footer-column footer-links">
          <h3>Resources</h3>
          <ul>
            <li>
              <Link to="/contact">Get a Quote</Link>
            </li>
            <li>
              <a href="/career">Careers</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media (Placeholder Icons) */}
        <div className="footer-column footer-social">
          <h3>Connect</h3>
          <div className="social-icons">
            {/* Replace with actual Icon components (e.g., react-icons) */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              🔗
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              🐦
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              📘
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; 2025 STARGOLD STEEL LLC. All rights reserved. | Built with
            React.
          </p>
        </div>
      </div>
    </footer>
  );
}
