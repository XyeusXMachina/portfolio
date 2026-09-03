import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/site";
import Badge from "@/components/Badge";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Xyrus Vincent L. Dominguez`,
    description: project.description,
  };
}

const fields: { key: keyof (typeof projects)[number]["caseStudy"]; label: string }[] = [
  { key: "problem", label: "Problem" },
  { key: "motivation", label: "Motivation" },
  { key: "objective", label: "Objective" },
  { key: "architecture", label: "System Architecture" },
  { key: "methodology", label: "Methodology" },
  { key: "implementation", label: "Implementation" },
  { key: "results", label: "Results" },
  { key: "challenges", label: "Challenges" },
  { key: "contributions", label: "Contributions" },
  { key: "lessonsLearned", label: "Lessons Learned" },
  { key: "futureImprovements", label: "Future Improvements" },
];

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <Link href="/works" className="text-sm text-secondary hover:text-accent">
          &larr; Back to Works
        </Link>

        <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-accent">
          {project.category}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        {project.isPrototype && (
          <p className="mt-2 text-sm text-secondary">Prototype / research project</p>
        )}
        <p className="mt-4 max-w-2xl text-secondary">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="relative mt-10 aspect-[8/5] w-full overflow-hidden rounded-2xl border border-border bg-accent-soft">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      </Reveal>

      {project.recognition && (
        <Reveal delay={0.1}>
          <div className="mt-8 rounded-2xl border border-accent/40 bg-accent-soft p-6">
            <p className="text-sm font-semibold text-accent">Recognition</p>
            <ul className="mt-2 space-y-1 text-sm text-primary">
              {project.recognition.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      )}

      <Reveal delay={0.1}>
        <div className="mt-10">
          <h2 className="text-lg font-semibold">Highlights</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {project.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2 text-sm text-secondary">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="mt-12 space-y-8 border-t border-border pt-10">
        {fields.map(({ key, label }) => {
          const value = project.caseStudy[key];
          if (!value) return null;
          const isPlaceholder =
            typeof value === "string" && value.startsWith("Add ");
          return (
            <Reveal key={key}>
              <h2 className="text-lg font-semibold">{label}</h2>
              <p
                className={`mt-2 text-sm ${
                  isPlaceholder ? "italic text-secondary/70" : "text-secondary"
                }`}
              >
                {value as string}
              </p>
            </Reveal>
          );
        })}

        <Reveal>
          <h2 className="text-lg font-semibold">Technologies</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.caseStudy.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-14 border-t border-border pt-8">
        <Link href="/works" className="inline-flex items-center gap-1 text-sm font-medium text-accent">
          View all projects <ArrowRightIcon />
        </Link>
      </div>
    </article>
  );
}
