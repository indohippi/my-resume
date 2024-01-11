// components/Menu.js
import Link from 'next/link';
import styles from '/styles/Menu.module.css'; // Make sure the path to your CSS module is correct

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Link href="/contactInfo" className={styles.menuItem}>Contact Info</Link>
      <Link href="/objective" className={styles.menuItem}>Objective</Link>
      <Link href="/professionalExperience" className={styles.menuItem}>Professional Experience</Link>
      <Link href="/education" className={styles.menuItem}>Education</Link>
      <Link href="/certifications" className={styles.menuItem}>Certifications</Link>
      <Link href="/technicalSkills" className={styles.menuItem}>Technical Skills</Link>
      {/* Add any additional links you may have */}
    </div>
  );
};

export default Menu;
