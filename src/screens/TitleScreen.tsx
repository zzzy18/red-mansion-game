import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../components/common/Button'
import { Modal } from '../components/common/Modal'
import { useGameStore } from '../core/state/gameStore'
import Settings from '../components/menu/Settings'

const TitleScreen: React.FC = () => {
  const navigate = useNavigate()
  const [showSettings, setShowSettings] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const resetGame = useGameStore(state => state.resetGame)
  
  const handleStartReading = () => {
    // 直接进入阅读模式
    navigate('/read')
  }
  
  const handleStartGame = () => {
    resetGame()
    navigate('/select')
  }
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* 背景图 */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/assets/images/backgrounds/daguanyuan_full.webp")',
          filter: 'blur(2px)',
        }}
      />
      
      {/* 半透明遮罩 */}
      <div className="absolute inset-0 bg-paper/30" />
      
      {/* 标题 - 移动端适配 */}
      <motion.div 
        className="relative z-10 text-center mb-8 sm:mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="font-title text-4xl sm:text-6xl text-cinnabar mb-3 sm:mb-4 tracking-wider">
          红 楼 梦
        </h1>
        <motion.div
          className="w-24 sm:w-32 h-1 bg-gold mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
        <motion.p
          className="font-title text-lg sm:text-2xl text-ink/80 mt-3 sm:mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          ── 阅读之旅 ──
        </motion.p>
        <motion.p
          className="font-body text-xs sm:text-sm text-ink/50 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          通过游戏了解红楼梦剧情，以阅读代替读书
        </motion.p>
      </motion.div>
      
      {/* 菜单按钮 - 移动端适配 */}
      <motion.div
        className="relative z-10 flex flex-col gap-3 sm:gap-4 w-full max-w-xs px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Button variant="primary" onClick={handleStartReading} className="w-full">
          开始阅读
        </Button>
        <Button variant="gold" onClick={handleStartGame} className="w-full">
          互动游戏模式
        </Button>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={() => setShowSettings(true)} className="w-full">
            设置
          </Button>
          <Button variant="secondary" onClick={() => setShowAbout(true)} className="w-full">
            关于
          </Button>
        </div>
      </motion.div>
      
      {/* 底部提示 - 移动端适配 */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 text-center font-body text-ink/50 text-xs sm:text-sm px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <p className="hidden sm:block">阅读模式：键盘 ← → 翻页，点击词汇查看注释</p>
        <p className="sm:hidden">点击屏幕翻页，点击金色词汇查看注释</p>
      </motion.div>
      
      {/* 设置模态框 */}
      <Settings isOpen={showSettings} onClose={() => setShowSettings(false)} />
      
      {/* 关于模态框 */}
      <Modal
        isOpen={showAbout}
        onClose={() => setShowAbout(false)}
        title="关于"
      >
        <div className="text-center">
          <p className="mb-4 font-title text-cinnabar text-lg">
            红楼梦阅读之旅
          </p>
          <p className="mb-4 font-body text-ink/70">
            这是一款帮助你阅读《红楼梦》的应用。通过章节式阅读、注释解释和人物关系图谱，让你更容易理解这部中国古典文学名著。
          </p>
          <div className="mt-4 p-3 bg-ink/5 rounded-lg">
            <p className="font-body text-sm text-ink/60">
              <span className="text-cinnabar">阅读模式：</span>按键盘 ← → 翻页
            </p>
            <p className="font-body text-sm text-ink/60 mt-1">
              <span className="text-jade">注释功能：</span>点击金色标记的词汇查看解释
            </p>
            <p className="font-body text-sm text-ink/60 mt-1">
              <span className="text-purple-700">人物关系：</span>查看贾府人物关系图谱
            </p>
          </div>
          <p className="text-ink/40 text-xs mt-4 font-body">
            版本 0.2.0
          </p>
        </div>
      </Modal>
    </div>
  )
}

export default TitleScreen