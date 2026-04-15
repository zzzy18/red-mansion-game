import { create } from 'zustand'
import { GameState, GamePhase } from '../../types'
import { getCharacterById } from '../../data/characters'

interface GameActions {
  // 游戏流程控制
  setPhase: (phase: GamePhase) => void
  setLoading: (loading: boolean) => void
  
  // 角色选择
  selectCharacter: (characterId: string) => void
  
  // 剧情控制
  setCurrentNode: (nodeId: string) => void
  setCurrentChapter: (chapter: number) => void
  setCurrentScene: (sceneId: string) => void
  
  // 剧情标志
  setFlag: (flag: string, value: boolean) => void
  getFlag: (flag: string) => boolean
  
  // 选择记录
  recordChoice: (nodeId: string, branchId: string) => void
  
  // 解锁
  unlockScene: (sceneId: string) => void
  unlockCharacter: (characterId: string) => void
  markNodeAsRead: (nodeId: string) => void
  isNodeRead: (nodeId: string) => boolean
  
  // 属性修改
  modifyStat: (stat: string, delta: number) => void
  modifyRelation: (characterId: string, delta: number) => void
  addItem: (itemId: string) => void
  removeItem: (itemId: string) => void
  
  // 时间控制
  advanceTime: () => void
  setSeason: (season: 'spring' | 'summer' | 'autumn' | 'winter') => void
  setTimeSlot: (slot: 'morning' | 'afternoon' | 'evening' | 'night') => void
  
  // 显示状态
  setExpression: (expression: string) => void
  setPosition: (position: 'left' | 'center' | 'right') => void
  addDialogueHistory: (speaker: string, text: string) => void
  clearDialogueHistory: () => void
  
  // 存档相关
  getSaveData: () => GameState
  loadSaveData: (data: GameState) => void
  resetGame: () => void
}

const initialState: GameState = {
  phase: 'title',
  isLoading: false,
  currentCharacterId: null,
  currentChapter: 1,
  currentNodeId: '',
  currentSceneId: 'yihong_yuan',
  
  storyFlags: {},
  choices: [],
  unlockedScenes: ['yihong_yuan', 'xiaoxiang_guan', 'hengwu_yuan'],
  unlockedCharacters: ['baoyu', 'daiyu', 'baochai', 'xifeng', 'xiangyun', 'tanchun'],
  readNodes: [],
  
  characterStats: {},
  relationships: {},
  inventory: [],
  
  gameTime: {
    day: 1,
    season: 'spring',
    timeSlot: 'morning',
  },
  
  dialogueHistory: [],
  currentExpression: 'normal',
  currentPosition: 'center',
}

