// components/Header.js
import React from 'react';
import styles from '/styles/Header.module.css'; // Path to your CSS module

const Header = ({ onClose }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.headerTitle}>JARED WIENEN - Web Developer</h1>
      <button onClick={onClose} className={styles.headerClose}>Close</button>
    </div>
  );
};

export default Header;
