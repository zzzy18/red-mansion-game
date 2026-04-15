import { StoryNode, StoryChapter } from '../../types'

// 第七章：共读西厢（第二十三回）
// 主题：宝玉黛玉共读《西厢记》，情感升温
// 互动：对话节点、选择效果、条件分支

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
  nextNodeId: 'chapter7_arrive',
}

// 到达潇湘馆 - 对话节点
const chapter7Arrive: StoryNode = {
  id: 'chapter7_arrive',
  type: 'dialogue',
  chapter: 7,
  sceneId: 'xiaoxiang_guan',
  content: [
    { speaker: 'baoyu', expression: 'happy', position: 'right', text: '（悄悄来到潇湘馆）黛玉妹妹，你在做什么呢？' },
    { speaker: 'daiyu', expression: 'thinking', position: 'left', text: '我在窗前看书。你怎么来了？' },
    { speaker: 'baoyu', expression: 'shy', text: '我有一本好书，想与你一同看。' },
  ],
  nextNodeId: 'chapter7_show_book_choice',
}

// 是否展示书籍的选择
const chapter7ShowBookChoice: StoryNode = {
  id: 'chapter7_show_book_choice',
  type: 'choice',
  chapter: 7,
  sceneId: 'xiaoxiang_guan',
  content: { text: '你要如何向黛玉展示这本"禁书"？' },
  branches: [
    {
      id: 'choice_direct',
      text: '直接拿出《西厢记》，说："这是本好书，我们一起看。"',
      hint: '大胆直接，+好感度',
      effects: [{ type: 'modify_relation', target: 'daiyu', value: 5 }],
      targetNodeId: 'chapter7_show_direct',
    },
    {
      id: 'choice_secret',
      text: '神秘地说："我藏了好东西，你猜是什么？"',
      hint: '含蓄有趣，+好感度',
      effects: [{ type: 'modify_relation', target: 'daiyu', value: 8 }],
      targetNodeId: 'chapter7_show_secret',
    },
    {
      id: 'choice_hesitant',
      text: '犹豫地说："这书……怕你不喜看。"',
      hint: '谨慎试探',
      effects: [{ type: 'modify_relation', target: 'daiyu', value: -2 }],
      targetNodeId: 'chapter7_show_hesitant',
    },
  ],
}

// 直接展示书籍
const chapter7ShowDirect: StoryNode = {
  id: 'chapter7_show_direct',
  type: 'dialogue',
  chapter: 7,
  sceneId: 'xiaoxiang_guan',
  content: [
    { speaker: 'daiyu', expression: 'surprised', position: 'left', text: '《西厢记》？这可是禁书，你怎么敢带到这里来？' },
    { speaker: 'baoyu', expression: 'happy', position: 'right', text: '没事的，我藏得好，没人知道。妹妹既然好奇，便一起看吧。' },
  ],
  nextNodeId: 'chapter7_daiyu_reaction_condition',
}

// 神秘展示书籍
const chapter7ShowSecret: StoryNode = {
  id: 'chapter7_show_secret',
  type: 'dialogue',
  chapter: 7,
  sceneId: 'xiaoxiang_guan',
  content: [
    { speaker: 'daiyu', expression: 'thinking', position: 'left', text: '好东西？是什么书？' },
    { speaker: 'baoyu', expression: 'shy', position: 'right', text: '（悄悄拿出）是《西厢记》。' },
    { speaker: 'daiyu', expression: 'surprised', text: '（眼睛一亮）这书我听说过，却从未读过。' },
  ],
  nextNodeId: 'chapter7_reading_dialogue',
}

// 犹豫展示书籍
const chapter7ShowHesitant: StoryNode = {
  id: 'chapter7_show_hesitant',
  type: 'dialogue',
  chapter: 7,
  sceneId: 'xiaoxiang_guan',
  content: [
    { speaker: 'daiyu', expression: 'thinking', position: 'left', text: '我不喜看？是什么书？' },
    { speaker: 'baoyu', expression: 'shy', position: 'right', text: '是《西厢记》……若妹妹不喜，我便收起来。' },
    { speaker: 'daiyu', expression: 'normal', text: '（淡淡地）既然是禁书，你何必带来。' },
  ],
  nextNodeId: 'chapter7_reading_dialogue',
}

