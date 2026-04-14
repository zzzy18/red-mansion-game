import { Character, CHARACTER_IDS } from '../../types'

// 贾宝玉
export const baoyu: Character = {
  id: CHARACTER_IDS.BAOYU,
  name: '贾宝玉',
  title: '怡红公子',
  description: '荣国府贾政次子，衔玉而生，性情温和，喜好诗词歌赋，厌恶功名利禄。与林黛玉青梅竹马，情投意合。',
  portrait: {
    normal: '/assets/images/characters/baoyu_normal.png',
    happy: '/assets/images/characters/baoyu_normal.png',
    sad: '/assets/images/characters/baoyu_normal.png',
    angry: '/assets/images/characters/baoyu_normal.png',
    surprised: '/assets/images/characters/baoyu_normal.png',
    shy: '/assets/images/characters/baoyu_normal.png',
    thinking: '/assets/images/characters/baoyu_normal.png',
  },
  avatar: '/assets/images/characters/baoyu_normal.png',
  stats: {
    beauty: 85,
    talent: 90,
    health: 60,
    fortune: 70,
    reputation: 80,
  },
  skills: {
    poetry: 85,
    needlework: 10,
    music: 70,
    management: 20,
    medicine: 30,
  },
  storylines: ['main_baoyu', 'love_daiyu', 'love_baochai'],
  relationships: [
    { targetId: CHARACTER_IDS.DAIYU, initialValue: 80, description: '青梅竹马，情深意重' },
    { targetId: CHARACTER_IDS.BAOCHAI, initialValue: 50, description: '金玉之缘，相敬如宾' },
    { targetId: CHARACTER_IDS.XIFENG, initialValue: 40, description: '姐嫂关系' },
    { targetId: CHARACTER_IDS.XIANGYUN, initialValue: 60, description: '知己好友' },
    { targetId: CHARACTER_IDS.TANCHUN, initialValue: 50, description: '同父异母兄妹' },
  ],
}

// 林黛玉
export const daiyu: Character = {
  id: CHARACTER_IDS.DAIYU,
  name: '林黛玉',
  title: '潇湘妃子',
  description: '林如海之女，贾母外孙女，寄居荣国府。聪慧敏感，才情出众，诗词歌赋皆精。与宝玉情投意合，却因体弱多病而命运多舛。',
  portrait: {
    normal: '/assets/images/characters/daiyu_normal.png',
    happy: '/assets/images/characters/daiyu_normal.png',
    sad: '/assets/images/characters/daiyu_normal.png',
    angry: '/assets/images/characters/daiyu_normal.png',
    surprised: '/assets/images/characters/daiyu_normal.png',
    shy: '/assets/images/characters/daiyu_normal.png',
    thinking: '/assets/images/characters/daiyu_normal.png',
  },
  avatar: '/assets/images/characters/daiyu_normal.png',
  stats: {
    beauty: 95,
    talent: 100,
    health: 30,
    fortune: 20,
    reputation: 70,
  },
  skills: {
    poetry: 100,
    needlework: 40,
    music: 90,
    management: 10,
    medicine: 20,
  },
  storylines: ['main_daiyu', 'love_baoyu', 'tragedy'],
  relationships: [
    { targetId: CHARACTER_IDS.BAOYU, initialValue: 90, description: '情深意重，两心相许' },
    { targetId: CHARACTER_IDS.BAOCHAI, initialValue: 30, description: '金玉之争，心存芥蒂' },
    { targetId: CHARACTER_IDS.XIANGYUN, initialValue: 50, description: '诗社好友' },
    { targetId: CHARACTER_IDS.TANCHUN, initialValue: 40, description: '诗社成员' },
  ],
}

// 薛宝钗
export const baochai: Character = {
  id: CHARACTER_IDS.BAOCHAI,
  name: '薛宝钗',
  title: '蘅芜君',
  description: '薛姨妈之女，薛蟠之妹，入住荣国府。端庄贤淑，处事圆融，识大体顾大局。金锁与宝玉之玉相配，是为"金玉良缘"。',
  portrait: {
    normal: '/assets/images/characters/baochai_normal.png',
    happy: '/assets/images/characters/baochai_normal.png',
    sad: '/assets/images/characters/baochai_normal.png',
    angry: '/assets/images/characters/baochai_normal.png',
    surprised: '/assets/images/characters/baochai_normal.png',
    shy: '/assets/images/characters/baochai_normal.png',
    thinking: '/assets/images/characters/baochai_normal.png',
  },
  avatar: '/assets/images/characters/baochai_normal.png',
  stats: {
    beauty: 90,
    talent: 85,
    health: 80,
    fortune: 60,
    reputation: 90,
  },
  skills: {
    poetry: 80,
    needlework: 70,
    music: 60,
    management: 70,
    medicine: 50,
  },
  storylines: ['main_baochai', 'marriage', 'family'],
  relationships: [
    { targetId: CHARACTER_IDS.BAOYU, initialValue: 60, description: '金玉之缘' },
    { targetId: CHARACTER_IDS.DAIYU, initialValue: 40, description: '知己姐妹' },
    { targetId: CHARACTER_IDS.XIFENG, initialValue: 60, description: '表姐妹' },
    { targetId: CHARACTER_IDS.XIANGYUN, initialValue: 60, description: '好友' },
  ],
}

