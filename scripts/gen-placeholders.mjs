import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "images");

const projects = [
  { file: "project-facial-palsy.svg", title: "AI-Based Facial Paralysis Screening" },
  { file: "project-subay.svg", title: "SUBAY: Multi-Camera Detection System" },
  { file: "project-crop.svg", title: "Crop Harvest Prediction System" },
  { file: "project-irrigation.svg", title: "Precision Irrigation System" },
  { file: "project-flood.svg", title: "Flood Monitoring System" },
  { file: "project-roomguardian.svg", title: "RoomGuardian Nexus" },
  { file: "project-software-systems.svg", title: "Management & Monitoring Systems" },
];

function wrapText(text, maxChars) {
  const words = text.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function svgFor(title) {
  const lines = wrapText(title, 28);
  const lineHeight = 26;
  const startY = 270 - ((lines.length - 1) * lineHeight) / 2;
  const tspans = lines
    .map(
      (line, i) =>
        `<tspan x="400" dy="${i === 0 ? 0 : lineHeight}">${line}</tspan>`
    )
    .join("");

  return `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title} placeholder screenshot">
  <rect width="800" height="500" rx="16" fill="#EAF5EC"/>
  <rect x="4" y="4" width="792" height="492" rx="12" fill="none" stroke="#2F8F46" stroke-width="2" stroke-dasharray="10 8"/>
  <g opacity="0.5">
    <rect x="340" y="150" width="120" height="90" rx="8" fill="none" stroke="#2F8F46" stroke-width="3"/>
    <circle cx="400" cy="195" r="18" fill="none" stroke="#2F8F46" stroke-width="3"/>
    <path d="M340 240l30-30 20 20 40-45 30 55" fill="none" stroke="#2F8F46" stroke-width="3"/>
  </g>
  <text x="400" y="${startY}" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#151515">${tspans}</text>
  <text x="400" y="440" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" fill="#5F6368">Placeholder — replace with a real project screenshot</text>
</svg>
`;
}

for (const { file, title } of projects) {
  writeFileSync(join(outDir, file), svgFor(title), "utf8");
  console.log(`Wrote ${file}`);
}
