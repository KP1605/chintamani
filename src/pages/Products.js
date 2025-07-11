import React from 'react';
import Navbar from '../components/Navbar';
import './Products.css';

const Products = () => {
    return (
        <div className="container">
            {/* Sidebar */}
            <aside className="sidebar">
                <h1>Products</h1>
                <ul id="product-nav">
                    <li><a href="#ht-infra"><i className="fas fa-bolt"></i> HT Infrastructures</a></li>
                    <li><a href="#epc-project"><i className="fas fa-project-diagram"></i> EPC Project</a></li>
                    <li><a href="#operation-maintenance"><i className="fas fa-tools"></i> Operation & Maintenance</a></li>
                    <li><a href="#facate-solutions"><i className="fas fa-lightbulb"></i> FACATE Solutions</a></li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                <section id="ht-infra" className="product-section">
                    <h2>HT Infrastructures</h2>
                    <h3>Introduction</h3>
                    <p>Reliable operation and maintenance services to maximize asset performance and lifespan.</p>
                    <h3>Approach</h3>
                    <p>Proactive monitoring, preventive maintenance, and quick response to failures.</p>
                    <h3>Benefits</h3>
                    <p>Enhanced system reliability, reduced operational costs, and extended equipment life.</p>
                    <h3>Offerings</h3>
                    <p>Annual maintenance contracts, system audits, and emergency repair services.</p>
                </section>

                <section id="epc-project" className="product-section">
                    <h2>EPC Project</h2>
                    <h3>Introduction</h3>
                    <p>At Chintamani Traders, we specialize in delivering comprehensive Electrical EPC solutions tailored to
                        meet the diverse needs of our clients across various industries. With a commitment to excellence,
                        safety, and sustainability. Our dedicated team combines technical proficiency with strategic
                        planning to ensure that every project is executed smoothly, on time, and within budget.</p>
                    <h3>Approach</h3>
                    <ul>
                        <li><strong>Engineering Excellence:</strong>Our skilled engineers leverage advanced technologies and
                            industry best practices to design innovative electrical systems that meet the highest standards.
                            We focus on optimizing efficiency and reliability, ensuring that every project aligns with the
                            specific requirements of our clients.
                        </li>
                        <li><strong>Strategic Procurement:</strong>We understand that effective procurement is critical to
                            project success. Our strong relationships with trusted suppliers enable us to source
                            high-quality materials and equipment at competitive prices. We manage the entire procurement
                            process, ensuring timely delivery and adherence to budgetary constraints.
                        </li>
                        <li><strong>Expert Construction Management:</strong>Our construction teams are highly trained and
                            experienced in executing electrical projects safely and efficiently. We adhere to stringent
                            safety protocols and regulatory standards, minimizing risks while maximizing productivity. Our
                            project managers ensure clear communication and collaboration throughout the construction phase,
                            keeping projects on track and within budget.
                        </li>
                        <li><strong>Project Planning and Design:</strong>We begin by thoroughly assessing the project
                            requirements and objectives. Our engineers collaborate with clients to develop detailed project
                            plans and designs, ensuring alignment with technical specifications and regulatory standards.
                        </li>
                        <li><strong>Resource Mobilization:</strong>Effective execution relies on the right resources. We
                            strategically mobilize our skilled workforce, equipment, and materials to ensure optimal
                            productivity. Our procurement team sources high-quality components from trusted suppliers to
                            maintain project integrity.
                        </li>
                        <li><strong>Implementation and Oversight:</strong>Our experienced project managers oversee all
                            aspects of the execution process. They ensure that work is carried out according to plan,
                            adhering to safety protocols and quality standards. Regular progress reports keep stakeholders
                            informed and engaged throughout the project lifecycle.
                        </li>
                        <li><strong>Quality Assurance:</strong>Quality is at the heart of everything we do. Our rigorous
                            quality assurance processes include inspections, testing, and compliance checks to ensure that
                            all electrical installations meet or exceed industry standards. We believe in delivering
                            excellence in every detail.
                        </li>
                        <li><strong>Client-Centric Approach:</strong>We prioritize our clients’ needs, maintaining open
                            communication and collaboration throughout the project.
                        </li>
                        <li><strong>Commissioning and Handover:</strong>Upon completion, we conduct thorough commissioning
                            to validate system performance. Our team provides comprehensive training and documentation to
                            clients, ensuring they are fully equipped to operate and maintain the systems effectively.
                        </li>
                        <li><strong>Timely Delivery:</strong>We understand the importance of deadlines and work diligently
                            to ensure projects are completed on schedule.
                        </li>
                        <li><strong>Commitment to Safety:</strong>Safety is paramount in our execution process. We implement
                            stringent safety measures to protect our team and stakeholders.
                        </li>
                    </ul>
                    <h3>Offerings</h3>
                    <ul>
                        <li>High Voltage Systems</li>
                        <li>Renewable Energy Solutions (Solar & Wind)</li>
                        <li>Industrial Electrical Installations</li>
                        <li>GIS and AIS Substation Design</li>
                        <li>Lighting and Power Distribution</li>
                        <li>Automation and Control Systems</li>
                    </ul>
                </section>

                <section id="operation-maintenance" className="product-section">
                    <h2>Operation & Maintenance</h2>
                    <h3>Introduction</h3>
                    <p>At Chintamani Traders, we are committed to ensuring the optimal performance and longevity of your
                        renewable energy assets. Our comprehensive operation and maintenance (O&M) services for solar and
                        wind power plants are designed to maximize energy production, minimize downtime, and reduce
                        operational costs. With years of experience in the renewable energy sector, we provide tailored O&M
                        solutions that enhance the efficiency, safety, and reliability of your solar and wind installations
                    </p>
                    <h3>Approach</h3>
                    <p>Proactive monitoring, preventive maintenance, and quick response to failures.</p>
                    <h3>Offerings</h3>
                    <ol>
                        <li>Our O&M Services for Solar Power Plants</li>
                        <li>Our O&M Services for Wind Power Plants</li>
                    </ol>
                </section>

                <section id="facate-solutions" className="product-section">
                    <h2>FACATE Solutions</h2>
                    <h3>Introduction</h3>
                    <p>Innovative solutions under our FACATE umbrella integrating smart technologies and automation to enhance operational efficiency.</p>
                    <h3>Approach</h3>
                    <p>Integration of smart technologies, automation retrofits, and custom control systems.</p>
                    <h3>Offerings</h3>
                    <p>IoT integration, automation retrofits, and custom control systems.</p>
                </section>
            </main>
        </div>
    );
};

export default Products;