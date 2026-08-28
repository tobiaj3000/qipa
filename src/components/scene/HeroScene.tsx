"use client";

import { Suspense, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, Float, Grid, PerspectiveCamera, Sparkles } from "@react-three/drei";
import { ACESFilmicToneMapping, Fog, PerspectiveCamera as ThreePerspectiveCamera } from "three";
import { EnergyLink, HoloHuman, HoloRobot, ScanRing } from "./Figures";

function subscribeMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribeMotion, getMotionSnapshot, () => false);
}

function CameraRig({
  variant,
  reduced,
}: {
  variant: "hero" | "stage";
  reduced: boolean;
}) {
  const size = useThree((state) => state.size);
  const camRef = useRef<ThreePerspectiveCamera>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const start =
    variant === "hero" ? ([3.15, 1.28, 4.35] as const) : ([0.35, 1.15, 3.9] as const);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(() => {
    const cam = camRef.current;
    if (!cam) return;
    const mobile = size.width < 768;
    const hero = variant === "hero";
    const tx = hero ? (mobile ? 1.35 : 3.15) : mobile ? 0.15 : 0.35;
    const ty = hero ? (mobile ? 1.2 : 1.28) : 1.15;
    const tz = hero ? (mobile ? 5.6 : 4.35) : mobile ? 4.6 : 3.9;
    const lx = hero ? (mobile ? 1.25 : 1.6) : 0.15;
    const ly = 0.95;
    const parallax = reduced ? 0 : 0.28;
    cam.position.x += (tx + mouse.current.x * parallax - cam.position.x) * 0.06;
    cam.position.y += (ty + mouse.current.y * parallax * 0.4 - cam.position.y) * 0.06;
    cam.position.z += (tz - cam.position.z) * 0.06;
    cam.lookAt(lx, ly, 0);
  });

  return (
    <PerspectiveCamera
      ref={camRef}
      makeDefault
      fov={36}
      near={0.1}
      far={40}
      position={start}
    />
  );
}

function SceneContent({
  variant,
  reduced,
}: {
  variant: "hero" | "stage";
  reduced: boolean;
}) {
  const hero = variant === "hero";

  return (
    <>
      <color attach="background" args={["#05080f"]} />
      <fog attach="fog" args={["#05080f", hero ? 6.5 : 5.5, hero ? 16 : 12]} />
      <ambientLight intensity={0.22} />
      <directionalLight position={[4, 6, 3]} intensity={1.15} color="#dbe6ff" />
      <pointLight position={[1.6, 2.2, 1.4]} intensity={18} distance={8} color="#4f7cff" />
      <pointLight position={[2.6, 1.4, -1]} intensity={12} distance={7} color="#8e44ad" />
      <pointLight position={[0.6, 0.4, 1.2]} intensity={6} distance={5} color="#9b2848" />

      <Environment preset="night" environmentIntensity={0.35} />

      <HoloHuman
        position={hero ? [0.82, 0, 0.08] : [-0.7, 0, 0.05]}
        rotation={[0, hero ? 0.42 : 0.35, 0]}
        scale={1.08}
        clip="idle"
      />
      <HoloRobot
        position={hero ? [2.32, 0, 0.18] : [0.85, 0, 0.12]}
        rotation={[0, hero ? -0.55 : -0.4, 0]}
        scale={0.72}
        clip={hero ? "Idle" : "Wave"}
      />

      <ScanRing position={hero ? [0.82, 0, 0.08] : [-0.7, 0, 0.05]} />
      <ScanRing position={hero ? [2.32, 0, 0.18] : [0.85, 0, 0.12]} />
      {hero && <EnergyLink />}

      <Float
        speed={reduced ? 0 : 1.4}
        rotationIntensity={reduced ? 0 : 0.4}
        floatIntensity={reduced ? 0 : 0.5}
      >
        <mesh position={hero ? [1.55, 1.85, -0.4] : [0.1, 1.75, -0.35]}>
          <icosahedronGeometry args={[0.12, 0]} />
          <meshStandardMaterial
            color="#4f7cff"
            emissive="#4f7cff"
            emissiveIntensity={1.6}
            metalness={0.4}
            roughness={0.2}
          />
        </mesh>
      </Float>
      <Float
        speed={reduced ? 0 : 1.1}
        rotationIntensity={reduced ? 0 : 0.6}
        floatIntensity={reduced ? 0 : 0.7}
      >
        <mesh position={hero ? [2.85, 1.35, 0.7] : [1.35, 1.25, 0.55]}>
          <octahedronGeometry args={[0.09, 0]} />
          <meshStandardMaterial
            color="#8e44ad"
            emissive="#8e44ad"
            emissiveIntensity={1.4}
            metalness={0.35}
            roughness={0.25}
          />
        </mesh>
      </Float>

      <Grid
        infiniteGrid
        fadeDistance={14}
        fadeStrength={0.7}
        cellSize={0.35}
        sectionSize={1.75}
        cellColor="#152044"
        sectionColor="#4f7cff"
        sectionThickness={1.1}
        cellThickness={0.6}
        position={[0, 0.001, 0]}
      />
      <ContactShadows
        position={[0, 0.001, 0]}
        opacity={0.45}
        scale={12}
        blur={2.4}
        far={4}
        color="#02040a"
      />
      {!reduced && (
        <Sparkles
          count={48}
          scale={[8, 4, 6]}
          size={2.2}
          speed={0.35}
          color="#a5c9ff"
          opacity={0.55}
          position={[1.4, 1.2, 0]}
        />
      )}
      <CameraRig variant={variant} reduced={reduced} />
    </>
  );
}

function SceneCanvas({
  variant,
  className,
}: {
  variant: "hero" | "stage";
  className?: string;
}) {
  const host = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.04 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={host} className={className}>
      <Canvas
        shadows={false}
        dpr={[1, 1.6]}
        frameloop={inView && !reduced ? "always" : "demand"}
        gl={{ antialias: true, alpha: true }}
        camera={{
          position: variant === "hero" ? [3.15, 1.28, 4.35] : [0.35, 1.15, 3.9],
          fov: 36,
          near: 0.1,
          far: 40,
        }}
        onCreated={({ gl, scene }) => {
          gl.toneMapping = ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.05;
          scene.fog = new Fog("#05080f", 6, 16);
        }}
      >
        <Suspense fallback={null}>
          <SceneContent variant={variant} reduced={reduced} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export function HeroScene({ className }: { className?: string }) {
  return <SceneCanvas variant="hero" className={className} />;
}

export function StageScene({ className }: { className?: string }) {
  return <SceneCanvas variant="stage" className={className} />;
}
