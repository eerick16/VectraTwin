import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { Suspense } from 'react'
import { useGraphicsStore } from '../../../store/useGraphicsStore'
import { GlobeControls } from './GlobeControls'
import { GlobeLighting } from './GlobeLighting'
import { GlobeWorld } from './GlobeWorld'

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
        <GlobeLighting />

        {isHigh && (
          <Stars
            radius={90}
            depth={45}
            count={1400}
            factor={4}
            fade
            speed={0.45}
          />
        )}

        <GlobeWorld isHigh={isHigh} />

        <GlobeControls isHigh={isHigh} />
      </Suspense>
    </Canvas>
  )
}