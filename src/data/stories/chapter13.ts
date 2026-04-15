import { StoryNode, StoryChapter } from '../../types'

// 第十三章：全书结局（第一百二十回）
// 主题：贾府败落，多结局系统
// 互动：根据累积好感度和剧情标志决定最终结局

const chapter13Start: StoryNode = {
  id: 'chapter13_start',
  type: 'narrative',
  chapter: 13,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '【第十三章：全书结局】' },
    { text: '话说黛玉死后，宝玉虽娶了宝钗，心中却始终思念黛玉，对宝钗并无真情。' },
    { text: '不久，贾府遭遇大祸——被朝廷抄家。贾政被革职，家产被没收，家族一夜之间败落。' },
    { text: '💡 贾府败落是红楼梦的终极悲剧。玩家的累积好感度将决定最终结局类型。' },
  ],
  nextNodeId: 'chapter13_ending_branch',
}

// 多结局分支节点
const chapter13EndingBranch: StoryNode = {
  id: 'chapter13_ending_branch',
  type: 'condition',
  chapter: 13,
  sceneId: 'rong_qing_tang',
  conditionalBranches: [
    // 圆满结局：高好感度 + 真心表白 + 最后相见
    {
      condition: { type: 'relation', target: 'daiyu', operator: '>', value: 95 },
      targetNodeId: 'chapter13_ending_happy_condition',
    },
    // 宝钗结局：宝钗好感度高
    {
      condition: { type: 'relation', target: 'baochai', operator: '>', value: 85 },
      targetNodeId: 'chapter13_ending_baochai',
    },
    // 遗憾结局：黛玉好感度中等以上 + 有最后相见
    {
      condition: { type: 'relation', target: 'daiyu', operator: '>', value: 70 },
      targetNodeId: 'chapter13_ending_regret',
    },
  ],
  nextNodeId: 'chapter13_ending_tragedy', // 默认悲剧结局
}

// 圆满结局的条件检查
const chapter13EndingHappyCondition: StoryNode = {
  id: 'chapter13_ending_happy_condition',
  type: 'condition',
  chapter: 13,
  sceneId: 'yihong_yuan',
  conditionalBranches: [
    {
      condition: { type: 'flag', target: 'true_love_confirmed', value: true },
      targetNodeId: 'chapter13_ending_happy',
    },
    {
      condition: { type: 'flag', target: 'visited_daiyu_final', value: true },
      targetNodeId: 'chapter13_ending_regret',
    },
  ],
  nextNodeId: 'chapter13_ending_regret',
}

// 圆满结局
const chapter13EndingHappy: StoryNode = {
  id: 'chapter13_ending_happy',
  type: 'ending',
  chapter: 13,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【结局：情深缘深】' },
    { text: '因你与黛玉情深，临终前真情表白，她带着对你的信任与爱意离去。' },
    { text: '抄家之祸后，宝玉出家，心中却有一丝慰藉——黛玉临终时知道他的真心。' },
    { text: '多年后，宝玉在寺庙中，梦见黛玉。梦中黛玉微笑着说："我等你很久了。"' },
    { text: '宝玉微笑，心中明白：这一生虽未能在人世相守，来世定能重逢。' },
    { text: '── 圆满结局 ──' },
    { text: '💡 高好感度 + 真情表白，让黛玉带着安慰离去。虽是悲剧，但两人的心永远相连。' },
  ],
  effects: [{ type: 'set_flag', target: 'ending_happy', value: true }],
  nextNodeId: undefined,
}

// 宝钗结局
const chapter13EndingBaochai: StoryNode = {
  id: 'chapter13_ending_baochai',
  type: 'ending',
  chapter: 13,
  sceneId: 'hengwu_yuan',
  content: [
    { text: '【结局：金玉良缘】' },
    { text: '因你与宝钗关系良好，接受了她的劝导，贾府败落后，你与宝钗相依为命。' },
    { text: '黛玉的死虽令你悲痛，但你逐渐接受了"金玉良缘"，与宝钗过着平淡的生活。' },
    { text: '多年后，你偶想起黛玉，心中仍有隐隐的痛。但宝钗的陪伴，让你度过了余生。' },
    { text: '── 宝钗结局 ──' },
    { text: '💡 高宝钗好感度 + 接受劝导，让你走向"金玉良缘"的人生。黛玉虽逝，你选择向前。' },
  ],
  effects: [{ type: 'set_flag', target: 'ending_baochai', value: true }],
  nextNodeId: undefined,
}

