// Blog.js
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import styles from '/styles/Blog.module.css';

const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const posts = [
    { title: 'Post 1', component: 'Component1' },
    { title: 'Post 2', component: 'Component2' },
    // ... other posts
  ];

  const loadComponent = async (componentName) => {
    if (!componentName) return null;
    try {
      const component = await import(`../pages/${componentName}`).then(mod => mod.default);
      return React.createElement(component);
    } catch (error) {
      console.error(`Cannot load component '${componentName}':`, error);
      // Handle the error, possibly by setting an error state and displaying a message to the user
      return null;
    }
  };  

  const openModalWithPost = async (componentName) => {
    const content = await loadComponent(componentName);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <>
      <div className={styles.blogContainer}>
        {posts.map((post, index) => (
          <div key={index} className={styles.post} onClick={() => openModalWithPost(post.component)}>
            <h3>{post.title}</h3>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          {modalContent}
        </Modal>
      )}
    </>
  );
};

export default Blog;
