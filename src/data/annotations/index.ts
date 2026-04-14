import { Annotation, PoetryInfo, PersonRelation, ChapterSummary, RelationType } from '../../types/annotation'

// 重新导出类型供其他模块使用
export type { PersonRelation, RelationType, ChapterSummary, PoetryInfo, Annotation }

// ===== 基础注释库 =====

// 常见词汇注释
export const wordAnnotations: Annotation[] = [
  {
    id: 'word_daguanyuan',
    type: 'word',
    term: '大观园',
    explanation: '贾府为元春省亲而建造的大型园林，是小说中主要场景之一。',
    detailed: '大观园占地广阔，内有潇湘馆、怡红院、蘅芜苑、稻香村等多处院落。贾宝玉和众姐妹入住后，这里成为他们生活、吟诗作对的主要场所，也是红楼梦后半部故事发生的重要舞台。',
    source: '第十七回',
  },
  {
    id: 'word_yihongyuan',
    type: 'word',
    term: '怡红院',
    explanation: '贾宝玉在大观园中的住所，因院内植有海棠（红）和芭蕉（绿），故名"怡红快绿"。',
    detailed: '怡红院是宝玉的居所，布局精致，内有宝玉的卧室、书房。院中海棠盛开时节尤为美丽，常有姐妹们来此聚会。',
    relatedPersons: ['baoyu'],
  },
  {
    id: 'word_xiaoxiangguan',
    type: 'word',
    term: '潇湘馆',
    explanation: '林黛玉在大观园中的住所，以竹为主，清幽雅致。',
    detailed: '潇湘馆四周竹林环绕，风过有声如泣如诉，与黛玉多愁善感的性格相呼应。黛玉常在此抚琴、吟诗、葬花。',
    relatedPersons: ['daiyu'],
  },
  {
    id: 'word_hengwuyuan',
    type: 'word',
    term: '蘅芜苑',
    explanation: '薛宝钗在大观园中的住所，以香草为主，朴素淡雅。',
    detailed: '蘅芜苑不种花卉，只植香草，符合宝钗不喜欢奢华的性格。宝钗在此居住，常研读实用书籍。',
    relatedPersons: ['baochai'],
  },
  {
    id: 'word_jiafu',
    type: 'word',
    term: '贾府',
    explanation: '小说中的主要家族，分为宁国府和荣国府两支。',
    detailed: '贾府是金陵四大家族之一，世代簪缨。宁国府为长房，荣国府为二房。小说主要描写荣国府，特别是贾母这一支的故事。',
    relatedPersons: ['baoyu', 'daiyu', 'xifeng', 'jiamu'],
  },
  {
    id: 'word_sijie',
    type: 'word',
    term: '四大家族',
    explanation: '贾、史、王、薛四家，世代联姻，势力庞大。',
    detailed: '"贾不假，白玉为堂金作马。阿房宫，三百里，住不下金陵一个史。东海缺少白玉床，龙王来请金陵王。丰年好大雪，珍珠如土金如铁。"这四句俗谚概括了四家的富贵。',
  },
  {
    id: 'word_mingpan',
    type: 'word',
    term: '命判',
    explanation: '命运判词，太虚幻境中预言金陵十二钗命运的诗词。',
    detailed: '在第五回中，宝玉梦入太虚幻境，看到了金陵十二钗的命判图册，每首判词暗示了各人的命运结局。',
    source: '第五回',
  },
]

