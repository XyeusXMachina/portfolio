import type { Metadata } from "next";
import { projects } from "@/data/site";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Works | Xyrus Vincent L. Dominguez",
  description:
    "Research, engineering, and development projects across intelligent systems, AI, computer vision, edge computing, and software.",
};

export default function WorksPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected Work"
          description="Research, engineering, and development projects across intelligent systems, AI, computer vision, edge computing, and software."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
