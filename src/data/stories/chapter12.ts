import { StoryNode, StoryChapter } from '../../types'

// 第十二章：黛玉焚稿（第九十七回）
// 主题：悲剧高潮，黛玉绝望焚稿

const chapter12Start: StoryNode = {
  id: 'chapter12_start',
  type: 'narrative',
  chapter: 12,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【第十二章：黛玉焚稿】' },
    { text: '话说贾府为宝玉筹办婚事，却瞒着黛玉。众人以为宝玉娶的是黛玉，实则娶的是宝钗。' },
    { text: '黛玉听闻宝玉即将成婚，心中疑虑。后得知新娘竟是宝钗，顿时如遭雷击，病情骤然加重。' },
    { text: '她躺在床上，气息微弱，心中明白：自己一生等待的宝玉，终究与自己无缘。"金玉良缘"已成，"木石前盟"终断。' },
    { text: '💡 黛玉焚稿是红楼梦悲剧的高潮。她一生为宝玉付出，最终却被"金玉良缘"击败。焚稿是她绝望的极致表现——她决定将自己的一切，连同诗稿一同烧毁。' },
  ],
  nextNodeId: 'chapter12_news',
}

const chapter12News: StoryNode = {
  id: 'chapter12_news',
  type: 'narrative',
  chapter: 12,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【得知婚讯】' },
    { text: '黛玉病情本已不稳，听闻宝玉娶宝钗的消息后，更是心如刀绞。' },
    { text: '她想起自己与宝玉的情缘——从初见时的"这个妹妹我曾见过的"，到共读西厢时的表白，到葬花时的悲凉……一切终成泡影。' },
    { text: '黛玉对丫鬟紫鹃说："我 these 年的心血，终究白费了。宝玉娶了宝钗，我还能留什么？"' },
    { text: '紫鹃劝慰，黛玉却说："不必了。我明白自己的命。这一生，注定是薄命的。"' },
    { text: '💡 黛玉得知婚讯后的绝望，是红楼梦最悲怆的场面。她一生的希望，在瞬间化为虚无。"木石前盟"终断，"金玉良缘"已成。' },
  ],
  nextNodeId: 'chapter12_burn_poems',
}

const chapter12BurnPoems: StoryNode = {
  id: 'chapter12_burn_poems',
  type: 'narrative',
  chapter: 12,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【焚烧诗稿】' },
    { text: '黛玉让紫鹃取出她平日写的诗稿，以及宝玉送给她的题诗手帕。' },
    { text: '她将这些诗稿一一投入火盆，看着火焰吞噬那些承载着她心血的文字。' },
    { text: '诗稿化为灰烬，手帕化为灰烬。黛玉看着火焰，眼泪早已干涸。' },
    { text: '她说："这些诗稿，是我一生的心血。如今宝玉娶了别人，这些还有什么意义？不如烧了，干净。"' },
    { text: '💡 焚稿是黛玉绝望的极致。诗稿是她灵魂的结晶，手帕是宝玉给她的情物。烧毁它们，等于烧毁自己的一生，烧毁对宝玉的所有希望。' },
  ],
  nextNodeId: 'chapter12_words',
}

const chapter12Words: StoryNode = {
  id: 'chapter12_words',
  type: 'narrative',
  chapter: 12,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【临终遗言】' },
    { text: '诗稿烧尽后，黛玉躺在床上，气息越来越弱。' },
    { text: '她挣扎着说出最后的遗言："宝玉，宝玉，你好……"' },
    { text: '这句话未说完，黛玉便气绝身亡。年仅十七岁。' },
    { text: '关于这句话有多种解读：有人认为她说的是"宝玉，你好狠心"，有人认为是"宝玉，你好好的"，还有人认为她只是想最后呼唤宝玉的名字。' },
    { text: '💡 "宝玉，宝玉，你好……"是黛玉的临终遗言，也是红楼梦最令人心碎的句子。她一生为宝玉流泪，最终在呼唤宝玉的名字时死去。这句话的未完，象征着她与宝玉的情缘终究未圆满。' },
  ],
  nextNodeId: 'chapter12_death',
}

const chapter12Death: StoryNode = {
  id: 'chapter12_death',
  type: 'narrative',
  chapter: 12,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【黛玉之死】' },
    { text: '黛玉死后，潇湘馆一片悲声。紫鹃、袭人等丫鬟哭得肝肠寸断。' },
    { text: '然而，贾府上下正忙着宝玉的婚礼，对黛玉之死并无太多关注。王夫人只是派人处理后事，并未过多悲伤。' },
    { text: '黛玉的死，在繁华的婚礼背后悄然发生。一边是热闹的婚礼，一边是冰冷的灵堂。' },
    { text: '💡 黛玉之死与宝玉婚礼同时发生，是红楼梦悲剧的极致对比。一边是"金玉良缘"的圆满，一边是"木石前盟"的断绝。热闹与冷清，形成强烈的讽刺。' },
  ],
  nextNodeId: 'chapter12_tragedy',
}

