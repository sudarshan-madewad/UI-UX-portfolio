import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx";
import Experience from "../sections/Experience.jsx";
import Skills from "../sections/Skills.jsx";
import Projects from "../sections/Projects.jsx";
import Contact from "../sections/Contact.jsx";

export default function Home({ theme, onToggle }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto flex w-[min(1120px,92%)] flex-col gap-10 pt-6">
        <Navbar theme={theme} onToggle={onToggle} />
        <Hero />
      </div>
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </motion.main>
  );
}
