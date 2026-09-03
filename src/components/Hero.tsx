"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { profile, socials } from "@/data/site";
import { ArrowRightIcon, DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "./icons";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:items-center md:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
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
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            View My Works <ArrowRightIcon />
          </Link>
          <a
            href={socials.cvUrl}
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Download CV <DownloadIcon />
          </a>
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
      </motion.div>

      <motion.div
        className="relative mx-auto w-full max-w-sm"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <div className="overflow-hidden rounded-3xl ring-1 ring-accent/40">
          <Image
            src="/images/portrait.svg"
            alt="Portrait of Xyrus Vincent L. Dominguez"
            width={480}
            height={560}
            unoptimized
            className="h-auto w-full"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
