// components/CharacterStats.js
import React from 'react';
import Image from 'next/image';
import styles from '/styles/CharacterStats.module.css';

const CharacterStats = () => {
  return (
    <div className={styles.characterContainer}>
      <div className={styles.characterBubble}>
        <div className={styles.imageContainer}>
          <Image
            src="/IMG_1079.JPG" // Correct the path if needed
            alt="Jared"
            width={100} // Replace with the intrinsic width of your image
            height={100} // Replace with the intrinsic height of your image
          />
        </div>
        <div className={styles.stats}>
          <div className={styles.statItem}>Jared</div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>LV</span>
            <span className={styles.statValue}>33</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>HP</span>
            <span className={styles.statValue}>3000/7777</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>MP</span>
            <span className={styles.statValue}>243/400</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterStats;
