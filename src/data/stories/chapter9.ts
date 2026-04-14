import { StoryNode, StoryChapter } from '../../types'

// 第九章：宝玉挨打（第三十三回）
// 主题：家族冲突的高潮，展现封建压迫

const chapter9Start: StoryNode = {
  id: 'chapter9_start',
  type: 'narrative',
  chapter: 9,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '【第九章：宝玉挨打】' },
    { text: '话说宝玉在大观园中逍遥自在，却惹来了父亲的怒火。' },
    { text: '一日，贾政听闻宝玉与戏子琪官交往密切，心中大怒。后又得知金钏儿因宝玉跳井自杀，更是火冒三丈。' },
    { text: '贾政本就对宝玉厌恶科举功名的态度不满，如今又添这些"不肖"之事，怒不可遏。' },
    { text: '💡 宝玉挨打是红楼梦家族冲突的高潮。贾政代表了封建家长的权威，宝玉则代表了追求自由、反抗封建礼教的年轻一代。这场冲突揭示了封建家庭的深层矛盾。' },
  ],
  nextNodeId: 'chapter9_reasons',
}

const chapter9Reasons: StoryNode = {
  id: 'chapter9_reasons',
  type: 'narrative',
  chapter: 9,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '【挨打原因】' },
    { text: '宝玉挨打，有三重原因：' },
    { text: '1. 与戏子交往：宝玉与琪官（蒋玉菡）交好，贾政认为这是"勾引优伶"，大逆不道' },
    { text: '2. 金钏儿之死：王夫人丫鬟金钏儿因宝玉玩笑之言被撵，羞愤跳井自杀' },
    { text: '3. 厌恶功名：宝玉不喜读书，不走科举之路，贾政认为他不肖' },
    { text: '💡 在封建社会，戏子被视为低贱之人，与戏子交往是"败坏门风"。金钏儿之死更是宝玉难以承受的罪责。这些事件叠加，引发了贾政的雷霆之怒。' },
  ],
  nextNodeId: 'chapter9_beating',
}

const chapter9Beating: StoryNode = {
  id: 'chapter9_beating',
  type: 'narrative',
  chapter: 9,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '【痛打宝玉】' },
    { text: '贾政将宝玉叫到书房，命他跪下。宝玉见父亲面如铁色，知是大祸临头。' },
    { text: '贾政怒喝："该死的奴才！你在家不读书，在外勾引优伶，如今又逼死人命，还敢强辩！"' },
    { text: '说着，贾政命小厮将宝玉按在凳上，举起大板，狠狠打下去。一板下去，宝玉便大叫一声。' },
    { text: '贾政越打越怒，一连打了三四十下，宝玉臀部已是皮开肉绽，血流如注。' },
    { text: '💡 这场痛打是封建家长权力的极致展现。贾政不打死宝玉不肯罢休，认为这是"教训"，实则是对儿子人格的摧残。' },
  ],
  nextNodeId: 'chapter9_rescue',
}

const chapter9Rescue: StoryNode = {
  id: 'chapter9_rescue',
  type: 'narrative',
  chapter: 9,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '【众人求情】' },
    { text: '宝玉被打得气息微弱，几乎昏厥。门客、仆人见状，急忙去请王夫人、贾母来救。' },
    { text: '王夫人赶到，见宝玉被打成这样，心疼得大哭，跪下求贾政："老爷，饶了他吧！若是打死他，我也活不成了！"' },
    { text: '贾母闻讯赶来，更是怒不可遏，对贾政喝道："先打死我，再打死他，就干净了！"' },
    { text: '贾政见贾母如此，方才住手，但仍怒气未消，骂道："都是你们惯的！日后若做出杀人放火的事，都是你们之罪！"' },
    { text: '💡 贾母是贾府最高权威，她的出现挽救了宝玉。但她对宝玉的溺爱，也被贾政认为是导致宝玉"不肖"的原因。' },
  ],
  nextNodeId: 'chapter9_after',
}

const chapter9After: StoryNode = {
  id: 'chapter9_after',
  type: 'narrative',
  chapter: 9,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【探伤】' },
    { text: '宝玉被抬回怡红院，众人纷纷前来探望。袭人、晴雯等丫鬟伺候，为他敷药止痛。' },
    { text: '黛玉听闻宝玉挨打，心中悲痛，悄悄来看他。见宝玉伤势严重，黛玉不禁落泪，眼睛哭得红肿。' },
    { text: '宝钗也来探望，却表现得含蓄稳重，只是劝宝玉日后"少做些没正经的事"。' },
    { text: '宝玉见黛玉如此伤心，心中感动，说道："你眼睛哭红了，日后又说是我害的。"黛玉听了，又悲又喜。' },
    { text: '💡 黛玉与宝钗探伤的不同表现，体现了两人性格差异。黛玉真情流露，宝钗则含蓄克制。宝玉挨打后，两人的感情都更进一步。' },
  ],
  nextNodeId: 'chapter9_reflection',
}

