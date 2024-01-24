// BlogModal.js
import React, { useState } from 'react';
import styles from '/styles/BlogModal.module.css';

const BlogModal = ({ isOpen, onClose, menuItems }) => {
  const [activeComponent, setActiveComponent] = useState(null);

  const loadComponent = async (componentName) => {
    // Similar logic to loadComponent in Blog.js
  };

  const handleMenuItemClick = (componentName) => {
    loadComponent(componentName).then(setActiveComponent);
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
