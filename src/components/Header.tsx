import React from 'react';
import { Button } from "@/components/ui/button";
import { SheetTrigger } from "@/components/ui/sheet"; // Only SheetTrigger
import { Menu, Download } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

interface HeaderProps {
  onToggleMobileMenu: () => void; // To toggle the menu state managed in Layout
}

const Header: React.FC<HeaderProps> = ({ onToggleMobileMenu }) => {
  const isMobile = useIsMobile();

  const handleDownloadCV = () => {
    alert("Resume download functionality would be here!");
  };

  if (isMobile) {
    return (
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between h-16 px-4 bg-background/80 backdrop-blur-sm border-b md:hidden">
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" onClick={onToggleMobileMenu} aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <Button 
          variant="outline" 
          onClick={handleDownloadCV}
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground focus-visible:ring-primary/70"
          aria-label="Download Resume"
        >
          <Download className="mr-[6px] h-4 w-4" /> Resume
        </Button>
      </header>
    );
  }

  // Desktop: Button is part of the main content flow, typically at the top of a page or section.
  // For a persistent top-right button on desktop within the main content area,
  // it might be better placed within the Layout's main section or passed down.
  // For now, let's make it appear at the top of where Header is rendered in Layout.
  return (
    <header className="hidden md:flex md:justify-end md:pt-4 md:pb-2"> 
      {/* This header is for desktop, shown above content. Adjust pt-4 pb-2 as needed */}
      <Button 
        variant="outline" 
        onClick={handleDownloadCV}
        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground focus-visible:ring-primary/70"
      >
        <Download className="mr-[6px] h-4 w-4" /> Resume
      </Button>
    </header>
  );
};

export default Header;