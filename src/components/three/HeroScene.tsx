"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { createBlueprintTexture } from "./blueprintTexture";

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const remap = (v: number, a: number, b: number) => clamp01((v - a) / (b - a));
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const easeOutBack = (t: number) => {
  const c1 = 1.4;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

function HouseWireframe({ progress }: { progress: React.MutableRefObject<number> }) {
  const wallsRef = useRef<THREE.LineSegments>(null);
  const roofRef = useRef<THREE.LineSegments>(null);
  const floorRef = useRef<THREE.Mesh>(null);

  const wallsGeo = useMemo(() => {
    const box = new THREE.BoxGeometry(2.2, 1.3, 1.7);
    return new THREE.EdgesGeometry(box);
  }, []);

  const roofGeo = useMemo(() => {
    const cone = new THREE.ConeGeometry(1.65, 0.95, 4);
    return new THREE.EdgesGeometry(cone);
  }, []);

  useFrame(() => {
    const p = progress.current;

    const floorP = easeOutCubic(remap(p, 0, 0.22));
    if (floorRef.current) {
      floorRef.current.scale.setScalar(0.001 + floorP * 0.999);
      (floorRef.current.material as THREE.Material).opacity = floorP * 0.5;
    }

    const wallsP = easeOutCubic(remap(p, 0.15, 0.55));
    if (wallsRef.current) {
      wallsRef.current.scale.y = 0.001 + wallsP * 0.999;
      wallsRef.current.position.y = -0.65 * (1 - wallsP) + 0.02;
      (wallsRef.current.material as THREE.Material).opacity = wallsP;
    }

    const roofP = easeOutBack(remap(p, 0.5, 0.85));
    if (roofRef.current) {
      const s = clamp01(roofP);
      roofRef.current.scale.setScalar(Math.max(0.001, s));
      roofRef.current.position.y = 1.13 + (1 - clamp01(remap(p, 0.5, 0.85))) * 0.6;
      (roofRef.current.material as THREE.Material).opacity = clamp01(remap(p, 0.5, 0.7));
    }
  });

  return (
    <group>
      <mesh ref={floorRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.66, 0]}>
        <planeGeometry args={[2.6, 2.1]} />
        <meshBasicMaterial color="#d8bc8b" transparent opacity={0} wireframe />
      </mesh>
      <lineSegments ref={wallsRef} geometry={wallsGeo} position={[0, 0.02, 0]}>
        <lineBasicMaterial color="#f3ead9" transparent opacity={0} />
      </lineSegments>
      <lineSegments ref={roofRef} geometry={roofGeo} position={[0, 1.13, 0]} rotation={[0, Math.PI / 4, 0]}>
        <lineBasicMaterial color="#d6be96" transparent opacity={0} />
      </lineSegments>
    </group>
  );
}

