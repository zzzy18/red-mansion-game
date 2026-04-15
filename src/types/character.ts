// 角色相关类型定义

export interface CharacterStats {
  beauty: number       // 容貌 (1-100)
  talent: number       // 才情 (1-100)
  health: number       // 体魄 (1-100)
  fortune: number      // 机缘 (1-100)
  reputation: number   // 声望 (1-100)
}

export interface CharacterSkills {
  poetry: number       // 诗词 (0-100)
  needlework: number   // 女红 (0-100)
  music: number        // 琴棋书画 (0-100)
  management: number   // 管家 (0-100)
  medicine: number     // 医术 (0-100)
}

export interface PortraitSet {
  normal: string       // 常规表情
  happy: string        // 开心
  sad: string          // 悲伤
  angry: string        // 愤怒
  surprised: string    // 惊讶
  shy: string          // 害羞
  thinking: string     // 思考
  special?: string     // 特殊表情
}

export interface Character {
  id: string
  name: string
  title: string            // 称谓（如：潇湘妃子）
  description: string      // 人物简介
  portrait: PortraitSet    // 立绘资源路径
  avatar: string           // 头像资源路径
  stats: CharacterStats
  skills: CharacterSkills
  storylines: string[]     // 可用故事线ID列表
  relationships: RelationshipConfig[]
}

export interface RelationshipConfig {
  targetId: string         // 关系对象角色ID
  initialValue: number     // 初始好感度 (-100 到 100)
  description: string      // 关系描述
}

export type ExpressionType = keyof PortraitSet

// 预定义角色ID
export const CHARACTER_IDS = {
  BAOYU: 'baoyu',
  DAIYU: 'daiyu',
  BAOCHAI: 'baochai',
  XIFENG: 'xifeng',
  XIANGYUN: 'xiangyun',
  TANCHUN: 'tanchun',
  JIAZHENG: 'jiazheng',
  JIAMU: 'jiamu',
  WANGFUREN: 'wangfuren',
} as const

export type CharacterId = typeof CHARACTER_IDS[keyof typeof CHARACTER_IDS]