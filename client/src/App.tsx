import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/hooks/use-theme";
import AnimatedBackground from "@/components/AnimatedBackground";
import CookieBanner from "@/components/CookieBanner";
import Sidebar from "@/components/layout/Sidebar";
import { useEffect } from "react";

import Home from "@/pages/Home";
import ServicesPage from "@/pages/ServicesPage";
import ExperiencePage from "@/pages/ExperiencePage";
import SkillsPage from "@/pages/SkillsPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ContactPage from "@/pages/ContactPage";

import Legal from "@/pages/Legal";
import ProjectDetail from "@/pages/ProjectDetail";
import NotFound from "@/pages/not-found";

// Component to handle scrolling to top on route change
function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    // Scroll the main content area to top, not the window, because we use a specific layout structure
    const mainContent = document.getElementById("main-scroll-area");
    if (mainContent) {
      mainContent.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/experience" component={ExperiencePage} />
        <Route path="/skills" component={SkillsPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/contact" component={ContactPage} />
        
        <Route path="/mentions-legales" component={Legal} />
        <Route path="/project/:slug" component={ProjectDetail} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <AnimatedBackground />
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div id="main-scroll-area" className="flex-1 overflow-y-auto relative pb-24 md:pb-0 pt-16 md:pt-0">
              <Router />
            </div>
          </div>
          <Toaster />
          <CookieBanner />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
