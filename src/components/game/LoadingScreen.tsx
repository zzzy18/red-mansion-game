import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { imagePreloader, PreloadProgress } from '../../utils/imagePreloader'

interface LoadingScreenProps {
  onComplete: () => void
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<PreloadProgress>({
    total: 0,
    loaded: 0,
    failed: 0,
    percentage: 0,
  })
  const [loadingText, setLoadingText] = useState('正在准备大观园...')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // 设置进度回调
    imagePreloader.onProgress((p) => {
      setProgress(p)
      
      // 根据进度更新文字
      if (p.percentage < 30) {
        setLoadingText('正在准备大观园...')
      } else if (p.percentage < 60) {
        setLoadingText('邀请角色入场...')
      } else if (p.percentage < 90) {
        setLoadingText('整理诗词画卷...')
      } else {
        setLoadingText('即将开始...')
      }
    })

    // 设置完成回调
    imagePreloader.onComplete(() => {
      setIsComplete(true)
      setLoadingText('准备好了!')
      
      // 短暂延迟后触发完成
      setTimeout(() => {
        onComplete()
      }, 800)
    })

    // 开始预加载
    imagePreloader.preloadAll()

    // 清理
    return () => {
      imagePreloader.removeCallbacks()
    }
  }, [onComplete])

  // 加载提示诗句
  const loadingPoems = [
    '花谢花飞花满天，红消香断有谁怜',
    '闺中女儿惜春暮，愁绪满怀无释处',
    '春恨秋悲皆自惹，花容月貌为谁妍',
  ]
  
  const currentPoem = loadingPoems[Math.floor(progress.percentage / 33)]

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 bg-paper flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 中国风背景装饰 */}
          <div className="absolute inset-0 chinese-pattern opacity-20" />
          <div className="absolute inset-0 cloud-pattern opacity-10" />
          
          {/* 顶部装饰 */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cinnabar/10 to-transparent" />
          
          {/* 标题 */}
          <motion.div
            className="text-center mb-12"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-title text-6xl text-cinnabar mb-4 tracking-widest">
              红楼梦
            </h1>
            <p className="font-title text-2xl text-ink/60 tracking-wide">
              大观园体验
            </p>
          </motion.div>
          
          {/* 进度条 */}
          <div className="w-64 mb-8">
            {/* 进度条外框 */}
            <div className="relative h-3 bg-ink/10 rounded-full overflow-hidden border border-ink/20">
              {/* 进度填充 */}
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-cinnabar to-gold rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${progress.percentage}%` }}
                transition={{ duration: 0.3 }}
              />
              
              {/* 光效 */}
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-20"
                animate={{ x: progress.percentage > 10 ? [0, 100] : 0 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                style={{ left: `${Math.max(0, progress.percentage - 20)}%` }}
              />
            </div>
            
            {/* 进度数字 */}
            <div className="text-center mt-3 font-body text-sm text-ink/50">
              {progress.percentage}%
            </div>
          </div>
          
          {/* 加载文字 */}
          <motion.div
            className="text-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="font-body text-ink/70">{loadingText}</p>
          </motion.div>
          
          {/* 诗句装饰 */}
          <motion.div
            className="absolute bottom-24 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.5 }}
          >
            <p className="font-title text-lg text-ink/40 tracking-widest">
              「{currentPoem}」
            </p>
          </motion.div>
          
          {/* 底部印章装饰 */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="w-16 h-16 rounded-lg bg-cinnabar/10 border-2 border-cinnabar/30 
              flex flex-col items-center justify-center">
              <span className="font-title text-cinnabar/50 text-sm">红楼</span>
              <span className="font-title text-cinnabar/50 text-xs">一梦</span>
            </div>
          </div>
          
          {/* 左右装饰 */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2">
            <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 
              flex items-center justify-center">
              <span className="font-title text-gold/40 text-xs">春</span>
            </div>
          </div>
          
          <div className="absolute right-8 top-1/2 -translate-y-1/2">
            <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 
              flex items-center justify-center">
              <span className="font-title text-gold/40 text-xs">梦</span>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* 完成过渡动画 */}
      {isComplete && (
        <motion.div
          className="fixed inset-0 z-50 bg-paper flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="font-title text-4xl text-cinnabar">准备好了!</h2>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen