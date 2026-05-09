import type { Lang, MediaItem, Quiz } from "./course";

type Localized = Record<Lang, string>;

export type GlossaryEntry = {
  term: Localized;
  definition: Localized;
};

export type BeginnerGuide = {
  week: number;
  keyIdea: Localized;
  glossary: GlossaryEntry[];
  walkthrough: {
    artwork: string;
    steps: Record<Lang, string[]>;
  };
  commonMistake: Localized;
  tryThis: Localized;
};

export const beginnerGuides: BeginnerGuide[] = [
  {
    week: 1,
    keyIdea: {
      en: "Begin by separating the physical object from the artistic move. In contemporary art, the move may be naming, selecting, framing, repeating, recording, or inviting a viewer to act.",
      zh: "先把物理物件和艺术动作分开。当代艺术里的动作可能是命名、选择、框定、重复、记录，或邀请观众行动。"
    },
    glossary: [
      { term: { en: "Readymade", zh: "现成品" }, definition: { en: "An existing object selected and reframed as art.", zh: "把已有物件选择出来，并重新放入艺术语境。" } },
      { term: { en: "Context", zh: "语境" }, definition: { en: "The place, institution, history, and debate around a work.", zh: "围绕作品的地点、机构、历史和争论。" } },
      { term: { en: "Conceptual art", zh: "观念艺术" }, definition: { en: "Art where the idea or operation matters as much as the object.", zh: "观念或操作和物件同样重要的艺术。" } }
    ],
    walkthrough: {
      artwork: "Marcel Duchamp, Fountain",
      steps: {
        en: ["Look first: it is an ordinary urinal, turned and signed.", "Ask what changed: the object moved from plumbing to exhibition space.", "Name the challenge: who decides whether something is art?", "Connect it to today: screenshots, memes, datasets, and found images can also become material through framing."],
        zh: ["先看见：它是一个普通小便池，被旋转并签名。", "追问变化：物件从管道设备进入展览空间。", "说出挑战：谁有权决定什么是艺术？", "连接今天：截图、梗图、数据集和现成图像也能因框定而成为材料。"]
      }
    },
    commonMistake: {
      en: "Beginners often ask, 'But did the artist make it?' A better first question is, 'What operation did the artist perform?'",
      zh: "初学者常问“这真是艺术家做的吗？”更好的第一问是：“艺术家执行了什么操作？”"
    },
    tryThis: {
      en: "Choose one ordinary object near you and write three titles that would make it political, funny, or poetic.",
      zh: "选一个身边普通物件，写三个标题，让它分别变得政治、幽默或诗性。"
    }
  },
  {
    week: 2,
    keyIdea: {
      en: "Do not memorize artists as isolated names. Sort them into families of problems: power, identity, language, body, technology, memory, and participation.",
      zh: "不要孤立地背艺术家名字。把他们放进问题谱系：权力、身份、语言、身体、技术、记忆和参与。"
    },
    glossary: [
      { term: { en: "Practice", zh: "实践" }, definition: { en: "An artist's repeatable way of making questions visible.", zh: "艺术家反复让问题显形的方法。" } },
      { term: { en: "Theme", zh: "主题" }, definition: { en: "The human or social problem a work returns to.", zh: "作品反复处理的人或社会问题。" } },
      { term: { en: "Method", zh: "方法" }, definition: { en: "The deeper operation behind a surface style.", zh: "表面风格背后的深层操作。" } }
    ],
    walkthrough: {
      artwork: "Ai Weiwei, Sunflower Seeds",
      steps: {
        en: ["Notice the scale before the details: millions of small porcelain seeds become a field.", "Notice labor: each seed is handmade, so mass and individuality sit together.", "Ask the social question: what does a crowd hide or reveal?", "Place Ai beside Kruger or Paik: different media, but all turn public systems into art material."],
        zh: ["先看尺度：数以百万计的小瓷瓜子成为一片场域。", "再看劳动：每颗手工制作，所以大众与个体同时存在。", "提出社会问题：人群会隐藏什么，又暴露什么？", "把艾未未和 Kruger 或白南准并置：媒介不同，但都把公共系统变成艺术材料。"]
      }
    },
    commonMistake: {
      en: "A name list feels productive but disappears quickly. A problem map sticks.",
      zh: "名字清单看似有效，但很快会遗忘；问题地图更容易留下来。"
    },
    tryThis: {
      en: "For each artist this week, write one sentence: 'This artist uses ___ to ask ___.'",
      zh: "给本周每位艺术家写一句：“这位艺术家用___来追问___。”"
    }
  },
  {
    week: 3,
    keyIdea: {
      en: "Time-based art asks you to notice duration, repetition, waiting, sound, and your own body in the room.",
      zh: "时间性艺术要求你注意持续、重复、等待、声音，以及你在现场的身体。"
    },
    glossary: [
      { term: { en: "Duration", zh: "持续时间" }, definition: { en: "The time a work asks you to spend with it.", zh: "作品要求你与它共处的时间。" } },
      { term: { en: "Feedback loop", zh: "反馈回路" }, definition: { en: "A system where output returns as input.", zh: "输出又返回成为输入的系统。" } },
      { term: { en: "Presence", zh: "在场" }, definition: { en: "The felt fact of a body, viewer, or action happening now.", zh: "身体、观众或行动正在发生的现场感。" } }
    ],
    walkthrough: {
      artwork: "Nam June Paik, TV Buddha",
      steps: {
        en: ["Identify the parts: Buddha statue, camera, monitor, live image.", "Trace the loop: the statue looks at its own mediated image.", "Ask what feels ancient and what feels technological.", "Connect the loop to selfies, livestreams, and AI image feedback."],
        zh: ["辨认部件：佛像、摄像机、监视器、实时图像。", "追踪回路：佛像观看自己的媒介化影像。", "问什么显得古老，什么显得技术化。", "把这个回路连接到自拍、直播和 AI 图像反馈。"]
      }
    },
    commonMistake: {
      en: "Do not reduce video art to 'a video playing.' Ask how time changes the meaning.",
      zh: "不要把影像艺术简化成“播放视频”。要问时间如何改变意义。"
    },
    tryThis: {
      en: "Watch a 30-second loop twice. First describe images, then describe time: speed, repetition, delay, tension.",
      zh: "看一个 30 秒循环两遍。第一遍描述图像，第二遍描述时间：速度、重复、延迟、张力。"
    }
  },
  {
    week: 4,
    keyIdea: {
      en: "New media art is not defined by being new. It becomes art when systems, interfaces, code, networks, or data shape the experience.",
      zh: "新媒体艺术不只是因为“新”。当系统、界面、代码、网络或数据塑造经验时，它才成为艺术问题。"
    },
    glossary: [
      { term: { en: "Interface", zh: "界面" }, definition: { en: "The surface where a person meets a system.", zh: "人与系统相遇的表面。" } },
      { term: { en: "Generative", zh: "生成式" }, definition: { en: "Made by rules or code that can produce variations.", zh: "由规则或代码产生变化的方式。" } },
      { term: { en: "Network", zh: "网络" }, definition: { en: "A connected system of people, machines, images, or data.", zh: "由人、机器、图像或数据组成的连接系统。" } }
    ],
    walkthrough: {
      artwork: "JODI, early net art",
      steps: {
        en: ["Treat the browser as material, not just a window.", "Notice errors, broken layouts, and strange navigation as deliberate effects.", "Ask how the work changes your trust in interface design.", "Compare this to a polished app: both teach behavior, but one exposes the system."],
        zh: ["把浏览器当作材料，而不只是窗口。", "把错误、破碎布局和奇怪导航看成刻意效果。", "追问作品如何改变你对界面设计的信任。", "把它与精致 App 比较：两者都训练行为，但前者暴露系统。"]
      }
    },
    commonMistake: {
      en: "New media is not a style category. It is often a behavior category.",
      zh: "新媒体不是一种风格分类，它常常是一种行为分类。"
    },
    tryThis: {
      en: "Describe one app you use as if it were an artwork: what does it make your body, attention, and memory do?",
      zh: "把一个常用 App 当作艺术品描述：它让你的身体、注意力和记忆做了什么？"
    }
  },
  {
    week: 5,
    keyIdea: {
      en: "Technology is never neutral in art. Ask what feeling, power relation, or social problem the technology reveals.",
      zh: "艺术里的技术从不完全中性。要问技术揭示了什么感受、权力关系或社会问题。"
    },
    glossary: [
      { term: { en: "Surveillance", zh: "监控" }, definition: { en: "Systems that watch, classify, and store behavior.", zh: "观看、分类并储存行为的系统。" } },
      { term: { en: "Immersion", zh: "沉浸" }, definition: { en: "An environment that surrounds attention and body.", zh: "包围注意力和身体的环境。" } },
      { term: { en: "Dataset", zh: "数据集" }, definition: { en: "A collection of examples used by a system to see or decide.", zh: "系统用来观看或判断的一组样本。" } }
    ],
    walkthrough: {
      artwork: "Hito Steyerl, How Not to Be Seen",
      steps: {
        en: ["Start with the joke: it looks like an instructional video.", "Then find the threat: visibility is controlled by cameras, pixels, and platforms.", "Ask who wants to be seen and who is forced to disappear.", "Compare beauty and critique: the work is funny because the situation is serious."],
        zh: ["先看笑点：它像一支教学视频。", "再找威胁：可见性被摄像机、像素和平台控制。", "追问谁想被看见，谁被迫消失。", "比较美感和批判：作品之所以幽默，是因为处境严肃。"]
      }
    },
    commonMistake: {
      en: "Do not ask only whether a technology is impressive. Ask who gains power from it.",
      zh: "不要只问技术是否厉害。要问谁从技术中获得权力。"
    },
    tryThis: {
      en: "Pick one technology from daily life and list one wonder, one risk, and one artwork question it creates.",
      zh: "选一种日常技术，列出它制造的一种惊奇、一个风险和一个艺术问题。"
    }
  },
  {
    week: 6,
    keyIdea: {
      en: "The art world is a meaning-making system. Museums, biennials, markets, critics, archives, and platforms all shape what a work can mean.",
      zh: "艺术世界是意义生产系统。博物馆、双年展、市场、评论、档案和平台都会塑造作品意义。"
    },
    glossary: [
      { term: { en: "Institution", zh: "机构" }, definition: { en: "A museum, school, gallery, archive, or platform that gives art visibility.", zh: "让艺术获得可见性的博物馆、学校、画廊、档案或平台。" } },
      { term: { en: "Curator", zh: "策展人" }, definition: { en: "A person who selects, frames, and relates works for an audience.", zh: "为观众选择、框定并关联作品的人。" } },
      { term: { en: "Exhibition", zh: "展览" }, definition: { en: "A designed argument made through works in space.", zh: "通过空间中的作品形成的设计性论证。" } }
    ],
    walkthrough: {
      artwork: "Olafur Eliasson, The Weather Project at Tate Modern",
      steps: {
        en: ["Notice the room: the Tate Turbine Hall is not neutral.", "Notice the crowd: lying down and photographing became part of the experience.", "Ask how scale changes trust, emotion, and memory.", "Imagine the same sun in a small classroom: the meaning would change."],
        zh: ["注意空间：泰特涡轮大厅并不中性。", "注意人群：躺下和拍照成为经验的一部分。", "追问尺度如何改变信任、情绪和记忆。", "想象同一个太阳出现在小教室：意义会改变。"]
      }
    },
    commonMistake: {
      en: "Institutional context is not extra homework. It is part of the medium.",
      zh: "机构语境不是额外背景作业，它是媒介的一部分。"
    },
    tryThis: {
      en: "Move one artwork mentally into a mall, temple, classroom, and museum. Write how meaning changes.",
      zh: "想象把一件作品分别放到商场、寺庙、教室和博物馆，写下意义如何变化。"
    }
  },
  {
    week: 7,
    keyIdea: {
      en: "A beginner database should help you retrieve methods, not just store facts. Build entries that can later become ideas.",
      zh: "初学者数据库应该帮助你提取方法，而不只是储存事实。让条目以后能转化成想法。"
    },
    glossary: [
      { term: { en: "Reference", zh: "参考" }, definition: { en: "A work you can learn a method from.", zh: "你能从中学习方法的作品。" } },
      { term: { en: "Tag", zh: "标签" }, definition: { en: "A retrieval word that helps you find patterns later.", zh: "帮助你之后找回模式的检索词。" } },
      { term: { en: "Comparison", zh: "比较" }, definition: { en: "A way to see differences in method, not just similarity in style.", zh: "看见方法差异，而不只是风格相似的方式。" } }
    ],
    walkthrough: {
      artwork: "A sample artist database entry",
      steps: {
        en: ["Start with one work, not a whole biography.", "Record what you see before you record interpretation.", "Add method tags such as loop, instruction, archive, public text, dataset.", "End with one usable sentence: 'I can borrow this method by ___.'"],
        zh: ["从一件作品开始，不要从整个人生传记开始。", "先记录看到什么，再记录解读。", "加入方法标签，如回路、指令、档案、公共文字、数据集。", "最后写一句可使用的话：“我可以通过___借用这个方法。”"]
      }
    },
    commonMistake: {
      en: "Copying biography makes a database feel full but creatively empty.",
      zh: "复制传记会让数据库看似丰富，但创作上很空。"
    },
    tryThis: {
      en: "Create five entries with the same fields so patterns can be compared later.",
      zh: "用同一组字段建立五个条目，方便之后比较模式。"
    }
  },
  {
    week: 8,
    keyIdea: {
      en: "Interpretation is an evidence chain: observation, medium, viewer role, context, claim.",
      zh: "解读是一条证据链：观察、媒介、观看者角色、语境、判断。"
    },
    glossary: [
      { term: { en: "Observation", zh: "观察" }, definition: { en: "A concrete detail anyone could verify.", zh: "任何人都能核对的具体细节。" } },
      { term: { en: "Claim", zh: "判断" }, definition: { en: "A meaningful argument about what the work does.", zh: "关于作品在做什么的有意义论断。" } },
      { term: { en: "Viewer role", zh: "观看者角色" }, definition: { en: "What the work asks the viewer to become.", zh: "作品要求观看者成为什么角色。" } }
    ],
    walkthrough: {
      artwork: "Nam June Paik, TV Buddha",
      steps: {
        en: ["Observation: statue, camera, monitor, live image.", "Medium: video makes time and self-observation visible.", "Viewer role: witness to a loop between spirituality and technology.", "Claim: the work turns meditation into media feedback."],
        zh: ["观察：佛像、摄像机、监视器、实时图像。", "媒介：影像让时间和自我观看可见。", "观看者角色：见证精神性与技术之间的回路。", "判断：作品把冥想转化为媒介反馈。"]
      }
    },
    commonMistake: {
      en: "A personal reaction is valuable, but it becomes stronger when tied to visible evidence.",
      zh: "个人反应有价值，但连接到可见证据后才更有力量。"
    },
    tryThis: {
      en: "Write one paragraph where every sentence begins with evidence: 'I see...', 'This medium...', 'The viewer...', 'Therefore...'",
      zh: "写一段话，每句都从证据开始：“我看到……”“这个媒介……”“观看者……”“因此……”"
    }
  },
  {
    week: 9,
    keyIdea: {
      en: "Taste is not just liking. It is a pattern in what your attention repeatedly chooses.",
      zh: "品味不只是喜欢，而是你的注意力反复选择的模式。"
    },
    glossary: [
      { term: { en: "Surface style", zh: "表面风格" }, definition: { en: "Colors, shapes, textures, and recognizable looks.", zh: "颜色、形状、质感和可识别外观。" } },
      { term: { en: "Deep method", zh: "深层方法" }, definition: { en: "The operation that generates the style.", zh: "产生风格的操作。" } },
      { term: { en: "Constraint", zh: "限制" }, definition: { en: "A rule that gives a creative system direction.", zh: "给创作系统方向的规则。" } }
    ],
    walkthrough: {
      artwork: "Yayoi Kusama, Infinity Mirror Rooms",
      steps: {
        en: ["Surface: dots, mirrors, lights, repeated space.", "Method: repetition turns a small mark into infinity.", "Feeling: the viewer becomes tiny inside a pattern.", "Transfer: use repetition to make memory, data, or language feel vast."],
        zh: ["表面：圆点、镜面、灯光、重复空间。", "方法：重复把一个小标记变成无限。", "感受：观看者在模式中变得渺小。", "迁移：用重复让记忆、数据或语言显得巨大。"]
      }
    },
    commonMistake: {
      en: "Do not copy dots, neon, or mirrors. Extract the rule that makes them work.",
      zh: "不要复制圆点、霓虹或镜面，要提取让它们成立的规则。"
    },
    tryThis: {
      en: "Choose three works you like and underline the repeated method behind them.",
      zh: "选三件你喜欢的作品，划出它们背后反复出现的方法。"
    }
  },
  {
    week: 10,
    keyIdea: {
      en: "Method transfer means translating an artist's operation into your own problem.",
      zh: "方法迁移就是把艺术家的操作翻译到你自己的问题里。"
    },
    glossary: [
      { term: { en: "Instruction", zh: "指令" }, definition: { en: "A rule someone else can execute.", zh: "他人可以执行的一条规则。" } },
      { term: { en: "Transfer", zh: "迁移" }, definition: { en: "Moving a method into a different medium or problem.", zh: "把方法移动到不同媒介或问题中。" } },
      { term: { en: "Prototype", zh: "原型" }, definition: { en: "A small test version of a larger idea.", zh: "较大想法的小型测试版本。" } }
    ],
    walkthrough: {
      artwork: "Sol LeWitt, wall drawing instructions",
      steps: {
        en: ["Notice that the instruction is the work's engine.", "Separate authorship from execution.", "Ask what changes each time the rule is performed.", "Transfer it: write a rule that generates a learning diagram or webpage."],
        zh: ["注意指令是作品的引擎。", "把作者性和执行分开。", "追问每次执行规则时什么会变化。", "迁移它：写一条能生成学习图表或网页的规则。"]
      }
    },
    commonMistake: {
      en: "Imitation asks, 'How can I make it look similar?' Transfer asks, 'What rule can I reuse?'",
      zh: "模仿问“怎样做得像？”迁移问“我能复用什么规则？”"
    },
    tryThis: {
      en: "Write one instruction that another person could use to generate a visual note from a text.",
      zh: "写一条指令，让别人能根据一段文本生成一张视觉笔记。"
    }
  },
  {
    week: 11,
    keyIdea: {
      en: "Clear art writing is not fancy language. It is accurate seeing plus a defensible claim.",
      zh: "清晰的艺术写作不是华丽语言，而是准确观看加上可辩护的判断。"
    },
    glossary: [
      { term: { en: "Evidence", zh: "证据" }, definition: { en: "Visible or contextual support for a claim.", zh: "支持判断的可见或语境材料。" } },
      { term: { en: "Tension", zh: "张力" }, definition: { en: "The conflict or pressure that makes a work matter.", zh: "让作品重要的冲突或压力。" } },
      { term: { en: "Curatorial statement", zh: "策展陈述" }, definition: { en: "A short argument explaining why works belong together.", zh: "解释作品为何被放在一起的简短论证。" } }
    ],
    walkthrough: {
      artwork: "Joseph Kosuth, One and Three Chairs",
      steps: {
        en: ["Sentence 1: describe the three parts.", "Sentence 2: name the systems: object, image, language.", "Sentence 3: explain the viewer's comparison task.", "Sentence 4: state the question about meaning.", "Sentence 5: judge why it still matters."],
        zh: ["第一句：描述三个部分。", "第二句：命名三个系统：物、图像、语言。", "第三句：说明观看者的比较任务。", "第四句：提出关于意义的问题。", "第五句：判断它为何仍然重要。"]
      }
    },
    commonMistake: {
      en: "Words like 'deep' and 'interesting' are placeholders. Replace them with evidence.",
      zh: "“深刻”“有趣”是占位词。用证据替换它们。"
    },
    tryThis: {
      en: "Write a five-sentence analysis without using 'interesting,' 'beautiful,' or 'deep.'",
      zh: "写五句话分析，不使用“有趣”“美”“深刻”。"
    }
  },
  {
    week: 12,
    keyIdea: {
      en: "AI art becomes clearer when you ask what role AI plays: tool, style machine, medium, collaborator, or critique.",
      zh: "追问 AI 的角色后，AI 艺术会更清楚：工具、风格机器、媒介、合作者，还是批判对象。"
    },
    glossary: [
      { term: { en: "Model", zh: "模型" }, definition: { en: "A trained system that produces outputs from patterns in data.", zh: "从数据模式中生成输出的训练系统。" } },
      { term: { en: "Prompt", zh: "提示词" }, definition: { en: "An instruction that steers a generative system.", zh: "引导生成系统的指令。" } },
      { term: { en: "Authorship", zh: "作者性" }, definition: { en: "Who is responsible for choices, meaning, and form.", zh: "谁对选择、意义和形式负责。" } }
    ],
    walkthrough: {
      artwork: "Refik Anadol, Machine Hallucination",
      steps: {
        en: ["Identify the input: large image archives.", "Identify the process: machine learning reorganizes patterns.", "Identify the output: immersive moving image environment.", "Ask the authorship question: whose memory is being dreamed by the machine?"],
        zh: ["辨认输入：大型图像档案。", "辨认过程：机器学习重新组织模式。", "辨认输出：沉浸式动态影像环境。", "提出作者性问题：机器梦见的是谁的记忆？"]
      }
    },
    commonMistake: {
      en: "A pretty AI image is not automatically AI art. The artistic question must include the system.",
      zh: "漂亮的 AI 图像不自动等于 AI 艺术。艺术问题必须包含系统本身。"
    },
    tryThis: {
      en: "For one AI image, write separate notes for prompt, dataset assumption, human choice, machine choice, and ethical question.",
      zh: "给一张 AI 图像分别写下：提示词、数据集假设、人的选择、机器的选择和伦理问题。"
    }
  },
  {
    week: 13,
    keyIdea: {
      en: "Chinese contemporary art is not one style. It often turns language, history, censorship, rapid urbanization, and cultural memory into material.",
      zh: "中国当代艺术不是一种风格。它常把语言、历史、审查、快速城市化和文化记忆变成材料。"
    },
    glossary: [
      { term: { en: "Cultural memory", zh: "文化记忆" }, definition: { en: "Shared symbols, habits, histories, and wounds carried by a culture.", zh: "一种文化携带的共同符号、习惯、历史和创伤。" } },
      { term: { en: "Translation", zh: "翻译" }, definition: { en: "The movement of meaning between languages, systems, or audiences.", zh: "意义在语言、系统或观众之间移动。" } },
      { term: { en: "Legibility", zh: "可读性" }, definition: { en: "Whether signs can be recognized and understood.", zh: "符号能否被识别和理解。" } }
    ],
    walkthrough: {
      artwork: "Xu Bing, Book from the Sky",
      steps: {
        en: ["At first glance, it looks authoritative and traditional.", "Then you realize the characters cannot be read.", "The work creates forced illiteracy: everyone faces the limits of language.", "Ask how beauty, craft, and confusion work together."],
        zh: ["第一眼看，它显得权威且传统。", "随后你发现这些字无法阅读。", "作品制造被迫的文盲状态：所有人都面对语言边界。", "追问美、工艺和困惑如何共同作用。"]
      }
    },
    commonMistake: {
      en: "Do not treat Chinese contemporary art only as national identity. Look for the specific system each work tests.",
      zh: "不要只把中国当代艺术理解为民族身份。要看每件作品测试了什么具体系统。"
    },
    tryThis: {
      en: "Find one sign from daily life and redesign it so it becomes beautiful but unreadable.",
      zh: "找一个日常标识，把它重新设计成美丽但不可读的样子。"
    }
  },
  {
    week: 14,
    keyIdea: {
      en: "A studio language is a repeatable way of thinking in public: diagrams, archives, essays, interfaces, images, and rituals can all belong to it.",
      zh: "工作室语言是在公共中反复思考的方式：图表、档案、文章、界面、图像和仪式都可以属于它。"
    },
    glossary: [
      { term: { en: "Studio language", zh: "工作室语言" }, definition: { en: "A consistent set of methods, forms, and questions.", zh: "一组持续的方法、形式和问题。" } },
      { term: { en: "Archive", zh: "档案" }, definition: { en: "A collection arranged to preserve, retrieve, and reinterpret memory.", zh: "为保存、检索和重新解释记忆而组织的集合。" } },
      { term: { en: "Public learning", zh: "公共学习" }, definition: { en: "Learning designed to be shared, witnessed, and reused by others.", zh: "被设计成可分享、可见证、可被他人复用的学习。" } }
    ],
    walkthrough: {
      artwork: "Alan Hou Studio concept sketch",
      steps: {
        en: ["Choose one recurring question, such as memory, language, or AI learning.", "Choose one public form: page, database, video, installation, or tool.", "Choose one rule that repeats across projects.", "Make the rule visible so the audience learns how you think."],
        zh: ["选择一个反复出现的问题，如记忆、语言或 AI 学习。", "选择一种公共形式：网页、数据库、视频、装置或工具。", "选择一条会在项目中重复的规则。", "让规则可见，使观众学会你的思考方式。"]
      }
    },
    commonMistake: {
      en: "A studio language is not a logo style. It is a method people can recognize across works.",
      zh: "工作室语言不是 Logo 风格，而是人们能在不同作品中识别的方法。"
    },
    tryThis: {
      en: "Write three rules that future Alan Hou Studio projects should obey.",
      zh: "写三条未来 Alan Hou Studio 项目应该遵守的规则。"
    }
  },
  {
    week: 15,
    keyIdea: {
      en: "A living visual system needs inputs, transformations, constraints, outputs, and feedback.",
      zh: "活的视觉系统需要输入、转换、限制、输出和反馈。"
    },
    glossary: [
      { term: { en: "Input", zh: "输入" }, definition: { en: "What enters the system: text, image, sound, data, or audience action.", zh: "进入系统的东西：文本、图像、声音、数据或观众行动。" } },
      { term: { en: "Transformation", zh: "转换" }, definition: { en: "How the system changes input into form.", zh: "系统如何把输入变成形式。" } },
      { term: { en: "Feedback", zh: "反馈" }, definition: { en: "How output affects the next state of the system.", zh: "输出如何影响系统的下一状态。" } }
    ],
    walkthrough: {
      artwork: "Rafael Lozano-Hemmer, Pulse Room",
      steps: {
        en: ["Input: a visitor's heartbeat.", "Transformation: pulse becomes flashing light.", "Output: the room stores many heart rhythms.", "Feedback: each new participant changes the collective pattern."],
        zh: ["输入：观众的心跳。", "转换：脉搏变成闪烁灯光。", "输出：房间储存许多心跳节奏。", "反馈：每个新参与者改变集体图案。"]
      }
    },
    commonMistake: {
      en: "Random movement is not the same as life. A living system needs readable rules.",
      zh: "随机运动不等于生命感。活系统需要可读的规则。"
    },
    tryThis: {
      en: "Design a system where each new note changes a color, map, or sound rule.",
      zh: "设计一个系统：每条新笔记都会改变颜色、地图或声音规则。"
    }
  },
  {
    week: 16,
    keyIdea: {
      en: "The final portfolio concept should prove that you can turn research into an original system, not just collect references.",
      zh: "最终作品集概念要证明你能把研究转化为原创系统，而不只是收集参考。"
    },
    glossary: [
      { term: { en: "Portfolio", zh: "作品集" }, definition: { en: "A curated argument about what you can think and make.", zh: "关于你能如何思考和制作的策划性论证。" } },
      { term: { en: "Worldview", zh: "世界观" }, definition: { en: "The repeated questions and values behind your work.", zh: "作品背后反复出现的问题与价值。" } },
      { term: { en: "System", zh: "系统" }, definition: { en: "A set of parts that interact through rules.", zh: "一组通过规则互动的部件。" } }
    ],
    walkthrough: {
      artwork: "Final mini exhibition concept",
      steps: {
        en: ["Name the central question.", "Choose three works or prototypes that answer it differently.", "Write the viewer journey from entry to exit.", "State what the audience should understand by the end."],
        zh: ["命名中心问题。", "选择三个以不同方式回应它的作品或原型。", "写出观众从进入到离开的路径。", "说明观众最后应该理解什么。"]
      }
    },
    commonMistake: {
      en: "A portfolio is not a folder of everything. It is a controlled argument.",
      zh: "作品集不是装下所有东西的文件夹，而是一个受控论证。"
    },
    tryThis: {
      en: "Write the exhibition wall text for your final system in 80 words.",
      zh: "用 80 个中文字左右为你的最终系统写一段展墙文字。"
    }
  }
];

