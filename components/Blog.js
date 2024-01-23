import React, { useState } from 'react';
import BlogModal from './BlogModal'; // Import the new BlogModal component
import styles from '/styles/Blog.module.css';

const Blog = () => {
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const posts = [
    { title: 'Post 1', component: 'Component1' },
    { title: 'Post 2', component: 'Component2' },
    // ... other posts
  ];

  const openBlogModalWithPost = async (componentName) => {
    try {
      const Component = await import(`../pages/${componentName}`).then(mod => mod.default);
      setSelectedComponent(() => Component); // Store the component to render in the modal
      setIsBlogModalOpen(true);
    } catch (error) {
      console.error(`Error loading component '${componentName}':`, error);
      // Handle the error appropriately
    }
  };

  const closeBlogModal = () => {
    setIsBlogModalOpen(false);
    setSelectedComponent(null);
  };

  return (
    <>
      <div className={styles.blogContainer}>
        {posts.map((post, index) => (
          <div key={index} className={styles.post} onClick={() => openBlogModalWithPost(post.component)}>
            <h3>{post.title}</h3>
          </div>
        ))}
      </div>
      {isBlogModalOpen && (
        <BlogModal onClose={closeBlogModal}>
          {selectedComponent ? <selectedComponent /> : null}
        </BlogModal>
      )}
    </>
  );
};

export default Blog;
