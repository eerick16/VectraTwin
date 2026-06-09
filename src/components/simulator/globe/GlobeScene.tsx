import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Suspense } from 'react'
import { useGraphicsStore } from '../../../store/useGraphicsStore'

export function GlobeScene() {
  const quality = useGraphicsStore((state) => state.quality)
  const isHigh = quality === 'high'

  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      dpr={isHigh ? [1, 2] : [1, 1]}
      gl={{
        antialias: isHigh,
        powerPreference: isHigh ? 'high-performance' : 'low-power',
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 3, 5]} intensity={2} />

        {isHigh && <Stars radius={80} depth={40} count={1200} factor={4} fade speed={0.6} />}

        <GlobeMesh isHigh={isHigh} />

        <OrbitControls
          enablePan={false}
          enableDamping={isHigh}
          dampingFactor={0.06}
          minDistance={2.8}
          maxDistance={6}
          rotateSpeed={0.45}
        />
      </Suspense>
    </Canvas>
  )
}

function GlobeMesh({ isHigh }: { isHigh: boolean }) {
  return (
    <group>
      <mesh>
        <sphereGeometry args={[1.35, isHigh ? 96 : 40, isHigh ? 96 : 40]} />
        <meshStandardMaterial
          color="#082f49"
          emissive="#0891b2"
          emissiveIntensity={0.25}
          roughness={0.8}
          metalness={0.15}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[1.365, isHigh ? 96 : 40, isHigh ? 96 : 40]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.13} />
      </mesh>

      <mesh>
        <sphereGeometry args={[1.39, isHigh ? 96 : 40, isHigh ? 96 : 40]} />
        <meshBasicMaterial color="#67e8f9" transparent opacity={0.06} />
      </mesh>
    </group>
  )
}