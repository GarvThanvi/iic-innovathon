import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1>Restore your mental health</h1>
        <p>
          Join our public beta for early access to a healthier future. Your feedback shapes our platform.
        </p>
        <button className={styles.heroButton}>Get started now</button>
      </div>
      <div className={styles.heroImages}>
        <img src="path_to_image1" alt="Smiling woman" className={styles.heroImage} />
        <img src="path_to_image2" alt="Smiling man" className={styles.heroImage} />
        <img src="path_to_image3" alt="Smiling woman" className={styles.heroImage} />
      </div>
    </div>
  );
}
