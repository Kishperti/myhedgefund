// pages/index.js
"use client"
import Head from 'next/head';
import styles from '@/css/Esg.module.css';

export default function EsgPage() {
    return (
        <section className={styles.container}>
            <section className={styles.backgroundSection}>
                <div>
                    <h1>ESG & Risk Consulting</h1>
                </div>
            </section>

            <section>
                <div className={styles.section}>
                    <p>
                        With the changing external and internal environment, businesses are under constant pressure to maintain the effectiveness of their processes and controls. Any failure in executing or managing critical operations can not only impact the organisation to a great extent, but also creates a negative impression on the organisation’s stakeholder values. With an increase in corporate failures, there is an additional focus from regulators, financial institutions, as well as independent directors on the way various processes, controls and IT securities are being managed.
                    </p>
                    <p>
                        Our risk practice is a combination of process, IT security and forensics experts. We provide a one-stop solution to our multiple clients on their risk and process needs. The team has an array of experts possessing industry-specific expertise. Our risk services encompass the following:
                    </p>
                    <ul>
                        <li>Governance, risk and operations consulting</li>
                        <li><a href="#">IT and cyber security</a></li>
                        <li><a href="#">ESG consulting</a></li>
                    </ul>
                    <h3>What makes us different?</h3>
                    <p>
                        <strong>Partner-led delivery:</strong> With more accessibility at the senior level, every client engagement partner draws upon the firm’s depth of specialist resources to deliver prompt, effective and consistent service.
                    </p>
                    <p>
                        <strong>Technical specialists:</strong> Our diverse national technical team consists of process experts, forensic accountants, lawyers, enforcement experts, background intelligence specialists, forensic technology and field experts, as well as cyber and IT security specialists. We combine the strengths of each to deliver solutions to dynamic Indian businesses.
                    </p>
                    <p>
                        <strong>Remain relevant to business:</strong> We believe in giving recommendations which are practically implementable and add value to the business. We work with businesses in implementing the controls.
                    </p>
                </div>
            </section>

            <section className={styles.ourConsulting}>
                <h1>Our Risk Advisory Services</h1>
                <div className={styles.serviceCard}>
                    <div className={styles.card}>
                        <h2>Cyber</h2>
                        <p>In today’s time, businesses have gone through large transformation initiatives such as adoption of digital technologies, transition to cloud, use of advanced technologies et al.</p>
                        <hr />
                        <a href="#">Go For This</a>
                    </div>
                    <div className={styles.card}>
                        <h2>Governance, Risk & Operations</h2>
                        <p>Our Governance, Risk and Operations (GRO) services encompass Internal Audit, Enterprise Risk Management, Internal Financial Controls, IT advisory, Standard Operating Procedures and other services.</p>
                        <hr />
                        <a href="#">Go For This</a>
                    </div>
                    <div className={styles.card}>
                        <h2>ESG consulting</h2>
                        <p>Grant Thornton Bharat offers holistic ESG consulting solutions for sustainable business outcomes. With industry expertise and AI technology, we drive long-term value.</p>
                        <hr />
                        <a href="#">Go For This</a>
                    </div>
                    <div className={styles.card}>
                        <h2>ESG consulting</h2>
                        <p>Grant Thornton Bharat offers holistic ESG consulting solutions for sustainable business outcomes. With industry expertise and AI technology, we drive long-term value.</p>
                        <hr />
                        <a href="#">Go For This</a>
                    </div>
                </div>
            </section>
        </section>
    );
}