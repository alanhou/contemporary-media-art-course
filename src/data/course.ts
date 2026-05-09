export type Lang = "en" | "zh";

export type Week = {
  week: number;
  slug: string;
  track: "foundation" | "phase-two";
  title: Record<Lang, string>;
  goal: Record<Lang, string>;
  shift: Record<Lang, string>;
  focus: Record<Lang, string[]>;
  assignment: Record<Lang, string>;
  artists: string[];
  chart?: "timeline" | "medium-map" | "matrix" | "ai-levels" | "viewer-spectrum";
};

export type Quiz = {
  id: string;
  week: number;
  lang: Lang;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type Artist = {
  name: string;
  medium: string;
  theme: string;
  usefulFor: string;
  weeks: number[];
};

export const languages: Record<Lang, { label: string; shortLabel: string }> = {
  en: { label: "English", shortLabel: "EN" },
  zh: { label: "中文", shortLabel: "中文" }
};

export const navText = {
  en: {
    course: "Course",
    artists: "Artists",
    templates: "Templates",
    lab: "Alan Hou Studio",
    start: "Start Week 1",
    foundation: "Foundation Cycle",
    phaseTwo: "Phase 2",
    goal: "Goal",
    focus: "Focus",
    assignment: "Assignment",
    quiz: "Inline Check",
    chart: "Visual Map",
    media: "Media Notes",
    previous: "Previous",
    next: "Next",
    openCourse: "Open Course"
  },
  zh: {
    course: "课程",
    artists: "艺术家",
    templates: "模板",
    lab: "Alan Hou 工作室",
    start: "从第 1 周开始",
    foundation: "基础周期",
    phaseTwo: "第二阶段",
    goal: "目标",
    focus: "学习重点",
    assignment: "练习",
    quiz: "随堂测试",
    chart: "视觉地图",
    media: "媒体注记",
    previous: "上一周",
    next: "下一周",
    openCourse: "打开课程"
  }
} satisfies Record<Lang, Record<string, string>>;

export const weeks: Week[] = [
  {
    week: 1,
    slug: "contemporary-art-orientation-map",
    track: "foundation",
    title: {
      en: "Contemporary Art Orientation Map",
      zh: "当代艺术导览地图"
    },
    goal: {
      en: "Build the basic vocabulary and mental framework for contemporary art.",
      zh: "建立理解当代艺术的基本词汇和思维框架。"
    },
    shift: {
      en: "Contemporary art is not only painting or sculpture; it can be idea, action, archive, system, participation, or critique.",
      zh: "当代艺术不只是绘画或雕塑，它也可以是观念、行动、档案、系统、参与或批判。"
    },
    focus: {
      en: ["Modern vs contemporary art", "Conceptual art", "Installation", "Performance", "Video and time-based media", "Appropriation", "New media preview"],
      zh: ["现代艺术与当代艺术", "观念艺术", "装置艺术", "行为艺术", "影像与时间媒介", "挪用", "新媒体艺术预览"]
    },
    assignment: {
      en: "Study Duchamp's Fountain. Ask whether the artwork is the object, gesture, joke, idea, or institutional challenge.",
      zh: "研究杜尚的《泉》。思考作品到底是物体、姿态、玩笑、观念，还是对艺术制度的挑战。"
    },
    artists: ["Marcel Duchamp", "Joseph Kosuth", "Sol LeWitt", "Jenny Holzer", "Barbara Kruger"],
    chart: "medium-map"
  },
  {
    week: 2,
    slug: "twenty-essential-contemporary-artists",
    track: "foundation",
    title: {
      en: "20 Essential Contemporary Artists",
      zh: "20 位关键当代艺术家"
    },
    goal: {
      en: "Populate the framework with major artists and representative practices.",
      zh: "用关键艺术家和代表性实践填充第一周建立的框架。"
    },
    shift: {
      en: "Move from vocabulary to a working mental database of artists, media, themes, and questions.",
      zh: "从词汇进入可使用的艺术家、媒介、主题与问题数据库。"
    },
    focus: {
      en: ["Politics and activism", "Identity and media", "Video and performance", "Abstraction and mapping", "Digital, media, and AI"],
      zh: ["政治与行动主义", "身份与媒介", "影像与行为", "抽象与地图", "数字、媒体与 AI"]
    },
    assignment: {
      en: "Pick five artists and complete the artwork analysis template for one work by each artist.",
      zh: "选择五位艺术家，并为每位艺术家的一件作品填写作品分析模板。"
    },
    artists: ["Ai Weiwei", "Kara Walker", "Cindy Sherman", "Nam June Paik", "Refik Anadol"],
    chart: "matrix"
  },
  {
    week: 3,
    slug: "video-performance-installation-art",
    track: "foundation",
    title: {
      en: "Video, Performance & Installation Art",
      zh: "影像、行为与装置艺术"
    },
    goal: {
      en: "Understand art as time, body, space, sound, image, and experience.",
      zh: "理解艺术如何成为时间、身体、空间、声音、图像与经验。"
    },
    shift: {
      en: "Art can be something you enter, watch, hear, wait through, participate in, or emotionally endure.",
      zh: "艺术可以是你进入、观看、聆听、等待、参与，甚至在情感上承受的东西。"
    },
    focus: {
      en: ["Time-based art", "TV as sculpture", "Spiritual video", "Studio/body repetition", "Presence and endurance", "Immersive video"],
      zh: ["时间性艺术", "电视作为雕塑", "精神性影像", "工作室、身体与重复", "在场与耐力", "沉浸式影像"]
    },
    assignment: {
      en: "Study Nam June Paik's TV Buddha and connect it to selfies, livestreams, and AI mirrors.",
      zh: "研究白南准的《电视佛》，并把它与自拍、直播和 AI 镜像联系起来。"
    },
    artists: ["Nam June Paik", "Bill Viola", "Bruce Nauman", "Marina Abramovic", "Pipilotti Rist"],
    chart: "viewer-spectrum"
  },
  {
    week: 4,
    slug: "new-media-art",
    track: "foundation",
    title: {
      en: "New Media Art",
      zh: "新媒体艺术"
    },
    goal: {
      en: "Understand art as system, interface, algorithm, network, simulation, database, or interactive environment.",
      zh: "理解艺术如何成为系统、界面、算法、网络、模拟、数据库或互动环境。"
    },
    shift: {
      en: "Traditional art often produces an object. New media art often produces a system or experience.",
      zh: "传统艺术常常生产一个物件；新媒体艺术常常生产一个系统或经验。"
    },
    focus: {
      en: ["What is new media art?", "Internet art", "Generative art", "Interactive environments", "Data and AI", "Simulation and games"],
      zh: ["什么是新媒体艺术", "互联网艺术", "生成艺术", "互动环境", "数据与 AI", "模拟与游戏"]
    },
    assignment: {
      en: "Compare Refik Anadol and Hito Steyerl: beauty, critique, data, and image politics.",
      zh: "比较 Refik Anadol 与 Hito Steyerl：美感、批判、数据与图像政治。"
    },
    artists: ["JODI", "Olia Lialina", "Casey Reas", "Rafael Lozano-Hemmer", "Hito Steyerl"],
    chart: "timeline"
  },
  {
    week: 5,
    slug: "themes-in-new-media-and-contemporary-art",
    track: "foundation",
    title: {
      en: "Themes in New Media and Contemporary Art",
      zh: "新媒体与当代艺术的主题"
    },
    goal: {
      en: "Organize artists by human, social, political, and philosophical questions rather than technology alone.",
      zh: "不只按技术分类，而是按人、社会、政治与哲学问题组织艺术家。"
    },
    shift: {
      en: "Stop asking only what technology was used; ask what problem the technology reveals.",
      zh: "不要只问用了什么技术，要问技术揭示了什么问题。"
    },
    focus: {
      en: ["Internet identity", "Surveillance", "AI and datasets", "Immersion", "Biometrics", "Ecology", "Simulation"],
      zh: ["互联网身份", "监控", "AI 与数据集", "沉浸", "生物识别", "生态", "模拟"]
    },
    assignment: {
      en: "Compare Refik Anadol and Trevor Paglen. Can technology be beautiful and dangerous at the same time?",
      zh: "比较 Refik Anadol 与 Trevor Paglen。技术能否同时美丽又危险？"
    },
    artists: ["Trevor Paglen", "Hito Steyerl", "Memo Akten", "teamLab", "Ian Cheng"],
    chart: "matrix"
  },
  {
    week: 6,
    slug: "institutions-museums-exhibitions-art-world",
    track: "foundation",
    title: {
      en: "Institutions, Museums, Exhibitions & the Art World",
      zh: "机构、博物馆、展览与艺术世界"
    },
    goal: {
      en: "Understand where contemporary art lives and how meaning is shaped.",
      zh: "理解当代艺术在哪里存在，以及意义如何被塑造。"
    },
    shift: {
      en: "Meaning is shaped by museums, curators, biennials, galleries, markets, archives, critics, festivals, and platforms.",
      zh: "意义由博物馆、策展人、双年展、画廊、市场、档案、评论、艺术节与平台共同塑造。"
    },
    focus: {
      en: ["Museums", "Curators", "Biennials", "Galleries", "Market", "Archives", "Criticism"],
      zh: ["博物馆", "策展人", "双年展", "画廊", "市场", "档案", "评论"]
    },
    assignment: {
      en: "Create a mini exhibition titled Art After the Object.",
      zh: "策划一个题为《物之后的艺术》的迷你展览。"
    },
    artists: ["Marcel Duchamp", "Marina Abramovic", "Nam June Paik", "Rafael Lozano-Hemmer", "Hito Steyerl"]
  },
  {
    week: 7,
    slug: "build-your-artist-database",
    track: "foundation",
    title: {
      en: "Build Your Artist Database",
      zh: "建立你的艺术家数据库"
    },
    goal: {
      en: "Build a personal research system for artists, works, themes, media, and references.",
      zh: "为艺术家、作品、主题、媒介和参考资料建立个人研究系统。"
    },
    shift: {
      en: "Turn scattered inspiration into a searchable creative memory.",
      zh: "把零散灵感变成可检索的创作记忆。"
    },
    focus: {
      en: ["Artist fields", "Medium", "Themes", "Viewer role", "Related artists", "Personal rating"],
      zh: ["艺术家字段", "媒介", "主题", "观看者角色", "相关艺术家", "个人评分"]
    },
    assignment: {
      en: "Create database entries for Duchamp, Kusama, Abramovic, Paik, and Anadol.",
      zh: "为杜尚、草间弥生、Abramovic、白南准和 Anadol 建立数据库条目。"
    },
    artists: ["Marcel Duchamp", "Yayoi Kusama", "Marina Abramovic", "Nam June Paik", "Refik Anadol"]
  },
  {
    week: 8,
    slug: "how-to-interpret-contemporary-art",
    track: "foundation",
    title: {
      en: "How to Interpret Contemporary Art",
      zh: "如何解读当代艺术"
    },
    goal: {
      en: "Develop a clear, personal, intelligent interpretation practice.",
      zh: "发展清晰、个人化且有判断力的解读方法。"
    },
    shift: {
      en: "Ask not only what the artwork means, but what it is doing and why.",
      zh: "不只问作品是什么意思，也要问作品在做什么，以及为什么这样做。"
    },
    focus: {
      en: ["Description", "Medium", "Viewer role", "Central question", "Context", "Judgment"],
      zh: ["描述", "媒介", "观看者角色", "中心问题", "语境", "判断"]
    },
    assignment: {
      en: "Write a full interpretation of TV Buddha using the course template.",
      zh: "用课程模板写一篇《电视佛》的完整解读。"
    },
    artists: ["Nam June Paik"]
  },
  {
    week: 9,
    slug: "build-your-own-taste-system",
    track: "foundation",
    title: {
      en: "Build Your Own Taste System",
      zh: "建立你自己的品味系统"
    },
    goal: {
      en: "Turn art knowledge into your own visual and conceptual direction.",
      zh: "把艺术知识转化为自己的视觉与观念方向。"
    },
    shift: {
      en: "Separate surface style from deeper method.",
      zh: "把表面风格和深层方法分开。"
    },
    focus: {
      en: ["Taste patterns", "Visual vocabulary", "Style vs method", "Reference matrix", "Do/don't guide"],
      zh: ["品味模式", "视觉词汇", "风格与方法", "参考矩阵", "创作方向清单"]
    },
    assignment: {
      en: "Choose five artists and extract what you can learn from their method.",
      zh: "选择五位艺术家，提炼你能从他们的方法中学到什么。"
    },
    artists: ["Yayoi Kusama", "Barbara Kruger", "Refik Anadol", "Chiharu Shiota"]
  },
  {
    week: 10,
    slug: "apply-contemporary-art-methods",
    track: "foundation",
    title: {
      en: "Apply Contemporary Art Methods to Your Own Work",
      zh: "把当代艺术方法应用到自己的创作"
    },
    goal: {
      en: "Turn contemporary art methods into practical creative systems.",
      zh: "把当代艺术方法转化为可实践的创作系统。"
    },
    shift: {
      en: "Use artists as method engines, not style references.",
      zh: "把艺术家当作方法引擎，而不只是风格参考。"
    },
    focus: {
      en: ["Concept prompts", "Educational visuals", "Art direction bible", "Product feature", "Creative workflow"],
      zh: ["观念提示词", "教育视觉", "艺术指导手册", "产品功能", "创作流程"]
    },
    assignment: {
      en: "Choose one learning, publishing, or creative-system concept and transform it through a contemporary art method.",
      zh: "选择一个学习、出版或创作系统概念，并用一种当代艺术方法重新设计它。"
    },
    artists: ["Joseph Kosuth", "Sol LeWitt", "Jenny Holzer", "Chiharu Shiota", "Rafael Lozano-Hemmer"]
  },
  {
    week: 11,
    slug: "art-writing-and-criticism",
    track: "foundation",
    title: {
      en: "Art Writing & Criticism",
      zh: "艺术写作与评论"
    },
    goal: {
      en: "Learn to talk and write about contemporary art clearly and confidently.",
      zh: "学习清晰、自信地谈论和书写当代艺术。"
    },
    shift: {
      en: "Do not only say what the work is; explain what it does.",
      zh: "不要只说作品是什么，还要说明作品做了什么。"
    },
    focus: {
      en: ["Five-sentence analysis", "Artist profile", "Comparison", "Exhibition review", "Curatorial statement"],
      zh: ["五句话作品分析", "艺术家简介", "比较写作", "展览评论", "策展陈述"]
    },
    assignment: {
      en: "Write a five-sentence analysis of One and Three Chairs.",
      zh: "为《一把和三把椅子》写一段五句话分析。"
    },
    artists: ["Joseph Kosuth"]
  },
  {
    week: 12,
    slug: "ai-art-future-media-human-machine-creativity",
    track: "foundation",
    title: {
      en: "AI Art, Future Media & Human-Machine Creativity",
      zh: "AI 艺术、未来媒介与人机创造"
    },
    goal: {
      en: "Understand AI art beyond prompts and images.",
      zh: "超越提示词和图像，理解 AI 艺术。"
    },
    shift: {
      en: "AI art is about authorship, datasets, systems, collaboration, automation, memory, simulation, and machine perception.",
      zh: "AI 艺术关乎作者性、数据集、系统、协作、自动化、记忆、模拟与机器感知。"
    },
    focus: {
      en: ["AI as tool vs medium", "Data as memory", "AI critique", "Human-machine collaboration", "Synthetic media", "Living systems"],
      zh: ["AI 作为工具与媒介", "数据作为记忆", "AI 批判", "人机协作", "合成媒体", "活系统"]
    },
    assignment: {
      en: "Draft an AI art concept statement for an original Alan Hou project.",
      zh: "为一个 Alan Hou 原创项目写一份 AI 艺术概念陈述。"
    },
    artists: ["Refik Anadol", "Hito Steyerl", "Trevor Paglen", "Sougwen Chung"],
    chart: "ai-levels"
  },
  {
    week: 13,
    slug: "chinese-contemporary-art",
    track: "phase-two",
    title: {
      en: "Chinese Contemporary Art",
      zh: "中国当代艺术"
    },
    goal: {
      en: "Study how Chinese contemporary artists transform language, history, body, technology, and cultural memory.",
      zh: "研究中国当代艺术家如何转化语言、历史、身体、技术与文化记忆。"
    },
    shift: {
      en: "Begin with Xu Bing because language, writing systems, meaning, and misunderstanding are strong foundations for Alan Hou's research voice.",
      zh: "从徐冰开始，因为语言、书写系统、意义与误读能成为 Alan Hou 研究声音的重要基础。"
    },
    focus: {
      en: ["Xu Bing", "Ai Weiwei", "Cai Guo-Qiang", "Cao Fei", "LuYang"],
      zh: ["徐冰", "艾未未", "蔡国强", "曹斐", "陆扬"]
    },
    assignment: {
      en: "Ask how language can become visual, unstable, political, poetic, and educational.",
      zh: "思考语言如何变得视觉化、不稳定、政治化、诗性化与教育化。"
    },
    artists: ["Xu Bing", "Ai Weiwei", "Cai Guo-Qiang", "Cao Fei", "LuYang"]
  },
  {
    week: 14,
    slug: "art-methods-for-alan-hou-studio",
    track: "phase-two",
    title: {
      en: "Art Methods for Alan Hou Studio",
      zh: "Alan Hou 工作室的艺术方法"
    },
    goal: {
      en: "Turn research, writing, visual systems, and public learning into contemporary-art-inspired experiences.",
      zh: "把研究、写作、视觉系统和公共学习转化为受当代艺术启发的经验。"
    },
    shift: {
      en: "Ideas can become objects, archives can become interfaces, and writing can become a living visual system.",
      zh: "观念可以成为物，档案可以成为界面，写作可以成为活的视觉系统。"
    },
    focus: {
      en: ["Ideas as objects", "Archives as interfaces", "Writing as public language", "Progress as memory landscape"],
      zh: ["观念作为物", "档案作为界面", "写作作为公共语言", "进展作为记忆景观"]
    },
    assignment: {
      en: "Design one Alan Hou studio project inspired by a contemporary art method.",
      zh: "设计一个受当代艺术方法启发的 Alan Hou 工作室项目。"
    },
    artists: ["Joseph Kosuth", "Sol LeWitt", "Rafael Lozano-Hemmer", "Chiharu Shiota"]
  },
  {
    week: 15,
    slug: "ai-new-media-visual-system",
    track: "phase-two",
    title: {
      en: "AI + New Media Visual System",
      zh: "AI 与新媒体视觉系统"
    },
    goal: {
      en: "Make AI, data, voice, and language feel like a living visual system.",
      zh: "让 AI、数据、声音与语言成为一个有生命感的视觉系统。"
    },
    shift: {
      en: "Borrow methods without copying surface style.",
      zh: "借用方法，而不是复制表面风格。"
    },
    focus: {
      en: ["Data atmosphere", "Public language", "Memory network", "Light and perception", "Feedback loops"],
      zh: ["数据氛围", "公共语言", "记忆网络", "光与感知", "反馈回路"]
    },
    assignment: {
      en: "Sketch a living visual system for research notes, images, memory, and audience feedback.",
      zh: "为研究笔记、图像、记忆和观众反馈画出一个活的视觉系统。"
    },
    artists: ["Refik Anadol", "Jenny Holzer", "Chiharu Shiota", "Olafur Eliasson", "Nam June Paik"]
  },
  {
    week: 16,
    slug: "build-a-portfolio-concept",
    track: "phase-two",
    title: {
      en: "Build a Portfolio Concept",
      zh: "建立一个作品集概念"
    },
    goal: {
      en: "Produce one mini exhibition concept, app feature concept, prompt system, HTML collage, curatorial statement, and art direction page.",
      zh: "产出一个迷你展览概念、应用功能概念、提示词系统、HTML 拼贴、策展陈述和艺术指导页。"
    },
    shift: {
      en: "Everything studied becomes one original creative system.",
      zh: "把前面学过的一切汇聚成一个原创创作系统。"
    },
    focus: {
      en: ["Mini exhibition", "App feature", "AI prompt system", "HTML collage", "Curatorial statement", "Art direction"],
      zh: ["迷你展览", "应用功能", "AI 提示词系统", "HTML 拼贴", "策展陈述", "艺术指导"]
    },
    assignment: {
      en: "Define the original creative system you can build from the whole course.",
      zh: "定义你能从整门课程中建造出的原创创作系统。"
    },
    artists: ["Xu Bing", "Nam June Paik", "Rafael Lozano-Hemmer", "Refik Anadol"]
  }
];

export const quizzes: Quiz[] = [
  {
    id: "w1-en-1",
    week: 1,
    lang: "en",
    prompt: "Why can Duchamp's Fountain function as contemporary art?",
    options: ["Because it is technically painted", "Because context, gesture, and institutional challenge become the work", "Because it imitates classical sculpture", "Because it avoids ideas"],
    answer: 1,
    explanation: "The readymade shifts attention from craft alone to context, choice, authorship, and the institution that validates art."
  },
  {
    id: "w1-zh-1",
    week: 1,
    lang: "zh",
    prompt: "为什么杜尚的《泉》可以作为当代艺术来理解？",
    options: ["因为它有精细绘画技巧", "因为语境、姿态和制度挑战成为作品本身", "因为它模仿古典雕塑", "因为它回避观念"],
    answer: 1,
    explanation: "现成品把注意力从手工技巧转向语境、选择、作者性以及艺术制度如何赋予意义。"
  },
  {
    id: "w2-en-1",
    week: 2,
    lang: "en",
    prompt: "Which pairing best captures a useful artist-method relationship?",
    options: ["Kruger: advertising language as critique", "Paik: oil painting realism", "Anadol: handmade bronze casting", "Abramovic: landscape watercolor"],
    answer: 0,
    explanation: "Kruger borrows the force of advertising text and image to confront power, gender, consumer culture, and ideology."
  },
  {
    id: "w2-zh-1",
    week: 2,
    lang: "zh",
    prompt: "哪一组最准确地说明了艺术家与方法的关系？",
    options: ["Kruger：把广告语言变成批判", "白南准：油画写实", "Anadol：手工青铜铸造", "Abramovic：风景水彩"],
    answer: 0,
    explanation: "Kruger 借用广告文字与图像的力量，去质询权力、性别、消费文化与意识形态。"
  },
  {
    id: "w3-en-1",
    week: 3,
    lang: "en",
    prompt: "In TV Buddha, what changes when the TV image is live?",
    options: ["The work becomes only decoration", "The work becomes a feedback loop of looking and being seen", "The sculpture disappears", "The viewer has no role"],
    answer: 1,
    explanation: "Live video creates a real-time circuit between object, image, technology, time, and self-observation."
  },
  {
    id: "w3-zh-1",
    week: 3,
    lang: "zh",
    prompt: "在《电视佛》中，如果电视图像是实时的，会发生什么变化？",
    options: ["作品只剩装饰", "作品变成观看与被观看的反馈回路", "雕塑消失", "观众没有角色"],
    answer: 1,
    explanation: "实时影像让物体、图像、技术、时间与自我观看形成一个回路。"
  },
  {
    id: "w4-en-1",
    week: 4,
    lang: "en",
    prompt: "What makes new media art different from traditional object-based art?",
    options: ["It is always digital painting", "It often works as a system, interface, or experience", "It avoids audience participation", "It must use AI"],
    answer: 1,
    explanation: "New media art often treats code, networks, data, screens, sensors, simulation, and interaction as artistic material."
  },
  {
    id: "w4-zh-1",
    week: 4,
    lang: "zh",
    prompt: "新媒体艺术与传统物件型艺术的关键区别是什么？",
    options: ["它总是数字绘画", "它常常作为系统、界面或经验运行", "它避免观众参与", "它必须使用 AI"],
    answer: 1,
    explanation: "新媒体艺术常把代码、网络、数据、屏幕、传感器、模拟和互动当作艺术材料。"
  }
];

export const artists: Artist[] = [
  { name: "Marcel Duchamp", medium: "Conceptual / readymade", theme: "authorship, institution, context", usefulFor: "Meaning through framing", weeks: [1, 6, 7] },
  { name: "Joseph Kosuth", medium: "Conceptual / language", theme: "object, image, definition", usefulFor: "Ideas as object/image/word", weeks: [1, 10, 11] },
  { name: "Sol LeWitt", medium: "Instruction / drawing", theme: "rules, systems, execution", usefulFor: "Rules as generative structure", weeks: [1, 10] },
  { name: "Jenny Holzer", medium: "Text / LED", theme: "public language, power", usefulFor: "Language in public space", weeks: [1, 10, 15] },
  { name: "Barbara Kruger", medium: "Text / image", theme: "media, gender, power", usefulFor: "Critical copywriting", weeks: [1, 2, 9] },
  { name: "Yayoi Kusama", medium: "Installation", theme: "repetition, infinity, self", usefulFor: "Repetition as emotional system", weeks: [1, 7, 9] },
  { name: "Olafur Eliasson", medium: "Installation / light", theme: "perception, atmosphere", usefulFor: "Research as sensory environment", weeks: [1, 15] },
  { name: "Doris Salcedo", medium: "Installation", theme: "memory, wound, history", usefulFor: "Absence as narrative", weeks: [1] },
  { name: "Do Ho Suh", medium: "Fabric architecture", theme: "home, migration, memory", usefulFor: "Memory as portable space", weeks: [1, 2] },
  { name: "Chiharu Shiota", medium: "Thread installation", theme: "memory, networks, absence", usefulFor: "Research memory networks", weeks: [1, 9, 10, 15] },
  { name: "Marina Abramovic", medium: "Performance", theme: "presence, endurance, gaze", usefulFor: "Attention as interaction", weeks: [1, 2, 3, 6] },
  { name: "Yoko Ono", medium: "Performance / instruction", theme: "participation, vulnerability", usefulFor: "Audience agency", weeks: [1] },
  { name: "Tehching Hsieh", medium: "Duration performance", theme: "time, discipline, life", usefulFor: "Practice as ritual", weeks: [1] },
  { name: "Joseph Beuys", medium: "Performance / social sculpture", theme: "ritual, politics, healing", usefulFor: "Education as social sculpture", weeks: [1] },
  { name: "Ana Mendieta", medium: "Body / earth", theme: "trace, absence, ritual", usefulFor: "Embodied memory", weeks: [1] },
  { name: "Nam June Paik", medium: "Video sculpture", theme: "television, feedback, time", usefulFor: "AI mirror and feedback loops", weeks: [2, 3, 4, 6, 8, 15] },
  { name: "Bill Viola", medium: "Video installation", theme: "time, spirituality, transformation", usefulFor: "Slow attention", weeks: [2, 3] },
  { name: "Bruce Nauman", medium: "Video / performance / neon", theme: "repetition, body, pressure", usefulFor: "Repetition with psychological force", weeks: [3] },
  { name: "Pipilotti Rist", medium: "Immersive video", theme: "color, body, sensory field", usefulFor: "Emotional media environments", weeks: [2, 3] },
  { name: "Christian Marclay", medium: "Montage / sound", theme: "editing, time, archive", usefulFor: "Time as learning sequence", weeks: [3] },
  { name: "JODI", medium: "Internet art", theme: "browser, error, code", usefulFor: "Interface as art material", weeks: [4, 5] },
  { name: "Olia Lialina", medium: "Net art", theme: "web culture, identity", usefulFor: "Web-native learning spaces", weeks: [4, 5] },
  { name: "Casey Reas", medium: "Generative art", theme: "code, process, form", usefulFor: "Rule-based visual feedback", weeks: [4] },
  { name: "Rafael Lozano-Hemmer", medium: "Interactive installation", theme: "body, biometric input, public space", usefulFor: "Audience-responsive systems", weeks: [4, 6, 10, 14] },
  { name: "teamLab", medium: "Immersive digital installation", theme: "participation, spectacle, environment", usefulFor: "Group learning atmosphere", weeks: [4, 5] },
  { name: "Refik Anadol", medium: "AI / data installation", theme: "data, memory, immersion", usefulFor: "Data as sensory memory", weeks: [2, 4, 5, 7, 12, 15] },
  { name: "Sougwen Chung", medium: "Human-machine drawing", theme: "collaboration, gesture, machine", usefulFor: "Human-AI co-practice", weeks: [2, 4, 12] },
  { name: "Hito Steyerl", medium: "Video essay", theme: "image politics, surveillance", usefulFor: "Critical AI literacy", weeks: [2, 3, 4, 5, 6, 12] },
  { name: "Ian Cheng", medium: "Simulation", theme: "AI-like worlds, behavior", usefulFor: "Learning as living system", weeks: [2, 4, 5] },
  { name: "Cao Fei", medium: "VR / simulation / video", theme: "urbanization, virtual worlds, China", usefulFor: "Cultural worldbuilding", weeks: [2, 4, 13] },
  { name: "Xu Bing", medium: "Language / installation", theme: "writing, meaning, misunderstanding", usefulFor: "Chinese characters as conceptual systems", weeks: [13, 16] }
];

export const templates = [
  {
    id: "artwork-analysis",
    title: { en: "Artwork Analysis", zh: "作品分析" },
    fields: {
      en: ["Artist", "Title", "Year", "Medium", "What do I see?", "What is the main idea?", "What question is the artist asking?", "What role does the viewer play?", "My honest reaction"],
      zh: ["艺术家", "作品名", "年份", "媒介", "我看到了什么？", "核心观念是什么？", "艺术家在问什么问题？", "观众扮演什么角色？", "我的真实反应"]
    }
  },
  {
    id: "method-transfer",
    title: { en: "Artist Method Transfer", zh: "艺术家方法迁移" },
    fields: {
      en: ["Artist", "Surface style", "Deeper method", "How I could apply this method", "Possible project"],
      zh: ["艺术家", "表面风格", "深层方法", "我如何应用这个方法", "可能的项目"]
    }
  },
  {
    id: "ai-art-concept",
    title: { en: "AI Art Concept Statement", zh: "AI 艺术概念陈述" },
    fields: {
      en: ["Project title", "Central question", "AI role", "Human role", "Viewer role", "Visual language", "Interaction", "Ethical question"],
      zh: ["项目标题", "中心问题", "AI 的角色", "人的角色", "观众角色", "视觉语言", "互动方式", "伦理问题"]
    }
  }
];

export const mediaNotes = [
  {
    title: "Media source policy",
    en: "V1 uses original charts and source cards. Artwork images and video embeds should be added only from official museum, artist, gallery, archive, or open-access sources.",
    zh: "第一版使用原创图表和来源卡片。作品图片与视频嵌入只应来自官方博物馆、艺术家、画廊、档案或开放授权来源。"
  },
  {
    title: "Priority works",
    en: "Start with Fountain, One and Three Chairs, TV Buddha, The Weather Project, How Not to Be Seen, Refik Anadol project documentation, and Xu Bing language works.",
    zh: "优先补充《泉》《一把和三把椅子》《电视佛》《天气计划》《如何不被看见》、Refik Anadol 项目文献，以及徐冰的语言作品。"
  }
];

export function getWeek(week: number) {
  return weeks.find((item) => item.week === week);
}

export function getWeekQuizzes(week: number, lang: Lang) {
  return quizzes.filter((quiz) => quiz.week === week && quiz.lang === lang);
}

export function alternateLang(lang: Lang): Lang {
  return lang === "en" ? "zh" : "en";
}
