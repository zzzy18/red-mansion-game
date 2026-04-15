import { StoryNode, StoryChapter } from '../../types'

// 第九章：宝玉挨打（第三十三回）
// 主题：家族冲突的高潮，展现封建压迫
// 互动：多角色对话、选择影响好感度、探伤选择影响结局

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
    { text: '💡 宝玉挨打是红楼梦家族冲突的高潮。贾政代表了封建家长的权威，宝玉则代表了追求自由、反抗封建礼教的年轻一代。' },
  ],
  nextNodeId: 'chapter9_jiazheng_summon',
}

// 被叫到书房
const chapter9JiazhengSummon: StoryNode = {
  id: 'chapter9_jiazheng_summon',
  type: 'dialogue',
  chapter: 9,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '贾政将宝玉叫到书房，面色铁青。' },
    { speaker: 'jiazheng', expression: 'angry', position: 'center', text: '跪下！' },
    { speaker: 'baoyu', expression: 'surprised', position: 'right', text: '（颤抖地跪下）父亲……' },
  ],
  nextNodeId: 'chapter9_jiazheng_question',
}

// 贾政质问
const chapter9JiazhengQuestion: StoryNode = {
  id: 'chapter9_jiazheng_question',
  type: 'dialogue',
  chapter: 9,
  sceneId: 'rong_qing_tang',
  content: [
    { speaker: 'jiazheng', expression: 'angry', position: 'center', text: '你在家不读书，在外勾引优伶，如今又逼死人命！还敢强辩吗？' },
    { speaker: 'baoyu', expression: 'sad', position: 'right', text: '父亲，我……' },
  ],
  nextNodeId: 'chapter9_response_choice',
}

// 玩家选择如何回应
const chapter9ResponseChoice: StoryNode = {
  id: 'chapter9_response_choice',
  type: 'choice',
  chapter: 9,
  sceneId: 'rong_qing_tang',
  content: { text: '面对父亲的质问，你该如何回应？' },
  branches: [
    {
      id: 'choice_admit',
      text: '承认错误，请求宽恕："父亲，是我不对，请饶了我这一次。"',
      hint: '认错求饶，-声誉，伤害较轻',
      effects: [{ type: 'modify_stat', target: 'reputation', value: -5 }],
      targetNodeId: 'chapter9_admit_response',
    },
    {
      id: 'choice_explain',
      text: '据理力争："父亲，我与琪官只是朋友，金钏儿之事也是意外……"',
      hint: '解释辩解，风险较大',
      style: 'warning',
      effects: [{ type: 'modify_stat', target: 'health', value: -20 }],
      targetNodeId: 'chapter9_explain_response',
    },
    {
      id: 'choice_silent',
      text: '沉默不语，低头不答。',
      hint: '保持沉默',
      targetNodeId: 'chapter9_silent_response',
    },
    {
      id: 'choice_defiant',
      text: '反驳父亲："我所做之事，并无过错。读书不读书，是我的选择！"',
      hint: '反抗父亲，伤害最重',
      style: 'danger',
      effects: [{ type: 'modify_stat', target: 'health', value: -30 }, { type: 'modify_stat', target: 'reputation', value: -10 }],
      targetNodeId: 'chapter9_defiant_response',
    },
  ],
}

// 承认错误后的回应
const chapter9AdmitResponse: StoryNode = {
  id: 'chapter9_admit_response',
  type: 'dialogue',
  chapter: 9,
  sceneId: 'rong_qing_tang',
  content: [
    { speaker: 'jiazheng', expression: 'angry', position: 'center', text: '认错？你若真知错，便不会做出这些事来！今日不打你，你日后还要做出更出格的事！' },
    { speaker: 'baoyu', expression: 'sad', position: 'right', text: '（流泪）父亲教训得是……' },
  ],
  nextNodeId: 'chapter9_light_beating',
}

// 解释辩解后的回应
const chapter9ExplainResponse: StoryNode = {
  id: 'chapter9_explain_response',
  type: 'dialogue',
  chapter: 9,
  sceneId: 'rong_qing_tang',
  content: [
    { speaker: 'jiazheng', expression: 'angry', position: 'center', text: '朋友？与优伶称朋友，败坏门风！意外？人命关天，你还敢说是意外！' },
    { speaker: 'jiazheng', expression: 'angry', text: '今日非打死你不可！' },
  ],
  nextNodeId: 'chapter9_heavy_beating',
}

