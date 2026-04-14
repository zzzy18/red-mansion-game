import { create } from 'zustand'
import { SettingsState } from '../../types'

interface SettingsActions {
  setTextSpeed: (speed: 'slow' | 'normal' | 'fast' | 'instant') => void
  setAutoAdvance: (enabled: boolean) => void
  setAutoDelay: (delay: number) => void
  setBgmVolume: (volume: number) => void
  setSfxVolume: (volume: number) => void
  setVoiceVolume: (volume: number) => void
  setFontSize: (size: 'small' | 'normal' | 'large') => void
  setFullScreen: (enabled: boolean) => void
  setAutoSave: (enabled: boolean) => void
  setSkipRead: (enabled: boolean) => void
  setShowUnreadIndicator: (enabled: boolean) => void
  resetSettings: () => void
  getTextSpeedMs: () => number
}

const defaultSettings: SettingsState = {
  textSpeed: 'normal',
  autoAdvance: false,
  autoDelay: 2000,
  bgmVolume: 0.8,
  sfxVolume: 0.7,
  voiceVolume: 0.9,
  fontSize: 'normal',
  fullScreen: false,
  autoSave: true,
  skipRead: true,
  showUnreadIndicator: true,
}

export const useSettingsStore = create<SettingsState & SettingsActions>((set, get) => ({
  ...defaultSettings,
  
  setTextSpeed: (speed) => set({ textSpeed: speed }),
  setAutoAdvance: (enabled) => set({ autoAdvance: enabled }),
  setAutoDelay: (delay) => set({ autoDelay: delay }),
  setBgmVolume: (volume) => set({ bgmVolume: Math.max(0, Math.min(1, volume)) }),
  setSfxVolume: (volume) => set({ sfxVolume: Math.max(0, Math.min(1, volume)) }),
  setVoiceVolume: (volume) => set({ voiceVolume: Math.max(0, Math.min(1, volume)) }),
  setFontSize: (size) => set({ fontSize: size }),
  setFullScreen: (enabled) => {
    if (enabled) {
      document.documentElement.requestFullscreen?.()
    } else {
      document.exitFullscreen?.()
    }
    set({ fullScreen: enabled })
  },
  setAutoSave: (enabled) => set({ autoSave: enabled }),
  setSkipRead: (enabled) => set({ skipRead: enabled }),
  setShowUnreadIndicator: (enabled) => set({ showUnreadIndicator: enabled }),
  
  resetSettings: () => set(defaultSettings),
  
  getTextSpeedMs: () => {
    const speed = get().textSpeed
    switch (speed) {
      case 'slow': return 100
      case 'normal': return 50
      case 'fast': return 20
      case 'instant': return 0
      default: return 50
    }
  },
}))