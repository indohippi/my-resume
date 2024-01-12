// components/Menu.js
import React from 'react';
import styles from '/styles/Menu.module.css'; // Make sure the path to your CSS module is correct

const Menu = ({ openModal }) => {
  return (
    <div className={styles.menu}>
      <div onClick={() => openModal('ContactInfo')} className={styles.menuItem}>Contact Info</div>
      <div onClick={() => openModal('Objective')} className={styles.menuItem}>Objective</div>
      <div onClick={() => openModal('ProfessionalExperience')} className={styles.menuItem}>Professional Experience</div>
      <div onClick={() => openModal('Education')} className={styles.menuItem}>Education</div>
      <div onClick={() => openModal('Certifications')} className={styles.menuItem}>Certifications</div>
      <div onClick={() => openModal('TechnicalSkills')} className={styles.menuItem}>Technical Skills</div>
      {/* Add any additional links you may have */}
    </div>
  );
};

export default Menu;
