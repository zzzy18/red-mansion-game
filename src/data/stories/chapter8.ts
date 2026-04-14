import { StoryNode, StoryChapter } from '../../types'

// 第八章：黛玉葬花（第二十七回）
// 主题：红楼梦最经典场景，展现黛玉性格与命运

const chapter8Start: StoryNode = {
  id: 'chapter8_start',
  type: 'narrative',
  chapter: 8,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【第八章：黛玉葬花】' },
    { text: '话说芒种节将近，大观园中众姐妹忙着送花神。这是习俗，认为芒种一过，花神便要退位，须设祭送之。' },
    { text: '黛玉近日因昨夜晴雯不开门一事，心中郁结。她以为宝玉故意不见她，便更加伤感。' },
    { text: '今日又见众姐妹忙着送花，想起自己寄人篱下，无依无靠，心中悲凉，便独自一人走向花冢。' },
    { text: '💡 花冢是黛玉在大观园偏僻角落掘土埋花的去处。黛玉认为花落之后若落入沟渠污淖太过可惜，不如葬于净土，使其"质本洁来还洁去"。' },
  ],
  nextNodeId: 'chapter8_walking',
}

const chapter8Walking: StoryNode = {
  id: 'chapter8_walking',
  type: 'narrative',
  chapter: 8,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【走向花冢】' },
    { text: '黛玉肩上担着花锄，花锄上挂着花囊，手中拿着花帚。她穿过竹林，走过小桥，来到那偏僻的花冢前。' },
    { text: '此处是园中一角，平日无人来此。落花满地，随风飘转。黛玉见了，不禁落下泪来。' },
    { text: '她蹲下身，将落花一一拾起，收入花囊。每一片花瓣，都似她自己——美丽却飘零，无根无依。' },
    { text: '💡 黛玉葬花，不只是行为，更是心境的投射。她怜惜落花，实是怜惜自己。花落人亡两不知，这是她对自己命运的预感。' },
  ],
  nextNodeId: 'chapter8_poetry_start',
}

const chapter8PoetryStart: StoryNode = {
  id: 'chapter8_poetry_start',
  type: 'narrative',
  chapter: 8,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【葬花吟·上】' },
    { text: '黛玉一边葬花，一边吟出一首长诗。这便是著名的《葬花吟》：' },
    { text: '"花谢花飞花满天，红消香断有谁怜？"' },
    { text: '"游丝软系飘春榭，落絮轻沾扑绣帘。"' },
    { text: '"闺中女儿惜春暮，愁绪满怀无释处。"' },
    { text: '"手把花锄出绣闺，忍踏落花来复去。"' },
    { text: '💡 《葬花吟》是黛玉最著名的诗作，也是红楼梦最经典的诗词。全诗共52句，字字泣血，句句断肠，展现了黛玉敏感多愁的性格与悲剧命运的预感。' },
  ],
  nextNodeId: 'chapter8_poetry_middle',
}

const chapter8PoetryMiddle: StoryNode = {
  id: 'chapter8_poetry_middle',
  type: 'narrative',
  chapter: 8,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【葬花吟·中】' },
    { text: '黛玉继续吟道：' },
    { text: '"柳丝榆荚自芳菲，不管桃飘与李飞。"' },
    { text: '"桃李明年能再发，明年闺中知有谁？"' },
    { text: '"三月香巢已垒成，梁间燕子太无情。"' },
    { text: '"明年花发虽可啄，却不道人去梁空巢也倾。"' },
    { text: '💡 "桃李明年能再发，明年闺中知有谁"是全诗最深刻的哲理：花明年还会再开，人却不知命运如何。以花之循环对比人之无常，道尽人生悲凉。' },
  ],
  nextNodeId: 'chapter8_poetry_core',
}

const chapter8PoetryCore: StoryNode = {
  id: 'chapter8_poetry_core',
  type: 'narrative',
  chapter: 8,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【葬花吟·核心句】' },
    { text: '黛玉吟出全诗最著名的一段：' },
    { text: '"一年三百六十日，风刀霜剑严相逼。"' },
    { text: '"明媚鲜妍能几时，一朝飘泊难寻觅。"' },
    { text: '"花开易见落难寻，阶前愁杀葬花人。"' },
    { text: '"独倚花锄泪暗洒，洒上空枝见血痕。"' },
    { text: '💡 "风刀霜剑严相逼"道出黛玉寄人篱下的艰辛处境。"一朝飘泊难寻觅"预示她将早逝。"洒上空枝见血痕"暗示她的眼泪将化作血泪，命运凄惨。' },
  ],
  nextNodeId: 'chapter8_poetry_end',
}

