import React from 'react';
import styles from '@/css/ESFpage.module.css';

const ESFPage = () => {
    return (
        <div>
            <div className={styles.bannerSection}>
                <div className={styles.bannerContent}>
                    <h1>Enterprise Solutions for Financial, Investment, and Consulting Firms</h1>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>1. Multi-Entity Support:</h2>
                    <ul className={styles.list}>
                        <li>Manage complex financial structures: Easily handle accounting for multiple subsidiaries, branches, or investment portfolios.</li>
                        <li>Eliminate consolidation headaches: Generate accurate and consolidated financial reports for the entire organization.</li>
                        <li>Enhanced decision-making: Gain a holistic view of your financial performance across all entities.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>2. Advanced Reporting & Dashboards:</h2>
                    <ul className={styles.list}>
                        <li>KPI Dashboards: Create custom dashboards to visualize key performance indicators (KPIs) for financial health, investment performance, and client profitability.</li>
                        <li>Drill-Down Capabilities: Deep dive into specific metrics for detailed analysis.</li>
                        <li>Data-Driven Decisions: Leverage insights to identify trends, make informed investment decisions, and optimize consulting services.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>3. Integration with Other Systems:</h2>
                    <ul className={styles.list}>
                        <li>Seamless Data Flow: Connect your UFMS with existing Enterprise Resource Planning (ERP) systems, Customer Relationship Management (CRM) platforms, and project management tools.</li>
                        <li>Eliminate Data Silos: Centralize all your financial data for a unified view of your operations.</li>
                        <li>Improved Efficiency: Streamline workflows and automate data exchange across departments.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>4. Audit Trail (Compliance & Security):</h2>
                    <ul className={styles.list}>
                        <li>Maintain a comprehensive audit trail that tracks all financial transactions, user activity, and changes made to data.</li>
                        <li>Enhanced Security: Ensure data integrity and meet regulatory compliance requirements.</li>
                        <li>Fraud Detection: Identify suspicious activity and potential financial irregularities.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>5. Workflow Automation:</h2>
                    <ul className={styles.list}>
                        <li>Automate routine tasks: Automate approvals for invoices, payments, and expense reports.</li>
                        <li>Improved Efficiency: Streamline workflows across departments (finance, investment, consulting) for faster turnaround times.</li>
                        <li>Reduced Errors: Eliminate manual data entry errors and ensure process consistency.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ESFPage;