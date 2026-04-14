import { create } from 'zustand'
import { getSaveList, hasSave } from '../../core/utils/saver'
import { SaveData } from '../../types/save'

interface SaveState {
  saves: SaveData[]
  slotStatus: Record<number, boolean>
  isLoading: boolean
}

interface SaveActions {
  refreshSaves: () => Promise<void>
  checkSlot: (slot: number) => Promise<boolean>
}

export const useSaveStore = create<SaveState & SaveActions>((set) => ({
  saves: [],
  slotStatus: {},
  isLoading: false,
  
  refreshSaves: async () => {
    set({ isLoading: true })
    try {
      const saves = await getSaveList()
      const slotStatus = await getSlotStatusInternal()
      set({ saves, slotStatus, isLoading: false })
    } catch (error) {
      console.error('Failed to refresh saves:', error)
      set({ isLoading: false })
    }
  },
  
  checkSlot: async (slot: number) => {
    return await hasSave(slot)
  },
}))

async function getSlotStatusInternal(): Promise<Record<number, boolean>> {
  const status: Record<number, boolean> = {}
  for (let i = 0; i < 10; i++) {
    status[i] = await hasSave(i)
  }
  return status
}