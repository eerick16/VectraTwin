import { Reveal } from '../common/Reveal'

export function ProblemSection() {
  return (
    <section id="product" className="border-t border-white/10 px-6 py-28">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Problem</p>

        <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
          Global supply chains fail when companies react too late.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Weather disruptions, port strikes, fuel volatility, and geopolitical
          events can delay shipments across continents. VectraTwin turns those
          risks into an interactive simulation where operators can test
          decisions before real-world impact escalates.
        </p>
      </Reveal>
    </section>
  )
}