// 沉默后的回应
const chapter9SilentResponse: StoryNode = {
  id: 'chapter9_silent_response',
  type: 'dialogue',
  chapter: 9,
  sceneId: 'rong_qing_tang',
  content: [
    { speaker: 'jiazheng', expression: 'angry', position: 'center', text: '不说话？你以为沉默便能躲过？今日我非教训你不可！' },
  ],
  nextNodeId: 'chapter9_normal_beating',
}

// 反驳后的回应
const chapter9DefiantResponse: StoryNode = {
  id: 'chapter9_defiant_response',
  type: 'dialogue',
  chapter: 9,
  sceneId: 'rong_qing_tang',
  content: [
    { speaker: 'jiazheng', expression: 'angry', position: 'center', text: '（怒不可遏）你……你还敢顶嘴！我的选择？你是我儿子，便要走我为你选的路！' },
    { speaker: 'jiazheng', expression: 'angry', text: '今日不打死你，我便不是你父亲！' },
  ],
  nextNodeId: 'chapter9_severe_beating',
}

// 轻度挨打
const chapter9LightBeating: StoryNode = {
  id: 'chapter9_light_beating',
  type: 'narrative',
  chapter: 9,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '贾政命小厮将宝玉按在凳上，举起大板打下去。' },
    { text: '打了十几下，宝玉臀部已是疼痛难忍，但仍能支撑。' },
    { text: '💡 承认错误让贾政怒气稍减，但仍要教训宝玉。' },
  ],
  effects: [{ type: 'modify_stat', target: 'health', value: -10 }],
  nextNodeId: 'chapter9_rescue_start',
}

// 正常挨打
const chapter9NormalBeating: StoryNode = {
  id: 'chapter9_normal_beating',
  type: 'narrative',
  chapter: 9,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '贾政命小厮将宝玉按在凳上，举起大板，狠狠打下去。' },
    { text: '一连打了二三十下，宝玉臀部皮开肉绽，疼痛难忍，叫喊不止。' },
  ],
  effects: [{ type: 'modify_stat', target: 'health', value: -15 }],
  nextNodeId: 'chapter9_rescue_start',
}

// 重度挨打
const chapter9HeavyBeating: StoryNode = {
  id: 'chapter9_heavy_beating',
  type: 'narrative',
  chapter: 9,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '贾政怒火中烧，命小厮将宝玉按在凳上，举起大板，狠狠打下去。' },
    { text: '一连打了三四十下，宝玉臀部皮开肉绽，血流如注，几乎昏厥。' },
  ],
  effects: [{ type: 'modify_stat', target: 'health', value: -20 }],
  nextNodeId: 'chapter9_rescue_start',
}

// 最重挨打
const chapter9SevereBeating: StoryNode = {
  id: 'chapter9_severe_beating',
  type: 'narrative',
  chapter: 9,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '贾政暴怒至极，命小厮将宝玉按在凳上，举起大板，疯狂打下去。' },
    { text: '一连打了五十多下，宝玉臀部血肉模糊，气息微弱，几近昏死。' },
    { text: '💡 反抗父亲带来最重的惩罚，但宝玉内心并未屈服。' },
  ],
  effects: [
    { type: 'modify_stat', target: 'health', value: -30 },
    { type: 'set_flag', target: 'defiant_father', value: true },
  ],
  nextNodeId: 'chapter9_rescue_start',
}

// 众人求情开始
const chapter9RescueStart: StoryNode = {
  id: 'chapter9_rescue_start',
  type: 'narrative',
  chapter: 9,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '宝玉被打得气息微弱，门客、仆人见状，急忙去请王夫人、贾母来救。' },
  ],
  nextNodeId: 'chapter9_wangfuren_arrive',
}

