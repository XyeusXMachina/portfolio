"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const cache = new Map<string, Promise<string>>();
const bayer = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];

function createMask(src: string): Promise<string> {
  const existing = cache.get(src);
  if (existing) return existing;
  const result = new Promise<string>((resolve, reject) => {
    const image = new window.Image();
    image.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = 400;
        canvas.height = 500;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) throw new Error("Canvas unavailable");
        // Match the 4:5 object-cover crop without distorting the original portrait.
        const scale = Math.max(400 / image.width, 500 / image.height);
        ctx.drawImage(image, (400 - image.width * scale) / 2, (500 - image.height * scale) / 2, image.width * scale, image.height * scale);
        const pixels = ctx.getImageData(0, 0, 400, 500);
        for (let y = 0; y < 500; y++) {
          for (let x = 0; x < 400; x++) {
            const offset = (y * 400 + x) * 4;
            const luminance = (pixels.data[offset] * .2126 + pixels.data[offset + 1] * .7152 + pixels.data[offset + 2] * .0722) / 255;
            const threshold = (bayer[(y % 4) * 4 + x % 4] + .5) / 16;
            pixels.data[offset + 3] = luminance < threshold ? 255 : 0;
          }
        }
        ctx.putImageData(pixels, 0, 0);
        resolve(canvas.toDataURL("image/png"));
      } catch (error) { reject(error); }
    };
    image.onerror = () => reject(new Error("Portrait unavailable"));
    image.src = src;
  });
  cache.set(src, result);
  void result.catch(() => cache.delete(src));
  return result;
}

export default function DitheredPortrait({ src, alt }: { src: string; alt: string }) {
  const [mask, setMask] = useState<{ src: string; url: string } | null>(null);
  const [original, setOriginal] = useState(false);
  useEffect(() => {
    let active = true;
    if (!CSS.supports("mask-image", 'url("x")')) return;
    createMask(src).then((url) => { if (active) setMask({ src, url }); }).catch(() => {});
    return () => { active = false; };
  }, [src]);
  const ready = mask?.src === src;
  return (
    <figure>
      <div className="portrait-frame">
        <Image src={src} alt={alt} fill preload sizes="(max-width: 767px) 90vw, 400px" />
        {ready && !original && (
          <div className="portrait-dither" aria-hidden="true">
            <div className="portrait-ink" style={{ maskImage: `url(${mask.url})` }} />
          </div>
        )}
      </div>
      <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-secondary">
        <span>Portrait / {ready && !original ? "01-bit" : "Original"}</span>
        {ready && <button type="button" aria-pressed={original} onClick={() => setOriginal(!original)} className="min-h-11 underline underline-offset-4 hover:text-primary">{original ? "Show dithered" : "Show original"}</button>}
      </figcaption>
    </figure>
  );
}
