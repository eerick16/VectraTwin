import { Network } from 'lucide-react'

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/10">
            <Network className="size-5 text-cyan-300" />
          </div>
          <span className="text-lg font-bold tracking-wide">VectraTwin</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#product" className="hover:text-white">Product</a>
          <a href="#how-it-works" className="hover:text-white">How it works</a>
          <a href="#technology" className="hover:text-white">Technology</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-full px-4 py-2 text-sm text-slate-300 hover:text-white">
            Log in
          </button>
          <button className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 hover:bg-white/10">
            Sign up
          </button>
          <a href="/simulator" className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300">
            Enter Simulator
          </a>
        </div>
      </nav>
    </header>
  )
}