const chapter8PoetryEnd: StoryNode = {
  id: 'chapter8_poetry_end',
  type: 'narrative',
  chapter: 8,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【葬花吟·结尾】' },
    { text: '黛玉吟出最后的句子：' },
    { text: '"质本洁来还洁去，强于污淖陷渠沟。"' },
    { text: '"尔今死去侬收葬，未卜侬身何日亡？"' },
    { text: '"侬今葬花人笑痴，他年葬侬知是谁？"' },
    { text: '"试看春残花渐落，便是红颜老死时。"' },
    { text: '"一朝春尽红颜老，花落人亡两不知！"' },
    { text: '💡 "质本洁来还洁去"是黛玉的人生宣言：她宁可洁来洁去，不愿染上世俗污浊。"花落人亡两不知"是全诗的结语，暗示她与宝玉终将阴阳两隔。' },
  ],
  nextNodeId: 'chapter8_baoyu_hear',
}

const chapter8BaoyuHear: StoryNode = {
  id: 'chapter8_baoyu_hear',
  type: 'narrative',
  chapter: 8,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【宝玉听闻】' },
    { text: '黛玉吟诗之时，宝玉恰好路过。他远远听见那悲凉的诗句，不禁驻足倾听。' },
    { text: '听到"一朝春尽红颜老，花落人亡两不知"，宝玉顿时恸倒在山坡之上，怀里兜的落花撒了一地。' },
    { text: '他心中想着：黛玉如此伤感，若她真的死去，自己又该如何？难道也要随她而去？' },
    { text: '💡 宝玉听闻《葬花吟》后的反应，展现了两人深厚的情感羁绊。他因黛玉的悲伤而悲伤，因黛玉的命运而恐惧。这种心灵相通，是"木石前盟"的体现。' },
  ],
  nextNodeId: 'chapter8_meet',
}

const chapter8Meet: StoryNode = {
  id: 'chapter8_meet',
  type: 'narrative',
  chapter: 8,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【黛玉发现宝玉】' },
    { text: '黛玉葬完花，收拾花锄，正要离去，却见宝玉躺在山坡上，满脸泪痕。' },
    { text: '她心中一惊，问道："你在这里做什么？"宝玉道："我听见你吟诗，心中难过，便倒在这里。"' },
    { text: '黛玉见他如此，心中的郁结也消散了一些。原来他并非故意不见她，只是晴雯不开门而已。' },
    { text: '两人相视无言，心中却有千言万语。宝玉道："你若死了，我做和尚去。"黛玉听了，又悲又喜。' },
    { text: '💡 "你若死了，我做和尚去"是宝玉的深情表白。他不愿在世上独活，若黛玉不在，他便出家为僧。这种极端的情感表达，正是宝黛爱情的独特之处。' },
  ],
  nextNodeId: 'chapter8_meaning',
}

const chapter8Meaning: StoryNode = {
  id: 'chapter8_meaning',
  type: 'narrative',
  chapter: 8,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【本章解读】' },
    { text: '葬花是红楼梦最经典的场景，原因有三：' },
    { text: '1. 诗词之美：《葬花吟》字字泣血，是中国古典诗词的杰作' },
    { text: '2. 人物塑造：展现了黛玉敏感多愁、追求洁净的性格' },
    { text: '3. 命运预示：暗示黛玉将早逝，宝玉将出家' },
    { text: '黛玉葬花，实是葬自己。花落人亡两不知，预示了二人悲剧结局。' },
    { text: '💡 葬花场景是红楼梦悲剧美学的巅峰。美好之物终将消逝，洁净之魂终将破碎。这是全书的核心主题。' },
  ],
  nextNodeId: 'chapter8_summary',
}

const chapter8Summary: StoryNode = {
  id: 'chapter8_summary',
  type: 'narrative',
  chapter: 8,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章总结】' },
    { text: '第八章主要内容：' },
    { text: '• 黛玉因误会郁结，独自葬花' },
    { text: '• 吟唱《葬花吟》，表达悲凉心境' },
    { text: '• 宝玉听闻后恸倒，两人情感深化' },
    { text: '核心诗词：《葬花吟》' },
    { text: '经典句子："质本洁来还洁去""花落人亡两不知"' },
    { text: '💡 葬花场景是红楼梦的艺术巅峰。黛玉以落花自喻，预言了自己的悲剧命运。宝黛二人心灵相通，共同预感了结局的悲凉。' },
  ],
  nextNodeId: 'chapter8_end_choice',
}

const chapter8EndChoice: StoryNode = {
  id: 'chapter8_end_choice',
  type: 'choice',
  chapter: 8,
  sceneId: 'yihong_yuan',
  content: { text: '第八章内容已了解完毕，接下来想做什么？' },
  branches: [
    {
      id: 'choice_continue',
      text: '继续阅读第九章',
      hint: '进入下一章',
      targetNodeId: 'chapter9_start',
    },
    {
      id: 'choice_review',
      text: '回顾本章要点',
      hint: '加深理解',
      targetNodeId: 'chapter8_review',
    },
    {
      id: 'choice_annotation',
      text: '查看注释汇总',
      hint: '读书笔记',
      targetNodeId: 'chapter8_annotations',
    },
    {
      id: 'choice_poetry',
      text: '赏析《葬花吟》全诗',
      hint: '诗词详情',
      targetNodeId: 'chapter8_poetry_full',
    },
  ],
}

