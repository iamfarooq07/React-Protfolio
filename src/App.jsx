import { motion, useScroll } from "motion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Features from "./components/Features";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

// Layout: Navbar + page content + Footer
const Layout = ({ children }) => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/experience"
          element={
            <Layout>
              <Experience />
            </Layout>
          }
        />
        <Route
          path="/skills"
          element={
            <Layout>
              <Skills />
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout>
              <Projects />
            </Layout>
          }
        />
        <Route
          path="/features"
          element={
            <Layout>
              <Features />
            </Layout>
          }
        />
        <Route
          path="/certifications"
          element={
            <Layout>
              <Certifications />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
