import { StoryNode, StoryChapter } from '../../types'

// 第十二章：黛玉焚稿（第九十七回）
// 主题：悲剧高潮，黛玉绝望焚稿
// 互动：根据累积好感度决定剧情走向，玩家选择影响结局

const chapter12Start: StoryNode = {
  id: 'chapter12_start',
  type: 'narrative',
  chapter: 12,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【第十二章：黛玉焚稿】' },
    { text: '话说贾府为宝玉筹办婚事，却瞒着黛玉。众人以为宝玉娶的是黛玉，实则娶的是宝钗。' },
    { text: '黛玉听闻宝玉即将成婚，心中疑虑。后得知新娘竟是宝钗，顿时如遭雷击，病情骤然加重。' },
    { text: '💡 黛玉焚稿是红楼梦悲剧的高潮。玩家的累积好感度将决定这一章的走向。' },
  ],
  nextNodeId: 'chapter12_ending_condition',
}

// 条件节点：根据好感度决定剧情走向
const chapter12EndingCondition: StoryNode = {
  id: 'chapter12_ending_condition',
  type: 'condition',
  chapter: 12,
  sceneId: 'xiaoxiang_guan',
  conditionalBranches: [
    {
      // 极高好感度 + 曾与黛玉倾诉心事
      condition: { type: 'relation', target: 'daiyu', operator: '>', value: 95 },
      targetNodeId: 'chapter12_special_news',
    },
    {
      // 高好感度
      condition: { type: 'relation', target: 'daiyu', operator: '>', value: 85 },
      targetNodeId: 'chapter12_gentle_news',
    },
    {
      // 中等好感度
      condition: { type: 'relation', target: 'daiyu', operator: '>', value: 60 },
      targetNodeId: 'chapter12_normal_news',
    },
    {
      // 低好感度
      condition: { type: 'relation', target: 'daiyu', operator: '<', value: 40 },
      targetNodeId: 'chapter12_cruel_news',
    },
  ],
  nextNodeId: 'chapter12_normal_news', // 默认
}

// 特殊剧情：有人提前告知（极高好感度）
const chapter12SpecialNews: StoryNode = {
  id: 'chapter12_special_news',
  type: 'dialogue',
  chapter: 12,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '因你与黛玉情深，有人提前将消息告知了她。' },
    { speaker: 'daiyu', expression: 'sad', position: 'left', text: '（早有预感）宝玉……你要娶宝钗了？' },
    { text: '黛玉虽早有预感，但确认消息后仍心如刀绞。然而，因你一直以来的真心，她心中仍有最后一丝希望。' },
  ],
  effects: [{ type: 'set_flag', target: 'daiyu_knew_early', value: true }],
  nextNodeId: 'chapter12_player_action_choice',
}

// 温和得知消息（高好感度）
const chapter12GentleNews: StoryNode = {
  id: 'chapter12_gentle_news',
  type: 'narrative',
  chapter: 12,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '黛玉病情本已不稳，听闻宝玉娶宝钗的消息后，心如刀绞。' },
    { text: '她想起与你的点点滴滴——初见、共读西厢、葬花、挨打后的探望……一切终成泡影。' },
    { text: '但因你一直以来的真心，她虽绝望，却仍有一丝不舍。' },
    { text: '💡 高好感度让黛玉对你仍有信任，但命运的无情仍令她绝望。' },
  ],
  nextNodeId: 'chapter12_player_action_choice',
}

// 正常得知消息（中等好感度）
const chapter12NormalNews: StoryNode = {
  id: 'chapter12_normal_news',
  type: 'narrative',
  chapter: 12,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【得知婚讯】' },
    { text: '黛玉病情本已不稳，听闻宝玉娶宝钗的消息后，更是心如刀绞。' },
    { text: '她想起自己与宝玉的情缘——从初见时的"这个妹妹我曾见过的"，到共读西厢时的表白，到葬花时的悲凉……一切终成泡影。' },
    { text: '黛玉对丫鬟紫鹃说："我这些年的心血，终究白费了。宝玉娶了宝钗，我还能留什么？"' },
    { text: '紫鹃劝慰，黛玉却说："不必了。我明白自己的命。这一生，注定是薄命的。"' },
  ],
  nextNodeId: 'chapter12_before_burn_choice',
}

