import { ArrowRight, Globe2 } from 'lucide-react'
import { Reveal } from '../common/Reveal'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.14),_transparent_35%)]" />

      <Reveal className="relative mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-16 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.45em] text-cyan-300">
            AI Supply Chain Digital Twin
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Predict global logistics risk before disruption becomes loss.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            VectraTwin is an interactive logistics simulator that visualizes
            global routes, predicts disruption impact, and generates AI-driven
            mitigation strategies for modern supply chains.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="/simulator" className="group inline-flex items-center justify-center gap-3 rounded-full bg-cyan-400 px-7 py-3 text-sm font-bold uppercase tracking-[0.22em] text-slate-950 hover:bg-cyan-300">
              Enter Simulator
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </a>

            <a
              href="#product"
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10"
            >
              Explore Platform
            </a>
          </div>
        </div>

        <Reveal delay={0.2} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur">
          <div className="rounded-[1.5rem] border border-cyan-400/20 bg-slate-900/80 p-6">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                Live Simulation
              </p>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                Operational
              </span>
            </div>

            <div className="flex aspect-video items-center justify-center rounded-2xl border border-white/10 bg-slate-950">
              <Globe2 className="size-28 text-cyan-300/70" />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <Metric label="Fleet Efficiency" value="94%" />
              <Metric label="Routes Active" value="28" />
              <Metric label="Risk Level" value="Low" />
            </div>
          </div>
        </Reveal>
      </Reveal>
    </section>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-2 text-xl font-bold text-white">{value}</p>
    </div>
  )
}