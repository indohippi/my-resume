// components/SocialMedia.js
import React from 'react';
import styles from '/styles/SocialMedia.module.css';

const SocialMedia = () => {
  const currentTime = new Date().toLocaleTimeString('en-US', { timeZone: 'America/Chicago' });

  return (
    <div className={styles.socialContainer}>
      <div className={styles.timeDisplay}>{currentTime}</div>
      <div className={styles.socialButtons}>
        <a href="https://github.com/indohippi" target="_blank" className={styles.github}>GitHub</a>
        <a href="https://linkedin.com/in/jaredwienen" target="_blank" className={styles.linkedin}>LinkedIn</a>
        <a href="mailto:jaredwienen@gmail.com" className={styles.email}>Email</a>
      </div>
    </div>
  );
};

export default SocialMedia;