// 残酷得知消息（低好感度）
const chapter12CruelNews: StoryNode = {
  id: 'chapter12_cruel_news',
  type: 'narrative',
  chapter: 12,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '黛玉在最脆弱的时刻，从旁人处得知宝玉娶宝钗的消息。' },
    { text: '她想起与你过往的种种——那些冷淡、那些错过、那些未能说出口的话……' },
    { text: '她明白：你终究选择了宝钗，选择了"金玉良缘"。她的等待，全是徒劳。' },
    { text: '💡 低好感度让黛玉对你的信任早已动摇，这消息只是最后的绝望。' },
  ],
  effects: [{ type: 'modify_stat', target: 'health', value: -10 }],
  nextNodeId: 'chapter12_burn_poems_direct',
}

// 玩家行动选择（高好感度专属）
const chapter12PlayerActionChoice: StoryNode = {
  id: 'chapter12_player_action_choice',
  type: 'choice',
  chapter: 12,
  sceneId: 'yihong_yuan',
  content: { text: '得知黛玉的处境后，作为宝玉，你想怎么做？' },
  branches: [
    {
      id: 'choice_visit',
      text: '不顾一切去见黛玉，即使婚事在即',
      hint: '最后相见，+好感度',
      condition: { type: 'relation', target: 'daiyu', operator: '>', value: 80 },
      effects: [
        { type: 'modify_relation', target: 'daiyu', value: 10 },
        { type: 'set_flag', target: 'visited_daiyu_final', value: true },
      ],
      targetNodeId: 'chapter12_visit_daiyu',
    },
    {
      id: 'choice_send_message',
      text: '派人送信给黛玉，表达最后的心意',
      hint: '书信表达，好感不变',
      effects: [{ type: 'set_flag', target: 'sent_final_message', value: true }],
      targetNodeId: 'chapter12_send_message',
    },
    {
      id: 'choice helpless',
      text: '无奈等待，婚事已定，无能为力',
      hint: '放弃，-好感度',
      style: 'warning',
      effects: [{ type: 'modify_relation', target: 'daiyu', value: -15 }],
      targetNodeId: 'chapter12_helpless',
    },
  ],
}

// 最后相见（高好感度）
const chapter12VisitDaiyu: StoryNode = {
  id: 'chapter12_visit_daiyu',
  type: 'dialogue',
  chapter: 12,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '你不顾众人阻拦，来到潇湘馆见黛玉。' },
    { speaker: 'daiyu', expression: 'surprised', position: 'left', text: '你……你怎么来了？婚事在即，你来见我做什么？' },
    { speaker: 'baoyu', expression: 'sad', position: 'right', text: '黛玉，我……我对不起你。这一切，并非我所愿。' },
    { speaker: 'daiyu', expression: 'sad', text: '（泪眼朦胧）不是你所愿？可你终究娶的是宝钗……' },
  ],
  nextNodeId: 'chapter12_visit_response_choice',
}

// 相见时的回应选择
const chapter12VisitResponseChoice: StoryNode = {
  id: 'chapter12_visit_response_choice',
  type: 'choice',
  chapter: 12,
  sceneId: 'xiaoxiang_guan',
  content: { text: '面对黛玉的质问，你想说什么？' },
  branches: [
    {
      id: 'choice_true_love',
      text: '"我心中只有你。娶宝钗是被家人所逼，我的心从未改变。"',
      hint: '表白真心，触发圆满结局',
      effects: [
        { type: 'modify_relation', target: 'daiyu', value: 15 },
        { type: 'set_flag', target: 'declared_true_love', value: true },
      ],
      targetNodeId: 'chapter12_true_love_response',
    },
    {
      id: 'choice_apologize',
      text: '"对不起……我无力反抗家族的安排。但我会永远记得你。"',
      hint: '道歉，遗憾结局',
      effects: [{ type: 'modify_relation', target: 'daiyu', value: 5 }],
      targetNodeId: 'chapter12_apologize_response',
    },
    {
      id: 'choice_silent',
      text: '无言以对，只是握住她的手。',
      hint: '无声表达',
      targetNodeId: 'chapter12_silent_response',
    },
  ],
}

