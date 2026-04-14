// 剧情相关类型定义

export type StoryNodeType =
  | 'narrative'     // 叙事节点 - 纯文本剧情展示
  | 'dialogue'      // 对话节点 - 角色互动
  | 'choice'        // 选择节点 - 分支决策点
  | 'event'         // 事件节点 - 触发特殊事件
  | 'condition'     // 判定节点 - 根据属性判定剧情走向
  | 'scene_change'  // 场景切换节点
  | 'ending'        // 结局节点

export interface TextEffect {
  type: 'shake' | 'flash' | 'fade' | 'emphasis'
  params?: Record<string, unknown>
}

export interface StoryContent {
  speaker?: string           // 说话角色ID
  text: string               // 显示文本
  expression?: string        // 角色表情状态
  position?: 'left' | 'center' | 'right'  // 立绘位置
  effects?: TextEffect[]     // 文字特效
  delay?: number             // 延迟显示（毫秒）
}

export interface Condition {
  type: 'stat' | 'flag' | 'relation' | 'random'
  target?: string            // 目标属性/标志/角色
  operator?: '>' | '<' | '=' | '>=' | '<=' | '!='
  value?: number | string | boolean
  chance?: number            // 随机概率 (0-1)
}

export interface Effect {
  type: 'modify_stat' | 'modify_relation' | 'set_flag' | 'unlock_scene' | 'unlock_story' | 'add_item' | 'trigger_event'
  target: string
  value: number | string | boolean
}

export interface Branch {
  id: string
  text: string               // 选项文本
  hint?: string              // 悬停提示
  targetNodeId: string       // 目标节点ID
  condition?: Condition      // 显示条件
  effects?: Effect[]         // 选择后的效果
  style?: 'normal' | 'warning' | 'danger'  // 风险提示
}

export interface StoryNode {
  id: string
  type: StoryNodeType
  chapter: number
  sceneId: string
  
  // 内容
  content: StoryContent | StoryContent[]
  
  // 跳转逻辑
  nextNodeId?: string
  branches?: Branch[]
  
  // 条件判定（用于condition类型节点）
  conditions?: Condition[]
  conditionalBranches?: { condition: Condition; targetNodeId: string }[]
  
  // 副作用
  effects?: Effect[]
  
  // 场景切换信息（用于scene_change类型）
  targetSceneId?: string
  
  // 结局信息（用于ending类型）
  endingType?: string
  endingTitle?: string
  endingDescription?: string
}

export interface StoryChapter {
  id: string
  number: number
  title: string
  description: string
  startNodeId: string        // 章节起始节点
  nodes: StoryNode[]
}

export interface Storyline {
  id: string
  characterId: string        // 所属角色
  title: string              // 故事线标题
  description: string        // 故事线描述
  chapters: string[]         // 包含的章节ID列表
}