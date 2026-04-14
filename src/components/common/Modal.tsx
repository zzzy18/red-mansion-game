import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './Button'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  footer?: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* 背景遮罩 */}
          <motion.div
            className="absolute inset-0 bg-ink/50"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          {/* 模态框内容 */}
          <motion.div
            className="relative bg-paper border-2 border-gold rounded-lg shadow-2xl max-w-md w-full mx-4 p-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.3 }}
          >
            {/* 标题 */}
            {title && (
              <div className="text-center mb-4">
                <h2 className="font-title text-2xl text-cinnabar">{title}</h2>
                <div className="w-24 h-1 bg-gold mx-auto mt-2" />
              </div>
            )}
            
            {/* 内容 */}
            <div className="mb-4 font-body text-ink">
              {children}
            </div>
            
            {/* 底部 */}
            {footer && (
              <div className="flex justify-center gap-4 mt-6">
                {footer}
              </div>
            )}
            
            {/* 关闭按钮 */}
            <button
              className="absolute top-4 right-4 text-ink/50 hover:text-ink transition-colors"
              onClick={onClose}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface ConfirmModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title?: string
  message: string
  confirmText?: string
  cancelText?: string
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = '确认',
  message,
  confirmText = '确定',
  cancelText = '取消',
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            {cancelText}
          </Button>
          <Button variant="primary" onClick={onConfirm}>
            {confirmText}
          </Button>
        </>
      }
    >
      <p className="text-center">{message}</p>
    </Modal>
  )
}

export default Modal