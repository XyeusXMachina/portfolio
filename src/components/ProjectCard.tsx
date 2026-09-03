import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/site";
import Badge from "./Badge";
import Reveal from "./Reveal";
import { ArrowRightIcon } from "./icons";

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Reveal delay={index * 0.06} className="h-full">
      <Link
        href={`/works/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-accent hover:shadow-sm"
      >
        <div className="relative aspect-[8/5] w-full overflow-hidden bg-accent-soft">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            unoptimized
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            {project.category}
          </p>
          <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm text-secondary">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 5).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent">
            View Case Study
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
