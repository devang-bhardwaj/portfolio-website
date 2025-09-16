import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial delay to prevent cursor jumping on page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHoverStart = () => {
      setIsHovering(true);
    };

    const handleHoverEnd = () => {
      setIsHovering(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    // Add cursor position tracking
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      clearTimeout(timer);
      
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });

      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Check if we're on a mobile device - don't show custom cursor on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="custom-cursor"
        animate={{
          x: position.x,
          y: position.y,
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          mass: 0.5,
        }}
      />
      {/* Cursor trail effect - you can customize or remove this */}
      <motion.div
        className="cursor-trail"
        animate={{
          x: position.x,
          y: position.y,
          opacity: isVisible ? 0.3 : 0,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 200,
          mass: 0.8,
          delay: 0.08,
        }}
      />
    </>
  );
};

export default CustomCursor;