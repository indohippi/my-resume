// Import the CSS module
import styles from '/styles/Certifications.module.css';

const Certifications = () => (
  <section className={styles.certifications}>
    <h2 className={styles.certificationsHeader}>Certifications:</h2>
    <ul className={styles.certificationsList}>
      <li>Google Ads Search</li>
      <li>AI-Powered Performance Ads</li>
      <li>Google Analytics</li>
      <li>Lean Six Sigma</li>
      <li>Full Stack Web Development (Fullstack Academy)</li>
    </ul>
  </section>
);

export default Certifications;