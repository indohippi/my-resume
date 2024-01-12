import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Menu from '../components/Menu';

export default function Home() {
  return (
    <div>
      <Header />
      <Menu />
      <main>
        <h1>Welcome to My Resume</h1>
        <p>Select a section to view details.</p>
        <nav>
          <ul>
            <li><Link href="/ContactInfo">Contact Info</Link></li>
            <li><Link href="/Objective">Objective</Link></li>
            <li><Link href="/ProfessionalExperience">Professional Experience</Link></li>
            <li><Link href="/Education">Education</Link></li>
            <li><Link href="/Certifications">Certifications</Link></li>
            <li><Link href="/TechnicalSkills">Technical Skills</Link></li>
          </ul>
        </nav>
      </main>
    </div>
  );
}
