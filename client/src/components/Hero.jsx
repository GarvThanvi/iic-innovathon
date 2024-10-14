import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.leftHalf}>
        <div className={styles.heroContent}>
          <h1>Restore your mental health</h1>
          <p>
            Join our public beta for early access to a healthier future. Your feedback shapes our platform.
          </p>
          <button className={styles.heroButton}>Get started now</button>
        </div>
      </div>
      <div className={styles.rightHalf}>
        <div className={styles.imageWrapper}>
          <img src="https://img.freepik.com/free-photo/close-up-attractive-african-american-woman-smiling-looking-happy-standing-yellow-background_1258-54850.jpg" alt="Smiling woman" className={styles.heroImageLarge} />
        </div>
        <div className={styles.imageGrid}>
          <img src="https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.jpg?s=612x612&w=0&k=20&c=EtRJGnNOFPJ2HniBSLWKzsL9Xf7GHinHd5y2Tx3da0E=" alt="Smiling man" className={styles.heroImageSmall} />
          <img src="https://thumbs.dreamstime.com/b/portrait-smiling-woman-early-fall-park-13020862.jpg" alt="Smiling woman" className={styles.heroImageSmall} />
        </div>
      </div>
    </div>
  );
}

