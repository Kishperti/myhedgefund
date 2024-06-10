// pages/index.js
"use client"
import Head from 'next/head';
import styles from '@/css/Global.module.css';

export default function GlobalPage() {
    return (
        <section className={styles.container}>
            <section className={styles.backgroundSection}>
                <div>
                    <h1>Global Transaction Services</h1>
                </div>
            </section>
            <section className={styles.ContentBgSection}>
                <div>
                    <p>
                        HMFs is an international network of separate and independent member firms established in more than 147 countries worldwide. Global Delivery works to provide innovative multi-disciplinary solutions across service lines and expertise areas, with a customer base that spans the entire global network of HMFs. We serve international member firms through dedicated offshore teams based in India and work in bilateral corridors to connect businesses with partners, identify the best business practices in India and other parts of the world, and learn from them during our collaboration.

                        We combine technical skills, process rigour, tools, methodologies, overall structure and strategies to seamlessly deliver services across time zones through our local talent pool.
                    </p>
                </div>
            </section>
            <section className={styles.ourConsulting}>
                <div>
                    <h1>International Business Centre</h1>
                    <p>
                        HMFs global member firms are dedicated to supporting clients throughout their international ventures, whether it involves taking initial steps, entering new markets, or comprehending tax obligations in multiple jurisdictions. Our team of experts is committed to providing the necessary guidance to help you achieve your business goals effectively.

                        HMFs global member firms have established International Business Centres (IBCs) worldwide to aid clients in their international expansion and exploration of business opportunities. If you intend to conduct business in India, understanding the investment environment and obtaining information about the corporate, accounting, business, and taxation framework are vital to ensure a successful journey. With its accredited IBC in India, HMFs can provide the expertise and support to keep you on the right path.
                    </p>
                </div>
            </section>
        </section>
    );
}