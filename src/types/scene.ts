// 场景相关类型定义

export type Season = 'spring' | 'summer' | 'autumn' | 'winter'
export type TimeSlot = 'morning' | 'afternoon' | 'evening' | 'night'

export interface BackgroundSet {
  day: string              // 日间背景
  night: string            // 夜间背景
  spring?: string          // 春季变体
  summer?: string          // 夏季变体
  autumn?: string          // 秋季变体
  winter?: string          // 冬季变体
}

export interface AmbientSound {
  id: string
  volume: number           // 音量 (0-1)
  loop: boolean
}

export interface Hotspot {
  id: string
  name: string
  position: { x: number; y: number; width: number; height: number }
  action: {
    type: 'dialogue' | 'event' | 'examine' | 'move'
    target?: string
  }
}

export interface Scene {
  id: string
  name: string
  fullName: string         // 全名（如：潇湘馆·林黛玉居所）
  description: string
  
  // 资源
  background: BackgroundSet
  bgm: string              // 背景音乐ID
  ambientSounds: AmbientSound[]
  
  // 可用性
  availableTime: TimeSlot[]
  availableSeason?: Season[]
  unlockCondition?: Condition
  
  // 连通性
  connectedScenes: string[]
  
  // 交互
  hotspots?: Hotspot[]
  npcs: string[]           // 可能出现的NPC角色ID
}

import { Condition } from './story'

// 预定义场景ID
export const SCENE_IDS = {
  XIAOXIANG_GUAN: 'xiaoxiang_guan',    // 潇湘馆
  YIHONG_YUAN: 'yihong_yuan',          // 怡红院
  HENGWU_YUAN: 'hengwu_yuan',          // 蘅芜苑
  QIUUSHUANG_ZHAI: 'qiushuang_zhai',   // 秋爽斋
  RUIGUAN: 'ruiguan',                  // 荣庆堂
  HUAZHONG: 'huazhong',                // 花冢
  OUXIANG_XIE: 'ouxiang_xie',          // 藕香榭
} as const

export type SceneId = typeof SCENE_IDS[keyof typeof SCENE_IDS]