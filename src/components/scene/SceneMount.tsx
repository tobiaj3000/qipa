"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(
  () => import("@/components/scene/HeroScene").then((mod) => mod.HeroScene),
  { ssr: false },
);

const StageScene = dynamic(
  () => import("@/components/scene/HeroScene").then((mod) => mod.StageScene),
  { ssr: false },
);

export function HeroVisual() {
  return (
    <HeroScene className="pointer-events-none absolute inset-0 h-full w-full [&_canvas]:block [&_canvas]:h-full [&_canvas]:w-full" />
  );
}

export function StageVisual() {
  return (
    <StageScene className="pointer-events-none absolute inset-0 h-full w-full [&_canvas]:block [&_canvas]:h-full [&_canvas]:w-full" />
  );
}
