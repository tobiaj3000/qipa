"use client";

import { useEffect, useRef, type MouseEvent } from "react";

type ParallaxArtProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  aspectClass?: string;
  strength?: number;
};

export function ParallaxArt({
  src,
  alt,
  className = "",
  imgClassName = "object-contain object-center",
  priority = false,
  aspectClass = "aspect-[3/4]",
  strength = 1,
}: ParallaxArtProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let frame = 0;
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.1;
      current.current.y += (target.current.y - current.current.y) * 0.1;
      if (layer.current) {
        const x = current.current.x * strength;
        const y = current.current.y * strength;
        layer.current.style.transform = `rotateY(${x * 16}deg) rotateX(${-y * 12}deg) translate3d(${x * 32}px, ${y * 24}px, 48px)`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [strength]);

  function onMove(event: MouseEvent<HTMLDivElement>) {
    const box = wrap.current?.getBoundingClientRect();
    if (!box) return;
    target.current.x = ((event.clientX - box.left) / box.width - 0.5) * 2;
    target.current.y = ((event.clientY - box.top) / box.height - 0.5) * 2;
  }

  function onLeave() {
    target.current.x = 0;
    target.current.y = 0;
  }

  return (
    <div
      ref={wrap}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative bg-transparent ${className}`}
      style={{ perspective: "1100px" }}
    >
      <div
        ref={layer}
        className={`relative ${aspectClass} w-full bg-transparent will-change-transform`}
        style={{
          transformStyle: "preserve-3d",
          filter:
            "drop-shadow(0 18px 40px rgba(79, 124, 255, 0.28)) drop-shadow(0 0 28px rgba(165, 201, 255, 0.18))",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          draggable={false}
          fetchPriority={priority ? "high" : "auto"}
          className={`pointer-events-none h-full w-full bg-transparent ${imgClassName}`}
        />
      </div>
    </div>
  );
}
