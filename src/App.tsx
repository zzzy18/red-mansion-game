import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import TitleScreen from './screens/TitleScreen'
import CharacterSelect from './screens/CharacterSelect'
import GameScreen from './screens/GameScreen'
import EndingScreen from './screens/EndingScreen'
import ReadingScreen from './screens/ReadingScreen'
import LoadingScreen from './components/game/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasPreloaded, setHasPreloaded] = useState(false)

  // 确保只在首次加载时显示 LoadingScreen
  useEffect(() => {
    // 可以存储预加载状态到 sessionStorage
    const preloaded = sessionStorage.getItem('preloaded')
    if (preloaded === 'true') {
      setIsLoading(false)
      setHasPreloaded(true)
    }
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setHasPreloaded(true)
    sessionStorage.setItem('preloaded', 'true')
  }

  return (
    <div className="w-full h-full bg-paper overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && !hasPreloaded && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
      
      {!isLoading && (
        <Routes>
          <Route path="/" element={<TitleScreen />} />
          <Route path="/select" element={<CharacterSelect />} />
          <Route path="/game" element={<GameScreen />} />
          <Route path="/read" element={<ReadingScreen />} />
          <Route path="/ending" element={<EndingScreen />} />
        </Routes>
      )}
    </div>
  )
}

export default App