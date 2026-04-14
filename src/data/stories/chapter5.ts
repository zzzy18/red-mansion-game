import { StoryNode, StoryChapter } from '../../types'

// 第五章：游幻境指迷十二钗 饮仙醪曲演红楼梦
// 主题：宝玉梦入太虚幻境，预示全书人物命运

const chapter5Start: StoryNode = {
  id: 'chapter5_start',
  type: 'narrative',
  chapter: 5,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【第五章：游幻境指迷十二钗】' },
    { text: '话说宝玉在宁国府赏梅，因倦怠欲睡。秦可卿便引他到自己的卧室安歇。' },
    { text: '这卧室布置精致，香气袭人。宝玉躺在床上，恍惚间便入了梦境。' },
    { text: '💡 第五回是红楼梦的关键章节，宝玉梦入太虚幻境，看到了金陵十二钗的命运判词，预示了全书主要人物的结局。' },
  ],
  nextNodeId: 'chapter5_enter_dream',
}

const chapter5EnterDream: StoryNode = {
  id: 'chapter5_enter_dream',
  type: 'narrative',
  chapter: 5,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【梦入太虚幻境】' },
    { text: '宝玉梦中跟随一位仙姑，来到一处仙境。只见朱栏玉砌，绿树清溪，人迹不逢，飞尘罕到。' },
    { text: '门前有一副对联："假作真时真亦假，无为有处有还无。"' },
    { text: '宝玉甚是惊讶，仙姑笑道："此乃太虚幻境，我是警幻仙子，专司人间风情月债。"' },
    { text: '💡 太虚幻境是红楼梦的玄幻设定。"假作真时真亦假"点明全书主题——真假虚实难以分辨，人生如梦。' },
  ],
  nextNodeId: 'chapter5_registry',
}

const chapter5Registry: StoryNode = {
  id: 'chapter5_registry',
  type: 'narrative',
  chapter: 5,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【金陵十二钗册】' },
    { text: '警幻仙子引宝玉进入一殿，只见殿上悬挂匾额："薄命司"。' },
    { text: '殿内有十数个大橱，皆是各省女子的命运册籍。宝玉打开"金陵十二钗正册"，见上面写着十二位女子的命运判词。' },
    { text: '仙子道："这十二钗，皆是与你缘分深厚之人。你且看她们的命运如何。"' },
    { text: '💡 金陵十二钗是红楼梦中最重要的十二位女性角色：林黛玉、薛宝钗、贾元春、贾探春、史湘云、妙玉、贾迎春、贾惜春、王熙凤、贾巧姐、李纨、秦可卿。' },
  ],
  nextNodeId: 'chapter5_daiyu_baochai',
}

const chapter5DaiyuBaochai: StoryNode = {
  id: 'chapter5_daiyu_baochai',
  type: 'narrative',
  chapter: 5,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【黛玉与宝钗判词】' },
    { text: '宝玉翻开第一页，只见画着一株枯木，木上悬着一围玉带；又有一堆雪，雪下一股金簪。' },
    { text: '判词写道："可叹停机德，堪怜咏絮才。玉带林中挂，金簪雪里埋。"' },
    { text: '宝玉不解，仙子解释："这判词暗指两人——黛玉与宝钗。一个有咏絮之才（黛玉），一个有停机之德（宝钗），命运皆不圆满。"' },
    { text: '💡 "玉带林中挂"暗示黛玉之名（林、黛），命运凄凉；"金簪雪里埋"暗示宝钗之名（薛、钗），虽有金玉良缘，却也埋没于雪中。' },
  ],
  nextNodeId: 'chapter5_xifeng',
}