// 条件节点：根据好感度决定黛玉的反应
const chapter7DaiyuReactionCondition: StoryNode = {
  id: 'chapter7_daiyu_reaction_condition',
  type: 'condition',
  chapter: 7,
  sceneId: 'xiaoxiang_guan',
  conditionalBranches: [
    {
      condition: { type: 'relation', target: 'daiyu', operator: '>', value: 85 },
      targetNodeId: 'chapter7_daiyu_interested',
    },
    {
      condition: { type: 'relation', target: 'daiyu', operator: '>', value: 60 },
      targetNodeId: 'chapter7_reading_dialogue',
    },
  ],
  nextNodeId: 'chapter7_daiyu_guarded',
}

// 黛玉感兴趣（高好感度）
const chapter7DaiyuInterested: StoryNode = {
  id: 'chapter7_daiyu_interested',
  type: 'dialogue',
  chapter: 7,
  sceneId: 'xiaoxiang_guan',
  content: [
    { speaker: 'daiyu', expression: 'happy', position: 'left', text: '（眼中闪着光芒）这书我早就想看了，只是一直没有机会。' },
    { speaker: 'baoyu', expression: 'happy', position: 'right', text: '那我们一起读，读到精彩处再讨论。' },
  ],
  effects: [{ type: 'modify_relation', target: 'daiyu', value: 5 }],
  nextNodeId: 'chapter7_reading_dialogue',
}

// 黛玉戒备（低好感度）
const chapter7DaiyuGuarded: StoryNode = {
  id: 'chapter7_daiyu_guarded',
  type: 'dialogue',
  chapter: 7,
  sceneId: 'xiaoxiang_guan',
  content: [
    { speaker: 'daiyu', expression: 'thinking', position: 'left', text: '这书……若被人知道了，可不得了。你还是收起来吧。' },
    { speaker: 'baoyu', expression: 'sad', position: 'right', text: '妹妹若不愿，我便不看。只是这书实在精彩……' },
    { speaker: 'daiyu', expression: 'normal', text: '（犹豫片刻）罢了，既然来了，便看看吧。' },
  ],
  nextNodeId: 'chapter7_reading_dialogue',
}

// 共读对话节点
const chapter7ReadingDialogue: StoryNode = {
  id: 'chapter7_reading_dialogue',
  type: 'dialogue',
  chapter: 7,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【共读《西厢记》】' },
    { text: '两人一同翻阅，读到精彩处，不禁相视而笑。书中的张生与莺莺，正如他们自己——两个年轻人，在封建礼教下追求真情。' },
    { speaker: 'baoyu', expression: 'happy', position: 'right', text: '这段写得好："我就是个多愁多病身，你就是那倾国倾城貌。"' },
    { speaker: 'daiyu', expression: 'thinking', position: 'left', text: '（细细品味）这话倒是真切。' },
  ],
  nextNodeId: 'chapter7_quote_choice',
}

// 引用表白的选择节点
const chapter7QuoteChoice: StoryNode = {
  id: 'chapter7_quote_choice',
  type: 'choice',
  chapter: 7,
  sceneId: 'xiaoxiang_guan',
  content: { text: '宝玉读到这句经典台词，你该如何回应黛玉？' },
  branches: [
    {
      id: 'choice_quote_direct',
      text: '笑着对黛玉说："我就是个「多愁多病身」，你就是那「倾国倾城貌」。"',
      hint: '直接引用表白，+好感度',
      effects: [
        { type: 'modify_relation', target: 'daiyu', value: 15 },
        { type: 'set_flag', target: 'quoted_xixiang', value: true },
      ],
      targetNodeId: 'chapter7_quote_response',
    },
    {
      id: 'choice_quote_hint',
      text: '含蓄地说："书中这话，倒像是我们。"',
      hint: '含蓄暗示，+好感度',
      effects: [
        { type: 'modify_relation', target: 'daiyu', value: 10 },
        { type: 'set_flag', target: 'hinted_xixiang', value: true },
      ],
      targetNodeId: 'chapter7_hint_response',
    },
    {
      id: 'choice_silent',
      text: '只是笑笑，继续往下读。',
      hint: '保持沉默',
      targetNodeId: 'chapter7_continue_reading',
    },
    {
      id: 'choice_tease',
      text: '调侃道："妹妹倒像那崔莺莺呢！"',
      hint: '调侃玩笑，有风险',
      style: 'warning',
      effects: [{ type: 'modify_relation', target: 'daiyu', value: -5 }],
      targetNodeId: 'chapter7_tease_response',
    },
  ],
}