// 王熙凤
export const xifeng: Character = {
  id: CHARACTER_IDS.XIFENG,
  name: '王熙凤',
  title: '凤辣子',
  description: '王夫人侄女，贾琏之妻，荣府管家。精明强干，泼辣果敢，善于理财管家。掌管荣府家务，权倾一时。',
  portrait: {
    normal: '/assets/images/characters/xifeng_normal.png',
    happy: '/assets/images/characters/xifeng_normal.png',
    sad: '/assets/images/characters/xifeng_normal.png',
    angry: '/assets/images/characters/xifeng_normal.png',
    surprised: '/assets/images/characters/xifeng_normal.png',
    shy: '/assets/images/characters/xifeng_normal.png',
    thinking: '/assets/images/characters/xifeng_normal.png',
  },
  avatar: '/assets/images/characters/xifeng_normal.png',
  stats: {
    beauty: 80,
    talent: 60,
    health: 50,
    fortune: 70,
    reputation: 60,
  },
  skills: {
    poetry: 40,
    needlework: 30,
    music: 30,
    management: 100,
    medicine: 20,
  },
  storylines: ['main_xifeng', 'management', 'power'],
  relationships: [
    { targetId: CHARACTER_IDS.BAOYU, initialValue: 50, description: '姐嫂关系' },
    { targetId: CHARACTER_IDS.DAIYU, initialValue: 30, description: '表姑嫂' },
    { targetId: CHARACTER_IDS.BAOCHAI, initialValue: 60, description: '表姐妹' },
    { targetId: CHARACTER_IDS.TANCHUN, initialValue: 70, description: '姑嫂' },
  ],
}

// 史湘云
export const xiangyun: Character = {
  id: CHARACTER_IDS.XIANGYUN,
  name: '史湘云',
  title: '枕霞旧友',
  description: '史侯家之女，贾母侄孙女，寄居贾府。性格豪爽，不拘小节，才情出众。与宝玉、黛玉等为诗社好友。',
  portrait: {
    normal: '/assets/images/characters/xiangyun_normal.png',
    happy: '/assets/images/characters/xiangyun_normal.png',
    sad: '/assets/images/characters/xiangyun_normal.png',
    angry: '/assets/images/characters/xiangyun_normal.png',
    surprised: '/assets/images/characters/xiangyun_normal.png',
    shy: '/assets/images/characters/xiangyun_normal.png',
    thinking: '/assets/images/characters/xiangyun_normal.png',
  },
  avatar: '/assets/images/characters/xiangyun_normal.png',
  stats: {
    beauty: 75,
    talent: 85,
    health: 60,
    fortune: 30,
    reputation: 60,
  },
  skills: {
    poetry: 85,
    needlework: 20,
    music: 50,
    management: 30,
    medicine: 10,
  },
  storylines: ['main_xiangyun', 'poetry', 'friendship'],
  relationships: [
    { targetId: CHARACTER_IDS.BAOYU, initialValue: 70, description: '知己好友' },
    { targetId: CHARACTER_IDS.DAIYU, initialValue: 50, description: '诗社姐妹' },
    { targetId: CHARACTER_IDS.BAOCHAI, initialValue: 60, description: '好友' },
  ],
}

// 贾探春
export const tanchun: Character = {
  id: CHARACTER_IDS.TANCHUN,
  name: '贾探春',
  title: '蕉下客',
  description: '贾政庶出之女，贾宝玉庶妹。精明能干，志向高远，善于管家理财。虽为庶出，却不甘命运，欲振兴家族。',
  portrait: {
    normal: '/assets/images/characters/tanchun_normal.png',
    happy: '/assets/images/characters/tanchun_normal.png',
    sad: '/assets/images/characters/tanchun_normal.png',
    angry: '/assets/images/characters/tanchun_normal.png',
    surprised: '/assets/images/characters/tanchun_normal.png',
    shy: '/assets/images/characters/tanchun_normal.png',
    thinking: '/assets/images/characters/tanchun_normal.png',
  },
  avatar: '/assets/images/characters/tanchun_normal.png',
  stats: {
    beauty: 70,
    talent: 80,
    health: 70,
    fortune: 40,
    reputation: 50,
  },
  skills: {
    poetry: 75,
    needlework: 50,
    music: 40,
    management: 85,
    medicine: 30,
  },
  storylines: ['main_tanchun', 'reform', 'far_marriage'],
  relationships: [
    { targetId: CHARACTER_IDS.BAOYU, initialValue: 50, description: '兄妹' },
    { targetId: CHARACTER_IDS.DAIYU, initialValue: 40, description: '诗社成员' },
    { targetId: CHARACTER_IDS.XIFENG, initialValue: 70, description: '姑嫂' },
  ],
}

// 导出所有角色
export const characters: Character[] = [
  baoyu,
  daiyu,
  baochai,
  xifeng,
  xiangyun,
  tanchun,
]

// 根据ID获取角色
export function getCharacterById(id: string): Character | undefined {
  return characters.find(c => c.id === id)
}