import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Robotics from "./pages/Robotics";
import Contact from "./pages/Contact";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import ProjectPage from "./pages/ProjectPage"; // Import the new ProjectPage
import useSmoothScroll from "./hooks/useSmoothScroll"; // Import the hook

const queryClient = new QueryClient();

const appBaseName = "/";

const App = () => {
  useSmoothScroll(); // Initialize smooth scrolling

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={appBaseName}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              {/* Add the dynamic route for individual project pages */}
              <Route path="/projects/:projectId" element={<ProjectPage />} />
              <Route path="/robotics" element={<Robotics />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;