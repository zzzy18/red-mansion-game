import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { characters } from '../../data/characters'
import { personRelations, PersonRelation, RelationType } from '../../data/annotations'

interface PersonRelationGraphProps {
  isOpen: boolean
  onClose: () => void
  // 高亮人物（可选）
  highlightPerson?: string
}

// 关系类型颜色和样式
const relationStyles: Record<RelationType, { color: string; label: string; dash?: string }> = {
  parent: { color: '#c41e3a', label: '父母' },
  child: { color: '#c41e3a', label: '子女' },
  spouse: { color: '#d4af37', label: '配偶', dash: '5,5' },
  sibling: { color: '#87ceeb', label: '兄弟姐妹' },
  relative: { color: '#98fb98', label: '亲戚' },
  master: { color: '#800080', label: '主子' },
  servant: { color: '#800080', label: '仆人', dash: '2,2' },
  friend: { color: '#3a6ea5', label: '朋友' },
  enemy: { color: '#ff0000', label: '对立', dash: '3,3' },
  lover: { color: '#ff69b4', label: '情感' },
  ambiguous: { color: '#ff69b4', label: '复杂', dash: '8,4' },
}

export const PersonRelationGraph: React.FC<PersonRelationGraphProps> = ({
  isOpen,
  onClose,
  highlightPerson,
}) => {
  const [selectedPerson, setSelectedPerson] = useState<string | null>(highlightPerson || null)
  const [filterType, setFilterType] = useState<RelationType | 'all'>('all')
  const [hoveredRelation, setHoveredRelation] = useState<PersonRelation | null>(null)
  
  // 计算人物位置（圆形布局）
  const getPersonPosition = (personId: string, total: number, radius: number = 200) => {
    const personList = characters.map(c => c.id)
    const index = personList.indexOf(personId)
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    }
  }
  
  // 获取与选中人物相关的所有关系
  const getRelatedRelations = (personId: string) => {
    return personRelations.filter(r => 
      r.from === personId || r.to === personId
    )
  }
  
  // 获取与选中人物相关的所有人物
  const getRelatedPersons = (personId: string) => {
    const relations = getRelatedRelations(personId)
    return relations.map(r => r.from === personId ? r.to : r.from)
  }
  
  // 过滤后的关系
  const filteredRelations = filterType === 'all' 
    ? personRelations 
    : personRelations.filter(r => r.type === filterType)
  
  // 人物总数
  const totalPersons = characters.length
  
  // 可用的关系类型
  const availableTypes: RelationType[] = ['relative', 'spouse', 'sibling', 'friend', 'ambiguous', 'lover']
  
  // 获取人物数据
  const getPersonData = (personId: string) => {
    return characters.find(c => c.id === personId)
  }
  
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
          <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" />
          
          {/* 主面板 - 移动端底部弹出 */}
          <motion.div
            className="relative bg-paper rounded-t-xl sm:rounded-xl shadow-2xl w-full sm:max-w-4xl max-h-[95vh] sm:max-h-[85vh] overflow-hidden border-2 border-cinnabar/30"
            initial={{ y: '100%', scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: '100%', scale: 0.95 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* 移动端拖动指示器 */}
            <div className="hidden sm:flex w-12 h-1 bg-ink/30 rounded-full mx-auto mt-3" />
            
            {/* 标题栏 - 移动端适配 */}
            <div className="flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 border-b border-cinnabar/20 bg-gradient-to-r from-cinnabar/10 to-gold/10">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="font-title text-base sm:text-xl text-cinnabar">人物关系图谱</span>
                <span className="text-ink/40 text-xs sm:text-sm font-body">点击人物查看详情</span>
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
            
            {/* 过滤栏 - 移动端适配 */}
            <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 bg-ink/5 border-b border-ink/10 overflow-x-auto">
              <span className="font-body text-xs sm:text-sm text-ink/60 whitespace-nowrap">筛选：</span>
              <div className="flex gap-1 sm:gap-2">
                <motion.button
                  className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg font-body text-xs sm:text-sm whitespace-nowrap ${
                    filterType === 'all' ? 'bg-cinnabar text-paper' : 'bg-ink/10 text-ink hover:bg-ink/20'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFilterType('all')}
                >
                  全部
                </motion.button>
                {availableTypes.map(type => (
                  <motion.button
                    key={type}
                    className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg font-body text-xs sm:text-sm whitespace-nowrap ${
                      filterType === type 
                        ? 'bg-cinnabar text-paper' 
                        : 'bg-ink/10 text-ink hover:bg-ink/20'
                    }`}
                    style={{ 
                      backgroundColor: filterType === type ? relationStyles[type].color : undefined,
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setFilterType(type)}
                  >
                    {relationStyles[type].label}
                  </motion.button>
                ))}
              </div>
            </div>
            
            {/* 主内容区 - 移动端改为垂直布局 */}
            <div className="flex flex-col sm:flex-row h-[50vh] sm:h-[60vh]">
              {/* 图谱区域 */}
              <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-paper to-gold/5">
                {/* 图谱 SVG */}
                <svg className="absolute inset-0 w-full h-full" viewBox="-300 -300 600 600">
                  {/* 关系连线 */}
                  {filteredRelations.map((relation, index) => {
                    const fromPos = getPersonPosition(relation.from, totalPersons)
                    const toPos = getPersonPosition(relation.to, totalPersons)
                    const style = relationStyles[relation.type]
                    const isHighlighted = selectedPerson && 
                      (relation.from === selectedPerson || relation.to === selectedPerson)
                    
                    return (
                      <g key={`relation-${index}`}>
                        <motion.line
                          x1={fromPos.x}
                          y1={fromPos.y}
                          x2={toPos.x}
                          y2={toPos.y}
                          stroke={isHighlighted ? style.color : '#d4af37'}
                          strokeWidth={isHighlighted ? 3 : 1}
                          strokeDasharray={style.dash}
                          opacity={isHighlighted ? 1 : 0.4}
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                          onMouseEnter={() => setHoveredRelation(relation)}
                          onMouseLeave={() => setHoveredRelation(null)}
                          style={{ cursor: 'pointer' }}
                        />
                        
                        {/* 关系标签（在连线中点） */}
                        {isHighlighted && (
                          <text
                            x={(fromPos.x + toPos.x) / 2}
                            y={(fromPos.y + toPos.y) / 2}
                            textAnchor="middle"
                            className="font-body text-xs fill-ink"
                            style={{ pointerEvents: 'none' }}
                          >
                            {relation.description || style.label}
                          </text>
                        )}
                      </g>
                    )
                  })}
                  
                  {/* 人物节点 */}
                  {characters.map((person, index) => {
                    const pos = getPersonPosition(person.id, totalPersons)
                    const isSelected = selectedPerson === person.id
                    const isRelated = selectedPerson && getRelatedPersons(selectedPerson).includes(person.id)
                    
                    return (
                      <motion.g
                        key={person.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: isSelected ? 1.3 : isRelated ? 1.1 : 1, 
                          opacity: isSelected ? 1 : isRelated ? 0.9 : 0.6 
                        }}
                        transition={{ duration: 0.3, delay: index * 0.03 }}
                        onClick={() => setSelectedPerson(person.id)}
                        style={{ cursor: 'pointer' }}
                      >
                        {/* 节点圆形 */}
                        <circle
                          cx={pos.x}
                          cy={pos.y}
                          r={isSelected ? 25 : isRelated ? 20 : 15}
                          fill={isSelected ? '#c41e3a' : isRelated ? '#d4af37' : '#f5f0e6'}
                          stroke="#c41e3a"
                          strokeWidth={2}
                        />
                        
                        {/* 人物名称 */}
                        <text
                          x={pos.x}
                          y={pos.y + (isSelected ? 40 : 30)}
                          textAnchor="middle"
                          className="font-title"
                          fill={isSelected ? '#c41e3a' : '#333'}
                          style={{ fontSize: isSelected ? '14px' : '12px', pointerEvents: 'none' }}
                        >
                          {person.name}
                        </text>
                        
                        {/* 选中时的光环 */}
                        {isSelected && (
                          <circle
                            cx={pos.x}
                            cy={pos.y}
                            r={30}
                            fill="none"
                            stroke="#c41e3a"
                            strokeWidth={1}
                            opacity={0.3}
                            className="animate-pulse"
                          />
                        )}
                      </motion.g>
                    )
                  })}
                </svg>
                
                {/* 悬浮关系提示 - 移动端适配 */}
                {hoveredRelation && (
                  <motion.div
                    className="absolute top-2 sm:top-4 left-2 sm:left-4 px-2 sm:px-4 py-1.5 sm:py-2 bg-paper/90 rounded-lg shadow-lg border text-xs sm:text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="font-body">
                      <span className="text-cinnabar">{getPersonData(hoveredRelation.from)?.name}</span>
                      <span className="text-ink/50 mx-1 sm:mx-2">—</span>
                      <span className="text-gold">{hoveredRelation.description || relationStyles[hoveredRelation.type].label}</span>
                      <span className="text-ink/50 mx-1 sm:mx-2">—</span>
                      <span className="text-cinnabar">{getPersonData(hoveredRelation.to)?.name}</span>
                    </div>
                  </motion.div>
                )}
                
                {/* 操作提示 - 移动端适配 */}
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-center">
                  <span className="font-body text-xs text-ink/40 bg-paper/80 px-2 sm:px-3 py-0.5 sm:py-1 rounded">
                    点击人物查看关系
                  </span>
                </div>
              </div>
              
              {/* 人物详情 - 移动端改为底部弹出 */}
              <AnimatePresence>
                {selectedPerson && (
                  <motion.div
                    className="sm:w-64 sm:border-l border-t sm:border-t-0 border-cinnabar/20 bg-paper overflow-auto max-h-[35vh] sm:max-h-none"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25 }}
                  >
                    {/* 人物信息 - 移动端适配 */}
                    <div className="p-3 sm:p-4">
                      {/* 头像和名称 */}
                      <div className="flex sm:flex-col items-center sm:text-center gap-3 sm:gap-0 mb-3 sm:mb-4">
                        <motion.div
                          className="w-12 h-12 sm:w-20 sm:h-20 sm:mx-auto rounded-full bg-cover bg-center border-2 border-gold shadow-lg"
                          style={{ backgroundImage: `url("${getPersonData(selectedPerson)?.avatar}")` }}
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 1 }}
                        />
                        <div className="sm:mt-3">
                          <h3 className="font-title text-base sm:text-xl text-cinnabar">
                            {getPersonData(selectedPerson)?.name}
                          </h3>
                          <p className="font-body text-xs sm:text-sm text-ink/50">
                            {getPersonData(selectedPerson)?.title}
                          </p>
                        </div>
                        {/* 移动端关闭按钮 */}
                        <button
                          className="sm:hidden p-2 rounded-lg bg-ink/10"
                          onClick={() => setSelectedPerson(null)}
                        >
                          <svg className="w-5 h-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      
                      {/* 基本信息 */}
                      {getPersonData(selectedPerson)?.description && (
                        <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-ink/5 rounded-lg">
                          <p className="font-body text-xs sm:text-sm text-ink/70 leading-relaxed">
                            {getPersonData(selectedPerson)?.description}
                          </p>
                        </div>
                      )}
                      
                      {/* 关系列表 */}
                      <div>
                        <h4 className="font-title text-xs sm:text-sm text-ink/60 mb-2 sm:mb-3 flex items-center gap-2">
                          <span>🔗</span> 关系网络
                        </h4>
                        <div className="flex flex-wrap sm:flex-col gap-2">
                          {getRelatedRelations(selectedPerson).map((relation, i) => {
                            const otherPersonId = relation.from === selectedPerson ? relation.to : relation.from
                            const otherPerson = getPersonData(otherPersonId)
                            const style = relationStyles[relation.type]
                            
                            return (
                              <motion.button
                                key={i}
                                className="flex sm:w-full p-2 sm:p-3 rounded-lg bg-gradient-to-r from-ink/5 to-transparent 
                                  hover:from-cinnabar/10 items-center gap-2 sm:gap-3"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedPerson(otherPersonId)}
                              >
                                {/* 小头像 */}
                                <div
                                  className="w-8 h-8 rounded-full bg-cover bg-center border border-gold/30"
                                  style={{ backgroundImage: `url("${otherPerson?.avatar}")` }}
                                />
                                {/* 关系信息 */}
                                <div className="flex-1 min-w-0">
                                  <div className="font-body text-xs sm:text-sm text-ink truncate">{otherPerson?.name}</div>
                                  <div className="flex items-center gap-1 sm:gap-2 mt-0.5 sm:mt-1">
                                    <span
                                      className="px-1.5 sm:px-2 py-0.5 rounded text-xs"
                                      style={{ backgroundColor: style.color + '20', color: style.color }}
                                    >
                                      {relation.description || style.label}
                                    </span>
                                  </div>
                                </div>
                                {/* 箭头 */}
                                <svg className="w-4 h-4 text-ink/30 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </motion.button>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* 底部说明 - 移动端适配 */}
            <div className="px-3 sm:px-6 py-2 sm:py-3 bg-ink/5 border-t border-ink/10">
              <div className="flex justify-between items-center gap-2">
                <span className="font-body text-xs text-ink/40 truncate">
                  💡 人物关系图谱帮助理解角色关系
                </span>
                {selectedPerson && (
                  <button
                    className="px-2 sm:px-3 py-1 bg-cinnabar/10 rounded text-xs font-body text-cinnabar hover:bg-cinnabar/20"
                    onClick={() => setSelectedPerson(null)}
                  >
                    清除
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PersonRelationGraph