// 遗憾结局
const chapter13EndingRegret: StoryNode = {
  id: 'chapter13_ending_regret',
  type: 'ending',
  chapter: 13,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【结局：情深缘浅】' },
    { text: '因你与黛玉有一定感情，但未能在临终时真情表白，她带着遗憾离去。' },
    { text: '抄家之祸后，宝玉出家，心中满是悔恨——未能让黛玉知道他的真心。' },
    { text: '多年后，宝玉在寺庙中，日夜思念黛玉。梦中黛玉出现，却总是无言。' },
    { text: '宝玉明白：这一生，他错过了最重要的表白。黛玉的爱，虽深却未圆满。' },
    { text: '── 遗憾结局 ──' },
    { text: '💡 中等好感度 + 未表白真心，让黛玉带着遗憾离去。宝玉终生的悔恨，成为永远的痛。' },
  ],
  effects: [{ type: 'set_flag', target: 'ending_regret', value: true }],
  nextNodeId: undefined,
}

// 悲剧结局
const chapter13EndingTragedy: StoryNode = {
  id: 'chapter13_ending_tragedy',
  type: 'ending',
  chapter: 13,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '【结局：白茫茫大地真干净】' },
    { text: '贾府败落后，宝玉出家，心中一片空虚。' },
    { text: '黛玉的死，宝钗的婚姻，家族的败落……一切终成虚无。' },
    { text: '小说结尾写道："好一似食尽鸟投林，落了片白茫茫大地真干净！"' },
    { text: '宝玉在雪地中独行，面容似和尚，心中却已无任何牵挂。' },
    { text: '这一生，繁华如梦，终归虚无。' },
    { text: '── 悲剧结局 ──' },
    { text: '💡 低好感度 + 无真情表白，让黛玉怨恨离去。宝玉出家后心如死灰，一切归于虚无。' },
  ],
  effects: [{ type: 'set_flag', target: 'ending_tragedy', value: true }],
  nextNodeId: undefined,
}

// 标准结局路径（用于非条件触发的默认流程）
const chapter13Collapse: StoryNode = {
  id: 'chapter13_collapse',
  type: 'narrative',
  chapter: 13,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '【抄家之祸】' },
    { text: '抄家之日，官兵蜂拥而至，将贾府翻了个底朝天。金银珠宝、古玩字画，统统被查封没收。' },
    { text: '贾政被革职查办，贾赦、贾珍被流放，贾琏、贾蓉被下狱。' },
    { text: '王熙凤在狱中，想起自己一生机关算尽，最终落得如此下场，不禁悔恨交加。她在狱中自尽。' },
    { text: '💡 抄家是封建大家族命运的写照。繁华终有尽头，富贵终成虚无。' },
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
    { text: '💡 每个人的结局，都与第五回的判词相呼应。命运无法逃脱，悲剧注定发生。' },
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
    { text: '他与宝钗虽有夫妻之名，却无夫妻之情。宝钗规劝他读书走科举之路，宝玉却心如死灰。' },
    { text: '一日，宝玉忽然失踪。后来，有人说曾在雪地中见过一个和尚，面容似宝玉。' },
    { text: '宝玉出家，完成了他当年的誓言——"你若死了，我做和尚去。"' },
    { text: '💡 宝玉出家是他对尘世的彻底放弃。黛玉死后，他的心已死；贾府败落后，他的家已亡。' },
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
    { text: '💡 "白茫茫大地真干净"是红楼梦的终极主题。繁华如梦，终将散去。' },
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
    { text: '互动游戏告诉玩家：' },
    { text: '• 真情需要表达，否则可能遗憾终生' },
    { text: '• 每一次选择，都影响结局走向' },
    { text: '• 好感度系统模拟了人际关系的重要性' },
    { text: '• 封建礼教摧毁真情，是悲剧的根本原因' },
    { text: '💡 红楼梦是中国文学的巅峰之作。本游戏让您体验选择与命运的关系。' },
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
    { text: '第四部分（12-13章）：悲剧高潮，黛玉焚稿，多结局' },
    { text: '互动系统：' },
    { text: '• 角色初始化：不同角色有不同属性和关系' },
    { text: '• 好感度系统：选择影响角色好感度' },
    { text: '• 条件分支：好感度决定剧情走向' },
    { text: '• 多结局：累积选择决定最终结局类型' },
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
      text: '重新开始，尝试不同选择',
      hint: '体验其他结局',
      targetNodeId: 'chapter1_start',
    },
    {
      id: 'choice_review',
      text: '回顾全书要点',
      hint: '总结梳理',
      targetNodeId: 'chapter13_full_review',
    },
    {
      id: 'choice_endings',
      text: '查看所有结局类型',
      hint: '了解结局系统',
      targetNodeId: 'chapter13_all_endings',
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
    { text: '• 贾宝玉：追求自由，反抗封建，结局取决于好感度' },
    { text: '• 林黛玉：敏感多愁，真情付出，结局取决于玩家选择' },
    { text: '• 薛宝钗：稳重圆融，金玉良缘，可影响结局类型' },
    { text: '互动系统：' },
    { text: '• 角色选择：影响初始属性和关系' },
    { text: '• 好感度系统：选择影响角色关系' },
    { text: '• 条件分支：好感度决定剧情走向' },
    { text: '• 多结局：累积选择决定最终结局' },
    { text: '结局类型：' },
    { text: '• 圆满结局：黛玉好感 > 95 + 真情表白' },
    { text: '• 宝钗结局：宝钗好感 > 85' },
    { text: '• 遗憾结局：黛玉好感 > 70 + 有最后相见' },
    { text: '• 悲剧结局：默认' },
  ],
  nextNodeId: 'chapter13_end_choice',
}

