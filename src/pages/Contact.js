import React, { useState } from 'react';
import './Contact.css';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setSubmitted(true);
        // Reset form
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-subtitle">We’re here to help. Get in touch with us!</p>

            <div className="contact-grid">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </label>

                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </label>

                    <label>
                        Phone:
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                    </label>

                    <label>
                        Message:
                        <textarea name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                    </label>

                    <button type="submit">Send Message</button>

                    {submitted && <p className="success-msg">Thank you! We'll get back to you soon.</p>}
                </form>

                <div className="contact-info">
                    <h3>Our Office</h3>
                    <p><strong>Chintamani Group</strong></p>
                    <p>415, Solaris Business Hub,<br /> Sola Road, Ahmedabad-380063</p>
                    <p>Email: <a href="mailto:info@chintamanigroup.com">chintamanitrd@gmail.com</a></p>
                    <p>Phone: +91-98765-43210</p>
                    <div className="map-placeholder">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d58736.834730830895!2d72.4979022935726!3d23.058548837428532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x395e855d754079cd%3A0x56eb1329773be8e8!2sSolaris%20Business%20Hub%2C%20Oppo.%20The%20National%20Higher%20Secondary%20School%20Nr.%20Parshwanath%20Jain%20Mandir%20Bhuyangdev%2C%20Sola%20Rd%2C%20Ahmedabad%2C%20Gujarat%20380013!3m2!1d23.0584752!2d72.5391023!5e0!3m2!1sen!2sin!4v1753085486071!5m2!1sen!2sin"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe></div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
