import React from 'react';
import styles from '/styles/Header.module.css'; // Path to your CSS module

const Header = ({ onClose }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>JARED WIENEN - Web Developer</h1>
    </header>
  );
};

export default Header;
