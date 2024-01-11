import styles from '/styles/Menu.module.css'; // Your path to Menu.module.css

const Menu = ({ setActiveSection }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.menuItem} onClick={() => setActiveSection('header')}>
        Header
      </div>
      <div className={styles.menuItem} onClick={() => setActiveSection('contactInfo')}>
        Contact Info
      </div>
      {/* Add menu items for each section */}
    </div>
  );
};

export default Menu;






