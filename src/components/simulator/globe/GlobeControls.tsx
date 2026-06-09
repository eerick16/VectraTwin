import { OrbitControls } from '@react-three/drei'

type GlobeControlsProps = {
  isHigh: boolean
}

export function GlobeControls({ isHigh }: GlobeControlsProps) {
  return (
    <OrbitControls
      enablePan={false}
      enableDamping={isHigh}
      dampingFactor={0.06}
      minDistance={2.8}
      maxDistance={6}
      rotateSpeed={0.45}
    />
  )
}