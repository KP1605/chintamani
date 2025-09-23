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

    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const data = new FormData();
            data.append("name", formData.name);
            data.append("email", formData.email);
            data.append("phone", formData.phone);
            data.append("resume", formData.resume);
            data.append("message", formData.message);

            const response = await fetch("http://127.0.0.1:8000/career/submit-application/", {
                method: "POST",
                body: data
            });

            if (response.ok) {
                const result = await response.json();
                alert("Application submitted successfully!");
                console.log(result);

                // reset form
                setFormData({ name: '', email: '', phone: '', resume: null, message: '' });
            } else {
                const errorData = await response.json();
                console.error("Error:", errorData);
                alert("Failed to submit application. Please check your details.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Try again later.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="career-page">
            <header className="career-header">
                <h1>Join Our Team</h1>
                <p>Join Our Team and Help Shape the Future</p>
            </header>

            <section className="career-content">
                <p>
                    At <strong>CPIPL</strong>, we believe our people are our greatest strength.
                    We're building a culture of innovation, collaboration, and excellence — and we’re
                    always looking for talented individuals who share our passion and purpose.
                </p>
                <p>
                    Whether you're an experienced professional or just starting your career,
                    you'll find opportunities to grow, contribute, and make an impact.
                </p>

                <h2>Why Work With Us?</h2>
                <ul>
                    <li><strong>Innovative Environment:</strong> Work with the latest technologies and forward-thinking projects.</li>
                    <li><strong>Growth & Development:</strong> We invest in our people with training and mentorship.</li>
                    <li><strong>Inclusive Culture:</strong> We value diversity and foster an open, respectful workplace.</li>
                    <li><strong>Meaningful Work:</strong> Contribute to projects that enhance communities and improve lives.</li>
                    <li><strong>Employee Benefits:</strong> Competitive compensation, wellness programs, and work-life balance.</li>
                </ul>
            </section>

            {/* ---- Current Openings Section ---- */}
            <section className="openings-section">
                <h2 className="section-title">Current Openings</h2>
                <div className="openings-container">
                    {[
                        {
                            title: "Project Management",
                            location: "Ahmedabad",
                            experience: "2+ years",
                            type: "Full Time",
                            description: "Responsible for planning, executing, and closing projects. Must coordinate across teams and manage resources."
                        },
                        {
                            title: "Sales & Business Development",
                            location: "Ahmedabad",
                            experience: "3+ years",
                            type: "Full Time",
                            description: "Identify new business opportunities, build client relationships, and achieve sales targets."
                        },
                        {
                            title: "Operations & Maintenance Manager",
                            location: "Remote",
                            experience: "1+ years",
                            type: "Contract",
                            description: "Oversee daily operations and ensure systems are maintained efficiently."
                        }
                    ].map((job, index) => (
                        <div className="career-card" key={index}>
                            <h3>{job.title}</h3>
                            <p><strong>Location:</strong> {job.location}</p>
                            <p><strong>Experience:</strong> {job.experience}</p>
                            <p><strong>Type:</strong> {job.type}</p>
                            <p><strong>Job Description:</strong> {job.description}</p>

                            <button
                                className="apply-btn"
                                onClick={() =>
                                    document.getElementById("application-form").scrollIntoView({ behavior: "smooth" })
                                }
                            >
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---- Application Form Section ---- */}
            <section className="application-form-section" id="application-form">
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
