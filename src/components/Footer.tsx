import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 mt-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-3 text-xs text-muted-foreground">
          {/* Copyright */}
          <p className="text-center md:text-left">
            © Copyright <span className="font-bold">{currentYear}</span> by Haitomns G
          </p>

          {/* Separator for desktop */}
          <span className="hidden md:inline">|</span>

          {/* Privacy Policy Link */}
          <Link to="#" className="hover:text-foreground transition-colors"> {/* Placeholder link */}
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
            Programmed by Ashish Gupta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;