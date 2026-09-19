export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center border-b border-border px-1 py-1 font-mono text-[11px] text-secondary">
      {children}
    </span>
  );
}
