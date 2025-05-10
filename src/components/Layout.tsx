import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const Layout = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar /> 
      {isMobile && <Header />} {/* Render fixed mobile header elements (Resume button) */}
      
      <main className={isMobile ? "flex-1 w-full pt-20" : "flex-1 ml-[calc(18rem+2rem)] w-[calc(100%-18rem-2rem)]"}>
        {/* pt-20 on mobile to clear fixed header (approx 16px top + 40px button + 16px buffer) */}
        
        <div className={cn(
          "container mx-auto px-4 pb-4 sm:px-6 lg:px-8",
          isMobile ? "pt-0" : "pt-0" // Desktop header is now inside this container or handled differently
        )}>
          {!isMobile && <Header />} {/* Render desktop header inside the container */}
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;