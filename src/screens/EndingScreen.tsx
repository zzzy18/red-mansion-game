import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/common/Button'
import { useGameStore } from '../core/state/gameStore'

interface EndingData {
  type: string
  title: string
  description: string
  characterName: string
}

const EndingScreen: React.FC = () => {
  const navigate = useNavigate()
  const gameStore = useGameStore()
  
  // TODO: 根据游戏状态获取结局数据
  const ending: EndingData = {
    type: 'good',
    title: '团圆结局',
    description: '经过漫长的岁月，你终于找到了属于自己的幸福。虽然大观园的故事已成往事，但那些美好的回忆将永远留在心中...',
    characterName: '林黛玉',
  }
  
  const handleReturnToTitle = () => {
    gameStore.resetGame()
    navigate('/')
  }
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-paper relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/assets/images/backgrounds/ending_bg.png")',
          }}
        />
      </div>
      
      {/* 结局内容 */}
      <motion.div
        className="relative z-10 text-center max-w-2xl px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* 结局类型标识 */}
        <motion.div
          className="mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          <span className={`inline-block px-6 py-2 rounded-full font-title text-lg ${
            ending.type === 'good' 
              ? 'bg-jade/20 text-jade' 
              : ending.type === 'bad'
              ? 'bg-cinnabar/20 text-cinnabar'
              : 'bg-ink/20 text-ink/70'
          }`}>
            {ending.type === 'good' ? '圆满' : ending.type === 'bad' ? '遗憾' : '结局'}
          </span>
        </motion.div>
        
        {/* 结局标题 */}
        <motion.h1
          className="font-title text-5xl text-cinnabar mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {ending.title}
        </motion.h1>
        
        {/* 角色名 */}
        <motion.p
          className="font-title text-xl text-gold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          ─ {ending.characterName} ─
        </motion.p>
        
        {/* 结局描述 */}
        <motion.p
          className="font-body text-lg text-ink/80 leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {ending.description}
        </motion.p>
        
        {/* 统计信息 */}
        <motion.div
          className="bg-paper/80 border border-gold/30 rounded-lg p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <h3 className="font-title text-xl text-cinnabar mb-4">旅程回顾</h3>
          <div className="grid grid-cols-3 gap-4 text-center font-body text-ink/70">
            <div>
              <p className="text-2xl text-ink font-title">{gameStore.gameTime.day}</p>
              <p className="text-sm">天数</p>
            </div>
            <div>
              <p className="text-2xl text-ink font-title">{gameStore.choices.length}</p>
              <p className="text-sm">选择次数</p>
            </div>
            <div>
              <p className="text-2xl text-ink font-title">{gameStore.readNodes.length}</p>
              <p className="text-sm">剧情节点</p>
            </div>
          </div>
        </motion.div>
        
        {/* 按钮 */}
        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <Button variant="secondary" onClick={() => navigate('/select')}>
            选择其他角色
          </Button>
          <Button variant="primary" onClick={handleReturnToTitle}>
            返回主菜单
          </Button>
        </motion.div>
      </motion.div>
      
      {/* 感谢信息 */}
      <motion.p
        className="absolute bottom-8 font-body text-ink/50 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        感谢您体验《红楼梦》之旅
      </motion.p>
    </div>
  )
}

export default EndingScreen