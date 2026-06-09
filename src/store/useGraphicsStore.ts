import { create } from 'zustand'
import type { GraphicsQuality } from '../types/graphics'

type GraphicsStore = {
  quality: GraphicsQuality
  setQuality: (quality: GraphicsQuality) => void
  toggleQuality: () => void
}

const getInitialQuality = (): GraphicsQuality => {
  const savedQuality = window.localStorage.getItem('vectratwin-graphics-quality')

  if (savedQuality === 'low' || savedQuality === 'high') {
    return savedQuality
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isSmallScreen = window.matchMedia('(max-width: 768px)').matches

  return prefersReducedMotion || isSmallScreen ? 'low' : 'high'
}

export const useGraphicsStore = create<GraphicsStore>((set, get) => ({
  quality: getInitialQuality(),

  setQuality: (quality) => {
    window.localStorage.setItem('vectratwin-graphics-quality', quality)
    set({ quality })
  },

  toggleQuality: () => {
    const nextQuality = get().quality === 'high' ? 'low' : 'high'
    window.localStorage.setItem('vectratwin-graphics-quality', nextQuality)
    set({ quality: nextQuality })
  },
}))