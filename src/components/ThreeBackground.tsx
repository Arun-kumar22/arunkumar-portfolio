"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, Sphere, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

function ParticleGalaxy(props: any) {
  const ref = useRef<THREE.Points>(null!);
  const sphere = useMemo(() => random.inSphere(new Float32Array(9000), { radius: 2 }), []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 30;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as any} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#00E5FF"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function GlowingCore() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere args={[0.5, 32, 32]} scale={1.2}>
        <MeshDistortMaterial
          color="#7C3AED"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          emissive="#7C3AED"
          emissiveIntensity={0.5}
        />
      </Sphere>
      <Sparkles count={50} scale={2} size={2} speed={0.4} opacity={0.2} color="#00E5FF" />
    </Float>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-[#060816]">
      <Canvas camera={{ position: [0, 0, 2] }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
        <Suspense fallback={null}>
          <ParticleGalaxy />
          <GlowingCore />
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#00E5FF" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#7C3AED" />
        </Suspense>
      </Canvas>
    </div>
  );
}
