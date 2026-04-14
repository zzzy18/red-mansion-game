import { StoryNode, StoryChapter } from '../../types'

// 第七章：共读西厢（第二十三回）
// 主题：宝玉黛玉共读《西厢记》，情感升温

const chapter7Start: StoryNode = {
  id: 'chapter7_start',
  type: 'narrative',
  chapter: 7,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【第七章：共读西厢】' },
    { text: '话说宝玉入住怡红院后，常往潇湘馆看望黛玉。两人情投意合，相处甚欢。' },
    { text: '一日，宝玉在园中闲逛，偶然得到一本《西厢记》。这书是元代王实甫所作，讲述张生与崔莺莺的爱情故事。' },
    { text: '宝玉深知此书是"禁书"，不可让长辈知道，便偷偷藏在怀中，想找黛玉一同阅读。' },
    { text: '💡 《西厢记》是古代著名的爱情戏曲，讲述书生张生与相国小姐崔莺莺冲破封建礼教、追求自由爱情的故事。因内容大胆，被封建家长视为"禁书"。' },
  ],
  nextNodeId: 'chapter7_read_book',
}

const chapter7ReadBook: StoryNode = {
  id: 'chapter7_read_book',
  type: 'narrative',
  chapter: 7,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【共读《西厢记》】' },
    { text: '宝玉来到潇湘馆，见黛玉正在窗前读书。他悄悄拿出《西厢记》，黛玉一见便知是"禁书"，却也被好奇心驱使。' },
    { text: '两人一同翻阅，读到精彩处，不禁相视而笑。书中的张生与莺莺，正如他们自己——两个年轻人，在封建礼教下追求真情。' },
    { text: '宝玉读到一句："我就是个多愁多病身，你就是那倾国倾城貌。"忍不住笑着对黛玉说："我就是个「多愁多病身」，你就是那「倾国倾城貌」。"' },
    { text: '黛玉闻言，顿时羞红了脸，说道："你这该死的，又胡说！看了混账书，也来欺负我。"' },
  ],
  nextNodeId: 'chapter7_reaction',
}

const chapter7Reaction: StoryNode = {
  id: 'chapter7_reaction',
  type: 'narrative',
  chapter: 7,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【黛玉的反应】' },
    { text: '黛玉虽嘴上责备宝玉，心中却暗自欢喜。那句话正是她心中所想——她与宝玉，正如书中的张生与莺莺。' },
    { text: '黛玉说道："你这书是从哪里得来的？若被长辈知道了，可不得了。"宝玉笑道："我藏得好，他们不知道。"' },
    { text: '两人继续读下去，沉浸在书中的爱情故事里，忘记了时间。' },
    { text: '💡 宝玉用《西厢记》中的话向黛玉表白，是红楼梦中最含蓄又最动人的爱情表达。黛玉表面上责备，实则心中感动，这正是两人心有灵犀的体现。' },
  ],
  nextNodeId: 'chapter7_meaning',
}

const chapter7Meaning: StoryNode = {
  id: 'chapter7_meaning',
  type: 'narrative',
  chapter: 7,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【本章解读】' },
    { text: '共读《西厢记》这一场景，展现了宝玉与黛玉之间微妙而真挚的情感。' },
    { text: '在封建时代，年轻人不能公开表达爱情。《西厢记》这样的"禁书"，成为他们表达心声的媒介。' },
    { text: '宝玉借用书中的话表白，黛玉虽表面责备，心中却明白他的意思。这种含蓄的表达方式，正是中国古代爱情的典型特征。' },
    { text: '💡 "多愁多病身，倾国倾城貌"出自《西厢记》。宝玉以此表白，是将黛玉比作美丽的莺莺，也将自己比作痴情的张生。' },
  ],
  nextNodeId: 'chapter7_poetry',
}

