// components/CharacterStats.js
import React from 'react';
import styles from '/styles/CharacterStats.module.css'; // Path to your CSS module

const CharacterStats = () => {
  return (
    <div className={styles.characterContainer}>
      {/* Example of a character bubble with stats */}
      <div className={styles.characterBubble}>
        <img src="/path-to-character-image.jpg" alt="Character Name" />
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
