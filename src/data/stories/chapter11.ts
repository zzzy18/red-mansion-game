import { StoryNode, StoryChapter } from '../../types'

// 第十一章：联诗悲凉（第七十六回）
// 主题：贾府繁华的最后一幕，悲凉渐生

const chapter11Start: StoryNode = {
  id: 'chapter11_start',
  type: 'narrative',
  chapter: 11,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【第十一章：联诗悲凉】' },
    { text: '话说中秋佳节，贾府在凸碧堂赏月。贾母虽年事已高，仍兴致勃勃，组织家宴。' },
    { text: '然而，今年的中秋与往年不同。王熙凤因病缺席，宝钗、宝琴被薛姨妈接走，迎春嫁给孙家后也不在场。' },
    { text: '众人围坐，饮酒赏月，却少了几分往日的热闹。贾母感叹人丁不旺，不禁有些悲凉。' },
    { text: '💡 中秋联诗是贾府繁华的最后一幕。此后，悲剧接踵而至。这个中秋虽有月亮、有酒宴，却已透出衰败的气息。' },
  ],
  nextNodeId: 'chapter11_dinner',
}

const chapter11Dinner: StoryNode = {
  id: 'chapter11_dinner',
  type: 'narrative',
  chapter: 11,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '【中秋宴席】' },
    { text: '贾母坐在高处，宝玉、黛玉、探春、惜春等围坐两旁。' },
    { text: '众人击鼓传花，击鼓者蒙眼击鼓，花传到谁手中，便要说一个笑话或吟一首诗。' },
    { text: '贾母笑道："往年人多热闹，今年却冷清了些。但既有月亮，有你们这些孙子孙女，也算是团圆了。"' },
    { text: '宝玉见贾母兴致尚好，也尽力陪笑，心中却惦记着黛玉——她近日身体不佳，今日也显得憔悴。' },
    { text: '💡 贾母的感叹暗示了贾府的衰败。"往年人多热闹，今年冷清"——这是繁华逝去的信号。' },
  ],
  nextNodeId: 'chapter11_lian_shi',
}

const chapter11LianShi: StoryNode = {
  id: 'chapter11_lian_shi',
  type: 'narrative',
  chapter: 11,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【黛玉湘云联诗】' },
    { text: '宴席散后，黛玉与湘云不愿早睡，便一同来到凹晶馆。此处临近水面，月光清冷。' },
    { text: '两人倚栏赏月，湘云提议联诗——一人吟一句，轮流接续。' },
    { text: '黛玉道："如此甚好，我们便以中秋为题，联一首诗。"' },
    { text: '湘云先吟："三五中秋夕，清游拟上元。"' },
    { text: '黛玉接道："撒天箕斗灿，匝地管弦喧。"' },
    { text: '💡 联诗是古代文人的雅趣，一人吟一句，轮流接续。黛玉与湘云的联诗，从热闹渐渐转向悲凉，反映了两人的心境变化。' },
  ],
  nextNodeId: 'chapter11_poetry_continue',
}

const chapter11PoetryContinue: StoryNode = {
  id: 'chapter11_poetry_continue',
  type: 'narrative',
  chapter: 11,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【联诗继续】' },
    { text: '两人继续联诗，从热闹渐转向悲凉：' },
    { text: '湘云："几处狂飞盏，谁家不启轩。"' },
    { text: '黛玉："轻寒风剪剪，良夜景暄暄。"' },
    { text: '湘云："争饼嘲黄发，分瓜笑绿媛。"' },
    { text: '黛玉："香新荣玉桂，色健茂金萱。"' },
    { text: '两人你来我往，诗兴渐浓，却也在不知不觉中，吟出了悲凉的情绪。' },
    { text: '💡 联诗从热闹渐转悲凉。"轻寒风剪剪"写出秋夜的凉意，也暗示了心境的变化。' },
  ],
  nextNodeId: 'chapter11_famous_line',
}

const chapter11FamousLine: StoryNode = {
  id: 'chapter11_famous_line',
  type: 'narrative',
  chapter: 11,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【经典句子】' },
    { text: '联诗渐渐到了结尾，湘云吟出一句：' },
    { text: '"寒塘渡鹤影，"' },
    { text: '黛玉听了，不禁叫绝，说道："何等清冷！这鹤影渡塘，何等凄凉。"' },
    { text: '黛玉沉吟片刻，接道：' },
    { text: '"冷月葬花魂。"' },
    { text: '湘云听了，叹道："太悲凉了！冷月葬花魂，这是何等凄惨之句。"' },
    { text: '💡 "寒塘渡鹤影，冷月葬花魂"是红楼梦最悲凉的句子。鹤影、花魂都是孤独漂泊的意象，暗示黛玉的命运——她将如花魂一般，在冷月下消逝。' },
  ],
  nextNodeId: 'chapter11_end',
}

