import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>Chintamani Power Infra Pvt. Ltd.</h3>
                <p>
                    Empowering businesses with reliable, innovative, and sustainable solutions.
                </p>
                <div className="footer-socials">
                    <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Chintamani Power Infra Pvt. Ltd.</p>
            </div>
        </footer>
    );
};

export default Footer;