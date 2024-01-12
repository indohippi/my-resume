// app/page.js
'use client';

import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import CharacterStats from '../components/CharacterStats';
import Modal from '../components/Modal';
import ContactInfo from '../pages/ContactInfo';
// Import other page components as needed
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const modal = searchParams.get('modal');

  const renderModalContent = () => {
    switch (modal) {
      case 'contactInfo':
        return <ContactInfo />;
      // Add cases for other modals
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      <Menu />
      <CharacterStats />
      {modal && <Modal>{renderModalContent()}</Modal>}
      {/* Rest of the page content */}
    </div>
  );
};
