import { motion } from "framer-motion";
import { ArrowLeft, LayoutGrid, MonitorSmartphone, ShieldCheck, Target } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";
import { projects } from "../data/projects.js";
import heroImage from "../../imgs/hero.png";
import programsImage from "../../imgs/programs.png";
import alumniImage from "../../imgs/alumni stories.png";
import campusImage from "../../imgs/campus tour.png";

export default function ProjectPage({ theme, onToggle }) {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const isManipal = project?.slug === "manipal-university-landing-page";
  const prototypeLink =
    "https://www.figma.com/design/T2ZOiIPA7BWsbw0OjHL83A/Manipal?node-id=62-1365&t=LNTLifUd47Ik3ry8-1";
  const designGoals = [
    { title: "Establish Strong Visual Hierarchy", icon: LayoutGrid },
    { title: "Improve Program Discoverability", icon: Target },
    { title: "Strengthen Trust Signals", icon: ShieldCheck },
    { title: "Optimize Admissions Conversion", icon: MonitorSmartphone }
  ];
  const uxImprovements = [
    { problem: "Content Overload", solution: "Chunked structure" },
    { problem: "Weak CTA visibility", solution: "Accent CTA system" },
    { problem: "Visual heaviness", solution: "Clean layout + whitespace" },
    { problem: "Trust weak", solution: "Stats + alumni elevated" },
    { problem: "Poor mobile stacking", solution: "Structured responsive grid" }
  ];
  const expectedImpact = [
    "Increase admissions CTA visibility",
    "Improve engagement",
    "Reduce bounce rate",
    "Improve mobile usability",
    "Strengthen credibility"
  ];

  if (!project) {
    return (
      <div className="mx-auto w-[min(1120px,92%)] py-20">
        <Navbar theme={theme} onToggle={onToggle} />
        <p className="mt-16 text-xl">Project not found.</p>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 text-accent">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pb-10"
    >
      <div className="mx-auto flex w-[min(1120px,92%)] flex-col gap-10 pt-6">
        <Navbar theme={theme} onToggle={onToggle} />
        {isManipal ? (
          <Link
            to="/#projects"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 px-5 py-2 text-sm font-semibold text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        ) : null}
        <section className="rounded-[40px] border border-muted bg-surface px-6 py-14 md:px-10">
          {isManipal ? (
            <>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-subtle">
                {project.title}
              </p>
              <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
                Case Study - From Information Overload to Structured Clarity
              </h1>
              <p className="mt-4 max-w-2xl text-subtle">{project.overview}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="badge bg-base">{project.category}</span>
                <span className="badge bg-base">UI/UX</span>
                <span className="badge bg-base">Case Study</span>
              </div>
              <div className="mt-5">
                <a
                  href={prototypeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-accent transition hover:underline"
                >
                  Project Link
                </a>
              </div>
            </>
          ) : (
            <>
              <h1 className="mt-4 text-4xl font-semibold md:text-5xl">{project.title}</h1>
              <p className="mt-4 max-w-2xl text-subtle">{project.overview}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="badge bg-base">{project.category}</span>
                <span className="badge bg-base">UI/UX</span>
                <span className="badge bg-base">Case Study</span>
              </div>
            </>
          )}
        </section>
      </div>

      {isManipal ? (
        <>
          <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-12">
            <div className="rounded-[36px] border border-muted bg-surface p-8 md:p-10">
              <h2 className="text-2xl font-semibold">Project Overview</h2>
              <p className="mt-4 text-subtle">
                Manipal University is a globally recognized institution offering 370+ programs across 36+
                disciplines. However, the existing website struggled to present this scale effectively.
              </p>
              <p className="mt-4 text-subtle">
                The goal of this redesign was to transform a content-heavy, visually dense experience into a
                modern, structured, responsive, and conversion-focused digital platform.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-muted bg-base p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-subtle">Role</p>
                  <p className="mt-2 text-sm">UI/UX Designer</p>
                </div>
                <div className="rounded-2xl border border-muted bg-base p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-subtle">Duration</p>
                  <p className="mt-2 text-sm">4-6 Weeks</p>
                </div>
                <div className="rounded-2xl border border-muted bg-base p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-subtle">Scope</p>
                  <p className="mt-2 text-sm">Desktop & Mobile Redesign</p>
                </div>
                <div className="rounded-2xl border border-muted bg-base p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-subtle">Tools</p>
                  <p className="mt-2 text-sm">Figma</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-12">
            <div className="rounded-[36px] border border-muted bg-base p-8 md:p-10">
              <h2 className="text-2xl font-semibold">Understanding the Existing Website (Audit)</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-muted bg-surface p-6">
                  <h3 className="text-base font-semibold text-text">Weak Visual Hierarchy</h3>
                  <ul className="mt-3 space-y-2 text-sm text-subtle">
                    <li>Sections blended visually</li>
                    <li>Dark blocks created cognitive load</li>
                    <li>Headlines lacked contrast</li>
                    <li>CTAs did not stand out</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-muted bg-surface p-6">
                  <h3 className="text-base font-semibold text-text">Information Overload</h3>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-subtle">
                    {[
                      "Programs",
                      "Research",
                      "Collaborations",
                      "News",
                      "Events",
                      "Alumni",
                      "Admissions"
                    ].map((item) => (
                      <span key={item} className="rounded-full border border-muted bg-base px-3 py-1">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-3xl border border-muted bg-surface p-6">
                  <h3 className="text-base font-semibold text-text">Poor Content Chunking</h3>
                  <ul className="mt-3 space-y-2 text-sm text-subtle">
                    <li>Powerful statements visually disconnected</li>
                    <li>Mixed text & images without CTA clarity</li>
                    <li>Alumni lacked storytelling structure</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-muted bg-surface p-6">
                  <h3 className="text-base font-semibold text-text">Weak Conversion Focus</h3>
                  <ul className="mt-3 space-y-2 text-sm text-subtle">
                    <li>Admissions CTA inconsistent</li>
                    <li>No clear admissions funnel</li>
                    <li>Conversion under-optimized</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-muted bg-surface p-6 md:col-span-2">
                  <h3 className="text-base font-semibold text-text">Mobile Experience Gaps</h3>
                  <ul className="mt-3 grid gap-2 text-sm text-subtle md:grid-cols-2">
                    <li>Multi-column collapse issues</li>
                    <li>Thumb reach problems</li>
                    <li>Poor stacking rhythm</li>
                    <li>Desktop-first design</li>
                  </ul>
                </div>
              </div>
              <figure className="mt-8">
                <img
                  src={heroImage}
                  alt="Manipal University current hero section"
                  className="w-full rounded-3xl border border-muted object-cover"
                />
                <figcaption className="mt-3 text-xs text-subtle">
                  Current hero experience highlighting density and hierarchy gaps.
                </figcaption>
              </figure>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-12">
            <div className="rounded-[36px] border border-muted bg-surface p-8 md:p-10">
              <h2 className="text-2xl font-semibold">Problem Statement</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-muted bg-base p-6">
                  <h3 className="text-base font-semibold text-text">The existing website suffered from:</h3>
                  <ul className="mt-3 space-y-2 text-sm text-subtle">
                    <li>Overwhelming information density</li>
                    <li>Weak visual hierarchy</li>
                    <li>Lack of structured prioritization</li>
                    <li>Underemphasized admissions CTA</li>
                    <li>Inconsistent responsiveness</li>
                    <li>Limited emotional engagement</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-muted bg-base p-6">
                  <h3 className="text-base font-semibold text-text">As a result:</h3>
                  <ul className="mt-3 space-y-2 text-sm text-subtle">
                    <li>Users struggled to find programs</li>
                    <li>Parents lacked clarity</li>
                    <li>Admissions flow lacked urgency</li>
                    <li>Mobile users experienced friction</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-sm font-semibold text-subtle">
                Redesign needed to be: Clear. Structured. Trust-building. Conversion-driven. Fully responsive.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-12">
            <div className="rounded-[36px] border border-muted bg-base p-8 md:p-10">
              <h2 className="text-2xl font-semibold">Design Goals</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {designGoals.map((goal) => {
                  const Icon = goal.icon;
                  return (
                    <div key={goal.title} className="rounded-3xl border border-muted bg-surface p-6">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 text-accent">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="text-base font-semibold text-text">{goal.title}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-12">
            <div className="rounded-[36px] border border-muted bg-surface p-8 md:p-10">
              <h2 className="text-2xl font-semibold">Redesign Strategy</h2>
              <div className="mt-6 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
                <div className="space-y-5 text-sm text-subtle">
                  <div>
                    <h3 className="text-base font-semibold text-text">1. Structured Section Flow</h3>
                    <p className="mt-2">
                      Hero → Programs → Trust → Placements → Campus Life → Admissions → Alumni → Research →
                      Final CTA
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text">2. Visual Simplification</h3>
                    <p className="mt-2">Light beige backgrounds, clean cards, spacing rhythm, reduced load.</p>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text">3. CTA Repositioning</h3>
                    <p className="mt-2">Primary CTA in hero, repeated strategically, accent orange, clear language.</p>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text">4. Trust Amplification</h3>
                    <p className="mt-2">Placement logos structured, stats emphasized, alumni social proof.</p>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text">5. Responsive Restructuring</h3>
                    <p className="mt-2">
                      12-column desktop, 4-column mobile, stacked cards, full-width buttons, 44px tap targets.
                    </p>
                  </div>
                </div>
                <figure className="rounded-3xl border border-muted bg-base p-3">
                  <img
                    src={programsImage}
                    alt="Programs section layout"
                    className="w-full rounded-2xl object-cover"
                  />
                  <figcaption className="mt-3 text-xs text-subtle">
                    Programs section designed to improve discoverability.
                  </figcaption>
                </figure>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-12">
            <div className="rounded-[36px] border border-muted bg-base p-8 md:p-10">
              <h2 className="text-2xl font-semibold">Key UX Improvements</h2>
              <div className="mt-6 overflow-hidden rounded-3xl border border-muted">
                <div className="grid grid-cols-1 border-b border-muted bg-surface px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-subtle md:grid-cols-2">
                  <span>Problem</span>
                  <span>Solution</span>
                </div>
                {uxImprovements.map((item, index) => (
                  <div
                    key={item.problem}
                    className={`grid grid-cols-1 gap-2 px-5 py-4 text-sm text-subtle md:grid-cols-2 ${
                      index < uxImprovements.length - 1 ? "border-b border-muted" : ""
                    }`}
                  >
                    <span className="font-semibold text-text">{item.problem}</span>
                    <span>{item.solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-12">
            <div className="rounded-[36px] border border-muted bg-surface p-8 md:p-10">
              <h2 className="text-2xl font-semibold">Design System Highlights</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-muted bg-base p-6">
                  <h3 className="text-base font-semibold text-text">Color Strategy</h3>
                  <ul className="mt-3 space-y-2 text-sm text-subtle">
                    <li>Primary Navy → Trust</li>
                    <li>Accent Orange → Action</li>
                    <li>Soft Beige → Comfort</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-muted bg-base p-6">
                  <h3 className="text-base font-semibold text-text">Typography</h3>
                  <ul className="mt-3 space-y-2 text-sm text-subtle">
                    <li>Poppins → Headings</li>
                    <li>Inter → Body</li>
                    <li>Improved scanning via typographic scale</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-12">
            <div className="rounded-[36px] border border-muted bg-base p-8 md:p-10">
              <h2 className="text-2xl font-semibold">Expected Impact</h2>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {expectedImpact.map((item) => (
                  <div key={item} className="rounded-2xl border border-muted bg-surface px-4 py-3 text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-12">
            <div className="rounded-[36px] border border-muted bg-surface p-8 md:p-10">
              <h2 className="text-2xl font-semibold">Visual Sections</h2>
              <figure className="mt-6 rounded-3xl border border-muted bg-base p-3">
                <img
                  src={campusImage}
                  alt="Campus life grid"
                  className="w-full rounded-2xl object-cover"
                />
                <figcaption className="mt-3 text-xs text-subtle">
                  Campus life grid structured for rhythm and storytelling.
                </figcaption>
              </figure>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-12">
            <div className="rounded-[36px] border border-muted bg-base p-8 md:p-10">
              <h2 className="text-2xl font-semibold">Before vs After Positioning</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-muted bg-surface p-6">
                  <h3 className="text-base font-semibold text-text">Old Website</h3>
                  <p className="mt-3 text-sm text-subtle">Information-rich but overwhelming.</p>
                </div>
                <div className="rounded-3xl border border-muted bg-surface p-6">
                  <h3 className="text-base font-semibold text-text">Redesigned Website</h3>
                  <p className="mt-3 text-sm text-subtle">
                    Structured, conversion-focused, emotionally engaging, responsive.
                  </p>
                </div>
              </div>
              <figure className="mt-8 rounded-3xl border border-muted bg-surface p-3">
                <img
                  src={alumniImage}
                  alt="Alumni stories section"
                  className="w-full rounded-2xl object-cover"
                />
                <figcaption className="mt-3 text-xs text-subtle">
                  Alumni storytelling used as social proof to build trust.
                </figcaption>
              </figure>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-12">
            <div className="rounded-[36px] border border-muted bg-surface p-8 md:p-10">
              <h2 className="text-2xl font-semibold">Key Learning</h2>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {[
                  "Clarity > Volume",
                  "Hierarchy > Decoration",
                  "Structure > Density",
                  "Mobile-first thinking is essential"
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-muted bg-base px-4 py-3 text-sm">
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-subtle">
                A university website is not just informational. It is a decision-making platform.
              </p>
            </div>
          </AnimatedSection>
        </>
      ) : (
        <>
          <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-16">
            <h2 className="text-2xl font-semibold">Project Overview</h2>
            <p className="mt-4 text-subtle">{project.overview}</p>
          </AnimatedSection>

          <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-10">
            <h2 className="text-2xl font-semibold">Problem Statement</h2>
            <p className="mt-4 text-subtle">{project.problem}</p>
          </AnimatedSection>

          <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-10">
            <h2 className="text-2xl font-semibold">UX Process</h2>
            <ul className="mt-4 space-y-3 text-subtle">
              {project.process.map((step) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-10">
            <h2 className="text-2xl font-semibold">Wireframes</h2>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div className="flex min-h-[220px] flex-col justify-between rounded-3xl border border-muted bg-surface p-6">
                <p className="text-sm text-subtle">{project.wireframes}</p>
                <span className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-subtle">
                  Low Fidelity
                </span>
              </div>
              <div className="flex min-h-[220px] flex-col justify-between rounded-3xl border border-muted bg-surface p-6">
                <p className="text-sm text-subtle">
                  Placeholder for wireframe visuals. Replace with final sketches or Figma exports.
                </p>
                <span className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-subtle">
                  Concepts
                </span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-10">
            <h2 className="text-2xl font-semibold">Final UI</h2>
            <p className="mt-4 text-subtle">{project.finalUI}</p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="min-h-[180px] rounded-3xl border border-muted bg-gradient-to-br from-accent/10 via-transparent to-accent2/20 p-6"
                >
                  <p className="text-sm text-subtle">UI Snapshot {index + 1}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-10">
            <h2 className="text-2xl font-semibold">Key Design Decisions</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {project.decisions.map((decision) => (
                <div key={decision} className="rounded-3xl border border-muted bg-surface p-5">
                  <p className="text-sm text-subtle">{decision}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </>
      )}

      <AnimatedSection className="mx-auto w-[min(1120px,92%)] py-10">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-5 py-2 text-sm font-semibold text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </AnimatedSection>

      <Footer />
    </motion.main>
  );
}