// 典故注释
export const allusionAnnotations: Annotation[] = [
  {
    id: 'allusion_zanghua',
    type: 'allusion',
    term: '葬花',
    explanation: '黛玉将落花收集埋葬的行为，是红楼梦中最经典的场景之一。',
    detailed: '黛玉认为花落之后若落入沟渠污水之中太过可惜，不如埋葬于净土，使其"质本洁来还洁去"。葬花反映了黛玉对美好事物消逝的怜惜，也暗示了她自己的命运。',
    source: '第二十三回、第二十七回',
    relatedPersons: ['daiyu'],
  },
  {
    id: 'allusion_haitangshishe',
    type: 'allusion',
    term: '海棠诗社',
    explanation: '大观园众姐妹结社吟诗的活动，以海棠为题。',
    detailed: '探春发起，宝玉、黛玉、宝钗、湘云等参加。诗社定期聚会，以各种主题吟诗作对，展现了众姐妹的才情。黛玉的诗最为出众，宝钗的诗则稳重平和。',
    source: '第三十七回',
    relatedPersons: ['tanchun', 'daiyu', 'baochai', 'baoyu', 'xiangyun'],
  },
  {
    id: 'allusion_taixu',
    type: 'allusion',
    term: '太虚幻境',
    explanation: '宝玉在梦中进入的神仙世界，是小说的玄幻设定。',
    detailed: '太虚幻境中宝玉看到了金陵十二钗的命运判词，听到了《红楼梦曲》，预示了全书的主要人物结局。警幻仙子引导宝玉领悟"意淫"与"皮肤滥淫"的区别。',
    source: '第五回',
  },
  {
    id: 'allusion_tonglingbaoyu',
    type: 'allusion',
    term: '通灵宝玉',
    explanation: '贾宝玉出生时口中所含的宝玉，是他的护身符。',
    detailed: '此玉本是女娲补天所弃的一块石头，因不甘寂寞，求一僧一道带入红尘，化作宝玉。玉上刻有"莫失莫忘，仙寿恒昌"等字，与宝钗的金锁上"不离不弃，芳龄永继"形成对应。',
    source: '第一回、第八回',
    relatedPersons: ['baoyu', 'baochai'],
  },
]

// 人物注释
export const personAnnotations: Annotation[] = [
  {
    id: 'person_daiyu',
    type: 'person',
    term: '林黛玉',
    explanation: '小说女主角之一，贾母外孙女，宝玉的表妹和知己。',
    detailed: '黛玉本是绛珠仙草，为报神瑛侍者（宝玉前世）灌溉之恩，随其下凡，以泪水偿还。黛玉聪慧敏感，多愁善感，诗才出众。她与宝玉心灵相通，但最终因各种原因未能结合，含恨而终。',
    relatedPersons: ['baoyu', 'jiamu'],
    source: '第三回',
  },
  {
    id: 'person_baoyu',
    type: 'person',
    term: '贾宝玉',
    explanation: '小说男主角，贾政之子，贾母之孙，性情温和，厌恶科举功名。',
    detailed: '宝玉本是神瑛侍者，因向往红尘，携通灵宝玉下凡。他性格温柔多情，特别怜惜女孩儿，认为"女儿是水做的骨肉，男子是泥做的骨肉"。他与黛玉心灵相契，但最终在家族安排下娶了宝钗。',
    relatedPersons: ['daiyu', 'baochai', 'jiamu', 'jiazheng'],
    source: '第二回',
  },
  {
    id: 'person_baochai',
    type: 'person',
    term: '薛宝钗',
    explanation: '小说女主角之一，薛姨妈之女，宝玉的表姐。',
    detailed: '宝钗性格稳重圆融，处事得体，深受长辈喜爱。她佩戴金锁，与宝玉的通灵宝玉形成"金玉良缘"的说法。宝钗虽也爱慕宝玉，但更懂得处世之道。最终嫁给宝玉，但宝玉心有所属。',
    relatedPersons: ['baoyu', 'xueyima'],
    source: '第四回',
  },
  {
    id: 'person_xifeng',
    type: 'person',
    term: '王熙凤',
    explanation: '贾琏之妻，贾府的实际管理者，精明强干，泼辣能言。',
    detailed: '凤姐是荣国府的管家，掌握府中大小事务。她性格泼辣，言语犀利，管理能力强，但也心机深沉，手段狠辣。"机关算尽太聪明，反算了卿卿性命"是她命运的写照。',
    relatedPersons: ['jialian', 'jiamu'],
    source: '第三回',
  },
  {
    id: 'person_xiangyun',
    type: 'person',
    term: '史湘云',
    explanation: '贾母的侄孙女，性格开朗豪爽，才情敏捷。',
    detailed: '湘云父母早亡，寄居叔父家，常来贾府。她性格开朗，不像黛玉那样敏感，也不像宝钗那样含蓄。湘云曾在芍药花下醉眠，是红楼梦中最美的场景之一。',
    relatedPersons: ['jiamu', 'baoyu'],
    source: '第二十回',
  },
  {
    id: 'person_tanchun',
    type: 'person',
    term: '贾探春',
    explanation: '贾政庶女，精明能干，发起海棠诗社。',
    detailed: '探春虽是庶出，但性格刚毅，才干出众。她曾暂代管家之职，推行改革，展现管理能力。人称"玫瑰花"，美丽但带刺。',
    relatedPersons: ['baoyu', 'jiazheng'],
    source: '第三十七回',
  },
  {
    id: 'person_jiamu',
    type: 'person',
    term: '贾母',
    explanation: '贾府最高长辈，宝玉的祖母，黛玉的外祖母。',
    detailed: '贾母是荣国府的核心，她疼爱宝玉和黛玉，是府中权力的最高来源。贾母性格开朗，喜好热闹，常组织家宴和游园活动。',
    relatedPersons: ['baoyu', 'daiyu'],
    source: '第三回',
  },
]

// ===== 诗词信息 =====

export const poetryInfos: PoetryInfo[] = [
  {
    id: 'poetry_zanghua',
    title: '葬花吟',
    author: '林黛玉',
    content: `花谢花飞花满天，红消香断有谁怜？
游丝软系飘春榭，落絮轻沾扑绣帘。
闺中女儿惜春暮，愁绪满怀无释处，
手把花锄出绣闺，忍踏落花来复去。
柳丝榆荚自芳菲，不管桃飘与李飞。
桃李明年能再发，明年闺中知有谁？
三月香巢已垒成，梁间燕子太无情。
明年花发虽可啄，却不道人去梁空巢也倾。
一年三百六十日，风刀霜剑严相逼，
明媚鲜妍能几时，一朝飘泊难寻觅。
花开易见落难寻，阶前愁杀葬花人，
独倚花锄泪暗洒，洒上空枝见血痕。
杜鹃无语正黄昏，荷锄归去掩重门。
青灯照壁人初睡，冷雨敲窗被未温。
怪奴底事倍伤神，半为怜春半恼春：
怜春忽至恼忽去，至又无言去不闻。
昨宵庭外悲歌发，知是花魂与鸟魂？
花魂鸟魂总难留，鸟自无言花自羞。
愿奴胁下生双翼，随花飞到天尽头。
天尽头，何处有香丘？
未若锦囊收艳骨，一抔净土掩风流。
质本洁来还洁去，强于污淖陷渠沟。
尔今死去奴收葬，未卜奴身何日亡？
奴今葬花人笑痴，他年葬奴知是谁？
试看春残花渐落，便是红颜老死时。
一朝春尽红颜老，花落人亡两不知！`,
    background: '黛玉因昨晚晴雯不开门一事，错疑在宝玉身上，次日又遇饯花之会，感伤身世，吟成此诗。',
    annotations: [
      { id: 'p1', type: 'poetry', term: '花谢花飞花满天', explanation: '起句写暮春落花纷飞之景，奠定全诗凄美基调。' },
      { id: 'p2', type: 'poetry', term: '红消香断', explanation: '花色消退、香气断绝，暗示美好事物的消逝。' },
      { id: 'p3', type: 'poetry', term: '桃李明年能再发，明年闺中知有谁', explanation: '以花之明年再开对比人之命运无常，是全诗最深刻的哲思。' },
      { id: 'p4', type: 'poetry', term: '质本洁来还洁去', explanation: '花的本质是纯洁的，应让它洁净地离去，不愿落入污渠。这是黛玉的人生追求，也是她命运的写照。' },
    ],
    appreciation: '这首诗是黛玉性格与命运的集中体现。她对落花的怜惜，实是对自己命运的担忧。"质本洁来还洁去"是她的人生宣言，不愿妥协于污浊的世俗。全诗缠绵悱恻，是红楼梦中最动人的诗篇之一。',
    relatedEvent: '第二十七回葬花',
  },
  {
    id: 'poetry_haitang_daiyu',
    title: '咏白海棠·限门盆魂痕昏',
    author: '林黛玉',
    content: `半卷湘帘半掩门，碾冰为土玉为盆。
偷来梨蕊三分白，借得梅花一缕魂。
月窟仙人缝缟袂，秋闺怨女拭啼痕。
娇羞默默同谁诉，倦倚西风夜已昏。`,
    background: '海棠诗社首次聚会，以白海棠为题，限韵"门盆魂痕昏"。黛玉此诗被评为最佳。',
    annotations: [
      { id: 'p1', type: 'poetry', term: '碾冰为土玉为盆', explanation: '以冰为土、玉为盆，极写海棠之高洁，非凡尘之物。' },
      { id: 'p2', type: 'poetry', term: '偷来梨蕊三分白，借得梅花一缕魂', explanation: '海棠之美，似偷得梨花之白、梅花之魂，极妙的拟人手法。' },
    ],
    appreciation: '黛玉此诗风流别致，以海棠之洁喻己之洁。"娇羞默默同谁诉"写出黛玉内心的孤独，无人能真正理解她。',
    relatedEvent: '第三十七回海棠诗社',
  },
]

