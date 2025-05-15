import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

// Import all page components
import Index from "@/pages/Index";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Robotics from "@/pages/Robotics";
import Contact from "@/pages/Contact";
import CookiePolicy from "@/pages/CookiePolicy"; // Keep these for desktop routing
import PrivacyPolicy from "@/pages/PrivacyPolicy"; // Keep these for desktop routing
import NotFound from "@/pages/NotFound"; // Keep for desktop routing

const Layout = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  // State to track the active section ID for mobile view
  const [activeSection, setActiveSection] = useState("home"); 

  // Update active section state based on route changes (primarily for initial load or if mobile state changes)
  useEffect(() => {
    // Map pathname to section ID
    const path = location.pathname;
    const sectionId = path === "/" ? "home" : path.replace("/", "");
    setActiveSection(sectionId);
  }, [location]); // Depend only on location changes

  // If not mobile, render the standard multi-page layout
  if (!isMobile) {
    return (
      <div className="flex min-h-screen bg-background">
        <Sidebar activeSection={activeSection} /> {/* Pass activeSection for potential future use or consistency */}
        <main className="flex-1 ml-[calc(18rem+2rem)] w-[calc(100%-18rem-2rem)]">
          <div className="container mx-auto px-4 pb-4 pt-8">
            {/* Outlet renders the current page component based on route */}
            <Outlet />
          </div>
          <Footer />
        </main>
      </div>
    );
  }

  // If mobile, render all sections and control visibility
  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile Sidebar (Sheet) is handled internally by the Sidebar component */}
      <Sidebar activeSection={activeSection} /> 
      
      <main className="flex-1 w-full">
        {/* Render all page components, controlling visibility with Tailwind classes */}
        {/* Add pt-16 to all mobile sections to clear the fixed hamburger menu */}
        <div className={cn("container mx-auto px-4 pb-4 pt-16", activeSection === "home" ? "block" : "hidden")}>
          <Index />
        </div>
        <div className={cn("container mx-auto px-4 pb-4 pt-16", activeSection === "about" ? "block" : "hidden")}>
          <About />
        </div>
        <div className={cn("container mx-auto px-4 pb-4 pt-16", activeSection === "projects" ? "block" : "hidden")}>
          <Projects />
        </div>
        <div className={cn("container mx-auto px-4 pb-4 pt-16", activeSection === "robotics" ? "block" : "hidden")}>
          <Robotics />
        </div>
        <div className={cn("container mx-auto px-4 pb-4 pt-16", activeSection === "contact" ? "block" : "hidden")}>
          <Contact />
        </div>

        {/* Cookie and Privacy Policy pages will still use routing even on mobile */}
        {/* This is a simplification; a full SPA might include these as sections too */}
        {/* For now, they will render via Outlet if their route is hit */}
        <div className={cn("container mx-auto px-4 pb-4 pt-16", ["cookie-policy", "privacy-policy", "404"].includes(activeSection) ? "block" : "hidden")}>
           {/* Render Outlet for policy pages and 404 on mobile */}
           {/* This ensures they still work if navigated to directly */}
           {["cookie-policy", "privacy-policy", "404"].includes(activeSection) && <Outlet />}
        </div>


        <Footer />
      </main>
    </div>
  );
};

export default Layout;