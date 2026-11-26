import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ProjectModal from './components/ProjectModal';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Pricing from './components/Pricing';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [cursorText, setCursorText] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [inquirySubject, setInquirySubject] = useState('');

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  const handleCursorEnter = (type, text = '') => {
    if (type === 'project') {
      setCursorText(text || 'VER');
    } else {
      setCursorText('');
    }
  };

  const handleCursorLeave = () => {
    setCursorText('');
  };

  const handleOpenInquiryFromProject = (projectTitle) => {
    setInquirySubject(`Interesse na obra: ${projectTitle}`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireService = (serviceTitle) => {
    setInquirySubject(`Consultoria para: ${serviceTitle}`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planTitle) => {
    setInquirySubject(`Modalidade selecionada: ${planTitle}`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#070709] text-aurea-cream font-sans selection:bg-aurea-accent selection:text-aurea-black">
      {/* Film Grain Texture Overlay */}
      <div className="grain-overlay" />

      {/* Bespoke Awwwards-Level Custom Cursor */}
      <CustomCursor cursorText={cursorText} />

      {/* Minimalist Floating Navigation */}
      <Header
        onCursorEnter={handleCursorEnter}
        onCursorLeave={handleCursorLeave}
      />

      {/* Main Flow */}
      <main>
        {/* Full-bleed Cinematic Hero */}
        <Hero
          onCursorEnter={handleCursorEnter}
          onCursorLeave={handleCursorLeave}
        />

        {/* Manifesto & About Studio */}
        <About
          onCursorEnter={handleCursorEnter}
          onCursorLeave={handleCursorLeave}
        />

        {/* Asymmetrical Curated Portfolio */}
        <Portfolio
          onSelectProject={(project) => setSelectedProject(project)}
          onCursorEnter={handleCursorEnter}
          onCursorLeave={handleCursorLeave}
        />

        {/* Specialized Architectural Services */}
        <Services
          onCursorEnter={handleCursorEnter}
          onCursorLeave={handleCursorLeave}
          onInquireService={handleInquireService}
        />

        {/* Core Differentials & Rigor */}
        <Differentials
          onCursorEnter={handleCursorEnter}
          onCursorLeave={handleCursorLeave}
        />

        {/* Architectural Engagement Plans / Modalidades de Contratação */}
        <Pricing
          onCursorEnter={handleCursorEnter}
          onCursorLeave={handleCursorLeave}
          onSelectPlan={handleSelectPlan}
        />

        {/* International Accolades & Awards Marquee */}
        <Awards />

        {/* High-touch Consultation Inquiry Form (Monumental CTA) */}
        <Contact
          prefilledSubject={inquirySubject}
          onCursorEnter={handleCursorEnter}
          onCursorLeave={handleCursorLeave}
        />
      </main>

      {/* Monolithic Sculptural Footer */}
      <Footer
        onCursorEnter={handleCursorEnter}
        onCursorLeave={handleCursorLeave}
      />

      {/* Architectural Project Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenInquiry={handleOpenInquiryFromProject}
        />
      )}
    </div>
  );
}