// 王夫人赶到
const chapter9WangfurenArrive: StoryNode = {
  id: 'chapter9_wangfuren_arrive',
  type: 'dialogue',
  chapter: 9,
  sceneId: 'rong_qing_tang',
  content: [
    { speaker: 'wangfuren', expression: 'sad', position: 'left', text: '（大哭）老爷，饶了他吧！若是打死他，我也活不成了！' },
    { speaker: 'jiazheng', expression: 'angry', position: 'center', text: '都是你惯的！如今还要护着他？' },
    { speaker: 'wangfuren', expression: 'sad', text: '（跪下）老爷，我只有一个儿子，若打死他，我这条命也不活了！' },
  ],
  nextNodeId: 'chapter9_jiamu_arrive',
}

// 贾母赶到
const chapter9JiamuArrive: StoryNode = {
  id: 'chapter9_jiamu_arrive',
  type: 'dialogue',
  chapter: 9,
  sceneId: 'rong_qing_tang',
  content: [
    { speaker: 'jiamu', expression: 'angry', position: 'center', text: '（颤颤巍巍进来）先打死我，再打死他，就干净了！' },
    { speaker: 'jiazheng', expression: 'sad', position: 'right', text: '（慌忙跪下）母亲，儿子不敢……' },
    { speaker: 'jiamu', expression: 'angry', text: '你今日打他，我便今日死！你日后打死他，我便日后死！' },
    { speaker: 'jiazheng', expression: 'sad', text: '母亲息怒，儿子知错了……' },
  ],
  nextNodeId: 'chapter9_beating_end',
}

// 挨打结束
const chapter9BeatingEnd: StoryNode = {
  id: 'chapter9_beating_end',
  type: 'narrative',
  chapter: 9,
  sceneId: 'rong_qing_tang',
  content: [
    { text: '贾政见贾母如此，方才住手。但仍怒气未消，骂道："都是你们惯的！日后若做出杀人放火的事，都是你们之罪！"' },
    { text: '宝玉被众人扶起，抬回怡红院敷药治疗。' },
    { text: '💡 贾母是贾府最高权威，她的出现挽救了宝玉。但她对宝玉的溺爱，也被贾政认为是导致宝玉"不肖"的原因。' },
  ],
  nextNodeId: 'chapter9_visit_choice',
}

// 探伤选择
const chapter9VisitChoice: StoryNode = {
  id: 'chapter9_visit_choice',
  type: 'choice',
  chapter: 9,
  sceneId: 'yihong_yuan',
  content: { text: '伤后休养在怡红院，你心中更想谁来探望？' },
  branches: [
    {
      id: 'choice_want_daiyu',
      text: '想见黛玉，心中惦念她是否担心',
      hint: '+黛玉好感，-宝钗好感',
      effects: [
        { type: 'modify_relation', target: 'daiyu', value: 15 },
        { type: 'modify_relation', target: 'baochai', value: -5 },
        { type: 'set_flag', target: 'wanted_daiyu_visit', value: true },
      ],
      targetNodeId: 'chapter9_daiyu_visit_first',
    },
    {
      id: 'choice_want_baochai',
      text: '想见宝钗，她的稳重让人安心',
      hint: '+宝钗好感，-黛玉好感',
      effects: [
        { type: 'modify_relation', target: 'baochai', value: 10 },
        { type: 'modify_relation', target: 'daiyu', value: -5 },
        { type: 'set_flag', target: 'wanted_baochai_visit', value: true },
      ],
      targetNodeId: 'chapter9_baochai_visit_first',
    },
    {
      id: 'choice_want_both',
      text: '两人都想见，无所谓先后',
      hint: '两人好感都有增加',
      effects: [
        { type: 'modify_relation', target: 'daiyu', value: 5 },
        { type: 'modify_relation', target: 'baochai', value: 5 },
      ],
      targetNodeId: 'chapter9_both_visit',
    },
  ],
}

