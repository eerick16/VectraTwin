import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingPage } from '../LandingPage'
import { SimulatorPage } from '../SimulatorPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/simulator" element={<SimulatorPage />} />
      </Routes>
    </BrowserRouter>
  )
}