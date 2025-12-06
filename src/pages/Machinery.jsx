// src/pages/Machinery.jsx

import "../styles/Machinery.css";

const machinesData = [
  {
    name: "Shearing Machine (Hydraulic)",
    icon: "✂️",
    capability:
      "Capable of straight-line cutting through metal sheets up to 12mm thickness with high precision, ensuring clean edges for further processing.",
  },
  {
    name: "Fiber Laser Cutting Machine",
    icon: "⚡",
    capability:
      "State-of-the-art automated cutting for intricate shapes in stainless steel, aluminum, and mild steel with extreme accuracy and minimal material waste.",
  },
  {
    name: "CNC Metal Sheet Bending Machine (Press Brake)",
    icon: "📐",
    capability:
      "Precision forming and bending of metal sheets into complex parts, managed by Computer Numerical Control (CNC) for repeatable, tight tolerances.",
  },
  {
    name: "Heavy Duty Welding Stations (TIG & MIG)",
    icon: "🔥",
    capability:
      "Equipped for Tungsten Inert Gas (TIG) and Metal Inert Gas (MIG) welding, delivering strong, high-quality, and aesthetically clean joints across all metal types.",
  },
];

export default function Machinery() {
  return (
    <div className="machinery-wrapper">
      <h2 className="section-title">Our Fabrication Capabilities</h2>
      <p className="machinery-subtitle">
        Investment in world-class machinery ensures precision, capacity, and
        quality in every cut, bend, and weld.
      </p>

      {/* Using the global item-grid and customized machinery-card */}
      <div className="item-grid machinery-grid">
        {machinesData.map((machine, i) => (
          <div key={i} className="card machinery-card">
            <div className="machinery-image-area">
              <span className="machine-icon">{machine.icon}</span>

              {/* Image now uses the temporary local asset */}
              <img
                src="/second.png"
                alt={machine.name}
                className="machinery-image" // Added class for image styling
                loading="lazy"
              />
            </div>

            <div className="machinery-details">
              <h3>{machine.name}</h3>
              <p>{machine.capability}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
