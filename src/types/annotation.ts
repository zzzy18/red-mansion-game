// 注释和读书笔记类型定义

// 注释类型
export type AnnotationType = 'word' | 'poetry' | 'allusion' | 'person' | 'scene' | 'custom'

// 单个注释
export interface Annotation {
  id: string
  type: AnnotationType
  // 原文/关键词
  term: string
  // 解释/注释内容
  explanation: string
  // 详细解读（可选）
  detailed?: string
  // 相关人物（可选）
  relatedPersons?: string[]
  // 来源（可选，如出自哪一回）
  source?: string
  // 延伸阅读（可选）
  extendedReading?: string
  // 是否已查看
  viewed?: boolean
}

// 注释分组
export interface AnnotationGroup {
  category: string
  title: string
  annotations: Annotation[]
}

// 读书笔记条目
export interface ReadingNote {
  id: string
  chapter: number
  nodeId: string
  // 玩家看到的内容片段
  contentSnippet: string
  // 玩家添加的笔记
  playerNote?: string
  // 系统提供的注释
  annotations: Annotation[]
  // 创建时间
  createdAt: number
}

// 诗词完整信息
export interface PoetryInfo {
  id: string
  title: string
  author: string  // 诗社中谁作的
  content: string  // 诗词全文
  background: string  // 作诗背景
  annotations: Annotation[]  // 词句注释
  appreciation: string  // 整体赏析
  relatedEvent?: string  // 相关事件
}

// 人物关系类型
export type RelationType = 
  | 'parent'      // 父母
  | 'child'       // 子女
  | 'spouse'      // 配偶
  | 'sibling'     // 兄弟姐妹
  | 'relative'    // 亲戚
  | 'master'      // 主仆（主）
  | 'servant'     // 主仆（仆）
  | 'friend'      // 朋友
  | 'enemy'       // 对立
  | 'lover'       // 情感关系
  | 'ambiguous'   // 暧昧/复杂

// 人物关系边
export interface PersonRelation {
  from: string  // 人物ID
  to: string    // 人物ID
  type: RelationType
  description?: string  // 关系描述
  bidirectional?: boolean  // 是否双向关系
}

// 人物关系图谱
export interface PersonRelationGraph {
  persons: string[]  // 所有涉及的人物ID
  relations: PersonRelation[]
}

// 章节概要
export interface ChapterSummary {
  chapter: number
  title: string
  summary: string  // 本章概要
  keyEvents: string[]  // 关键事件
  keyPersons: string[]  // 主要人物
  annotations: Annotation[]  // 本章注释
  originalText?: string  // 原著原文片段
}