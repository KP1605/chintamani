import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="navbar">
            <Link to="/" className="navbar-brand">
                <img src={`${process.env.PUBLIC_URL}/images/logo(1).jpeg`} alt="Chintamani Logo" />
            </Link>
            
            {/* Menu Button (only visible on mobile via CSS) */}
            <button 
                className="menu-btn" 
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            <div className={`navbar-right ${menuOpen ? "active" : ""}`}>
                <Link to="/about" className="navbar-btn">About Us</Link>
                <Link to="/products" className="navbar-btn">Products</Link>
                {/* <Link to="/awards" className="navbar-btn">Awards</Link> */}
                <Link to="/associates" className="navbar-btn">Associates</Link>
                <Link to="/career" className="navbar-btn">Career</Link>
                <Link to="/contact" className="navbar-btn">Contact</Link>       

                {/* <div className="dropdown">
                    <Link to="/contact" className="navbar-btn">Contact</Link>
                    <div className="dropdown-content">
                        <Link to="/career">Career</Link>
                        <Link to="/corporate-communication">Corporate Communication</Link>
                    </div>
                </div> */}

                {/* Extra Dropdown Links - Mobile
                <div className="dropdown mobile-only">
                    <div className="dropdown-content">
                        <Link to="/">Home</Link>
                        <Link to="/projects">Key Projects</Link> 
                        <Link to="/contact">Contact</Link>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Navbar;
