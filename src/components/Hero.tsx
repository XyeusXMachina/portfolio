"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import DitheredPortrait from "./DitheredPortrait";
import { profile, socials } from "@/data/site";
import { ArrowRightIcon, DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "./icons";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-14 px-6 py-[var(--space-section)] md:grid-cols-[1.2fr_1fr] md:items-center">
      <Reveal>
        <p className="eyebrow mb-8">AI / Computer Vision / Software Engineering</p>
        <p className="text-sm text-secondary">Hello, I&apos;m</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {profile.nameLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-4 text-lg font-medium text-accent">{profile.role}</p>
        <p className="mt-5 max-w-xl text-secondary">{profile.heroDescription}</p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/works"
            className="button button-primary"
          >
            View My Works <ArrowRightIcon />
          </Link>
          {socials.cvUrl !== "#" ? (
            <a href={socials.cvUrl} className="button button-secondary">Download CV <DownloadIcon /></a>
          ) : (
            <Link href="/contact" className="button button-secondary">Contact Me <MailIcon /></Link>
          )}
        </div>

        <div className="mt-8 flex items-center gap-4 text-secondary">
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
          {socials.email && (
            <a href={`mailto:${socials.email}`} aria-label="Email" className="transition-colors hover:text-accent">
              <MailIcon />
            </a>
          )}
        </div>
      </Reveal>

      <Reveal delay={0.1} className="relative mx-auto w-full max-w-[400px] md:ml-auto">
        <div aria-hidden="true" className="dither-texture absolute -right-3 -top-3 h-28 w-28 opacity-30" />
        <DitheredPortrait src="/images/portrait-photo.jpg" alt={`Portrait of ${profile.name}`} />
      </Reveal>
    </section>
  );
}
