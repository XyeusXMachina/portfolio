import Link from "next/link";
import { navCards } from "@/data/site";
import { BriefcaseIcon, CodeIcon, SendIcon, UserIcon, ArrowRightIcon } from "./icons";
import Reveal from "./Reveal";

const icons = {
  briefcase: BriefcaseIcon,
  code: CodeIcon,
  user: UserIcon,
  send: SendIcon,
};

export default function NavCards() {
  return (
    <section className="mx-auto max-w-6xl border-t border-border px-6 py-16">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {navCards.map((card, i) => {
          const Icon = icons[card.icon];
          return (
            <Reveal key={card.key} delay={i * 0.06}>
              <Link
                href={card.href}
                className="group flex h-full flex-col border-t border-border py-6 pr-5 transition-colors hover:border-primary"
              >
                <span className="flex h-10 w-10 items-center text-secondary">
                  <Icon />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm text-secondary">{card.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  {card.cta}
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
