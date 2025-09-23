import React from 'react';
import './Associates.css'; // for custom styles

const associates = [
    { name: 'GIFT City', logo: `${process.env.PUBLIC_URL}/images/gift-city-logo.png` },
    { name: 'RBI', logo: `${process.env.PUBLIC_URL}/images/reserve-bank-of-india-logo.png` },
    { name: 'HP', logo: `${process.env.PUBLIC_URL}/images/hpcl-logo.png` },
    { name: 'Indian Oil', logo: `${process.env.PUBLIC_URL}/images/iocl-logo.png` },
    { name: 'Cybage', logo: `${process.env.PUBLIC_URL}/images/cybage-logo.jpg` },
    { name: 'EIL', logo: `${process.env.PUBLIC_URL}/images/eil-logo.jpg` },
    { name: 'Northern Railway', logo: `${process.env.PUBLIC_URL}/images/northern-railway.jpg` },
    { name: 'Bharat Petroleum', logo: `${process.env.PUBLIC_URL}/images/bharat-petroleum-logo.jpg` },
    { name: 'BSNL', logo: `${process.env.PUBLIC_URL}/images/bsnl-logo.png` },
    { name: 'Indian Air Force', logo: `${process.env.PUBLIC_URL}/images/indian-air-force-logo.png` },
    { name: 'CPWD', logo: `${process.env.PUBLIC_URL}/images/cpwd-logo.png` },
    { name: 'Mazagon Dock', logo: `${process.env.PUBLIC_URL}/images/mazagon_dock.png` },
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
