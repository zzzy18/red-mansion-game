/**
 * 图片预加载服务
 * 用于预先加载游戏中需要的所有图片资源
 */

interface PreloadProgress {
  total: number
  loaded: number
  failed: number
  percentage: number
}

type ProgressCallback = (progress: PreloadProgress) => void
type CompleteCallback = () => void

class ImagePreloader {
  private images: Map<string, HTMLImageElement> = new Map()
  private loadingStatus: Map<string, 'pending' | 'loading' | 'loaded' | 'failed'> = new Map()
  // private preloadQueue: string[] = [] // 保留用于未来扩展
  private totalImages: number = 0
  private loadedCount: number = 0
  private failedCount: number = 0
  private progressCallbacks: ProgressCallback[] = []
  private completeCallbacks: CompleteCallback[] = []
  private isPreloading: boolean = false

  /**
   * 获取所有需要预加载的图片路径
   */
  private getAllImagePaths(): string[] {
    const paths: string[] = []
    
    // 背景图片
    const backgrounds = [
      '/assets/images/backgrounds/daguanyuan_full.webp',
      '/assets/images/backgrounds/xiaoxiang_guan_day.webp',
      '/assets/images/backgrounds/yihong_yuan_day.webp',
      '/assets/images/backgrounds/hengwu_yuan_day.webp',
    ]
    paths.push(...backgrounds)
    
    // 角色立绘
    const characters = [
      'daiyu', 'baoyu', 'baochai', 'xifeng', 'xiangyun', 'tanchun'
    ]
    const expressions = ['normal', 'happy', 'sad', 'thinking', 'surprised', 'shy']
    
    characters.forEach(char => {
      expressions.forEach(expr => {
        paths.push(`/assets/images/characters/${char}_${expr}.webp`)
      })
    })
    
    // 只加载存在的图片（normal 表情肯定存在）
    const existingPaths: string[] = []
    characters.forEach(char => {
      existingPaths.push(`/assets/images/characters/${char}_normal.webp`)
    })
    
    return [...backgrounds, ...existingPaths]
  }

  /**
   * 添加进度回调
   */
  onProgress(callback: ProgressCallback): void {
    this.progressCallbacks.push(callback)
  }

  /**
   * 添加完成回调
   */
  onComplete(callback: CompleteCallback): void {
    this.completeCallbacks.push(callback)
  }

  /**
   * 移除回调
   */
  removeCallbacks(): void {
    this.progressCallbacks = []
    this.completeCallbacks = []
  }

  /**
   * 触发进度更新
   */
  private notifyProgress(): void {
    const progress: PreloadProgress = {
      total: this.totalImages,
      loaded: this.loadedCount,
      failed: this.failedCount,
      percentage: Math.round((this.loadedCount / this.totalImages) * 100),
    }
    this.progressCallbacks.forEach(cb => cb(progress))
  }

  /**
   * 触发完成
   */
  private notifyComplete(): void {
    this.completeCallbacks.forEach(cb => cb())
  }

  /**
   * 加载单个图片
   */
  private loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve) => {
      // 如果已经加载，直接返回
      if (this.loadingStatus.get(src) === 'loaded') {
        resolve(this.images.get(src)!)
        return
      }

      const img = new Image()
      
      img.onload = () => {
        this.images.set(src, img)
        this.loadingStatus.set(src, 'loaded')
        this.loadedCount++
        this.notifyProgress()
        resolve(img)
      }
      
      img.onerror = () => {
        this.loadingStatus.set(src, 'failed')
        this.failedCount++
        this.notifyProgress()
        // 即使失败也继续，使用占位图
        resolve(img)
      }
      
      img.src = src
    })
  }

  /**
   * 开始预加载所有图片
   */
  async preloadAll(): Promise<void> {
    if (this.isPreloading) {
      return
    }
    
    this.isPreloading = true
    this.loadedCount = 0
    this.failedCount = 0
    
    const paths = this.getAllImagePaths()
    this.totalImages = paths.length
    
    // 标记所有图片为 pending
    paths.forEach(path => {
      this.loadingStatus.set(path, 'pending')
    })
    
    this.notifyProgress()
    
    // 并行加载所有图片
    await Promise.all(paths.map(path => this.loadImage(path)))
    
    this.isPreloading = false
    this.notifyComplete()
  }

  /**
   * 检查图片是否已加载
   */
  isLoaded(src: string): boolean {
    return this.loadingStatus.get(src) === 'loaded'
  }

  /**
   * 检查图片是否加载失败
   */
  isFailed(src: string): boolean {
    return this.loadingStatus.get(src) === 'failed'
  }

  /**
   * 获取已加载的图片元素
   */
  getImage(src: string): HTMLImageElement | undefined {
    return this.images.get(src)
  }

  /**
   * 获取当前进度
   */
  getProgress(): PreloadProgress {
    return {
      total: this.totalImages,
      loaded: this.loadedCount,
      failed: this.failedCount,
      percentage: Math.round((this.loadedCount / this.totalImages) * 100),
    }
  }

  /**
   * 预加载特定图片（按需加载）
   */
  async preloadImage(src: string): Promise<boolean> {
    try {
      await this.loadImage(src)
      return this.isLoaded(src)
    } catch {
      return false
    }
  }

  /**
   * 清除缓存
   */
  clearCache(): void {
    this.images.clear()
    this.loadingStatus.clear()
    this.totalImages = 0
    this.loadedCount = 0
    this.failedCount = 0
  }
}

// 导出单例实例
export const imagePreloader = new ImagePreloader()

// 导出类型
export type { PreloadProgress }