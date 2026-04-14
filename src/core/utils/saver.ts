import { get, set, del, keys } from 'idb-keyval'
import { SaveData, MAX_SAVE_SLOTS, QUICK_SAVE_SLOT, AUTO_SAVE_SLOT } from '../../types/save'

const SAVE_KEY_PREFIX = 'red_mansion_save_'

// 保存游戏数据
export async function saveGame(slot: number, data: SaveData): Promise<void> {
  const key = `${SAVE_KEY_PREFIX}${slot}`
  await set(key, data)
}

// 加载游戏数据
export async function loadGame(slot: number): Promise<SaveData | undefined> {
  const key = `${SAVE_KEY_PREFIX}${slot}`
  return await get<SaveData>(key)
}

// 删除存档
export async function deleteSave(slot: number): Promise<void> {
  const key = `${SAVE_KEY_PREFIX}${slot}`
  await del(key)
}

// 获取所有存档列表
export async function getSaveList(): Promise<SaveData[]> {
  const allKeys = await keys()
  const saveKeys = allKeys.filter(k => 
    typeof k === 'string' && k.startsWith(SAVE_KEY_PREFIX)
  )
  
  const saves: SaveData[] = []
  for (const key of saveKeys) {
    const data = await get<SaveData>(key)
    if (data) {
      saves.push(data)
    }
  }
  
  // 按槽位排序
  return saves.sort((a, b) => a.meta.slot - b.meta.slot)
}

// 快速存档
export async function quickSave(data: SaveData): Promise<void> {
  const quickSaveData = {
    ...data,
    meta: {
      ...data.meta,
      slot: QUICK_SAVE_SLOT,
      timestamp: Date.now(),
    },
  }
  await saveGame(QUICK_SAVE_SLOT, quickSaveData)
}

// 快速读档
export async function quickLoad(): Promise<SaveData | undefined> {
  return await loadGame(QUICK_SAVE_SLOT)
}

// 自动存档
export async function autoSave(data: SaveData): Promise<void> {
  const autoSaveData = {
    ...data,
    meta: {
      ...data.meta,
      slot: AUTO_SAVE_SLOT,
      timestamp: Date.now(),
    },
  }
  await saveGame(AUTO_SAVE_SLOT, autoSaveData)
}

// 检查存档是否存在
export async function hasSave(slot: number): Promise<boolean> {
  const key = `${SAVE_KEY_PREFIX}${slot}`
  const data = await get(key)
  return data !== undefined
}

// 获取存档槽位状态
export async function getSlotStatus(): Promise<Record<number, boolean>> {
  const status: Record<number, boolean> = {}
  
  for (let i = 0; i < MAX_SAVE_SLOTS; i++) {
    status[i] = await hasSave(i)
  }
  
  status[QUICK_SAVE_SLOT] = await hasSave(QUICK_SAVE_SLOT)
  status[AUTO_SAVE_SLOT] = await hasSave(AUTO_SAVE_SLOT)
  
  return status
}