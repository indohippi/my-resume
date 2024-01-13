// components/HireMe.js
import React from 'react';
import styles from '/styles/Menu.module.css'; // Assuming you're using the same CSS module as Menu

const HireMe = () => {
  return (
    <a href="https://www.upwork.com/freelancers/~yourupworkprofile" 
       target="_blank" 
       rel="noopener noreferrer" 
       className={styles.HireMe}> {/* This uses the styles from Menu.module.css */}
      Hire Me
    </a>
  );
};

export default HireMe;
