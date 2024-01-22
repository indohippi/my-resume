// Blog.js
import React, { useState } from 'react';
import styles from '/styles/Blog.module.css'; // Adjust path as necessary

const Blog = () => {
  // Sample state and structure, modify as needed
  const [posts, setPosts] = useState([
    { title: 'Post 1', content: 'Content for post 1...', expanded: false },
    { title: 'Post 2', content: 'Content for post 2...', expanded: false },
    // Add more posts as needed
  ]);

  const togglePost = (index) => {
    const newPosts = [...posts];
    newPosts[index].expanded = !newPosts[index].expanded;
    setPosts(newPosts);
  };

  return (
    <div className={styles.blogContainer}>
      {posts.map((post, index) => (
        <div key={index} className={styles.post}>
          <h3 onClick={() => togglePost(index)}>{post.title}</h3>
          {post.expanded && <p>{post.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default Blog;
