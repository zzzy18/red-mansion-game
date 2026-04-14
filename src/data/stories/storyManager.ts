import { StoryNode, StoryChapter } from '../../types'
import { chapter1 } from './chapter1'
import { chapter2 } from './chapter2'
import { chapter3 } from './chapter3'
import { chapter4 } from './chapter4'
import { chapter5 } from './chapter5'
import { chapter6 } from './chapter6'
import { chapter7 } from './chapter7'
import { chapter8 } from './chapter8'

// 剧情管理器

// 所有章节
export const chapters: StoryChapter[] = [chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7, chapter8]

// 获取剧情节点
export function getStoryNode(nodeId: string): StoryNode | undefined {
  for (const chapter of chapters) {
    const node = chapter.nodes.find((n: StoryNode) => n.id === nodeId)
    if (node) return node
  }
  return undefined
}

// 获取下一节点
export function getNextNode(
  currentNode: StoryNode,
  selectedBranch: { id: string; targetNodeId: string } | null,
  gameState: {
    storyFlags: Record<string, boolean>
    characterStats: Record<string, number>
    relationships: Record<string, number>
  }
): StoryNode | null {
  // 如果是选择节点，需要有分支选择
  if (currentNode.type === 'choice') {
    if (!selectedBranch) return null
    return getStoryNode(selectedBranch.targetNodeId) ?? null
  }
  
  // 如果有条件分支，根据条件判定
  if (currentNode.type === 'condition' && currentNode.conditionalBranches) {
    for (const branch of currentNode.conditionalBranches) {
      if (checkCondition(branch.condition, gameState)) {
        return getStoryNode(branch.targetNodeId) ?? null
      }
    }
    return null
  }
  
  // 普通节点，直接跳转到下一节点
  if (currentNode.nextNodeId) {
    return getStoryNode(currentNode.nextNodeId) ?? null
  }
  
  // 场景切换节点
  if (currentNode.type === 'scene_change' && currentNode.targetSceneId) {
    // 返回场景切换后的第一个节点
    // 这里需要根据场景配置确定起始节点
    return getStoryNode(currentNode.nextNodeId || '') ?? null
  }
  
  return null
}

// 检查条件
function checkCondition(
  condition: {
    type: string
    target?: string
    operator?: string
    value?: number | string | boolean
    chance?: number
  },
  gameState: {
    storyFlags: Record<string, boolean>
    characterStats: Record<string, number>
    relationships: Record<string, number>
  }
): boolean {
  switch (condition.type) {
    case 'stat': {
      const statValue = gameState.characterStats[condition.target || ''] || 0
      return compareValues(statValue, condition.operator || '>', condition.value as number)
    }
    case 'flag':
      return gameState.storyFlags[condition.target || ''] === condition.value
    case 'relation': {
      const relationValue = gameState.relationships[condition.target || ''] || 0
      return compareValues(relationValue, condition.operator || '>', condition.value as number)
    }
    case 'random':
      return Math.random() < (condition.chance || 0.5)
    default:
      return true
  }
}

// 值比较
function compareValues(a: number, operator: string, b: number): boolean {
  switch (operator) {
    case '>': return a > b
    case '<': return a < b
    case '=': return a === b
    case '>=': return a >= b
    case '<=': return a <= b
    case '!=': return a !== b
    default: return false
  }
}

// 获取章节
export function getChapter(chapterNumber: number): StoryChapter | undefined {
  return chapters.find(c => c.number === chapterNumber)
}

// 导出所有章节
export { chapter1 } from './chapter1'
export { chapter2 } from './chapter2'
export { chapter3 } from './chapter3'
export { chapter4 } from './chapter4'
export { chapter5 } from './chapter5'
export { chapter6 } from './chapter6'
export { chapter7 } from './chapter7'
export { chapter8 } from './chapter8'