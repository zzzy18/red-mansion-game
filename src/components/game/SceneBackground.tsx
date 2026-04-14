import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { scenes } from '../../data/scenes'

interface SceneBackgroundProps {
  sceneId: string
  timeSlot?: 'morning' | 'afternoon' | 'evening' | 'night'
  season?: 'spring' | 'summer' | 'autumn' | 'winter'
}

export const SceneBackground: React.FC<SceneBackgroundProps> = ({
  sceneId,
  timeSlot = 'morning',
  season: _season = 'spring', // 季节参数保留用于后续扩展
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  
  const scene = scenes.find(s => s.id === sceneId)
  
  // 根据时间选择背景
  const getBackgroundImage = () => {
    if (!scene) return null
    
    const backgrounds = scene.background
    
    // 日夜变体
    if (timeSlot === 'night' || timeSlot === 'evening') {
      return backgrounds.night || backgrounds.day
    }
    
    return backgrounds.day
  }
  
  const bgImage = getBackgroundImage()
  
  // 检测图片加载状态
  useEffect(() => {
    if (!bgImage) {
      setImageError(true)
      return
    }
    
    const img = new window.Image()
    img.onload = () => setImageLoaded(true)
    img.onerror = () => setImageError(true)
    img.src = bgImage
  }, [bgImage])
  
  // 时间氛围滤镜
  const getTimeFilter = () => {
    if (timeSlot === 'night') return 'brightness(0.7) saturate(0.8)'
    if (timeSlot === 'evening') return 'sepia(0.15) brightness(0.95)'
    return 'none'
  }
  
  // 场景诗词
  const getScenePoetry = () => {
    const poetries = {
      xiaoxiang_guan: '花谢花飞花满天，红消香断有谁怜',
      yihong_yuan: '怡红快绿，春色撩人',
      hengwu_yuan: '蘅芜清幽，芳草萋萋',
      default: '春日清晨，园中花木正盛',
    }
    return poetries[sceneId as keyof typeof poetries] || poetries.default
  }
  
  return (
    <motion.div 
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* 背景图片层 */}
      {bgImage && !imageError && (
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundImage: `url("${bgImage}")`,
            filter: getTimeFilter(),
          }}
        />
      )}
      
      {/* 装饰背景层 - 始终显示 */}
      <div className="absolute inset-0 bg-gradient-to-br from-paper via-paper/95 to-amber-50/90" />
      
      {/* 中国风花纹背景 */}
      <div className="absolute inset-0 chinese-pattern opacity-30" />
      
      {/* 云纹装饰 */}
      <div className="absolute inset-0 cloud-pattern opacity-20" />
      
      {/* 图片加载失败或场景不存在时显示诗词装饰 */}
      {(imageError || !scene || !imageLoaded) && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* 中央诗词装饰 */}
          <div className="text-center relative">
            {/* 场景名称 */}
            <motion.div
              className="font-title text-5xl text-cinnabar/20 mb-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {scene?.name || '大观园'}
            </motion.div>
            
            {/* 诗词 */}
            <motion.div
              className="font-title text-2xl text-ink/30 tracking-widest"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              「{getScenePoetry()}」
            </motion.div>
            
            {/* 装饰印章 */}
            <motion.div
              className="absolute -right-16 top-8 w-12 h-12 rounded-full bg-cinnabar/10 
                border-2 border-cinnabar/30 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
            >
              <span className="font-title text-cinnabar/40 text-xs">红楼</span>
            </motion.div>
          </div>
        </motion.div>
      )}
      
      {/* 氛围叠加层 */}
      {timeSlot === 'night' && (
        <div className="absolute inset-0 bg-ink/30" />
      )}
      {timeSlot === 'evening' && (
        <div className="absolute inset-0 bg-amber-900/10" />
      )}
      
      {/* 清晨朦胧效果 */}
      {timeSlot === 'morning' && (
        <div className="absolute inset-0 bg-gradient-to-b from-paper/10 to-transparent" />
      )}
      
      {/* 顶部渐变遮罩 */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-ink/10 to-transparent" />
      
      {/* 底部渐变遮罩 */}
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-ink/20 to-transparent" />
      
      {/* 左下角场景名称 */}
      <motion.div
        className="absolute bottom-60 left-16 z-5"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="bg-paper/80 backdrop-blur-sm px-4 py-2 rounded-lg 
          border border-gold/30 shadow-md">
          <div className="font-title text-cinnabar text-base">{scene?.name || '大观园'}</div>
          <div className="font-body text-ink/50 text-xs mt-1">{scene?.fullName || ''}</div>
        </div>
      </motion.div>
      
      {/* 右下角装饰印章 */}
      <motion.div
        className="absolute bottom-60 right-16 z-5"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="w-16 h-16 rounded-lg bg-cinnabar/10 border-2 border-cinnabar/30 
          flex flex-col items-center justify-center shadow-md">
          <span className="font-title text-cinnabar/60 text-sm">怡红</span>
          <span className="font-title text-cinnabar/60 text-xs">快绿</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default SceneBackground