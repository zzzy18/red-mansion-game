import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Branch } from '../../types'

interface ChoicePanelProps {
  branches: Branch[]
  onSelect: (branch: Branch) => void
}

// 动画变体配置
const panelVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
    }
  },
  exit: { 
    opacity: 0, 
    y: 30,
    transition: { duration: 0.2 }
  }
}

const titleVariants = {
  initial: { opacity: 0, scale: 0.8, y: -20 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25,
      delay: 0.1
    }
  }
}

const choiceVariants = {
  initial: { opacity: 0, x: -50, scale: 0.9 },
  animate: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 250,
      damping: 20,
    }
  },
  exit: { 
    opacity: 0, 
    x: 50, 
    scale: 0.9,
    transition: { duration: 0.15 }
  },
  hover: { 
    scale: 1.03,
    transition: { type: 'spring', stiffness: 400, damping: 15 }
  },
  tap: { 
    scale: 0.97,
    transition: { type: 'spring', stiffness: 400, damping: 15 }
  }
}

export const ChoicePanel: React.FC<ChoicePanelProps> = ({
  branches,
  onSelect,
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  
  const handleSelect = (branch: Branch) => {
    setSelectedId(branch.id)
    // 延迟执行选择，让动画先播放
    setTimeout(() => {
      onSelect(branch)
      setSelectedId(null)
    }, 300)
  }
  
  return (
    <motion.div
      className="absolute bottom-[180px] left-0 right-0 z-20 px-6"
      variants={panelVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="max-w-lg mx-auto">
        {/* 选择提示标题 - 带弹性动画 */}
        <motion.div
          className="text-center mb-5"
          variants={titleVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="inline-block bg-cinnabar/10 px-6 py-2.5 rounded-lg border border-cinnabar/30 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            {/* 标题光效 */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: [-50, 50] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
            />
            <span className="font-title text-cinnabar text-lg relative z-10">请选择你的行动</span>
          </motion.div>
        </motion.div>
        
        {/* 选项列表 - 带交错动画 */}
        <div className="space-y-3">
          <AnimatePresence>
            {branches.map((branch, index) => (
              <motion.button
                key={branch.id}
                className="relative w-full overflow-hidden group"
                variants={choiceVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                whileHover="hover"
                whileTap="tap"
                transition={{ delay: 0.1 + 0.08 * index }}
                onClick={(e) => {
                  e.stopPropagation()
                  handleSelect(branch)
                }}
              >
                {/* 选项卡片 */}
                <motion.div 
                  className={`bg-paper/95 backdrop-blur-sm border-2 
                    rounded-lg p-4 shadow-lg relative overflow-hidden ${
                    branch.style === 'warning' 
                      ? 'border-amber-500' 
                      : branch.style === 'danger'
                      ? 'border-cinnabar'
                      : 'border-gold/40'
                  }`}
                  animate={{
                    boxShadow: selectedId === branch.id 
                      ? '0 0 20px rgba(196,30,58,0.3)' 
                      : '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                >
                  {/* 点击波纹效果 */}
                  {selectedId === branch.id && (
                    <motion.div
                      className="absolute inset-0 bg-cinnabar/20"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0.5, 0], scale: 2 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                  
                  {/* 左侧装饰条 - 悬停动画 */}
                  <motion.div 
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cinnabar via-gold to-cinnabar"
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    whileHover={{ opacity: 1, scaleY: [1, 1.1, 1] }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* 选项序号 - 带光晕 */}
                  <motion.div 
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 
                      bg-cinnabar/10 rounded-full flex items-center justify-center
                      border border-cinnabar/30 relative"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: 'rgba(196,30,58,0.2)'
                    }}
                  >
                    {/* 序号光晕 */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-cinnabar/10"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="font-title text-cinnabar text-sm relative z-10">{index + 1}</span>
                  </motion.div>
                  
                  {/* 选项内容 */}
                  <div className="pl-12 pr-6">
                    <motion.span
                      className="font-body text-ink text-lg leading-relaxed block"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 + 0.08 * index + 0.1 }}
                    >
                      {branch.text}
                    </motion.span>
                    
                    {/* 提示信息 - 带淡入动画 */}
                    {branch.hint && (
                      <motion.span
                        className="mt-1 inline-block px-2 py-0.5 bg-gold/10 rounded text-xs 
                          font-body text-gold/70"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + 0.08 * index + 0.2 }}
                      >
                        {branch.hint}
                      </motion.span>
                    )}
                  </div>
                  
                  {/* 右箭头指示 - 带弹性动画 */}
                  <motion.div
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <motion.svg 
                      className="w-5 h-5 text-gold" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </motion.div>
                  
                  {/* 风险样式图标 */}
                  {branch.style === 'warning' && (
                    <motion.div 
                      className="absolute top-3 right-3"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  )}
                  {branch.style === 'danger' && (
                    <motion.div 
                      className="absolute top-3 right-3"
                      animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    >
                      <svg className="w-4 h-4 text-cinnabar" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-1a1 1 0 00-1-1v-2a1 1 0 012 0v2a1 1 0 001 1H9.5a1 1 0 001 1z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
        
        {/* 底部提示 - 带脉冲动画 */}
        <motion.p
          className="text-center text-ink/40 font-body text-sm mt-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.span
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            你的选择将影响故事的走向
          </motion.span>
        </motion.p>
      </div>
    </motion.div>
  )
}

export default ChoicePanel