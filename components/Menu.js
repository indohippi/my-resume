// components/Menu.js
import Link from 'next/link';
import styles from '/styles/Menu.module.css'; // Make sure the path to your CSS module is correct

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Link href="/?modal=ContactInfo" className={styles.menuItem}>Contact Info</Link>
      <Link href="/?modal=Objective" className={styles.menuItem}>Objective</Link>
      <Link href="/?modal=ProfessionalExperience" className={styles.menuItem}>Professional Experience</Link>
      <Link href="/?modal=Education" className={styles.menuItem}>Education</Link>
      <Link href="/?modal=Certifications" className={styles.menuItem}>Certifications</Link>
      <Link href="/?modal=TechnicalSkills" className={styles.menuItem}>Technical Skills</Link>
    </div>
  );
};

export default Menu;
