import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { useRef } from 'react'
import type { Mesh } from 'three'

export function Earth({ isHigh }: { isHigh: boolean }) {
  const cloudsRef = useRef<Mesh>(null)

  const [dayMap, nightMap, cloudsMap] = useTexture([
    '/textures/earth/earth-day.jpg',
    '/textures/earth/earth-night.jpg',
    '/textures/earth/earth-clouds.jpg',
  ])

  useFrame((_, delta) => {
    if (cloudsRef.current && isHigh) {
      cloudsRef.current.rotation.y += delta * 0.02
    }
  })

  return (
    <group>
      <mesh>
        <sphereGeometry args={[1.35, isHigh ? 96 : 48, isHigh ? 96 : 48]} />
        <meshStandardMaterial
          map={dayMap}
          emissiveMap={nightMap}
          emissive="#ffffff"
          emissiveIntensity={0.35}
          roughness={0.9}
          metalness={0}
        />
      </mesh>

      {isHigh && (
        <mesh ref={cloudsRef}>
          <sphereGeometry args={[1.375, 96, 96]} />
          <meshBasicMaterial
            map={cloudsMap}
            transparent
            opacity={0.22}
            depthWrite={false}
          />
        </mesh>
      )}

      <mesh>
        <sphereGeometry args={[1.39, isHigh ? 96 : 48, isHigh ? 96 : 48]} />
        <meshBasicMaterial
          color="#67e8f9"
          transparent
          opacity={isHigh ? 0.055 : 0.035}
          depthWrite={false}
        />
      </mesh>
    </group>
  )
}