const chapter5Xifeng: StoryNode = {
  id: 'chapter5_xifeng',
  type: 'narrative',
  chapter: 5,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '【王熙凤判词】' },
    { text: '宝玉又翻一页，见画着一座高楼，楼上有一美人悬梁自尽。' },
    { text: '判词写道："凡鸟偏从末世来，都知爱慕此生才。一从二令三人木，哭向金陵事更哀。"' },
    { text: '仙子道："此乃王熙凤。她生于贾府末世，才华出众，却机关算尽，最终家破人亡，命运悲惨。"' },
    { text: '💡 "凡鸟"合起来是"凤"字。"机关算尽太聪明，反算了卿卿性命"是熙凤命运的写照。她精于算计，却难逃悲剧结局。' },
  ],
  nextNodeId: 'chapter5_other_girls',
}

const chapter5OtherGirls: StoryNode = {
  id: 'chapter5_other_girls',
  type: 'narrative',
  chapter: 5,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【其他女子判词】' },
    { text: '宝玉继续翻阅，见到了其他女子的判词：' },
    { text: '• 贾元春：荣华富贵，却死于宫廷深处的孤独' },
    { text: '• 贾探春：精明能干，却远嫁他乡' },
    { text: '• 史湘云：开朗豪爽，婚后丈夫早逝' },
    { text: '• 妙玉：清高孤傲，最终落入尘泥' },
    { text: '• 贾迎春：懦弱温和，嫁与恶人，受虐而死' },
    { text: '• 贾惜春：冷淡孤僻，最终出家为尼' },
    { text: '💡 每位女子的判词都预示着悲剧结局。红楼梦是一部关于女性命运的悲剧，反映了封建社会对女性的压迫。' },
  ],
  nextNodeId: 'chapter5_music',
}

const chapter5Music: StoryNode = {
  id: 'chapter5_music',
  type: 'narrative',
  chapter: 5,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【红楼梦曲】' },
    { text: '随后，警幻仙子命十二舞女演唱《红楼梦曲》，共有十四支曲子。' },
    { text: '第一支《红楼梦引子》唱道："开辟鸿蒙，谁为情种？都只为风月情浓。趁着这奈何天，伤怀日，寂寥时，试遣愚衷。因此上，演出这怀金悼玉的《红楼梦》。"' },
    { text: '最后一支《飞鸟各投林》唱道："为官的，家业凋零；富贵的，金银散尽……好一似食尽鸟投林，落了片白茫茫大地真干净！"' },
    { text: '💡 《红楼梦曲》概括了全书的主题。"白茫茫大地真干净"预示贾府最终败落，一切归于虚无。' },
  ],
  nextNodeId: 'chapter5_wakeup',
}

const chapter5Wakeup: StoryNode = {
  id: 'chapter5_wakeup',
  type: 'narrative',
  chapter: 5,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【梦醒】' },
    { text: '宝玉听完曲子，迷迷糊糊间被警幻仙子送出幻境。' },
    { text: '醒来时，发现自己还在秦可卿的卧室，丫鬟袭人等在旁边伺候。' },
    { text: '宝玉想起梦中之事，却记不清判词细节，只觉心中怅然若失。' },
    { text: '袭人见他神情恍惚，问道："二爷怎么了？"宝玉叹道："做了一个奇怪的梦，却说不清楚。"' },
    { text: '💡 宝玉虽忘了判词内容，但潜意识中已知晓众人命运。这梦境奠定了全书悲剧基调，暗示了所有人无法逃脱的宿命。' },
  ],
  nextNodeId: 'chapter5_meaning',
}

const chapter5Meaning: StoryNode = {
  id: 'chapter5_meaning',
  type: 'narrative',
  chapter: 5,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章解读】' },
    { text: '第五回是红楼梦的"预言章"，通过宝玉的梦境，预先展示了所有主要人物的命运结局。' },
    { text: '作者曹雪芹运用"草蛇灰线"的手法，在故事初期便埋下伏笔，让读者知道所有人终将走向悲剧。' },
    { text: '这种写法独特之处在于：读者明知结局悲惨，却仍要继续阅读，见证美好如何一步步走向毁灭。' },
    { text: '💡 "草蛇灰线"是中国古典小说的创作手法，指在情节中埋下伏笔，读者初看不觉，待结局揭晓方知其妙。' },
  ],
  nextNodeId: 'chapter5_summary',
}

