import { Gauge, Sparkles } from 'lucide-react'
import { useGraphicsStore } from '../../store/useGraphicsStore'

export function GraphicsToggle() {
  const { quality, toggleQuality } = useGraphicsStore()

  const isHigh = quality === 'high'

  return (
    <button
      type="button"
      onClick={toggleQuality}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200"
    >
      {isHigh ? (
        <Sparkles className="size-4 text-cyan-300" />
      ) : (
        <Gauge className="size-4 text-amber-300" />
      )}

      {isHigh ? 'High Graphics' : 'Low Graphics'}
    </button>
  )
}