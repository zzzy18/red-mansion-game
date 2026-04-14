import { StoryNode, StoryChapter } from '../../types'

// 第六章：大观园建成（第十七-十八回）
// 主题：元春省亲，大观园建成，众姐妹入住

const chapter6Start: StoryNode = {
  id: 'chapter6_start',
  type: 'narrative',
  chapter: 6,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【第六章：大观园建成】' },
    { text: '话说贾政之女贾元春，因才德兼备，被选入宫中，后晋封为贵妃。' },
    { text: '皇帝恩准元春回家省亲，贾府为此大兴土木，建造一座豪华园林，名为"大观园"。' },
    { text: '这大观园占地广阔，亭台楼阁、山水花木，极尽奢华，耗时一年方才建成。' },
    { text: '💡 大观园是红楼梦后半部的主要场景。众姐妹入住后，这里成为她们生活、吟诗作对的场所，也是全书最美好的时光所在。' },
  ],
  nextNodeId: 'chapter6_garden_intro',
}

const chapter6GardenIntro: StoryNode = {
  id: 'chapter6_garden_intro',
  type: 'narrative',
  chapter: 6,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【大观园概貌】' },
    { text: '大观园内有多处精美院落：' },
    { text: '• 潇湘馆：竹林环绕，清幽雅致，林黛玉居所' },
    { text: '• 怡红院：花木繁盛，热闹非凡，贾宝玉居所' },
    { text: '• 蘅芜苑：香草满园，淡雅素净，薛宝钗居所' },
    { text: '• 稻香村：田园风格，简朴清静，李纨居所' },
    { text: '• 秋爽斋：宽敞明亮，贾探春居所' },
    { text: '• 栊翠庵：幽静佛堂，妙玉修行之所' },
    { text: '💡 每处院落都与主人的性格相呼应。潇湘馆的竹林映衬黛玉的清高，怡红院的花木映衬宝玉的热情，蘅芜苑的香草映衬宝钗的稳重。' },
  ],
  nextNodeId: 'chapter6_yuanchun_visit',
}

const chapter6YuanchunVisit: StoryNode = {
  id: 'chapter6_yuanchun_visit',
  type: 'narrative',
  chapter: 6,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '【元春省亲】' },
    { text: '元宵佳节，元春贵妃乘轿回府省亲。贾府上下张灯结彩，隆重迎接。' },
    { text: '元春入园游览，见园中景致优美，题名"大观园"，并赐名各处院落。' },
    { text: '她与众亲人相见，不免感慨万千。虽身为贵妃，却也难掩思乡之情。' },
    { text: '元春叮嘱宝玉要用心读书，不可荒废学业。又与众姐妹叙话，气氛一时温馨。' },
    { text: '💡 元春省亲是贾府荣耀的顶峰。但元春在宫中并不如意，她曾说"送我到那见不得人的去处"。这暗示了宫廷生活的孤寂与无奈。' },
  ],
  nextNodeId: 'chapter6_move_in',
}

const chapter6MoveIn: StoryNode = {
  id: 'chapter6_move_in',
  type: 'narrative',
  chapter: 6,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【众姐妹入住】' },
    { text: '省亲之后，贾母命宝玉与众姐妹搬入大观园居住，以免园中冷落。' },
    { text: '宝玉选择了怡红院，黛玉选择了潇湘馆，宝钗选择了蘅芜苑。' },
    { text: '探春住秋爽斋，迎春住缀锦楼，惜春住藕香榭，李纨住稻香村。' },
    { text: '妙玉则住在栊翠庵，虽不是贾府中人，却也入园修行。' },
    { text: '💡 众姐妹入住大观园，开启了红楼梦最美好的时光。这一年多里，她们吟诗作对、赏花游园，度过了青春最灿烂的日子。' },
  ],
  nextNodeId: 'chapter6_daily_life',
}

