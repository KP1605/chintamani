import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <div class="navbar">
            <a href="index.html" class="navbar-brand">
                <img src="images/logo(1).jpeg" alt="Chintamani Logo" />
            </a>
            <div class="navbar-right">
                <a href="index.html#offerings" class="startup-btn">Offerings</a>
                <a href="awards.html" class="investor-btn">Awards</a>
                <a href="associates.html" class="about-btn">Associates</a>
                <a href="career.html">Career</a>



                <div class="dropdown">
                    <a href="about.html" class="about-btn">Contact</a>
                    <div class="dropdown-content">
                        <a href="career.html">Career</a>
                        <a href="corporate-communication.html">Corporate Communication</a>
                    </div>
                </div>

                <div class="dropdown">
                    <button class="menu-btn">☰</button>
                    <div class="dropdown-content">
                        <a href="index.html">Home</a>
                        <a href="index.html#offerings">Offerings</a>
                        <a href="projects.html">Key Projects</a>
                        <a href="products.html">Products</a>
                        <a href="contact.html">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar