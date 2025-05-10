import React from "react"; // Removed useState
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";
import { useIsMobile } from "@/hooks/use-mobile";

const Layout = () => {
  const isMobile = useIsMobile();
  // mobileMenuOpen state and toggleMobileMenu function are removed as Sidebar manages its own state

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar /> {/* Sidebar now handles its own mobile trigger and sheet */}
      <main className={isMobile ? "flex-1 w-full pt-4" : "flex-1 ml-[calc(18rem+2rem)] w-[calc(100%-18rem-2rem)]"}>
        {/* 
          For mobile, the fixed hamburger is part of Sidebar.
          The Header component (with Resume button) will be part of the scrollable content.
          If a fixed mobile header with Resume button is desired, Header needs different styling.
          For now, Header is part of the main flow.
        */}
        <Header /> {/* Header for Resume button */}
        <div className={cn(
          "container mx-auto px-4 pb-4 sm:px-6 lg:px-8",
          isMobile ? "pt-4" : "pt-0" // Less top padding on mobile if Header is in flow
        )}>
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;