const chapter11End: StoryNode = {
  id: 'chapter11_end',
  type: 'narrative',
  chapter: 11,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【联诗结束】' },
    { text: '两人联完诗，心中都有些怅然。黛玉更是悲从中来，想起自己的身世命运。' },
    { text: '湘云见黛玉神色悲凉，便劝道："何必如此伤感？我们且回去歇息吧。"' },
    { text: '黛玉点头，两人携手回到潇湘馆。月光依旧清冷，照在两人的身上。' },
    { text: '这中秋夜，本是团圆，却成了悲凉的预兆。繁华已去，衰败将至。' },
    { text: '💡 中秋联诗是红楼梦悲凉美学的高峰。"冷月葬花魂"预示了黛玉的命运，也预示了贾府的衰败。繁华终将逝去，一切归于虚无。' },
  ],
  nextNodeId: 'chapter11_summary',
}

const chapter11Summary: StoryNode = {
  id: 'chapter11_summary',
  type: 'narrative',
  chapter: 11,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章总结】' },
    { text: '第十一章主要内容：' },
    { text: '• 中秋宴席，贾母感叹人丁不旺' },
    { text: '• 黛玉湘云联诗赏月' },
    { text: '• "冷月葬花魂"预示悲剧' },
    { text: '核心句子：' },
    { text: '"寒塘渡鹤影，冷月葬花魂"' },
    { text: '意义：' },
    { text: '• 繁华逝去，衰败将至' },
    { text: '• 黛玉命运预示：如花魂消逝' },
    { text: '💡 中秋联诗是红楼梦悲剧美学的高峰。美好之中透出悲凉，团圆之中暗含离散。这是全书衰败的前兆。' },
  ],
  nextNodeId: 'chapter11_end_choice',
}

const chapter11EndChoice: StoryNode = {
  id: 'chapter11_end_choice',
  type: 'choice',
  chapter: 11,
  sceneId: 'yihong_yuan',
  content: { text: '第十一章内容已了解完毕，接下来想做什么？' },
  branches: [
    {
      id: 'choice_continue',
      text: '继续阅读第十二章',
      hint: '进入下一章',
      targetNodeId: 'chapter12_start',
    },
    {
      id: 'choice_review',
      text: '回顾本章要点',
      hint: '加深理解',
      targetNodeId: 'chapter11_review',
    },
    {
      id: 'choice_annotation',
      text: '查看注释汇总',
      hint: '读书笔记',
      targetNodeId: 'chapter11_annotations',
    },
  ],
}

const chapter11Review: StoryNode = {
  id: 'chapter11_review',
  type: 'narrative',
  chapter: 11,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章要点回顾】' },
    { text: '场景分析：' },
    { text: '• 凸碧堂：赏月宴席，繁华最后一幕' },
    { text: '• 凹晶馆：联诗赏月，悲凉渐生' },
    { text: '经典句子：' },
    { text: '• "寒塘渡鹤影"：湘云所吟，清冷凄凉' },
    { text: '• "冷月葬花魂"：黛玉所接，预示命运' },
    { text: '意义：' },
    { text: '• 繁华逝去，衰败将至' },
    { text: '• 黛玉命运：如花魂在冷月下消逝' },
  ],
  nextNodeId: 'chapter11_end_choice',
}

const chapter11Annotations: StoryNode = {
  id: 'chapter11_annotations',
  type: 'narrative',
  chapter: 11,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章注释汇总】' },
    { text: '地点注释：' },
    { text: '• 凸碧堂：贾府高处，赏月宴席之所' },
    { text: '• 凹晶馆：临近水面，联诗之处' },
    { text: '诗词注释：' },
    { text: '• 联诗：一人吟一句，轮流接续' },
    { text: '• "冷月葬花魂"：预示黛玉命运的经典句子' },
    { text: '💡 点击上方"注释"按钮可查看详细解释。' },
  ],
  nextNodeId: 'chapter11_end_choice',
}

// 章节定义
export const chapter11: StoryChapter = {
  id: 'chapter11',
  number: 11,
  title: '联诗悲凉',
  description: '中秋夜宴，黛玉与湘云联诗，"冷月葬花魂"预示悲剧命运，繁华逝去，衰败将至。',
  startNodeId: 'chapter11_start',
  nodes: [
    chapter11Start,
    chapter11Dinner,
    chapter11LianShi,
    chapter11PoetryContinue,
    chapter11FamousLine,
    chapter11End,
    chapter11Summary,
    chapter11EndChoice,
    chapter11Review,
    chapter11Annotations,
  ],
}