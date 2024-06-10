import React from 'react';
import styles from '@/css/UFMpage.module.css';

const UnifiedFinancialManagement = () => {
    return (
        <div>
            <div className={styles.bannerSection}>
                <div className={styles.bannerContent}>
                    <h1 className='text-center'>Unified Financial Management Suite </h1>
                    {/* <p>A Unified Financial Management Suite (UFMS) streamlines your financial operations by offering a centralized platform for various tasks. Here's a breakdown of its key functionalities:</p> */}
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>1. Record Transactions with Precision:</h2>
                    <ul className={styles.list}>
                        <li>Eliminate manual data entry and ensure accuracy by seamlessly recording all your financial transactions (income, expenses, payments, etc.) in a single system.</li>
                        <li>Gain a holistic view of your company's financial activity, allowing for better decision-making.</li>
                        <li>Track transactions across various accounts (bank accounts, credit cards, etc.) for easy reconciliation.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>2. Craft Budgets and Forecast Future Performance:</h2>
                    <ul className={styles.list}>
                        <li>Create realistic budgets by allocating funds to different departments and projects.</li>
                        <li>Predict future income and expenses based on historical data and market trends.</li>
                        <li>Identify potential financial risks and opportunities to proactively prepare for them.</li>
                        <li>Optimize resource allocation based on forecasted growth and spending needs.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>3. Generate Comprehensive Financial Reports:</h2>
                    <ul className={styles.list}>
                        <li>Generate essential financial reports like balance sheets, income statements, and cash flow statements with a few clicks.</li>
                        <li>Gain insights into your company's financial health, including profitability, liquidity, and solvency.</li>
                        <li>Track key financial metrics (e.g., debt-to-equity ratio, current ratio) over time to identify trends.</li>
                        <li>Simplify compliance reporting for regulatory requirements.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>4. Streamline Tax Management:</h2>
                    <ul className={styles.list}>
                        <li>Automate tax calculations for various tax types (sales tax, income tax, etc.).</li>
                        <li>Generate tax reports for filing purposes.</li>
                        <li>Ensure timely tax compliance to avoid penalties and interest charges.</li>
                        <li>Track tax credits and deductions to maximize tax savings.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>5. Manage Fixed Assets Efficiently:</h2>
                    <ul className={styles.list}>
                        <li>Track and manage all your company's fixed assets like equipment, machinery, and buildings.</li>
                        <li>Calculate depreciation expenses accurately for tax purposes.</li>
                        <li>Generate reports on asset performance and maintenance schedules.</li>
                        <li>Optimize asset utilization and identify opportunities for asset disposal.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default UnifiedFinancialManagement;