function BlueprintPanel({
  position,
  rotation,
  scale = 1,
  seed,
  delay,
  progress,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: number;
  seed: number;
  delay: number;
  progress: React.MutableRefObject<number>;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const texture = useMemo(() => createBlueprintTexture(seed), [seed]);
  const base = useMemo(() => new THREE.Vector3(...position), [position]);

  useFrame(({ clock }) => {
    const p = easeOutCubic(remap(progress.current, delay, delay + 0.3));
    if (!ref.current) return;
    ref.current.scale.setScalar(scale * p);
    (ref.current.material as THREE.MeshBasicMaterial).opacity = p * 0.9;

    const t = clock.elapsedTime;
    ref.current.position.x = base.x + Math.sin(t * 0.25 + seed) * 0.12;
    ref.current.position.y = base.y + Math.cos(t * 0.2 + seed) * 0.1 + (1 - p) * -0.3;
    ref.current.position.z = base.z + Math.sin(t * 0.18 + seed * 1.3) * 0.1;
    ref.current.rotation.z = rotation[2] + Math.sin(t * 0.15 + seed) * 0.05;
  });

  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <planeGeometry args={[1.1, 1.1]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={0}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

function MetalBeam({
  position,
  rotation,
  length = 1.4,
  delay,
  progress,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  length?: number;
  delay: number;
  progress: React.MutableRefObject<number>;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const p = easeOutBack(remap(progress.current, delay, delay + 0.35));
    if (!ref.current) return;
    ref.current.scale.set(Math.max(0.001, p), 1, 1);
    const mat = ref.current.material as THREE.MeshStandardMaterial;
    mat.opacity = clamp01(remap(progress.current, delay, delay + 0.15));
    const t = clock.elapsedTime;
    ref.current.position.y = position[1] + Math.sin(t * 0.3 + delay * 10) * 0.06;
  });

  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <boxGeometry args={[length, 0.045, 0.045]} />
      <meshStandardMaterial
        color="#cdd2da"
        metalness={0.9}
        roughness={0.25}
        transparent
        opacity={0}
      />
    </mesh>
  );
}

const PARTICLE_COUNT = 260;

function Particles({ progress }: { progress: React.MutableRefObject<number> }) {
  const ref = useRef<THREE.Points>(null);

  useEffect(() => {
    const points = ref.current;
    if (!points) return;

    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const baseY = new Float32Array(PARTICLE_COUNT);
    const offsets = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const r = 2.4 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 3.2;
      positions[i * 3] = Math.cos(theta) * r;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(theta) * r;
      baseY[i] = y;
      offsets[i] = Math.random() * Math.PI * 2;
    }

    points.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    points.userData.baseY = baseY;
    points.userData.offsets = offsets;
  }, []);

  useFrame(({ clock }) => {
    const points = ref.current;
    const baseY = points?.userData.baseY as Float32Array | undefined;
    const offsets = points?.userData.offsets as Float32Array | undefined;
    if (!points || !baseY || !offsets) return;

    const mat = points.material as THREE.PointsMaterial;
    mat.opacity = clamp01(remap(progress.current, 0, 0.6)) * 0.7;
    points.rotation.y = clock.elapsedTime * 0.02;
    const posAttr = points.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      posAttr.setY(i, baseY[i] + Math.sin(clock.elapsedTime * 0.4 + offsets[i]) * 0.15);
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry />
      <pointsMaterial
        size={0.028}
        color="#e8c98d"
        transparent
        opacity={0}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroScene() {
  const progress = useRef(0);
  const group = useRef<THREE.Group>(null);
  const targetRot = useRef({ x: 0, y: 0 });

  useFrame(({ clock, pointer }) => {
    progress.current = easeOutCubic(clamp01(clock.elapsedTime / 2.6));

    targetRot.current.y = pointer.x * 0.28;
    targetRot.current.x = -pointer.y * 0.14;
    if (group.current) {
      group.current.rotation.y += (targetRot.current.y - group.current.rotation.y) * 0.04;
      group.current.rotation.x += (targetRot.current.x + 0.08 - group.current.rotation.x) * 0.04;
      group.current.position.y = Math.sin(clock.elapsedTime * 0.25) * 0.05;
    }
  });

  return (
    <group ref={group} position={[0.3, -0.15, 0]}>
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 2]} intensity={1.1} color="#fff3e0" />
      <directionalLight position={[-4, -1, -3]} intensity={0.35} color="#5876b8" />
      <pointLight position={[0, 1.5, 2]} intensity={12} color="#e8c98d" distance={6} />

      <HouseWireframe progress={progress} />

      <BlueprintPanel position={[-2.3, 0.6, -0.4]} rotation={[0, 0.35, 0.08]} seed={1} delay={0.3} progress={progress} scale={1.1} />
      <BlueprintPanel position={[2.4, -0.4, -0.8]} rotation={[0, -0.4, -0.06]} seed={2} delay={0.45} progress={progress} scale={0.9} />
      <BlueprintPanel position={[-1.9, -1.1, 0.6]} rotation={[0.1, 0.2, 0.1]} seed={3} delay={0.6} progress={progress} scale={0.75} />
      <BlueprintPanel position={[2.1, 1.4, 0.3]} rotation={[-0.1, -0.25, -0.1]} seed={4} delay={0.5} progress={progress} scale={0.8} />

      <MetalBeam position={[-1.5, 1.7, 0.4]} rotation={[0, 0, 0.5]} delay={0.55} progress={progress} length={1.3} />
      <MetalBeam position={[1.7, -1.5, -0.3]} rotation={[0, 0.3, -0.4]} delay={0.65} progress={progress} length={1.1} />
      <MetalBeam position={[-2.1, -0.3, -1]} rotation={[0.2, 0.6, 0.2]} delay={0.7} progress={progress} length={0.9} />

      <Particles progress={progress} />
    </group>
  );
}
