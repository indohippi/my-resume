// pages/AboutMe.js
import React, { useState } from 'react';
import styles from '/styles/AboutMe.module.css';

const categories = ['Hobbies', 'Games', 'Books', 'Bands', 'Misc'];

const AboutMe = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className={styles.container}>
      {/* Menu */}
      <aside className={styles.menu}>
        {categories.map(category => (
          <div key={category} onClick={() => setSelectedCategory(category)} className={styles.menuItem}>
            {category}
          </div>
        ))}
      </aside>

      {/* Content */}
      <div className={styles.content}>
        <h2>{selectedCategory}</h2>
        <div className={styles.categoryContent}>
          {/* Render content based on the selected category */}
          {selectedCategory === 'Hobbies' && <p>Details about hobbies like playing guitar, photography, and hiking.</p>}
          {selectedCategory === 'Games' && <p>Favorite games include The Legend of Zelda, Final Fantasy, and Dark Souls series.</p>}
          {selectedCategory === 'Books' && <p>Books I love include 1984 by George Orwell, Brave New World by Aldous Huxley, and The Hobbit by J.R.R. Tolkien.</p>}
          {selectedCategory === 'Bands' && <p>My favorite bands are Radiohead, Pink Floyd, and The Beatles.</p>}
          {selectedCategory === 'Misc' && <p>Miscellaneous interests like astronomy, programming, and coffee brewing.</p>}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