// 直接引用后的回应
const chapter7QuoteResponse: StoryNode = {
  id: 'chapter7_quote_response',
  type: 'dialogue',
  chapter: 7,
  sceneId: 'xiaoxiang_guan',
  content: [
    { speaker: 'daiyu', expression: 'surprised', position: 'left', text: '（脸顿时红了）你这该死的，又胡说！' },
    { speaker: 'daiyu', expression: 'shy', text: '看了混账书，也来欺负我。我告诉舅舅去！' },
    { speaker: 'baoyu', expression: 'shy', position: 'right', text: '好妹妹，我不过借书中的话，怎是欺负你？' },
  ],
  nextNodeId: 'chapter7_daiyu_final_condition',
}

// 含蓄暗示后的回应
const chapter7HintResponse: StoryNode = {
  id: 'chapter7_hint_response',
  type: 'dialogue',
  chapter: 7,
  sceneId: 'xiaoxiang_guan',
  content: [
    { speaker: 'daiyu', expression: 'thinking', position: 'left', text: '（低头）像是我们？这话怎么说？' },
    { speaker: 'baoyu', expression: 'shy', position: 'right', text: '张生与莺莺，冲破礼教追求真情。我们……也有些相似。' },
    { speaker: 'daiyu', expression: 'shy', text: '（轻轻叹道）你这人，总是说些让人不知所措的话。' },
  ],
  nextNodeId: 'chapter7_daiyu_final_condition',
}

// 调侃后的回应
const chapter7TeaseResponse: StoryNode = {
  id: 'chapter7_tease_response',
  type: 'dialogue',
  chapter: 7,
  sceneId: 'xiaoxiang_guan',
  content: [
    { speaker: 'daiyu', expression: 'angry', position: 'left', text: '（眉头微皱）我像崔莺莺？你倒是把自己比作张生了。' },
    { speaker: 'baoyu', expression: 'happy', position: 'right', text: '哈哈，妹妹生气了？我只是开个玩笑。' },
    { speaker: 'daiyu', expression: 'normal', text: '（冷淡地）玩笑也罢，书还是收起来吧。' },
  ],
  nextNodeId: 'chapter7_after_reading',
}

// 继续阅读
const chapter7ContinueReading: StoryNode = {
  id: 'chapter7_continue_reading',
  type: 'narrative',
  chapter: 7,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '两人继续往下读，沉浸在书中的爱情故事里，忘记了时间。' },
    { text: '黛玉偶尔抬头看宝玉，眼中闪着复杂的情绪——欢喜、羞涩、还有一丝说不清的期待。' },
  ],
  nextNodeId: 'chapter7_after_reading',
}

// 条件节点：根据好感度决定黛玉的最终反应
const chapter7DaiyuFinalCondition: StoryNode = {
  id: 'chapter7_daiyu_final_condition',
  type: 'condition',
  chapter: 7,
  sceneId: 'xiaoxiang_guan',
  conditionalBranches: [
    {
      condition: { type: 'relation', target: 'daiyu', operator: '>', value: 90 },
      targetNodeId: 'chapter7_daiyu_confide',
    },
    {
      condition: { type: 'relation', target: 'daiyu', operator: '>', value: 70 },
      targetNodeId: 'chapter7_daiyu_happy',
    },
  ],
  nextNodeId: 'chapter7_daiyu_normal',
}

// 黛玉倾诉心事（极高好感度）
const chapter7DaiyuConfide: StoryNode = {
  id: 'chapter7_daiyu_confide',
  type: 'dialogue',
  chapter: 7,
  sceneId: 'xiaoxiang_guan',
  content: [
    { speaker: 'daiyu', expression: 'sad', position: 'left', text: '（沉默片刻）宝玉，书中的张生与莺莺，最后在一起了吗？' },
    { speaker: 'baoyu', expression: 'thinking', position: 'right', text: '是的，他们冲破一切阻碍，终于相守。' },
    { speaker: 'daiyu', expression: 'shy', text: '（眼中含泪）我们……能有这样的结局吗？' },
    { speaker: 'baoyu', expression: 'happy', text: '妹妹放心，我定不会让你失望。' },
  ],
  effects: [
    { type: 'modify_relation', target: 'daiyu', value: 10 },
    { type: 'set_flag', target: 'daiyu_confided', value: true },
  ],
  nextNodeId: 'chapter7_summary',
}

