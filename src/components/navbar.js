import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <div class="navbar">
            <a href="/" class="navbar-brand">
                <img src="images/logo(1).jpeg" alt="Chintamani Logo" />
            </a>
            <div class="navbar-right">
                <a href="/about" class="navbar-btn">About Us</a>
                <a href="/products" class="navbar-btn">Products</a>
                <a href="/awards" class="navbar-btn">Awards</a>
                <a href="/associates" class="navbar-btn">Associates</a>

                <div class="dropdown">
                    <a href="about.html" class="about-btn">Contact</a>
                    <div class="dropdown-content">
                        <a href="/career">Career</a>
                        <a href="/corporate-communication">Corporate Communication</a>
                    </div>
                </div>

                <div class="dropdown">
                    <button class="menu-btn">☰</button>
                    <div class="dropdown-content">
                        <a href="/">Home</a>
                        <a href="/products">Offerings</a>
                        <a href="/projects">Key Projects</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar