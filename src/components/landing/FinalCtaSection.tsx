import { ShieldCheck } from 'lucide-react'
import { Reveal } from '../common/Reveal'

export function FinalCtaSection() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <ShieldCheck className="mx-auto size-10 text-cyan-300" />

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Ready to enter the control center?
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Explore a live digital twin experience designed to demonstrate
            advanced frontend engineering, API integration, simulation logic,
            and AI-powered decision support.
          </p>

          <div className="mt-10">
            <a
              href="/simulator"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-sm font-bold uppercase tracking-[0.22em] text-slate-950 transition hover:bg-cyan-300"
            >
              Enter Simulator
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}