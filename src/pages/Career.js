import React, { useState } from 'react';
import './Career.css';

function Career() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null,
        message: ''
    });

    const [submitting, setSubmitting] = useState(false); // ✅ Add this line


    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            console.log(formData);
            alert("Form submitted! Thank you for applying.");
            setSubmitting(false);
            setFormData({ name: '', email: '', phone: '', resume: null, message: '' });
        }, 2000); // simulate API delay
    };


    return (
        <div className="career-page">
            <header className="career-header">
                <h1>Join Our Team</h1>
                <p>Explore career opportunities with Chintamani and help us shape the future.</p>
            </header>

            {/* ---- Current Openings Section ---- */}
            <section className="openings-section">
                <h2 className="section-title">Current Openings</h2>
                <div className="openings-container">
                    {[
                        {
                            title: "Purchase Executive",
                            location: "Ahmedabad",
                            experience: "2+ years",
                            type: "Full Time"
                        },
                        {
                            title: "Accountant",
                            location: "Ahmedabad",
                            experience: "3+ years",
                            type: "Full Time"
                        },
                        {
                            title: "Finance Head",
                            location: "Remote",
                            experience: "1+ years",
                            type: "Contract"
                        }
                    ].map((job, index) => (
                        <div className="career-card" key={index}>
                            <h3>{job.title}</h3>
                            <p><strong>Location:</strong> {job.location}</p>
                            <p><strong>Experience:</strong> {job.experience}</p>
                            <p><strong>Type:</strong> {job.type}</p>
                            {/*<p><strong>Skills:</strong> {job.skills.join(', ')}</p>*/}
                            <button
                                className="apply-btn"
                                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                            >
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---- Application Form Section ---- */}
            <section className="application-form-section">
                <h2>Apply to Join Our Talent Pool</h2>
                <form className="application-form" onSubmit={handleSubmit}>
                    <div className="form-group floating-label">
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                        <label>Name</label>
                    </div>
                    <div className="form-group floating-label">
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        <label>Email</label>
                    </div>
                    <div className="form-group floating-label">
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                        <label>Phone</label>
                    </div>
                    <div className="form-group">
                        <label>Upload Resume (PDF/DOCX)</label>
                        <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} required />
                        {formData.resume && <p className="file-preview">Selected: {formData.resume.name}</p>}
                    </div>
                    <div className="form-group floating-label">
                        <textarea name="message" value={formData.message} onChange={handleChange} required />
                        <label>Why do you want to join us?</label>
                    </div>
                    <button type="submit" disabled={submitting}>
                        {submitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                    {submitting && <div className="progress-bar"><div className="progress" /></div>}
                </form>
            </section>
        </div>
    );
}

export default Career;
