import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
// SheetTrigger and Menu are no longer needed here
// useIsMobile is also not strictly needed if the header's visibility is controlled by Layout

const Header: React.FC = () => {
  const handleDownloadCV = () => {
    alert("Resume download functionality would be here!");
  };

  // This header will now be shown via Layout's logic
  return (
    <div className="flex justify-end py-4 px-4 md:px-0"> {/* Adjusted padding for consistency */}
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