import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-grid relative overflow-hidden rounded-[40px] border border-muted bg-surface px-6 py-16 md:px-12 md:py-20">
      <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.4em] text-subtle"
          >
            UI/UX Designer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-4xl font-semibold leading-tight md:text-5xl"
          >
            Sudarshan Madewad
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-lg text-subtle"
          >
            Designing intuitive, user-centered digital experiences
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-2px]"
            >
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1vP3G5ovlGXefid4s7rEHkUHZZoDuaubm/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-muted px-6 py-3 text-sm font-semibold text-subtle transition hover:border-accent hover:text-text"
            >
              Resume
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass relative h-56 w-full max-w-sm rounded-3xl border border-white/40 p-6 text-sm text-subtle shadow-liftLight"
        >
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-subtle">Based in</p>
              <p className="mt-3 text-lg font-semibold text-text">Navi Mumbai, Panvel</p>
            </div>
            <div className="text-sm">
              <p className="text-subtle">Open to collaboration</p>
              <p className="mt-2 text-text">sudarshanmadewad1@gmail.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
