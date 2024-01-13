// components/CharacterStats.js
import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import styles from '/styles/CharacterStats.module.css'; // Path to your CSS module

const CharacterStats = () => {
  return (
    <div className={styles.characterContainer}>
      <div className={styles.characterBubble}>
        <Image 
          src="/IMG_1079.JPG" // Correct the path if needed
          alt="Jared"
          width={100} // Replace with the intrinsic width of your image
          height={100} // Replace with the intrinsic height of your image
          // Removed the layout prop
        />
        <div className={styles.stats}>
          <div>LV 99</div>
          <div>HP 9999/9999</div>
          <div>MP 999/999</div>
        </div>
      </div>
      {/* ... other character stats */}
    </div>
  );
};

export default CharacterStats;
