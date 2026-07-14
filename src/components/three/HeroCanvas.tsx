"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import HeroScene from "./HeroScene";

export default function HeroCanvas() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0.4, 6.2], fov: 42 }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
    </Canvas>
  );
}
