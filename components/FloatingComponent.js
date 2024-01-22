import React from 'react';
import styles from '/styles/FloatingComponent.module.css'; // Ensure the path to your CSS file is correct

const FloatingComponent = () => {
  return (
    <div className={styles.floatingContainer}>
      {/* Content goes here */}
      <p>This is a floating component.</p>
    </div>
  );
};

export default FloatingComponent;
