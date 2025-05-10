import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const isMobile = useIsMobile();

  const handleDownloadCV = () => {
    alert("Resume download functionality would be here!");
  };

  if (isMobile) {
    // Mobile: Fixed top-right Resume button
    return (
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <Button 
          variant="outline" 
          onClick={handleDownloadCV}
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground focus-visible:ring-primary/70 shadow-md bg-card" // Added shadow and bg-card for visibility
          aria-label="Download Resume"
        >
          <Download className="mr-[6px] h-4 w-4" /> Resume
        </Button>
      </div>
    );
  }

  // Desktop: Resume button rendered in the document flow, to be placed by Layout
  return (
    <div className="hidden md:flex md:justify-end md:pt-4 md:pb-2"> {/* pt-4 and pb-2 for spacing when in flow */}
      <Button 
        variant="outline" 
        onClick={handleDownloadCV}
        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground focus-visible:ring-primary/70"
      >
        <Download className="mr-[6px] h-4 w-4" /> Resume
      </Button>
    </div>
  );
};

export default Header;