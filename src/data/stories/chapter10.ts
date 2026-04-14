import { StoryNode, StoryChapter } from '../../types'

// 第十章：海棠诗社（第三十七回）
// 主题：展现众姐妹的才情，诗社活动

const chapter10Start: StoryNode = {
  id: 'chapter10_start',
  type: 'narrative',
  chapter: 10,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【第十章：海棠诗社】' },
    { text: '话说探春见大观园中众姐妹才华出众，便发起了一个诗社，定期聚会吟诗。' },
    { text: '探春写了帖子，邀请宝玉、黛玉、宝钗、迎春、惜春、李纨等人参加。' },
    { text: '众人响应踊跃，第一社便在秋爽斋聚会，以"白海棠"为题，限韵作诗。' },
    { text: '💡 海棠诗社是红楼梦展现女性才情的重要场景。众姐妹吟诗作对，以诗词抒发心声，体现了她们的文学素养和个性差异。' },
  ],
  nextNodeId: 'chapter10_rules',
}

const chapter10Rules: StoryNode = {
  id: 'chapter10_rules',
  type: 'narrative',
  chapter: 10,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【诗社规则】' },
    { text: '探春提议，每人需取一个别号：' },
    { text: '• 探春自称"蕉下客"' },
    { text: '• 黛玉被称为"潇湘妃子"' },
    { text: '• 宝钗被称为"蘅芜君"' },
    { text: '• 宝玉被称为"怡红公子"' },
    { text: '• 湘云被称为"枕霞旧友"' },
    { text: '诗社限韵"门、盆、魂、痕、昏"五字，每人须作一首七言律诗咏白海棠。' },
    { text: '💡 别号取自各人居所或性格。潇湘妃子取自潇湘馆，蘅芜君取自蘅芜苑。这些别号成为众人在诗社中的称呼。' },
  ],
  nextNodeId: 'chapter10_daiyu_poetry',
}

const chapter10DaiyuPoetry: StoryNode = {
  id: 'chapter10_daiyu_poetry',
  type: 'narrative',
  chapter: 10,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【黛玉诗作】' },
    { text: '黛玉的诗被评为最佳，其诗云：' },
    { text: '"半卷湘帘半掩门，碾冰为土玉为盆。"' },
    { text: '"偷来梨蕊三分白，借得梅花一缕魂。"' },
    { text: '"月窟仙人缝缟袂，秋闺怨女拭啼痕。"' },
    { text: '"娇羞默默同谁诉，倦倚西风夜已昏。"' },
    { text: '💡 "偷来梨蕊三分白，借得梅花一缕魂"是全诗最妙的句子。海棠之美，似偷得梨花之白、梅花之魂，极尽风流别致。"娇羞默默同谁诉"则写出黛玉内心的孤独。' },
  ],
  nextNodeId: 'chapter10_baochai_poetry',
}

const chapter10BaochaiPoetry: StoryNode = {
  id: 'chapter10_baochai_poetry',
  type: 'narrative',
  chapter: 10,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【宝钗诗作】' },
    { text: '宝钗的诗被评为第二，其诗云：' },
    { text: '"珍重芳姿昼掩门，自携手瓮灌苔盆。"' },
    { text: '"胭脂洗出秋阶影，冰雪招来露砌魂。"' },
    { text: '"淡极始知花更艳，愁多焉得玉无痕。"' },
    { text: '"欲偿白帝凭清洁，不语婷婷日又昏。"' },
    { text: '💡 宝钗的诗稳重含蓄，体现她端庄的性格。"淡极始知花更艳"写出她认为含蓄内敛才是美，与黛玉的风流别致形成对比。' },
  ],
  nextNodeId: 'chapter10_xiangyun_poetry',
}

const chapter10XiangyunPoetry: StoryNode = {
  id: 'chapter10_xiangyun_poetry',
  type: 'narrative',
  chapter: 10,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【湘云诗作】' },
    { text: '史湘云后来加入诗社，作了两首诗，其中一首云：' },
    { text: '"神仙昨日降都门，种得蓝田玉一盆。"' },
    { text: '"自是霜娥偏爱冷，非关倩女亦离魂。"' },
    { text: '"秋阴捧出何方雪，雨渍添来隔宿痕。"' },
    { text: '"却喜诗人吟不倦，肯令寂寞度朝昏。"' },
    { text: '💡 湘云的诗豪爽开朗，不似黛玉的愁绪、宝钗的含蓄。"却喜诗人吟不倦"写出她对诗社的热爱和乐观性格。' },
  ],
  nextNodeId: 'chapter10_comparison',
}

const chapter10Comparison: StoryNode = {
  id: 'chapter10_comparison',
  type: 'narrative',
  chapter: 10,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【诗作对比】' },
    { text: '三首诗风格各异，体现了诗人性格：' },
    { text: '• 黛玉：风流别致，愁绪满怀——"娇羞默默同谁诉"' },
    { text: '• 宝钗：稳重含蓄，端庄内敛——"淡极始知花更艳"' },
    { text: '• 湘云：豪爽开朗，乐观洒脱——"却喜诗人吟不倦"' },
    { text: '众人评诗，认为黛玉诗最佳，宝钗诗第二，湘云诗第三。' },
    { text: '💡 诗社通过诗词展现了众姐妹的性格差异。黛玉敏感多愁，宝钗稳重含蓄，湘云开朗豪爽。这些差异贯穿全书，是红楼梦人物塑造的核心。' },
  ],
  nextNodeId: 'chapter10_later',
}

