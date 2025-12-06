// src/components/Hero.jsx

import "../styles/hero.css";
// Removed useNavigate import as we are using anchor links for SPA scrolling

// Helper function for smooth scrolling (reused logic from Navbar)
const handleScrollTo = (e, targetId) => {
  e.preventDefault();
  const element = document.getElementById(targetId);
  if (element) {
    // Offset accounts for the fixed Navbar height (approx 80px)
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
    window.location.href = `#${targetId}`;
  }
};

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content container">
        {/* Added a subtle company name above the title for branding */}
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "500",
            color: "var(--color-accent)",
            letterSpacing: "2px",
            marginBottom: "0.5rem",
          }}
        >
          STARGOLD STEEL LLC
        </p>

        <h1>Perfection at its Finest</h1>
        <p>Crafting excellence in steel fabrication since 2015</p>

        {/* Button now uses the scroll helper function */}
        <button
          className="btn-primary"
          onClick={(e) => handleScrollTo(e, "services")}
        >
          Explore Services
        </button>
      </div>
    </div>
  );
}
