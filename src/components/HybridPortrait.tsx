import { ParallaxArt } from "./ParallaxArt";

export function CreationHands({ className = "" }: { className?: string }) {
  return (
    <ParallaxArt
      src="/brand/qipa-creation-hands.png?v=3"
      alt="A robotic hand and an AI wireframe hand reaching toward each other"
      className={className}
      aspectClass="aspect-[16/9]"
      strength={0.85}
    />
  );
}