// 表白真心
const chapter12TrueLoveResponse: StoryNode = {
  id: 'chapter12_true_love_response',
  type: 'dialogue',
  chapter: 12,
  sceneId: 'xiaoxiang_guan',
  content: [
    { speaker: 'daiyu', expression: 'shy', position: 'left', text: '（眼中闪着泪光）你……你真的……心中只有我？' },
    { speaker: 'baoyu', expression: 'happy', position: 'right', text: '是的，黛玉。这一生，我只爱过你。即使娶了宝钗，我的心永远在你这里。' },
    { speaker: 'daiyu', expression: 'happy', text: '（微笑）若你心中真的有我……我这一生，便无悔了。' },
  ],
  effects: [{ type: 'set_flag', target: 'true_love_confirmed', value: true }],
  nextNodeId: 'chapter12_final_words',
}

// 道歉回应
const chapter12ApologizeResponse: StoryNode = {
  id: 'chapter12_apologize_response',
  type: 'dialogue',
  chapter: 12,
  sceneId: 'xiaoxiang_guan',
  content: [
    { speaker: 'daiyu', expression: 'sad', position: 'left', text: '（轻轻点头）我知道……你也是无奈。' },
    { speaker: 'daiyu', expression: 'normal', text: '这一生，我们终究是有缘无分。但我会记得你的。' },
  ],
  nextNodeId: 'chapter12_final_words',
}

// 无声回应
const chapter12SilentResponse: StoryNode = {
  id: 'chapter12_silent_response',
  type: 'dialogue',
  chapter: 12,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '你握住黛玉的手，两人无言相对。' },
    { speaker: 'daiyu', expression: 'sad', position: 'left', text: '（轻轻握紧）我明白你的心意……即使无言。' },
  ],
  nextNodeId: 'chapter12_final_words',
}

// 临终遗言
const chapter12FinalWords: StoryNode = {
  id: 'chapter12_final_words',
  type: 'dialogue',
  chapter: 12,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '黛玉靠在床头，气息越来越弱。' },
    { speaker: 'daiyu', expression: 'sad', position: 'center', text: '宝玉，宝玉，你好……' },
    { text: '这句话未说完，黛玉便气绝身亡。年仅十七岁。' },
    { text: '💡 "宝玉，宝玉，你好……"是黛玉的临终遗言。因你曾来相见，她心中带着一丝安慰离去。' },
  ],
  effects: [{ type: 'set_flag', target: 'daiyu_died_with_words', value: true }],
  nextNodeId: 'chapter12_after_death',
}

// 送信给黛玉
const chapter12SendMessage: StoryNode = {
  id: 'chapter12_send_message',
  type: 'narrative',
  chapter: 12,
  sceneId: 'yihong_yuan',
  content: [
    { text: '你写了一封信，托人送给黛玉。' },
    { text: '信中写道："黛玉，这一切非我所愿。我心中始终有你。愿你保重身体，不要绝望。"' },
    { text: '黛玉收到信后，泪如雨下。但她明白：这已是最后的告别。' },
  ],
  effects: [{ type: 'set_flag', target: 'sent_letter', value: true }],
  nextNodeId: 'chapter12_letter_response',
}

// 信后的回应
const chapter12LetterResponse: StoryNode = {
  id: 'chapter12_letter_response',
  type: 'dialogue',
  chapter: 12,
  sceneId: 'xiaoxiang_guan',
  content: [
    { speaker: 'daiyu', expression: 'sad', position: 'center', text: '（读完信）宝玉……你终究还是来了信。' },
    { text: '黛玉让紫鹃将信与诗稿一同烧掉。她说："既然无法改变，不如烧了，干净。"' },
  ],
  nextNodeId: 'chapter12_burn_poems',
}

