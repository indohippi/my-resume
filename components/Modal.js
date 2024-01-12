// components/Modal.js
import React from 'react';
import styles from '/styles/Modal.module.css'; // Update the path to your CSS module file

const Modal = ({ children, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
