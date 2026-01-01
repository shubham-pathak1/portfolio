import { Analytics } from "@vercel/analytics/react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { SmoothScroll } from "./components/ui/SmoothScroll";

function Home() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Projects />
      <About />
    </Layout>
  );
}

function App() {
  return (
    <SmoothScroll>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Analytics />
    </SmoothScroll>
  );
}

export default App;
