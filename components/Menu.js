import React, { useEffect, useState } from 'react';
import styles from '/styles/Menu.module.css'; // Make sure the path to your CSS module is correct

const Menu = ({ openModal }) => {
  // State to store the click sound
  const [menuClickSound, setMenuClickSound] = useState(null);

  useEffect(() => {
    // Preload the click sound effect
    const clickSound = new Audio('/audio/final-fantasy-viii-sound-effects-cursor-move.mp3');
    setMenuClickSound(clickSound);
  }, []);

  // Function to handle menu item click
  const handleMenuItemClick = (modalType) => {
    // Play the click sound
    menuClickSound?.play();
    // Open the modal after the sound
    openModal(modalType);
  };

  return (
    <div className={styles.menu}>
      <div onClick={() => handleMenuItemClick('ContactInfo')} className={styles.menuItem}>Contact Info</div>
      <div onClick={() => handleMenuItemClick('Objective')} className={styles.menuItem}>Objective</div>
      <div onClick={() => handleMenuItemClick('ProfessionalExperience')} className={styles.menuItem}>Professional Experience</div>
      <div onClick={() => handleMenuItemClick('Education')} className={styles.menuItem}>Education</div>
      <div onClick={() => handleMenuItemClick('Certifications')} className={styles.menuItem}>Certifications</div>
      <div onClick={() => handleMenuItemClick('TechnicalSkills')} className={styles.menuItem}>Technical Skills</div>
      <div onClick={() => handleMenuItemClick('HireMe')} className={styles.HireMe}>
        <a href="https://www.upwork.com/fl/~013e07c3d995cae4dc?s=1044578476142100494" 
           target="_blank" 
           rel="noopener noreferrer" 
           className={styles.hireMeLink}>
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default Menu;
