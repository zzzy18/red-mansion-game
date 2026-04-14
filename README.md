# 红楼梦体验游戏

一款基于中国古典名著《红楼梦》改编的文字冒险/视觉小说类型Web游戏。

## 安装与运行

### 1. 安装 Node.js

首先需要安装 Node.js（版本 18+）：

- 下载地址：https://nodejs.org/
- 或使用 winget 安装：`winget install OpenJS.NodeJS`

### 2. 安装依赖

```bash
cd d:\harmonyDev\red-mansion-game
npm install
```

### 3. 运行开发服务器

```bash
npm run dev
```

游戏将在 http://localhost:3000 启动。

### 4. 构建生产版本

```bash
npm run build
npm run preview
```

## 项目结构

```
red-mansion-game/
├── public/
│   └── assets/           # 图片、音频等资源
├── src/
│   ├── core/             # 核心系统（引擎、状态管理）
│   ├── data/             # 游戏数据（角色、剧情、场景）
│   ├── components/       # UI组件
│   ├── screens/          # 游戏界面
│   ├── types/            # TypeScript类型定义
│   └── styles/           # 样式文件
└── package.json
```

## 可选角色

- 贾宝玉 - 怡红公子
- 林黛玉 - 潇湘妃子
- 薛宝钗 - 蘅芜君
- 王熙凤 - 凤辣子
- 史湘云 - 枕霞旧友
- 贾探春 - 蕉下客

## 核心功能

- 角色选择系统
- 多分支剧情
- 打字机对话效果
- 存档/读档系统
- 音频管理
- 设置自定义

## 添加美术资源

游戏需要以下资源文件（放入 public/assets/ 目录）：

### 背景图片 (images/backgrounds/)
- xiaoxiang_guan_day.png - 潇湘馆日景
- yihong_yuan_day.png - 怡红院日景
- hengwu_yuan_day.png - 蘅芜苑日景
- 其他场景...

### 角色立绘 (images/characters/)
- baoyu_normal.png, baoyu_happy.png 等
- daiyu_normal.png, daiyu_happy.png 等
- 其他角色...

### 音频 (audio/)
- bgm_main.mp3 - 主背景音乐
- bgm_xiaoxiang.mp3 - 潇湘馆背景音乐
- sfx_click.mp3 - 点击音效

## 技术栈

- React 18 + TypeScript
- Zustand (状态管理)
- Tailwind CSS + Framer Motion
- Vite (构建工具)
- idb-keyval (本地存档)