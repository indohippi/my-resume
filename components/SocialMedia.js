// components/SocialMedia.js
import React, { useEffect, useState } from 'react';
import styles from '/styles/SocialMedia.module.css';

const SocialMedia = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Update the time immediately and every second thereafter
    const updateTime = () => {
      const now = new Date().toLocaleTimeString('en-US', { timeZone: 'America/Chicago' });
      setCurrentTime(now);
    };

    updateTime(); // Set initial time
    const intervalId = setInterval(updateTime, 1000); // Update time every second

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.socialContainer}>
      {/* If currentTime is empty, it will show Loading time... */}
      <div className={styles.timeDisplay}>{currentTime || 'Loading time...'}</div>
      <div className={styles.socialButtons}>
        <a href="https://github.com/indohippi" target="_blank" rel="noopener noreferrer" className={styles.github}>GitHub</a>
        <a href="https://linkedin.com/in/jaredwienen" target="_blank" rel="noopener noreferrer" className={styles.linkedin}>LinkedIn</a>
        <a href="mailto:jaredwienen@gmail.com" className={styles.email}>Email</a>
      </div>
    </div>
  );
};

export default SocialMedia;
