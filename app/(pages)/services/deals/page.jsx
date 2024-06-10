"use client"
import Head from 'next/head';
import styles from '@/css/Deals.module.css';

export default function DealsPage() {
    return (
        <section className={styles.container}>
            <section className={styles.backgroundSection}>
                <div>
                    <h1>Deals Consulting</h1>
                </div>
            </section>
            <section className={styles.contentSection}>
                <h3>Growing your business profitably against a tough economic backdrop is challenging. Correctly evaluating and delivering transactions is a key part of a company’s growth strategy.</h3>
                <p>We know transactions don’t all follow the same path. That’s why we advise you on your options at each step and tailor our approach to your needs.</p>
                <p>Getting the right insight and experience from across the market – corporate and trade buyers and sellers, private equity investors, debt and equity capital markets – ensures you have relevant, up-to-date advice that enables you to make the best-informed decisions for your business.</p>
            </section>
            <section className={styles.ContentBgSection}>
                <div className={styles.services}>
                    <div>
                        <h1>Bespoke teams</h1>
                        <img src="/assets/Collaborative expertise.jpg" alt="Collaborative expertise" />
                        <p>We form a deal team for you, bringing the sector expertise, specialist skills and deep experience needed for your transaction.</p>
                    </div>
                    <div>
                        <h1>International scale</h1>
                        <img src="/assets/Tailored solutions.jpg" alt="Tailored solutions" />
                        <p>Wherever you do business, our tailored, individual approach is backed with international scale and expertise from our global network.</p>
                    </div>
                    <div>
                        <h1>Passionate about value</h1>
                        <img src="/assets/Global insight.jpg" alt="Global insight" />
                        <p>We’re committed to understanding your needs and maximising value at every stage of your transaction.</p>
                    </div>
                </div>
            </section>
            <section className={styles.ourConsulting}>
                <h1>Our additional services</h1>

                <div className={styles.serviceCard}>
                    <div className={styles.card}>
                        <h2>Transaction Tax Services</h2>
                        <p>Our transaction tax experts understand your business, anticipate your needs and come up with robust tax solutions that help you achieve business objectives ensuring compliance and efficiency.</p>
                        <hr />
                        <a href="#">Go For This</a>

                    </div>

                    <div className={styles.card}>
                        <h2>Deal Advisory</h2>
                        <p>Unlike other M&A advisory firms in India, we offer deal advisory services and work exclusively with controlled and well-designed strategies to help businesses grow, expand and create value.</p>
                        <hr />
                        <a href="#">Go For This</a>

                    </div>

                    <div className={styles.card}>
                        <h2>Due Diligence</h2>
                        <p>Grant Thornton’s financial due diligence services are aimed at corporates looking for mergers and acquisitions, private equity firms evaluating investments, and businesses/promoters considering sale/divestment.</p>
                        <hr />
                        <a href="#">Go For This</a>

                    </div>

                    <div className={styles.card}>
                        <h2>Valuations</h2>
                        <p>As one of the leading valuation consultants in India, Grant Thornton specializes in all the aspects of the process like business valuation services, financial reporting, tax issues, etc.</p>
                        <hr />
                        <a href="#">Go For This</a>

                    </div>

                    <div className={styles.card}>
                        <h2>Overseas Listing</h2>
                        <p>Overseas listing presents a perfect platform for mid-sized Indian companies with global ambitions. Grant Thornton’s team of experts in listings work closely with clients during all stages.</p>
                        <hr />
                        <a href="#">Go For This</a>
                    </div>

                    <div className={styles.card}>
                        <h2>IPO Services</h2>
                        <p>Grant Thornton Bharat’s IPO services ensure optimal scaling of organisations in the financial markets.</p>
                        <hr />
                        <a href="#">Go For This</a>

                    </div>

                    <div className={styles.card}>
                        <h2>Debt & Special Situations Solutions</h2>
                        <p>Grant Thornton Bharat offers specialist debt and special situations consulting services, including restructuring, insolvency, and asset tracing solutions.</p>
                        <hr />
                        <a href="#">Go For This</a>

                    </div>

                    <div className={styles.card}>
                        <h2>Initial Public Offering</h2>
                        <p>Adapt to dynamic markets with tailored solutions and expert business consultancy.</p>
                        <hr />
                        <a href="#">Go For This</a>

                    </div>

                    <div className={styles.card}>
                        <h2>Corporate Law Governance</h2>
                        <p>Adapt to dynamic markets with tailored solutions and expert business consultancy.</p>
                        <hr />
                        <a href="#">Go For This</a>

                    </div>

                </div>
            </section>
        </section>
    );
}