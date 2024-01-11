import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Menu from '../components/Menu';
import CharacterStats from '../components/CharacterStats'; // Corrected import statement

export default function Home() {
  return (
    <div>
      <Header />
      <Menu />
      <CharacterStats />
      {/* Remove the nav and ul if you are not using it anymore, or keep it if you want both character stats and links */}
      {/* <nav>
        <ul>
          <li><Link href="/contactInfo">Contact Info</Link></li>
          <li><Link href="/objective">Objective</Link></li>
          <li><Link href="/professionalExperience">Professional Experience</Link></li>
          <li><Link href="/education">Education</Link></li>
          <li><Link href="/certifications">Certifications</Link></li>
          <li><Link href="/technicalSkills">Technical Skills</Link></li>
          {/* Add other navigation links as needed */}
        {/* </ul>
      </nav> */}
      {/* The common part of the page or any other components can be added here */}
    </div>
  );
};
