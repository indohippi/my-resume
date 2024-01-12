// components/CharacterStats.js
import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import styles from '/styles/CharacterStats.module.css'; // Path to your CSS module

const CharacterStats = () => {
  return (
    <div className={styles.characterContainer}>
      {/* Example of a character bubble with stats */}
      <div className={styles.characterBubble}>
        {/* Use the Image component for optimized image loading */}
        <Image src="/IMG_1079.JPG" alt="Jared" width={100} height={100} layout="fixed" />
        <div className={styles.stats}>
          <div>LV 99</div>
          <div>HP 9999/9999</div>
          <div>MP 999/999</div>
        </div>
      </div>
      {/* Repeat for other characters */}
    </div>
  );
};

export default CharacterStats;