export const beginnerQuizzes: Quiz[] = [
  {
    id: "w5-en-1",
    week: 5,
    lang: "en",
    prompt: "What is the best first question when studying technology in contemporary art?",
    options: ["Is the device expensive?", "What problem or power relation does the technology reveal?", "Can I buy the same software?", "Is it realistic?"],
    answer: 1,
    explanation: "The course treats technology as a way to reveal social, political, emotional, and ecological questions."
  },
  {
    id: "w5-zh-1",
    week: 5,
    lang: "zh",
    prompt: "研究当代艺术中的技术时，最好的第一问是什么？",
    options: ["设备贵不贵？", "技术揭示了什么问题或权力关系？", "我能买到同款软件吗？", "它是否写实？"],
    answer: 1,
    explanation: "这门课把技术看成揭示社会、政治、情感与生态问题的方法。"
  },
  {
    id: "w6-en-1",
    week: 6,
    lang: "en",
    prompt: "Why does institutional context matter?",
    options: ["It replaces looking at the artwork", "It changes visibility, value, and meaning", "It only matters for old art", "It proves market price"],
    answer: 1,
    explanation: "Museums, archives, biennials, platforms, and markets shape how a work is encountered and remembered."
  },
  {
    id: "w6-zh-1",
    week: 6,
    lang: "zh",
    prompt: "为什么机构语境重要？",
    options: ["它代替观看作品", "它改变可见性、价值和意义", "它只对古代艺术重要", "它证明市场价格"],
    answer: 1,
    explanation: "博物馆、档案、双年展、平台和市场会塑造作品如何被遇见和记住。"
  },
  {
    id: "w7-en-1",
    week: 7,
    lang: "en",
    prompt: "What makes an artist database useful for creative work?",
    options: ["Long copied biographies", "Consistent fields that reveal methods and patterns", "Only high-resolution images", "Sorting artists by fame"],
    answer: 1,
    explanation: "A useful database helps you retrieve methods, compare patterns, and build future ideas."
  },
  {
    id: "w7-zh-1",
    week: 7,
    lang: "zh",
    prompt: "什么让艺术家数据库对创作有用？",
    options: ["很长的复制传记", "能揭示方法与模式的一致字段", "只有高清图片", "按名气排序"],
    answer: 1,
    explanation: "有用的数据库帮助你提取方法、比较模式，并生成未来想法。"
  },
  {
    id: "w8-en-1",
    week: 8,
    lang: "en",
    prompt: "What should come before a strong interpretation?",
    options: ["A symbolic conclusion", "A concrete description of what is visible", "The artist's market value", "A personal ranking"],
    answer: 1,
    explanation: "Interpretation becomes stronger when it starts from observable evidence."
  },
  {
    id: "w8-zh-1",
    week: 8,
    lang: "zh",
    prompt: "有力解读之前应该先做什么？",
    options: ["直接给出象征结论", "具体描述可见之物", "查艺术家市场价格", "给个人排名"],
    answer: 1,
    explanation: "解读从可观察证据出发会更有力量。"
  },
  {
    id: "w9-en-1",
    week: 9,
    lang: "en",
    prompt: "What is the difference between surface style and deep method?",
    options: ["There is no difference", "Style is the look; method is the operation that produces it", "Method means color palette", "Style is always more important"],
    answer: 1,
    explanation: "The course asks you to borrow repeatable methods, not copy recognizable looks."
  },
  {
    id: "w9-zh-1",
    week: 9,
    lang: "zh",
    prompt: "表面风格和深层方法有什么区别？",
    options: ["没有区别", "风格是外观；方法是产生它的操作", "方法就是配色", "风格永远更重要"],
    answer: 1,
    explanation: "这门课要求借用可重复的方法，而不是复制可识别外观。"
  },
  {
    id: "w10-en-1",
    week: 10,
    lang: "en",
    prompt: "What is method transfer?",
    options: ["Copying an artist's visual style", "Translating an artist's operation into a new problem", "Using the same materials", "Writing a biography"],
    answer: 1,
    explanation: "Method transfer asks what rule or operation can be reused in a different context."
  },
  {
    id: "w10-zh-1",
    week: 10,
    lang: "zh",
    prompt: "什么是方法迁移？",
    options: ["复制艺术家的视觉风格", "把艺术家的操作翻译到新问题中", "使用同样材料", "写一篇传记"],
    answer: 1,
    explanation: "方法迁移关注哪些规则或操作能在不同语境中复用。"
  },
  {
    id: "w11-en-1",
    week: 11,
    lang: "en",
    prompt: "What makes art writing clearer?",
    options: ["More abstract adjectives", "Evidence connected to a claim", "Avoiding description", "Only quoting famous critics"],
    answer: 1,
    explanation: "Clear writing connects what can be seen to what can be argued."
  },
  {
    id: "w11-zh-1",
    week: 11,
    lang: "zh",
    prompt: "什么让艺术写作更清晰？",
    options: ["更多抽象形容词", "把证据连接到判断", "避免描述", "只引用名家评论"],
    answer: 1,
    explanation: "清晰写作把可见之物连接到可论证之物。"
  },
  {
    id: "w12-en-1",
    week: 12,
    lang: "en",
    prompt: "When does AI become a medium rather than just a tool?",
    options: ["When the system's data, choices, and authorship questions shape the work", "When the image is pretty", "When the prompt is long", "When no human is involved"],
    answer: 0,
    explanation: "AI becomes a medium when the system itself is part of the artistic question."
  },
  {
    id: "w12-zh-1",
    week: 12,
    lang: "zh",
    prompt: "AI 什么时候不只是工具，而成为媒介？",
    options: ["当系统的数据、选择和作者性问题塑造作品时", "当图像漂亮时", "当提示词很长时", "当完全没有人参与时"],
    answer: 0,
    explanation: "当系统本身成为艺术问题的一部分时，AI 才成为媒介。"
  },
  {
    id: "w13-en-1",
    week: 13,
    lang: "en",
    prompt: "Why is Book from the Sky useful for beginners?",
    options: ["It is easy to read", "It makes language, authority, and misunderstanding visible", "It avoids craft", "It is only decorative calligraphy"],
    answer: 1,
    explanation: "Xu Bing uses beautiful bookmaking to create unreadable text, turning language itself into a problem."
  },
  {
    id: "w13-zh-1",
    week: 13,
    lang: "zh",
    prompt: "为什么《天书》适合初学者理解？",
    options: ["它很容易阅读", "它让语言、权威和误读变得可见", "它回避工艺", "它只是装饰性书法"],
    answer: 1,
    explanation: "徐冰用精美书籍工艺制造不可读文本，把语言本身变成问题。"
  },
  {
    id: "w14-en-1",
    week: 14,
    lang: "en",
    prompt: "What is a studio language?",
    options: ["A logo and color palette only", "A repeatable set of methods, forms, and questions", "A private diary", "A list of favorite artists"],
    answer: 1,
    explanation: "A studio language lets audiences recognize how a practice thinks across different works."
  },
  {
    id: "w14-zh-1",
    week: 14,
    lang: "zh",
    prompt: "什么是工作室语言？",
    options: ["只是 Logo 和配色", "一组可重复的方法、形式和问题", "私人日记", "喜欢的艺术家清单"],
    answer: 1,
    explanation: "工作室语言让观众能在不同作品中识别一种实践如何思考。"
  },
  {
    id: "w15-en-1",
    week: 15,
    lang: "en",
    prompt: "What does a living visual system need?",
    options: ["Random animation only", "Inputs, transformations, constraints, outputs, and feedback", "One fixed poster", "Only decoration"],
    answer: 1,
    explanation: "A living system changes through readable rules, not random motion."
  },
  {
    id: "w15-zh-1",
    week: 15,
    lang: "zh",
    prompt: "活的视觉系统需要什么？",
    options: ["只有随机动画", "输入、转换、限制、输出和反馈", "一张固定海报", "只有装饰"],
    answer: 1,
    explanation: "活系统通过可读规则变化，而不是靠随机运动。"
  },
  {
    id: "w16-en-1",
    week: 16,
    lang: "en",
    prompt: "What should the final portfolio concept prove?",
    options: ["That you collected many references", "That you can turn research into an original system", "That you know every artist's biography", "That you copied one style well"],
    answer: 1,
    explanation: "The final project should show a coherent worldview and a working creative system."
  },
  {
    id: "w16-zh-1",
    week: 16,
    lang: "zh",
    prompt: "最终作品集概念应该证明什么？",
    options: ["你收集了很多参考", "你能把研究转化为原创系统", "你知道每位艺术家的传记", "你很好地复制了一种风格"],
    answer: 1,
    explanation: "最终项目应该呈现清晰世界观和可运行的创作系统。"
  }
];

