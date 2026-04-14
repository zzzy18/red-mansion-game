import { Scene, SCENE_IDS } from '../../types'

// 潇湘馆 - 林黛玉居所
export const xiaoxiangGuan: Scene = {
  id: SCENE_IDS.XIAOXIANG_GUAN,
  name: '潇湘馆',
  fullName: '潇湘馆 · 林黛玉居所',
  description: '大观园西区，竹林环绕，幽静雅致。林黛玉在此居住，常于此处读书吟诗。',
  background: {
    day: '/assets/images/backgrounds/xiaoxiang_guan_day.png',
    night: '/assets/images/backgrounds/xiaoxiang_guan_day.png',
  },
  bgm: 'bgm_xiaoxiang',
  ambientSounds: [
    { id: 'bamboo_wind', volume: 0.3, loop: true },
    { id: 'bird_song', volume: 0.2, loop: true },
  ],
  availableTime: ['morning', 'afternoon', 'evening', 'night'],
  connectedScenes: [SCENE_IDS.YIHONG_YUAN, SCENE_IDS.HENGWU_YUAN],
  npcs: ['daiyu'],
}

// 怡红院 - 贾宝玉居所
export const yihongYuan: Scene = {
  id: SCENE_IDS.YIHONG_YUAN,
  name: '怡红院',
  fullName: '怡红院 · 贾宝玉居所',
  description: '大观园中区，花木繁盛，热闹非凡。贾宝玉在此居住，常有丫鬟陪伴。',
  background: {
    day: '/assets/images/backgrounds/yihong_yuan_day.png',
    night: '/assets/images/backgrounds/yihong_yuan_day.png',
  },
  bgm: 'bgm_yihong',
  ambientSounds: [
    { id: 'flower_breeze', volume: 0.3, loop: true },
  ],
  availableTime: ['morning', 'afternoon', 'evening', 'night'],
  connectedScenes: [SCENE_IDS.XIAOXIANG_GUAN, SCENE_IDS.HENGWU_YUAN, SCENE_IDS.QIUUSHUANG_ZHAI],
  npcs: ['baoyu'],
}

// 蘅芜苑 - 薛宝钗居所
export const hengwuYuan: Scene = {
  id: SCENE_IDS.HENGWU_YUAN,
  name: '蘅芜苑',
  fullName: '蘅芜苑 · 薛宝钗居所',
  description: '大观园东区，香草满园，清幽雅致。薛宝钗在此居住，常于此处读书绣花。',
  background: {
    day: '/assets/images/backgrounds/hengwu_yuan_day.png',
    night: '/assets/images/backgrounds/hengwu_yuan_day.png',
  },
  bgm: 'bgm_hengwu',
  ambientSounds: [
    { id: 'herb_scent', volume: 0.2, loop: true },
  ],
  availableTime: ['morning', 'afternoon', 'evening', 'night'],
  connectedScenes: [SCENE_IDS.YIHONG_YUAN, SCENE_IDS.XIAOXIANG_GUAN],
  npcs: ['baochai'],
}

// 秋爽斋 - 探春居所（使用怡红院背景作为临时占位）
export const qiushuangZhai: Scene = {
  id: SCENE_IDS.QIUUSHUANG_ZHAI,
  name: '秋爽斋',
  fullName: '秋爽斋 · 探春居所',
  description: '大观园南区，宽敞明亮，视野开阔。探春在此居住，常于此处处理家务。',
  background: {
    day: '/assets/images/backgrounds/yihong_yuan_day.png',
    night: '/assets/images/backgrounds/yihong_yuan_day.png',
  },
  bgm: 'bgm_qiushuang',
  ambientSounds: [],
  availableTime: ['morning', 'afternoon'],
  connectedScenes: [SCENE_IDS.YIHONG_YUAN, SCENE_IDS.RUIGUAN],
  npcs: ['tanchun'],
}

// 荣庆堂 - 荣国府正堂
export const ruiguan: Scene = {
  id: SCENE_IDS.RUIGUAN,
  name: '荣庆堂',
  fullName: '荣庆堂 · 荣国府正堂',
  description: '荣国府主建筑，庄严肃穆，用于家宴祭祀、请安等重要场合。',
  background: {
    day: '/assets/images/backgrounds/daguanyuan_full.png',
    night: '/assets/images/backgrounds/daguanyuan_full.png',
  },
  bgm: 'bgm_main_hall',
  ambientSounds: [],
  availableTime: ['morning', 'afternoon', 'evening'],
  connectedScenes: [SCENE_IDS.YIHONG_YUAN, SCENE_IDS.QIUUSHUANG_ZHAI],
  npcs: ['xifeng'],
}

// 花冢 - 葬花之地
export const huazhong: Scene = {
  id: SCENE_IDS.HUAZHONG,
  name: '花冢',
  fullName: '花冢 · 大观园角落',
  description: '大观园偏僻角落，花落之处。黛玉常于此处葬花吟诗。',
  background: {
    day: '/assets/images/backgrounds/xiaoxiang_guan_day.png',
    night: '/assets/images/backgrounds/xiaoxiang_guan_day.png',
  },
  bgm: 'bgm_sad',
  ambientSounds: [
    { id: 'flower_drop', volume: 0.2, loop: true },
  ],
  availableTime: ['morning', 'afternoon'],
  connectedScenes: [SCENE_IDS.XIAOXIANG_GUAN],
  npcs: ['daiyu'],
}

// 藕香榭 - 水上亭榭
export const ouxiangXie: Scene = {
  id: SCENE_IDS.OUXIANG_XIE,
  name: '藕香榭',
  fullName: '藕香榭 · 水上亭榭',
  description: '大观园水域，荷花环绕，风景秀丽。中秋诗会常于此处举办。',
  background: {
    day: '/assets/images/backgrounds/daguanyuan_full.png',
    night: '/assets/images/backgrounds/daguanyuan_full.png',
  },
  bgm: 'bgm_poetry',
  ambientSounds: [
    { id: 'water_flow', volume: 0.3, loop: true },
  ],
  availableTime: ['evening', 'night'],
  connectedScenes: [SCENE_IDS.YIHONG_YUAN],
  npcs: [],
}

// 导出所有场景
export const scenes: Scene[] = [
  xiaoxiangGuan,
  yihongYuan,
  hengwuYuan,
  qiushuangZhai,
  ruiguan,
  huazhong,
  ouxiangXie,
]

// 根据ID获取场景
export function getSceneById(id: string): Scene | undefined {
  return scenes.find(s => s.id === id)
}