import React from 'react';
// import Navbar from '../components/Navbar';
import './About.css';

const About = () => {
  return (
    <>
      <div className="about-wrapper">
        <div className="about-main">
          <div className="about-content">
            <h1>About Us</h1>
            <p>
              Founded over two decades ago, Chintamani Traders has established itself as a leader in the EPC sector specializing in electrical and MEP works and renewable energy plants. We are committed to driving the future of energy through cutting-edge solutions and sustainable practices.
            </p>
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide exceptional EPC services that empower our clients to achieve their energy goals while embracing sustainable practices. We strive to deliver projects with unparalleled quality, efficiency, and safety.
            </p>
            <h2>Our Values</h2>
            <ul>
              <li>Integrity: Upholding the highest ethical standards in all our business practices.</li>
              <li>Safety: Prioritizing the safety of our employees, clients, and stakeholders.</li>
              <li>Customer Commitment: Dedicated to understanding client needs and exceeding expectations.</li>
              <li>Excellence: Committed to continuous improvement and excellence.</li>
            </ul>
          </div>
          <div className="about-image">
            <img src={`${process.env.PUBLIC_URL}/images/ourjourney.png`} alt="Our Journey Timeline" />
          </div>
        </div>

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

        <section className="approach-section">
          <h2>Our Approach for Power Plant Design</h2>
          <div className="approach-steps-horizontal">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Understanding of Project Need</h3>
              <ul>
                <li>Hybrid with State electricity</li>
                <li>Hybrid with D.G. set / Wind power</li>
                <li>Stand alone</li>
                <li>Grid connected</li>
              </ul>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Site Survey</h3>
              <ul>
                <li>Sun Direction</li>
                <li>Obstacles</li>
                <li>Radiations-Power O/P</li>
                <li>Architectural design</li>
                <li>Structural / Land strength</li>
                <li>Existing wiring and supply condition</li>
                <li>Study of past disasters</li>
              </ul>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>System Design</h3>
              <ul>
                <li>Power O/P design</li>
                <li>Battery Design</li>
                <li>Load Supply Design</li>
                <li>Structural Design</li>
                <li>3D designs for option to customer</li>
                <li>Final design cross check on site</li>
              </ul>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Implementation</h3>
              <ul>
                <li>Existing structure preparation and modification</li>
                <li>Panel structure installation </li>
                <li>Panel Installation</li>
                <li>Cabling of Solar panel </li>
                <li>Earth pit</li>
                <li>Battery placement</li>
                <li>Electronics integration</li>
                <li>Integration of control/Distribution panel</li>
                <li>Synchronization with grid</li>
                <li>Main supply On</li>
              </ul>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Service and Warranty</h3>
              <ul>
                <li>7-10 days complete training on operation & Maintenance </li>
                <li>Every three months on site monitoring and service for 1 year</li>
                <li>25 years Solar Panel Performance warranty </li>
                <li>Online – Offline customer support team</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
