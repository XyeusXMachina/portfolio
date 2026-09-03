import Link from "next/link";
import { profile, skillGroups } from "@/data/site";
import Badge from "./Badge";
import Reveal from "./Reveal";
import { ArrowRightIcon } from "./icons";

export default function HomeAboutSplit() {
  const preview = skillGroups.slice(0, 4);

  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            About Me
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Researcher, engineer, builder
          </h2>
          <p className="mt-4 text-secondary">{profile.aboutParagraphs[0]}</p>
          <p className="mt-4 text-secondary">{profile.aboutParagraphs[1]}</p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent"
          >
            Read more about me <ArrowRightIcon />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Tech Stack
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Across the intelligent-systems stack
          </h2>
          <div className="mt-6 space-y-5">
            {preview.map((group) => (
              <div key={group.title}>
                <p className="text-sm font-medium">{group.title}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.skills.slice(0, 6).map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/skills"
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent"
          >
            Explore all skills <ArrowRightIcon />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
