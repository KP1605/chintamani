import React from 'react';
import './WhySection.css';

const WhySection = () => {
  return (
    <section className="why-section" id="why">
      <div className="right-content">
        <h1>
          <span className="light">We Are Out Of The </span>
          <span className="highlight">Crowd</span>
        </h1>
        <div className="why-grid">
          <div className="why-card">
            <h3>Zero breakdown since 1999</h3>
          </div>
          <div className="why-card">
            <h3>Experienced technical team</h3>
          </div>
          <div className="why-card">
            <h3>Sustainable technology product</h3>
          </div>
          <div className="why-card">
            <h3>Intime Service support</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;