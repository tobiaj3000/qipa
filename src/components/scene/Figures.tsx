"use client";

import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  Color,
  DoubleSide,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  Object3D,
} from "three";
import { clone as cloneSkinned } from "three/examples/jsm/utils/SkeletonUtils.js";

function stylize(root: Object3D, kind: "human" | "robot") {
  root.traverse((obj) => {
    const mesh = obj as Mesh;
    if (!mesh.isMesh) return;
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    if (kind === "human") {
      mesh.material = new MeshPhysicalMaterial({
        color: new Color("#c5d6ff"),
        emissive: new Color("#4f7cff"),
        emissiveIntensity: 0.38,
        metalness: 0.12,
        roughness: 0.16,
        transmission: 0.72,
        thickness: 0.55,
        ior: 1.18,
        transparent: true,
        opacity: 0.78,
        envMapIntensity: 1.4,
        side: DoubleSide,
      });
    } else {
      const name = (mesh.name || "").toLowerCase();
      const visor = /eye|head|face|visor|screen/.test(name);
      mesh.material = new MeshStandardMaterial({
        color: new Color(visor ? "#4f7cff" : "#0e1422"),
        emissive: new Color(visor ? "#a5c9ff" : "#4f7cff"),
        emissiveIntensity: visor ? 1.4 : 0.22,
        metalness: visor ? 0.35 : 0.92,
        roughness: visor ? 0.18 : 0.28,
      });
    }
  });
}

type FigureProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  clip?: string;
};

export function HoloHuman({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  clip = "idle",
}: FigureProps) {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF("/models/human.glb");
  const clone = useMemo(() => cloneSkinned(scene), [scene]);
  const { actions } = useAnimations(animations, group);

  useLayoutEffect(() => {
    stylize(clone, "human");
  }, [clone]);

  useEffect(() => {
    const action = actions[clip] ?? actions.idle;
    action?.reset().fadeIn(0.4).play();
    return () => {
      action?.fadeOut(0.25);
    };
  }, [actions, clip]);

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      <primitive object={clone} />
    </group>
  );
}

export function HoloRobot({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  clip = "Idle",
}: FigureProps) {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF("/models/robot.glb");
  const clone = useMemo(() => cloneSkinned(scene), [scene]);
  const { actions } = useAnimations(animations, group);

  useLayoutEffect(() => {
    stylize(clone, "robot");
  }, [clone]);

  useEffect(() => {
    const action = actions[clip] ?? actions.Idle;
    action?.reset().fadeIn(0.4).play();
    return () => {
      action?.fadeOut(0.25);
    };
  }, [actions, clip]);

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      <primitive object={clone} />
    </group>
  );
}

export function ScanRing({
  position = [0, 0, 0],
}: {
  position?: [number, number, number];
}) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = (state.clock.elapsedTime % 3.8) / 3.8;
    ref.current.position.y = 0.08 + t * 1.7;
    const mat = ref.current.material as MeshBasicMaterial;
    mat.opacity = 0.42 * Math.sin(t * Math.PI);
  });

  return (
    <mesh ref={ref} position={position} rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.18, 0.78, 64]} />
      <meshBasicMaterial
        color="#a5c9ff"
        transparent
        opacity={0.28}
        depthWrite={false}
      />
    </mesh>
  );
}

export function EnergyLink() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.7) * 0.08;
    ref.current.position.y = 1.05 + Math.sin(state.clock.elapsedTime * 1.4) * 0.05;
  });
  return (
    <mesh ref={ref} position={[1.55, 1.05, 0.12]} rotation={[0, 0, -0.12]}>
      <capsuleGeometry args={[0.018, 1.15, 6, 12]} />
      <meshBasicMaterial color="#4f7cff" transparent opacity={0.55} />
    </mesh>
  );
}

useGLTF.preload("/models/human.glb");
useGLTF.preload("/models/robot.glb");
