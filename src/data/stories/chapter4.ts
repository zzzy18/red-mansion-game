import { StoryNode, StoryChapter } from '../../types'

// 第四章：黛玉进府 - 最经典的场景之一
// 主题：林黛玉初入贾府，与宝玉初遇

const chapter4Start: StoryNode = {
  id: 'chapter4_start',
  type: 'narrative',
  chapter: 4,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【第四章：黛玉进府】' },
    { text: '话说林如海因公务繁忙，无暇照顾黛玉，便写信给贾母，请其接黛玉入府抚养。' },
    { text: '黛玉年方六七岁，生得风流袅娜，举止言谈不俗。虽年幼，却已有些愁病之态。' },
    { text: '贾母闻讯，立即派人前往扬州迎接。黛玉辞别父亲，随船北上，心中忐忑不安。' },
    { text: '💡 这是红楼梦最重要的场景之一。黛玉初入贾府，见到了几乎所有主要人物，奠定了全书的人物关系基础。' },
  ],
  nextNodeId: 'chapter4_arrive',
}

const chapter4Arrive: StoryNode = {
  id: 'chapter4_arrive',
  type: 'narrative',
  chapter: 4,
  sceneId: 'ruiguan',
  content: [
    { text: '【初入荣国府】' },
    { text: '船到京城，黛玉被接到荣国府。只见府门宏伟，两旁石狮威严，进门后层层院落，极尽奢华。' },
    { text: '黛玉心想："外祖母家果然与众不同，我须步步留心，时时在意，不可多说一句话，不可多行一步路。"' },
    { text: '仆人引黛玉穿过仪门，进入内院，远远便听见有人高声笑道："我来迟了，不曾迎接远客！"' },
    { text: '💡 黛玉"步步留心，时时在意"的心态，体现了她寄人篱下的谨慎与敏感。这与她日后多愁善感的性格密切相关。' },
  ],
  nextNodeId: 'chapter4_xifeng',
}

const chapter4Xifeng: StoryNode = {
  id: 'chapter4_xifeng',
  type: 'narrative',
  chapter: 4,
  sceneId: 'ruiguan',
  content: [
    { text: '【初见王熙凤】' },
    { text: '只见一位年轻女子从后院走出，彩绣辉煌，恍若神妃仙子。一双丹凤三角眼，两弯柳叶吊梢眉，身量苗条，体格风骚。' },
    { text: '这便是王熙凤，人称"凤辣子"。她笑道："天下真有这样标致的人物！况且这通身的气派，竟不像老祖宗的外孙女儿，竟是个嫡亲的孙女！"' },
    { text: '凤姐又转悲为喜，拉着黛玉的手嘘寒问暖，言语爽利，行事果敢。' },
    { text: '💡 王熙凤是红楼梦中最鲜活的人物之一。她精明强干、泼辣张扬，管理荣府家务，权倾一时。"未见其人，先闻其声"是她的出场特点。' },
  ],
  nextNodeId: 'chapter4_jiamu',
}

const chapter4Jiamu: StoryNode = {
  id: 'chapter4_jiamu',
  type: 'narrative',
  chapter: 4,
  sceneId: 'ruiguan',
  content: [
    { text: '【拜见贾母】' },
    { text: '黛玉进入正房，只见两个人搀着一位鬓发如银的老母迎上来。黛玉便知是外祖母，正欲拜见，早被贾母一把搂入怀中。' },
    { text: '贾母心肝儿肉叫着大哭起来："我这些儿女，所疼者独有你母，今日一旦先舍我而去，连面也不能一见，今见了你，我怎不伤心！"' },
    { text: '众人劝慰，贾母方止住悲伤，引黛玉拜见两位舅母——邢夫人（贾赦之妻）和王夫人（贾政之妻）。' },
    { text: '💡 贾母是贾府的核心人物，地位最高。她疼爱黛玉，因黛玉是她最疼爱的女儿贾敏留下的唯一骨肉。' },
  ],
  nextNodeId: 'chapter4_sisters',
}

const chapter4Sisters: StoryNode = {
  id: 'chapter4_sisters',
  type: 'narrative',
  chapter: 4,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【拜见众姐妹】' },
    { text: '随后，黛玉见到了三位姐妹：' },
    { text: '• 贾迎春：二小姐，性格温和，沉默寡言' },
    { text: '• 贾探春：三小姐，精明能干，志向高远' },
    { text: '• 贾惜春：四小姐，年纪最小，性格冷淡' },
    { text: '众人叙礼，相谈甚欢。贾母命人安排黛玉住处，暂居碧纱橱内，与自己同住。' },
    { text: '💡 三春姐妹性格各异。迎春懦弱，探春精明，惜春冷漠。探春后来发起海棠诗社，是重要的女性人物。' },
  ],
  nextNodeId: 'chapter4_baoyu_arrive',
}

