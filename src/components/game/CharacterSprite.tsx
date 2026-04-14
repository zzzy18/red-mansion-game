import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { characters } from '../../data/characters'
import { ExpressionType } from '../../types'

interface CharacterSpriteProps {
  characterId: string
  expression?: ExpressionType | string
  position?: 'left' | 'center' | 'right'
  effect?: 'enter' | 'exit' | 'shake' | 'flash'
}

// 角色颜色配置
const characterColors: Record<string, string> = {
  daiyu: '#3a6ea5', // 黛玉 - 淡蓝
  baoyu: '#c41e3a', // 宝玉 - 朱红
  baochai: '#f0e68c', // 宝钗 - 金色
  xifeng: '#ff6b6b', // 熙凤 - 玫红
  xiangyun: '#87ceeb', // 湘云 - 天蓝
  tanchun: '#98fb98', // 探春 - 淡绿
}

export const CharacterSprite: React.FC<CharacterSpriteProps> = ({
  characterId,
  expression = 'normal',
  position = 'center',
  effect,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  
  const character = characters.find(c => c.id === characterId)
  
  if (!character) {
    return null
  }
  
  // 获取表情对应的立绘
  const portraitPath = character.portrait[expression as keyof typeof character.portrait] 
    || character.portrait.normal
  
  // 角色配色
  const charColor = characterColors[characterId] || '#c41e3a'
  
  // 预加载图片
  useEffect(() => {
    const img = new Image()
    img.onload = () => setImageLoaded(true)
    img.onerror = () => setImageError(true)
    img.src = portraitPath
    
    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [portraitPath])
  
  // 位置和缩放配置 - 立绘位置抬高以避免与对话框重叠
  const positionConfig: Record<string, { class: string; offsetX: string; scale: number; zIndex: number }> = {
    left: { class: 'left-[10%]', offsetX: '0', scale: 0.75, zIndex: 5 },
    center: { class: 'left-1/2', offsetX: '-50%', scale: 0.85, zIndex: 6 },
    right: { class: 'right-[10%]', offsetX: '0', scale: 0.75, zIndex: 5 },
  }
  
  const config = positionConfig[position]
  
  // 动画效果
  const getAnimationVariants = () => {
    switch (effect) {
      case 'enter':
        return {
          initial: { opacity: 0, y: 30, scale: 0.9 },
          animate: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 0.5, ease: 'easeOut' }
        }
      case 'exit':
        return {
          initial: { opacity: 1 },
          animate: { opacity: 0 },
          transition: { duration: 0.3 }
        }
      case 'shake':
        return {
          initial: {},
          animate: { x: [0, -10, 10, -10, 10, 0] },
          transition: { duration: 0.5 }
        }
      case 'flash':
        return {
          initial: {},
          animate: { opacity: [1, 0.3, 1] },
          transition: { duration: 0.3 }
        }
      default:
        return {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4 }
        }
    }
  }
  
  const animationVariants = getAnimationVariants()
  
  // 占位符组件 - 图片加载失败或未加载时显示
  const PlaceholderSprite = () => (
    <motion.div
      className="relative w-[240px] h-[360px] flex flex-col items-center justify-center"
      style={{
        transform: `scale(${config.scale})`,
        transformOrigin: 'bottom center',
        background: `linear-gradient(180deg, ${charColor}20 0%, ${charColor}40 100%)`,
        borderRadius: '20px 20px 0 0',
      }}
    >
      {/* 角色名称大字 */}
      <motion.div
        className="font-title text-5xl tracking-widest"
        style={{ color: charColor }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        {character.name}
      </motion.div>
      
      {/* 角色诗句 */}
      <motion.div
        className="font-title text-sm text-ink/40 mt-4 text-center px-4"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {characterId === 'daiyu' && '花谢花飞花满天'}
        {characterId === 'baoyu' && '怡红公子'}
        {characterId === 'baochai' && '蘅芜君'}
        {characterId === 'xifeng' && '机关算尽太聪明'}
        {characterId === 'xiangyun' && '醉卧芍药裀'}
        {characterId === 'tanchun' && '玫瑰花'}
      </motion.div>
      
      {/* 底部装饰 */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-8 rounded-b-none"
        style={{ background: charColor, opacity: 0.3 }}
      />
    </motion.div>
  )
  
  return (
    <motion.div
      className={`absolute ${config.class}`}
      style={{ 
        zIndex: config.zIndex,
        bottom: '220px', // 抬高位置，避免与对话框重叠
        transform: `translateX(${config.offsetX})`,
      }}
      initial={animationVariants.initial}
      animate={animationVariants.animate}
      transition={animationVariants.transition}
    >
      <AnimatePresence mode="wait">
        {/* 图片加载失败或未加载时显示占位符 */}
        {imageError ? (
          <PlaceholderSprite />
        ) : (
          <>
            {/* 加载中占位符 */}
            {!imageLoaded && (
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <PlaceholderSprite />
              </motion.div>
            )}
            
            {/* 角色立绘 */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: imageLoaded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              style={{
                width: '240px',
                height: '360px',
                backgroundImage: `url("${portraitPath}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom center',
                transform: `scale(${config.scale})`,
                transformOrigin: 'bottom center',
                filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.2))',
              }}
            >
              {/* 底部光晕效果 */}
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-12 opacity-20"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(196,30,58,0.4) 0%, transparent 70%)',
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      {/* 角色名称浮标 - 移到立绘上方 */}
      <motion.div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 
          bg-paper/85 backdrop-blur-sm px-3 py-1 rounded-lg
          border border-gold/40 shadow-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="text-center whitespace-nowrap">
          <span className="font-title text-cinnabar text-xs">{character.name}</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default CharacterSprite