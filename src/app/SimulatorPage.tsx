import { Activity, AlertTriangle, Fuel, PackageCheck, Radar } from 'lucide-react'
import { GraphicsToggle } from '../components/simulator/GraphicsToggle'
import { GlobeScene } from '../components/simulator/globe/GlobeScene'

const metrics = [
  {
    label: 'Fleet Efficiency',
    value: '94.7%',
    icon: Activity,
    status: 'Optimal',
  },
  {
    label: 'Active Shipments',
    value: '128',
    icon: PackageCheck,
    status: 'In transit',
  },
  {
    label: 'Fuel Cost Index',
    value: '$2.14M',
    icon: Fuel,
    status: 'Simulated',
  },
  {
    label: 'Risk Events',
    value: '03',
    icon: AlertTriangle,
    status: 'Monitored',
  },
]

const logs = [
  '[10:21:03] Vessel AP-740 departed from Shanghai Port.',
  '[10:22:18] Weather anomaly detected near North Atlantic corridor.',
  '[10:23:44] Route VX-19 recalculated with lower fuel exposure.',
  '[10:24:02] AI monitor standing by for mitigation analysis.',
]

export function SimulatorPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="grid min-h-screen grid-cols-1 gap-4 p-4 lg:grid-cols-[320px_1fr_360px]">
        <aside className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-400/10">
              <Radar className="size-5 text-cyan-300" />
            </div>
            <div>
              <p className="text-sm text-slate-400">VectraTwin</p>
              <h1 className="text-xl font-bold">Control Center</h1>
            </div>
          </div>

          <div className="mt-6">
            <GraphicsToggle />
          </div>

          <div className="mt-8 space-y-4">
            {metrics.map((metric) => {
              const Icon = metric.icon

              return (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="size-5 text-cyan-300" />
                    <span className="rounded-full bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-300">
                      {metric.status}
                    </span>
                  </div>

                  <p className="mt-5 text-sm text-slate-400">{metric.label}</p>
                  <p className="mt-1 text-3xl font-bold">{metric.value}</p>
                </div>
              )
            })}
          </div>
        </aside>

        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.15),_transparent_45%)]" />

          <div className="relative h-full min-h-[600px]">
            <GlobeScene />

            <div className="pointer-events-none absolute left-6 top-6 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                Digital Twin View
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Global logistics network initializing...
              </p>
            </div>
          </div>
        </section>

        <aside className="rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Operations</p>
              <h2 className="text-xl font-bold">Live Terminal</h2>
            </div>

            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
              Online
            </span>
          </div>

          <div className="mt-6 h-[420px] space-y-3 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-4 font-mono text-sm text-slate-300">
            {logs.map((log) => (
              <p key={log}>{log}</p>
            ))}
          </div>

          <button className="mt-5 w-full rounded-2xl border border-red-400/40 bg-red-400/10 px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-red-300 hover:bg-red-400/20">
            Trigger Crisis Drill
          </button>

          <button className="mt-3 w-full rounded-2xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300 hover:bg-cyan-400/20">
            Optimize Routes with AI
          </button>
        </aside>
      </section>
    </main>
  )
}