const chapter4BaoyuArrive: StoryNode = {
  id: 'chapter4_baoyu_arrive',
  type: 'narrative',
  chapter: 4,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【宝玉归来】' },
    { text: '正说着，门外一语报告："宝二爷回来了！"' },
    { text: '只见一位年轻公子进来，面如中秋之月，色如春晓之花，鬓若刀裁，眉如墨画，鼻如悬胆，睛若秋波。' },
    { text: '他项上挂着金螭璎珞，又有一根五色丝绦，系着一块美玉。' },
    { text: '这便是贾宝玉，衔玉而生的贾府嫡孙。' },
    { text: '💡 宝玉出场时的描写极尽华美。"面如中秋之月，色如春晓之花"是经典的外貌描写。' },
  ],
  nextNodeId: 'chapter4_first_meet',
}

const chapter4FirstMeet: StoryNode = {
  id: 'chapter4_first_meet',
  type: 'narrative',
  chapter: 4,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【宝黛初遇】' },
    { text: '宝玉进屋，先拜见贾母，又被王夫人嘱咐一番。' },
    { text: '然后他转身看见黛玉，眼中顿时放出光彩，笑道："这个妹妹我曾见过的。"' },
    { text: '贾母笑道："可又是胡说！你何曾见过她？"' },
    { text: '宝玉道："虽然未曾见过，然我看着面善，心里就算是旧相识，今日只当作远别重逢，未为不可。"' },
    { text: '💡 "这个妹妹我曾见过的"——宝玉这句话暗示了前世因缘。黛玉本是绛珠仙草，为报神瑛侍者（宝玉前世）灌溉之恩，随其下凡。这是"木石前盟"的由来。' },
  ],
  nextNodeId: 'chapter4_name',
}

const chapter4Name: StoryNode = {
  id: 'chapter4_name',
  type: 'narrative',
  chapter: 4,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【赐名与探玉】' },
    { text: '宝玉问黛玉名字，黛玉道："无字。"宝玉笑道："我送妹妹一妙字，莫若『颦颦』二字极妙。"' },
    { text: '探春问何出，宝玉道："《古今人物通考》上说：『西方有石名黛，可代画眉之墨。』况这林妹妹眉尖若蹙，用取这两个字，岂不两妙！"' },
    { text: '随后宝玉又问黛玉可有玉，黛玉道："我没有那个。想来那玉是一件罕物，岂能人人有的。"' },
    { text: '💡 "颦颦"之名，因黛玉眉尖若蹼。探春后来又称她"潇湘妃子"。"眉尖若蹙"暗示黛玉多愁善感，常皱眉忧思。' },
  ],
  nextNodeId: 'chapter4_throw_jade',
}

const chapter4ThrowJade: StoryNode = {
  id: 'chapter4_throw_jade',
  type: 'narrative',
  chapter: 4,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【摔玉风波】' },
    { text: '宝玉听了黛玉说没有玉，顿时痴狂起来，摘下项上之玉，狠命摔在地上，骂道："什么罕物！连人的高低不择，还说『通灵』不『通灵』呢！我不要这劳什子了！"' },
    { text: '众人吓得魂飞魄散，急忙拾起玉来。贾母急得搂住宝玉道："孽障！你生气，要打骂人容易，何苦摔那命根子！"' },
    { text: '宝玉哭道："家里姐姐妹妹都没有，单我有，我说没趣；如今来了这这么一个神仙似的妹妹也没有，可知这不是个好东西。"' },
    { text: '💡 宝玉摔玉，是他性格的第一次展现。他认为人与人应当平等，不应因这块玉而不同。他摔玉是对"金玉良缘"观念的反抗，也是对黛玉的怜惜。' },
  ],
  nextNodeId: 'chapter4_night',
}

