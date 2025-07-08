import React from 'react';
import Navbar from '../components/navbar'; // reuse your navbar
import './About.css'; // optional if you want separate styles

function About() {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <h1>About Us</h1>
        <p>
          Chintamani Power Infra Pvt. Ltd. has over 25 years of experience in the EPC sector.
          We have successfully completed a diverse range of projects, from small-scale electrical
          installations to large-scale renewable energy plants.
        </p>
        <p>
          Our mission is to provide exceptional EPC services that empower our clients to achieve
          their energy goals while embracing sustainable practices. We strive to deliver projects
          with unparalleled quality, efficiency, and safety.
        </p>
        <p>
          We work across industrial, commercial, and residential sectors, demonstrating our ability
          to adapt and excel in different environments.
        </p>
      </div>
    </>
  );
}

export default About;
