// components/CharacterStats.js
import React from 'react';
import Image from 'next/image';
import styles from '/styles/CharacterStats.module.css';

const CharacterStats = () => {
  return (
    <div className={styles.characterContainer}>
      <Image
        src="/IMG_1079.JPG" // Correct the path if needed
        alt="Jared"
        width={100} // Replace with the intrinsic width of your image
        height={100} // Replace with the intrinsic height of your image
        className={styles.characterImage}
      />
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>Jared</div>
        <div className={styles.statRow}>
          <span className={styles.statLabel}>LV</span>
          <span className={styles.statValue}>33</span>
        </div>
        <div className={styles.statRow}>
          <span className={styles.statLabel}>HP</span>
          <span className={styles.statValue}>7777/7777</span>
        </div>
        <div className={styles.hpBar}></div> {/* HP gradient bar */}
        <div className={styles.statRow}>
          <span className={styles.statLabel}>MP</span>
          <span className={styles.statValue}>400/400</span>
        </div>
        <div className={styles.mpBar}></div> {/* MP gradient bar */}
      </div>
    </div>
  );
};

export default CharacterStats;
