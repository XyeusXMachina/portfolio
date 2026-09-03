import type { Metadata } from "next";
import {
  awards,
  certifications,
  education,
  experience,
  profile,
  recentLearning,
  researchInterests,
} from "@/data/site";
import Badge from "@/components/Badge";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Me | Xyrus Vincent L. Dominguez",
  description:
    "Background, research interests, experience, and what drives the work of Xyrus Vincent L. Dominguez.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <SectionHeading eyebrow="About Me" title="From intelligence to infrastructure" />
        <div className="mt-6 space-y-4 text-secondary">
          {profile.aboutParagraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Reveal>

      <section className="mt-16">
        <Reveal>
          <h2 className="text-xl font-semibold">Experience</h2>
        </Reveal>
        <div className="mt-6 space-y-6">
          {experience.map((job, i) => (
            <Reveal key={job.role} delay={i * 0.05}>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">{job.role}</h3>
                  <span className="text-sm text-secondary">{job.period}</span>
                </div>
                {(job.org || job.location) && (
                  <p className="mt-1 text-sm text-secondary">
                    {[job.org, job.location].filter(Boolean).join(" — ")}
                  </p>
                )}
                {"focusAreas" in job && job.focusAreas && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.focusAreas.map((f) => (
                      <Badge key={f}>{f}</Badge>
                    ))}
                  </div>
                )}
                {"responsibilities" in job && job.responsibilities && (
                  <ul className="mt-4 space-y-2">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-secondary">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {r}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <Reveal>
          <h2 className="text-xl font-semibold">Education</h2>
        </Reveal>
        <div className="mt-6 space-y-4">
          {education.map((ed, i) => (
            <Reveal key={ed.degree} delay={i * 0.05}>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">{ed.degree}</h3>
                  <span className="text-sm text-secondary">{ed.period}</span>
                </div>
                <p className="mt-1 text-sm text-secondary">{ed.school}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <Reveal>
          <h2 className="text-xl font-semibold">Awards</h2>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {awards.map((award, i) => (
            <Reveal key={award.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-accent/40 bg-accent-soft p-6">
                <h3 className="text-base font-semibold text-accent">{award.title}</h3>
                <p className="mt-2 text-sm text-primary">{award.description}</p>
                <p className="mt-2 text-xs text-secondary">{award.org}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <Reveal>
          <h2 className="text-xl font-semibold">Certifications & Learning</h2>
        </Reveal>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={(i % 2) * 0.05}>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold">{cert.title}</h3>
                  <span className="shrink-0 rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent">
                    Completed
                  </span>
                </div>
                <p className="mt-1 text-xs text-secondary">{cert.org}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-secondary">
              Recent cybersecurity / networking coursework
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {recentLearning.completed.map((c) => (
                <Badge key={c}>{c}</Badge>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-semibold text-secondary">In progress</h3>
            <div className="mt-3 space-y-2">
              {recentLearning.inProgress.map((c) => (
                <div
                  key={c.title}
                  className="flex flex-wrap items-center gap-3 rounded-xl border border-dashed border-border p-4"
                >
                  <span className="rounded-full bg-background px-2 py-0.5 text-[11px] font-medium text-secondary">
                    In Progress
                  </span>
                  <span className="text-sm font-medium">{c.title}</span>
                  <span className="text-xs text-secondary">{c.note}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mt-16">
        <Reveal>
          <h2 className="text-xl font-semibold">Research Interests</h2>
          <p className="mt-3 max-w-2xl text-secondary">{researchInterests.statement}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {researchInterests.items.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