// 黛玉先来探望
const chapter9DaiyuVisitFirst: StoryNode = {
  id: 'chapter9_daiyu_visit_first',
  type: 'dialogue',
  chapter: 9,
  sceneId: 'yihong_yuan',
  content: [
    { text: '黛玉听闻宝玉挨打，心中悲痛，悄悄来到怡红院。' },
    { speaker: 'daiyu', expression: 'sad', position: 'left', text: '（眼泪汪汪）你……你怎么伤成这样？' },
    { speaker: 'baoyu', expression: 'sad', position: 'right', text: '你眼睛哭红了，日后又说是我害的。' },
    { speaker: 'daiyu', expression: 'shy', text: '（又悲又喜）你还这样说……我怎能不担心你？' },
  ],
  effects: [{ type: 'modify_relation', target: 'daiyu', value: 5 }],
  nextNodeId: 'chapter9_daiyu_talk_choice',
}

// 黛玉对话选择
const chapter9DaiyuTalkChoice: StoryNode = {
  id: 'chapter9_daiyu_talk_choice',
  type: 'choice',
  chapter: 9,
  sceneId: 'yihong_yuan',
  content: { text: '黛玉心疼地看着你，你想说什么？' },
  branches: [
    {
      id: 'choice_reassure',
      text: '安慰她："别哭了，我没事的。你放心，我不会改变本心。"',
      hint: '+好感度，坚定信念',
      effects: [
        { type: 'modify_relation', target: 'daiyu', value: 10 },
        { type: 'set_flag', target: 'reassured_daiyu', value: true },
      ],
      targetNodeId: 'chapter9_daiyu_reassured',
    },
    {
      id: 'choice_grateful',
      text: '感谢她："谢谢你来看我。你这样担心我，我心里很感动。"',
      hint: '+好感度，表达心意',
      effects: [{ type: 'modify_relation', target: 'daiyu', value: 8 }],
      targetNodeId: 'chapter9_daiyu_grateful',
    },
    {
      id: 'choice_silent',
      text: '只是静静地看着她，握住她的手。',
      hint: '无声表达，+好感度',
      effects: [{ type: 'modify_relation', target: 'daiyu', value: 12 }],
      targetNodeId: 'chapter9_daiyu_silent',
    },
  ],
}

// 安慰黛玉
const chapter9DaiyuReassured: StoryNode = {
  id: 'chapter9_daiyu_reassured',
  type: 'dialogue',
  chapter: 9,
  sceneId: 'yihong_yuan',
  content: [
    { speaker: 'daiyu', expression: 'happy', position: 'left', text: '（微微点头）我知道你不会改变。但……你要保重自己。' },
    { speaker: 'baoyu', expression: 'happy', position: 'right', text: '有你担心我，我一定会保重的。' },
  ],
  nextNodeId: 'chapter9_baochai_visit_after',
}

// 感谢黛玉
const chapter9DaiyuGrateful: StoryNode = {
  id: 'chapter9_daiyu_grateful',
  type: 'dialogue',
  chapter: 9,
  sceneId: 'yihong_yuan',
  content: [
    { speaker: 'daiyu', expression: 'shy', position: 'left', text: '（低头）我……我只是担心你。你若是死了，我也活不下去了。' },
    { speaker: 'baoyu', expression: 'shy', position: 'right', text: '妹妹这样说，我心里……' },
  ],
  nextNodeId: 'chapter9_baochai_visit_after',
}

// 无声表达
const chapter9DaiyuSilent: StoryNode = {
  id: 'chapter9_daiyu_silent',
  type: 'dialogue',
  chapter: 9,
  sceneId: 'yihong_yuan',
  content: [
    { text: '宝玉握住黛玉的手，两人无言相对。' },
    { speaker: 'daiyu', expression: 'shy', position: 'left', text: '（轻轻握紧）你要好好的……' },
  ],
  effects: [{ type: 'set_flag', target: 'held_daiyu_hand', value: true }],
  nextNodeId: 'chapter9_baochai_visit_after',
}

// 宝钗后来探望
const chapter9BaochaiVisitAfter: StoryNode = {
  id: 'chapter9_baochai_visit_after',
  type: 'dialogue',
  chapter: 9,
  sceneId: 'yihong_yuan',
  content: [
    { text: '黛玉走后，宝钗也来探望。' },
    { speaker: 'baochai', expression: 'normal', position: 'left', text: '（含蓄地）你这次挨打，虽说冤枉，但日后也要少做些没正经的事。' },
    { speaker: 'baoyu', expression: 'thinking', position: 'right', text: '姐姐说的是。' },
    { speaker: 'baochai', expression: 'shy', text: '（递上药丸）这丸药 you 拿着，敷在伤处，能止痛消肿。' },
  ],
  nextNodeId: 'chapter9_reflection',
}

