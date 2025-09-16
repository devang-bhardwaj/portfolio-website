import React, { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ContactSection from './components/sections/ContactSection';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgressIndicator from './components/ui/ScrollProgressIndicator';
import MetaTags from './components/ui/MetaTags';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating page load for smoother transitions
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-rich-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-off-white">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <MetaTags />
      <ScrollProgressIndicator />
      <CustomCursor />
      <Layout>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </Layout>
    </>
  );
};

export default App;