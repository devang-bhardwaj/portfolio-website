/**
 * Site Configuration
 * 
 * This file contains centralized configuration for the portfolio website.
 * Update these values to customize the site information.
 */

const siteConfig = {
  // Personal Information
  name: "Devang Bhardwaj",
  title: "AI/ML Engineer & Python Developer",
  email: "devang@example.com",
  phone: "+91 98765 43210",
  location: "Delhi, India",
  
  // Social Media Links
  social: {
    github: "https://github.com/devangbhardwaj",
    linkedin: "https://linkedin.com/in/devangbhardwaj",
    twitter: "https://twitter.com/devangbhardwaj",
  },
  
  // Resume
  resumeLink: "/resume/Devang_Bhardwaj_Resume_Data_Science.pdf",
  
  // SEO & Meta Tags
  siteUrl: "https://devangbhardwaj.com",
  description: "AI/ML Engineer & Python Developer Portfolio - Specializing in machine learning, deep learning, and data science solutions.",
  keywords: "Devang Bhardwaj, AI, ML Engineer, Python Developer, Machine Learning, Data Science, Portfolio",
  ogImage: "/images/og-image.jpg",
  
  // Navigation
  navLinks: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ],
  
  // Theme Settings
  theme: {
    primary: "#6E07F3",
    secondary: "#0096FF", 
    accent: "#2ECC71",
    richBlack: "#121212",
    offWhite: "#F9F9F9",
  }
};

export default siteConfig;