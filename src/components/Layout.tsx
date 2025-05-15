import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import useActiveSection from "@/hooks/useActiveSection"; // Import the new hook

// Import all page components
import Index from "@/pages/Index";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Robotics from "@/pages/Robotics";
import Contact from "@/pages/Contact";
import CookiePolicy from "@/pages/CookiePolicy"; // Keep these for desktop routing
import PrivacyPolicy from "@/pages/PrivacyPolicy"; // Keep these for desktop routing
import NotFound from "@/pages/NotFound"; // Keep for desktop routing

// Define the IDs for the main content sections
const mainSectionIds = ["home", "about", "projects", "robotics", "contact"];

const Layout = () => {
  const isMobile = useIsMobile();
  // Use the hook to track the active section based on viewport visibility
  const activeSectionFromViewport = useActiveSection(mainSectionIds);
  const location = useLocation();

  // State to hold the *actual* active section ID to pass to Sidebar
  // On desktop, this comes from the route. On mobile, it comes from the viewport hook.
  const [activeSection, setActiveSection] = useState("home");

  // Update active section state based on route changes (desktop) or viewport (mobile)
  useEffect(() => {
    if (!isMobile) {
      // On desktop, active section is determined by the route
      const path = location.pathname;
      const sectionId = path === "/" ? "home" : path.replace("/", "");
      setActiveSection(sectionId);
    } else {
      // On mobile, active section is determined by the viewport hook
      // Only update if the hook provides a value (meaning a section is visible)
      if (activeSectionFromViewport) {
         setActiveSection(activeSectionFromViewport);
      } else {
        // Fallback: if no section is visible (e.g., initial load before scroll),
        // use the section corresponding to the current route.
        const path = location.pathname;
        setActiveSection(path === "/" ? "home" : path.replace("/", ""));
      }
    }
  }, [location, isMobile, activeSectionFromViewport]); // Depend on location, mobile state, and viewport hook result


  // If not mobile, render the standard multi-page layout
  if (!isMobile) {
    return (
      <div className="flex min-h-screen bg-background">
        <Sidebar activeSection={activeSection} /> {/* Pass activeSection */}
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
        {/* Render all main page components unconditionally on mobile */}
        {/* Add pt-16 to all mobile sections to clear the fixed hamburger menu */}
        <div className={cn("container mx-auto px-4 pb-4 pt-16")} id="home-section">
          <Index />
        </div>
        <div className={cn("container mx-auto px-4 pb-4 pt-16")} id="about-section">
          <About />
        </div>
        <div className={cn("container mx-auto px-4 pb-4 pt-16")} id="projects-section">
          <Projects />
        </div>
        <div className={cn("container mx-auto px-4 pb-4 pt-16")} id="robotics-section">
          <Robotics />
        </div>
        <div className={cn("container mx-auto px-4 pb-4 pt-16")} id="contact-section">
          <Contact />
        </div>

        {/* Cookie and Privacy Policy pages will still use routing even on mobile */}
        {/* They will render via Outlet if their route is hit */}
        {/* We render Outlet here unconditionally on mobile, but these pages
            are only shown if their specific route is active. */}
         <div className={cn("container mx-auto px-4 pb-4 pt-16", !mainSectionIds.includes(activeSection) ? "block" : "hidden")}>
           {/* Render Outlet for policy pages and 404 on mobile */}
           {/* This ensures they still work if navigated to directly */}
           {/* The 'hidden' class above ensures this div is only visible if the activeSection
               is NOT one of the main SPA sections (i.e., it's a policy or 404 page) */}
           <Outlet />
        </div>


        <Footer />
      </main>
    </div>
  );
};

export default Layout;