const chapter8PoetryFull: StoryNode = {
  id: 'chapter8_poetry_full',
  type: 'narrative',
  chapter: 8,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【葬花吟·全文】' },
    { text: '花谢花飞花满天，红消香断有谁怜？' },
    { text: '游丝软系飘春榭，落絮轻沾扑绣帘。' },
    { text: '闺中女儿惜春暮，愁绪满怀无释处。' },
    { text: '手把花锄出绣闺，忍踏落花来复去。' },
    { text: '柳丝榆荚自芳菲，不管桃飘与李飞。' },
    { text: '桃李明年能再发，明年闺中知有谁？' },
    { text: '三月香巢已垒成，梁间燕子太无情。' },
    { text: '明年花发虽可啄，却不道人去梁空巢也倾。' },
    { text: '一年三百六十日，风刀霜剑严相逼。' },
    { text: '明媚鲜妍能几时，一朝飘泊难寻觅。' },
    { text: '花开易见落难寻，阶前愁杀葬花人。' },
    { text: '独倚花锄泪暗洒，洒上空枝见血痕。' },
    { text: '杜鹃无语正黄昏，荷锄归去掩重门。' },
    { text: '青灯照壁人初睡，冷雨敲窗被未温。' },
    { text: '怪奴底事倍伤神，半为怜春半恼春。' },
    { text: '怜春忽至恼忽去，至又无言去不闻。' },
    { text: '昨宵庭外悲歌发，知是花魂与鸟魂？' },
    { text: '花魂鸟魂总难留，鸟自无言花自羞。' },
    { text: '愿奴胁下生双翼，随花飞到天尽头。' },
    { text: '天尽头，何处有香丘？' },
    { text: '未若锦囊收艳骨，一抔净土掩风流。' },
    { text: '质本洁来还洁去，强于污淖陷渠沟。' },
    { text: '尔今死去侬收葬，未卜侬身何日亡？' },
    { text: '侬今葬花人笑痴，他年葬侬知是谁？' },
    { text: '试看春残花渐落，便是红颜老死时。' },
    { text: '一朝春尽红颜老，花落人亡两不知！' },
  ],
  nextNodeId: 'chapter8_end_choice',
}

const chapter8Review: StoryNode = {
  id: 'chapter8_review',
  type: 'narrative',
  chapter: 8,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章要点回顾】' },
    { text: '场景分析：' },
    { text: '• 花冢：黛玉埋花之处，象征洁净归宿' },
    { text: '• 葬花行为：怜惜落花，实怜自己' },
    { text: '诗词名句：' },
    { text: '• "花谢花飞花满天"：开句定调，悲凉凄美' },
    { text: '• "桃李明年能再发，明年闺中知有谁"：花与人对比' },
    { text: '• "质本洁来还洁去"：黛玉的人生宣言' },
    { text: '• "花落人亡两不知"：预示悲剧结局' },
    { text: '意义：葬花是红楼梦悲剧美学的巅峰之作' },
  ],
  nextNodeId: 'chapter8_end_choice',
}

const chapter8Annotations: StoryNode = {
  id: 'chapter8_annotations',
  type: 'narrative',
  chapter: 8,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章注释汇总】' },
    { text: '词汇注释：' },
    { text: '• 花冢：黛玉掘土埋花的去处' },
    { text: '• 芒种节：二十四节气之一，送花神的时节' },
    { text: '• 游丝：春天空中飘荡的细丝' },
    { text: '诗词注释：' },
    { text: '• 《葬花吟》：黛玉最著名的诗作' },
    { text: '• "质本洁来还洁去"：保持洁净的人生追求' },
    { text: '• "风刀霜剑严相逼"：处境艰难的比喻' },
    { text: '💡 点击上方"注释"按钮可查看详细解释。' },
  ],
  nextNodeId: 'chapter8_end_choice',
}

// 章节定义
export const chapter8: StoryChapter = {
  id: 'chapter8',
  number: 8,
  title: '黛玉葬花',
  description: '黛玉独自葬花，吟唱《葬花吟》，预言悲剧命运。宝玉听闻后恸倒，两人情感深化。',
  startNodeId: 'chapter8_start',
  nodes: [
    chapter8Start,
    chapter8Walking,
    chapter8PoetryStart,
    chapter8PoetryMiddle,
    chapter8PoetryCore,
    chapter8PoetryEnd,
    chapter8BaoyuHear,
    chapter8Meet,
    chapter8Meaning,
    chapter8Summary,
    chapter8EndChoice,
    chapter8PoetryFull,
    chapter8Review,
    chapter8Annotations,
  ],
}