import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import WorkExperience from './components/WorkExperience';
import CertificatesSection from './components/CertificatesSection';
import WhyTrustMe from './components/WhyTrustMe';
import GitHubContributions from './components/GitHubContributions';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // GSAP scroll animations
    gsap.fromTo('.fade-in', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.fade-in',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <div className="App">
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <WorkExperience />
      <CertificatesSection />
      <WhyTrustMe />
      <GitHubContributions />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;