const chapter9Reflection: StoryNode = {
  id: 'chapter9_reflection',
  type: 'narrative',
  chapter: 9,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【宝玉的反思】' },
    { text: '挨打之后，宝玉躺在床上，反思自己的所作所为。' },
    { text: '他想：自己确实与琪官交好，金钏儿之死也与自己有关。但自己厌恶科举功名、喜爱与女子交往，这些难道就是错吗？' },
    { text: '宝玉心中明白：父亲要他走的是封建正道，而他却向往自由。这冲突，恐怕永远无法调和。' },
    { text: '但他并不后悔自己的选择。宁挨打，也不愿改变本心。' },
    { text: '💡 宝玉挨打后的反思，展现了他对封建价值观的抵触。他宁愿承受肉体痛苦，也不愿放弃追求自由和真情的人生信念。' },
  ],
  nextNodeId: 'chapter9_summary',
}

const chapter9Summary: StoryNode = {
  id: 'chapter9_summary',
  type: 'narrative',
  chapter: 9,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章总结】' },
    { text: '第九章主要内容：' },
    { text: '• 宝玉因多事惹怒贾政' },
    { text: '• 被父亲痛打，皮开肉绽' },
    { text: '• 贾母、王夫人求情救下' },
    { text: '• 黛玉、宝钗探伤，情感深化' },
    { text: '关键人物：' },
    { text: '• 贾政：封建家长权威的代表' },
    { text: '• 宝玉：追求自由，反抗封建' },
    { text: '• 黛玉：真情流露，心疼宝玉' },
    { text: '💡 宝玉挨打揭示了封建家庭父子之间的深层矛盾。贾政代表了封建正统，宝玉则代表了新一代对自由的向往。' },
  ],
  nextNodeId: 'chapter9_end_choice',
}

const chapter9EndChoice: StoryNode = {
  id: 'chapter9_end_choice',
  type: 'choice',
  chapter: 9,
  sceneId: 'yihong_yuan',
  content: { text: '第九章内容已了解完毕，接下来想做什么？' },
  branches: [
    {
      id: 'choice_continue',
      text: '继续阅读第十章',
      hint: '进入下一章',
      targetNodeId: 'chapter10_start',
    },
    {
      id: 'choice_review',
      text: '回顾本章要点',
      hint: '加深理解',
      targetNodeId: 'chapter9_review',
    },
    {
      id: 'choice_annotation',
      text: '查看注释汇总',
      hint: '读书笔记',
      targetNodeId: 'chapter9_annotations',
    },
  ],
}

const chapter9Review: StoryNode = {
  id: 'chapter9_review',
  type: 'narrative',
  chapter: 9,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章要点回顾】' },
    { text: '挨打原因：' },
    { text: '• 与戏子交往：勾引优伶，败坏门风' },
    { text: '• 金钏儿之死：间接导致丫鬟自杀' },
    { text: '• 厌恶功名：不走科举之路' },
    { text: '关键场景：' },
    { text: '• 贾政痛打：封建家长权力的展现' },
    { text: '• 责任母求情：溺爱引发争议' },
    { text: '• 黛玉探伤：真情流露，眼泪红肿' },
    { text: '意义：父子冲突，封建与自由的矛盾' },
  ],
  nextNodeId: 'chapter9_end_choice',
}

const chapter9Annotations: StoryNode = {
  id: 'chapter9_annotations',
  type: 'narrative',
  chapter: 9,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章注释汇总】' },
    { text: '词汇注释：' },
    { text: '• 戏子：古代被视为低贱职业的演员' },
    { text: '• 优伶：戏子的另一种称呼' },
    { text: '• 不肖：不贤不孝，不听从教诲' },
    { text: '人物注释：' },
    { text: '• 琪官（蒋玉菡）：宝玉结识的戏子' },
    { text: '• 金钏儿：王夫人丫鬟，因宝玉跳井自杀' },
    { text: '💡 点击上方"注释"按钮可查看详细解释。' },
  ],
  nextNodeId: 'chapter9_end_choice',
}

// 章节定义
export const chapter9: StoryChapter = {
  id: 'chapter9',
  number: 9,
  title: '宝玉挨打',
  description: '宝玉因与戏子交往、金钏儿之死惹怒贾政，被痛打。黛玉、宝钗探伤，情感深化。',
  startNodeId: 'chapter9_start',
  nodes: [
    chapter9Start,
    chapter9Reasons,
    chapter9Beating,
    chapter9Rescue,
    chapter9After,
    chapter9Reflection,
    chapter9Summary,
    chapter9EndChoice,
    chapter9Review,
    chapter9Annotations,
  ],
}