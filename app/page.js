// app/page.js
'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import CharacterStats from '../components/CharacterStats';
import Modal from '../components/Modal';
import SocialMedia from '../components/SocialMedia';
import SkillMeter from '../components/SkillMeter'; // Import SkillMeter component
import Blog from '../components/Blog'; // Import Blog component
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

  // Define your skills and levels
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 75 },
    // ... add more skills as needed
  ];

  const skillsData = {
    labels: ['JavaScript', 'HTML & CSS', 'Java', 'Python', 'React', 'Data'],
    datasets: [{
      label: 'Years of Experience',
      data: [8, 10, 3, 4, 5, 6], // Data for the radar chart
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      pointBackgroundColor: 'rgba(255, 99, 132, 1)',
    }],
  };
  const skillsColor = 'rgba(255, 99, 132, 0.2)';

  return (
    <div>
      <Header onClose={closeModal} />
      <Menu openModal={openModal} />
      {isModalOpen && (
        <Modal onClose={closeModal}>
          {renderModalContent()}
        </Modal>
      )}
      <CharacterStats />
      <SocialMedia />
      {/* Render the radar chart SkillMeter */}
      <SkillMeter 
        dataPoints={[10, 10, 6, 4, 10, 8]} 
        labels={['JavaScript', 'HTML & CSS', 'Advertising', 'Python', 'Design', 'Data']} 
      />
      <Blog /> {/* Added Blog component here */}
      {/* ... other components ... */}
    </div>
  );
}
