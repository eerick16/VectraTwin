export type PortRiskLevel = 'low' | 'medium' | 'high'

export type Port = {
  id: string
  name: string
  country: string
  lat: number
  lon: number
  riskLevel: PortRiskLevel
  activeRoutes: number
}

export const ports: Port[] = [
  {
    id: 'shanghai',
    name: 'Port of Shanghai',
    country: 'China',
    lat: 31.2304,
    lon: 121.4737,
    riskLevel: 'low',
    activeRoutes: 18,
  },
  {
    id: 'singapore',
    name: 'Port of Singapore',
    country: 'Singapore',
    lat: 1.3521,
    lon: 103.8198,
    riskLevel: 'low',
    activeRoutes: 16,
  },
  {
    id: 'rotterdam',
    name: 'Port of Rotterdam',
    country: 'Netherlands',
    lat: 51.9244,
    lon: 4.4777,
    riskLevel: 'medium',
    activeRoutes: 12,
  },
  {
    id: 'los-angeles',
    name: 'Port of Los Angeles',
    country: 'United States',
    lat: 33.7405,
    lon: -118.2775,
    riskLevel: 'low',
    activeRoutes: 14,
  },
  {
    id: 'new-york',
    name: 'Port of New York',
    country: 'United States',
    lat: 40.7128,
    lon: -74.006,
    riskLevel: 'medium',
    activeRoutes: 9,
  },
  {
    id: 'dubai',
    name: 'Jebel Ali Port',
    country: 'United Arab Emirates',
    lat: 25.0118,
    lon: 55.0612,
    riskLevel: 'low',
    activeRoutes: 11,
  },
  {
    id: 'tokyo',
    name: 'Port of Tokyo',
    country: 'Japan',
    lat: 35.6762,
    lon: 139.6503,
    riskLevel: 'high',
    activeRoutes: 8,
  },
]