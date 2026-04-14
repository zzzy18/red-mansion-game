// 存档相关类型定义

import { CharacterId } from './character'
import { SceneId } from './scene'

export interface SaveMeta {
  saveId: string
  slot: number                  // 存档槽位 (0-9)
  timestamp: number             // 保存时间戳
  playTime: number              // 累计游戏时长（秒）
  chapter: number               // 当前章节
  chapterTitle: string          // 章节标题
  sceneId: SceneId              // 当前场景
  screenshot?: string           // 存档截图（base64）
}

export interface SaveProgress {
  storyFlags: Record<string, boolean>      // 剧情标志位集合
  choices: Array<{ nodeId: string; branchId: string }>  // 历史选择记录
  unlockedScenes: SceneId[]                // 已解锁场景
  unlockedCharacters: string[]             // 已解锁角色信息
  readNodes: string[]                      // 已读过的节点ID
}

export interface SaveStats {
  characterId: CharacterId      // 当前角色
  characterName: string
  attributes: Record<string, number>  // 角色属性快照
  relationships: Record<string, number>  // 关系好感度
  inventory: string[]           // 道具列表
}

export interface SaveSettings {
  textSpeed: 'slow' | 'normal' | 'fast' | 'instant'
  autoDelay: number             // 自动进阶延迟（毫秒）
  bgmVolume: number             // 背景音量 (0-1)
  sfxVolume: number             // 音效音量 (0-1)
  voiceVolume: number           // 语音音量 (0-1)
  fontSize: 'small' | 'normal' | 'large'
}

export interface SaveData {
  meta: SaveMeta
  progress: SaveProgress
  stats: SaveStats
  settings: SaveSettings
}

// 存档槽位数量
export const MAX_SAVE_SLOTS = 10
export const QUICK_SAVE_SLOT = -1  // 快速存档使用特殊槽位
export const AUTO_SAVE_SLOT = -2   // 自动存档使用特殊槽位