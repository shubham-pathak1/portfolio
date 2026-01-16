import { Analytics } from "@vercel/analytics/react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { SEO } from "./components/SEO";
import { Layout } from "./components/Layout";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { NotFound } from "./pages/NotFound";
import { SmoothScroll } from "./components/ui/SmoothScroll";

function Home() {
  return (
    <Layout>
      <SEO />
      <Hero />
      <Experience />
      <Projects />
      <About />
    </Layout>
  );
}

function App() {
  const location = useLocation();

  return (
    <SmoothScroll>
      <SEO />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Analytics />
    </SmoothScroll>
  );
}

export default App;
