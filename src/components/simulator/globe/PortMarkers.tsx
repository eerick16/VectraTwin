import { Html } from '@react-three/drei'
import { ports } from '../../../data/ports'
import { latLonToVector3 } from '../../../lib/geo'

const markerColorByRisk = {
  low: '#22d3ee',
  medium: '#f59e0b',
  high: '#ef4444',
}

export function PortMarkers() {
  return (
    <group>
      {ports.map((port) => {
        const position = latLonToVector3(port.lat, port.lon, 1.43)
        const color = markerColorByRisk[port.riskLevel]

        return (
          <group key={port.id} position={position}>
            <mesh>
              <sphereGeometry args={[0.025, 16, 16]} />
              <meshBasicMaterial color={color} />
            </mesh>

            <Html distanceFactor={8} center>
              <div className="pointer-events-none translate-y-[-28px] rounded-xl border border-white/10 bg-black/70 px-3 py-2 text-xs text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                <p className="font-semibold">{port.name}</p>
                <p className="text-slate-400">{port.country}</p>
                <p className="mt-1 text-cyan-300">
                  Routes: {port.activeRoutes}
                </p>
              </div>
            </Html>
          </group>
        )
      })}
    </group>
  )
}