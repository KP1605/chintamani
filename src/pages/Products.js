import React from 'react';
// import Navbar from '../components/Navbar';
import { Link } from "react-scroll";
import './Products.css';

const Products = () => {
    return (
        <div className="container">
            {/* Sidebar */}
            <aside className="sidebar">
                <h1>Products</h1>
                <ul id="product-nav">
                    
                    <li>
                        <Link to="epc-project" smooth={true} duration={500}> 
                            <i className="fas fa-project-diagram"></i> EPC Project
                        </Link>
                    </li>
                    <li>
                        <Link to="operation-maintenance" smooth={true} duration={500}>
                            <i className="fas fa-tools"></i> Operation & Maintenance
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="facade-solutions" smooth={true} duration={500}>
                            <i className="fas fa-lightbulb"></i> FACADE Solutions
                        </Link>
                    </li> */}
                    <li>
                    <Link to="renewable-power" smooth={true} duration={500}>
                        <i className="fas fa-solar-panel"></i> Renewable Power
                    </Link>
                    </li>

                    <li>
                    <Link to="industrial-installations" smooth={true} duration={500}>
                        <i className="fas fa-industry"></i> Industrial Electrical Installations
                    </Link>
                    </li>

                    <li>
                    <Link to="street-lightning" smooth={true} duration={500}>
                        <i className="fas fa-lightbulb"></i> Street Lighting and Area Lighting
                    </Link>
                    </li>

                    <li>
                    <Link to="electrical-works" smooth={true} duration={500}>
                        <i className="fas fa-building"></i> Building Electrical Works including Bus-ducts
                    </Link>
                    </li>

                </ul>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                

                <section id="epc-project" className="product-section">
                    <h2>EPC Project</h2>
                    <h3>Introduction</h3>
                    <p>At Chintamani Traders, we specialize in delivering comprehensive Electrical EPC solutions tailored to
                        meet the diverse needs of our clients across various industries. With a commitment to excellence,
                        safety, and sustainability. Our dedicated team combines technical proficiency with strategic
                        planning to ensure that every project is executed smoothly, on time, and within budget.</p>
                    <h3>Approach</h3>
                    <ol>
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
                    </ol>
                    
                    <h3>Offerings</h3>
                    <ul>
                        <li><i className="fas fa-check-circle"></i>High Voltage Systems</li>
                        <li><i className="fas fa-check-circle"></i>Renewable Energy Solutions (Solar & Wind)</li>
                        <li><i className="fas fa-check-circle"></i>Industrial Electrical Installations</li>
                        <li><i className="fas fa-check-circle"></i>GIS and AIS Substation Design</li>
                        <li><i className="fas fa-check-circle"></i>Lighting and Power Distribution</li>
                        <li><i className="fas fa-check-circle"></i>Automation and Control Systems</li>
                    </ul>
                </section>

                <section id="operation-maintenance" className="product-section">
                    <h2>Operation & Maintenance</h2>

                    <h3>Introduction</h3>
                    <p>
                        At Chintamani Power Infra, we are committed to ensuring the optimal performance and longevity of your
                        renewable energy assets. Our comprehensive operation and maintenance (O&M) services for solar and
                        wind power plants are designed to maximize energy production, minimize downtime, and reduce
                        operational costs. With years of experience in the renewable energy sector, we provide tailored O&M
                        solutions that enhance the efficiency, safety, and reliability of your solar and wind installations.
                    </p>

                    <h3>Offerings</h3>
                    <ol>
                        <li>
                            <h4>Our O&M Services for Solar Power Plants</h4>
                            <ol type='i'>
                                <li>
                                    <strong>Routine Inspections and Preventive Maintenance</strong>
                                    <ul>
                                        <li><i className="fas fa-check-circle"></i>Regular site inspections to detect potential issues before they affect performance.</li>
                                        <li><i className="fas fa-check-circle"></i>Cleaning and maintenance of solar panels for maximum sunlight absorption.</li>
                                        <li><i className="fas fa-check-circle"></i>Testing of electrical systems and inverter diagnostics for energy efficiency.</li>
                                        <li><i className="fas fa-check-circle"></i>Monitoring of battery storage systems to optimize performance and longevity.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Performance Monitoring and Data Analytics</strong>
                                    <ul>
                                        <li><i className="fas fa-check-circle"></i>Real-time monitoring of system performance using advanced tools.</li>
                                        <li><i className="fas fa-check-circle"></i>Data analysis to detect deviations and troubleshoot issues.</li>
                                        <li><i className="fas fa-check-circle"></i>Monthly performance reports with yield predictions and efficiency comparisons.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Troubleshooting and Repair Services</strong>
                                    <ul>
                                        <li><i className="fas fa-check-circle"></i>Rapid response to malfunctions or underperformance with on-site technicians.</li>
                                        <li><i className="fas fa-check-circle"></i>Repair and replacement of faulty components including panels and inverters.</li>
                                        <li><i className="fas fa-check-circle"></i>Spare parts management for quick turnaround times.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>System Upgrades and Optimization</strong>
                                    <ul>
                                        <li><i className="fas fa-check-circle"></i>Upgrading inverters, electrical components, and monitoring systems.</li>
                                        <li><i className="fas fa-check-circle"></i>Retrofits and optimizations to integrate new technology.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Compliance and Safety Management</strong>
                                    <ul>
                                        <li><i className="fas fa-check-circle"></i>Regular compliance checks with local regulations.</li>
                                        <li><i className="fas fa-check-circle"></i>Routine safety audits and worker training for safe operations.</li>
                                    </ul>
                                </li>
                            </ol>
                        </li>

                        <li>
                            <h4>Our O&M Services for Wind Power Plants</h4>
                            <ol type='i'>
                                <li>
                                    <strong>Routine Inspections and Preventive Maintenance</strong>
                                    <ul>
                                        <li><i className="fas fa-check-circle"></i>Regular inspections of turbine components including blades, nacelle, gearbox, and generator.</li>
                                        <li><i className="fas fa-check-circle"></i>Lubrication and maintenance of moving parts (pitch systems, yaw systems, brakes).</li>
                                        <li><i className="fas fa-check-circle"></i>Electrical system checks and diagnostics for optimal energy conversion.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Condition Monitoring and Performance Analysis</strong>
                                    <ul>
                                        <li><i className="fas fa-check-circle"></i>Advanced monitoring systems to track turbine health and prevent failures.</li>
                                        <li><i className="fas fa-check-circle"></i>Vibration, temperature, and oil condition tests for early fault detection.</li>
                                        <li><i className="fas fa-check-circle"></i>Detailed performance reports to optimize operations and assess output.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Repairs and Component Replacements</strong>
                                    <ul>
                                        <li><i className="fas fa-check-circle"></i>Quick response to turbine faults including blade, gearbox, or electrical failures.</li>
                                        <li><i className="fas fa-check-circle"></i>Comprehensive inspections after extreme weather events for structural integrity.</li>
                                        <li><i className="fas fa-check-circle"></i>Replacement of components with high-quality parts to restore operations.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Blade Inspection and Maintenance</strong>
                                    <ul>
                                        <li><i className="fas fa-check-circle"></i>Drone and robotic inspection services to detect cracks, erosion, and damages.</li>
                                        <li><i className="fas fa-check-circle"></i>Preventive maintenance to extend blade lifespan and improve efficiency.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Safety and Compliance</strong>
                                    <ul>
                                        <li><i className="fas fa-check-circle"></i>Adherence to industry safety standards and regulations.</li>
                                        <li><i className="fas fa-check-circle"></i>Regular safety audits with trained personnel for emergency procedures.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Performance Optimization</strong>
                                    <ul>
                                        <li><i className="fas fa-check-circle"></i>Retrofitting turbines with advanced technology to enhance performance.</li>
                                        <li><i className="fas fa-check-circle"></i>Firmware and software updates for peak control system efficiency.</li>
                                    </ul>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </section>

                <section id="renewable-power" className="product-section">
                    <h2>Renewable Power</h2>
                    <h3>Introduction</h3>
                    <p>Large scale Renewable power plant on Capex and RESCO model
                        At Chintamani Power Infra, we are committed to driving the transition to renewable energy through our innovative solar power plant projects. With a focus on sustainability, efficiency, and community impact, we provide comprehensive solutions that harness the power of the sun to deliver clean energy for a brighter future.
                    </p>
                    <h3>Approach</h3>
                    <ol>
                        <li><strong>Comprehensive Planning: </strong>Our solar power projects begin with thorough site assessments and feasibility studies. We evaluate geographical and environmental factors to design optimal solar solutions tailored to each client's unique needs.
                        </li>
                        <li><strong>Cutting-Edge Design: </strong>Leveraging advanced technology, our engineering team designs efficient solar power systems that maximize energy generation. We ensure that our designs comply with all regulatory standards and industry best practices.
                        </li>
                        <li><strong>Seamless Procurement: </strong>We manage the procurement of high-quality solar panels, inverters, and other components from reputable manufacturers. Our strong supplier relationships enable us to deliver cost-effective solutions without compromising quality.
                        </li>
                        <li><strong>Expert Installation: </strong>Our experienced installation teams are dedicated to executing projects safely and efficiently. We utilize best practices in construction and project management to ensure timely completion, minimizing disruptions and ensuring safety at every stage.
                        </li>
                        <li><strong>Performance Monitoring and Maintenance :</strong>After installation, we provide ongoing performance monitoring and maintenance services to ensure optimal system operation. Our commitment to client support means we’re always available to address any concerns and ensure peak performance.
                        </li>
                    </ol>
                    <h3>Offerings</h3>
                    <ul>
                        <li><i className="fas fa-check-circle"></i>GRID Connected Ground mounted solar power plant </li>
                        <li><i className="fas fa-check-circle"></i>GRID Connected Rooftop solar power plant</li>
                        <li><i className="fas fa-check-circle"></i>Solar Façade </li>
                        <li><i className="fas fa-check-circle"></i>Solar Parking, solar roof and industrial shades  </li>
                        <li><i className="fas fa-check-circle"></i>GRID Connected Hybrid power plant (solar & Wind) </li>
                        <li><i className="fas fa-check-circle"></i>MicroGrid </li>
                        <li><i className="fas fa-check-circle"></i>Renewable power plant with BES (Battery Energy Storage) </li>
                    </ul>
                    <h3>Benefits</h3>
                    <ul>
                        <li><i className="fas fa-check-circle"></i>Sustainability </li>
                        <li><i className="fas fa-check-circle"></i>Cost Savings</li>
                        <li><i className="fas fa-check-circle"></i>Energy Independence</li>
                        <li><i className="fas fa-check-circle"></i>Job Creation</li>
                    </ul>
                </section>
                
                <section id="industrial-installations" className="product-section">
                    <h2>Industrial Electrical Installations</h2>
                    <h3>Introduction</h3>
                    <p>At Chintamani Power Infra, we specialize in delivering comprehensive industrial electrical installation services tailored to meet the demands of modern industrial facilities. From new plant setups to system upgrades, our team ensures safe, efficient, and code-compliant solutions.</p>
                    <h3>Our Services</h3>
                    <ol>
                        <li><strong>Complete Electrical System Installations:</strong>Design and installation of power distribution systems, control panels, switchgear, and cabling for industrial operations.</li>
                        <li><strong>Machinery and Equipment Wiring:</strong>Electrical connections for heavy machinery, production lines, and automation systems to ensure optimal performance and safety.</li>
                        <li><strong>Motor Control Centers (MCCs) & Drives:</strong>Installation of MCCs, VFDs, and soft starters for efficient motor control and energy savings.</li>
                        <li><strong>Lighting Systems: </strong>Industrial-grade lighting installations for manufacturing floors, warehouses, and outdoor areas—focused on energy efficiency and workplace safety</li>
                        <li><strong>Control and Automation Systems: </strong>Integration of PLCs, SCADA, and custom control solutions to streamline industrial processes and increase productivity</li>
                        <li><strong>Electrical Upgrades & Retrofitting: </strong>Modernization of outdated systems to meet current safety standards, improve efficiency, and reduce downtime.</li>
                        <li><strong>Power Factor Correction & Energy Management: </strong>Installation of capacitor banks and energy-saving systems to reduce electricity costs and improve power quality.</li>
                        <li><strong>Hazardous Area Installations: </strong>Certified electrical installations for explosive or hazardous environments (ATEX-rated solutions available).</li>
                    </ol>
                    <h3>Why Choose Us?</h3>
                    <ul>
                        <li><i className="fas fa-check-circle"></i>Certified and experienced electricians</li>
                        <li><i className="fas fa-check-circle"></i>Industry-compliant solutions (NEC, IEC, etc.)</li>
                        <li><i className="fas fa-check-circle"></i>High standards of safety and workmanship</li>
                        <li><i className="fas fa-check-circle"></i>Minimal downtime during installation</li>
                        <li><i className="fas fa-check-circle"></i>Ongoing maintenance and support</li>
                    </ul>
                </section>

                <section id="street-lightning" className="product-section">
                    <h2>Street Lighting & Area Lighting</h2>

                    <h3>Introduction</h3>
                    <p>
                        We offer a comprehensive range of advanced lighting solutions designed to
                        enhance safety, visibility, and energy efficiency in public and private
                        outdoor spaces. Our street and area lighting systems are engineered for
                        long-lasting performance, minimal maintenance, and optimal illumination.
                    </p>

                    <h3>Our Solutions</h3>
                    <ol type='I'>
                        <li>
                            <strong>LED Street Lighting</strong>
                            <ul>
                                <li><i className="fas fa-check-circle"></i>Efficient, durable, and eco-friendly lighting for roads, highways, and city streets.</li>
                                <li><i className="fas fa-check-circle"></i>High-lumen output with low power consumption</li>
                                <li><i className="fas fa-check-circle"></i>Available in multiple wattages (30W–250W+)</li>
                                <li><i className="fas fa-check-circle"></i>Smart dimming and motion sensor compatibility</li>
                                <li><i className="fas fa-check-circle"></i>Weather-resistant (IP65/IP66)</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Solar Street Lighting</strong>
                            <ul>
                                <li><i className="fas fa-check-circle"></i>Sustainable lighting for remote and urban areas with minimal infrastructure needs.</li>
                                <li><i className="fas fa-check-circle"></i>Integrated solar panel, battery, and controller</li>
                                <li><i className="fas fa-check-circle"></i>Dusk-to-dawn and motion-activated options</li>
                                <li><i className="fas fa-check-circle"></i>Ideal for rural roads, pathways, and parks</li>
                                <li><i className="fas fa-check-circle"></i>No grid dependency</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Area & Flood Lighting</strong>
                            <ul>
                                <li><i className="fas fa-check-circle"></i>Powerful illumination for large open areas like parking lots, campuses, and industrial sites.</li>
                                <li><i className="fas fa-check-circle"></i>Wide beam angles and precision optics</li>
                                <li><i className="fas fa-check-circle"></i>Pole-mounted or wall-mounted options</li>
                                <li><i className="fas fa-check-circle"></i>High-performance LED floodlights</li>
                                <li><i className="fas fa-check-circle"></i>Asymmetric and symmetric distribution available</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Smart Lighting Solutions</strong>
                            <ul>
                                <li><i className="fas fa-check-circle"></i>Intelligent systems that optimize lighting based on real-time conditions.</li>
                                <li><i className="fas fa-check-circle"></i>IoT-based centralized control</li>
                                <li><i className="fas fa-check-circle"></i>Remote monitoring and fault detection</li>
                                <li><i className="fas fa-check-circle"></i>Automated dimming and scheduling</li>
                                <li><i className="fas fa-check-circle"></i>Energy and cost-saving analytics</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Poles & Mounting Structures</strong>
                            <ul>
                                <li><i className="fas fa-check-circle"></i>Reliable support systems designed for durability and aesthetic integration.</li>
                                <li><i className="fas fa-check-circle"></i>Galvanized steel or aluminum poles</li>
                                <li><i className="fas fa-check-circle"></i>Custom heights and finishes available</li>
                                <li><i className="fas fa-check-circle"></i>Brackets, arms, and anchor accessories</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Design, Installation & Maintenance</strong>
                            <ul>
                                <li><i className="fas fa-check-circle"></i>Lighting design and photometric analysis</li>
                                <li><i className="fas fa-check-circle"></i>Professional installation by certified teams</li>
                                <li><i className="fas fa-check-circle"></i>Routine maintenance and technical support</li>
                                <li><i className="fas fa-check-circle"></i>Retrofit and upgrade services</li>
                            </ul>
                        </li>
                    </ol>

                    <h3>Why Choose Us?</h3>
                    <ul>
                        <li><i className="fas fa-check-circle"></i>Energy-efficient, long-life products</li>
                        <li><i className="fas fa-check-circle"></i>Custom solutions for urban, commercial & industrial needs</li>
                        <li><i className="fas fa-check-circle"></i>Compliance with international standards (IEC, RoHS, CE, BIS)</li>
                        <li><i className="fas fa-check-circle"></i>Proven experience in public and private sector projects</li>
                    </ul>
                </section>

                <section id="electrical-works" className="product-section">
                    <h2>Electrical Works</h2>
                    <h3>Introduction</h3>
                    <p>Chintamani Power Infra provides end-to-end electrical installation and maintenance services for high-rise residential, commercial, and mixed-use buildings. With deep expertise in vertical infrastructure and complex power distribution systems, we ensure reliable, efficient, and code-compliant solutions from the ground up.</p>
                    <h3>Our Services</h3>
                    <ol type='i'>
                        <li>
                            <strong>Main Power Distribution:</strong>Design and installation of main switchboards (MSBs), sub-main distribution boards (SMDBs), and final distribution boards (FDBs) tailored to the building’s load requirements.
                        </li>
                        <li>
                            <strong>Riser and Shaft Cabling:</strong>Installation of high-capacity power and data risers, including containment systems and vertical cable management across all floors.
                        </li>
                        <li>
                            <strong>Lighting & Power Systems:</strong>General lighting, emergency lighting, socket outlets, and common area power distribution—designed for both functionality and energy efficiency
                        </li>
                        <li>
                            <strong>Emergency & Backup Power Systems:</strong>Integration of generators, automatic transfer switches (ATS), and UPS systems to maintain critical operations during power outages.
                        </li>
                        <li>
                            <strong>Fire Alarm & Life Safety Systems:</strong>Complete electrical wiring for fire alarm systems, smoke detection, emergency communication, and evacuation systems in accordance with safety regulations
                        </li>
                        <li>
                            <strong>Lightning Protection & Earthing:</strong>Installation of lightning protection systems and earthing networks to safeguard the building and its occupants
                        </li>
                        <li>
                            <strong>Low Current Systems:</strong>Electrical wiring and support for CCTV, access control, intercoms, BMS (Building Management Systems), and structured cabling.
                        </li>
                        <li>
                            <strong>Energy Efficiency & Load Management:</strong>Smart solutions for energy monitoring, power factor correction, and efficient load distribution to reduce operational costs. 
                        </li>
                    </ol>
                    <h3>Why Choose Us?</h3>
                    <ul>
                        <li><i className="fas fa-check-circle"></i>Experience with residential towers, office buildings, hotels, and mixed-use developments</li>
                        <li><i className="fas fa-check-circle"></i>Fully compliant with local and international electrical codes</li>
                        <li><i className="fas fa-check-circle"></i>Skilled team trained in high-rise electrical safety protocols</li>
                        <li><i className="fas fa-check-circle"></i>Coordinated work with MEP and civil teams to ensure smooth project execution</li>
                        <li><i className="fas fa-check-circle"></i>Support from design to final testing & commissioning</li>
                    </ul>
                </section>

                {/* <section id="facade-solutions" className="product-section">
                    <h2>FACADE Solutions</h2>
                    <h3>Introduction</h3>
                    <p>Innovative solutions under our FACADE umbrella integrating smart technologies and automation to enhance operational efficiency.</p>
                    <h3>Approach</h3>
                    <p>Integration of smart technologies, automation retrofits, and custom control systems.</p>
                    <h3>Offerings</h3>
                    <p>IoT integration, automation retrofits, and custom control systems.</p>
                </section> */}
            </main>
        </div>
    );
};

export default Products;