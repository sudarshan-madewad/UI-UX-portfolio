import { useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";

const THEME_KEY = "sm_theme";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const setThemeClass = (theme) => {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
};

export default function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    setThemeClass(theme);
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = useMemo(() => {
    return () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <div className="min-h-screen bg-base text-text transition-colors duration-500">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home theme={theme} onToggle={toggleTheme} />} />
          <Route path="/projects/:slug" element={<ProjectPage theme={theme} onToggle={toggleTheme} />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
