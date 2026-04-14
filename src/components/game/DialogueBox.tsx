import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { characters } from '../../data/characters'

interface DialogueBoxProps {
  speaker?: string
  text: string
  isTyping: boolean
  showContinue: boolean
}

// 动画变体配置
const dialogueVariants = {
  initial: { opacity: 0, y: 60, scale: 0.95 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25,
    }
  },
  exit: { 
    opacity: 0, 
    y: 40,
    transition: { duration: 0.2 }
  }
}

const speakerVariants = {
  initial: { opacity: 0, x: -30, scale: 0.8 },
  animate: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 20,
      delay: 0.1
    }
  },
  exit: { 
    opacity: 0, 
    x: 30,
    scale: 0.8,
    transition: { duration: 0.15 }
  }
}

const textBoxVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.3, delay: 0.2 }
  },
  exit: { opacity: 0, transition: { duration: 0.1 } }
}

export const DialogueBox: React.FC<DialogueBoxProps> = ({
  speaker,
  text,
  isTyping,
  showContinue,
}) => {
  const [prevSpeaker, setPrevSpeaker] = useState<string | undefined>(speaker)
  
  // 检测说话者变化（用于后续扩展动画效果）
  useEffect(() => {
    if (prevSpeaker !== speaker) {
      setPrevSpeaker(speaker)
    }
  }, [speaker, prevSpeaker])
  
  // 获取说话者信息
  const speakerData = speaker ? characters.find(c => c.id === speaker) : null
  const speakerName = speakerData?.name || speaker || '旁白'
  
  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 z-10"
      variants={dialogueVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* 对话框主体 */}
      <div className="mx-3 mb-3">
        {/* 说话者头像和名称标签 - 带切换动画 */}
        <AnimatePresence mode="wait">
          {speakerData && (
            <motion.div
              key={speaker}
              className="flex items-end gap-3 mb-2"
              variants={speakerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {/* 小头像 - 带光晕动画 */}
              <motion.div 
                className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-gold shadow-lg relative"
                style={{
                  backgroundImage: `url("${speakerData.avatar}")`,
                  backgroundColor: '#F5F0E6',
                }}
                whileHover={{ scale: 1.1 }}
              >
                {/* 头像光晕 */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-cinnabar/20"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              
              {/* 名称标签 - 带弹性动画 */}
              <motion.div 
                className="bg-cinnabar px-4 py-1.5 rounded-lg shadow-md relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                {/* 标签内部光效 */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                />
                <span className="font-title text-paper text-lg relative z-10">{speakerName}</span>
              </motion.div>
              
              {/* 称谓 */}
              <motion.span 
                className="font-body text-ink/60 text-sm"
                animate={{ opacity: [0.6, 0.8, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                「{speakerData.title}」
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* 对话文本框 - 带渐变入场 */}
        <motion.div 
          className="bg-paper/95 backdrop-blur-sm rounded-lg border-2 border-gold/40 
            shadow-lg p-4 relative overflow-hidden"
          variants={textBoxVariants}
          initial="initial"
          animate="animate"
          style={{
            boxShadow: '0 4px 20px rgba(0,0,0,0.1), inset 0 0 30px rgba(212,175,55,0.05)',
          }}
        >
          {/* 左侧装饰条 - 带光效动画 */}
          <motion.div 
            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cinnabar via-gold to-cinnabar"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          
          {/* 顶部装饰线 */}
          <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          
          {/* 角色名称（无头像时） */}
          <AnimatePresence mode="wait">
            {!speakerData && (
              <motion.div 
                className="mb-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <span className="font-title text-cinnabar/80 text-lg">【旁白】</span>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* 对话文本 */}
          <div 
            className="font-body text-lg text-ink leading-relaxed pl-3 pr-8 min-h-[60px]"
            style={{ fontFamily: "'Noto Serif SC', 'SimSun', serif" }}
          >
            {/* 文本淡入效果 */}
            <motion.span
              className="typewriter-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
            >
              {text}
            </motion.span>
            
            {/* 打字光标 - 带闪烁动画 */}
            {isTyping && (
              <motion.span
                className="inline-block w-0.5 h-5 bg-cinnabar ml-1 rounded"
                animate={{ opacity: [1, 0.3, 1], scaleY: [1, 0.8, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
            )}
          </div>
          
          {/* 继续提示 - 带脉冲动画 */}
          <AnimatePresence>
            {showContinue && (
              <motion.div
                className="absolute bottom-3 right-4 flex items-center gap-1"
                initial={{ opacity: 0, x: 10 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                }}
                exit={{ opacity: 0, x: 10 }}
              >
                <motion.span
                  className="font-body text-ink/60 text-sm"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                >
                  点击继续
                </motion.span>
                <motion.svg 
                  className="w-4 h-4 text-cinnabar" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </motion.svg>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* 右下角装饰 */}
          <motion.div 
            className="absolute bottom-0 right-0 w-8 h-8 opacity-30"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
              <path d="M32 32 L32 0 L0 32" fill="rgba(212,175,55,0.2)" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
      
      {/* 底部装饰花纹 - 带呼吸动画 */}
      <motion.div 
        className="h-2 bg-gradient-to-r from-cinnabar/20 via-gold/30 to-cinnabar/20"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  )
}

export default DialogueBox