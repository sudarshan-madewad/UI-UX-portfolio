import { motion } from "framer-motion";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const experiences = [
  {
    company: "PlaytPlus Technologies",
    role: "UI/UX Intern",
    duration: "Sep 2025 – Present",
    location: "Navi Mumbai, CBD Belapur",
    responsibilities: [
      "Designed clean and responsive interfaces for web and mobile platforms.",
      "Improved user experience through intuitive layouts and visual consistency.",
      "Collaborated closely with developers to ensure accurate design implementation.",
      "Applied UX principles to enhance accessibility and usability."
    ]
  },
  {
    company: "Internpe",
    role: "Web Developer Intern",
    duration: "Sep 2023 – Oct 2023",
    location: "Remote",
    responsibilities: [
      "Completed multiple projects by managing requirements and timelines effectively.",
      "Built a responsive personal portfolio website with modern UI.",
      "Developed a calculator and to-do list app with intuitive user flow."
    ]
  }
];

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="mx-auto w-[min(1120px,92%)] py-20">
      <SectionHeading
        eyebrow="Experience"
        title="Building design credibility through hands-on collaboration"
        description="Recent roles where I translated UX strategy into production-ready experiences."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {experiences.map((item, index) => (
          <motion.div
            key={item.company}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-muted bg-surface p-6 shadow-liftLight"
          >
            <div className="flex items-center justify-between text-sm text-subtle">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>{item.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <span>{item.duration}</span>
              </div>
            </div>
            <h3 className="mt-4 text-xl font-semibold">{item.company}</h3>
            <div className="mt-2 flex items-center gap-2 text-sm text-subtle">
              <MapPin className="h-4 w-4" />
              <span>{item.location}</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-subtle">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
            {index === 0 ? (
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/40 px-4 py-2 text-xs font-semibold text-accent">
                Current Role
              </div>
            ) : null}
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
