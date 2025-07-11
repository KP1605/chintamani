import React from 'react';
import Navbar from '../components/Navbar';
import './About.css';
{/*import journeyImage from '../assets/journey.png'; // Save your journey image here*/ }

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <section className="about-section">
          <h1>About Us</h1>
          <p>
            Founded over two decades ago, Chintamani Traders has established itself as a leader in the EPC (Engineering, Procurement, and Construction) sector specializing in electrical and MEP works and renewable energy plants with a rich legacy of innovation, reliability, and excellence. We are committed to driving the future of energy through cutting-edge solutions and sustainable practices.
          </p>
        </section>

        <section className="mission-vision">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide exceptional EPC services that empower our clients to achieve their energy goals while embracing sustainable practices. We strive to deliver projects with unparalleled quality, efficiency, and safety, ensuring every solution meets the highest standards of excellence.
            </p>
          </div>
          <div className="vision">
            <h2>Our Values</h2>
            <ul>
              <li>Integrity: Upholding the highest ethical standards in all our business practices.</li>
              <li>Safety: Prioritizing the safety of our employees, clients, and stakeholders.</li>
              <li>Customer Commitment: Dedicated to understanding client needs and exceeding expectations.</li>
              <li>Excellence: Committed to continuous improvement and excellence.</li>
            </ul>
          </div>
        </section>

        <section className="core-competencies">
          <h2>Core Competencies</h2>
          <div className="competency-cards">
            <div className="card">
              <h3>Electrical Works</h3>
              <ul>
                <li>Design and Engineering</li>
                <li>Procurement</li>
                <li>Construction and Installation</li>
                <li>Testing and Commissioning</li>
              </ul>
            </div>
            <div className="card">
              <h3>Renewable Energy Plants</h3>
              <ul>
                <li>Project Development</li>
                <li>Engineering and Design</li>
                <li>Procurement and Construction</li>
                <li>Operation and Maintenance</li>
                <li>Solar Façade</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="journey">
          <h2>Our Journey</h2>
          {/*<img src={journeyImage} alt="Our Journey Timeline" />*/}
        </section>
      </div>
    </>
  );
};

export default About;
