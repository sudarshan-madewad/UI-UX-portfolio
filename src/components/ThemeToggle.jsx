import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      className="relative flex h-10 w-16 items-center rounded-full border border-muted bg-base px-1 transition"
      aria-label="Toggle theme"
    >
      <motion.span
        className="absolute left-1 top-1 h-8 w-8 rounded-full bg-accent/20"
        animate={{ x: isDark ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      <span className="relative z-10 flex w-full items-center justify-between px-1 text-subtle">
        <Sun size={16} className={isDark ? "opacity-40" : "opacity-100"} />
        <Moon size={16} className={isDark ? "opacity-100" : "opacity-40"} />
      </span>
    </button>
  );
}
