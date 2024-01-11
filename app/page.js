import React from 'react';
import Link from 'next/link';

import Menu from '../components/Menu';
import Header from '../components/Header';
import ContactInfo from '../pages/ContactInfo';
import Objective from '../pages/Objective';
import ProfessionalExperience from '../pages/ProfessionalExperience';
import Education from '../pages/Education';
import Certifications from '../pages/Certifications';
import TechnicalSkills from '../pages/TechnicalSkills';

const Page = () => {
  return (
    <div>
      <Header />
      <nav>
        <ul>
          <li>
            <Link href="/contactInfo">Contact Info</Link>
          </li>
          <li>
            <Link href="/objective">Objective</Link>
          </li>
          <li>
            <Link href="/professionalExperience">Professional Experience</Link>
          </li>
          <li>
            <Link href="/education">Education</Link>
          </li>
          <li>
            <Link href="/certifications">Certifications</Link>
          </li>
          <li>
            <Link href="/technicalSkills">Technical Skills</Link>
          </li>
          {/* Add other navigation links as needed */}
        </ul>
      </nav>
      {/* The common part of the page or any other components can be added here */}
    </div>
  );
};

export default Page;