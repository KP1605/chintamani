import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/" className="navbar-brand">
                <img src={`${process.env.PUBLIC_URL}/images/logo(1).jpeg`} alt="Chintamani Logo" />
            </Link>
            <div className="navbar-right">
                <Link to="/about" className="navbar-btn">About Us</Link>
                <Link to="/products" className="navbar-btn">Products</Link>
                {/* <Link to="/awards" className="navbar-btn">Awards</Link> */}
                <Link to="/associates" className="navbar-btn">Associates</Link>
                <Link to="/career" className="navbar-btn">Career</Link>

                {/* <div className="dropdown">
                    <Link to="/contact" className="navbar-btn">Contact</Link>
                    <div className="dropdown-content">
                        <Link to="/career">Career</Link>
                        <Link to="/corporate-communication">Corporate Communication</Link>
                    </div>
                </div> */}

                <div className="dropdown">
                    <button className="menu-btn">☰</button>
                    <div className="dropdown-content">
                        <Link to="/">Home</Link>
                        <Link to="/products">Offerings</Link>
                        {/* <Link to="/projects">Key Projects</Link> */}
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar;