// ===== 人物关系 =====

export const personRelations: PersonRelation[] = [
  // 贾母相关
  { from: 'jiamu', to: 'baoyu', type: 'relative', description: '祖母', bidirectional: true },
  { from: 'jiamu', to: 'daiyu', type: 'relative', description: '外祖母', bidirectional: true },
  { from: 'jiamu', to: 'xiangyun', type: 'relative', description: '侄孙女', bidirectional: true },
  
  // 宝玉相关
  { from: 'baoyu', to: 'daiyu', type: 'ambiguous', description: '知己/表兄妹', bidirectional: true },
  { from: 'baoyu', to: 'baochai', type: 'ambiguous', description: '表姐弟/金玉良缘', bidirectional: true },
  { from: 'baoyu', to: 'jiazheng', type: 'parent', description: '父亲', bidirectional: true },
  
  // 黛玉相关
  { from: 'daiyu', to: 'baoyu', type: 'lover', description: '心有所属', bidirectional: false },
  
  // 宝钗相关
  { from: 'baochai', to: 'xueyima', type: 'parent', description: '母亲', bidirectional: true },
  
  // 王熙凤相关
  { from: 'xifeng', to: 'jialian', type: 'spouse', description: '夫妻', bidirectional: true },
  { from: 'xifeng', to: 'jiamu', type: 'servant', description: '管家', bidirectional: false },
  
  // 众姐妹
  { from: 'tanchun', to: 'baoyu', type: 'sibling', description: '兄妹（庶出）', bidirectional: true },
  { from: 'xiangyun', to: 'daiyu', type: 'friend', description: '好友', bidirectional: true },
]

// ===== 章节概要 =====

