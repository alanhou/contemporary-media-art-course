import type { Lang } from "./course";

type Localized = Record<Lang, string>;

export type FocusCard = {
  label: string;
  explanation: string;
};

export type ArtistLessonCard = {
  name: string;
  method: string;
};

const focusExplanations: Record<number, Record<Lang, string[]>> = {
  1: {
    en: [
      "Use this to separate the modern concern with new form from contemporary art's wider concern with context, systems, institutions, and viewers.",
      "Conceptual art teaches that the idea, rule, or question can be as important as craft or visual finish.",
      "Installation makes meaning through space: scale, path, light, sound, and the viewer's body all become material.",
      "Performance uses action, duration, risk, and presence rather than a permanent object as the main artwork.",
      "Video and time-based media make repetition, delay, sequence, and attention part of the work.",
      "Appropriation means taking an existing image, object, or style and changing its meaning through a new frame.",
      "New media previews the later shift from object to interface, network, code, database, and interaction."
    ],
    zh: [
      "用它区分现代艺术对新形式的关注，以及当代艺术对语境、系统、机构和观看者的更广泛关注。",
      "观念艺术说明：想法、规则或问题可以和手工技巧、视觉完成度同样重要。",
      "装置通过空间制造意义：尺度、路径、光、声音和观众身体都成为材料。",
      "行为艺术把行动、持续、风险和在场作为作品核心，而不是依赖永久物件。",
      "影像与时间媒介让重复、延迟、顺序和注意力成为作品的一部分。",
      "挪用是把已有图像、物件或风格拿来，并通过新框架改变其意义。",
      "新媒体预告后面的转向：从物件转向界面、网络、代码、数据库和互动。"
    ]
  },
  2: {
    en: [
      "Look for how artists turn public events, censorship, protest, labor, and institutional power into visual form.",
      "Study how photography, advertising, cinema, and the internet shape gender, race, self-image, and public identity.",
      "These artists use cameras, screens, bodies, and duration to make time and presence visible.",
      "Abstraction is not only decoration here; it can map memory, data, systems, or invisible structures.",
      "Digital, media, and AI practices ask how images are produced by platforms, algorithms, archives, and machines."
    ],
    zh: [
      "关注艺术家如何把公共事件、审查、抗议、劳动和机构权力转化为视觉形式。",
      "研究摄影、广告、电影和互联网如何塑造性别、种族、自我图像和公共身份。",
      "这些艺术家用摄像机、屏幕、身体和持续时间让时间与在场变得可见。",
      "这里的抽象不只是装饰，也可以绘制记忆、数据、系统或不可见结构。",
      "数字、媒体与 AI 实践追问图像如何由平台、算法、档案和机器生产。"
    ]
  },
  3: {
    en: [
      "Time-based art asks what changes when a work unfolds across seconds, minutes, hours, or years.",
      "Television becomes sculptural when the screen is treated as an object in space, not just a channel for content.",
      "Spiritual video slows attention and uses light, water, breath, or ritual to make viewing feel contemplative.",
      "Studio and body repetition show how simple actions become psychological, comic, exhausting, or ritualistic.",
      "Presence and endurance focus on what it means for a body to stay, wait, suffer, watch, or be watched.",
      "Immersive video surrounds the viewer so the image becomes an environment rather than a rectangle."
    ],
    zh: [
      "时间性艺术追问作品在数秒、数分钟、数小时或数年中展开时会发生什么变化。",
      "当屏幕被当成空间中的物件，而不只是内容通道时，电视就变成雕塑。",
      "精神性影像放慢注意力，并用光、水、呼吸或仪式让观看变成沉思。",
      "工作室和身体重复展示简单动作如何变得心理化、滑稽、疲惫或仪式化。",
      "在场与耐力关注身体如何停留、等待、承受、观看或被观看。",
      "沉浸式影像包围观众，让图像成为环境，而不是一个矩形画面。"
    ]
  },
  4: {
    en: [
      "New media art treats technology as artistic material: code, screen, sensor, network, interface, database, or simulation.",
      "Internet art uses browsers, links, errors, pages, platforms, and online identity as the artwork's environment.",
      "Generative art uses rules or code to produce variations, so the artist designs a system rather than a single fixed image.",
      "Interactive environments change when viewers move, speak, touch, enter data, or become sensed by a system.",
      "Data and AI works ask how archives, datasets, models, and machine perception shape what can be seen.",
      "Simulation and games create worlds with rules, behaviors, agents, and choices rather than static images."
    ],
    zh: [
      "新媒体艺术把技术当作艺术材料：代码、屏幕、传感器、网络、界面、数据库或模拟。",
      "互联网艺术把浏览器、链接、错误、网页、平台和线上身份作为作品环境。",
      "生成艺术用规则或代码产生变化，所以艺术家设计的是系统，而不是单一固定图像。",
      "互动环境会随着观众移动、说话、触摸、输入数据或被系统感应而改变。",
      "数据与 AI 作品追问档案、数据集、模型和机器感知如何塑造可见之物。",
      "模拟与游戏创造带有规则、行为、智能体和选择的世界，而不是静止图像。"
    ]
  },
  5: {
    en: [
      "Internet identity asks how profiles, avatars, handles, feeds, and screenshots reshape who a person can be online.",
      "Surveillance focuses on systems that watch, classify, predict, and store people as data.",
      "AI and datasets ask what a machine has been trained to see, what it ignores, and whose examples it uses.",
      "Immersion creates an environment that surrounds the senses and can produce awe, control, intimacy, or spectacle.",
      "Biometrics turns the body into measurable input: heartbeat, face, voice, fingerprint, gesture, or movement.",
      "Ecology links media systems to climate, extraction, energy, nonhuman life, and planetary responsibility.",
      "Simulation studies artificial worlds that model behavior, cities, economies, weather, identity, or possible futures."
    ],
    zh: [
      "互联网身份追问个人资料、头像、账号、信息流和截图如何重塑线上自我。",
      "监控关注那些观看、分类、预测并把人储存为数据的系统。",
      "AI 与数据集追问机器被训练去看见什么、忽略什么，以及使用了谁的样本。",
      "沉浸制造包围感官的环境，可能产生惊叹、控制、亲密或景观。",
      "生物识别把身体变成可测量输入：心跳、面部、声音、指纹、手势或移动。",
      "生态把媒体系统连接到气候、开采、能源、非人生命和行星责任。",
      "模拟研究建模行为、城市、经济、天气、身份或可能未来的人造世界。"
    ]
  },
  6: {
    en: [
      "Museums do not only preserve art; they frame what deserves attention, care, funding, and history.",
      "Curators build arguments by selecting works, arranging space, writing labels, and shaping visitor movement.",
      "Biennials show how contemporary art circulates globally through temporary exhibitions, national contexts, and shared debates.",
      "Galleries connect artists, collectors, critics, fairs, and markets, shaping visibility and careers.",
      "The market affects price, scarcity, reputation, collecting behavior, and sometimes the way art is produced.",
      "Archives decide what evidence survives and what future viewers can know.",
      "Criticism turns looking into public judgment: description, context, interpretation, and evaluation."
    ],
    zh: [
      "博物馆不只是保存艺术，也框定什么值得注意、照料、资助并进入历史。",
      "策展人通过选择作品、安排空间、写标签和塑造观众动线来建立论证。",
      "双年展展示当代艺术如何通过临时展览、国家语境和共同争论在全球流通。",
      "画廊连接艺术家、藏家、评论、艺博会和市场，塑造可见性与职业路径。",
      "市场影响价格、稀缺性、声誉、收藏行为，有时也影响艺术生产方式。",
      "档案决定哪些证据会留下，未来观众能知道什么。",
      "评论把观看变成公共判断：描述、语境、解读和评价。"
    ]
  },
  7: {
    en: [
      "Artist fields are the repeatable categories you track so entries can be compared later.",
      "Medium names the material or system: paint, body, video, code, archive, data, sound, or space.",
      "Themes identify the recurring human problems, not just the surface subject.",
      "Viewer role asks whether the audience observes, witnesses, participates, performs, supplies data, or co-creates.",
      "Related artists help you build a map of methods rather than isolated favorites.",
      "Personal rating records your honest use-value: what you can learn, borrow, resist, or return to."
    ],
    zh: [
      "艺术家字段是一组可重复分类，方便之后比较条目。",
      "媒介命名材料或系统：绘画、身体、影像、代码、档案、数据、声音或空间。",
      "主题识别反复出现的人类问题，而不只是表面题材。",
      "观看者角色追问观众是在观察、见证、参与、表演、提供数据还是共同创作。",
      "相关艺术家帮助你建立方法地图，而不是孤立收藏偏好。",
      "个人评分记录真实使用价值：你能学什么、借用什么、抵抗什么、反复回到什么。"
    ]
  },
  8: {
    en: [
      "Description keeps interpretation grounded in visible details before jumping to meaning.",
      "Medium explains why this work had to be made as object, video, action, text, interface, or space.",
      "Viewer role identifies what the work asks you to do or become.",
      "The central question is the problem the artwork keeps making active.",
      "Context connects the work to history, institution, technology, politics, or the artist's practice.",
      "Judgment is your argued claim about why the work matters or where it fails."
    ],
    zh: [
      "描述让解读先落在可见细节上，而不是直接跳到意义。",
      "媒介说明为什么这件作品必须以物、影像、行动、文字、界面或空间存在。",
      "观看者角色识别作品要求你做什么或成为什么。",
      "中心问题是作品不断激活的问题。",
      "语境把作品连接到历史、机构、技术、政治或艺术家实践。",
      "判断是你关于作品为何重要或哪里失败的有证据主张。"
    ]
  },
  9: {
    en: [
      "Taste patterns reveal what your attention repeatedly chooses across different artists and media.",
      "Visual vocabulary names the forms you respond to: color, scale, rhythm, density, material, light, or typography.",
      "Style vs method separates the recognizable look from the operation that generated it.",
      "A reference matrix lets you compare artists by method, mood, medium, and use-value.",
      "A do/don't guide turns taste into practical rules for future work."
    ],
    zh: [
      "品味模式揭示你的注意力在不同艺术家和媒介中反复选择什么。",
      "视觉词汇命名你有反应的形式：颜色、尺度、节奏、密度、材料、光或字体。",
      "风格与方法把可识别外观和生成它的操作分开。",
      "参考矩阵让你按方法、情绪、媒介和使用价值比较艺术家。",
      "创作方向清单把品味转化为未来作品的实际规则。"
    ]
  },
  10: {
    en: [
      "Concept prompts translate an artist's method into questions that can generate your own work.",
      "Educational visuals use contemporary art methods to teach, not just decorate information.",
      "An art direction bible records the rules, references, colors, materials, and behaviors of a visual system.",
      "A product feature can borrow art methods such as feedback, archive, public text, ritual, or participation.",
      "Creative workflow turns inspiration into a repeatable sequence: collect, interpret, prototype, critique, revise."
    ],
    zh: [
      "观念提示词把艺术家方法翻译成能生成你自己作品的问题。",
      "教育视觉使用当代艺术方法来教学，而不只是装饰信息。",
      "艺术指导手册记录视觉系统的规则、参考、颜色、材料和行为。",
      "产品功能可以借用反馈、档案、公共文字、仪式或参与等艺术方法。",
      "创作流程把灵感变成可重复顺序：收集、解读、原型、批评、修改。"
    ]
  },
  11: {
    en: [
      "Five-sentence analysis trains concise writing: describe, name the method, explain viewer role, state the question, judge the effect.",
      "An artist profile explains a practice through methods and recurring problems, not a full biography.",
      "Comparison makes differences visible: two artists may share a medium but ask different questions.",
      "An exhibition review judges how space, sequence, labels, and work selection shape experience.",
      "A curatorial statement explains why works belong together and what question the exhibition stages."
    ],
    zh: [
      "五句话分析训练简洁写作：描述、命名方法、说明观看者角色、提出问题、判断效果。",
      "艺术家简介通过方法和反复问题解释实践，而不是完整传记。",
      "比较让差异显形：两位艺术家可能共享媒介，却提出不同问题。",
      "展览评论判断空间、顺序、标签和作品选择如何塑造经验。",
      "策展陈述说明作品为何被放在一起，以及展览提出什么问题。"
    ]
  },
  12: {
    en: [
      "AI as tool vs medium asks whether AI merely helps production or becomes the subject and structure of the work.",
      "Data as memory treats datasets as cultural traces: what has been collected, labeled, excluded, and repeated.",
      "AI critique uses art to question bias, automation, surveillance, labor, authorship, and machine perception.",
      "Human-machine collaboration studies how gesture, judgment, error, and automation can share authorship.",
      "Synthetic media asks what happens when images, voices, bodies, and events can be generated or simulated.",
      "Living systems use rules, feedback, adaptation, and behavior so a work changes over time."
    ],
    zh: [
      "AI 作为工具与媒介追问 AI 只是辅助生产，还是成为作品主题和结构。",
      "数据作为记忆把数据集看成文化痕迹：什么被收集、标注、排除和重复。",
      "AI 批判用艺术追问偏见、自动化、监控、劳动、作者性和机器感知。",
      "人机协作研究手势、判断、错误和自动化如何共享作者性。",
      "合成媒体追问图像、声音、身体和事件都能被生成或模拟时会发生什么。",
      "活系统使用规则、反馈、适应和行为，让作品随时间变化。"
    ]
  },
  13: {
    en: [
      "Xu Bing is the entry point for language as image, system, misunderstanding, authority, and cultural memory.",
      "Ai Weiwei shows how materials, archives, craft, institutions, and public action can carry political force.",
      "Cai Guo-Qiang turns explosion, gunpowder, spectacle, and risk into drawing and event.",
      "Cao Fei links urban change, virtual worlds, labor, youth culture, and Chinese modernization.",
      "LuYang uses game, anime, Buddhism, neuroscience, gender fluidity, and digital bodies to test identity."
    ],
    zh: [
      "徐冰是理解语言作为图像、系统、误读、权威和文化记忆的入口。",
      "艾未未展示材料、档案、工艺、机构和公共行动如何承载政治力量。",
      "蔡国强把爆炸、火药、景观和风险转化为绘画与事件。",
      "曹斐连接城市变化、虚拟世界、劳动、青年文化和中国现代化。",
      "陆扬用游戏、动漫、佛教、神经科学、性别流动和数字身体测试身份。"
    ]
  },
  14: {
    en: [
      "Ideas as objects means giving a thought a form people can handle, enter, compare, or discuss.",
      "Archives as interfaces turn collected material into a navigable experience rather than a storage folder.",
      "Writing as public language treats text as visual, spatial, social, and shareable material.",
      "Progress as memory landscape turns learning history into maps, timelines, rooms, or living records."
    ],
    zh: [
      "观念作为物，就是让想法获得可被处理、进入、比较或讨论的形式。",
      "档案作为界面，把收集材料变成可导航经验，而不是储存文件夹。",
      "写作作为公共语言，把文本当成视觉、空间、社会和可分享材料。",
      "进展作为记忆景观，把学习历史转化为地图、时间线、房间或活记录。"
    ]
  },
  15: {
    en: [
      "Data atmosphere turns information into mood, weather, light, sound, rhythm, or spatial feeling.",
      "Public language uses text in shared space so sentences behave like signals, warnings, invitations, or pressure.",
      "Memory network links notes, images, people, places, and time so research feels connected rather than linear.",
      "Light and perception study how color, brightness, reflection, and scale change attention and emotion.",
      "Feedback loops let the audience or system change what happens next."
    ],
    zh: [
      "数据氛围把信息转化为情绪、天气、光、声音、节奏或空间感。",
      "公共语言在共享空间中使用文本，让句子像信号、警告、邀请或压力一样运作。",
      "记忆网络连接笔记、图像、人物、地点和时间，让研究不再只是线性。",
      "光与感知研究颜色、亮度、反射和尺度如何改变注意力与情绪。",
      "反馈回路让观众或系统改变接下来发生的事情。"
    ]
  },
  16: {
    en: [
      "A mini exhibition organizes a small set of works into a clear spatial argument.",
      "An app feature turns a course method into an interface someone can use.",
      "An AI prompt system defines roles, constraints, examples, and evaluation rules for machine collaboration.",
      "An HTML collage uses webpage structure, images, text, links, and interaction as artistic material.",
      "A curatorial statement frames the project question, selection logic, and viewer journey.",
      "Art direction defines the visual rules that make the final system coherent."
    ],
    zh: [
      "迷你展览把少量作品组织成清晰的空间论证。",
      "应用功能把课程方法转化为他人可以使用的界面。",
      "AI 提示词系统为机器协作定义角色、限制、示例和评估规则。",
      "HTML 拼贴把网页结构、图像、文字、链接和互动当成艺术材料。",
      "策展陈述框定项目问题、选择逻辑和观众路径。",
      "艺术指导定义让最终系统保持一致的视觉规则。"
    ]
  }
};

