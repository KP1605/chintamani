import { Link } from 'react-router-dom';
import React from 'react';
import './OfferingsSection.css'; // We will create this CSS file next

const OfferingsSection = () => {
  return (
    <section className="offerings-section">
      <h2>Our Offerings</h2>
      <div className="cards-container">
        <div className="offering-card">
          <h5>HT Infrastructures</h5>
          <ul>
            <li>GIS</li>
            <li>CSS</li>
            <li>Transformer</li>
          </ul>
          <a href="/products" className="view-more-btn">View More</a>
        </div>
        <div className="offering-card">
          <h5>EPC Project</h5>
          <ul>
            <li>MW Solar Power Plant</li>
            <li>Substation up to 66KW</li>
            <li>Transmission Line</li>
          </ul>
          <a href="/products" className="view-more-btn">View More</a>
        </div>
        <div className="offering-card">
          <h5>Operation & Maintenance</h5>
          <ul>
            <li>HT Infrastructures</li>
            <li>LT Infrastructures</li>
            <li>RE Power Projects</li>
          </ul>
          <a href="/products" className="view-more-btn">View More</a>
        </div>
        <div className="offering-card">
          <h5>FACADE Solutions</h5>
          <ul>
            <li>Solar Glass FACADE</li>
            <li>Vertical Wall</li>
            <li>Solar Glass Roof</li>
            <li>FACADE Lighting</li>
          </ul>
          <a href="/products" className="view-more-btn">View More</a>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
<Link to="/products" className="view-more-btn">View More</Link>