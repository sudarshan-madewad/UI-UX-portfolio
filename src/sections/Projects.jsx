import AnimatedSection from "../components/AnimatedSection.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="mx-auto w-[min(1120px,92%)] py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Case studies that highlight design thinking"
        description="Each case study details the challenge, the UX process, and the UI decisions that drive outcomes."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
}
