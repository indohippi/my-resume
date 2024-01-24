// BlogModal.js
import React, { useState } from 'react';
import styles from '/styles/BlogModal.module.css';

const BlogModal = ({ isOpen, onClose }) => {
  const [activeComponent, setActiveComponent] = useState(null);

  const menuItems = [
    { title: 'About Me', component: 'AboutMe' },
    { title: 'Projects', component: 'Projects' },
    // ... other menu items if needed
  ];

  const loadComponent = async (componentName) => {
    try {
      const Component = await import(`../pages/${componentName}`).then(mod => mod.default);
      setActiveComponent(<Component />);
    } catch (error) {
      console.error(`Error loading component '${componentName}':`, error);
    }
  };

  const handleMenuItemClick = (componentName) => {
    loadComponent(componentName);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <aside className={styles.menu}>
          {menuItems.map((item, index) => (
            <div key={index} className={styles.menuItem} onClick={() => handleMenuItemClick(item.component)}>
              {item.title}
            </div>
          ))}
        </aside>
        <section className={styles.content}>
          {activeComponent}
        </section>
        <button onClick={onClose} className={styles.closeButton}>Close</button>
      </div>
    </div>
  );
};

export default BlogModal;