const chapter10Later: StoryNode = {
  id: 'chapter10_later',
  type: 'narrative',
  chapter: 10,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【后续诗社】' },
    { text: '海棠诗社成立后，众姐妹又多次聚会：' },
    { text: '• 菊花诗社：以菊花为题，黛玉诗最佳' },
    { text: '• 柳絮词社：以柳絮为题，湘云词最佳' },
    { text: '• 联诗：众人轮流作诗，才华毕露' },
    { text: '诗社成为大观园生活的重要组成部分，展现了众姐妹的文学才华和青春活力。' },
    { text: '💡 诗社活动是红楼梦美好时光的象征。众姐妹以诗词抒发心声，彼此欣赏，体现了女性之间的友谊与才情。' },
  ],
  nextNodeId: 'chapter10_summary',
}

const chapter10Summary: StoryNode = {
  id: 'chapter10_summary',
  type: 'narrative',
  chapter: 10,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章总结】' },
    { text: '第十章主要内容：' },
    { text: '• 探春发起海棠诗社' },
    { text: '• 众人取别号，限韵作诗' },
    { text: '• 黛玉诗最佳，展现才情' },
    { text: '核心诗词：' },
    { text: '• 黛玉："偷来梨蕊三分白，借得梅花一缕魂"' },
    { text: '• 宝钗："淡极始知花更艳"' },
    { text: '• 湘云："却喜诗人吟不倦"' },
    { text: '💡 海棠诗社展现了众姐妹的才情与性格。通过诗词，读者得以深入了解每个人的内心世界。' },
  ],
  nextNodeId: 'chapter10_end_choice',
}

const chapter10EndChoice: StoryNode = {
  id: 'chapter10_end_choice',
  type: 'choice',
  chapter: 10,
  sceneId: 'yihong_yuan',
  content: { text: '第十章内容已了解完毕，接下来想做什么？' },
  branches: [
    {
      id: 'choice_continue',
      text: '继续阅读第十一章',
      hint: '进入下一章',
      targetNodeId: 'chapter11_start',
    },
    {
      id: 'choice_review',
      text: '回顾本章要点',
      hint: '加深理解',
      targetNodeId: 'chapter10_review',
    },
    {
      id: 'choice_annotation',
      text: '查看注释汇总',
      hint: '读书笔记',
      targetNodeId: 'chapter10_annotations',
    },
  ],
}

const chapter10Review: StoryNode = {
  id: 'chapter10_review',
  type: 'narrative',
  chapter: 10,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章要点回顾】' },
    { text: '诗社成员：' },
    { text: '• 探春（蕉下客）：发起者' },
    { text: '• 黛玉（潇湘妃子）：诗才第一' },
    { text: '• 宝钗（蘅芜君）：稳重含蓄' },
    { text: '• 湘云（枕霞旧友）：豪爽开朗' },
    { text: '• 宝玉（怡红公子）：参与者' },
    { text: '诗作对比：' },
    { text: '• 黛玉：风流别致，愁绪满怀' },
    { text: '• 宝钗：稳重端庄，含蓄内敛' },
    { text: '• 湘云：豪爽洒脱，乐观开朗' },
  ],
  nextNodeId: 'chapter10_end_choice',
}

const chapter10Annotations: StoryNode = {
  id: 'chapter10_annotations',
  type: 'narrative',
  chapter: 10,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章注释汇总】' },
    { text: '别号注释：' },
    { text: '• 潇湘妃子：黛玉别号，取自潇湘馆' },
    { text: '• 蘅芜君：宝钗别号，取自蘅芜苑' },
    { text: '• 蕉下客：探春别号' },
    { text: '• 枕霞旧友：湘云别号' },
    { text: '诗词注释：' },
    { text: '• "限韵"：诗社规定必须使用的韵脚' },
    { text: '• "偷来梨蕊三分白"：黛玉诗中最妙的句子' },
    { text: '💡 点击上方"注释"按钮可查看详细解释。' },
  ],
  nextNodeId: 'chapter10_end_choice',
}

// 章节定义
export const chapter10: StoryChapter = {
  id: 'chapter10',
  number: 10,
  title: '海棠诗社',
  description: '探春发起海棠诗社，众人吟诗作对，展现才情与性格差异。',
  startNodeId: 'chapter10_start',
  nodes: [
    chapter10Start,
    chapter10Rules,
    chapter10DaiyuPoetry,
    chapter10BaochaiPoetry,
    chapter10XiangyunPoetry,
    chapter10Comparison,
    chapter10Later,
    chapter10Summary,
    chapter10EndChoice,
    chapter10Review,
    chapter10Annotations,
  ],
}