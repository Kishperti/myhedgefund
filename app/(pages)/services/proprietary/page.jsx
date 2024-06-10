// pages/index.js
"use client"
import Head from 'next/head';
import styles from '@/css/Proprietary.module.css';

export default function ProprietaryPage() {
    return (
        <section className={styles.container}>
            <section className={styles.backgroundSection}>
                <div>
                    <h1>Proprietary Services</h1>
                </div>
            </section>
            <section className={styles.ContentBgSection}>
                <div>
                    {/* discription */}
                </div>
            </section>
            <section className={styles.ourConsulting}>
                <h1>Our Proprietary Services</h1>
                <div className={styles.serviceCard}>
                    <div className={styles.card}>
                        <h2>Assets evaluation and portfolio assessment
                        </h2>
                        <p>discription Here</p>
                        <hr />
                    </div>
                    <div className={styles.card}>
                        <h2> Investment Management services</h2>
                        <p>discription Here</p>
                        <hr />
                    </div>
                    <div className={styles.card}>
                        <h2>Contractual Fund Management Services
                        </h2>
                        <p>discription Here</p>
                        <hr />
                    </div>
                    <div className={styles.card}>
                        <h2>Business Management Services
                        </h2>
                        <p>discription Here</p>
                        <hr />
                    </div>
                    <div className={styles.card}>
                        <h2>Expenses Management Services
                        </h2>
                        <p>discription Here</p>
                        <hr />
                    </div>
                    <div className={styles.card}>
                        <h2>Investment Plans
                        </h2>
                        <p>discription Here</p>
                        <hr />
                    </div>
                    <div className={styles.card}>
                        <h2>Land asset management services</h2>
                        <p>discription Here</p>
                        <hr />
                    </div>
                </div>
            </section>
        </section>
    );
}