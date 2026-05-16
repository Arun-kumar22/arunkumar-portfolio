"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

// Reduced from 9000 → 3000 particles to cut GPU/CPU load significantly
function ParticleGalaxy(props: Record<string, unknown>) {
  const ref = useRef<THREE.Points>(null!);
  // 3000 particles = 1000 xyz triplets
  const sphere = useMemo(
    () => random.inSphere(new Float32Array(3000), { radius: 2 }),
    []
  );

  useFrame((_state, delta) => {
    ref.current.rotation.x -= delta / 30;
    ref.current.rotation.y -= delta / 40;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere as Float32Array}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#00E5FF"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-[#060816]">
      {/* dpr capped at 1 to avoid 2× rendering cost on retina screens */}
      <Canvas
        camera={{ position: [0, 0, 2] }}
        dpr={1}
        performance={{ min: 0.5 }}
        gl={{ antialias: false, powerPreference: "low-power" }}
      >
        <Suspense fallback={null}>
          <ParticleGalaxy />
          <ambientLight intensity={0.2} />
          <pointLight
            position={[10, 10, 10]}
            intensity={1.5}
            color="#00E5FF"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