// 黛玉欢喜（高好感度）
const chapter7DaiyuHappy: StoryNode = {
  id: 'chapter7_daiyu_happy',
  type: 'dialogue',
  chapter: 7,
  sceneId: 'xiaoxiang_guan',
  content: [
    { speaker: 'daiyu', expression: 'happy', position: 'left', text: '（抿嘴一笑）你这人，嘴里总说些好听的话。' },
    { speaker: 'baoyu', expression: 'happy', position: 'right', text: '都是真心话，妹妹信不信？' },
    { speaker: 'daiyu', expression: 'shy', text: '（轻轻点头）我……信的。' },
  ],
  effects: [{ type: 'modify_relation', target: 'daiyu', value: 5 }],
  nextNodeId: 'chapter7_summary',
}

// 黛玉平常反应
const chapter7DaiyuNormal: StoryNode = {
  id: 'chapter7_daiyu_normal',
  type: 'dialogue',
  chapter: 7,
  sceneId: 'xiaoxiang_guan',
  content: [
    { speaker: 'daiyu', expression: 'thinking', position: 'left', text: '书读完了，你还是收起来吧。若被人看见，可不得了。' },
    { speaker: 'baoyu', expression: 'normal', position: 'right', text: '妹妹说的是。今日读了这书，倒是有趣。' },
    { speaker: 'daiyu', expression: 'normal', text: '嗯，下次有机会，再一同读别的书吧。' },
  ],
  nextNodeId: 'chapter7_summary',
}

// 阅读后总结
const chapter7AfterReading: StoryNode = {
  id: 'chapter7_after_reading',
  type: 'narrative',
  chapter: 7,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '不知不觉，一个下午过去了。' },
    { text: '宝玉起身告别，黛玉望着他的背影，心中有种说不出的感觉。' },
    { text: '💡 这一天的共读，是宝黛情感升温的重要时刻。一本"禁书"，成为他们表达心声的媒介。' },
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
    { text: '• 宝玉获得《西厢记》，邀请黛玉共读' },
    { text: '• 两人在潇湘馆一同阅读"禁书"' },
    { text: '• 宝玉用书中句子含蓄表白' },
    { text: '• 黛玉反应取决于累积的好感度' },
    { text: '关键句子：' },
    { text: '"我就是个多愁多病身，你就是那倾国倾城貌。"' },
    { text: '💡 共读《西厢记》是宝黛爱情升温的重要场景。好感度高的玩家可以看到黛玉倾诉心事的特殊剧情。' },
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
    { text: '• 好感度系统：选择影响剧情走向' },
    { text: '经典引用：' },
    { text: '"我就是个多愁多病身，你就是那倾国倾城貌"' },
    { text: '互动提示：' },
    { text: '• 不同选择会改变黛玉的好感度' },
    { text: '• 好感度高于90可触发特殊剧情' },
    { text: '• 好感度低于70黛玉会保持戒备' },
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
    { text: '系统提示：' },
    { text: '• 本章引入好感度系统' },
    { text: '• 选择会改变角色关系值' },
    { text: '• 关系值影响后续剧情分支' },
  ],
  nextNodeId: 'chapter7_end_choice',
}

// 章节定义
export const chapter7: StoryChapter = {
  id: 'chapter7',
  number: 7,
  title: '共读西厢',
  description: '宝玉与黛玉共读《西厢记》，借书中句子含蓄表白。玩家的选择会影响好感度，高好感度可触发特殊剧情。',
  startNodeId: 'chapter7_start',
  nodes: [
    chapter7Start,
    chapter7Arrive,
    chapter7ShowBookChoice,
    chapter7ShowDirect,
    chapter7ShowSecret,
    chapter7ShowHesitant,
    chapter7DaiyuReactionCondition,
    chapter7DaiyuInterested,
    chapter7DaiyuGuarded,
    chapter7ReadingDialogue,
    chapter7QuoteChoice,
    chapter7QuoteResponse,
    chapter7HintResponse,
    chapter7TeaseResponse,
    chapter7ContinueReading,
    chapter7DaiyuFinalCondition,
    chapter7DaiyuConfide,
    chapter7DaiyuHappy,
    chapter7DaiyuNormal,
    chapter7AfterReading,
    chapter7Summary,
    chapter7EndChoice,
    chapter7Review,
    chapter7Annotations,
  ],
}