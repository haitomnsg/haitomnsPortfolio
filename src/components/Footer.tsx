import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 mt-12 border-t border-border">
      <p className="text-center text-sm text-muted-foreground">
        © Copyright {currentYear} by Haitomns G
      </p>
    </footer>
  );
};

export default Footer;