const chapter7Poetry: StoryNode = {
  id: 'chapter7_poetry',
  type: 'narrative',
  chapter: 7,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【诗词赏析】' },
    { text: '《西厢记》中的经典句子：' },
    { text: '"我就是个多愁多病身，你就是那倾国倾城貌。"' },
    { text: '这句话出自张生对崔莺莺的表白，表达了痴情书生对美丽小姐的爱慕。' },
    { text: '宝玉借用于黛玉，恰到好处地表达了他的心意——他是个多愁多感的痴情少年，黛玉则是貌美如花的佳人。' },
    { text: '黛玉虽表面上说要告诉舅舅（贾政），实则是在撒娇，并没有真的去告发宝玉。' },
  ],
  nextNodeId: 'chapter7_summary',
}

const chapter7Summary: StoryNode = {
  id: 'chapter7_summary',
  type: 'narrative',
  chapter: 7,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章总结】' },
    { text: '第七章主要内容：' },
    { text: '• 宝玉获得《西厢记》' },
    { text: '• 与黛玉共读"禁书"' },
    { text: '• 用书中句子含蓄表白' },
    { text: '关键句子：' },
    { text: '"我就是个多愁多病身，你就是那倾国倾城貌。"' },
    { text: '💡 共读《西厢记》是宝黛爱情升温的重要场景。两人借禁书表达真情，展现了古代年轻人追求自由爱情的勇气与含蓄。' },
  ],
  nextNodeId: 'chapter7_end_choice',
}

const chapter7EndChoice: StoryNode = {
  id: 'chapter7_end_choice',
  type: 'choice',
  chapter: 7,
  sceneId: 'yihong_yuan',
  content: { text: '第七章内容已了解完毕，接下来想做什么？' },
  branches: [
    {
      id: 'choice_continue',
      text: '继续阅读第八章',
      hint: '进入下一章',
      targetNodeId: 'chapter8_start',
    },
    {
      id: 'choice_review',
      text: '回顾本章要点',
      hint: '加深理解',
      targetNodeId: 'chapter7_review',
    },
    {
      id: 'choice_annotation',
      text: '查看注释汇总',
      hint: '读书笔记',
      targetNodeId: 'chapter7_annotations',
    },
  ],
}

const chapter7Review: StoryNode = {
  id: 'chapter7_review',
  type: 'narrative',
  chapter: 7,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章要点回顾】' },
    { text: '核心场景：' },
    { text: '• 共读《西厢记》：宝黛情感升温' },
    { text: '• 含蓄表白：借书中的话表达心意' },
    { text: '经典引用：' },
    { text: '"我就是个多愁多病身，你就是那倾国倾城貌"' },
    { text: '意义：' },
    { text: '• 《西厢记》是古代爱情经典' },
    { text: '• 宝黛借书表达真情，含蓄动人' },
    { text: '• 展现封建时代年轻人的爱情困境' },
  ],
  nextNodeId: 'chapter7_end_choice',
}

const chapter7Annotations: StoryNode = {
  id: 'chapter7_annotations',
  type: 'narrative',
  chapter: 7,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章注释汇总】' },
    { text: '作品注释：' },
    { text: '• 《西厢记》：元代王实甫所作爱情戏曲' },
    { text: '• 张生与崔莺莺：《西厢记》男女主角' },
    { text: '词汇注释：' },
    { text: '• 多愁多病身：痴情书生的自嘲' },
    { text: '• 倾国倾城貌：形容女子极美' },
    { text: '💡 点击上方"注释"按钮可查看详细解释。' },
  ],
  nextNodeId: 'chapter7_end_choice',
}

// 章节定义
export const chapter7: StoryChapter = {
  id: 'chapter7',
  number: 7,
  title: '共读西厢',
  description: '宝玉与黛玉共读《西厢记》，借书中句子含蓄表白，情感升温。',
  startNodeId: 'chapter7_start',
  nodes: [
    chapter7Start,
    chapter7ReadBook,
    chapter7Reaction,
    chapter7Meaning,
    chapter7Poetry,
    chapter7Summary,
    chapter7EndChoice,
    chapter7Review,
    chapter7Annotations,
  ],
}