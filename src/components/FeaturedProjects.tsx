import Link from "next/link";
import { projects } from "@/data/site";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ArrowRightIcon } from "./icons";

const featuredSlugs = [
  "subay",
  "facial-paralysis-screening",
  "crop-harvest-prediction",
  "roomguardian-nexus",
];

export default function FeaturedProjects() {
  const featured = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="mx-auto max-w-6xl border-t border-border px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected Work"
          description="Research, engineering, and development projects across intelligent systems, AI, computer vision, edge computing, and software."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {featured.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      <div className="mt-10">
        <Link href="/works" className="inline-flex items-center gap-1 text-sm font-medium text-accent">
          View all projects <ArrowRightIcon />
        </Link>
      </div>
    </section>
  );
}
