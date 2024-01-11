import styles from '/styles/ContactInfo.module.css';

const ContactInfo = () => (
  <section className={styles.contactInfoSection}>
    <h2 className={styles.contactInfoTitle}>Contact Information:</h2>
    <ul className={styles.contactInfoList}>
      <li className={styles.contactInfoItem}>
        Email: <a href="mailto:jaredwienen@gmail.com">jaredwienen@gmail.com</a>
      </li>
      <li className={styles.contactInfoItem}>
        Phone: <a href="tel:430-502-2281">430-502-2281</a>
      </li>
      <li className={styles.contactInfoItem}>
        Portfolio: <a href="https://jaredwienen.netlify.app" target="_blank" rel="noopener noreferrer">jaredwienen.netlify.app</a>
      </li>
      <li className={styles.contactInfoItem}>
        LinkedIn: <a href="https://www.linkedin.com/in/jaredwienen" target="_blank" rel="noopener noreferrer">linkedin.com/in/jaredwienen</a>
      </li>
      <li className={styles.contactInfoItem}>
        GitHub: <a href="https://github.com/indohippi" target="_blank" rel="noopener noreferrer">github.com/indohippi</a>
      </li>
    </ul>
  </section>
);

export default ContactInfo;
