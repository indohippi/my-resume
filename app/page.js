// app/page.js
'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import CharacterStats from '../components/CharacterStats';
import Modal from '../components/Modal';
import ContactInfo from '../pages/ContactInfo';
// Import other page components as needed
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchParams = useSearchParams();
  const modalContent = searchParams.get('modal');

  const openModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false);

const renderModalContent = () => {
switch (modalContent) {
case 'contactInfo':
return <ContactInfo />;
// Include other cases for each modal content
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
{/* Rest of the page content /}
<CharacterStats />
{/ ... other components */}
</div>
);
};