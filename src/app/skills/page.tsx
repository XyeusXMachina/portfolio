import type { Metadata } from "next";
import { skillGroups } from "@/data/site";
import Badge from "@/components/Badge";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Skills | Xyrus Vincent L. Dominguez",
  description:
    "Research, development, engineering, and systems skills across the intelligent systems stack.",
};

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Across the intelligent systems stack"
          description="A combination of research, development, engineering, and systems skills grouped by domain rather than a single wall of logos."
        />
      </Reveal>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 2) * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-base font-semibold">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
