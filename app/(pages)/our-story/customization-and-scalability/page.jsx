import React from 'react';
import styles from '@/css/csp.module.css';

const CSPPage = () => {
    return (
        <div>
            <div className={styles.bannerSection}>
                <div className={styles.bannerContent}>
                    <h1>Customization and Scalability for a Perfect Fit</h1>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>1. Customization Options:</h2>
                    <ul className={styles.list}>
                        <li>Tailor the platform: Adapt the software to your specific workflows and financial processes.</li>
                        <li>Flexible dashboards: Create custom dashboards to visualize the data most relevant to your business.</li>
                        <li>Configurable reports: Generate reports tailored to your reporting needs and regulatory requirements.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>2. API Access:</h2>
                    <ul className={styles.list}>
                        <li>Seamless integrations: Connect the UFMS with your existing software (CRM, ERP, etc.) through APIs for a unified data flow.</li>
                        <li>Extend functionality: Develop custom integrations to automate specific tasks or build unique features.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>3. User Roles and Permissions:</h2>
                    <ul className={styles.list}>
                        <li>Granular control: Define specific roles for different user types (accountants, managers, clients) with tailored access permissions.</li>
                        <li>Enhanced security: Minimize data security risks by restricting access to sensitive financial information.</li>
                        <li>Improved accountability: Track user activity and hold individuals accountable for their actions.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>4. Scalability:</h2>
                    <ul className={styles.list}>
                        <li>Grow with your business: The UFMS can easily adapt to accommodate your increasing financial data and user base.</li>
                        <li>Flexible licensing options: Choose a licensing plan that scales with your needs, avoiding unnecessary costs.</li>
                        <li>Future-proof solution: Invest in a platform that can grow alongside your business aspirations.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>5. White-Labeling:</h2>
                    <ul className={styles.list}>
                        <li>Brand consistency: Rebrand the UFMS to match your company's branding for a seamless client experience.</li>
                        <li>Enhanced professionalism: Offer a white-labeled solution to consulting clients, strengthening your brand identity.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CSPPage;