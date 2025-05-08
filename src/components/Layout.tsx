import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const Layout = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className={isMobile ? "flex-1 w-full pt-16 sm:pt-20" : "flex-1 ml-[calc(18rem+2rem)] w-[calc(100%-18rem-2rem)]"}>
        {/* Added 2rem to ml and subtracted from width to account for sidebar's left-4 (1rem) and its own width (18rem) + 1rem extra spacing */}
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;