import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-8 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-3 md:space-y-0 md:space-x-3 text-xs text-muted-foreground">
          {/* Copyright */}
          <p className="text-center md:text-left">
            © Copyright <span className="font-bold">{currentYear}</span> by Ashish Gupta
          </p>

          {/* Separator for desktop */}
          <span className="hidden md:inline">|</span>

          {/* Privacy Policy Link */}
          <Link to="/privacy-policy" className="hover:text-foreground transition-colors"> {/* Updated link */}
            Privacy Policy
          </Link>

          {/* Separator for desktop */}
          <span className="hidden md:inline">|</span>

          {/* Cookie Policy Link */}
          <Link to="/cookie-policy" className="hover:text-foreground transition-colors">
            Cookie Policy
          </Link>

          {/* Separator for desktop */}
          <span className="hidden md:inline">|</span>
          
          {/* Programmed By */}
          <p className="text-center md:text-left">
            Programmed with ❤️ by <span className="font-bold">Ashish Gupta</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;