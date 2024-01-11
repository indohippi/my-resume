// components/Menu.js
import styles from '/styles/Menu.module.css'; // Adjust the import path if necessary
import Link from 'next/link';

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li className={styles.menuItem}>
          <Link href="/contactInfo">Contact Info</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/objective">Objective</Link>
        </li>
        {/* Add other links as necessary */}
      </ul>
    </nav>
  );
};

export default Menu;
