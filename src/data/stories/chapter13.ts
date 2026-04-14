import { StoryNode, StoryChapter } from '../../types'

// 第十三章：全书结局（第一百二十回）
// 主题：贾府败落，宝玉出家，"白茫茫大地真干净"

const chapter13Start: StoryNode = {
  id: 'chapter13_start',
  type: 'narrative',
  chapter: 13,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '【第十三章：全书结局】' },
    { text: '话说黛玉死后，宝玉虽娶了宝钗，心中却始终思念黛玉，对宝钗并无真情。' },
    { text: '不久，贾府遭遇大祸——被朝廷抄家。贾政被革职，家产被没收，家族一夜之间败落。' },
    { text: '昔日的繁华富贵，化为乌有。贾母在抄家后不久病逝，王熙凤在狱中自尽，贾府上下家破人亡。' },
    { text: '💡 贾府败落是红楼梦的终极悲剧。繁华终将逝去，富贵终成泡影。这正是第五回预言的"白茫茫大地真干净"的结局。' },
  ],
  nextNodeId: 'chapter13_collapse',
}

const chapter13Collapse: StoryNode = {
  id: 'chapter13_collapse',
  type: 'narrative',
  chapter: 13,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '【抄家之祸】' },
    { text: '抄家之日，官兵蜂拥而至，将贾府翻了个底朝天。金银珠宝、古玩字画，统统被查封没收。' },
    { text: '贾政被革职查办，贾赦、贾珍被流放，贾琏、贾蓉被下狱。昔日权倾一时的贾府，顷刻间土崩瓦解。' },
    { text: '王熙凤在狱中，想起自己一生机关算尽，最终落得如此下场，不禁悔恨交加。她在狱中自尽，结束了"机关算尽太聪明，反算了卿卿性命"的一生。' },
    { text: '💡 抄家是封建大家族命运的写照。贾府虽富贵，却因政治风波、内部腐败而败落。繁华终有尽头，富贵终成虚无。' },
  ],
  nextNodeId: 'chapter13_deaths',
}

const chapter13Deaths: StoryNode = {
  id: 'chapter13_deaths',
  type: 'narrative',
  chapter: 13,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '【众人结局】' },
    { text: '贾府败落后，众人结局各异：' },
    { text: '• 贾母：抄家后病逝，享年八十三岁' },
    { text: '• 王熙凤：狱中自尽，机关算尽终害己' },
    { text: '• 贾元春：宫廷中病逝，贵妃之梦终碎' },
    { text: '• 史湘云：丈夫早逝，守寡度日' },
    { text: '• 贾探春：远嫁他乡，与故土永别' },
    { text: '• 贾惜春：出家为尼，遁入空门' },
    { text: '• 贾巧姐：被卖为奴，后被刘姥姥救出' },
    { text: '💡 每个人的结局，都与第五回的判词相呼应。命运无法逃脱，悲剧注定发生。红楼梦的预言体系，在这一章完全兑现。' },
  ],
  nextNodeId: 'chapter13_baoyu',
}

const chapter13Baoyu: StoryNode = {
  id: 'chapter13_baoyu',
  type: 'narrative',
  chapter: 13,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【宝玉出家】' },
    { text: '宝玉经历抄家之祸、黛玉之死后，心中对尘世已无留恋。' },
    { text: '他与宝钗虽有夫妻之名，却无夫妻之情。宝钗规劝他读书走科举之路，宝玉却心如死灰，不愿听从。' },
    { text: '一日，宝玉忽然失踪。众人四处寻找，终不见踪影。' },
    { text: '后来，有人说曾在雪地中见过一个和尚，面容似宝玉，却已遁入空门。宝玉出家，完成了他当年的誓言——"你若死了，我做和尚去。"' },
    { text: '💡 宝玉出家是他对尘世的彻底放弃。黛玉死后，他的心已死；贾府败落后，他的家已亡。出家，是他对悲剧命运的最终回应。' },
  ],
  nextNodeId: 'chapter13_final',
}

const chapter13Final: StoryNode = {
  id: 'chapter13_final',
  type: 'narrative',
  chapter: 13,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【白茫茫大地真干净】' },
    { text: '宝玉出家后，贾府彻底败落。昔日的繁华府邸，化为废墟。' },
    { text: '小说结尾写道："好一似食尽鸟投林，落了片白茫茫大地真干净！"' },
    { text: '一切繁华，终归于虚无。一切悲欢，终归于空寂。' },
    { text: '红楼梦，终是一场梦。梦醒之后，白茫茫大地，真干净。' },
    { text: '💡 "白茫茫大地真干净"是红楼梦的终极主题。繁华如梦，终将散去。人生如戏，终将落幕。这是曹雪芹对人生的终极感悟，也是红楼梦留给读者的永恒思索。' },
  ],
  nextNodeId: 'chapter13_reflection',
}

const chapter13Reflection: StoryNode = {
  id: 'chapter13_reflection',
  type: 'narrative',
  chapter: 13,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【全书反思】' },
    { text: '红楼梦，是一部关于繁华与衰落的史诗，也是一部关于真情的挽歌。' },
    { text: '它告诉我们：' },
    { text: '• 繁华终有尽头，富贵终成泡影' },
    { text: '• 真情难敌封建礼教，自由终被摧毁' },
    { text: '• 女性的命运，在封建社会中注定悲剧' },
    { text: '曹雪芹用一生心血写出的红楼梦，不只是小说，更是对人生的深刻反思。' },
    { text: '💡 红楼梦是中国文学的巅峰之作。它以家族兴衰为线索，以人物命运为载体，展现了封建社会的众生相，留下了永恒的文学价值。' },
  ],
  nextNodeId: 'chapter13_summary',
}

const chapter13Summary: StoryNode = {
  id: 'chapter13_summary',
  type: 'narrative',
  chapter: 13,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【全书总结】' },
    { text: '红楼梦，十三章节阅读完毕。全书主要内容：' },
    { text: '第一部分（1-5章）：背景铺垫，人物介绍，命运预示' },
    { text: '第二部分（6-8章）：美好时光，共读西厢，黛玉葬花' },
    { text: '第三部分（9-11章）：矛盾激化，宝玉挨打，联诗悲凉' },
    { text: '第四部分（12-13章）：悲剧高潮，黛玉焚稿，贾府败落' },
    { text: '核心主题：繁华如梦，真情难存，命运注定悲剧' },
    { text: '感谢您阅读本游戏！愿红楼梦的智慧，伴您一生。' },
  ],
  nextNodeId: 'chapter13_end_choice',
}

const chapter13EndChoice: StoryNode = {
  id: 'chapter13_end_choice',
  type: 'choice',
  chapter: 13,
  sceneId: 'yihong_yuan',
  content: { text: '全书阅读完毕，接下来想做什么？' },
  branches: [
    {
      id: 'choice_restart',
      text: '重新开始阅读',
      hint: '从头回顾',
      targetNodeId: 'chapter1_start',
    },
    {
      id: 'choice_review',
      text: '回顾全书要点',
      hint: '总结梳理',
      targetNodeId: 'chapter13_full_review',
    },
    {
      id: 'choice_end',
      text: '结束阅读',
      hint: '退出游戏',
      targetNodeId: 'chapter13_final_end',
    },
  ],
}

const chapter13FullReview: StoryNode = {
  id: 'chapter13_full_review',
  type: 'narrative',
  chapter: 13,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【全书要点总览】' },
    { text: '关键人物：' },
    { text: '• 贾宝玉：追求自由，反抗封建，最终出家' },
    { text: '• 林黛玉：敏感多愁，真情付出，焚稿而亡' },
    { text: '• 薛宝钗：稳重圆融，金玉良缘，却无真情' },
    { text: '• 王熙凤：精明强干，机关算尽，最终自尽' },
    { text: '关键诗词：' },
    { text: '• 《葬花吟》：黛玉的经典诗作' },
    { text: '• 《红楼梦曲》：预示命运的歌曲' },
    { text: '核心主题：繁华如梦，真情难存，白茫茫大地真干净' },
  ],
  nextNodeId: 'chapter13_end_choice',
}

const chapter13FinalEnd: StoryNode = {
  id: 'chapter13_final_end',
  type: 'narrative',
  chapter: 13,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【全书完结】' },
    { text: '感谢您阅读红楼梦体验游戏！' },
    { text: '红楼梦是中国文学的瑰宝，承载着深刻的人生哲理。' },
    { text: '希望本游戏能让您更轻松地了解红楼梦的故事与人物，激发您阅读原著的兴趣。' },
    { text: '愿红楼梦的智慧与美感，永远陪伴您。' },
    { text: '── 全书完结 ──' },
  ],
  nextNodeId: undefined,
}

const chapter13Annotations: StoryNode = {
  id: 'chapter13_annotations',
  type: 'narrative',
  chapter: 13,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章注释汇总】' },
    { text: '词汇注释：' },
    { text: '• 抄家：朝廷查封没收家产的惩罚' },
    { text: '• 出家：遁入空门，成为僧人' },
    { text: '• 白茫茫大地真干净：一切归于虚无' },
    { text: '人物结局：' },
    { text: '• 宝玉：出家为僧' },
    { text: '• 黛玉：焚稿而亡' },
    { text: '• 熙凤：狱中自尽' },
    { text: '💡 点击上方"注释"按钮可查看详细解释。' },
  ],
  nextNodeId: 'chapter13_end_choice',
}

// 章节定义
export const chapter13: StoryChapter = {
  id: 'chapter13',
  number: 13,
  title: '全书结局',
  description: '贾府被抄家，众人结局各异。宝玉出家，"白茫茫大地真干净"，全书完结。',
  startNodeId: 'chapter13_start',
  nodes: [
    chapter13Start,
    chapter13Collapse,
    chapter13Deaths,
    chapter13Baoyu,
    chapter13Final,
    chapter13Reflection,
    chapter13Summary,
    chapter13EndChoice,
    chapter13FullReview,
    chapter13FinalEnd,
    chapter13Annotations,
  ],
}