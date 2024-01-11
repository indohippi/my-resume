import styles from '/styles/ProfessionalExperience.module.css';

const ProfessionalExperience = () => (
  <section className={styles.professionalExperienceSection}>
    <h2 className={styles.professionalExperienceTitle}>Professional Experience:</h2>
    <ul className={styles.professionalExperienceList}>
      <li className={styles.professionalExperienceItem}>
        <span className={styles.jobTitle}>Logistics Scheduler</span>
        <span className={styles.company}>Amazon, Austin, TX (July 2022 - Present)</span>
        <p className={styles.jobDescription}>
          Enhanced production data management and developed browser utilities.
        </p>
      </li>
      {/* Repeat for other positions */}
    </ul>
  </section>
);

export default ProfessionalExperience;