// 无能为力
const chapter12Helpless: StoryNode = {
  id: 'chapter12_helpless',
  type: 'narrative',
  chapter: 12,
  sceneId: 'yihong_yuan',
  content: [
    { text: '你无奈等待婚事，没有去见黛玉，也没有送信。' },
    { text: '你心中虽痛苦，却无力反抗家族的安排。' },
    { text: '黛玉在潇湘馆中，独自面对绝望，无人安慰。' },
    { text: '💡 放弃让黛玉在最绝望的时刻无人相伴，这将影响结局走向。' },
  ],
  nextNodeId: 'chapter12_burn_poems_direct',
}

// 焚稿前的选择（中等好感度）
const chapter12BeforeBurnChoice: StoryNode = {
  id: 'chapter12_before_burn_choice',
  type: 'choice',
  chapter: 12,
  sceneId: 'yihong_yuan',
  content: { text: '得知黛玉绝望的消息后，你想怎么做？' },
  branches: [
    {
      id: 'choice_try_visit',
      text: '试着去见黛玉，虽然可能被阻拦',
      hint: '尝试相见',
      effects: [{ type: 'set_flag', target: 'tried_visit', value: true }],
      targetNodeId: 'chapter12_visit_blocked',
    },
    {
      id: 'choice_wait_helpless',
      text: '无奈等待，婚事已定',
      hint: '放弃',
      targetNodeId: 'chapter12_burn_poems',
    },
  ],
}

// 被阻拦无法相见
const chapter12VisitBlocked: StoryNode = {
  id: 'chapter12_visit_blocked',
  type: 'narrative',
  chapter: 12,
  sceneId: 'yihong_yuan',
  content: [
    { text: '你试图去见黛玉，却被家人阻拦。' },
    { text: '"婚事在即，不可去见黛玉！"众人如是说。' },
    { text: '你无奈返回，心中痛苦万分。黛玉在潇湘馆，独自绝望。' },
  ],
  nextNodeId: 'chapter12_burn_poems',
}

// 直接焚稿（低好感度路径）
const chapter12BurnPoemsDirect: StoryNode = {
  id: 'chapter12_burn_poems_direct',
  type: 'narrative',
  chapter: 12,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【焚烧诗稿】' },
    { text: '黛玉让紫鹃取出她平日写的诗稿，以及宝玉送给她的题诗手帕。' },
    { text: '她将这些诗稿一一投入火盆，看着火焰吞噬那些承载着她心血的文字。' },
    { text: '诗稿化为灰烬，手帕化为灰烬。黛玉看着火焰，眼泪早已干涸。' },
    { text: '她冷冷地说："这些诗稿，是我一生的心血。如今宝玉娶了别人，这些还有什么意义？不如烧了，干净。"' },
    { text: '💡 焚稿是黛玉绝望的极致。因你的放弃，她带着完全的绝望离去。' },
  ],
  nextNodeId: 'chapter12_death_direct',
}

// 焚稿
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
    { text: '💡 焚稿是黛玉绝望的极致。诗稿是她灵魂的结晶，烧毁它们，等于烧毁自己的一生。' },
  ],
  nextNodeId: 'chapter12_death',
}

// 黛玉之死（直接）
const chapter12DeathDirect: StoryNode = {
  id: 'chapter12_death_direct',
  type: 'narrative',
  chapter: 12,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【黛玉之死】' },
    { text: '诗稿烧尽后，黛玉躺在床上，气息越来越弱。' },
    { text: '她挣扎着说出最后的遗言："宝玉，宝玉，你好狠心……"' },
    { text: '这句话说完，黛玉便气绝身亡。年仅十七岁。' },
    { text: '黛玉死后，潇湘馆一片悲声。然而，贾府上下正忙着宝玉的婚礼，对她之死并无太多关注。' },
    { text: '💡 黛玉带着怨恨离去，这影响了后续结局。"你好狠心"的遗言，是她对你最后的控诉。' },
  ],
  effects: [{ type: 'set_flag', target: 'daiyu_died_angry', value: true }],
  nextNodeId: 'chapter12_tragedy',
}