// 宝钗先来探望
const chapter9BaochaiVisitFirst: StoryNode = {
  id: 'chapter9_baochai_visit_first',
  type: 'dialogue',
  chapter: 9,
  sceneId: 'yihong_yuan',
  content: [
    { text: '宝钗听闻宝玉挨打，带着药丸来探望。' },
    { speaker: 'baochai', expression: 'normal', position: 'left', text: '你这次挨打，虽说冤枉，但日后也要少做些没正经的事。' },
    { speaker: 'baochai', expression: 'shy', text: '（递上药丸）这丸药你拿着，敷在伤处，能止痛消肿。' },
    { speaker: 'baoyu', expression: 'happy', position: 'right', text: '谢谢姐姐关心。' },
  ],
  effects: [{ type: 'modify_relation', target: 'baochai', value: 5 }],
  nextNodeId: 'chapter9_baochai_talk_choice',
}

// 宝钗对话选择
const chapter9BaochaiTalkChoice: StoryNode = {
  id: 'chapter9_baochai_talk_choice',
  type: 'choice',
  chapter: 9,
  sceneId: 'yihong_yuan',
  content: { text: '宝钗稳重地关心你，你想如何回应？' },
  branches: [
    {
      id: 'choice_accept',
      text: '接受她的建议："姐姐说得是，我会注意的。"',
      hint: '+好感度，接受劝导',
      effects: [{ type: 'modify_relation', target: 'baochai', value: 8 }],
      targetNodeId: 'chapter9_baochai_accepted',
    },
    {
      id: 'choice_thanks',
      text: '只感谢她的药丸："谢谢姐姐的药，我会好好敷用。"',
      hint: '礼貌感谢',
      effects: [{ type: 'modify_relation', target: 'baochai', value: 5 }],
      targetNodeId: 'chapter9_baochai_thanked',
    },
    {
      id: 'choice_resist',
      text: '保持本心："姐姐，我做的事，我自己清楚。我不会改变。"',
      hint: '保持独立，好感不变',
      targetNodeId: 'chapter9_baochai_resisted',
    },
  ],
}

// 接受宝钗建议
const chapter9BaochaiAccepted: StoryNode = {
  id: 'chapter9_baochai_accepted',
  type: 'dialogue',
  chapter: 9,
  sceneId: 'yihong_yuan',
  content: [
    { speaker: 'baochai', expression: 'happy', position: 'left', text: '你若能听进去，便好了。日后要走正道，别再惹老爷生气。' },
    { speaker: 'baoyu', expression: 'normal', position: 'right', text: '我会记得姐姐的话。' },
  ],
  effects: [{ type: 'set_flag', target: 'accepted_baochai_advice', value: true }],
  nextNodeId: 'chapter9_daiyu_visit_after',
}

// 感谢宝钗
const chapter9BaochaiThanked: StoryNode = {
  id: 'chapter9_baochai_thanked',
  type: 'dialogue',
  chapter: 9,
  sceneId: 'yihong_yuan',
  content: [
    { speaker: 'baochai', expression: 'normal', position: 'left', text: '好好敷用，早日康复。' },
  ],
  nextNodeId: 'chapter9_daiyu_visit_after',
}

// 保持本心
const chapter9BaochaiResisted: StoryNode = {
  id: 'chapter9_baochai_resisted',
  type: 'dialogue',
  chapter: 9,
  sceneId: 'yihong_yuan',
  content: [
    { speaker: 'baochai', expression: 'thinking', position: 'left', text: '（微微皱眉）你……还是这样固执。也罢，你自己保重。' },
  ],
  nextNodeId: 'chapter9_daiyu_visit_after',
}

