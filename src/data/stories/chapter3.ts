import { StoryNode, StoryChapter } from '../../types'

// 第三章：薄命女偏逢薄命郎 葫芦僧乱判葫芦案
// 主题：薛宝钗进京和贾雨村断案

const chapter3Start: StoryNode = {
  id: 'chapter3_start',
  type: 'narrative',
  chapter: 3,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【第三章：薛家进京】' },
    { text: '话说黛玉入府之后，一日，荣府又迎来新的客人——薛姨妈带着女儿薛宝钗进京来了。' },
    { text: '薛姨妈是王夫人的妹妹，宝钗是王夫人的外甥女。因薛家也是四大家族之一，世代联姻，故此来往甚密。' },
    { text: '💡 薛家是金陵四大家族之一，"丰年好大雪，珍珠如土金如铁"便是形容薛家的富贵。宝钗进京，埋下了"金玉良缘"的伏笔。' },
  ],
  nextNodeId: 'chapter3_baochai_intro',
}

const chapter3BaochaiIntro: StoryNode = {
  id: 'chapter3_baochai_intro',
  type: 'narrative',
  chapter: 3,
  sceneId: 'hengwu_yuan',
  content: [
    { text: '【薛宝钗】' },
    { text: '宝钗年方十四五岁，生得肌骨莹润，举止娴雅。' },
    { text: '她性格稳重圆融，不像黛玉那样敏感多愁，也不像宝玉那样任性率真。' },
    { text: '宝钗常说："女子无才便是德"，虽读过不少书，却不炫耀才华，总是含蓄内敛。' },
    { text: '💡 宝钗的性格与黛玉形成鲜明对比：黛玉率真敏感，宝钗稳重圆融。这种对比是红楼梦的核心戏剧张力之一。' },
  ],
  nextNodeId: 'chapter3_jinlock',
}

const chapter3Jinlock: StoryNode = {
  id: 'chapter3_jinlock',
  type: 'narrative',
  chapter: 3,
  sceneId: 'hengwu_yuan',
  content: [
    { text: '【金锁的来历】' },
    { text: '宝钗身上佩戴着一块金锁，据说是一个和尚给的，上面镌着八个字："不离不弃，芳龄永继。"' },
    { text: '宝玉见后，把自己佩戴的通灵宝玉拿出来比较，上面也有八个字："莫失莫忘，仙寿恒昌。"' },
    { text: '莺儿笑道："倒和姑娘项圈上的两句话是一对儿。"由此，"金玉良缘"之说渐起。' },
    { text: '💡 "金玉良缘"指宝钗金锁与宝玉通灵宝玉的对应，暗示二人命中注定。但这与黛玉和宝玉的"木石前盟"形成冲突。' },
  ],
  nextNodeId: 'chapter3_yucun_case',
}

const chapter3YucunCase: StoryNode = {
  id: 'chapter3_yucun_case',
  type: 'narrative',
  chapter: 3,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '【贾雨村断案】' },
    { text: '话说贾雨村复职后，被派往应天府任职。上任之初，便遇到一桩命案。' },
    { text: '原来是薛家的公子薛蟠，因争买一个女子，与另一买家冯渊发生争执，竟将冯渊打死。' },
    { text: '这女子名叫英莲，本是甄士隐的女儿，幼时被拐子拐走，如今又被两家争买。' },
    { text: '💡 英莲的命运极为悲惨：本是富贵人家的女儿，却先失父母，再被拐卖，又遭两家争抢。她就是后来的香菱，是红楼梦中最可怜的人物之一。' },
  ],
  nextNodeId: 'chapter3_yucun_judge',
}

const chapter3YucunJudge: StoryNode = {
  id: 'chapter3_yucun_judge',
  type: 'narrative',
  chapter: 3,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '【徇私枉法】' },
    { text: '贾雨村本欲依法处置薛蟠，但门子提醒他：薛家是金陵四大家族之一，与贾、王二家都有亲缘关系。' },
    { text: '门子道："贾、王二家是老爷的恩人和亲戚，若判了薛蟠，恐怕得罪两家。"' },
    { text: '雨村犹豫片刻，终是徇私枉法，只判薛蟠"误伤"，任其逍遥法外，仅令其赔偿银两给冯家。' },
    { text: '💡 贾雨村的判决展现了官场的黑暗：法律不过是权势的工具。四大家族势力庞大，法律对他们毫无约束。这预示了贾府终将因权势而衰败。' },
  ],
  nextNodeId: 'chapter3_yucun_result',
}