const chapter4Night: StoryNode = {
  id: 'chapter4_night',
  type: 'narrative',
  chapter: 4,
  sceneId: 'xiaoxiang_guan',
  content: [
    { text: '【夜宿贾府】' },
    { text: '风波过后，众人各自安歇。' },
    { text: '黛玉被安排暂居碧纱橱，与贾母同住。宝玉则睡在外间碧纱橱外的床上。' },
    { text: '黛玉躺在床上，想起白日之事，心中百感交集。初来便惹出风波，不知日后如何立足。' },
    { text: '宝玉睡前又来看黛玉，问她可好，两人相视而笑，心中默契已生。' },
    { text: '💡 宝黛二人从初遇便有心灵感应。宝玉摔玉为黛玉，黛玉心中感动却又忧虑。这是二人情缘的起点。' },
  ],
  nextNodeId: 'chapter4_summary',
}

const chapter4Summary: StoryNode = {
  id: 'chapter4_summary',
  type: 'narrative',
  chapter: 4,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章总结】' },
    { text: '第四章主要内容：' },
    { text: '• 林黛玉初入荣国府' },
    { text: '• 拜见贾母、王熙凤、众姐妹' },
    { text: '• 与贾宝玉初次相遇' },
    { text: '• 宝玉摔玉风波' },
    { text: '关键人物：' },
    { text: '• 林黛玉：敏感谨慎，寄人篱下' },
    { text: '• 贾宝玉：性情温和，怜惜女子' },
    { text: '• 王熙凤：精明强干，泼辣张扬' },
    { text: '• 贾母：疼爱子孙，地位最高' },
    { text: '💡 "宝黛初遇"是红楼梦最经典的场景之一。两人的心灵感应暗示了前世因缘，为全书爱情主线奠定基础。' },
  ],
  nextNodeId: 'chapter4_end_choice',
}

const chapter4EndChoice: StoryNode = {
  id: 'chapter4_end_choice',
  type: 'choice',
  chapter: 4,
  sceneId: 'yihong_yuan',
  content: { text: '第四章内容已了解完毕，接下来想做什么？' },
  branches: [
    {
      id: 'choice_continue',
      text: '继续阅读第五章',
      hint: '进入下一章',
      targetNodeId: 'chapter5_start',
    },
    {
      id: 'choice_review',
      text: '回顾本章要点',
      hint: '加深理解',
      targetNodeId: 'chapter4_review',
    },
    {
      id: 'choice_annotation',
      text: '查看注释汇总',
      hint: '读书笔记',
      targetNodeId: 'chapter4_annotations',
    },
  ],
}

const chapter4Review: StoryNode = {
  id: 'chapter4_review',
  type: 'narrative',
  chapter: 4,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章要点回顾】' },
    { text: '经典场景：' },
    { text: '• "步步留心，时时在意"——黛玉心态' },
    { text: '• "未见其人，先闻其声"——凤姐出场' },
    { text: '• "这个妹妹我曾见过的"——宝黛初遇' },
    { text: '人物性格：' },
    { text: '• 黛玉：敏感多愁，谨慎小心' },
    { text: '• 宝玉：怜惜女子，厌恶特权' },
    { text: '• 凤姐：泼辣张扬，精明强干' },
    { text: '关键象征：' },
    { text: '• 摔玉：反抗不平等，怜惜黛玉' },
  ],
  nextNodeId: 'chapter4_end_choice',
}

const chapter4Annotations: StoryNode = {
  id: 'chapter4_annotations',
  type: 'narrative',
  chapter: 4,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章注释汇总】' },
    { text: '词汇注释：' },
    { text: '• 颦颦：黛玉别号，因眉尖若蹼' },
    { text: '• 碧纱橱：一种隔断装饰' },
    { text: '• 劳什子：北方方言，讨厌的东西' },
    { text: '典故注释：' },
    { text: '• "木石前盟"：前世绛珠仙草与神瑛侍者' },
    { text: '• "衔玉而生"：宝玉出生时口含玉石' },
    { text: '💡 点击上方"注释"按钮可查看详细解释。' },
  ],
  nextNodeId: 'chapter4_end_choice',
}

// 章节定义
export const chapter4: StoryChapter = {
  id: 'chapter4',
  number: 4,
  title: '黛玉进府',
  description: '林黛玉初入荣国府，拜见贾母、王熙凤等人物，与贾宝玉初遇，上演经典的摔玉风波。',
  startNodeId: 'chapter4_start',
  nodes: [
    chapter4Start,
    chapter4Arrive,
    chapter4Xifeng,
    chapter4Jiamu,
    chapter4Sisters,
    chapter4BaoyuArrive,
    chapter4FirstMeet,
    chapter4Name,
    chapter4ThrowJade,
    chapter4Night,
    chapter4Summary,
    chapter4EndChoice,
    chapter4Review,
    chapter4Annotations,
  ],
}