// 黛玉后来探望
const chapter9DaiyuVisitAfter: StoryNode = {
  id: 'chapter9_daiyu_visit_after',
  type: 'dialogue',
  chapter: 9,
  sceneId: 'yihong_yuan',
  content: [
    { text: '宝钗走后，黛玉悄悄来到怡红院。' },
    { speaker: 'daiyu', expression: 'sad', position: 'left', text: '（眼泪汪汪）你……你怎么伤成这样？' },
    { speaker: 'baoyu', expression: 'sad', position: 'right', text: '你眼睛哭红了，日后又说是我害的。' },
    { speaker: 'daiyu', expression: 'shy', text: '（又悲又喜）你还这样说……我怎能不担心你？' },
  ],
  effects: [{ type: 'modify_relation', target: 'daiyu', value: 5 }],
  nextNodeId: 'chapter9_reflection',
}

// 两人都来探望
const chapter9BothVisit: StoryNode = {
  id: 'chapter9_both_visit',
  type: 'narrative',
  chapter: 9,
  sceneId: 'yihong_yuan',
  content: [
    { text: '黛玉和宝钗先后前来探望。' },
    { text: '黛玉真情流露，眼泪汪汪地看着宝玉的伤势。' },
    { text: '宝钗则含蓄稳重，递上药丸，劝宝玉日后少惹祸端。' },
    { text: '宝玉心中感慨：两人虽性格不同，都对自己关心备至。' },
  ],
  nextNodeId: 'chapter9_reflection',
}

// 宝玉反思
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
    { text: '• 玩家选择影响挨打程度和后续好感度' },
    { text: '• 贾母、王夫人求情救下' },
    { text: '• 黛玉、宝钗探伤，情感深化' },
    { text: '互动提示：' },
    { text: '• 不同选择影响属性和好感度' },
    { text: '• 探伤选择影响后续剧情走向' },
    { text: '• 反抗父亲会留下剧情标志' },
    { text: '💡 宝玉挨打揭示了封建家庭父子之间的深层矛盾。玩家的选择会影响宝玉的健康值和角色关系。' },
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
    { text: '• 贾政质问：玩家选择如何回应' },
    { text: '• 痛打程度：取决于玩家选择' },
    { text: '• 探伤选择：影响好感度走向' },
    { text: '互动系统：' },
    { text: '• 选择影响属性（健康、声誉）' },
    { text: '• 选择影响好感度（黛玉、宝钗）' },
    { text: '• 剧情标志影响后续分支' },
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
    { text: '系统提示：' },
    { text: '• 本章引入属性修改系统' },
    { text: '• 选择影响健康值和声誉值' },
    { text: '• 探伤偏好影响角色好感度' },
  ],
  nextNodeId: 'chapter9_end_choice',
}

// 章节定义
export const chapter9: StoryChapter = {
  id: 'chapter9',
  number: 9,
  title: '宝玉挨打',
  description: '宝玉因与戏子交往、金钏儿之死惹怒贾政。玩家的选择影响挨打程度和探伤走向，好感度系统正式生效。',
  startNodeId: 'chapter9_start',
  nodes: [
    chapter9Start,
    chapter9JiazhengSummon,
    chapter9JiazhengQuestion,
    chapter9ResponseChoice,
    chapter9AdmitResponse,
    chapter9ExplainResponse,
    chapter9SilentResponse,
    chapter9DefiantResponse,
    chapter9LightBeating,
    chapter9NormalBeating,
    chapter9HeavyBeating,
    chapter9SevereBeating,
    chapter9RescueStart,
    chapter9WangfurenArrive,
    chapter9JiamuArrive,
    chapter9BeatingEnd,
    chapter9VisitChoice,
    chapter9DaiyuVisitFirst,
    chapter9DaiyuTalkChoice,
    chapter9DaiyuReassured,
    chapter9DaiyuGrateful,
    chapter9DaiyuSilent,
    chapter9BaochaiVisitAfter,
    chapter9BaochaiVisitFirst,
    chapter9BaochaiTalkChoice,
    chapter9BaochaiAccepted,
    chapter9BaochaiThanked,
    chapter9BaochaiResisted,
    chapter9DaiyuVisitAfter,
    chapter9BothVisit,
    chapter9Reflection,
    chapter9Summary,
    chapter9EndChoice,
    chapter9Review,
    chapter9Annotations,
  ],
}