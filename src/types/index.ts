// 类型定义入口文件

export * from './character'
export * from './story'
export * from './scene'
export * from './save'

// 游戏状态类型
export type GamePhase = 
  | 'title'       // 标题画面
  | 'select'      // 角色选择
  | 'playing'     // 游戏进行中
  | 'menu'        // 游戏内菜单
  | 'ending'      // 结局画面

export interface GameState {
  phase: GamePhase
  isLoading: boolean
  currentCharacterId: string | null
  currentChapter: number
  currentNodeId: string
  currentSceneId: string
  
  // 游戏内状态
  storyFlags: Record<string, boolean>
  choices: Array<{ nodeId: string; branchId: string }>
  unlockedScenes: string[]
  unlockedCharacters: string[]
  readNodes: string[]
  
  // 角色状态
  characterStats: Record<string, number>
  relationships: Record<string, number>
  inventory: string[]
  
  // 时间状态
  gameTime: {
    day: number
    season: 'spring' | 'summer' | 'autumn' | 'winter'
    timeSlot: 'morning' | 'afternoon' | 'evening' | 'night'
  }
  
  // 显示状态
  dialogueHistory: Array<{ speaker: string; text: string }>
  currentExpression: string
  currentPosition: 'left' | 'center' | 'right'
}

export interface SettingsState {
  textSpeed: 'slow' | 'normal' | 'fast' | 'instant'
  autoAdvance: boolean
  autoDelay: number
  bgmVolume: number
  sfxVolume: number
  voiceVolume: number
  fontSize: 'small' | 'normal' | 'large'
  fullScreen: boolean
  autoSave: boolean
  skipRead: boolean
  showUnreadIndicator: boolean
}