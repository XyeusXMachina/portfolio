import { writeFileSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outFile = join(__dirname, "..", "public", "images", "portrait.svg");
const photoFile = join(__dirname, "..", "public", "images", "portrait-photo.jpg");

// Embedded as a data URI: an <image> inside an SVG shown via next/image's
// <img> tag is sandboxed by the browser and silently can't fetch external
// files, so the photo has to travel inside the SVG itself.
const photoDataUri = `data:image/jpeg;base64,${readFileSync(photoFile).toString("base64")}`;

const W = 900;
const H = 600;

// Organic radius function shared by every blob variant so they all read
// as the same landform, just nudged/offset relative to one another.
function organicRadius(theta, baseRadius) {
  return (
    baseRadius *
    (1 +
      0.11 * Math.cos(2 * theta + 0.6) +
      0.07 * Math.sin(3 * theta + 1.8) +
      0.04 * Math.cos(5 * theta + 0.3))
  );
}

function pointAt(cx, cy, theta, baseRadius, scale) {
  const r = organicRadius(theta, baseRadius) * scale;
  return { x: cx + r * Math.cos(theta), y: cy + r * Math.sin(theta) };
}

function mid(a, b) {
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
}

function closedBlobPath(cx, cy, baseRadius, scale, steps = 72) {
  const pts = [];
  for (let i = 0; i < steps; i++) {
    const theta = (i / steps) * Math.PI * 2;
    pts.push(pointAt(cx, cy, theta, baseRadius, scale));
  }
  let d = `M ${mid(pts[steps - 1], pts[0]).x.toFixed(2)},${mid(pts[steps - 1], pts[0]).y.toFixed(2)} `;
  for (let i = 0; i < steps; i++) {
    const next = pts[(i + 1) % steps];
    const m = mid(pts[i], next);
    d += `Q ${pts[i].x.toFixed(2)},${pts[i].y.toFixed(2)} ${m.x.toFixed(2)},${m.y.toFixed(2)} `;
  }
  return d + "Z";
}

function halftoneGrid(originX, originY, cols, rows, gap, r) {
  const circles = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      circles.push(
        `<circle cx="${(originX + col * gap).toFixed(1)}" cy="${(originY + row * gap).toFixed(1)}" r="${r}" />`
      );
    }
  }
  return circles.join("\n    ");
}

// Front blob: the visible, filled shape the photo is clipped into.
const frontCx = 424;
const frontCy = 300;
const baseRadius = 200;
const frontBlob = closedBlobPath(frontCx, frontCy, baseRadius, 1);

// Back blob: same landform, nudged up-right, stroke only — reads as a
// thin echo/outline peeking out from behind the photo for depth.
const backBlob = closedBlobPath(frontCx + 16, frontCy - 12, baseRadius, 1.01);

const dotsTopRight = halftoneGrid(660, 60, 5, 6, 16, 1.8);
const dotsBottomLeft = halftoneGrid(60, 430, 5, 6, 16, 1.8);

// Photo sized/positioned to "cover" the blob's bounding box so the face
// lands roughly centered within it once clipped.
const photoSize = baseRadius * 2.35;
const photoX = frontCx - photoSize / 2;
const photoY = frontCy - photoSize / 2 - 20;

const svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Portrait of Xyrus Vincent L. Dominguez in an abstract editorial composition">
  <defs>
    <clipPath id="blobClip" clipPathUnits="userSpaceOnUse">
      <path d="${frontBlob}" />
    </clipPath>
  </defs>

  <rect width="${W}" height="${H}" fill="#FAF7F2" />

  <g fill="#8C887E" opacity="0.45">
    ${dotsTopRight}
  </g>
  <g fill="#8C887E" opacity="0.4">
    ${dotsBottomLeft}
  </g>

  <path d="${backBlob}" fill="none" stroke="#DCD8CE" stroke-width="1.5" />

  <path d="${frontBlob}" fill="#EFEBE3" />

  <g clip-path="url(#blobClip)">
    <image
      href="${photoDataUri}"
      x="${photoX}"
      y="${photoY}"
      width="${photoSize}"
      height="${photoSize}"
      preserveAspectRatio="xMidYMid slice"
    />
  </g>

  <circle cx="${frontCx + 178}" cy="${frontCy - 152}" r="8" fill="#5B7A63" opacity="0.85" />

  <path d="M ${frontCx + 46} ${frontCy + 178}
           C ${frontCx + 82} ${frontCy + 190}, ${frontCx + 116} ${frontCy + 186}, ${frontCx + 146} ${frontCy + 164}"
        fill="none" stroke="#5B7A63" stroke-width="2" opacity="0.8" stroke-linecap="round" />
</svg>
`;

writeFileSync(outFile, svg, "utf8");
console.log(`Wrote ${outFile}`);
