// pages/AboutMe.js
import React, { useState } from 'react';

const categories = ['Hobbies', 'Games', 'Books', 'Bands', 'Misc'];

const AboutMe = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div style={{ display: 'flex' }}>
      {/* Menu */}
      <aside style={{ width: '20%', padding: '10px' }}>
        {categories.map(category => (
          <div key={category} onClick={() => setSelectedCategory(category)} style={{ padding: '5px', cursor: 'pointer' }}>
            {category}
          </div>
        ))}
      </aside>

      {/* Content */}
      <div style={{ flex: 1, padding: '10px' }}>
        <h2>About Me</h2>
        <div>
          {/* Render content based on the selected category */}
          {selectedCategory === 'Hobbies' && <p>Details about hobbies...</p>}
          {selectedCategory === 'Games' && <p>Favorite games...</p>}
          {selectedCategory === 'Books' && <p>Books I love...</p>}
          {selectedCategory === 'Bands' && <p>My favorite bands...</p>}
          {selectedCategory === 'Misc' && <p>Miscellaneous things about me...</p>}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
