// app/page.js
'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import CharacterStats from '../components/CharacterStats';
import Modal from '../components/Modal';
import SocialMedia from '../components/SocialMedia'; // Adjust the path as necessary
import ContactInfo from '../pages/ContactInfo';
import Objective from '../pages/Objective';
import ProfessionalExperience from '../pages/ProfessionalExperience';
import Education from '../pages/Education';
import Certifications from '../pages/Certifications';
import TechnicalSkills from '../pages/TechnicalSkills';
// Import other page components as needed

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const renderModalContent = () => {
    switch (modalContent) {
      case 'ContactInfo':
        return <ContactInfo />;
      case 'Objective':
        return <Objective />;
      case 'ProfessionalExperience':
        return <ProfessionalExperience />;
      case 'Education':
        return <Education />;
      case 'Certifications':
        return <Certifications />;
      case 'TechnicalSkills':
        return <TechnicalSkills />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      <Menu openModal={openModal} />
      {isModalOpen && (
        <Modal onClose={closeModal}>
          {renderModalContent()}
        </Modal>
      )}
      <CharacterStats />
      <SocialMedia />
      {/* ... other components */}
    </div>
  );
};
