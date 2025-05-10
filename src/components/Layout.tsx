import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const Layout = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar /> 
      <main className={isMobile ? "flex-1 w-full pt-4" : "flex-1 ml-[calc(18rem+2rem)] w-[calc(100%-18rem-2rem)]"}>
        {/* Removed Header component */}
        {/* Adjusted mobile top padding back, as fixed header is removed */}
        <div className={cn(
          "container mx-auto px-4 pb-4 sm:px-6 lg:px-8",
          isMobile ? "pt-16" : "pt-8" // pt-16 on mobile to clear fixed hamburger, pt-8 for desktop
        )}>
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;