const chapter5Summary: StoryNode = {
  id: 'chapter5_summary',
  type: 'narrative',
  chapter: 5,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章总结】' },
    { text: '第五章主要内容：' },
    { text: '• 宝玉梦入太虚幻境' },
    { text: '• 见金陵十二钗命运判词' },
    { text: '• 听《红楼梦曲》预示结局' },
    { text: '核心概念：' },
    { text: '• 太虚幻境：玄幻世界，真假虚实' },
    { text: '• 金陵十二钗：十二位主要女性角色' },
    { text: '• 命判：预示命运的诗词' },
    { text: '💡 第五回是理解红楼梦的关键。判词与曲子暗示了全书走向，"白茫茫大地真干净"是终极结局。' },
  ],
  nextNodeId: 'chapter5_end_choice',
}

const chapter5EndChoice: StoryNode = {
  id: 'chapter5_end_choice',
  type: 'choice',
  chapter: 5,
  sceneId: 'yihong_yuan',
  content: { text: '第五章内容已了解完毕，接下来想做什么？' },
  branches: [
    {
      id: 'choice_continue',
      text: '继续阅读第六章',
      hint: '进入下一章',
      targetNodeId: 'chapter6_start',
    },
    {
      id: 'choice_review',
      text: '回顾本章要点',
      hint: '加深理解',
      targetNodeId: 'chapter5_review',
    },
    {
      id: 'choice_annotation',
      text: '查看注释汇总',
      hint: '读书笔记',
      targetNodeId: 'chapter5_annotations',
    },
  ],
}

const chapter5Review: StoryNode = {
  id: 'chapter5_review',
  type: 'narrative',
  chapter: 5,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章要点回顾】' },
    { text: '关键场景：' },
    { text: '• 梦入太虚幻境' },
    { text: '• 浏览金陵十二钗判词' },
    { text: '• 听《红楼梦曲》' },
    { text: '判词解读：' },
    { text: '• 黛玉宝钗："玉带林中挂，金簪雪里埋"' },
    { text: '• 王熙凤："机关算尽太聪明"' },
    { text: '• 结局："白茫茫大地真干净"' },
    { text: '核心主题：命运无法逃脱，悲剧注定发生。' },
  ],
  nextNodeId: 'chapter5_end_choice',
}

const chapter5Annotations: StoryNode = {
  id: 'chapter5_annotations',
  type: 'narrative',
  chapter: 5,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章注释汇总】' },
    { text: '概念注释：' },
    { text: '• 太虚幻境：玄幻世界，象征梦境与虚幻' },
    { text: '• 警幻仙子：太虚幻境的守护者' },
    { text: '• 金陵十二钗：十二位主要女子' },
    { text: '判词注释：' },
    { text: '• "假作真时真亦假"：真假虚实难以分辨' },
    { text: '• "白茫茫大地真干净"：一切归于虚无' },
    { text: '💡 点击上方"注释"按钮可查看详细解释。' },
  ],
  nextNodeId: 'chapter5_end_choice',
}

// 章节定义
export const chapter5: StoryChapter = {
  id: 'chapter5',
  number: 5,
  title: '游幻境指迷十二钗',
  description: '宝玉梦入太虚幻境，见金陵十二钗命运判词，听《红楼梦曲》，预示全书人物结局。',
  startNodeId: 'chapter5_start',
  nodes: [
    chapter5Start,
    chapter5EnterDream,
    chapter5Registry,
    chapter5DaiyuBaochai,
    chapter5Xifeng,
    chapter5OtherGirls,
    chapter5Music,
    chapter5Wakeup,
    chapter5Meaning,
    chapter5Summary,
    chapter5EndChoice,
    chapter5Review,
    chapter5Annotations,
  ],
}