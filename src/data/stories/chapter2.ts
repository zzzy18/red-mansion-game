import { StoryNode, StoryChapter } from '../../types'

// 第二章：贾夫人仙逝扬州城 冷子兴演说荣国府
// 主题：介绍贾府的家族结构和背景

const chapter2Start: StoryNode = {
  id: 'chapter2_start',
  type: 'narrative',
  chapter: 2,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【第二章：冷子兴演说荣国府】' },
    { text: '话说贾雨村因官场失意，正在扬州游历，偶遇旧友冷子兴。' },
    { text: '冷子兴是京城古董商，对贾府之事颇为熟悉，便为雨村细说荣国府的情况。' },
  ],
  nextNodeId: 'chapter2_jiafu_intro',
}

const chapter2JiafuIntro: StoryNode = {
  id: 'chapter2_jiafu_intro',
  type: 'narrative',
  chapter: 2,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【荣国府概貌】' },
    { text: '冷子兴道："荣国府是金陵贾氏的分支，与宁国府同为贾家两支。"' },
    { text: '"荣国府由贾源开国而来，其子贾代善袭爵，代善之子便是现在的贾政、贾赦。"' },
    { text: '"贾赦袭爵，贾政为工部员外郎。贾政之子宝玉，就是衔玉而生的那位。"' },
    { text: '💡 贾府分为宁国府（长房）和荣国府（二房），故事主要发生在荣国府贾母这一支。' },
  ],
  nextNodeId: 'chapter2_baoyu_intro',
}

const chapter2BaoyuIntro: StoryNode = {
  id: 'chapter2_baoyu_intro',
  type: 'narrative',
  chapter: 2,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【贾宝玉的来历】' },
    { text: '冷子兴道："这宝玉生时，口中衔下一块五彩晶莹的玉来，上面还有许多字迹，就取名作宝玉。"' },
    { text: '"那年周岁时，贾政老爷要试他将来的志向，便将那世上所有之物摆了无数，与他抓取。"' },
    { text: '"谁知他一概不取，伸手只把些脂粉钗环抓来玩弄。贾政老爷便不喜欢，说他将来是酒色之徒。"' },
    { text: '💡 "抓周"是古代习俗，婴儿周岁时让其抓取物品，以此预测将来志向。宝玉抓取脂粉钗环，暗示他天生怜惜女子。' },
  ],
  nextNodeId: 'chapter2_baoyu_nature',
}

const chapter2BaoyuNature: StoryNode = {
  id: 'chapter2_baoyu_nature',
  type: 'narrative',
  chapter: 2,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【宝玉的性格】' },
    { text: '冷子兴道："如今长了七八岁，虽然淘气异常，但其聪明乖觉处，百个不及他一个。"' },
    { text: '"说起孩子话来也奇怪，他说：『女儿是水作的骨肉，男人是泥作的骨肉。我见了女儿，我便清爽；见了男子，便觉浊臭逼人。』"' },
    { text: '"你道好笑不好笑？将来色鬼无疑了！"' },
    { text: '💡 宝玉的这句话是红楼梦的核心主题之一：他天生怜惜女子，厌恶男性世界的功利与虚伪。这不是"色鬼"，而是对女性命运的深刻同情。' },
  ],
  nextNodeId: 'chapter2_jiamu_intro',
}

const chapter2JiamuIntro: StoryNode = {
  id: 'chapter2_jiamu_intro',
  type: 'narrative',
  chapter: 2,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '【贾母与王熙凤】' },
    { text: '冷子兴道："贾母是荣国府的太夫人，年已古稀，是府中地位最高的人。"' },
    { text: '"她极爱宝玉，视若珍宝，因宝玉生得俊秀，性情温和，最讨她喜欢。"' },
    { text: '"至于王熙凤，是贾琏之妻，贾政夫人王氏的内侄女。她年纪虽轻，行事却比男人还精明强干，荣府家务全由她料理。"' },
    { text: '💡 王熙凤绰号"凤辣子"，是红楼梦中最鲜活的人物之一。她精明能干、泼辣张扬，但也心机深沉、手段狠辣。' },
  ],
  nextNodeId: 'chapter2_xifeng_detail',
}

const chapter2XifengDetail: StoryNode = {
  id: 'chapter2_xifeng_detail',
  type: 'narrative',
  chapter: 2,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '【王熙凤的管理能力】' },
    { text: '冷子兴道："这熙凤虽然年纪小，行事却比世人都大呢。如今出挑的美人一样的模样儿，少说些有一万个心眼子。"' },
    { text: '"再要赌口齿，十个会说话的男人也说他不过。回来你若见了，便知道了，真是个『言谈爽利，心机深细』。"' },
    { text: '"只是她待下人严紧些，府中人都有些畏惧她。"' },
    { text: '💡 "一万个心眼子"虽是夸张，但准确描绘了熙凤的心机。她管理荣府，井井有条，却也因为过于精明，最终"机关算尽太聪明，反算了卿卿性命"。' },
  ],
  nextNodeId: 'chapter2_jiafu_decline',
}

const chapter2JiafuDecline: StoryNode = {
  id: 'chapter2_jiafu_decline',
  type: 'narrative',
  chapter: 2,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【贾府的衰败之象】' },
    { text: '冷子兴叹道："如今的贾府，虽外表看着富贵繁华，内里却已渐渐空虚。"' },
    { text: '"一是人口太多，开销巨大；二是子弟不肖，挥霍无度；三是家仆刁滑，欺上瞒下。"' },
    { text: '"古人云：『百足之虫，死而不僵。』必须先从家里自杀自灭起来，才能一败涂地呢！"' },
    { text: '💡 这段话预示了贾府的命运。红楼梦描写的是一个家族从繁华走向衰败的过程，而衰败的根源恰恰是内部的腐朽。' },
  ],
  nextNodeId: 'chapter2_lin_family',
}

