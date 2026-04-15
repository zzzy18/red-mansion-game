import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useGameStore } from '../core/state/gameStore'
import { useSettingsStore } from '../core/state/settingsStore'
import { DialogueBox } from '../components/game/DialogueBox'
import { ChoicePanel } from '../components/game/ChoicePanel'
import { SceneBackground } from '../components/game/SceneBackground'
import { CharacterSprite } from '../components/game/CharacterSprite'
import { AnnotationPanel } from '../components/game/AnnotationPanel'
import { PersonRelationGraph } from '../components/game/PersonRelationGraph'
import { GameMenu } from '../components/menu/GameMenu'
import { StoryNode, StoryContent } from '../types'
import { Branch } from '../types/story'
import { characters } from '../data/characters'
import { getStoryNode, getNextNode, checkCondition } from '../data/stories/storyManager'
import { getSceneById } from '../data/scenes'

const GameScreen: React.FC = () => {
  const navigate = useNavigate()
  const gameStore = useGameStore()
  const settingsStore = useSettingsStore()
  
  const [currentNode, setCurrentNode] = useState<StoryNode | null>(null)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showChoices, setShowChoices] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [showStats, setShowStats] = useState(false)
  const [showAnnotations, setShowAnnotations] = useState(false)
  const [showRelationGraph, setShowRelationGraph] = useState(false)
  const [currentContentIndex, setCurrentContentIndex] = useState(0)
  
  const typewriterRef = useRef<ReturnType<typeof setInterval> | null>(null)
  
  // 获取当前场景信息
  const currentScene = getSceneById(gameStore.currentSceneId)
  
  // 键盘快捷键支持
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC 返回菜单
      if (e.key === 'Escape') {
        setShowMenu(true)
        return
      }
      
      // Enter/Space 继续
      if (e.key === 'Enter' || e.key === ' ') {
        if (!showChoices && !showMenu && !showHistory) {
          handleContinue()
        }
        return
      }
      
      // 数字键快速选择选项
      if (showChoices && currentNode?.branches) {
        const num = parseInt(e.key)
        if (num >= 1 && num <= currentNode.branches.length) {
          handleChoice(currentNode.branches[num - 1])
        }
      }
      
      // S 快存
      if (e.key === 's' || e.key === 'S') {
        if (!showMenu && !showHistory) {
          e.preventDefault()
          // TODO: 快速存档
        }
      }
      
      // L 快读
      if (e.key === 'l' || e.key === 'L') {
        if (!showMenu && !showHistory) {
          e.preventDefault()
          // TODO: 快速读档
        }
      }
      
      // H 历史
      if (e.key === 'h' || e.key === 'H') {
        setShowHistory(true)
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showChoices, showMenu, showHistory, currentNode])
  
  // 加载当前剧情节点
  useEffect(() => {
    const nodeId = gameStore.currentNodeId || 'chapter1_start'
    const node = getStoryNode(nodeId)
    if (node) {
      setCurrentNode(node)
      setCurrentContentIndex(0)
      setShowChoices(false)
      gameStore.markNodeAsRead(nodeId)
    }
  }, [gameStore.currentNodeId])
  
  // 打字机效果
  useEffect(() => {
    if (!currentNode) return
    
    const content = Array.isArray(currentNode.content) 
      ? currentNode.content[currentContentIndex] 
      : currentNode.content
    
    if (!content?.text) return
    
    const text = content.text
    const textSpeed = settingsStore.getTextSpeedMs()
    
    if (textSpeed === 0) {
      setDisplayedText(text)
      setIsTyping(false)
      checkNodeCompletion()
      return
    }
    
    setIsTyping(true)
    setDisplayedText('')
    let charIndex = 0
    
    typewriterRef.current = setInterval(() => {
      if (charIndex < text.length) {
        setDisplayedText(text.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typewriterRef.current!)
        typewriterRef.current = null
        setIsTyping(false)
        checkNodeCompletion()
      }
    }, textSpeed)
    
    return () => {
      if (typewriterRef.current) {
        clearInterval(typewriterRef.current)
      }
    }
  }, [currentNode, currentContentIndex, settingsStore.textSpeed])
  
  // 检查节点完成状态
  const checkNodeCompletion = () => {
    if (!currentNode) return
    
    const contentArray = Array.isArray(currentNode.content) ? currentNode.content : [currentNode.content]
    
    if (currentContentIndex < contentArray.length - 1) {
      return
    }
    
    if (currentNode.type === 'choice' && currentNode.branches) {
      setShowChoices(true)
    }
  }
  
  // 点击继续
  const handleContinue = () => {
    if (!currentNode) return
    
    // 如果正在打字，跳过打字效果
    if (isTyping) {
      const content = Array.isArray(currentNode.content) 
        ? currentNode.content[currentContentIndex] 
        : currentNode.content
      if (content?.text) {
        setDisplayedText(content.text)
        if (typewriterRef.current) {
          clearInterval(typewriterRef.current)
          typewriterRef.current = null
        }
        setIsTyping(false)
        checkNodeCompletion()
      }
      return
    }
    
    const contentArray = Array.isArray(currentNode.content) ? currentNode.content : [currentNode.content]
    
    // 如果还有更多内容，显示下一段
    if (currentContentIndex < contentArray.length - 1) {
      setCurrentContentIndex(currentContentIndex + 1)
      setShowChoices(false)
      return
    }
    
    // 如果是选择节点，等待用户选择（显示选项）
    if (currentNode.type === 'choice' && currentNode.branches) {
      setShowChoices(true)
      return
    }
    
    // 对于其他节点类型，尝试推进到下一节点
    if (currentNode.nextNodeId) {
      const nextNode = getNextNode(currentNode, null, gameStore)
      if (nextNode) {
        gameStore.setCurrentNode(nextNode.id)
      } else {
        // 如果 nextNodeId 存在但找不到节点，打印警告
        console.warn(`找不到节点: ${currentNode.nextNodeId}`)
      }
    } else if (currentNode.type === 'ending') {
      navigate('/ending')
    } else {
      // 节点没有下一个节点ID，可能是故事结束或配置问题
      console.warn(`节点 ${currentNode.id} 没有 nextNodeId`)
    }
  }
  
  // 选择分支
  const handleChoice = (branch: Branch) => {
    if (!currentNode) return
    
    gameStore.recordChoice(currentNode.id, branch.id)
    
    if (branch.effects) {
      branch.effects.forEach(effect => {
        applyEffect(effect)
      })
    }
    
    const nextNode = getStoryNode(branch.targetNodeId)
    if (nextNode) {
      gameStore.setCurrentNode(nextNode.id)
    }
    
    setShowChoices(false)
  }
  
  // 应用效果
  const applyEffect = (effect: { type: string; target: string; value: number | string | boolean }) => {
    switch (effect.type) {
      case 'modify_stat':
        gameStore.modifyStat(effect.target, effect.value as number)
        break
      case 'modify_relation':
        gameStore.modifyRelation(effect.target, effect.value as number)
        break
      case 'set_flag':
        gameStore.setFlag(effect.target, effect.value as boolean)
        break
      case 'unlock_scene':
        gameStore.unlockScene(effect.target)
        break
      default:
        break
    }
  }
  
  // 获取当前内容
  const getCurrentContent = (): StoryContent | null => {
    if (!currentNode) return null
    return Array.isArray(currentNode.content) 
      ? currentNode.content[currentContentIndex] 
      : currentNode.content
  }
  
  const content = getCurrentContent()
  
  // 时间显示
  const getTimeLabel = () => {
    const labels = { morning: '清晨', afternoon: '午后', evening: '傍晚', night: '夜晚' }
    return labels[gameStore.gameTime.timeSlot] || ''
  }
  
  const getSeasonLabel = () => {
    const labels = { spring: '春', summer: '夏', autumn: '秋', winter: '冬' }
    return labels[gameStore.gameTime.season] || ''
  }
  
  return (
    <div 
      className="w-full h-full relative overflow-hidden select-none"
      onClick={handleContinue}
    >
      {/* 场景背景 */}
      <SceneBackground sceneId={gameStore.currentSceneId} />
      
      {/* 氛围叠加层 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/20" />
      
      {/* 装饰元素 - 帘幕和边框 */}
      <div className="left-curtain scene-decoration" />
      <div className="right-curtain scene-decoration" />
      <div className="top-decoration-bar scene-decoration" />
      <div className="bottom-decoration-bar scene-decoration" />
      <div className="corner-decoration top-left scene-decoration" />
      <div className="corner-decoration top-right scene-decoration" />
      <div className="corner-decoration bottom-left scene-decoration" />
      <div className="corner-decoration bottom-right scene-decoration" />
      
      {/* 角色立绘 */}
      {content?.speaker && (
        <CharacterSprite
          characterId={content.speaker}
          expression={content.expression || 'normal'}
          position={content.position || 'center'}
        />
      )}
      
      {/* 顶部信息栏 */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex justify-between items-start px-4 py-3">
          {/* 左侧：菜单按钮 */}
          <div className="flex gap-2">
            <QuickButton onClick={(e) => { e.stopPropagation(); setShowMenu(true) }}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span>菜单</span>
            </QuickButton>
            <QuickButton onClick={(e) => { e.stopPropagation(); setShowHistory(true) }}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>历史</span>
            </QuickButton>
          </div>
          
          {/* 中间：场景和时间信息 */}
          <div className="flex flex-col items-center gap-1">
            <div className="bg-paper/80 backdrop-blur-sm px-4 py-1.5 rounded-lg border border-gold/30 shadow-sm">
              <span className="font-title text-cinnabar text-sm">{currentScene?.fullName || '大观园'}</span>
            </div>
            <div className="bg-paper/70 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-body text-ink/70">
              <span>{getSeasonLabel()} · {getTimeLabel()} · 第{gameStore.gameTime.day}日</span>
            </div>
          </div>
          
          {/* 右侧：章节信息 */}
          <div className="bg-paper/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-cinnabar/30 shadow-sm">
            <span className="font-title text-cinnabar">第 {gameStore.currentChapter} 章</span>
          </div>
        </div>
      </motion.div>
      
      {/* 对话框 */}
      <DialogueBox
        speaker={content?.speaker}
        text={displayedText}
        isTyping={isTyping}
        showContinue={!showChoices && !isTyping}
      />
      
      {/* 选择面板 */}
      <AnimatePresence>
        {showChoices && currentNode?.branches && (
          <ChoicePanel
            branches={currentNode.branches.filter(branch => {
              // 过滤不满足条件的选项
              if (!branch.condition) return true
              return checkCondition(branch.condition, {
                storyFlags: gameStore.storyFlags,
                characterStats: gameStore.characterStats,
                relationships: gameStore.relationships,
              })
            })}
            onSelect={handleChoice}
          />
        )}
      </AnimatePresence>
      
      {/* 右侧快捷操作栏 - 在场景右侧顶部不遮挡对话框 */}
      <motion.div
        className="absolute right-4 top-20 z-15 flex flex-col gap-2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <QuickButton 
          onClick={(e) => { e.stopPropagation(); setShowAnnotations(true) }}
          className="bg-jade/20 hover:bg-jade/30"
        >
          <span>注释</span>
        </QuickButton>
        <QuickButton 
          onClick={(e) => { e.stopPropagation(); setShowRelationGraph(true) }}
          className="bg-purple-100 hover:bg-purple-200"
        >
          <span>关系</span>
        </QuickButton>
        <QuickButton 
          onClick={(e) => { e.stopPropagation(); setShowStats(true) }}
          className="bg-cinnabar/20 hover:bg-cinnabar/30"
        >
          <span>好感</span>
        </QuickButton>
        <QuickButton 
          onClick={(e) => { e.stopPropagation(); /* 快速存档 */ }}
          className="bg-gold/20 hover:bg-gold/30"
        >
          <span>快存</span>
        </QuickButton>
        <QuickButton 
          onClick={(e) => { 
            e.stopPropagation()
            settingsStore.setAutoAdvance(!settingsStore.autoAdvance)
          }}
          className={settingsStore.autoAdvance ? 'bg-cinnabar/30' : ''}
        >
          <span>{settingsStore.autoAdvance ? '自动ON' : '自动'}</span>
        </QuickButton>
      </motion.div>
      
      {/* 游戏菜单 */}
      <GameMenu 
        isOpen={showMenu} 
        onClose={() => setShowMenu(false)}
        onReturnToTitle={() => navigate('/')}
      />
      
      {/* 读书笔记/注释面板 */}
      <AnnotationPanel 
        isOpen={showAnnotations}
        onClose={() => setShowAnnotations(false)}
      />
      
      {/* 人物关系图谱 */}
      <PersonRelationGraph 
        isOpen={showRelationGraph}
        onClose={() => setShowRelationGraph(false)}
        highlightPerson={content?.speaker}
      />
      
      {/* 对话历史模态框 */}
      <AnimatePresence>
        {showHistory && (
          <motion.div
            className="fixed inset-0 z-30 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowHistory(false)}
          >
            <div className="absolute inset-0 bg-ink/50" />
            <motion.div
              className="relative bg-paper border-2 border-gold rounded-lg shadow-2xl w-96 max-h-[70vh] overflow-hidden"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-gold/30">
                <h3 className="font-title text-xl text-cinnabar text-center">对话历史</h3>
              </div>
              <div className="p-4 overflow-auto max-h-[50vh]">
                {gameStore.dialogueHistory.length > 0 ? (
                  gameStore.dialogueHistory.map((item, i) => (
                    <div key={i} className="mb-3 p-2 bg-ink/5 rounded">
                      <span className="font-title text-cinnabar text-sm">{item.speaker}: </span>
                      <span className="font-body text-ink">{item.text}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-ink/50 font-body">暂无对话记录</p>
                )}
              </div>
              <div className="p-4 border-t border-gold/30">
                <button 
                  className="w-full py-2 bg-cinnabar/10 rounded-lg font-body text-ink hover:bg-cinnabar/20"
                  onClick={() => setShowHistory(false)}
                >
                  关闭
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 好感度面板 */}
      <AnimatePresence>
        {showStats && (
          <motion.div
            className="fixed inset-0 z-30 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowStats(false)}
          >
            <div className="absolute inset-0 bg-ink/50" />
            <motion.div
              className="relative bg-paper border-2 border-cinnabar rounded-lg shadow-2xl w-80 max-h-[70vh] overflow-hidden"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-cinnabar/30 bg-cinnabar/10">
                <h3 className="font-title text-xl text-cinnabar text-center">好感度一览</h3>
              </div>
              <div className="p-4 overflow-auto max-h-[50vh]">
                {characters.map((char) => {
                  const relationValue = gameStore.relationships[char.id] || 0
                  const relationLabel = relationValue > 70 ? '情深' : 
                                       relationValue > 40 ? '友善' : 
                                       relationValue > 10 ? '初识' : 
                                       relationValue < -20 ? '疏远' : '陌生'
                  const relationColor = relationValue > 50 ? 'text-jade' : 
                                        relationValue < 0 ? 'text-cinnabar' : 'text-ink'
                  
                  return (
                    <motion.div 
                      key={char.id} 
                      className="mb-3 p-3 bg-ink/5 rounded-lg flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * characters.indexOf(char) }}
                    >
                      {/* 小头像 */}
                      <div 
                        className="w-10 h-10 rounded-full bg-cover bg-center border border-gold/30"
                        style={{ backgroundImage: `url("${char.avatar}")` }}
                      />
                      {/* 信息 */}
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-title text-cinnabar text-sm">{char.name}</span>
                          <span className={`font-body text-xs ${relationColor}`}>{relationLabel}</span>
                        </div>
                        {/* 好感度条 */}
                        <div className="mt-1 flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-ink/10 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full rounded-full ${relationValue > 50 ? 'bg-jade' : relationValue < 0 ? 'bg-cinnabar' : 'bg-gold'}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.max(0, Math.min(100, (relationValue + 100) / 2))}%` }}
                              transition={{ delay: 0.2 }}
                            />
                          </div>
                          <span className="font-body text-xs text-ink/50 w-8">
                            {relationValue}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
              <div className="p-4 border-t border-cinnabar/30">
                <button 
                  className="w-full py-2 bg-cinnabar/10 rounded-lg font-body text-ink hover:bg-cinnabar/20"
                  onClick={() => setShowStats(false)}
                >
                  关闭
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// 快捷按钮组件
interface QuickButtonProps {
  children: React.ReactNode
  onClick: (e: React.MouseEvent) => void
  className?: string
}

const QuickButton: React.FC<QuickButtonProps> = ({ children, onClick, className = '' }) => (
  <button
    className={`flex items-center gap-1 px-3 py-1.5 bg-paper/80 backdrop-blur-sm rounded-lg 
      border border-ink/20 text-ink/70 font-body text-sm hover:bg-paper hover:text-ink 
      hover:border-gold/30 transition-all ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
)

export default GameScreen