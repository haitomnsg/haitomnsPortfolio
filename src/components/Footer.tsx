import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 mt-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added container for consistent padding and alignment */}
        <p className="text-xs text-muted-foreground text-center md:text-left">
          © Copyright <span className="font-bold">{currentYear}</span> by Haitomns G
        </p>
      </div>
    </footer>
  );
};

export default Footer;