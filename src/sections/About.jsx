import AnimatedSection from "../components/AnimatedSection.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const highlights = [
  "UX Design",
  "User Research",
  "Usability Testing",
  "Wireframing",
  "Prototyping"
];

export default function About() {
  return (
    <AnimatedSection id="about" className="mx-auto w-[min(1120px,92%)] py-20">
      <SectionHeading
        eyebrow="About"
        title="Designing with curiosity, empathy, and structure"
        description="I craft digital experiences that feel calm, intentional, and human. My approach blends research, usability testing, and iterative prototyping to bring clarity to complex workflows and create interfaces that teams can confidently build and users can trust."
      />
      <div className="mt-10 flex flex-wrap gap-3">
        {highlights.map((item) => (
          <span key={item} className="badge bg-surface">
            {item}
          </span>
        ))}
      </div>
    </AnimatedSection>
  );
}