const chapter13AllEndings: StoryNode = {
  id: 'chapter13_all_endings',
  type: 'narrative',
  chapter: 13,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【结局系统说明】' },
    { text: '本游戏共有四种结局类型：' },
    { text: '' },
    { text: '◆ 圆满结局【情深缘深】' },
    { text: '条件：黛玉好感度 > 95 + 真情表白' },
    { text: '描述：黛玉临终时知道你的真心，虽悲剧但心相连' },
    { text: '' },
    { text: '◆ 宝钗结局【金玉良缘】' },
    { text: '条件：宝钗好感度 > 85' },
    { text: '描述：接受宝钗，与她相依为命度过余生' },
    { text: '' },
    { text: '◆ 遗憾结局【情深缘浅】' },
    { text: '条件：黛玉好感度 > 70 + 有最后相见' },
    { text: '描述：黛玉带着遗憾离去，宝玉终生悔恨' },
    { text: '' },
    { text: '◆ 悲剧结局【白茫茫大地真干净】' },
    { text: '条件：默认' },
    { text: '描述：黛玉怨恨离去，宝玉出家心如死灰' },
    { text: '' },
    { text: '💡 重新开始游戏，尝试不同选择，体验不同结局！' },
  ],
  nextNodeId: 'chapter13_end_choice',
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
    { text: '结局提示：' },
    { text: '• 好感度系统影响结局类型' },
    { text: '• 关键选择影响剧情标志' },
    { text: '• 条件分支决定走向' },
  ],
  nextNodeId: 'chapter13_end_choice',
}

// 章节定义
export const chapter13: StoryChapter = {
  id: 'chapter13',
  number: 13,
  title: '全书结局',
  description: '贾府被抄家，根据累积好感度和剧情标志触发多结局。四种结局类型：圆满、宝钗、遗憾、悲剧。',
  startNodeId: 'chapter13_start',
  nodes: [
    chapter13Start,
    chapter13EndingBranch,
    chapter13EndingHappyCondition,
    chapter13EndingHappy,
    chapter13EndingBaochai,
    chapter13EndingRegret,
    chapter13EndingTragedy,
    chapter13Collapse,
    chapter13Deaths,
    chapter13Baoyu,
    chapter13Final,
    chapter13Reflection,
    chapter13Summary,
    chapter13EndChoice,
    chapter13FullReview,
    chapter13AllEndings,
    chapter13Annotations,
  ],
}