export const useGameStore = create<GameState & GameActions>((set, get) => ({
  ...initialState,
  
  // 游戏流程控制
  setPhase: (phase) => set({ phase }),
  setLoading: (loading) => set({ isLoading: loading }),
  
  // 角色选择 - 初始化属性和关系
  selectCharacter: (characterId) => {
    const character = getCharacterById(characterId)
    if (!character) return

    // 初始化角色属性
    const characterStats: Record<string, number> = {
      beauty: character.stats.beauty,
      talent: character.stats.talent,
      health: character.stats.health,
      fortune: character.stats.fortune,
      reputation: character.stats.reputation,
    }

    // 初始化角色关系（好感度）
    const relationships: Record<string, number> = {}
    character.relationships.forEach(r => {
      relationships[r.targetId] = r.initialValue
    })

    set({
      currentCharacterId: characterId,
      characterStats,
      relationships,
      phase: 'playing',
    })

    // 设置角色身份标志
    get().setFlag(`character_${characterId}`, true)
  },
  
  // 剧情控制
  setCurrentNode: (nodeId) => set({ currentNodeId: nodeId }),
  setCurrentChapter: (chapter) => set({ currentChapter: chapter }),
  setCurrentScene: (sceneId) => set({ currentSceneId: sceneId }),
  
  // 剧情标志
  setFlag: (flag, value) => set((state) => ({
    storyFlags: { ...state.storyFlags, [flag]: value },
  })),
  getFlag: (flag) => Boolean(get().storyFlags[flag]),
  
  // 选择记录
  recordChoice: (nodeId, branchId) => set((state) => ({
    choices: [...state.choices, { nodeId, branchId }],
  })),
  
  // 解锁
  unlockScene: (sceneId) => set((state) => ({
    unlockedScenes: state.unlockedScenes.includes(sceneId)
      ? state.unlockedScenes
      : [...state.unlockedScenes, sceneId],
  })),
  unlockCharacter: (characterId) => set((state) => ({
    unlockedCharacters: state.unlockedCharacters.includes(characterId)
      ? state.unlockedCharacters
      : [...state.unlockedCharacters, characterId],
  })),
  markNodeAsRead: (nodeId) => set((state) => ({
    readNodes: state.readNodes.includes(nodeId)
      ? state.readNodes
      : [...state.readNodes, nodeId],
  })),
  isNodeRead: (nodeId) => get().readNodes.includes(nodeId),
  
  // 属性修改
  modifyStat: (stat, delta) => set((state) => ({
    characterStats: {
      ...state.characterStats,
      [stat]: Math.max(0, Math.min(100, (state.characterStats[stat] || 50) + delta)),
    },
  })),
  modifyRelation: (characterId, delta) => set((state) => ({
    relationships: {
      ...state.relationships,
      [characterId]: Math.max(-100, Math.min(100, (state.relationships[characterId] || 0) + delta)),
    },
  })),
  addItem: (itemId) => set((state) => ({
    inventory: state.inventory.includes(itemId)
      ? state.inventory
      : [...state.inventory, itemId],
  })),
  removeItem: (itemId) => set((state) => ({
    inventory: state.inventory.filter(id => id !== itemId),
  })),
  
  // 时间控制
  advanceTime: () => set((state) => {
    const timeSlots = ['morning', 'afternoon', 'evening', 'night'] as const
    const currentIndex = timeSlots.indexOf(state.gameTime.timeSlot)
    const nextIndex = (currentIndex + 1) % 4
    
    if (nextIndex === 0) {
      // 新的一天
      const seasons = ['spring', 'summer', 'autumn', 'winter'] as const
      const nextSeasonIndex = Math.floor((state.gameTime.day + 1) / 30) % 4
      
      return {
        gameTime: {
          day: state.gameTime.day + 1,
          season: seasons[nextSeasonIndex] || state.gameTime.season,
          timeSlot: 'morning',
        },
      }
    }
    
    return {
      gameTime: {
        ...state.gameTime,
        timeSlot: timeSlots[nextIndex],
      },
    }
  }),
  setSeason: (season) => set((state) => ({
    gameTime: { ...state.gameTime, season },
  })),
  setTimeSlot: (slot) => set((state) => ({
    gameTime: { ...state.gameTime, timeSlot: slot },
  })),
  
  // 显示状态
  setExpression: (expression) => set({ currentExpression: expression }),
  setPosition: (position) => set({ currentPosition: position }),
  addDialogueHistory: (speaker, text) => set((state) => ({
    dialogueHistory: [...state.dialogueHistory, { speaker, text }],
  })),
  clearDialogueHistory: () => set({ dialogueHistory: [] }),
  
  // 存档相关
  getSaveData: () => {
    const state = get()
    return {
      phase: state.phase,
      isLoading: state.isLoading,
      currentCharacterId: state.currentCharacterId,
      currentChapter: state.currentChapter,
      currentNodeId: state.currentNodeId,
      currentSceneId: state.currentSceneId,
      storyFlags: state.storyFlags,
      choices: state.choices,
      unlockedScenes: state.unlockedScenes,
      unlockedCharacters: state.unlockedCharacters,
      readNodes: state.readNodes,
      characterStats: state.characterStats,
      relationships: state.relationships,
      inventory: state.inventory,
      gameTime: state.gameTime,
      dialogueHistory: state.dialogueHistory,
      currentExpression: state.currentExpression,
      currentPosition: state.currentPosition,
    }
  },
  loadSaveData: (data) => set(data),
  resetGame: () => set(initialState),
}))