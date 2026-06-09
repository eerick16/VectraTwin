import { Brain, CloudSun, Globe2 } from 'lucide-react'
import { Reveal } from '../common/Reveal'

const features = [
  {
    icon: Globe2,
    title: '3D Digital Twin',
    description:
      'Explore a global logistics network through an interactive 3D control center.',
  },
  {
    icon: CloudSun,
    title: 'Real-Time Climate Signals',
    description:
      'Connect ports and routes to live weather data to detect operational risk.',
  },
  {
    icon: Brain,
    title: 'AI Mitigation Reports',
    description:
      'Generate executive recommendations when disruptions impact active shipments.',
  },
]

export function TechnologySection() {
  return (
    <section id="technology" className="border-y border-white/10 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">
            Technology
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Built as a modern full-stack simulation platform.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <Reveal key={feature.title} delay={index * 0.1}>
                <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <Icon className="size-8 text-cyan-300" />
                  <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}