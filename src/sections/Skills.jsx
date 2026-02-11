import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const skills = [
  "UI/UX Design",
  "UX Design",
  "User Research",
  "Usability Testing",
  "Figma",
  "Framer",
  "HTML",
  "CSS",
  "Prototyping",
  "Wireframing",
  "Visual Design",
  "Typography",
  "User Interface Design",
  "User Experience Design",
  "Accessibility",
  "Project Management"
];

export default function Skills() {
  return (
    <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-20">
      <SectionHeading
        eyebrow="Skills"
        title="A toolkit built for product clarity"
        description="From research through delivery, each skill supports thoughtful, user-centered decisions."
      />
      <div className="mt-10 flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            className="rounded-full border border-muted bg-surface px-4 py-2 text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </AnimatedSection>
  );
}
