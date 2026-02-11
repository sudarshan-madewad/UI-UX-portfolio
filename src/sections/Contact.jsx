import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.includes("@")) nextErrors.email = "Valid email is required";
    if (!form.message.trim()) nextErrors.message = "Message is required";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
      setTimeout(() => setSubmitted(false), 2500);
    }
  };

  return (
    <AnimatedSection id="contact" className="mx-auto w-[min(1120px,92%)] py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Lets build something memorable"
        description="Have a project in mind? Send a quick note and I will respond soon."
      />
      <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <form onSubmit={handleSubmit} className="rounded-3xl border border-muted bg-surface p-6">
          <div className="grid gap-5">
            <div>
              <label className="text-sm font-semibold">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-muted bg-base px-4 py-3 text-sm outline-none focus:border-accent"
                placeholder="Your name"
              />
              {errors.name ? <p className="mt-2 text-xs text-accent2">{errors.name}</p> : null}
            </div>
            <div>
              <label className="text-sm font-semibold">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-muted bg-base px-4 py-3 text-sm outline-none focus:border-accent"
                placeholder="you@email.com"
              />
              {errors.email ? <p className="mt-2 text-xs text-accent2">{errors.email}</p> : null}
            </div>
            <div>
              <label className="text-sm font-semibold">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="mt-2 w-full rounded-2xl border border-muted bg-base px-4 py-3 text-sm outline-none focus:border-accent"
                placeholder="Tell me about the project"
              />
              {errors.message ? <p className="mt-2 text-xs text-accent2">{errors.message}</p> : null}
            </div>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
              type="submit"
            >
              Send Message
            </motion.button>
            {submitted ? (
              <p className="rounded-2xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-accent">
                Thanks! Your message is ready for the next step.
              </p>
            ) : null}
          </div>
        </form>
        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-muted bg-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-subtle">Location</p>
            <p className="mt-3 text-lg font-semibold">Nanded, Maharashtra</p>
            <p className="mt-2 text-sm text-subtle">Available for freelance and internships</p>
          </div>
          <div className="rounded-3xl border border-muted bg-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-subtle">Email</p>
            <p className="mt-3 text-lg font-semibold">sudarshanmadewad1@gmail.com</p>
            <p className="mt-2 text-sm text-subtle">LinkedIn: sudarshan-madewad</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
