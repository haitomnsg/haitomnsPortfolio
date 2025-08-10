import React from "react";
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
import CookiePolicy from "@/pages/CookiePolicy";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import NotFound from "@/pages/NotFound";
import ProjectPage from "@/pages/ProjectPage";

const Layout = () => {
  const isMobile = useIsMobile();
  const location = useLocation();

  // Define paths that should be handled by Outlet on mobile,
  // and are NOT part of the main scrollable sections.
  const outletOnlyPaths = [
    "/cookie-policy",
    "/privacy-policy",
    // For dynamic routes like /projects/:projectId, we check if it starts with /projects/
    // The NotFound page is also handled by Outlet
  ];

  // Check if the current path is one of the "standalone" pages that should be rendered by Outlet on mobile
  const shouldRenderOutletOnlyOnMobile =
    outletOnlyPaths.includes(location.pathname) ||
    location.pathname.startsWith('/projects/') || // Matches /projects/:projectId
    location.pathname === '*'; // Matches the 404 route

  // If not mobile, render the standard multi-page layout
  if (!isMobile) {
    return (
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        <main className="flex-1 ml-[calc(18rem+2rem)] w-[calc(100%-18rem-2rem)]">
          <div className="container mx-auto px-4 pb-4 pt-8">
            <Outlet />
          </div>
          <Footer />
        </main>
      </div>
    );
  }

  // If mobile, render all sections or specific Outlet content
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 w-full">
        {/* Conditionally render main sections OR Outlet content */}
        {shouldRenderOutletOnlyOnMobile ? (
          // Render Outlet for policy pages, project detail pages, and 404 on mobile
          <div className={cn("container mx-auto px-4 pb-4 pt-16")}>
            <Outlet />
          </div>
        ) : (
          // Render all main page components unconditionally on mobile for scrolling
          <>
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
          </>
        )}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;