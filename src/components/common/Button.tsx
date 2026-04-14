import React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'gold'
  disabled?: boolean
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
}) => {
  const baseStyles = 'px-6 py-3 text-lg font-title rounded-lg transition-all duration-300 cursor-pointer'
  
  const variantStyles = {
    primary: 'border-2 border-cinnabar bg-paper text-cinnabar hover:bg-cinnabar hover:text-paper',
    secondary: 'border-2 border-ink/30 bg-paper text-ink hover:border-ink/50',
    gold: 'border-2 border-gold bg-paper text-gold hover:bg-gold hover:text-paper',
  }
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : ''
  
  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${disabledStyles} ${className}`}
      onClick={disabled ? undefined : onClick}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}

export default Button