import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-muted bg-surface p-6 shadow-liftLight transition hover:shadow-lift"
    >
      <div className="mb-6 flex items-center justify-between text-sm text-subtle">
        <span className="badge border-muted">{project.category}</span>
        <ArrowUpRight className="h-5 w-5 transition group-hover:rotate-12" />
      </div>
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-3 text-sm text-subtle">{project.overview}</p>
      <Link
        to={`/projects/${project.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
      >
        View Case Study
        <ArrowUpRight className="h-4 w-4" />
      </Link>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent2/10 opacity-0 transition group-hover:opacity-100" />
    </motion.div>
  );
}
