import { StoryNode, StoryChapter } from '../../../types'

// 第一章：红楼梦开篇 - 以教育阅读为核心
// 主题：介绍红楼梦背景和主要人物

const chapter1Start: StoryNode = {
  id: 'chapter1_start',
  type: 'narrative',
  chapter: 1,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【第一章：红楼梦开篇】' },
    { text: '《红楼梦》，原名《石头记》，是中国古典四大名著之首。' },
    { text: '作者曹雪芹，出身于清代内务府正白旗包衣世家，曾祖曹玺曾任江宁织造。' },
    { text: '曹家曾极盛一时，后因政治风波被抄家，曹雪芹从此落魄，于贫病中著书。' },
    { text: '💡 "包衣"是清代内务府所属的特殊群体，虽身份低于旗人，但常担任重要职务。曹家作为包衣世家，曾深受皇帝信任。' },
  ],
  nextNodeId: 'chapter1_author',
}

const chapter1Author: StoryNode = {
  id: 'chapter1_author',
  type: 'narrative',
  chapter: 1,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【作者曹雪芹】' },
    { text: '曹雪芹约生于1715年，卒于1763年左右，享年约四十八岁。' },
    { text: '他少年时曾经历过一段锦衣玉食的生活，后被抄家，家道中落。' },
    { text: '正是在这种境遇下，他开始创作《红楼梦》，"披阅十载，增删五次"，终成巨著。' },
    { text: '💡 《红楼梦》前八十回为曹雪芹原著，后四十回一般认为由高鹗续写。' },
  ],
  nextNodeId: 'chapter1_background',
}

const chapter1Background: StoryNode = {
  id: 'chapter1_background',
  type: 'narrative',
  chapter: 1,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【故事背景】' },
    { text: '《红楼梦》以贾、史、王、薛四大家族的兴衰为背景，以贾宝玉、林黛玉、薛宝钗的爱情悲剧为主线。' },
    { text: '小说通过贾府这个封建大家庭的盛衰变迁，展现了封建社会末期的种种矛盾和危机。' },
    { text: '故事主要发生在荣国府，以贾母为核心，围绕宝玉与黛玉、宝钗的情感纠葛展开。' },
    { text: '💡 四大家族世代联姻，形成复杂的姻亲关系网络。这正是封建社会"门当户对"观念的体现。' },
  ],
  nextNodeId: 'chapter1_main_characters',
}

const chapter1MainCharacters: StoryNode = {
  id: 'chapter1_main_characters',
  type: 'narrative',
  chapter: 1,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【主要人物】' },
    { text: '贾宝玉：荣国府嫡孙，衔玉而生，性情温和，厌恶功名，天生怜惜女子。' },
    { text: '林黛玉：贾母外孙女，聪明敏感，多愁善感，与宝玉情投意合。' },
    { text: '薛宝钗：王夫人外甥女，稳重端庄，处事圆融，金锁与宝玉通灵宝玉对应。' },
    { text: '王熙凤：贾琏之妻，精明强干，泼辣张扬，管理荣府家务，人称"凤辣子"。' },
    { text: '💡 每个人物都有鲜明的性格特点和悲剧命运，这正是《红楼梦》的伟大之处。' },
  ],
  nextNodeId: 'chapter1_structure',
}

const chapter1Structure: StoryNode = {
  id: 'chapter1_structure',
  type: 'narrative',
  chapter: 1,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【小说结构】' },
    { text: '《红楼梦》共一百二十回，可分为三个部分：' },
    { text: '• 前八十回（曹雪芹原著）：以贾府繁华为主，描写众多人物的性格和命运。' },
    { text: '• 后四十回（高鹗续写）：以贾府衰败为主，完成主要人物的悲剧结局。' },
    { text: '小说采用"草蛇灰线"的手法，埋下无数伏笔，前后呼应，结构精妙。' },
    { text: '💡 "草蛇灰线"是小说创作手法，指在情节中埋下伏笔，读者初看不觉，待结局揭晓方知其妙。' },
  ],
  nextNodeId: 'chapter1_reading_guide',
}

