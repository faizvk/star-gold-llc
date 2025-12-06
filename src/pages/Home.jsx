// src/pages/Home.jsx

import useInView from "../hooks/useInView"; // Import the new hook
import Hero from "../components/Hero";
import About from "./About";
import Services from "./Services";
import Products from "./Products";
import Machinery from "./Machinery";
import Contact from "./Contact";
import "../styles/Home.css";

// Define standard options for professional scroll reveal
const revealOptions = {
  threshold: 0.1, // Element is considered 'in view' when 10% is visible
  rootMargin: "0px 0px -50px 0px", // Start revealing 50px before it hits the bottom
};

// Component for wrapping sections to add animation logic
function AnimatedSection({ id, className, children }) {
  const [ref, inView] = useInView(revealOptions);

  // Use 'animate-on-scroll' base class and add 'is-visible' when the hook detects visibility
  const sectionClasses = `animate-on-scroll ${
    inView ? "is-visible" : ""
  } ${className}`;

  return (
    <section id={id} ref={ref} className={sectionClasses}>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="home-page-wrapper">
      {/* HERO SECTION - Often doesn't need scroll animation as it's visible on load */}
      <section id="hero">
        <Hero />
      </section>

      {/* ABOUT SECTION */}
      <AnimatedSection id="about" className="section-padding">
        <div className="container">
          <About />
        </div>
      </AnimatedSection>

      {/* SERVICES SECTION */}
      <AnimatedSection id="services" className="section-padding section-alt-bg">
        <div className="container">
          <Services />
        </div>
      </AnimatedSection>

      {/* PRODUCTS SECTION */}
      <AnimatedSection id="products" className="section-padding">
        <div className="container">
          <Products />
        </div>
      </AnimatedSection>

      {/* MACHINERY SECTION */}
      <AnimatedSection
        id="machinery"
        className="section-padding section-alt-bg"
      >
        <div className="container">
          <Machinery />
        </div>
      </AnimatedSection>

      {/* CONTACT SECTION */}
      <AnimatedSection id="contact" className="section-padding">
        <div className="container">
          <Contact />
        </div>
      </AnimatedSection>
    </div>
  );
}
