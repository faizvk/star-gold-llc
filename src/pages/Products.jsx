// src/pages/Products.jsx

import "../styles/Products.css";
import { products } from "../data/products";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="products-wrapper">
      <h2 className="section-title">Our Product Catalogue</h2>

      {products.map((cat, index) => (
        <div
          key={cat.category}
          className={`products-category-section ${index > 0 ? "mt-4" : ""}`}
        >
          <h3 className="category-title">{cat.category}</h3>
          <p className="category-description">{cat.description}</p>

          <div className="products-grid">
            {cat.items.map((item, i) => (
              <div key={i} className="product-card">
                {/* 1. Image Area */}
                <div className="product-image-area">
                  <img
                    // TEMPORARY FIX: Using the second.png asset for all products
                    src={"/second.png"}
                    alt={item.name}
                    className="product-image"
                    loading="lazy"
                  />
                  <div className="image-overlay">View Details</div>
                </div>

                {/* 2. Product Details */}
                <div className="product-details">
                  <div>
                    <h4 className="product-title">{item.name}</h4>
                    <p className="product-short-desc">{item.shortDesc}</p>
                  </div>

                  {/* Professional CTA within the card */}
                  <Link to="/contact" className="product-inquire-btn">
                    Inquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
