import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Menu from '../components/Menu';
import CharacterStats from '../components/CharacterStats';

export default function Home() {
  return (
    <div>
      <Header />
      <Menu />
      <CharacterStats />
      {/* ... other components */}
      <nav>
        <ul>
          {/* Update the hrefs to match the file names in the pages directory */}
          <li><Link href="/ContactInfo">Contact Info</Link></li>
          <li><Link href="/Objective">Objective</Link></li>
          <li><Link href="/ProfessionalExperience">Professional Experience</Link></li>
          <li><Link href="/Education">Education</Link></li>
          <li><Link href="/Certifications">Certifications</Link></li>
          <li><Link href="/TechnicalSkills">Technical Skills</Link></li>
          {/* Add other navigation links as needed */}
        </ul>
      </nav>
      {/* The common part of the page or any other components can be added here */}
    </div>
  );
};
