import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import type { Group } from 'three'
import { Earth } from './Earth'
import { PortMarkers } from './PortMarkers'

type GlobeWorldProps = {
  isHigh: boolean
}

export function GlobeWorld({ isHigh }: GlobeWorldProps) {
  const worldRef = useRef<Group>(null)

  useFrame((_, delta) => {
    if (worldRef.current) {
      worldRef.current.rotation.y += delta * 0.035
    }
  })

  return (
    <group ref={worldRef}>
      <Earth isHigh={isHigh} />
      <PortMarkers />
    </group>
  )
}