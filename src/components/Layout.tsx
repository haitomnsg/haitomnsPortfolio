import React, { useState } from "react"; // Import useState
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header"; // Import Header
import { useIsMobile } from "@/hooks/use-mobile";

const Layout = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar 
        isMobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <main className={isMobile ? "flex-1 w-full pt-20" : "flex-1 ml-[calc(18rem+2rem)] w-[calc(100%-18rem-2rem)]"}>
        {/* pt-20 on mobile to account for fixed header height (h-16 + some space) */}
        <Header onToggleMobileMenu={toggleMobileMenu} />
        <div className="container mx-auto px-4 pt-4 md:pt-0 pb-4 sm:px-6 lg:px-8"> {/* Adjusted top padding for desktop */}
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;