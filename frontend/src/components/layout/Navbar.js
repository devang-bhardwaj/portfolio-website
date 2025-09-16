import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Moon, Sun } from 'lucide-react';
import siteConfig from '../../config/siteConfig';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = siteConfig.navLinks;

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-rich-black/80 backdrop-blur-md shadow-lg'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold font-heading text-off-white"
        >
          <span className="text-primary">{siteConfig.name.charAt(0)}</span>{siteConfig.name.slice(1).split(' ')[0]}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-off-white/90 hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-full hover:bg-slate-800 transition-colors duration-300"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-300" />
            ) : (
              <Moon className="h-5 w-5 text-blue-300" />
            )}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="p-2 mr-2 rounded-full hover:bg-slate-800 transition-colors duration-300"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-300" />
            ) : (
              <Moon className="h-5 w-5 text-blue-300" />
            )}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2 rounded-md hover:bg-slate-800 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-off-white" />
            ) : (
              <Menu className="h-6 w-6 text-off-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-rich-black/95 backdrop-blur-lg md:hidden py-4 shadow-lg animate-slide-down">
          <div className="container flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center justify-between py-2 border-b border-slate-800 text-off-white/90 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{link.name}</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;