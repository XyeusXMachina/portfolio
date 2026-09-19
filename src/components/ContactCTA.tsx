import { socials } from "@/data/site";
import Reveal from "./Reveal";
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "./icons";

export default function ContactCTA() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s build something intelligent.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-secondary">
            Interested in research, intelligent systems, AI, computer vision, edge
            computing, or technical collaboration? Let&apos;s connect.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {socials.email && (
              <a
                href={`mailto:${socials.email}`}
                className="button button-primary max-w-full break-all"
              >
                <MailIcon className="h-4 w-4" /> {socials.email}
              </a>
            )}
            {socials.cvUrl !== "#" ? (
              <a href={socials.cvUrl} className="button button-secondary">Download CV <DownloadIcon /></a>
            ) : <span className="text-sm text-secondary">CV link not yet provided.</span>}
          </div>

          <div className="mt-6 flex items-center justify-center gap-4 text-secondary">
            {socials.github !== "#" && (
              <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-accent">
                <GithubIcon />
              </a>
            )}
            {socials.linkedin !== "#" && (
              <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-accent">
                <LinkedinIcon />
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