export const supplementalMedia: MediaItem[] = [
  {
    id: "ai-weiwei-sunflower-seeds",
    weeks: [2, 5, 6, 13],
    title: "Sunflower Seeds",
    creator: "Ai Weiwei / photograph by Mike Peel",
    year: "2010",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Ai_Weiwei%27s_Sunflower_Seeds%2C_Tate_Modern_3.jpg/960px-Ai_Weiwei%27s_Sunflower_Seeds%2C_Tate_Modern_3.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ai_Weiwei%27s_Sunflower_Seeds,_Tate_Modern_3.jpg",
    license: "CC BY-SA 4.0, photograph by Mike Peel via Wikimedia Commons",
    caption: {
      en: "Millions of handmade porcelain seeds help beginners see how scale, labor, individuality, and politics can occupy the same installation.",
      zh: "数百万颗手工瓷瓜子帮助初学者看见尺度、劳动、个体与政治如何共同进入一件装置。"
    }
  },
  {
    id: "hito-how-not-to-be-seen",
    weeks: [4, 5, 12],
    title: "How Not to Be Seen",
    creator: "Hito Steyerl",
    year: "2013",
    sourceUrl: "https://www.youtube.com/watch?v=kKAKgrZZ_ww",
    license: "TateShots interview/documentation link",
    caption: {
      en: "A useful beginner example because it looks playful while asking serious questions about pixels, visibility, surveillance, and disappearance.",
      zh: "这是适合初学者的案例：它看似玩笑，却严肃追问像素、可见性、监控与消失。"
    }
  },
  {
    id: "lozano-pulse-room",
    weeks: [4, 6, 10, 15, 16],
    title: "Pulse Room",
    creator: "Rafael Lozano-Hemmer",
    year: "2006",
    sourceUrl: "https://lozano-hemmer.com/pulse_room.php",
    license: "Artist studio documentation",
    caption: {
      en: "The viewer's heartbeat becomes light, making input, transformation, memory, and participation easy to understand.",
      zh: "观众心跳变成灯光，让输入、转换、记忆和参与变得直观。"
    }
  },
  {
    id: "refik-machine-hallucination",
    weeks: [5, 12, 15, 16],
    title: "Machine Hallucination",
    creator: "Refik Anadol Studio",
    year: "2019",
    sourceUrl: "https://refikanadol.com/works/machine-hallucination/",
    license: "Artist studio documentation",
    caption: {
      en: "A strong example for explaining AI as medium: archive, machine learning, city memory, moving image, and immersion become one system.",
      zh: "这是解释 AI 作为媒介的强案例：档案、机器学习、城市记忆、动态影像和沉浸成为一个系统。"
    }
  },
  {
    id: "xu-bing-book-from-the-sky",
    weeks: [8, 11, 13, 16],
    title: "Book from the Sky",
    creator: "Xu Bing",
    year: "1987-1991",
    sourceUrl: "https://www.xubing.com/en/work/details/206?classID=10&form=MG0AV3&type=class",
    license: "Artist studio documentation",
    caption: {
      en: "The work looks like authoritative classical writing, then blocks reading. That tension makes language itself visible.",
      zh: "作品看似权威古典文本，却阻止阅读。这种张力让语言本身变得可见。"
    }
  },
  {
    id: "sol-lewitt-massmoca",
    weeks: [10, 11, 14],
    title: "Sol LeWitt Wall Drawings",
    creator: "Sol LeWitt",
    year: "1968-2007",
    sourceUrl: "https://massmoca.org/sol-lewitt/",
    license: "MASS MoCA exhibition documentation",
    caption: {
      en: "LeWitt is the clearest entry into instruction as art: the rule can be authored once and executed many times.",
      zh: "LeWitt 是理解“指令作为艺术”的清晰入口：规则可以被创作一次，并被多次执行。"
    }
  },
  {
    id: "kusama-infinity-mirror-rooms",
    weeks: [7, 9, 14],
    title: "Infinity Mirror Rooms",
    creator: "Yayoi Kusama",
    year: "1965 onward",
    sourceUrl: "https://hirshhorn.si.edu/kusama/infinity-rooms/",
    license: "Hirshhorn Museum exhibition documentation",
    caption: {
      en: "A beginner can separate surface and method here: dots and mirrors are the look; repetition and self-dissolution are the method.",
      zh: "初学者可以在这里区分表面与方法：圆点和镜子是外观，重复和自我消融是方法。"
    }
  },
  {
    id: "jenny-holzer-truisms",
    weeks: [10, 11, 14, 15],
    title: "Truisms",
    creator: "Jenny Holzer",
    year: "1977-1979",
    sourceUrl: "https://projects.jennyholzer.com/truisms",
    license: "Artist project documentation",
    caption: {
      en: "Public language becomes material. Short sentences can behave like posters, warnings, interfaces, or social pressure.",
      zh: "公共语言成为材料。短句可以像海报、警告、界面或社会压力一样运作。"
    }
  },
  {
    id: "cao-fei-rmb-city",
    weeks: [4, 13, 16],
    title: "RMB City",
    creator: "Cao Fei",
    year: "2007-2011",
    sourceUrl: "https://www.serpentinegalleries.org/whats-on/cao-fei-rmb-city/",
    license: "Serpentine project documentation",
    caption: {
      en: "A useful bridge from virtual worlds to Chinese contemporary art: simulation becomes urban imagination and social critique.",
      zh: "这是从虚拟世界进入中国当代艺术的桥梁：模拟成为城市想象和社会批判。"
    }
  }
];

export function getBeginnerGuide(week: number) {
  return beginnerGuides.find((guide) => guide.week === week);
}

export function getBeginnerQuizzes(week: number, lang: Lang) {
  return beginnerQuizzes.filter((quiz) => quiz.week === week && quiz.lang === lang);
}

export function getSupplementalMedia(week: number) {
  return supplementalMedia.filter((item) => item.weeks.includes(week));
}
