import { useEffect, useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { SEO } from "./components/SEO";
import { Layout } from "./components/Layout";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { AllProjects } from "./pages/AllProjects";
import { NotFound } from "./pages/NotFound";
import { SmoothScroll } from "./components/ui/SmoothScroll";
import { PageLoader } from "./components/ui/PageLoader";

function Home() {
  return (
    <Layout>
      <SEO />
      <About />
      <Experience />
      <Projects />
    </Layout>
  );
}

function App() {
  const location = useLocation();
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isRouteLoading, setIsRouteLoading] = useState(false);
  const previousPathRef = useRef(location.pathname);

  useEffect(() => {
    let isMounted = true;
    const minVisibleMs = 850;
    const start = performance.now();

    const completeInitialLoad = () => {
      const elapsed = performance.now() - start;
      const delay = Math.max(0, minVisibleMs - elapsed);
      window.setTimeout(() => {
        if (isMounted) {
          setIsInitialLoading(false);
        }
      }, delay);
    };

    if (document.readyState === "complete") {
      completeInitialLoad();
    } else {
      window.addEventListener("load", completeInitialLoad, { once: true });
    }

    const fallbackTimer = window.setTimeout(completeInitialLoad, 5000);

    return () => {
      isMounted = false;
      window.removeEventListener("load", completeInitialLoad);
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  useEffect(() => {
    if (previousPathRef.current === location.pathname) {
      return;
    }

    previousPathRef.current = location.pathname;

    const showTimer = window.setTimeout(() => {
      setIsRouteLoading(true);
    }, 0);

    const checkVisualAssets = () => {
      const pendingImages = Array.from(document.images).filter((img) => !img.complete);
      if (pendingImages.length === 0) {
        setIsRouteLoading(false);
      } else {
        window.requestAnimationFrame(checkVisualAssets);
      }
    };

    const hideTimer = window.setTimeout(() => {
      window.requestAnimationFrame(checkVisualAssets);
    }, 120);

    const hardTimeout = window.setTimeout(() => {
      setIsRouteLoading(false);
    }, 2400);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
      window.clearTimeout(hardTimeout);
    };
  }, [location.pathname]);

  return (
    <SmoothScroll>
      <PageLoader visible={isInitialLoading || isRouteLoading} />
      <LayoutGroup>
        <AnimatePresence mode="popLayout">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </LayoutGroup>
      <Analytics />
    </SmoothScroll>
  );
}

export default App;
