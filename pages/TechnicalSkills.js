import styles from '/styles/TechnicalSkills.module.css';

const TechnicalSkills = () => (
  <section className={styles.technicalSkillsSection}>
    <h2 className={styles.technicalSkillsTitle}>Technical Skills:</h2>
    <ul className={styles.technicalSkillsList}>
      <li className={styles.technicalSkillsItem}>
        <span className={styles.skillCategory}>Languages:</span> JavaScript, HTML, CSS, Python, Java
      </li>
      <li className={styles.technicalSkillsItem}>
        <span className={styles.skillCategory}>Frameworks:</span> React.js, Node.js, Angular, Vue
      </li>
      <li className={styles.technicalSkillsItem}>
        <span className={styles.skillCategory}>Tools:</span> SQL, WordPress, Git, Insomnia, AWS, Google Cloud
      </li>
      {/* You can add more skills or categories in the same format */}
    </ul>
  </section>
);

export default TechnicalSkills;
