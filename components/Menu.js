// components/Menu.js
import React from 'react';
import styles from '/styles/Menu.module.css'; // Make sure the path to your CSS module is correct

const Menu = ({ openModal }) => {
  return (
    <div className={styles.menu}>
      <a onClick={() => openModal('ContactInfo')} className={styles.menuItem}>Contact Info</a>
      <a onClick={() => openModal('Objective')} className={styles.menuItem}>Objective</a>
      <a onClick={() => openModal('ProfessionalExperience')} className={styles.menuItem}>Professional Experience</a>
      <a onClick={() => openModal('Education')} className={styles.menuItem}>Education</a>
      <a onClick={() => openModal('Certifications')} className={styles.menuItem}>Certifications</a>
      <a onClick={() => openModal('TechnicalSkills')} className={styles.menuItem}>Technical Skills</a>
      {/* Add any additional links you may have */}
    </div>
  );
};

export default Menu;
