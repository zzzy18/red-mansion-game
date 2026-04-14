/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 红楼梦主题色彩
        'cinnabar': '#C41E3A',      // 朱红
        'gold': '#D4AF37',          // 金色
        'paper': '#F5F0E6',         // 古宣纸色
        'ink': '#1A1A1A',           // 墨色
        'jade': '#00A86B',          // 翡翠绿
        'azure': '#007BA7',         // 青蓝
      },
      fontFamily: {
        'title': ['STXingkai', 'FZShuTi', 'serif'],  // 标题字体
        'body': ['SimSun', 'SourceHanSerifCN', 'serif'],  // 正文字体
      },
      backgroundImage: {
        'paper-texture': 'url("/assets/images/ui/paper-texture.png")',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'typewriter': 'typewriter 0.05s steps(1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}