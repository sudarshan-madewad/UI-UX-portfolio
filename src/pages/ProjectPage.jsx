import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";
import { projects } from "../data/projects.js";

export default function ProjectPage({ theme, onToggle }) {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="mx-auto w-[min(1120px,92%)] py-20">
        <Navbar theme={theme} onToggle={onToggle} />
        <p className="mt-16 text-xl">Project not found.</p>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 text-accent">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pb-10"
    >
      <div className="mx-auto flex w-[min(1120px,92%)] flex-col gap-10 pt-6">
        <Navbar theme={theme} onToggle={onToggle} />
        <section className="rounded-[40px] border border-muted bg-surface px-6 py-14 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-subtle">Case Study</p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">{project.title}</h1>
          <p className="mt-4 max-w-2xl text-subtle">{project.overview}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="badge bg-base">{project.category}</span>
            <span className="badge bg-base">UI/UX</span>
            <span className="badge bg-base">Case Study</span>
          </div>
        </section>
      </div>

      <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-16">
        <h2 className="text-2xl font-semibold">Project Overview</h2>
        <p className="mt-4 text-subtle">{project.overview}</p>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-10">
        <h2 className="text-2xl font-semibold">Problem Statement</h2>
        <p className="mt-4 text-subtle">{project.problem}</p>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-10">
        <h2 className="text-2xl font-semibold">UX Process</h2>
        <ul className="mt-4 space-y-3 text-subtle">
          {project.process.map((step) => (
            <li key={step} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-10">
        <h2 className="text-2xl font-semibold">Wireframes</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="flex min-h-[220px] flex-col justify-between rounded-3xl border border-muted bg-surface p-6">
            <p className="text-sm text-subtle">{project.wireframes}</p>
            <span className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-subtle">
              Low Fidelity
            </span>
          </div>
          <div className="flex min-h-[220px] flex-col justify-between rounded-3xl border border-muted bg-surface p-6">
            <p className="text-sm text-subtle">
              Placeholder for wireframe visuals. Replace with final sketches or Figma exports.
            </p>
            <span className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-subtle">
              Concepts
            </span>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-10">
        <h2 className="text-2xl font-semibold">Final UI</h2>
        <p className="mt-4 text-subtle">{project.finalUI}</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="min-h-[180px] rounded-3xl border border-muted bg-gradient-to-br from-accent/10 via-transparent to-accent2/20 p-6"
            >
              <p className="text-sm text-subtle">UI Snapshot {index + 1}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-10">
        <h2 className="text-2xl font-semibold">Key Design Decisions</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {project.decisions.map((decision) => (
            <div key={decision} className="rounded-3xl border border-muted bg-surface p-5">
              <p className="text-sm text-subtle">{decision}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-10">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-5 py-2 text-sm font-semibold text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </AnimatedSection>

      <Footer />
    </motion.main>
  );
}
