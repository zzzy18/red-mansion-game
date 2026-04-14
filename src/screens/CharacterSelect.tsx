import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../components/common/Button'
import { useGameStore } from '../core/state/gameStore'
import { characters } from '../data/characters'
import { Character } from '../types'

const CharacterSelect: React.FC = () => {
  const navigate = useNavigate()
  const selectCharacter = useGameStore(state => state.selectCharacter)
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)
  
  const handleCharacterClick = (character: Character) => {
    setSelectedCharacter(character)
  }
  
  const handleConfirm = () => {
    if (selectedCharacter) {
      selectCharacter(selectedCharacter.id)
      navigate('/game')
    }
  }
  
  const handleBack = () => {
    navigate('/')
  }
  
  return (
    <div className="w-full h-full flex flex-col bg-paper overflow-hidden">
      {/* 标题 - 固定高度 */}
      <motion.div
        className="text-center py-4 shrink-0"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-title text-3xl text-cinnabar">选择你的角色</h1>
        <p className="font-body text-ink/70 mt-1">体验不同的人生故事</p>
      </motion.div>
      
      {/* 角色卡片区域 - 可滚动 */}
      <motion.div
        className="flex-1 overflow-auto px-4 py-2 min-h-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex gap-4 flex-wrap justify-center">
          {characters.map((character, index) => (
            <motion.div
              key={character.id}
              className={`relative cursor-pointer transition-all duration-300 ${
                selectedCharacter?.id === character.id 
                  ? 'scale-105' 
                  : 'hover:scale-102'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              onClick={() => handleCharacterClick(character)}
            >
              {/* 角色卡片 */}
              <div 
                className={`w-40 rounded-lg overflow-hidden shadow-lg ${
                  selectedCharacter?.id === character.id
                    ? 'border-2 border-gold ring-2 ring-gold/50'
                    : 'border border-ink/20'
                }`}
              >
                {/* 角色头像区域 */}
                <div 
                  className="h-44 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url("${character.avatar}")`,
                    backgroundColor: '#F5F0E6',
                  }}
                >
                  {/* 选中指示 */}
                  {selectedCharacter?.id === character.id && (
                    <motion.div
                      className="absolute top-2 right-2 w-5 h-5 bg-gold rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <svg className="w-3 h-3 text-paper" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  )}
                </div>
                
                {/* 角色信息 */}
                <div className="p-2 bg-paper">
                  <h3 className="font-title text-base text-cinnabar text-center">
                    {character.name}
                  </h3>
                  <p className="font-body text-xs text-ink/60 text-center">
                    {character.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* 角色详情面板 - 可折叠 */}
      <AnimatePresence>
        {selectedCharacter && (
          <motion.div
            className="shrink-0 px-4 py-3 max-h-[200px] overflow-auto"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="max-w-xl mx-auto bg-paper/90 border border-gold/30 rounded-lg p-3 shadow-lg">
              <div className="flex gap-3">
                {/* 角色简介 */}
                <div className="flex-1 min-w-0">
                  <h2 className="font-title text-lg text-cinnabar">
                    {selectedCharacter.name} 「{selectedCharacter.title}」
                  </h2>
                  <p className="font-body text-sm text-ink/80 mt-1 line-clamp-2">
                    {selectedCharacter.description}
                  </p>
                  
                  {/* 属性展示 - 紧凑版 */}
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {Object.entries(selectedCharacter.stats).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-1 text-xs">
                        <span className="font-body text-ink/60">
                          {getStatLabel(key)}
                        </span>
                        <div className="w-16 h-1.5 bg-ink/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-cinnabar rounded-full"
                            style={{ width: `${value}%` }}
                          />
                        </div>
                        <span className="text-ink/50">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 底部按钮 - 固定在底部 */}
      <motion.div
        className="shrink-0 flex justify-center gap-4 py-4 px-4 bg-paper border-t border-ink/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Button variant="secondary" onClick={handleBack}>
          返回
        </Button>
        <Button 
          variant="primary" 
          onClick={handleConfirm}
          disabled={!selectedCharacter}
        >
          选择此角色
        </Button>
      </motion.div>
    </div>
  )
}

// 属性名称映射
function getStatLabel(key: string): string {
  const labels: Record<string, string> = {
    beauty: '容貌',
    talent: '才情',
    health: '体魄',
    fortune: '机缘',
    reputation: '声望',
  }
  return labels[key] || key
}

export default CharacterSelect