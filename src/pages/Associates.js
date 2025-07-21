import React from 'react';
import './Associates.css'; // for custom styles

const associates = [
    { name: 'GIFT City', logo: 'images/gift-city-logo.png' },
    { name: 'RBI', logo: 'images/reserve-bank-of-india-logo.png' },
    { name: 'HP', logo: 'images/hpcl-logo.png' },
    { name: 'Indian Oil', logo: 'images/iocl-logo.png' },
    { name: 'Cybage', logo: 'images/cybage-logo.jpg' },
    { name: 'EIL', logo: 'images/eil-logo.jpg' },
    { name: 'Northern Railway', logo: 'images/northern-railway.jpg' },
    { name: 'Bharat Petroleum', logo: 'images/bharat-petroleum-logo.jpg' },
    { name: 'BSNL', logo: 'images/bsnl-logo.png' },
    { name: 'Indian Air Force', logo: 'images/indian-air-force-logo.png' },
    { name: 'CPWD', logo: 'images/cpwd-logo.png' },
    { name: 'Mazagon Dock', logo: 'images/mazagon_dock.png' },
];

function Associates() {
    return (
        <div className="associates-page">
            <h1 className="title">Our Esteemed Associates</h1>
            <p className="subtitle">
                We are proud to be trusted by India's leading public and private sector organizations.
            </p>
            <div className="associates-grid">
                {associates.map((associate, index) => (
                    <div key={index} className="associate-card">
                        <img src={associate.logo} alt={associate.name} className="associate-logo" />
                        <p className="associate-name">{associate.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Associates;
