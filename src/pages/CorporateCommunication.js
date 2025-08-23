import React from 'react';
import './CorporateCommunication.css';

function CorporateCommunication() {
    return (
        <div className="corporate-container">
            <header className="corporate-header">
                <h1>Corporate Communication</h1>
                <p>Shaping Brand Identity and Strengthening Connections</p>
            </header>

            <section className="corporate-section">
                <h2>Our Communication Philosophy</h2>
                <p>
                    At Chintamani Group, we believe in transparent, consistent, and timely communication. Our core values include openness, clarity, and responsibility in every message we deliver — internally and externally.
                </p>
            </section>

            <section className="corporate-section">
                <h2>Media Relations</h2>
                <p>
                    We regularly engage with media to share company updates, press releases, and milestones. For inquiries, collaborations, or interviews, please contact our media team.
                </p>
                <button className="btn">Download Media Kit</button>
            </section>

            <section className="corporate-section">
                <h2>Internal Communication</h2>
                <p>
                    We foster a culture of open dialogue among our teams. From weekly town halls to employee newsletters, we ensure everyone is aligned and informed.
                </p>
            </section>

            <section className="corporate-section highlights">
                <h2>Recent Communication Highlights</h2>
                <ul>
                    <li>🔹 </li>
                    <li>🔹 </li>
                    <li>🔹 </li>
                </ul>
            </section>

            <section className="corporate-section contact-box">
                <h2>Contact Our Communication Team</h2>
                <address>
                    415, Solaris Business Hub, Sola Road, Ahmedabad-380063<br />
                    Email: <a href="mailto:pr@chintamanigroup.com">chintamanitrd@gmail.com</a><br />
                    Phone: +91-12345-67890
                </address>

            </section>
        </div>
    );
}

export default CorporateCommunication;