const chapter12Tragedy: StoryNode = {
  id: 'chapter12_tragedy',
  type: 'narrative',
  chapter: 12,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【悲剧意义】' },
    { text: '黛玉焚稿，是红楼梦悲剧的最高潮。其意义有三：' },
    { text: '1. 个人悲剧：黛玉一生追求真爱，却败给了"金玉良缘"，最终绝望而死' },
    { text: '2. 社会悲剧：封建家长安排婚姻，无视年轻人的真情，导致悲剧发生' },
    { text: '3. 象征意义：黛玉焚稿，象征美好事物的毁灭，是全书悲剧主题的集中体现' },
    { text: '💡 黛玉之死是红楼梦的核心悲剧。她代表了追求真情的理想主义者，却被封建礼教摧毁。她的死，不是个人命运的偶然，而是封建制度的必然结果。' },
  ],
  nextNodeId: 'chapter12_summary',
}

const chapter12Summary: StoryNode = {
  id: 'chapter12_summary',
  type: 'narrative',
  chapter: 12,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章总结】' },
    { text: '第十二章主要内容：' },
    { text: '• 黛玉得知宝玉娶宝钗' },
    { text: '• 绝望中焚烧诗稿、手帕' },
    { text: '• 临终遗言："宝玉，宝玉，你好……"' },
    { text: '• 黛玉气绝身亡，年仅十七' },
    { text: '核心悲剧：' },
    { text: '• "木石前盟"断绝' },
    { text: '• "金玉良缘"成立' },
    { text: '• 真情被封建礼教摧毁' },
    { text: '💡 黛玉焚稿是红楼梦最悲怆的场面。她一生为宝玉流泪，最终绝望焚稿，在呼唤宝玉的名字时死去。这是个人悲剧与社会悲剧的双重呈现。' },
  ],
  nextNodeId: 'chapter12_end_choice',
}

const chapter12EndChoice: StoryNode = {
  id: 'chapter12_end_choice',
  type: 'choice',
  chapter: 12,
  sceneId: 'yihong_yuan',
  content: { text: '第十二章内容已了解完毕，接下来想做什么？' },
  branches: [
    {
      id: 'choice_continue',
      text: '继续阅读第十三章',
      hint: '进入结局章',
      targetNodeId: 'chapter13_start',
    },
    {
      id: 'choice_review',
      text: '回顾本章要点',
      hint: '加深理解',
      targetNodeId: 'chapter12_review',
    },
    {
      id: 'choice_annotation',
      text: '查看注释汇总',
      hint: '读书笔记',
      targetNodeId: 'chapter12_annotations',
    },
  ],
}

const chapter12Review: StoryNode = {
  id: 'chapter12_review',
  type: 'narrative',
  chapter: 12,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章要点回顾】' },
    { text: '关键事件：' },
    { text: '• 得知婚讯：宝玉娶宝钗，黛玉绝望' },
    { text: '• 焚烧诗稿：烧毁一生心血' },
    { text: '• 临终遗言："宝玉，宝玉，你好……"' },
    { text: '• 黛玉之死：十七岁，气绝身亡' },
    { text: '悲剧对比：' },
    { text: '• 一边：宝玉婚礼（热闹）' },
    { text: '• 一边：黛玉之死（冷清）' },
    { text: '意义：真情被封建礼教摧毁' },
  ],
  nextNodeId: 'chapter12_end_choice',
}

const chapter12Annotations: StoryNode = {
  id: 'chapter12_annotations',
  type: 'narrative',
  chapter: 12,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章注释汇总】' },
    { text: '词汇注释：' },
    { text: '• 焚稿：烧毁诗稿，绝望的表现' },
    { text: '• 木石前盟：黛玉与宝玉的前世缘分' },
    { text: '• 金玉良缘：宝钗与宝玉的世俗婚姻' },
    { text: '人物注释：' },
    { text: '• 紫鹃：黛玉的贴身丫鬟' },
    { text: '遗言解读：' },
    { text: '• "宝玉，宝玉，你好……"有多种解读' },
    { text: '💡 点击上方"注释"按钮可查看详细解释。' },
  ],
  nextNodeId: 'chapter12_end_choice',
}

// 章节定义
export const chapter12: StoryChapter = {
  id: 'chapter12',
  number: 12,
  title: '黛玉焚稿',
  description: '黛玉得知宝玉娶宝钗后绝望焚稿，临终遗言"宝玉，宝玉，你好……"，气绝身亡。',
  startNodeId: 'chapter12_start',
  nodes: [
    chapter12Start,
    chapter12News,
    chapter12BurnPoems,
    chapter12Words,
    chapter12Death,
    chapter12Tragedy,
    chapter12Summary,
    chapter12EndChoice,
    chapter12Review,
    chapter12Annotations,
  ],
}