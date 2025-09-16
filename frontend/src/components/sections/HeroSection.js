import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import siteConfig from '../../config/siteConfig';

const HeroSection = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    // Simple typewriter effect
    const texts = ["AI/ML Engineer", "Python Developer", "Data Scientist"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 150;
    
    const type = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        if (typewriterRef.current) {
          typewriterRef.current.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
        }
        typingDelay = 50;
      } else {
        if (typewriterRef.current) {
          typewriterRef.current.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
        }
        typingDelay = 150;
      }
      
      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingDelay = 1500; // Pause at the end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingDelay = 500; // Pause before typing next
      }
      
      setTimeout(type, typingDelay);
    };
    
    const timer = setTimeout(type, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent"></div>
      
      {/* Background geometric shapes */}
      <div className="absolute top-20 right-[10%] h-64 w-64 rounded-full bg-secondary/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-[10%] h-72 w-72 rounded-full bg-primary/5 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-secondary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-gradient bg-primary-gradient">
              {siteConfig.name}
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              <p className="text-xl md:text-2xl font-medium text-off-white">
                I'm a <span ref={typewriterRef} className="text-secondary"></span>
              </p>
            </div>
            
            <p className="text-slate-gray max-w-2xl mx-auto mb-8">
              Passionate about building intelligent systems and solving complex problems 
              using machine learning, deep learning, and data science techniques. Let's 
              turn your data into valuable insights and innovative solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#contact"
                className="btn-primary"
              >
                Get In Touch
              </a>
              <a 
                href={siteConfig.resumeLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-slate-gray hover:text-secondary transition-colors duration-300"
      >
        <span className="mb-2 text-sm">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </a>
    </section>
  );
};

export default HeroSection;