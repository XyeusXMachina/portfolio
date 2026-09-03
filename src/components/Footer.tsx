import Link from "next/link";
import { socials } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-secondary sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {year} Xyrus Vincent L. Dominguez.</p>
        <div className="flex items-center gap-6">
          <Link href="/works" className="hover:text-accent">Works</Link>
          <Link href="/skills" className="hover:text-accent">Skills</Link>
          <Link href="/about" className="hover:text-accent">About</Link>
          <Link href="/contact" className="hover:text-accent">Contact</Link>
          {socials.github !== "#" && (
            <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-accent">
              GitHub
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
