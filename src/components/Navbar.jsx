import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar({ theme, onToggle }) {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-4 z-50 mx-auto flex w-[min(1120px,92%)] items-center justify-between rounded-full border border-muted bg-surface/80 px-6 py-3 shadow-liftLight backdrop-blur dark:shadow-lift"
    >
      <Link to="/" className="text-sm font-semibold uppercase tracking-[0.2em] text-subtle">
        Sudarshan Madewad
      </Link>
      <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="text-subtle transition hover:text-text">
            {item.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <a
          href="#contact"
          className="hidden rounded-full border border-accent/40 px-4 py-2 text-sm font-semibold text-accent transition hover:border-accent hover:bg-accent/10 md:inline-flex"
        >
          Lets Talk
        </a>
        <ThemeToggle theme={theme} onToggle={onToggle} />
      </div>
    </motion.header>
  );
}
