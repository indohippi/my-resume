import styles from '/styles/Education.module.css';

const Education = () => (
  <section className={styles.educationSection}>
    <h2 className={styles.educationTitle}>Education:</h2>
    <ul className={styles.educationList}>
      <li className={styles.educationItem}>
        <strong>Fullstack Academy</strong> - Web Development: Computer Science and Programming (2023)
      </li>
      <li className={styles.educationItem}>
        <strong>Trinity Valley Community College</strong> - Associate of Arts in Music Business (2011)
      </li>
      <li className={styles.educationItem}>
        <strong>Mabank High School</strong> - High School Diploma (2008)
      </li>
    </ul>
  </section>
);

export default Education;