const chapter6DailyLife: StoryNode = {
  id: 'chapter6_daily_life',
  type: 'narrative',
  chapter: 6,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【园中生活】' },
    { text: '入住大观园后，众人的生活变得丰富多彩。' },
    { text: '宝玉每日与众姐妹游玩，或读书写字，或吟诗作对，日子过得逍遥自在。' },
    { text: '黛玉常在潇湘馆抚琴读书，或在园中漫步赏花。她与宝玉往来密切，两心相悦。' },
    { text: '宝钗在蘅芜苑做针线、读诗书，偶尔也与众姐妹聚会。' },
    { text: '💡 大观园生活是红楼梦的"黄金时代"。然而，这美好的时光终将逝去，悲剧正在悄然酝酿。' },
  ],
  nextNodeId: 'chapter6_summary',
}

const chapter6Summary: StoryNode = {
  id: 'chapter6_summary',
  type: 'narrative',
  chapter: 6,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章总结】' },
    { text: '第六章主要内容：' },
    { text: '• 元春晋封贵妃，回家省亲' },
    { text: '• 贾府建造大观园' },
    { text: '• 众姐妹入住大观园' },
    { text: '关键场景：' },
    { text: '• 大观园：全书主要场景' },
    { text: '• 各人居所：潇湘馆、怡红院、蘅芜苑等' },
    { text: '💡 大观园是红楼梦美好时光的象征。众姐妹入住后，开始了吟诗作对、赏花游园的快乐生活。但这段美好终将逝去。' },
  ],
  nextNodeId: 'chapter6_end_choice',
}

const chapter6EndChoice: StoryNode = {
  id: 'chapter6_end_choice',
  type: 'choice',
  chapter: 6,
  sceneId: 'yihong_yuan',
  content: { text: '第六章内容已了解完毕，接下来想做什么？' },
  branches: [
    {
      id: 'choice_continue',
      text: '继续阅读第七章',
      hint: '进入下一章',
      targetNodeId: 'chapter7_start',
    },
    {
      id: 'choice_review',
      text: '回顾本章要点',
      hint: '加深理解',
      targetNodeId: 'chapter6_review',
    },
    {
      id: 'choice_annotation',
      text: '查看注释汇总',
      hint: '读书笔记',
      targetNodeId: 'chapter6_annotations',
    },
  ],
}

const chapter6Review: StoryNode = {
  id: 'chapter6_review',
  type: 'narrative',
  chapter: 6,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章要点回顾】' },
    { text: '大观园布局：' },
    { text: '• 潇湘馆——林黛玉（竹林清幽）' },
    { text: '• 怡红院——贾宝玉（花木繁盛）' },
    { text: '• 蘅芜苑——薛宝钗（香草淡雅）' },
    { text: '• 秋爽斋——贾探春' },
    { text: '• 稻香村——李纨' },
    { text: '• 栊翠庵——妙玉' },
    { text: '关键事件：' },
    { text: '• 元春省亲：贾府荣耀顶峰' },
    { text: '• 众姐妹入住：开启美好时光' },
  ],
  nextNodeId: 'chapter6_end_choice',
}

const chapter6Annotations: StoryNode = {
  id: 'chapter6_annotations',
  type: 'narrative',
  chapter: 6,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章注释汇总】' },
    { text: '地点注释：' },
    { text: '• 大观园：为元春省亲建造的园林' },
    { text: '• 省亲：贵妃回家探望亲人' },
    { text: '人物注释：' },
    { text: '• 贾元春：贾政长女，晋封贵妃' },
    { text: '• 妙玉：寄居栊翠庵的修行女子' },
    { text: '💡 点击上方"注释"按钮可查看详细解释。' },
  ],
  nextNodeId: 'chapter6_end_choice',
}

// 章节定义
export const chapter6: StoryChapter = {
  id: 'chapter6',
  number: 6,
  title: '大观园建成',
  description: '元春省亲，贾府建造大观园，众姐妹入住，开启美好时光。',
  startNodeId: 'chapter6_start',
  nodes: [
    chapter6Start,
    chapter6GardenIntro,
    chapter6YuanchunVisit,
    chapter6MoveIn,
    chapter6DailyLife,
    chapter6Summary,
    chapter6EndChoice,
    chapter6Review,
    chapter6Annotations,
  ],
}