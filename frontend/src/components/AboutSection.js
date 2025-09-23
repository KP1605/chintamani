import React from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.css';

function AboutSection() {
    return (
        <section className="about-section" id="about">
            <div className="about-card">
                <div className="about-para">
                    <p>
                        With over 25 years of experience in the EPC sector, we have successfully completed a diverse range
                        of projects, from small-scale electrical installations to large-scale renewable energy plants. Our
                        expertise spans various utilities company, industrial, commercial, and residential sectors,
                        demonstrating our ability to adapt and excel in different environments.
                    </p>
                    <p>
                        Our mission is to provide exceptional EPC services that empower our clients to achieve their energy
                        goals while embracing sustainable practices. We strive to deliver projects with unparalleled
                        quality, efficiency, and safety, ensuring that every solution we offer meets the highest standards of
                        excellence.
                    </p>

                    <div className="about-floating-btn">
                        <Link to="/about" className="learn-more-link">
                            <span className="learn-text">Learn More</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
