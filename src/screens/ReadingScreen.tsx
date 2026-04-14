import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { AnnotationPanel } from '../components/game/AnnotationPanel'
import { PersonRelationGraph } from '../components/game/PersonRelationGraph'
import { chapters } from '../data/stories/storyManager'
import { chapterSummaries, allAnnotations, findAnnotation } from '../data/annotations'
import { StoryNode, StoryContent } from '../types'

interface ReadingScreenProps {
  chapterId?: string
}

export const ReadingScreen: React.FC<ReadingScreenProps> = ({ chapterId: _chapterId }) => {
  const navigate = useNavigate()
  
  const [currentChapter, setCurrentChapter] = useState(1)
  const [currentPage, setCurrentPage] = useState(0)
  const [showAnnotations, setShowAnnotations] = useState(false)
  const [showRelationGraph, setShowRelationGraph] = useState(false)
  const [showChapterNav, setShowChapterNav] = useState(false)
  const [showProgress, setShowProgress] = useState(true)
  
  const contentRef = useRef<HTMLDivElement>(null)
  
  // 章节内容数据
  const chapterData = chapters.find(c => c.number === currentChapter)
  const chapterSummary = chapterSummaries.find(s => s.chapter === currentChapter)
  
  // 获取当前章节的所有文本内容
  const getChapterContent = () => {
    if (!chapterData) return []
    
    const allContent: { text: string; hasAnnotation: boolean; annotationTerm?: string }[] = []
    
    chapterData.nodes.forEach((node: StoryNode) => {
      const nodeContent: StoryContent[] = Array.isArray(node.content) ? node.content : [node.content]
      nodeContent.forEach((item: StoryContent) => {
        if (item?.text) {
          // 检查是否有可注释的词汇
          const hasAnnotation = allAnnotations.some(a => item.text.includes(a.term))
          const annotation = hasAnnotation ? allAnnotations.find(a => item.text.includes(a.term)) : undefined
          allContent.push({
            text: item.text,
            hasAnnotation,
            annotationTerm: annotation?.term
          })
        }
      })
    })
    
    return allContent
  }
  
  const chapterContent = getChapterContent()
  
  // 将内容分页（每页约15段）
  const pages = []
  const pageSize = 15
  for (let i = 0; i < chapterContent.length; i += pageSize) {
    pages.push(chapterContent.slice(i, i + pageSize))
  }
  
  const totalPages = pages.length
  const currentPageContent = pages[currentPage] || []
  
  // 进度条
  const progress = ((currentPage + 1) / totalPages) * 100
  
  // 键盘快捷键
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        nextPage()
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        prevPage()
      } else if (e.key === 'Home') {
        setCurrentPage(0)
      } else if (e.key === 'End') {
        setCurrentPage(totalPages - 1)
      } else if (e.key === 'Escape') {
        setShowChapterNav(true)
      } else if (e.key === 'a' || e.key === 'A') {
        setShowAnnotations(!showAnnotations)
      } else if (e.key === 'r' || e.key === 'R') {
        setShowRelationGraph(!showRelationGraph)
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentPage, totalPages, showAnnotations, showRelationGraph])
  
  // 下一页
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
      contentRef.current?.scrollTo(0, 0)
    } else if (currentChapter < chapters.length) {
      // 进入下一章
      setCurrentChapter(currentChapter + 1)
      setCurrentPage(0)
    }
  }
  
  // 上一页
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
      contentRef.current?.scrollTo(0, 0)
    } else if (currentChapter > 1) {
      // 返回上一章
      setCurrentChapter(currentChapter - 1)
      setCurrentPage(0)
    }
  }
  
  // 点击词汇查看注释
  const handleWordClick = (_term: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setShowAnnotations(true)
  }
  
  // 渲染带注释标记的文本
  const renderTextWithAnnotations = (text: string, annotationTerm?: string) => {
    if (!annotationTerm) {
      return <span>{text}</span>
    }
    
    // 找到注释词汇在文本中的位置并高亮
    const annotation = findAnnotation(annotationTerm)
    if (!annotation) {
      return <span>{text}</span>
    }
    
    const parts = text.split(annotationTerm)
    if (parts.length === 1) {
      return <span>{text}</span>
    }
    
    return (
      <span>
        {parts[0]}
        <motion.span
          className="bg-gold/30 px-1 rounded cursor-pointer hover:bg-gold/50 underline decoration-gold/50"
          whileHover={{ scale: 1.02 }}
          onClick={(e) => handleWordClick(annotationTerm, e)}
        >
          {annotationTerm}
        </motion.span>
        {parts.slice(1).join(annotationTerm)}
      </span>
    )
  }
  
  // 隐藏进度条
  useEffect(() => {
    const timer = setTimeout(() => setShowProgress(false), 3000)
    return () => clearTimeout(timer)
  }, [currentPage])
  
  return (
    <div className="w-full h-full bg-paper flex flex-col overflow-hidden">
      {/* 顶部工具栏 - 移动端适配 */}
      <div className="flex items-center justify-between px-2 sm:px-4 py-2 sm:py-3 bg-gradient-to-b from-cinnabar/10 to-transparent border-b border-gold/20">
        {/* 左侧：返回和章节导航 */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-ink/10 hover:bg-ink/20 text-ink font-body text-sm flex items-center gap-1"
            onClick={() => navigate('/')}
          >
            <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="hidden sm:inline">返回</span>
          </button>
          <button
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-cinnabar/10 hover:bg-cinnabar/20 text-cinnabar font-body text-sm"
            onClick={() => setShowChapterNav(true)}
          >
            目录
          </button>
        </div>
        
        {/* 中间：章节标题 */}
        <div className="text-center flex-1 mx-2">
          <h2 className="font-title text-sm sm:text-lg text-cinnabar truncate">
            第{currentChapter}章：{chapterSummary?.title || chapterData?.title}
          </h2>
          <p className="font-body text-xs text-ink/50 mt-0.5 sm:mt-1">
            {currentPage + 1}/{totalPages}
          </p>
        </div>
        
        {/* 右侧：功能按钮 */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-jade/10 hover:bg-jade/20 text-jade font-body text-sm"
            onClick={() => setShowAnnotations(true)}
          >
            <span className="hidden sm:inline">注释</span>
            <svg className="w-5 h-5 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </button>
          <button
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-purple-100 hover:bg-purple-200 text-purple-700 font-body text-sm"
            onClick={() => setShowRelationGraph(true)}
          >
            <span className="hidden sm:inline">人物</span>
            <svg className="w-5 h-5 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* 进度条 */}
      <AnimatePresence>
        {showProgress && (
          <motion.div
            className="h-1 bg-gold/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="h-full bg-cinnabar"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 主要阅读区域 - 移动端适配 */}
      <div 
        ref={contentRef}
        className="flex-1 overflow-auto px-3 sm:px-8 py-4 sm:py-6"
        onClick={() => setShowProgress(true)}
      >
        <div className="max-w-3xl mx-auto">
          {/* 章节概要（仅第一页显示） */}
          {currentPage === 0 && chapterSummary && (
            <motion.div
              className="mb-6 sm:mb-8 p-3 sm:p-4 bg-gradient-to-r from-cinnabar/5 to-gold/5 rounded-lg border border-gold/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="font-title text-base sm:text-lg text-cinnabar mb-2">本章概要</h3>
              <p className="font-body text-sm sm:text-base text-ink/70 leading-relaxed">{chapterSummary.summary}</p>
              <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                {chapterSummary.keyPersons.map((person: string) => (
                  <span key={person} className="px-2 py-0.5 sm:py-1 bg-ink/10 rounded text-xs font-body text-ink/60">
                    {person}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* 内容段落 - 移动端字体调整 */}
          <div className="space-y-3 sm:space-y-4">
            {currentPageContent.map((item, index) => (
              <motion.p
                key={`${currentPage}-${index}`}
                className="font-body text-base sm:text-lg text-ink leading-relaxed sm:leading-loose"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                style={{ fontFamily: "'Noto Serif SC', 'SimSun', serif" }}
              >
                {renderTextWithAnnotations(item.text, item.annotationTerm)}
              </motion.p>
            ))}
          </div>
          
          {/* 页底提示 - 移动端适配 */}
          {currentPage < totalPages - 1 && (
            <div className="mt-6 sm:mt-8 text-center">
              <motion.button
                className="px-4 sm:px-6 py-2 rounded-lg bg-gold/10 hover:bg-gold/20 text-gold font-body text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextPage}
              >
                继续阅读 →
              </motion.button>
              <p className="mt-2 text-xs text-ink/40 font-body hidden sm:block">
                或按 → 键翻页
              </p>
              <p className="mt-2 text-xs text-ink/40 font-body sm:hidden">
                点击屏幕左右边缘翻页
              </p>
            </div>
          )}
          
          {/* 章节结尾 - 移动端适配 */}
          {currentPage === totalPages - 1 && (
            <motion.div
              className="mt-6 sm:mt-8 p-4 sm:p-6 text-center bg-gradient-to-r from-cinnabar/5 to-gold/5 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="font-title text-lg sm:text-xl text-cinnabar mb-3">本章完结</h3>
              {currentChapter < chapters.length ? (
                <button
                  className="px-4 sm:px-6 py-2 rounded-lg bg-cinnabar text-paper font-body text-sm sm:text-base hover:bg-cinnabar/80"
                  onClick={() => {
                    setCurrentChapter(currentChapter + 1)
                    setCurrentPage(0)
                  }}
                >
                  进入第{currentChapter + 1}章
                </button>
              ) : (
                <p className="font-body text-ink/70">全书完结，感谢阅读！</p>
              )}
            </motion.div>
          )}
        </div>
      </div>
      
      {/* 底部导航栏 - 移动端适配 */}
      <div className="flex items-center justify-between px-2 sm:px-4 py-2 bg-ink/5 border-t border-ink/10">
        <button
          className={`p-2 sm:px-4 sm:py-2 rounded-lg font-body text-sm ${
            currentPage === 0 && currentChapter === 1 
              ? 'bg-ink/5 text-ink/40' 
              : 'bg-paper hover:bg-gold/10 text-ink'
          }`}
          disabled={currentPage === 0 && currentChapter === 1}
          onClick={prevPage}
        >
          <svg className="w-5 h-5 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="hidden sm:inline">← 上一页</span>
        </button>
        
        <div className="flex items-center gap-1.5 sm:gap-2">
          {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full ${
                currentPage === i ? 'bg-cinnabar' : 'bg-ink/20 hover:bg-ink/40'
              }`}
              onClick={() => setCurrentPage(i)}
            />
          ))}
          {totalPages > 5 && (
            <span className="text-xs text-ink/40">...</span>
          )}
        </div>
        
        <button
          className={`p-2 sm:px-4 sm:py-2 rounded-lg font-body text-sm ${
            currentPage === totalPages - 1 && currentChapter === chapters.length
              ? 'bg-ink/5 text-ink/40' 
              : 'bg-paper hover:bg-gold/10 text-ink'
          }`}
          disabled={currentPage === totalPages - 1 && currentChapter === chapters.length}
          onClick={nextPage}
        >
          <svg className="w-5 h-5 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="hidden sm:inline">下一页 →</span>
        </button>
      </div>
      
      {/* 章节导航面板 - 移动端适配 */}
      <AnimatePresence>
        {showChapterNav && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowChapterNav(false)}
          >
            <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm" />
            <motion.div
              className="relative bg-paper rounded-xl shadow-2xl w-full sm:w-80 max-w-full sm:max-w-[90vw] max-h-[85vh] sm:max-h-[70vh] overflow-hidden border-2 border-cinnabar/30"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-3 sm:p-4 border-b border-cinnabar/20 bg-cinnabar/10 flex items-center justify-between">
                <h3 className="font-title text-lg sm:text-xl text-cinnabar text-center flex-1">目录</h3>
                <button
                  className="p-2 rounded-lg bg-ink/10 hover:bg-ink/20"
                  onClick={() => setShowChapterNav(false)}
                >
                  <svg className="w-5 h-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-3 sm:p-4 overflow-auto max-h-[60vh] sm:max-h-[50vh]">
                {chapters.map((chapter) => (
                  <motion.button
                    key={chapter.id}
                    className={`w-full p-3 rounded-lg mb-2 text-left ${
                      currentChapter === chapter.number
                        ? 'bg-cinnabar/10 border border-cinnabar/30'
                        : 'bg-ink/5 hover:bg-ink/10'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setCurrentChapter(chapter.number)
                      setCurrentPage(0)
                      setShowChapterNav(false)
                    }}
                  >
                    <div className="font-title text-base sm:text-lg text-cinnabar">第{chapter.number}章</div>
                    <div className="font-body text-sm text-ink/70">{chapter.title}</div>
                    <div className="font-body text-xs text-ink/50 mt-1 hidden sm:block">{chapter.description}</div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 注释面板 */}
      <AnnotationPanel 
        isOpen={showAnnotations}
        onClose={() => setShowAnnotations(false)}
      />
      
      {/* 人物关系图谱 */}
      <PersonRelationGraph 
        isOpen={showRelationGraph}
        onClose={() => setShowRelationGraph(false)}
      />
    </div>
  )
}

export default ReadingScreen