const chapter1ReadingGuide: StoryNode = {
  id: 'chapter1_reading_guide',
  type: 'narrative',
  chapter: 1,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【阅读建议】' },
    { text: '《红楼梦》人物众多、情节复杂，初读可能感到困惑。建议：' },
    { text: '• 先把握主要人物关系：宝玉、黛玉、宝钗、王熙凤、贾母。' },
    { text: '• 关注关键情节：黛玉入府、宝钗进京、宝玉挨打、黛玉葬花等。' },
    { text: '• 留意细节描写：诗词、服饰、饮食、园林等都蕴含深意。' },
    { text: '💡 本游戏将帮助您循序渐进地理解《红楼梦》，点击"注释"可查看详细解释。' },
  ],
  nextNodeId: 'chapter1_summary',
}

const chapter1Summary: StoryNode = {
  id: 'chapter1_summary',
  type: 'narrative',
  chapter: 1,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章总结】' },
    { text: '第一章主要内容：' },
    { text: '• 了解《红楼梦》的作者和创作背景' },
    { text: '• 认识四大家族和主要人物' },
    { text: '• 理解小说的基本结构' },
    { text: '• 掌握阅读方法建议' },
    { text: '💡 接下来，让我们进入第二章，通过冷子兴的演说，深入了解贾府的家族结构。' },
  ],
  nextNodeId: 'chapter1_end_choice',
}

const chapter1EndChoice: StoryNode = {
  id: 'chapter1_end_choice',
  type: 'choice',
  chapter: 1,
  sceneId: 'yihong_yuan',
  content: { text: '第一章内容已了解完毕，接下来想做什么？' },
  branches: [
    {
      id: 'choice_continue',
      text: '继续阅读第二章',
      hint: '进入下一章',
      targetNodeId: 'chapter2_start',
    },
    {
      id: 'choice_review',
      text: '回顾本章要点',
      hint: '加深理解',
      targetNodeId: 'chapter1_review',
    },
    {
      id: 'choice_annotation',
      text: '查看注释汇总',
      hint: '读书笔记',
      targetNodeId: 'chapter1_annotations',
    },
  ],
}

const chapter1Review: StoryNode = {
  id: 'chapter1_review',
  type: 'narrative',
  chapter: 1,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章要点回顾】' },
    { text: '作者与背景：' },
    { text: '• 曹雪芹：清代包衣世家，家道中落后著书' },
    { text: '• 《石头记》：原名，前八十回为原著' },
    { text: '主要人物：' },
    { text: '• 宝玉：衔玉而生，厌恶功名' },
    { text: '• 黛玉：聪明敏感，与宝玉情投意合' },
    { text: '• 宝钗：稳重圆融，金玉良缘' },
    { text: '• 王熙凤：精明强干，管理家务' },
  ],
  nextNodeId: 'chapter1_end_choice',
}

const chapter1Annotations: StoryNode = {
  id: 'chapter1_annotations',
  type: 'narrative',
  chapter: 1,
  sceneId: 'yihong_yuan',
  content: [
    { text: '【本章注释汇总】' },
    { text: '词汇注释：' },
    { text: '• 包衣：清代内务府所属特殊群体' },
    { text: '• 江宁织造：负责宫廷丝织品供应的官职' },
    { text: '• 衔玉而生：出生时口含玉石的传说' },
    { text: '典故注释：' },
    { text: '• "披阅十载，增删五次"：指曹雪芹创作艰辛' },
    { text: '• "草蛇灰线"：伏笔手法，前后呼应' },
    { text: '💡 点击上方"注释"按钮可查看详细解释。' },
  ],
  nextNodeId: 'chapter1_end_choice',
}

// 章节定义
export const chapter1: StoryChapter = {
  id: 'chapter1',
  number: 1,
  title: '红楼梦开篇',
  description: '了解《红楼梦》的作者、背景和主要人物，掌握基本阅读方法。',
  startNodeId: 'chapter1_start',
  nodes: [
    chapter1Start,
    chapter1Author,
    chapter1Background,
    chapter1MainCharacters,
    chapter1Structure,
    chapter1ReadingGuide,
    chapter1Summary,
    chapter1EndChoice,
    chapter1Review,
    chapter1Annotations,
  ],
}