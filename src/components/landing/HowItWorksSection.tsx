import { Reveal } from '../common/Reveal'

const steps = [
  'Global ports and routes are represented as logistics nodes.',
  'Simulated vessels move across international supply chains.',
  'Weather and crisis events alter route efficiency in real time.',
  'AI generates mitigation plans based on operational impact.',
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">
            How it works
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            From live signals to AI recommendations.
          </h2>
        </Reveal>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <Reveal key={step} delay={index * 0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-cyan-300">0{index + 1}</p>
                <p className="mt-2 text-lg text-slate-200">{step}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}