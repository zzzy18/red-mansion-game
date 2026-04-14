import React from 'react'
import { motion } from 'framer-motion'

interface SliderProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  label?: string
  showValue?: boolean
}

export const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  label,
  showValue = true,
}) => {
  const percentage = ((value - min) / (max - min)) * 100
  
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between mb-2">
          <span className="font-body text-ink">{label}</span>
          {showValue && (
            <span className="font-body text-ink/70">{Math.round(value * 100)}%</span>
          )}
        </div>
      )}
      
      <div className="relative h-8 flex items-center">
        {/* 背景轨道 */}
        <div className="absolute w-full h-2 bg-ink/20 rounded-full" />
        
        {/* 已填充部分 */}
        <motion.div
          className="absolute h-2 bg-cinnabar rounded-full"
          style={{ width: `${percentage}%` }}
          layout
        />
        
        {/* 滑块 */}
        <motion.input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="absolute w-full h-2 opacity-0 cursor-pointer"
          style={{ zIndex: 10 }}
        />
        
        {/* 滑块指示器 */}
        <motion.div
          className="w-4 h-4 bg-gold rounded-full shadow-md border-2 border-paper"
          style={{ left: `calc(${percentage}% - 8px)` }}
          whileHover={{ scale: 1.2 }}
          layout
        />
      </div>
    </div>
  )
}

export default Slider