// 黛玉之死
const chapter12Death: StoryNode = {
  id: 'chapter12_death',
  type: 'narrative',
  chapter: 12,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【临终遗言】' },
    { text: '诗稿烧尽后，黛玉躺在床上，气息越来越弱。' },
    { text: '她挣扎着说出最后的遗言："宝玉，宝玉，你好……"' },
    { text: '这句话未说完，黛玉便气绝身亡。年仅十七岁。' },
    { text: '关于这句话有多种解读：有人认为她说的是"宝玉，你好狠心"，有人认为是"宝玉，你好好的"，还有人认为她只是想最后呼唤宝玉的名字。' },
    { text: '💡 "宝玉，宝玉，你好……"是黛玉的临终遗言。这句话的未完，象征着她与宝玉的情缘终究未圆满。' },
  ],
  nextNodeId: 'chapter12_after_death',
}

// 死后场景
const chapter12AfterDeath: StoryNode = {
  id: 'chapter12_after_death',
  type: 'narrative',
  chapter: 12,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【黛玉之死】' },
    { text: '黛玉死后，潇湘馆一片悲声。紫鹃、袭人等丫鬟哭得肝肠寸断。' },
    { text: '然而，贾府上下正忙着宝玉的婚礼，对黛玉之死并无太多关注。' },
    { text: '一边是热闹的婚礼，一边是冰冷的灵堂。热闹与冷清，形成强烈的讽刺。' },
    { text: '💡 黛玉之死与宝玉婚礼同时发生，是红楼梦悲剧的极致对比。' },
  ],
  nextNodeId: 'chapter12_tragedy',
}

// 悲剧意义
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
    { text: '💡 黛玉之死是红楼梦的核心悲剧。玩家的选择和累积好感度，决定了她临终时的心境。' },
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
    { text: '• 累积好感度决定剧情走向' },
    { text: '• 玩家选择影响临终场景' },
    { text: '• 黛玉焚稿后气绝身亡' },
    { text: '互动提示：' },
    { text: '• 好感度 > 95 可触发最后相见' },
    { text: '• 好感度 > 85 可表白真心' },
    { text: '• 低好感度导致黛玉怨恨离去' },
    { text: '💡 这一章是好感度系统生效的关键时刻。之前的每一次选择，都在此刻汇聚成结局。' },
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
    { text: '• 得知婚讯：好感度决定消息传来方式' },
    { text: '• 焚烧诗稿：绝望的极致表现' },
    { text: '• 临终遗言：取决于玩家选择' },
    { text: '• 黛玉之死：十七岁，气绝身亡' },
    { text: '互动系统：' },
    { text: '• 条件分支：好感度决定剧情走向' },
    { text: '• 玩家选择：影响临终场景' },
    { text: '• 剧情标志：影响后续结局' },
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
    { text: '结局提示：' },
    { text: '• 高好感度 + 表白真心 → 圆满结局' },
    { text: '• 中等好感度 + 最后相见 → 遗憾结局' },
    { text: '• 低好感度 → 悲剧结局' },
  ],
  nextNodeId: 'chapter12_end_choice',
}

// 章节定义
export const chapter12: StoryChapter = {
  id: 'chapter12',
  number: 12,
  title: '黛玉焚稿',
  description: '黛玉得知宝玉娶宝钗后绝望焚稿。累积好感度和玩家选择决定她的临终心境，影响结局走向。',
  startNodeId: 'chapter12_start',
  nodes: [
    chapter12Start,
    chapter12EndingCondition,
    chapter12SpecialNews,
    chapter12GentleNews,
    chapter12NormalNews,
    chapter12CruelNews,
    chapter12PlayerActionChoice,
    chapter12VisitDaiyu,
    chapter12VisitResponseChoice,
    chapter12TrueLoveResponse,
    chapter12ApologizeResponse,
    chapter12SilentResponse,
    chapter12FinalWords,
    chapter12SendMessage,
    chapter12LetterResponse,
    chapter12Helpless,
    chapter12BeforeBurnChoice,
    chapter12VisitBlocked,
    chapter12BurnPoemsDirect,
    chapter12BurnPoems,
    chapter12DeathDirect,
    chapter12Death,
    chapter12AfterDeath,
    chapter12Tragedy,
    chapter12Summary,
    chapter12EndChoice,
    chapter12Review,
    chapter12Annotations,
  ],
}