const artistMethods: Record<string, Localized> = {
  "Marcel Duchamp": {
    en: "Study him for framing: an ordinary object becomes art because choice, title, institution, and debate change its status.",
    zh: "从他这里学习框定：普通物件因选择、标题、机构和争论而改变身份。"
  },
  "Joseph Kosuth": {
    en: "Use him to compare object, image, and language; his method makes meaning feel constructed rather than natural.",
    zh: "用他来比较物、图像和语言；他的方法让意义显得被建构，而不是天然存在。"
  },
  "Sol LeWitt": {
    en: "Study him for instruction-based art: the rule is the engine, and execution can vary.",
    zh: "从他学习指令型艺术：规则是引擎，执行可以变化。"
  },
  "Jenny Holzer": {
    en: "She turns short public sentences into pressure, warning, poetry, and political signal.",
    zh: "她把公共短句变成压力、警告、诗和政治信号。"
  },
  "Barbara Kruger": {
    en: "She weaponizes advertising language so text and image confront power, gender, desire, and consumption.",
    zh: "她把广告语言武器化，让文字和图像质询权力、性别、欲望和消费。"
  },
  "Ai Weiwei": {
    en: "Study him for public action: craft, archive, material, and institution become political evidence.",
    zh: "从他学习公共行动：工艺、档案、材料和机构成为政治证据。"
  },
  "Kara Walker": {
    en: "She uses silhouette, scale, and historical violence to make race, fantasy, and power impossible to look away from.",
    zh: "她用剪影、尺度和历史暴力，让种族、幻想和权力无法被回避。"
  },
  "Cindy Sherman": {
    en: "Study her for staged identity: photography becomes a theater of roles, stereotypes, and self-invention.",
    zh: "从她学习被摆拍的身份：摄影成为角色、刻板印象和自我制造的剧场。"
  },
  "Nam June Paik": {
    en: "He treats television as sculpture, mirror, instrument, and feedback system.",
    zh: "他把电视当作雕塑、镜子、乐器和反馈系统。"
  },
  "Refik Anadol": {
    en: "Use him to understand data as atmosphere: archives and AI become immersive image environments.",
    zh: "用他理解数据作为氛围：档案和 AI 变成沉浸式影像环境。"
  },
  "Yayoi Kusama": {
    en: "Study repetition with her: dots, mirrors, and rooms turn personal obsession into shared infinity.",
    zh: "从她学习重复：圆点、镜子和房间把个人执念变成共享的无限。"
  },
  "Olafur Eliasson": {
    en: "He makes perception visible through light, weather, reflection, atmosphere, and collective behavior.",
    zh: "他通过光、天气、反射、氛围和集体行为让感知变得可见。"
  },
  "Doris Salcedo": {
    en: "Study absence with her: furniture, cracks, and materials carry grief, memory, and political wound.",
    zh: "从她学习缺席：家具、裂缝和材料承载悲伤、记忆和政治创伤。"
  },
  "Do Ho Suh": {
    en: "He turns home, migration, and memory into translucent architecture.",
    zh: "他把家、迁徙和记忆转化为半透明建筑。"
  },
  "Chiharu Shiota": {
    en: "Her thread installations make memory, absence, and connection physically visible.",
    zh: "她的线装置让记忆、缺席和连接获得可见形体。"
  },
  "Marina Abramovic": {
    en: "Study presence and endurance with her: attention, risk, and the viewer's gaze become the medium.",
    zh: "从她学习在场与耐力：注意力、风险和观众凝视成为媒介。"
  },
  "Yoko Ono": {
    en: "Her instructions make audience imagination and participation central to the work.",
    zh: "她的指令让观众想象和参与成为作品核心。"
  },
  "Tehching Hsieh": {
    en: "He turns life, time, discipline, and documentation into long-duration performance.",
    zh: "他把生活、时间、纪律和记录变成长时段行为。"
  },
  "Joseph Beuys": {
    en: "Use him for social sculpture: education, ritual, politics, and healing become artistic material.",
    zh: "用他理解社会雕塑：教育、仪式、政治和疗愈成为艺术材料。"
  },
  "Ana Mendieta": {
    en: "She links body, earth, trace, ritual, exile, and absence.",
    zh: "她连接身体、土地、痕迹、仪式、流亡和缺席。"
  },
  "Bill Viola": {
    en: "He slows video into spiritual attention, using water, fire, faces, and transformation.",
    zh: "他把影像放慢成精神性注意力，使用水、火、面孔和转化。"
  },
  "Bruce Nauman": {
    en: "He uses repetition, language, body, and pressure to make ordinary actions unsettling.",
    zh: "他用重复、语言、身体和压力让普通动作变得不安。"
  },
  "Pipilotti Rist": {
    en: "She turns video into sensual environment: color, body, music, and immersion reshape mood.",
    zh: "她把影像变成感官环境：颜色、身体、音乐和沉浸重塑情绪。"
  },
  "Christian Marclay": {
    en: "Study him for montage: found sound and image can build a new experience of time.",
    zh: "从他学习蒙太奇：现成声音和图像能建造新的时间经验。"
  },
  JODI: {
    en: "JODI exposes the browser and code as unstable artistic material rather than invisible infrastructure.",
    zh: "JODI 暴露浏览器和代码，让它们成为不稳定艺术材料，而不是隐形基础设施。"
  },
  "Olia Lialina": {
    en: "She treats the web's early language, links, pages, and amateur identity as native art material.",
    zh: "她把早期网页语言、链接、页面和业余身份当作原生艺术材料。"
  },
  "Casey Reas": {
    en: "He shows how code and rules generate form, variation, and visual behavior.",
    zh: "他展示代码和规则如何生成形式、变化和视觉行为。"
  },
  "Rafael Lozano-Hemmer": {
    en: "He makes interactive systems where bodies, biometrics, light, and public space respond to each other.",
    zh: "他创造互动系统，让身体、生物识别、光和公共空间相互回应。"
  },
  teamLab: {
    en: "Study teamLab for participatory spectacle: digital rooms respond to collective movement and attention.",
    zh: "从 teamLab 学习参与式景观：数字空间回应集体移动和注意力。"
  },
  "Hito Steyerl": {
    en: "She uses video essay to critique images, war, surveillance, platforms, and digital visibility.",
    zh: "她用影像论文批判图像、战争、监控、平台和数字可见性。"
  },
  "Ian Cheng": {
    en: "He builds simulated worlds where behavior, agency, and change unfold over time.",
    zh: "他建造模拟世界，让行为、能动性和变化随时间展开。"
  },
  "Trevor Paglen": {
    en: "Study him for invisible infrastructures: surveillance, satellites, machine vision, and secrecy become visible.",
    zh: "从他学习不可见基础设施：监控、卫星、机器视觉和秘密变得可见。"
  },
  "Memo Akten": {
    en: "He connects machine learning, perception, spirituality, and pattern recognition.",
    zh: "他连接机器学习、感知、精神性和模式识别。"
  },
  "Sougwen Chung": {
    en: "She stages drawing as human-machine collaboration between gesture, robot, memory, and error.",
    zh: "她把绘画设置为人机协作：手势、机器人、记忆和错误共同参与。"
  },
  "Cao Fei": {
    en: "She uses video and virtual worlds to study urbanization, labor, youth culture, and Chinese futures.",
    zh: "她用影像和虚拟世界研究城市化、劳动、青年文化和中国未来。"
  },
  "Xu Bing": {
    en: "He turns writing systems into conceptual machines for meaning, translation, authority, and misreading.",
    zh: "他把书写系统变成关于意义、翻译、权威和误读的观念机器。"
  },
  "Cai Guo-Qiang": {
    en: "He uses gunpowder, explosion, drawing, and spectacle to combine danger, ritual, and image.",
    zh: "他用火药、爆炸、绘画和景观结合危险、仪式和图像。"
  },
  LuYang: {
    en: "LuYang mixes game engines, anime, Buddhism, neuroscience, and digital bodies to question identity.",
    zh: "陆扬混合游戏引擎、动漫、佛教、神经科学和数字身体来追问身份。"
  }
};

export function getFocusCards(week: number, labels: string[], lang: Lang): FocusCard[] {
  const explanations = focusExplanations[week]?.[lang] ?? [];
  return labels.map((label, index) => ({
    label,
    explanation: explanations[index] ?? (lang === "en" ? "Use this as a lens for reading the week's artworks." : "把它作为阅读本周作品的一个镜头。")
  }));
}

export function getArtistLessonCards(names: string[], lang: Lang): ArtistLessonCard[] {
  return names.map((name) => ({
    name,
    method: artistMethods[name]?.[lang] ?? (lang === "en" ? "Use this artist as a reference point for the week's method." : "把这位艺术家作为理解本周方法的参考点。")
  }));
}
