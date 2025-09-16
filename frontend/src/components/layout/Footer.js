import React from 'react';
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import siteConfig from '../../config/siteConfig';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      href: siteConfig.social.github,
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: 'LinkedIn',
      href: siteConfig.social.linkedin,
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: 'Twitter',
      href: siteConfig.social.twitter,
      icon: <Twitter className="h-5 w-5" />,
    }
  ];

  return (
    <footer className="bg-rich-black py-12 border-t border-slate-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold font-heading text-off-white mb-2">
              <span className="text-primary">{siteConfig.name.charAt(0)}</span>{siteConfig.name.slice(1)}
            </h3>
            <p className="text-slate-gray text-center md:text-left">
              {siteConfig.title}
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-gray hover:text-primary transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 flex flex-col items-center">
            <h3 className="text-lg font-semibold text-off-white mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-slate-gray hover:text-primary transition-colors duration-300">Home</a>
              <a href="#about" className="text-slate-gray hover:text-primary transition-colors duration-300">About</a>
              <a href="#skills" className="text-slate-gray hover:text-primary transition-colors duration-300">Skills</a>
              <a href="#projects" className="text-slate-gray hover:text-primary transition-colors duration-300">Projects</a>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-1 flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold text-off-white mb-4">Contact</h3>
            <div className="flex flex-col items-center md:items-end space-y-2">
              <a href={`mailto:${siteConfig.email}`} className="text-slate-gray hover:text-primary transition-colors duration-300">
                {siteConfig.email}
              </a>
              <a 
                href={siteConfig.resumeLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-secondary transition-colors duration-300"
              >
                <span className="mr-1">Resume</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-slate-800 text-center">
          <p className="text-slate-gray text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;