const chapter3YucunResult: StoryNode = {
  id: 'chapter3_yucun_result',
  type: 'narrative',
  chapter: 3,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '【英莲的命运】' },
    { text: '英莲就此被薛蟠带走，成为薛家的丫鬟，后改名香菱。' },
    { text: '她虽在薛家，却命运坎坷——先随薛蟠入京，后被薛蟠之妻夏金桂虐待，最终郁郁而亡。' },
    { text: '甄士隐当年丢失的女儿，便是这英莲。她从富贵人家沦落至此，正是红楼梦"薄命"主题的体现。' },
    { text: '💡 香菱的命运与黛玉相似：都是父母早亡、寄人篱下。但香菱比黛玉更悲惨，她连自我意识都渐渐丧失，成了"薄命女"的典型代表。' },
  ],
  nextNodeId: 'chapter3_summary',
}

const chapter3Summary: StoryNode = {
  id: 'chapter3_summary',
  type: 'narrative',
  chapter: 3,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章总结】' },
    { text: '第三章主要内容：' },
    { text: '• 薛宝钗进京，入住荣国府' },
    { text: '• "金玉良缘"之说渐起' },
    { text: '• 贾雨村断案，徇私枉法' },
    { text: '• 英莲（香菱）的命运揭晓' },
    { text: '关键人物：' },
    { text: '• 薛宝钗：稳重圆融，金锁与宝玉对应' },
    { text: '• 薛蟠：薛家公子，打死冯渊' },
    { text: '• 英莲/香菱：甄士隐之女，命运悲惨' },
    { text: '💡 宝钗的到来埋下了"金玉良缘"的伏笔，与黛玉和宝玉的"木石前盟"形成对立。这是红楼梦爱情主线的关键转折。' },
  ],
  nextNodeId: 'chapter3_end_choice',
}

const chapter3EndChoice: StoryNode = {
  id: 'chapter3_end_choice',
  type: 'choice',
  chapter: 3,
  sceneId: 'yihong_yuan',
  content: { text: '第三章内容已了解完毕，接下来想做什么？' },
  branches: [
    {
      id: 'choice_continue',
      text: '继续阅读第四章',
      hint: '进入下一章',
      targetNodeId: 'chapter4_start',
    },
    {
      id: 'choice_review',
      text: '回顾本章要点',
      hint: '加深理解',
      targetNodeId: 'chapter3_review',
    },
  ],
}

const chapter3Review: StoryNode = {
  id: 'chapter3_review',
  type: 'narrative',
  chapter: 3,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章要点回顾】' },
    { text: '核心概念：' },
    { text: '• 金玉良缘：宝钗金锁与宝玉通灵宝玉的对应' },
    { text: '• 木石前盟：黛玉与宝玉的前世缘分' },
    { text: '• 四大家族势力：贾雨村徇私枉法' },
    { text: '人物对比：' },
    { text: '• 黛玉：敏感多愁，率真任性' },
    { text: '• 宝钗：稳重圆融，含蓄内敛' },
    { text: '• 香菱：命运悲惨，薄命典型' },
  ],
  nextNodeId: 'chapter3_end_choice',
}

// 章节定义
export const chapter3: StoryChapter = {
  id: 'chapter3',
  number: 3,
  title: '薛家进京与葫芦案',
  description: '薛宝钗进京，"金玉良缘"之说渐起；贾雨村断案，揭露官场黑暗。',
  startNodeId: 'chapter3_start',
  nodes: [
    chapter3Start,
    chapter3BaochaiIntro,
    chapter3Jinlock,
    chapter3YucunCase,
    chapter3YucunJudge,
    chapter3YucunResult,
    chapter3Summary,
    chapter3EndChoice,
    chapter3Review,
  ],
}