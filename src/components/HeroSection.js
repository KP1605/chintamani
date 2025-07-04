import React from 'react';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-section">
            <video autoPlay muted loop playsInline className="hero-video">
                <source src="videos/solar.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-content">
                <div className="hero-text-block">
                    <h1>CHINTAMANI</h1>
                    <h2>Power Infra Pvt. Ltd.</h2>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;