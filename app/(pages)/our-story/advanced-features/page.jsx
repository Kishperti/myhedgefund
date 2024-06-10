import React from 'react';
import styles from '@/css/AFpage.module.css';

const AFPage = () => {
    return (
        <div>
            <div className={styles.bannerSection}>
                <div className={styles.bannerContent}>
                    <h1>Advanced Features</h1>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Supercharge Your Decisions with AI and Machine Learning:</h2>
                    <ul className={styles.list}>
                        <li>Predictive Analytics: Gain a glimpse into the future with AI-powered insights on financial trends and anomaly detection.</li>
                        <li>Automated Tasks: Free your team from repetitive chores. Automate data entry, reconciliations, and report generation with machine learning.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Unwavering Security and Transparency with Blockchain:</h2>
                    <ul className={styles.list}>
                        <li>Secure Transactions: Experience unparalleled security and transparency with blockchain technology for recording your financial transactions.</li>
                        <li>Smart Contracts: Automate contract management and enforcement with self-executing smart contracts powered by blockchain.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Data-Driven Insights at Your Fingertips:</h2>
                    <ul className={styles.list}>
                        <li>Interactive Dashboards: Transform complex financial data into easily digestible insights with interactive charts and graphs.</li>
                        <li>Real-Time KPI Tracking: Monitor your key performance indicators (KPIs) in real-time for informed decision making.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Effortless Compliance, Always:</h2>
                    <ul className={styles.list}>
                        <li>Global Compliance: Breathe easy with support for international accounting standards and seamless multi-currency transactions.</li>
                        <li>Regular Updates: Stay ahead of the curve with automated updates that reflect the latest regulatory changes and compliance requirements.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>User Experience Designed for You:</h2>
                    <ul className={styles.list}>
                        <li>Intuitive Interface: Navigate the software with ease thanks to the user-friendly interface.</li>
                        <li>Customizable Dashboard: Personalize your dashboard to display the information that matters most to your role.</li>
                        <li>Real-Time Notifications: Stay on top of your finances with alerts and notifications for important events and deadlines.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Unparalleled Security and Privacy:</h2>
                    <ul className={styles.list}>
                        <li>Data Encryption: Rest assured, your sensitive data is always protected with robust data encryption measures.</li>
                        <li>Multi-Factor Authentication: Enjoy an extra layer of security with multi-factor authentication for secure access.</li>
                        <li>Compliance Adherence: Operate with peace of mind, knowing the platform adheres to stringent data protection regulations.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Seamless Implementation and Ongoing Support:</h2>
                    <ul className={styles.list}>
                        <li>Comprehensive Training: Get up and running quickly with comprehensive training programs for new users.</li>
                        <li>24/7 Customer Support: Our dedicated customer support team is always available via various channels to assist you.</li>
                        <li>Extensive Documentation: Access a wealth of user manuals and online resources for ongoing reference.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AFPage;