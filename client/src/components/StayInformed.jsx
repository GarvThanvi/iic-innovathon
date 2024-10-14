import React from 'react';
import styles from './StayInformed.module.css';

export default function StayInformed() {
  return (
    <div className={styles.container}>
      <div className={styles.sectionHeader}>
        <h2><strong>Reliable Resources</strong></h2>
        <p>Our trusted resources provide insightful mental health information.</p>
      </div>
      <div className={styles.cardsContainer}>
        {/* Card 1 */}
        <div className={styles.card}>
          <div className={styles.cardImage1}></div>
          <div className={styles.cardContent}>
            <h3><strong>Mental Illness</strong></h3>
            <p>Mental illness refers to a range of mental health conditions that affect thinking, mood, and behavior.</p>
            <a href="https://www.apa.org/monitor/2022/10/mental-health-campus-care" className={styles.cardButton} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </div>
        {/* Card 2 */}
        <div className={styles.card}>
          <div className={styles.cardImage2}></div>
          <div className={styles.cardContent}>
            <h3><strong>Medication Info</strong></h3>
            <p>Explore mental health medications that can offer temporary relief from mental illness symptoms.</p>
            <a href="https://www.bing.com/ck/a?!&&p=2a9feef591e5bc11947def9acfdb02e82da260de0ac1eeccba27458cdb6db055JmltdHM9MTcyODg2NDAwMA&ptn=3&ver=2&hsh=4&fclid=385d721e-c460-65c0-0dcd-670bc5046403&psq=medication+for+mental+health&u=a1aHR0cHM6Ly93d3cubmltaC5uaWguZ292L2hlYWx0aC90b3BpY3MvbWVudGFsLWhlYWx0aC1tZWRpY2F0aW9ucw&ntb=1" className={styles.cardButton} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </div>
        {/* Card 3 */}
        <div className={styles.card}>
          <div className={styles.cardImage3}></div>
          <div className={styles.cardContent}>
            <h3><strong>Therapy Info</strong></h3>
            <p>Talk therapy can help transform distressing emotions, thoughts, and behaviors.</p>
            <a href="https://www.bing.com/ck/a?!&&p=dd39847cb500dc275c0c95de182d3b2efcc4f745b0cb8870c15397f0a67c9bd7JmltdHM9MTcyODg2NDAwMA&ptn=3&ver=2&hsh=4&fclid=385d721e-c460-65c0-0dcd-670bc5046403&psq=therapy+info+mental+health&u=a1aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS91cy9iYXNpY3MvdGhlcmFweT9tc29ja2lkPTM4NWQ3MjFlYzQ2MDY1YzAwZGNkNjcwYmM1MDQ2NDAz&ntb=1" className={styles.cardButton} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}
