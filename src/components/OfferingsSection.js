import { Link } from 'react-router-dom';
import React from 'react';
import './OfferingsSection.css';

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
          <Link to="/products" className="view-more-btn" onClick={() => window.scrollTo(0, 0)}>View More</Link>
        </div>
        <div className="offering-card">
          <h5>EPC Project</h5>
          <ul>
            <li>MW Solar Power Plant</li>
            <li>Substation up to 66KW</li>
            <li>Transmission Line</li>
          </ul>
          <Link to="/products" className="view-more-btn" onClick={() => window.scrollTo(0, 0)}>View More</Link>
        </div>
        <div className="offering-card">
          <h5>Operation & Maintenance</h5>
          <ul>
            <li>HT Infrastructures</li>
            <li>LT Infrastructures</li>
            <li>RE Power Projects</li>
          </ul>
          <Link to="/products" className="view-more-btn" onClick={() => window.scrollTo(0, 0)}>View More</Link>
        </div>
        <div className="offering-card">
          <h5>FACADE Solutions</h5>
          <ul>
            <li>Solar Glass FACADE</li>
            <li>Vertical Wall</li>
            <li>Solar Glass Roof</li>
            <li>FACADE Lighting</li>
          </ul>
          <Link to="/products" className="view-more-btn" onClick={() => window.scrollTo(0, 0)}>View More</Link>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
