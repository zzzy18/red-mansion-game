import React from 'react'
import { motion } from 'framer-motion'
import { Modal } from '../common/Modal'
import { Slider } from '../common/Slider'
import { Button } from '../common/Button'
import { useSettingsStore } from '../../core/state/settingsStore'

interface SettingsProps {
  isOpen: boolean
  onClose: () => void
}

export const Settings: React.FC<SettingsProps> = ({
  isOpen,
  onClose,
}) => {
  const settings = useSettingsStore()
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="游戏设置">
      <div className="space-y-6">
        {/* 音频设置 */}
        <div className="border-b border-ink/20 pb-4">
          <h3 className="font-title text-lg text-cinnabar mb-4">音频设置</h3>
          <div className="space-y-4">
            <Slider
              label="背景音乐"
              value={settings.bgmVolume}
              onChange={settings.setBgmVolume}
            />
            <Slider
              label="音效"
              value={settings.sfxVolume}
              onChange={settings.setSfxVolume}
            />
            <Slider
              label="语音"
              value={settings.voiceVolume}
              onChange={settings.setVoiceVolume}
            />
          </div>
        </div>
        
        {/* 显示设置 */}
        <div className="border-b border-ink/20 pb-4">
          <h3 className="font-title text-lg text-cinnabar mb-4">显示设置</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-body text-ink">文字速度</span>
              <div className="flex gap-2">
                {(['slow', 'normal', 'fast', 'instant'] as const).map((speed) => (
                  <button
                    key={speed}
                    className={`px-3 py-1 rounded font-body text-sm ${
                      settings.textSpeed === speed
                        ? 'bg-cinnabar text-paper'
                        : 'bg-ink/10 text-ink hover:bg-ink/20'
                    }`}
                    onClick={() => settings.setTextSpeed(speed)}
                  >
                    {getSpeedLabel(speed)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="font-body text-ink">字体大小</span>
              <div className="flex gap-2">
                {(['small', 'normal', 'large'] as const).map((size) => (
                  <button
                    key={size}
                    className={`px-3 py-1 rounded font-body text-sm ${
                      settings.fontSize === size
                        ? 'bg-cinnabar text-paper'
                        : 'bg-ink/10 text-ink hover:bg-ink/20'
                    }`}
                    onClick={() => settings.setFontSize(size)}
                  >
                    {getSizeLabel(size)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="font-body text-ink">自动进阶延迟</span>
              <select
                className="px-3 py-1 rounded font-body bg-ink/10 text-ink border-none"
                value={settings.autoDelay}
                onChange={(e) => settings.setAutoDelay(parseInt(e.target.value))}
              >
                <option value={1000}>1秒</option>
                <option value={2000}>2秒</option>
                <option value={3000}>3秒</option>
                <option value={5000}>5秒</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* 游戏设置 */}
        <div>
          <h3 className="font-title text-lg text-cinnabar mb-4">游戏设置</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-body text-ink">自动存档</span>
              <ToggleSwitch
                checked={settings.autoSave}
                onChange={settings.setAutoSave}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="font-body text-ink">跳过已读文本</span>
              <ToggleSwitch
                checked={settings.skipRead}
                onChange={settings.setSkipRead}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="font-body text-ink">未读提示</span>
              <ToggleSwitch
                checked={settings.showUnreadIndicator}
                onChange={settings.setShowUnreadIndicator}
              />
            </div>
          </div>
        </div>
        
        {/* 恢复默认 */}
        <div className="text-center pt-4">
          <Button variant="secondary" onClick={settings.resetSettings}>
            恢复默认设置
          </Button>
        </div>
      </div>
    </Modal>
  )
}

// 速度标签
function getSpeedLabel(speed: string): string {
  const labels: Record<string, string> = {
    slow: '慢',
    normal: '中',
    fast: '快',
    instant: '瞬间',
  }
  return labels[speed] || speed
}

// 大小标签
function getSizeLabel(size: string): string {
  const labels: Record<string, string> = {
    small: '小',
    normal: '中',
    large: '大',
  }
  return labels[size] || size
}

// 开关组件
interface ToggleSwitchProps {
  checked: boolean
  onChange: (value: boolean) => void
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => {
  return (
    <motion.button
      className={`w-12 h-6 rounded-full ${
        checked ? 'bg-cinnabar' : 'bg-ink/20'
      } relative`}
      onClick={() => onChange(!checked)}
    >
      <motion.div
        className="w-5 h-5 bg-paper rounded-full absolute top-0.5"
        animate={{ left: checked ? 6.5 : 0.5 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </motion.button>
  )
}

export default Settings