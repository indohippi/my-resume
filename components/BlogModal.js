import React from 'react';
import styles from '/styles/BlogModal.module.css'; // Adjust this path as needed

const BlogModal = ({ isOpen, onClose, menuItems, ContentComponent }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <aside className={styles.menu}>
          {menuItems.map((item, index) => (
            <div key={index} className={styles.menuItem}>
              {item}
            </div>
          ))}
        </aside>
        <section className={styles.content}>
          {ContentComponent && <ContentComponent />}
        </section>
        <button onClick={onClose} className={styles.closeButton}>Close</button>
      </div>
    </div>
  );
};

export default BlogModal;
