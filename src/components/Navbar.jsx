// src/components/Navbar.jsx

import { useState } from "react";
// Removed 'Link' import since we are using anchor tags for SPA scrolling
import "../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false); // Close menu on click (especially for mobile)

    const element = document.getElementById(targetId);
    if (element) {
      // Calculate scroll position, subtracting the height of the fixed navbar
      // (assuming a height of approximately 5rem, or 80px)
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      // Fallback or handle cases where the ID doesn't exist (e.g., if you have a separate /contact page)
      window.location.href = `#${targetId}`;
    }
  };

  return (
    <header className="navbar-header">
      <div className="nav-container container">
        {/* Logo should link to the top of the home page */}
        <a
          href="#hero"
          className="nav-logo"
          onClick={(e) => scrollToSection(e, "hero")}
        >
          STARGOLD STEEL LLC
        </a>

        {/* Menu Icon (Hamburger) */}
        <div
          className="menu-icon"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? "✕" : "☰"}
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          {/* All links now use anchor tags pointing to section IDs */}
          <a href="#hero" onClick={(e) => scrollToSection(e, "hero")}>
            Home
          </a>
          <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
            About
          </a>
          <a href="#services" onClick={(e) => scrollToSection(e, "services")}>
            Services
          </a>
          <a href="#products" onClick={(e) => scrollToSection(e, "products")}>
            Products
          </a>
          <a href="#machinery" onClick={(e) => scrollToSection(e, "machinery")}>
            Machinery
          </a>
          <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
