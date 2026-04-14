import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Annotation, AnnotationType, PoetryInfo } from '../../types/annotation'
import { poetryInfos, allAnnotations } from '../../data/annotations'

interface AnnotationPanelProps {
  isOpen: boolean
  onClose: () => void
  // 当前显示的注释（可选）
  currentAnnotation?: Annotation
}

// 注释类型图标和颜色
const typeConfig: Record<AnnotationType, { icon: string; color: string; label: string }> = {
  word: { icon: '📖', color: 'bg-gold/20 text-gold', label: '词汇' },
  poetry: { icon: '✨', color: 'bg-cinnabar/20 text-cinnabar', label: '诗词' },
  allusion: { icon: '📜', color: 'bg-jade/20 text-jade', label: '典故' },
  person: { icon: '👤', color: 'bg-purple-100 text-purple-600', label: '人物' },
  scene: { icon: '🏛️', color: 'bg-blue-100 text-blue-600', label: '场景' },
  custom: { icon: '📝', color: 'bg-ink/10 text-ink', label: '笔记' },
}

export const AnnotationPanel: React.FC<AnnotationPanelProps> = ({
  isOpen,
  onClose,
  currentAnnotation,
}) => {
  const [selectedTab, setSelectedTab] = useState<'current' | 'dictionary' | 'poetry'>('current')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPoetry, setSelectedPoetry] = useState<PoetryInfo | null>(null)
  const [viewedAnnotations, setViewedAnnotations] = useState<Annotation[]>([])
  
  // 当前要显示的注释
  const displayAnnotation = currentAnnotation || (viewedAnnotations.length > 0 ? viewedAnnotations[viewedAnnotations.length - 1] : null)
  
  // 搜索结果
  const searchResults = searchTerm 
    ? allAnnotations.filter(a => 
        a.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.explanation.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : []
  
  // 添加到已查看列表
  useEffect(() => {
    if (currentAnnotation && !viewedAnnotations.find(a => a.id === currentAnnotation.id)) {
      setViewedAnnotations(prev => [...prev, currentAnnotation])
    }
  }, [currentAnnotation])
  
  const tabs = [
    { id: 'current', label: '当前注释', icon: '📌' },
    { id: 'dictionary', label: '词典', icon: '📚' },
    { id: 'poetry', label: '诗词赏析', icon: '🌸' },
  ]
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex items-end sm:items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* 背景遮罩 */}
          <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" />
          
          {/* 主面板 - 移动端底部弹出样式 */}
          <motion.div
            className="relative bg-paper rounded-t-xl sm:rounded-xl shadow-2xl w-full sm:max-w-2xl max-h-[90vh] sm:max-h-[80vh] overflow-hidden border-2 border-gold/30"
            initial={{ y: '100%', scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: '100%', scale: 0.95 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* 移动端拖动指示器 */}
            <div className="hidden sm:flex w-12 h-1 bg-ink/30 rounded-full mx-auto mt-3" />
            
            {/* 标题栏 - 移动端适配 */}
            <div className="flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 border-b border-gold/20 bg-gradient-to-r from-cinnabar/5 to-gold/5">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="font-title text-base sm:text-xl text-cinnabar">读书笔记</span>
                <span className="text-ink/40 text-xs sm:text-sm font-body">点击词语可查看注释</span>
              </div>
              <motion.button
                className="w-8 h-8 rounded-full bg-ink/10 hover:bg-ink/20 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
              >
                <svg className="w-5 h-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>
            
            {/* 标签栏 - 移动端适配 */}
            <div className="flex gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 bg-ink/5 overflow-x-auto">
              {tabs.map(tab => (
                <motion.button
                  key={tab.id}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-body text-xs sm:text-sm transition-all whitespace-nowrap ${
                    selectedTab === tab.id
                      ? 'bg-cinnabar text-paper shadow-md'
                      : 'bg-paper hover:bg-gold/10 text-ink/70'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedTab(tab.id as typeof selectedTab)}
                >
                  <span className="mr-1">{tab.icon}</span>
                  {tab.label}
                </motion.button>
              ))}
            </div>
            
            {/* 内容区域 - 移动端适配 */}
            <div className="p-3 sm:p-6 overflow-auto max-h-[60vh] sm:max-h-[50vh]">
              {/* 当前注释 */}
              {selectedTab === 'current' && (
                <div className="space-y-4">
                  {displayAnnotation ? (
                    <AnnotationCard annotation={displayAnnotation} />
                  ) : (
                    <div className="text-center py-8">
                      <div className="text-4xl mb-4">📖</div>
                      <p className="font-body text-ink/50">
                        阅读剧情时，点击带有特殊标记的词语可查看注释
                      </p>
                      <p className="font-body text-ink/40 text-sm mt-2">
                        已查看 {viewedAnnotations.length} 条注释
                      </p>
                    </div>
                  )}
                  
                  {/* 最近查看的注释列表 */}
                  {viewedAnnotations.length > 1 && (
                    <div className="mt-6">
                      <h4 className="font-title text-sm text-ink/60 mb-3">最近查看</h4>
                      <div className="flex flex-wrap gap-2">
                        {viewedAnnotations.slice(-5).reverse().map(a => (
                          <motion.button
                            key={a.id}
                            className={`px-3 py-1.5 rounded-lg text-sm font-body ${typeConfig[a.type].color}`}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setViewedAnnotations(prev => [...prev.slice(0, -1), a])}
                          >
                            {a.term}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {/* 词典 */}
              {selectedTab === 'dictionary' && (
                <div className="space-y-4">
                  {/* 搜索框 */}
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-ink/20 bg-paper/50 
                        font-body text-ink focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none"
                      placeholder="搜索词汇、典故或人物..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  
                  {/* 分类浏览 */}
                  {!searchTerm && (
                    <div className="space-y-4">
                      {['word', 'allusion', 'person'].map(type => {
                        const annotations = allAnnotations.filter(a => a.type === type)
                        return (
                          <div key={type}>
                            <h4 className="font-title text-ink/70 mb-2 flex items-center gap-2">
                              <span>{typeConfig[type as AnnotationType].icon}</span>
                              {typeConfig[type as AnnotationType].label}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {annotations.map(a => (
                                <motion.button
                                  key={a.id}
                                  className="px-3 py-1.5 rounded-lg text-sm font-body bg-ink/10 hover:bg-gold/20 text-ink"
                                  whileHover={{ scale: 1.05 }}
                                  onClick={() => setViewedAnnotations(prev => [...prev, a])}
                                >
                                  {a.term}
                                </motion.button>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                  
                  {/* 搜索结果 */}
                  {searchTerm && searchResults.length > 0 && (
                    <div className="space-y-3">
                      {searchResults.map(a => (
                        <motion.div
                          key={a.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <AnnotationCard annotation={a} compact />
                        </motion.div>
                      ))}
                    </div>
                  )}
                  
                  {searchTerm && searchResults.length === 0 && (
                    <div className="text-center py-4 font-body text-ink/50">
                      未找到相关注释
                    </div>
                  )}
                </div>
              )}
              
              {/* 诗词赏析 - 移动端适配 */}
              {selectedTab === 'poetry' && (
                <div className="space-y-3 sm:space-y-4">
                  {!selectedPoetry ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {poetryInfos.map(poetry => (
                        <motion.button
                          key={poetry.id}
                          className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-cinnabar/5 to-gold/5 
                            border border-gold/20 hover:border-gold/40 text-left"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedPoetry(poetry)}
                        >
                          <div className="font-title text-sm sm:text-base text-cinnabar mb-1">{poetry.title}</div>
                          <div className="font-body text-xs sm:text-sm text-ink/50">——{poetry.author}</div>
                        </motion.button>
                      ))}
                    </div>
                  ) : (
                    <PoetryDetail poetry={selectedPoetry} onBack={() => setSelectedPoetry(null)} />
                  )}
                </div>
              )}
            </div>
            
            {/* 底部提示 - 移动端适配 */}
            <div className="px-3 sm:px-6 py-2 sm:py-3 bg-ink/5 border-t border-ink/10 text-center">
              <span className="font-body text-xs text-ink/40">
                💡 阅读时遇到不懂的词语，可随时查阅
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// 注释卡片组件 - 移动端适配
const AnnotationCard: React.FC<{ annotation: Annotation; compact?: boolean }> = ({ annotation, compact }) => {
  const config = typeConfig[annotation.type]
  
  return (
    <motion.div
      className={`rounded-lg border overflow-hidden ${compact ? 'p-3 bg-ink/5' : 'p-3 sm:p-4 bg-paper'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* 标题 */}
      <div className="flex items-center gap-2 mb-2 sm:mb-3">
        <span className={`px-2 py-1 rounded text-xs font-body ${config.color}`}>
          {config.icon} {config.label}
        </span>
        <span className="font-title text-base sm:text-lg text-cinnabar">{annotation.term}</span>
      </div>
      
      {/* 简要解释 */}
      <p className="font-body text-sm sm:text-base text-ink leading-relaxed">{annotation.explanation}</p>
      
      {/* 详细解释 */}
      {!compact && annotation.detailed && (
        <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-gold/5 rounded-lg">
          <p className="font-body text-xs sm:text-sm text-ink/80 leading-relaxed">{annotation.detailed}</p>
        </div>
      )}
      
      {/* 来源 */}
      {annotation.source && (
        <div className="mt-2 text-xs font-body text-ink/40">
          出处：{annotation.source}
        </div>
      )}
      
      {/* 相关人物 */}
      {annotation.relatedPersons && annotation.relatedPersons.length > 0 && (
        <div className="mt-2 sm:mt-3 flex gap-1.5 sm:gap-2">
          {annotation.relatedPersons.map(person => (
            <span key={person} className="px-2 py-0.5 sm:py-1 bg-cinnabar/10 rounded text-xs font-body text-cinnabar/70">
              {person}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}

// 诗词详情组件 - 移动端适配
const PoetryDetail: React.FC<{ poetry: PoetryInfo; onBack: () => void }> = ({ poetry, onBack }) => {
  const [showAnnotations, setShowAnnotations] = useState(false)
  
  return (
    <div className="space-y-3 sm:space-y-4">
      {/* 返回按钮 */}
      <motion.button
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-ink/10 hover:bg-ink/20"
        whileHover={{ x: -3 }}
        whileTap={{ scale: 0.95 }}
        onClick={onBack}
      >
        <svg className="w-4 h-4 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="font-body text-sm text-ink">返回</span>
      </motion.button>
      
      {/* 诗词标题 */}
      <div className="text-center">
        <h3 className="font-title text-lg sm:text-2xl text-cinnabar mb-1 sm:mb-2">{poetry.title}</h3>
        <p className="font-body text-xs sm:text-sm text-ink/50">—— {poetry.author}</p>
      </div>
      
      {/* 诗词正文 */}
      <div className="p-3 sm:p-6 bg-gradient-to-br from-cinnabar/5 to-gold/5 rounded-lg border border-gold/20">
        <pre className="font-body text-sm sm:text-base text-ink text-center whitespace-pre-wrap leading-relaxed sm:leading-loose" 
          style={{ fontFamily: "'Noto Serif SC', 'SimSun', serif" }}>
          {poetry.content}
        </pre>
      </div>
      
      {/* 作诗背景 */}
      <div className="p-3 sm:p-4 bg-ink/5 rounded-lg">
        <h4 className="font-title text-xs sm:text-sm text-ink/60 mb-1 sm:mb-2">📝 作诗背景</h4>
        <p className="font-body text-xs sm:text-sm text-ink/80">{poetry.background}</p>
      </div>
      
      {/* 词句注释 */}
      <div>
        <motion.button
          className="flex items-center gap-2 w-full px-3 sm:px-4 py-2 sm:py-3 bg-gold/10 rounded-lg hover:bg-gold/20"
          onClick={() => setShowAnnotations(!showAnnotations)}
        >
          <span className="font-title text-sm sm:text-base text-gold">词句注释</span>
          <motion.svg 
            className="w-4 sm:w-5 h-4 sm:h-5 text-gold"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
            animate={{ rotate: showAnnotations ? 180 : 0 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.button>
        
        <AnimatePresence>
          {showAnnotations && (
            <motion.div
              className="mt-2 space-y-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {poetry.annotations.map(a => (
                <div key={a.id} className="p-2 sm:p-3 bg-paper rounded-lg border border-ink/10">
                  <span className="font-title text-xs sm:text-sm text-cinnabar">{a.term}</span>
                  <p className="font-body text-xs sm:text-sm text-ink/70 mt-1">{a.explanation}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* 整体赏析 */}
      <div className="p-3 sm:p-4 bg-jade/5 rounded-lg border border-jade/20">
        <h4 className="font-title text-xs sm:text-sm text-jade mb-1 sm:mb-2">✨ 整体赏析</h4>
        <p className="font-body text-xs sm:text-sm text-ink/80 leading-relaxed">{poetry.appreciation}</p>
      </div>
    </div>
  )
}

export default AnnotationPanel