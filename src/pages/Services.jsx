// src/pages/Services.jsx

import "../styles/Services.css";

// Detailed service data for richer cards
const detailedServices = [
  {
    title: "Stainless Steel Kitchen Equipment",
    icon: "🍽️",
    description:
      "Design, fabrication, and installation of durable, hygienic stainless steel equipment for commercial kitchens, restaurants, and catering services.",
  },
  {
    title: "Custom Fabrication (SS, GI, MS, Aluminium)",
    icon: "🏗️",
    description:
      "Bespoke metal fabrication using Stainless Steel (SS), Galvanized Iron (GI), Mild Steel (MS), and Aluminium, meeting specific architectural and industrial demands.",
  },
  {
    title: "Supply Chain & Material Sourcing",
    icon: "📦",
    description:
      "Reliable sourcing and supply of high-grade raw metal materials and finished components, ensuring quality and timely delivery for your project needs.",
  },
  {
    title: "Installation & Site Services",
    icon: "🛠️",
    description:
      "Professional, efficient, and safety-compliant installation services for all fabricated products, minimizing downtime and ensuring perfect fit and function.",
  },
  {
    title: "Maintenance & Repair Contracts",
    icon: "🩺",
    description:
      "Comprehensive preventive and corrective maintenance services to ensure the longevity and peak performance of your steel assets and equipment.",
  },
];

// Why Choose Us data with descriptions for a professional touch
const whyChooseDetailed = [
  {
    title: "Uncompromising Quality",
    description:
      "We adhere to stringent international standards, utilizing certified materials and expert craftsmen to ensure every product exceeds expectations.",
  },
  {
    title: "Reliable Expertise",
    description:
      "With over a decade of experience, our technical team provides reliable consultation, precise design, and flawless execution on complex projects.",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Your satisfaction is our priority. We offer dedicated support and flexible solutions tailored to your unique requirements and budget.",
  },
];

export default function Services() {
  return (
    // Note: The 'container' and 'section-padding' classes are applied in Home.jsx
    // This component only renders the inner content.
    <div className="services-wrapper">
      <h2 className="section-title">Our Core Services</h2>
      <p className="section-subtitle">
        We specialize in end-to-end steel fabrication and service solutions,
        delivered with precision and passion.
      </p>

      {/* MAIN SERVICES GRID - Using the professional global 'item-grid' and 'card' styles */}
      <div className="item-grid service-cards-grid">
        {detailedServices.map((service, i) => (
          <div key={i} className="card service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {/* WHY CHOOSE US SECTION */}
      <div className="why-choose-section">
        <h2 className="section-title">Why Partner with STARGOLD STEEL?</h2>

        {/* Using a modified grid layout for this section */}
        <div className="item-grid why-choose-grid">
          {whyChooseDetailed.map((item, i) => (
            <div key={i} className="card feature-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
