import React from 'react';
import styles from '@/css/OACpage.module.css';

const OACPage = () => {
    return (
        <div>
            <div className={styles.bannerSection}>
                <div className={styles.bannerContent}>
                    <h1>Online Accessibility and Collaboration</h1>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Cloud-Based Access:</h2>
                    <ul className={styles.list}>
                        <li>Securely access the software from anywhere with an internet connection, fostering remote work and collaboration for your team.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Data Backup and Recovery:</h2>
                    <ul className={styles.list}>
                        <li>Enjoy automatic data backup and disaster recovery features, giving you peace of mind knowing your financial data is always protected.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Mobile Compatibility:</h2>
                    <ul className={styles.list}>
                        <li>Access the software on various devices, including smartphones and tablets, for on-the-go financial management.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Collaboration Tools:</h2>
                    <ul className={styles.list}>
                        <li>Facilitate real-time collaboration among multiple users, streamlining financial processes and decision-making.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Client Portal:</h2>
                    <ul className={styles.list}>
                        <li>Provide a secure platform for clients to access invoices, documents, and collaborate seamlessly with your accounting team.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default OACPage;