export const chapterSummaries: ChapterSummary[] = [
  {
    chapter: 1,
    title: '甄士隐梦幻识通灵 贾雨村风尘怀闺秀',
    summary: '小说开篇，讲述石头来历和通灵宝玉的起源。甄士隐梦入太虚幻境，看见"好了歌"后大彻大悟，随道人而去。',
    keyEvents: ['女娲补天遗石', '甄士隐梦幻', '贾雨村进京'],
    keyPersons: ['石头', '甄士隐', '贾雨村'],
    annotations: [
      { id: 'c1_1', type: 'scene', term: '大荒山无稽崖', explanation: '石头神话中的地点，象征虚无荒诞。' },
    ],
  },
  {
    chapter: 2,
    title: '贾夫人仙逝扬州城 冷子兴演说荣国府',
    summary: '贾雨村听说荣国府的衰败之势，介绍了贾府的家族结构和主要人物。',
    keyEvents: ['林如海丧妻', '冷子兴演说贾府'],
    keyPersons: ['贾雨村', '冷子兴', '林如海', '贾宝玉'],
    annotations: [
      { id: 'c2_1', type: 'word', term: '衔玉而生', explanation: '宝玉出生时口中含玉，是其非凡来历的象征。' },
    ],
  },
  {
    chapter: 3,
    title: '托内兄如海酬训教 接外孙贾母惜孤女',
    summary: '林黛玉进贾府，初见贾母、宝玉等人，奠定了全书的主要人物关系。',
    keyEvents: ['黛玉进府', '初见宝玉', '摔玉风波'],
    keyPersons: ['林黛玉', '贾母', '王熙凤', '贾宝玉'],
    annotations: [
      { id: 'c3_1', type: 'word', term: '步步留心，时时在意', explanation: '黛玉初入贾府时的谨慎心态，因寄人篱下而格外小心。' },
    ],
    originalText: '黛玉方进入房时，只见两个人搀着一位鬓发如银的老母迎上来，黛玉便知是他外祖母。方欲拜见时，早被他外祖母一把搂入怀中，心肝儿肉叫着大哭起来。',
  },
  {
    chapter: 4,
    title: '黛玉进府',
    summary: '林黛玉初入荣国府，拜见贾母、王熙凤等人物，与贾宝玉初遇，上演经典的摔玉风波。',
    keyEvents: ['黛玉入府', '初见凤姐', '宝黛初遇', '摔玉风波'],
    keyPersons: ['林黛玉', '贾宝玉', '王熙凤', '贾母'],
    annotations: [
      { id: 'c4_1', type: 'word', term: '步步留心，时时在意', explanation: '黛玉初入贾府时的谨慎心态，因寄人篱下而格外小心。' },
      { id: 'c4_2', type: 'word', term: '颦颦', explanation: '宝玉为黛玉取的别号，因其眉尖若蹙。' },
    ],
  },
  {
    chapter: 5,
    title: '游幻境指迷十二钗',
    summary: '宝玉梦入太虚幻境，见金陵十二钗命运判词，听红楼梦曲，预示全书人物结局。',
    keyEvents: ['梦入太虚幻境', '见金陵十二钗判词', '听红楼梦曲'],
    keyPersons: ['贾宝玉', '警幻仙子'],
    annotations: [
      { id: 'c5_1', type: 'allusion', term: '金陵十二钗', explanation: '小说中十二位主要女子：林黛玉、薛宝钗、贾元春、贾探春、史湘云、妙玉、贾迎春、贾惜春、王熙凤、贾巧姐、李纨、秦可卿。' },
      { id: 'c5_2', type: 'word', term: '假作真时真亦假', explanation: '太虚幻境对联，点明真假虚实的哲学主题。' },
    ],
  },
]

// 导出所有注释
export const allAnnotations: Annotation[] = [
  ...wordAnnotations,
  ...allusionAnnotations,
  ...personAnnotations,
]

// 查找注释
export function findAnnotation(term: string): Annotation | undefined {
  return allAnnotations.find(a => a.term === term || a.term.includes(term))
}

// 查找人物注释
export function findPersonAnnotation(personId: string): Annotation | undefined {
  return personAnnotations.find(a => a.relatedPersons?.includes(personId))
}

// 查找诗词
export function findPoetry(id: string): PoetryInfo | undefined {
  return poetryInfos.find(p => p.id === id)
}

// 查找章节概要
export function findChapterSummary(chapter: number): ChapterSummary | undefined {
  return chapterSummaries.find(s => s.chapter === chapter)
}