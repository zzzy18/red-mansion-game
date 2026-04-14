import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../common/Button'
import { Settings } from './Settings'
import { useState } from 'react'

interface GameMenuProps {
  isOpen: boolean
  onClose: () => void
  onReturnToTitle: () => void
}

export const GameMenu: React.FC<GameMenuProps> = ({
  isOpen,
  onClose,
  onReturnToTitle,
}) => {
  const [showSettings, setShowSettings] = useState(false)
  const [showSaveLoad, setShowSaveLoad] = useState<'save' | 'load' | null>(null)
  
  if (!isOpen) return null
  
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-30 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* 背景遮罩 */}
        <motion.div
          className="absolute inset-0 bg-ink/50"
          onClick={onClose}
        />
        
        {/* 菜单面板 */}
        <motion.div
          className="relative bg-paper border-2 border-gold rounded-lg shadow-2xl p-8 w-80"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <h2 className="font-title text-2xl text-cinnabar text-center mb-6">
            游戏菜单
          </h2>
          
          {/* 菜单选项 */}
          <div className="space-y-4">
            <Button variant="primary" className="w-full" onClick={() => setShowSaveLoad('save')}>
              保存游戏
            </Button>
            <Button variant="secondary" className="w-full" onClick={() => setShowSaveLoad('load')}>
              加载游戏
            </Button>
            <Button variant="secondary" className="w-full" onClick={() => setShowSettings(true)}>
              游戏设置
            </Button>
            <Button variant="gold" className="w-full" onClick={onReturnToTitle}>
              返回主菜单
            </Button>
            <Button variant="secondary" className="w-full" onClick={onClose}>
              继续游戏
            </Button>
          </div>
          
          {/* 设置子菜单 */}
          <Settings 
            isOpen={showSettings} 
            onClose={() => setShowSettings(false)} 
          />
          
          {/* 存档/读档子菜单 */}
          {showSaveLoad && (
            <motion.div
              className="absolute inset-0 bg-paper rounded-lg p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="font-title text-xl text-cinnabar mb-4">
                {showSaveLoad === 'save' ? '保存游戏' : '加载游戏'}
              </h3>
              
              {/* 存档槽位列表 */}
              <div className="space-y-2 mb-4">
                {[0, 1, 2, 3, 4].map((slot) => (
                  <div
                    key={slot}
                    className="p-3 bg-ink/5 rounded border border-ink/10 cursor-pointer hover:bg-ink/10"
                    onClick={() => {
                      // TODO: 存档/读档功能
                      setShowSaveLoad(null)
                    }}
                  >
                    <div className="flex justify-between">
                      <span className="font-body text-ink">槽位 {slot + 1}</span>
                      <span className="font-body text-ink/50">空</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="secondary" onClick={() => setShowSaveLoad(null)}>
                返回
              </Button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default GameMenu