const chapter2LinFamily: StoryNode = {
  id: 'chapter2_lin_family',
  type: 'narrative',
  chapter: 2,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【林如海与贾敏】' },
    { text: '话说扬州有位林如海，乃是前科的探花，今升兰台寺大夫，钦点为巡盐御史。' },
    { text: '这林如海本是贾母女婿——其妻贾敏，是贾母最小的女儿。可惜贾敏染病身亡，只留下一女林黛玉。' },
    { text: '林如海因公务繁忙，无暇照顾黛玉，便写信给贾母，请其接黛玉入府抚养。' },
    { text: '💡 贾敏是贾母最疼爱的女儿，黛玉是她唯一的后代。因此贾母对黛玉格外疼惜，将她接来荣府抚养。' },
  ],
  nextNodeId: 'chapter2_daiyu_go',
}

const chapter2DaiyuGo: StoryNode = {
  id: 'chapter2_daiyu_go',
  type: 'narrative',
  chapter: 2,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【黛玉入京】' },
    { text: '林如海便托贾雨村护送黛玉入京，恰好贾雨村正要复职，便一同上路。' },
    { text: '黛玉年方五六岁，生得风流袅娜，举止言谈不俗。虽年幼，却已有些愁病之态。' },
    { text: '船上，雨村问黛玉读过什么书，黛玉道："只念了《四书》，不过识得几个字罢了。"' },
    { text: '💡 黛玉自幼聪慧，但因母亲去世，已显出多愁善感的性格。"愁病之态"暗示了她日后的体弱多病和命运凄凉。' },
  ],
  nextNodeId: 'chapter2_summary',
}

const chapter2Summary: StoryNode = {
  id: 'chapter2_summary',
  type: 'narrative',
  chapter: 2,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章总结】' },
    { text: '第二章主要内容：' },
    { text: '• 冷子兴介绍荣国府的家族结构和主要人物' },
    { text: '• 宝玉衔玉而生，性情温和，天生怜惜女子' },
    { text: '• 王熙凤精明强干，管理荣府家务' },
    { text: '• 贾府外表繁华，内里渐显衰败之象' },
    { text: '• 林如海送黛玉入京，由贾雨村护送' },
    { text: '💡 本章是红楼梦的重要背景介绍，通过冷子兴的演说，读者得以了解贾府的整体结构，为后续故事奠定基础。' },
  ],
  nextNodeId: 'chapter2_end_choice',
}

const chapter2EndChoice: StoryNode = {
  id: 'chapter2_end_choice',
  type: 'choice',
  chapter: 2,
  sceneId: 'yihong_yuan',
  content: { text: '第二章内容已了解完毕，接下来想做什么？' },
  branches: [
    {
      id: 'choice_continue',
      text: '继续阅读第三章',
      hint: '进入下一章',
      targetNodeId: 'chapter3_start',
    },
    {
      id: 'choice_review',
      text: '回顾本章要点',
      hint: '加深理解',
      targetNodeId: 'chapter2_review',
    },
    {
      id: 'choice_annotation',
      text: '查看注释汇总',
      hint: '读书笔记',
      targetNodeId: 'chapter2_annotations',
    },
  ],
}

const chapter2Review: StoryNode = {
  id: 'chapter2_review',
  type: 'narrative',
  chapter: 2,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章要点回顾】' },
    { text: '家族结构：' },
    { text: '• 宁国府：长房，贾赦袭爵' },
    { text: '• 荣国府：二房，贾政为工部员外郎' },
    { text: '• 贾母：荣国府最高长辈，疼爱宝玉' },
    { text: '人物特点：' },
    { text: '• 宝玉：衔玉而生，怜惜女子，厌恶功名' },
    { text: '• 王熙凤：精明强干，管理家务，心机深沉' },
    { text: '• 黛玉：聪慧敏感，多愁善感' },
    { text: '关键预示：贾府繁华表面下，衰败已现端倪。' },
  ],
  nextNodeId: 'chapter2_end_choice',
}

const chapter2Annotations: StoryNode = {
  id: 'chapter2_annotations',
  type: 'narrative',
  chapter: 2,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章注释汇总】' },
    { text: '词汇注释：' },
    { text: '• 探花：科举考试第三名' },
    { text: '• 兰台寺大夫：官职名称' },
    { text: '• 巡盐御史：管理盐务的官员' },
    { text: '• 抓周：周岁婴儿预测志向的习俗' },
    { text: '典故注释：' },
    { text: '• "百足之虫，死而不僵"：比喻表面未倒，内里已衰' },
    { text: '• "女儿是水作的骨肉"：宝玉的核心人生观' },
    { text: '💡 点击上方"注释"按钮可查看详细解释。' },
  ],
  nextNodeId: 'chapter2_end_choice',
}

// 章节定义
export const chapter2: StoryChapter = {
  id: 'chapter2',
  number: 2,
  title: '冷子兴演说荣国府',
  description: '通过冷子兴的介绍，了解贾府的家族结构和主要人物。',
  startNodeId: 'chapter2_start',
  nodes: [
    chapter2Start,
    chapter2JiafuIntro,
    chapter2BaoyuIntro,
    chapter2BaoyuNature,
    chapter2JiamuIntro,
    chapter2XifengDetail,
    chapter2JiafuDecline,
    chapter2LinFamily,
    chapter2DaiyuGo,
    chapter2Summary,
    chapter2EndChoice,
    chapter2Review,
    chapter2Annotations,
  ],
}