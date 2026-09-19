import Image from "next/image";

// Replace these placeholder paths in src/data/site.ts with real images.
// Expected aspect ratio: 8:5 (recommended minimum size: 800 x 500).
const placeholders = new Set([
  "/images/project-facial-palsy.svg", "/images/project-subay.svg",
  "/images/project-crop.svg", "/images/project-irrigation.svg",
  "/images/project-flood.svg", "/images/project-roomguardian.svg",
  "/images/project-software-systems.svg",
]);

export default function ProjectVisual({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative aspect-[8/5] w-full overflow-hidden border border-border bg-surface">
      {placeholders.has(src) ? (
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
          <div aria-hidden="true" className="dither-texture absolute inset-0 opacity-[0.08]" />
          <span className="eyebrow relative">Project / Image pending</span>
          <span aria-hidden="true" className="relative font-mono text-5xl font-light text-secondary">[ + ]</span>
          <span className="eyebrow relative">Add project image · 8:5</span>
          <span className="sr-only">Image placeholder for {title}</span>
        </div>
      ) : (
        <Image src={src} alt={`${title} project image`} fill sizes="(max-width: 639px) 90vw, (max-width: 1023px) 50vw, 800px" className="object-cover transition-transform duration-500 group-hover:scale-[1.02] group-focus-visible:scale-[1.02]" />
      )}
    </div>
  );
}
