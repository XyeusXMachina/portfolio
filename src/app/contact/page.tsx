import type { Metadata } from "next";
import { socials } from "@/data/site";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact | Xyrus Vincent L. Dominguez",
  description: "Get in touch to connect and collaborate on intelligent systems and AI.",
};

const links = [
  {
    key: "email",
    label: "Email",
    value: socials.email,
    href: socials.email ? `mailto:${socials.email}` : undefined,
    icon: MailIcon,
  },
  {
    key: "github",
    label: "GitHub",
    value: socials.github !== "#" ? socials.github.replace(/^https?:\/\//, "") : undefined,
    href: socials.github !== "#" ? socials.github : undefined,
    icon: GithubIcon,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: socials.linkedin !== "#" ? socials.linkedin.replace(/^https?:\/\//, "") : undefined,
    href: socials.linkedin !== "#" ? socials.linkedin : undefined,
    icon: LinkedinIcon,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 text-center">
      <Reveal>
        <SectionHeading
          as="h1"
          align="center"
          eyebrow="Contact"
          title="Let's build something intelligent."
          description="Interested in research, intelligent systems, AI, computer vision, edge computing, or technical collaboration? Let's connect."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {links.map(({ key, label, value, href, icon: Icon }, i) => (
          <Reveal key={key} delay={i * 0.06}>
            <a
              href={href ?? undefined}
              target={key === "email" ? undefined : "_blank"}
              rel={key === "email" ? undefined : "noreferrer"}
              aria-disabled={!href}
              className={`flex h-full flex-col items-center gap-3 border-t border-border py-6 transition-colors ${
                href ? "hover:border-primary" : "text-secondary"
              }`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Icon />
              </span>
              <span className="text-sm font-medium">{label}</span>
              <span className="break-all text-xs text-secondary">
                {value ?? "Add later"}
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        {socials.cvUrl !== "#" ? (
          <a href={socials.cvUrl} className="button button-primary mt-10">Download CV <DownloadIcon /></a>
        ) : <p className="mt-10 text-sm text-secondary">CV link not yet provided.</p>}
      </Reveal>
    </div>
  );
}
