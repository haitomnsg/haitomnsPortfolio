import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useIsMobile } from "@/hooks/use-mobile";

const Layout = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className={isMobile ? "flex-1 w-full pt-16 sm:pt-20" : "flex-1 ml-[calc(18rem+2rem)] w-[calc(100%-18rem-2rem)]"}>
        <div className="container mx-auto px-4 pt-8 pb-4 sm:px-6 lg:px-8"> {/* Changed py-8 to pt-8 pb-4 */}
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;