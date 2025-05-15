import React from "react"; // Removed useState, useEffect as they are no longer needed for activeSection state
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
// Removed import useActiveSection from "@/hooks/useActiveSection"; // Remove the hook import

// Import all page components
import Index from "@/pages/Index";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Robotics from "@/pages/Robotics";
import Contact from "@/pages/Contact";
import CookiePolicy from "@/pages/CookiePolicy"; // Keep these for desktop routing
import PrivacyPolicy from "@/pages/PrivacyPolicy"; // Keep these for desktop routing
import NotFound from "@/pages/NotFound"; // Keep for desktop routing

// Define the IDs for the main content sections (still needed for scrolling)
const mainSectionIds = ["home", "about", "projects", "robotics", "contact"];

const Layout = () => {
  const isMobile = useIsMobile();
  const location = useLocation(); // Still needed for desktop routing

  // Removed activeSection state and useEffect hook

  // If not mobile, render the standard multi-page layout
  if (!isMobile) {
    return (
      <div className="flex min-h-screen bg-background">
        {/* No activeSection prop needed for desktop Sidebar */}
        <Sidebar />
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

  // If mobile, render all sections
  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile Sidebar (Sheet) is handled internally by the Sidebar component */}
      {/* No activeSection prop needed for mobile Sidebar */}
      <Sidebar />

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
         {/* This div is only needed if you want policy/404 pages to still use routing on mobile */}
         {/* If you want them as sections too, you'd add them above */}
         {/* For now, keeping the Outlet for these specific routes */}
         <div className={cn("container mx-auto px-4 pb-4 pt-16")}>
           {/* Render Outlet for policy pages and 404 on mobile */}
           {/* This ensures they still work if navigated to directly */}
           {/* You might need conditional rendering here if you don't want Outlet always rendering */}
           {/* A simple check based on location.pathname could work, but Outlet handles it */}
           <Outlet />
        </div>


        <Footer />
      </main>
    </div>
  );
};

export default Layout;