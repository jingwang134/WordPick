/* ============================================================
   📚 词根词缀数据库
   等级标注：CET4=四级 CET6=六级 IELTS=雅思 TOEFL=托福
   未标注等级默认 CET4
   ============================================================ */
const ROOTS = {
  port: {
    name: "port", cn: "搬运 / 港口", color: "#e74c3c",
    desc: "源自拉丁 portare(搬运)。词根含义与'运输、港口'相关",
    words: [
      { word: "export", pos: "v./n.", cn: "出口；输出", phonetic: "/ɪkˈspɔːrt/", level: ["CET4", "IELTS"], example: { en: "China exports electronics to the US.", cn: "中国向美国出口电子产品。" }, breakdown: "ex-(向外) + port(运)" },
      { word: "import", pos: "v./n.", cn: "进口；输入", phonetic: "/ɪmˈpɔːrt/", level: ["CET4", "IELTS"], example: { en: "The country imports most of its oil.", cn: "这个国家大部分石油靠进口。" }, breakdown: "im-(向内) + port(运)" },
      { word: "transport", pos: "v./n.", cn: "运输；交通", phonetic: "/trænˈspɔːrt/", level: ["CET4", "IELTS", "TOEFL"], example: { en: "Trucks transport goods across the country.", cn: "卡车把货物运往全国各地。" }, breakdown: "trans-(跨越) + port(运)" },
      { word: "report", pos: "v./n.", cn: "报告；汇报", phonetic: "/rɪˈpɔːrt/", level: ["CET4"], example: { en: "Please report to the manager.", cn: "请向经理汇报。" }, breakdown: "re-(回) + port(带) → 把信息带回去" },
      { word: "support", pos: "v./n.", cn: "支持；支撑", phonetic: "/səˈpɔːrt/", level: ["CET4"], example: { en: "Thank you for your support.", cn: "感谢你的支持。" }, breakdown: "sup-(下) + port(运) → 从下面托住" },
      { word: "seaport", pos: "n.", cn: "海港", phonetic: "/ˈsiːpɔːrt/", level: ["CET6", "IELTS"], example: { en: "Shanghai is a major seaport.", cn: "上海是一个重要海港。" }, breakdown: "sea(海) + port(港)" },
      { word: "airport", pos: "n.", cn: "机场", phonetic: "/ˈerpɔːrt/", level: ["CET4"], example: { en: "I'll pick you up at the airport.", cn: "我会在机场接你。" }, breakdown: "air(航空) + port(港)" },
      { word: "deport", pos: "v.", cn: "驱逐出境", phonetic: "/dɪˈpɔːrt/", level: ["IELTS", "TOEFL"], example: { en: "He was deported for illegal entry.", cn: "他因非法入境被驱逐出境。" }, breakdown: "de-(离开) + port(运)" },
      { word: "passport", pos: "n.", cn: "护照", phonetic: "/ˈpæspɔːrt/", level: ["CET6", "IELTS"], example: { en: "Show me your passport, please.", cn: "请出示你的护照。" }, breakdown: "pass(通过) + port(港口)" },
      { word: "opportunity", pos: "n.", cn: "机会", phonetic: "/ˌɑːpərˈtuːnəti/", level: ["CET4", "TOEFL"], example: { en: "This is a great opportunity.", cn: "这是个绝佳的机会。" }, breakdown: "ob-(对面) + port(港) → 船到对岸 = 时机" },
      { word: "portable", pos: "adj.", cn: "便携的", phonetic: "/ˈpɔːrtəbl/", level: ["CET6", "IELTS"], example: { en: "This is a portable charger.", cn: "这是个便携充电器。" }, breakdown: "port + -able(能)" },
      { word: "transportation", pos: "n.", cn: "运输；交通系统", phonetic: "/ˌtrænspərˈteɪʃn/", level: ["CET4", "TOEFL"], example: { en: "Public transportation is convenient here.", cn: "这里的公共交通很方便。" }, breakdown: "trans-(跨越) + port(运) + -ation" },
      { word: "porter", pos: "n.", cn: "搬运工", phonetic: "/ˈpɔːrtər/", level: ["CET6"], example: { en: "The porter carried our luggage.", cn: "搬运工帮我们提行李。" }, breakdown: "port + -er(人)" }
    ]
  },
  spect: {
    name: "spect", cn: "看", color: "#9b59b6",
    desc: "源自拉丁 specere(看)。与'观察、视觉'相关",
    words: [
      { word: "inspect", pos: "v.", cn: "检查；视察", phonetic: "/ɪnˈspekt/", level: ["CET6", "IELTS"], example: { en: "The officer inspected the building.", cn: "官员检查了这栋建筑。" }, breakdown: "in-(进入) + spect(看) → 仔细看" },
      { word: "respect", pos: "v./n.", cn: "尊重", phonetic: "/rɪˈspekt/", level: ["CET4"], example: { en: "I respect your decision.", cn: "我尊重你的决定。" }, breakdown: "re-(再) + spect(看) → 反复看 → 重视" },
      { word: "expect", pos: "v.", cn: "期待；预料", phonetic: "/ɪkˈspekt/", level: ["CET4"], example: { en: "I expect good news tomorrow.", cn: "我期待明天有好消息。" }, breakdown: "ex-(向外) + spect(看) → 往外看 → 期待" },
      { word: "aspect", pos: "n.", cn: "方面；外观", phonetic: "/ˈæspekt/", level: ["CET6", "IELTS"], example: { en: "Consider every aspect of the problem.", cn: "考虑这个问题的每个方面。" }, breakdown: "a-(向) + spect(看) → 看的角度" },
      { word: "spectacle", pos: "n.", cn: "景象；奇观", phonetic: "/ˈspektəkl/", level: ["TOEFL"], example: { en: "The sunset was a beautiful spectacle.", cn: "日落是一道美景。" }, breakdown: "spect + -acle(名词)" },
      { word: "spectator", pos: "n.", cn: "观众", phonetic: "/ˈspekteɪtər/", level: ["CET6", "TOEFL"], example: { en: "Thousands of spectators cheered.", cn: "数千名观众欢呼。" }, breakdown: "spect + -ator(人)" },
      { word: "perspective", pos: "n.", cn: "视角；透视", phonetic: "/pərˈspektɪv/", level: ["CET6", "IELTS", "TOEFL"], example: { en: "From my perspective, it's fine.", cn: "在我看来，这没问题。" }, breakdown: "per-(穿过) + spect(看)" },
      { word: "suspect", pos: "v./n.", cn: "怀疑；嫌疑人", phonetic: "/səˈspekt/", level: ["CET6", "IELTS"], example: { en: "I suspect he is lying.", cn: "我怀疑他在撒谎。" }, breakdown: "sus-(下) + spect(看) → 从下偷看" },
      { word: "prospect", pos: "n.", cn: "前景；可能性", phonetic: "/ˈprɑːspekt/", level: ["CET6", "TOEFL"], example: { en: "The job has great prospects.", cn: "这份工作前景很好。" }, breakdown: "pro-(向前) + spect(看) → 向前看" },
      { word: "retrospect", pos: "n.", cn: "回顾；追溯", phonetic: "/ˈretrəspekt/", level: ["TOEFL"], example: { en: "In retrospect, I was wrong.", cn: "回顾来看，我错了。" }, breakdown: "retro-(向后) + spect(看)" },
      { word: "introspect", pos: "v.", cn: "内省", phonetic: "/ˌɪntrəˈspekt/", level: ["TOEFL"], example: { en: "He likes to introspect about life.", cn: "他喜欢自省人生。" }, breakdown: "intro-(向内) + spect(看)" },
      { word: "circumspect", pos: "adj.", cn: "谨慎的", phonetic: "/ˈsɜːrkəmspekt/", level: ["TOEFL"], example: { en: "Be circumspect in public.", cn: "在公开场合要谨慎。" }, breakdown: "circum-(周围) + spect(看) → 四处看" }
    ]
  },
  dict: {
    name: "dict", cn: "说", color: "#3498db",
    desc: "源自拉丁 dicere(说)。与'说、讲'相关",
    words: [
      { word: "predict", pos: "v.", cn: "预言；预测", phonetic: "/prɪˈdɪkt/", level: ["CET4", "IELTS"], example: { en: "Nobody can predict the future.", cn: "没人能预测未来。" }, breakdown: "pre-(预先) + dict(说)" },
      { word: "dictate", pos: "v.", cn: "口授；命令", phonetic: "/ˈdɪkteɪt/", level: ["TOEFL"], example: { en: "She dictated a letter to her secretary.", cn: "她向秘书口述了一封信。" }, breakdown: "dict + -ate(动词)" },
      { word: "dictionary", pos: "n.", cn: "字典", phonetic: "/ˈdɪkʃəneri/", level: ["CET4"], example: { en: "Look it up in the dictionary.", cn: "查字典吧。" }, breakdown: "dict + -ion + -ary" },
      { word: "contradict", pos: "v.", cn: "反驳；矛盾", phonetic: "/ˌkɑːntrəˈdɪkt/", level: ["CET6", "TOEFL"], example: { en: "Don't contradict me in public.", cn: "别当众反驳我。" }, breakdown: "contra-(反对) + dict(说)" },
      { word: "indicate", pos: "v.", cn: "表明；指示", phonetic: "/ˈɪndɪkeɪt/", level: ["CET4", "IELTS"], example: { en: "The data indicates a problem.", cn: "数据表明有问题。" }, breakdown: "in-(使) + dic + -ate" },
      { word: "verdict", pos: "n.", cn: "裁决；结论", phonetic: "/ˈvɜːrdɪkt/", level: ["CET6", "TOEFL"], example: { en: "The jury reached a verdict.", cn: "陪审团达成了裁决。" }, breakdown: "ver-(真实) + dict(说) → 真实地说" },
      { word: "addict", pos: "n.", cn: "上瘾者；入迷", phonetic: "/ˈædɪkt/", level: ["CET6", "IELTS"], example: { en: "He is a video game addict.", cn: "他是个游戏迷。" }, breakdown: "ad-(向) + dict(说) → 不断说 → 沉迷" },
      { word: "diction", pos: "n.", cn: "措辞；发音", phonetic: "/ˈdɪkʃn/", level: ["TOEFL"], example: { en: "Her diction is clear.", cn: "她发音清晰。" }, breakdown: "dict(说) + -ion" },
      { word: "edict", pos: "n.", cn: "法令；公告", phonetic: "/ˈiːdɪkt/", level: ["TOEFL"], example: { en: "The king issued an edict.", cn: "国王颁布了法令。" }, breakdown: "e-(出) + dict(说) → 说出来" },
      { word: "dictator", pos: "n.", cn: "独裁者；口述者", phonetic: "/ˈdɪkteɪtər/", level: ["CET6", "IELTS"], example: { en: "The dictator ruled for decades.", cn: "独裁者统治了几十年。" }, breakdown: "dict + -ator(人) → 发号施令的人" },
      { word: "jurisdiction", pos: "n.", cn: "司法权；管辖", phonetic: "/ˌdʒʊrɪsˈdɪkʃn/", level: ["TOEFL"], example: { en: "This case is under the court's jurisdiction.", cn: "此案归该法院管辖。" }, breakdown: "juris(法律) + dict(说) + -ion" }
    ]
  },
  form: {
    name: "form", cn: "形状 / 形成", color: "#16a085",
    desc: "源自拉丁 formare(形成)。与'形状、形式'相关",
    words: [
      { word: "transform", pos: "v.", cn: "转变；转化", phonetic: "/trænsˈfɔːrm/", level: ["CET6", "IELTS"], example: { en: "Technology has transformed our lives.", cn: "科技已经改变了我们的生活。" }, breakdown: "trans-(转换) + form(形)" },
      { word: "inform", pos: "v.", cn: "通知；告知", phonetic: "/ɪnˈfɔːrm/", level: ["CET4"], example: { en: "Please inform me of any changes.", cn: "如有变化请通知我。" }, breakdown: "in-(进入) + form(形) → 塑形 → 教导" },
      { word: "perform", pos: "v.", cn: "表演；执行", phonetic: "/pərˈfɔːrm/", level: ["CET4"], example: { en: "She performed on stage.", cn: "她在舞台上表演。" }, breakdown: "per-(完全) + form(形) → 完全成形" },
      { word: "reform", pos: "v./n.", cn: "改革；改造", phonetic: "/rɪˈfɔːrm/", level: ["CET4", "IELTS"], example: { en: "The education system needs reform.", cn: "教育系统需要改革。" }, breakdown: "re-(再) + form(形)" },
      { word: "uniform", pos: "n.", cn: "制服", phonetic: "/ˈjuːnɪfɔːrm/", level: ["CET4"], example: { en: "Students must wear uniforms.", cn: "学生必须穿校服。" }, breakdown: "uni-(统一) + form(形)" },
      { word: "formula", pos: "n.", cn: "公式；配方", phonetic: "/ˈfɔːrmjələ/", level: ["CET6"], example: { en: "This is the secret formula.", cn: "这是秘密配方。" }, breakdown: "form + -ula(小)" },
      { word: "formal", pos: "adj.", cn: "正式的", phonetic: "/ˈfɔːrml/", level: ["CET4"], example: { en: "Wear formal clothes to the party.", cn: "穿正式服装去派对。" }, breakdown: "form + -al" },
      { word: "deform", pos: "v.", cn: "使变形", phonetic: "/dɪˈfɔːrm/", level: ["TOEFL"], example: { en: "Heat deforms the plastic.", cn: "高温使塑料变形。" }, breakdown: "de-(坏) + form(形)" },
      { word: "conform", pos: "v.", cn: "遵守；顺应", phonetic: "/kənˈfɔːrm/", level: ["CET6", "TOEFL"], example: { en: "You must conform to the rules.", cn: "你必须遵守规则。" }, breakdown: "con-(一起) + form(形) → 同形" },
      { word: "formulate", pos: "v.", cn: "制定；规划", phonetic: "/ˈfɔːrmjuleɪt/", level: ["TOEFL"], example: { en: "We need to formulate a plan.", cn: "我们需要制定计划。" }, breakdown: "form + -ulate(动词)" },
      { word: "formation", pos: "n.", cn: "形成；编队", phonetic: "/fɔːrˈmeɪʃn/", level: ["CET6"], example: { en: "How did the formation of mountains happen?", cn: "山脉是怎么形成的？" }, breakdown: "form + -ation" },
      { word: "information", pos: "n.", cn: "信息", phonetic: "/ˌɪnfərˈmeɪʃn/", level: ["CET4"], example: { en: "We need more information.", cn: "我们需要更多信息。" }, breakdown: "in-(进入) + form(形) + -ation" }
    ]
  },
  ject: {
    name: "ject", cn: "投掷", color: "#e67e22",
    desc: "源自拉丁 jacere(投掷)。与'扔、抛、投射'相关",
    words: [
      { word: "inject", pos: "v.", cn: "注射；注入", phonetic: "/ɪnˈdʒekt/", level: ["CET6", "IELTS"], example: { en: "The nurse injected the vaccine.", cn: "护士注射了疫苗。" }, breakdown: "in-(入) + ject(投)" },
      { word: "project", pos: "n./v.", cn: "项目；投射", phonetic: "/ˈprɑːdʒekt/", level: ["CET4"], example: { en: "The project will be finished next month.", cn: "这个项目下个月完工。" }, breakdown: "pro-(向前) + ject(投)" },
      { word: "reject", pos: "v.", cn: "拒绝；驳回", phonetic: "/rɪˈdʒekt/", level: ["CET4"], example: { en: "She rejected his proposal.", cn: "她拒绝了他的求婚。" }, breakdown: "re-(回) + ject(投) → 扔回去" },
      { word: "subject", pos: "n.", cn: "主题；学科", phonetic: "/ˈsʌbdʒɪkt/", level: ["CET4"], example: { en: "What's your favorite subject?", cn: "你最喜欢什么学科？" }, breakdown: "sub-(下) + ject(投) → 投在下面" },
      { word: "object", pos: "n./v.", cn: "物体；反对", phonetic: "/ˈɑːbdʒɪkt/", level: ["CET4"], example: { en: "I object to this plan.", cn: "我反对这个计划。" }, breakdown: "ob-(对面) + ject(投) → 投到对面" },
      { word: "eject", pos: "v.", cn: "弹出；驱逐", phonetic: "/ɪˈdʒekt/", level: ["TOEFL"], example: { en: "He was ejected from the bar.", cn: "他被从酒吧赶出去。" }, breakdown: "e-(出) + ject(投)" },
      { word: "trajectory", pos: "n.", cn: "轨迹", phonetic: "/trəˈdʒektəri/", level: ["TOEFL", "IELTS"], example: { en: "The bullet followed a curved trajectory.", cn: "子弹沿弧形轨迹飞行。" }, breakdown: "tra-(穿过) + ject + -ory" },
      { word: "conjecture", pos: "n./v.", cn: "推测；猜测", phonetic: "/kənˈdʒektʃər/", level: ["TOEFL"], example: { en: "That's pure conjecture.", cn: "那纯属猜测。" }, breakdown: "con-(一起) + ject(投) + -ure → 把想法投到一起" },
      { word: "interject", pos: "v.", cn: "插话", phonetic: "/ˌɪntərˈdʒekt/", level: ["TOEFL"], example: { en: "May I interject a question?", cn: "我可以插问一个问题吗？" }, breakdown: "inter-(中间) + ject(投)" },
      { word: "deject", pos: "v.", cn: "使沮丧", phonetic: "/dɪˈdʒekt/", level: ["TOEFL"], example: { en: "The failure dejected him.", cn: "失败让他沮丧。" }, breakdown: "de-(向下) + ject(投) → 心情被扔下去" }
    ]
  },
  duc_duct: {
    name: "duc/duct", cn: "引导", color: "#27ae60",
    desc: "源自拉丁 ducere(引导)。与'引导、带来'相关",
    words: [
      { word: "conduct", pos: "v./n.", cn: "实施；行为", phonetic: "/kənˈdʌkt/", level: ["CET4", "IELTS"], example: { en: "He conducted the experiment carefully.", cn: "他仔细地进行了实验。" }, breakdown: "con-(加强) + duct(引)" },
      { word: "produce", pos: "v.", cn: "生产；制造", phonetic: "/prəˈduːs/", level: ["CET4"], example: { en: "The factory produces cars.", cn: "这家工厂生产汽车。" }, breakdown: "pro-(向前) + duc(引) → 引出" },
      { word: "reduce", pos: "v.", cn: "减少；降低", phonetic: "/rɪˈduːs/", level: ["CET4"], example: { en: "Try to reduce your stress.", cn: "试着减少你的压力。" }, breakdown: "re-(回) + duc(引) → 引回" },
      { word: "induce", pos: "v.", cn: "引诱；诱发", phonetic: "/ɪnˈduːs/", level: ["CET6", "TOEFL"], example: { en: "The drug induces sleep.", cn: "这种药会引发睡意。" }, breakdown: "in-(入) + duc(引)" },
      { word: "introduce", pos: "v.", cn: "介绍；引进", phonetic: "/ˌɪntrəˈduːs/", level: ["CET4"], example: { en: "Let me introduce my friend.", cn: "让我介绍我的朋友。" }, breakdown: "intro-(向内) + duc(引)" },
      { word: "education", pos: "n.", cn: "教育", phonetic: "/ˌedʒuˈkeɪʃn/", level: ["CET4"], example: { en: "Education is important.", cn: "教育很重要。" }, breakdown: "e-(出) + duc + -ation → 引出潜能" },
      { word: "seduce", pos: "v.", cn: "引诱；勾引", phonetic: "/sɪˈduːs/", level: ["TOEFL"], example: { en: "Don't be seduced by his lies.", cn: "别被他的谎言诱惑。" }, breakdown: "se-(分开) + duc(引)" },
      { word: "conductor", pos: "n.", cn: "指挥；乘务员", phonetic: "/kənˈdʌktər/", level: ["CET6"], example: { en: "The conductor raised his baton.", cn: "指挥举起了指挥棒。" }, breakdown: "conduct + -or(人)" },
      { word: "deduct", pos: "v.", cn: "扣除；减去", phonetic: "/dɪˈdʌkt/", level: ["IELTS", "TOEFL"], example: { en: "The cost is deducted from your pay.", cn: "费用从工资中扣除。" }, breakdown: "de-(向下) + duct(引)" },
      { word: "duct", pos: "n.", cn: "管道；导管", phonetic: "/dʌkt/", level: ["CET6", "TOEFL"], example: { en: "Air flows through the duct.", cn: "空气流过管道。" }, breakdown: "duct(引导) → 引导流体的管子" },
      { word: "conducive", pos: "adj.", cn: "有益的；有助于的", phonetic: "/kənˈduːsɪv/", level: ["TOEFL"], example: { en: "A quiet room is conducive to study.", cn: "安静的房间有助于学习。" }, breakdown: "con-(一起) + duc(引) + -ive" },
      { word: "aqueduct", pos: "n.", cn: "引水渠", phonetic: "/ˈækwɪdʌkt/", level: ["TOEFL"], example: { en: "The Roman aqueduct still stands.", cn: "罗马引水渠还在。" }, breakdown: "aqua(水) + duct(引)" }
    ]
  },
  vis_vid: {
    name: "vis/vid", cn: "看", color: "#8e44ad",
    desc: "源自拉丁 videre(看)。与'视觉、看见'相关",
    words: [
      { word: "visible", pos: "adj.", cn: "可见的", phonetic: "/ˈvɪzəbl/", level: ["CET4"], example: { en: "The stars are visible tonight.", cn: "今晚星星清晰可见。" }, breakdown: "vis + -ible(能)" },
      { word: "vision", pos: "n.", cn: "视力；愿景", phonetic: "/ˈvɪʒn/", level: ["CET4", "IELTS"], example: { en: "He has a clear vision for the company.", cn: "他对公司有清晰的愿景。" }, breakdown: "vis + -ion" },
      { word: "video", pos: "n.", cn: "视频", phonetic: "/ˈvɪdioʊ/", level: ["CET4"], example: { en: "I watched a video on YouTube.", cn: "我在YouTube看了一个视频。" }, breakdown: "vid + -eo" },
      { word: "revise", pos: "v.", cn: "修改；复习", phonetic: "/rɪˈvaɪz/", level: ["CET4", "IELTS"], example: { en: "Please revise your essay.", cn: "请修改你的作文。" }, breakdown: "re-(再) + vis(看) → 再看一遍" },
      { word: "supervise", pos: "v.", cn: "监督；管理", phonetic: "/ˈsuːpərvaɪz/", level: ["CET6", "IELTS"], example: { en: "She supervises 10 employees.", cn: "她管理10名员工。" }, breakdown: "super-(上) + vis(看)" },
      { word: "provide", pos: "v.", cn: "提供", phonetic: "/prəˈvaɪd/", level: ["CET4"], example: { en: "We provide free WiFi.", cn: "我们提供免费WiFi。" }, breakdown: "pro-(向前) + vid(看) → 提前看 → 准备" },
      { word: "television", pos: "n.", cn: "电视", phonetic: "/ˈtelɪvɪʒn/", level: ["CET4"], example: { en: "What's on television tonight?", cn: "今晚电视放什么？" }, breakdown: "tele-(远) + vis(看)" },
      { word: "invisible", pos: "adj.", cn: "无形的；看不见的", phonetic: "/ɪnˈvɪzəbl/", level: ["CET6"], example: { en: "Air is invisible.", cn: "空气是看不见的。" }, breakdown: "in-(不) + vis + -ible" },
      { word: "evident", pos: "adj.", cn: "明显的", phonetic: "/ˈevɪdənt/", level: ["CET6", "IELTS"], example: { en: "It's evident that he's tired.", cn: "很明显他累了。" }, breakdown: "e-(出) + vid(看) + -ent" },
      { word: "visual", pos: "adj.", cn: "视觉的", phonetic: "/ˈvɪʒuəl/", level: ["CET6"], example: { en: "The visual effect is amazing.", cn: "视觉效果惊人。" }, breakdown: "vis + -ual" },
      { word: "visitor", pos: "n.", cn: "参观者；访客", phonetic: "/ˈvɪzɪtər/", level: ["CET4"], example: { en: "We have a visitor today.", cn: "今天有访客。" }, breakdown: "vis(看) + -itor(人)" },
      { word: "envisage", pos: "v.", cn: "设想；想象", phonetic: "/ɪnˈvɪzɪdʒ/", level: ["TOEFL"], example: { en: "Can you envisage the future city?", cn: "你能设想未来的城市吗？" }, breakdown: "en-(使) + vis(看) + -age" }
    ]
  },
  scrib_script: {
    name: "scrib/script", cn: "写", color: "#d35400",
    desc: "源自拉丁 scribere(写)。与'写、记录'相关",
    words: [
      { word: "describe", pos: "v.", cn: "描述", phonetic: "/dɪˈskraɪb/", level: ["CET4"], example: { en: "Describe your hometown.", cn: "描述一下你的家乡。" }, breakdown: "de-(下) + scrib(写)" },
      { word: "subscribe", pos: "v.", cn: "订阅；签署", phonetic: "/səbˈskraɪb/", level: ["CET6", "IELTS"], example: { en: "Subscribe to our channel.", cn: "订阅我们的频道。" }, breakdown: "sub-(下) + scrib(写) → 写在下面 → 签名" },
      { word: "manuscript", pos: "n.", cn: "手稿", phonetic: "/ˈmænjuskrɪpt/", level: ["TOEFL", "IELTS"], example: { en: "The author showed his manuscript.", cn: "作者展示了他的手稿。" }, breakdown: "manu-(手) + script(写)" },
      { word: "script", pos: "n.", cn: "脚本；剧本", phonetic: "/skrɪpt/", level: ["CET6"], example: { en: "The script is ready for filming.", cn: "剧本准备好可以拍了。" }, breakdown: "script(写)" },
      { word: "prescribe", pos: "v.", cn: "开药方；规定", phonetic: "/prɪˈskraɪb/", level: ["CET6", "TOEFL"], example: { en: "The doctor prescribed antibiotics.", cn: "医生开了抗生素。" }, breakdown: "pre-(预先) + scrib(写) → 提前写好" },
      { word: "transcript", pos: "n.", cn: "成绩单；抄本", phonetic: "/ˈtrænskrɪpt/", level: ["TOEFL"], example: { en: "Send me your college transcript.", cn: "把你的大学成绩单发给我。" }, breakdown: "trans-(转) + script(写)" },
      { word: "description", pos: "n.", cn: "描述；说明", phonetic: "/dɪˈskrɪpʃn/", level: ["CET4"], example: { en: "Give me a description of the suspect.", cn: "描述一下嫌疑人的特征。" }, breakdown: "de-(下) + script(写) + -ion" },
      { word: "inscription", pos: "n.", cn: "铭文；题词", phonetic: "/ɪnˈskrɪpʃn/", level: ["TOEFL"], example: { en: "The inscription on the stone is ancient.", cn: "石头上的铭文很古老。" }, breakdown: "in-(入) + script(写) + -ion" },
      { word: "prescription", pos: "n.", cn: "处方；药方", phonetic: "/prɪˈskrɪpʃn/", level: ["CET6", "IELTS"], example: { en: "Here's your prescription.", cn: "这是您的处方。" }, breakdown: "pre-(预先) + script(写) + -ion" },
      { word: "postscript", pos: "n.", cn: "附言；后记", phonetic: "/ˈpoʊstskrɪpt/", level: ["TOEFL"], example: { en: "PS, short for postscript.", cn: "PS 是附言的意思。" }, breakdown: "post-(后) + script(写)" }
    ]
  },
  fac_fect: {
    name: "fac/fect", cn: "做 / 制造", color: "#2980b9",
    desc: "源自拉丁 facere(做)。与'做、制造'相关",
    words: [
      { word: "factory", pos: "n.", cn: "工厂", phonetic: "/ˈfæktri/", level: ["CET4"], example: { en: "He works in a factory.", cn: "他在工厂工作。" }, breakdown: "fact + -ory(场所)" },
      { word: "manufacture", pos: "v./n.", cn: "制造", phonetic: "/ˌmænjuˈfæktʃər/", level: ["CET6", "IELTS"], example: { en: "They manufacture cars here.", cn: "他们在这造车。" }, breakdown: "manu-(手) + fact(做) → 手工做" },
      { word: "affect", pos: "v.", cn: "影响", phonetic: "/əˈfekt/", level: ["CET4"], example: { en: "The rain affected our plans.", cn: "雨影响了我们的计划。" }, breakdown: "af-(向) + fect(做) → 对...起作用" },
      { word: "effect", pos: "n.", cn: "效果；影响", phonetic: "/ɪˈfekt/", level: ["CET4"], example: { en: "The effect was immediate.", cn: "效果立竿见影。" }, breakdown: "ef-(出) + fect(做) → 做出来的东西" },
      { word: "perfect", pos: "adj.", cn: "完美的", phonetic: "/ˈpɜːrfɪkt/", level: ["CET4"], example: { en: "Nobody is perfect.", cn: "没有人是完美的。" }, breakdown: "per-(完全) + fect(做) → 做得完整" },
      { word: "defect", pos: "n.", cn: "缺陷", phonetic: "/ˈdiːfekt/", level: ["CET6", "IELTS"], example: { en: "There's a defect in the product.", cn: "产品有缺陷。" }, breakdown: "de-(坏) + fect(做) → 做坏了" },
      { word: "infect", pos: "v.", cn: "感染", phonetic: "/ɪnˈfekt/", level: ["CET6"], example: { en: "The wound got infected.", cn: "伤口感染了。" }, breakdown: "in-(入) + fect(做) → 细菌做进来" },
      { word: "efficient", pos: "adj.", cn: "高效的", phonetic: "/ɪˈfɪʃnt/", level: ["CET4", "IELTS"], example: { en: "She is an efficient worker.", cn: "她工作效率很高。" }, breakdown: "ef-(出) + fic(做) + -ient → 做得出" },
      { word: "proficient", pos: "adj.", cn: "精通的", phonetic: "/prəˈfɪʃnt/", level: ["TOEFL"], example: { en: "He is proficient in English.", cn: "他精通英语。" }, breakdown: "pro-(向前) + fic(做) + -ient" },
      { word: "facility", pos: "n.", cn: "设施；设备", phonetic: "/fəˈsɪləti/", level: ["CET6", "IELTS"], example: { en: "The gym has modern facilities.", cn: "健身房设施现代。" }, breakdown: "fac(做) + -ility" },
      { word: "facilitate", pos: "v.", cn: "促进；使便利", phonetic: "/fəˈsɪlɪteɪt/", level: ["TOEFL"], example: { en: "Technology facilitates communication.", cn: "科技促进交流。" }, breakdown: "fac(做) + -ilitate" }
    ]
  },
  press: {
    name: "press", cn: "压", color: "#c0392b",
    desc: "源自拉丁 premere(压)。与'压、按、挤'相关",
    words: [
      { word: "express", pos: "v./adj.", cn: "表达；快速的", phonetic: "/ɪkˈspres/", level: ["CET4"], example: { en: "Express your ideas clearly.", cn: "清晰表达你的想法。" }, breakdown: "ex-(出) + press(压) → 压出来" },
      { word: "impress", pos: "v.", cn: "给...留下印象", phonetic: "/ɪmˈpres/", level: ["CET4", "IELTS"], example: { en: "Your work impressed me.", cn: "你的工作给我留下深刻印象。" }, breakdown: "im-(入) + press(压) → 压入脑中" },
      { word: "compress", pos: "v.", cn: "压缩", phonetic: "/kəmˈpres/", level: ["CET6", "TOEFL"], example: { en: "Compress the file before sending.", cn: "发送前压缩文件。" }, breakdown: "com-(一起) + press(压)" },
      { word: "depress", pos: "v.", cn: "使沮丧；按压", phonetic: "/dɪˈpres/", level: ["CET6"], example: { en: "The news depressed him.", cn: "这条消息让他沮丧。" }, breakdown: "de-(下) + press(压) → 压下去" },
      { word: "suppress", pos: "v.", cn: "镇压；抑制", phonetic: "/səˈpres/", level: ["TOEFL"], example: { en: "Don't suppress your feelings.", cn: "别压抑你的感受。" }, breakdown: "sup-(下) + press(压)" },
      { word: "pressure", pos: "n.", cn: "压力", phonetic: "/ˈpreʃər/", level: ["CET4"], example: { en: "I'm under a lot of pressure.", cn: "我压力很大。" }, breakdown: "press + -ure" },
      { word: "oppress", pos: "v.", cn: "压迫；压抑", phonetic: "/əˈpres/", level: ["TOEFL"], example: { en: "The people were oppressed.", cn: "人民被压迫。" }, breakdown: "op-(向) + press(压)" },
      { word: "impressive", pos: "adj.", cn: "令人印象深刻的", phonetic: "/ɪmˈpresɪv/", level: ["CET6"], example: { en: "Her performance was impressive.", cn: "她的表演令人印象深刻。" }, breakdown: "im-(入) + press + -ive" },
      { word: "pressing", pos: "adj.", cn: "紧迫的", phonetic: "/ˈpresɪŋ/", level: ["IELTS"], example: { en: "This is a pressing issue.", cn: "这是个紧迫的问题。" }, breakdown: "press + -ing" }
    ]
  },
  cept_ceive: {
    name: "cept/ceive", cn: "拿 / 抓", color: "#16a085",
    desc: "源自拉丁 capere(拿)。与'接受、抓住'相关",
    words: [
      { word: "accept", pos: "v.", cn: "接受", phonetic: "/əkˈsept/", level: ["CET4"], example: { en: "I accept your apology.", cn: "我接受你的道歉。" }, breakdown: "ac-(向) + cept(拿) → 拿走" },
      { word: "except", pos: "prep.", cn: "除...之外", phonetic: "/ɪkˈsept/", level: ["CET4"], example: { en: "Everyone came except Tom.", cn: "除了Tom所有人都来了。" }, breakdown: "ex-(出) + cept(拿) → 拿出去" },
      { word: "concept", pos: "n.", cn: "概念", phonetic: "/ˈkɑːnsept/", level: ["CET6", "IELTS"], example: { en: "It's a difficult concept.", cn: "这是个难懂的概念。" }, breakdown: "con-(一起) + cept(拿) → 抓住的要点" },
      { word: "deceive", pos: "v.", cn: "欺骗", phonetic: "/dɪˈsiːv/", level: ["CET6"], example: { en: "Don't deceive yourself.", cn: "别欺骗自己。" }, breakdown: "de-(坏) + ceive(拿) → 拿走" },
      { word: "perceive", pos: "v.", cn: "感知；察觉", phonetic: "/pərˈsiːv/", level: ["CET6", "TOEFL"], example: { en: "How do you perceive the world?", cn: "你如何感知世界？" }, breakdown: "per-(完全) + ceive(拿) → 全部拿到" },
      { word: "receive", pos: "v.", cn: "收到；接待", phonetic: "/rɪˈsiːv/", level: ["CET4"], example: { en: "I received your letter.", cn: "我收到了你的信。" }, breakdown: "re-(回) + ceive(拿) → 拿回来" },
      { word: "intercept", pos: "v.", cn: "拦截", phonetic: "/ˌɪntərˈsept/", level: ["TOEFL"], example: { en: "The spy intercepted the message.", cn: "间谍截获了情报。" }, breakdown: "inter-(中间) + cept(拿)" },
      { word: "reception", pos: "n.", cn: "接待处；接收", phonetic: "/rɪˈsepʃn/", level: ["CET6"], example: { en: "Check in at the reception.", cn: "在前台登记入住。" }, breakdown: "re-(回) + cept(拿) + -ion" },
      { word: "misconception", pos: "n.", cn: "误解", phonetic: "/ˌmɪskənˈsepʃn/", level: ["TOEFL"], example: { en: "That's a common misconception.", cn: "那是个常见的误解。" }, breakdown: "mis-(错) + con-(一起) + cept + -ion" }
    ]
  },
  fer: {
    name: "fer", cn: "携带 / 带来", color: "#d35400",
    desc: "源自拉丁 ferre(携带)。与'带来、传送'相关",
    words: [
      { word: "transfer", pos: "v./n.", cn: "转移；转让", phonetic: "/trænsˈfɜːr/", level: ["CET4", "IELTS"], example: { en: "I transferred to a new school.", cn: "我转学到了一所新学校。" }, breakdown: "trans-(转) + fer(带)" },
      { word: "refer", pos: "v.", cn: "参考；提及", phonetic: "/rɪˈfɜːr/", level: ["CET4"], example: { en: "Please refer to page 10.", cn: "请参考第10页。" }, breakdown: "re-(回) + fer(带) → 带回去查" },
      { word: "prefer", pos: "v.", cn: "更喜欢", phonetic: "/prɪˈfɜːr/", level: ["CET4"], example: { en: "I prefer tea to coffee.", cn: "我更喜欢茶而非咖啡。" }, breakdown: "pre-(先) + fer(带) → 先带出来" },
      { word: "differ", pos: "v.", cn: "不同；相异", phonetic: "/ˈdɪfər/", level: ["CET4"], example: { en: "Our opinions differ.", cn: "我们意见不同。" }, breakdown: "dif-(分开) + fer(带)" },
      { word: "offer", pos: "v./n.", cn: "提供；提议", phonetic: "/ˈɔːfər/", level: ["CET4"], example: { en: "He offered me a job.", cn: "他给了我一份工作。" }, breakdown: "of-(向) + fer(带) → 带过来" },
      { word: "conference", pos: "n.", cn: "会议", phonetic: "/ˈkɑːnfərəns/", level: ["CET4", "IELTS"], example: { en: "The conference starts at 9.", cn: "会议9点开始。" }, breakdown: "con-(一起) + fer + -ence → 把意见带在一起" },
      { word: "suffer", pos: "v.", cn: "遭受；忍受", phonetic: "/ˈsʌfər/", level: ["CET4"], example: { en: "He suffers from back pain.", cn: "他背痛。" }, breakdown: "suf-(下) + fer(带) → 在下面承受" },
      { word: "infer", pos: "v.", cn: "推断", phonetic: "/ɪnˈfɜːr/", level: ["CET6", "IELTS"], example: { en: "What can we infer from the data?", cn: "我们能从数据推断出什么？" }, breakdown: "in-(入) + fer(带) → 带入结论" },
      { word: "fertile", pos: "adj.", cn: "肥沃的；富饶的", phonetic: "/ˈfɜːrtl/", level: ["CET6", "TOEFL"], example: { en: "The soil is very fertile.", cn: "土壤很肥沃。" }, breakdown: "fer(带来) + -tile → 能带来收成" },
      { word: "ferry", pos: "n.", cn: "渡轮", phonetic: "/ˈferi/", level: ["CET6"], example: { en: "We took the ferry to the island.", cn: "我们坐渡轮去岛上。" }, breakdown: "fer(带) + -ry → 载人的船" },
      { word: "circumference", pos: "n.", cn: "圆周", phonetic: "/sərˈkʌmfərəns/", level: ["TOEFL"], example: { en: "Measure the circumference of the circle.", cn: "测量圆的周长。" }, breakdown: "circum-(周围) + fer(带) + -ence" }
    ]
  },
  ten_tain: {
    name: "ten/tain", cn: "保持 / 拿", color: "#8e44ad",
    desc: "源自拉丁 tenere(保持)。与'持有、维持'相关",
    words: [
      { word: "contain", pos: "v.", cn: "包含；容纳", phonetic: "/kənˈteɪn/", level: ["CET4"], example: { en: "The box contains books.", cn: "盒子里装着书。" }, breakdown: "con-(一起) + tain(拿) → 一起拿住" },
      { word: "obtain", pos: "v.", cn: "获得", phonetic: "/əbˈteɪn/", level: ["CET4"], example: { en: "He obtained a degree in law.", cn: "他取得了法律学位。" }, breakdown: "ob-(向) + tain(拿) → 拿到手" },
      { word: "maintain", pos: "v.", cn: "维持；保养", phonetic: "/meɪnˈteɪn/", level: ["CET4", "IELTS"], example: { en: "Maintain a healthy lifestyle.", cn: "保持健康的生活方式。" }, breakdown: "main(手) + tain(拿) → 拿在手里" },
      { word: "retain", pos: "v.", cn: "保留；保持", phonetic: "/rɪˈteɪn/", level: ["CET6", "IELTS"], example: { en: "The bottle retains heat well.", cn: "这个瓶子保温很好。" }, breakdown: "re-(再) + tain(拿)" },
      { word: "sustain", pos: "v.", cn: "维持；承受", phonetic: "/səˈsteɪn/", level: ["CET6", "TOEFL"], example: { en: "Hope sustains me through hard times.", cn: "希望支撑我度过艰难时刻。" }, breakdown: "sus-(上) + tain(拿) → 从下撑住" },
      { word: "content", pos: "n./adj.", cn: "内容；满足的", phonetic: "/ˈkɑːntent/", level: ["CET4"], example: { en: "I'm content with my life.", cn: "我对生活很满足。" }, breakdown: "con-(一起) + tent(拿) → 拿住的" },
      { word: "continent", pos: "n.", cn: "大陆", phonetic: "/ˈkɑːntɪnənt/", level: ["CET4"], example: { en: "Africa is a continent.", cn: "非洲是一个大陆。" }, breakdown: "con-(一起) + tin(拿) + -ent → 连续的土地" },
      { word: "tenant", pos: "n.", cn: "房客；租户", phonetic: "/ˈtenənt/", level: ["TOEFL"], example: { en: "The tenant pays rent monthly.", cn: "房客按月付房租。" }, breakdown: "ten(保持) + -ant → 保住房产的人" },
      { word: "maintenance", pos: "n.", cn: "维护；保养", phonetic: "/ˈmeɪntənəns/", level: ["CET6"], example: { en: "The building needs maintenance.", cn: "这栋楼需要维护。" }, breakdown: "maintain + -ance" },
      { word: "attainable", pos: "adj.", cn: "可达到的", phonetic: "/əˈteɪnəbl/", level: ["TOEFL"], example: { en: "The goal is attainable.", cn: "这个目标是可达成的。" }, breakdown: "at-(向) + tain(拿) + -able" }
    ]
  },
  sist: {
    name: "sist", cn: "站立", color: "#2980b9",
    desc: "源自拉丁 sistere(站立)。与'站立、坚持'相关",
    words: [
      { word: "assist", pos: "v.", cn: "帮助；协助", phonetic: "/əˈsɪst/", level: ["CET4"], example: { en: "Can you assist me with this?", cn: "你能帮我吗？" }, breakdown: "as-(旁) + sist(站) → 站在旁边" },
      { word: "consist", pos: "v.", cn: "组成；构成", phonetic: "/kənˈsɪst/", level: ["CET4"], example: { en: "Water consists of H and O.", cn: "水由氢和氧组成。" }, breakdown: "con-(一起) + sist(站) → 站在一起" },
      { word: "insist", pos: "v.", cn: "坚持；强调", phonetic: "/ɪnˈsɪst/", level: ["CET4"], example: { en: "I insist on paying.", cn: "我坚持要付钱。" }, breakdown: "in-(上) + sist(站) → 站稳立场" },
      { word: "persist", pos: "v.", cn: "坚持；持续", phonetic: "/pərˈsɪst/", level: ["CET6", "IELTS"], example: { en: "Persist and you'll succeed.", cn: "坚持就能成功。" }, breakdown: "per-(一直) + sist(站)" },
      { word: "resist", pos: "v.", cn: "抵抗；忍住", phonetic: "/rɪˈzɪst/", level: ["CET4", "IELTS"], example: { en: "I can't resist chocolate.", cn: "我无法抗拒巧克力。" }, breakdown: "re-(反) + sist(站) → 反着站" },
      { word: "exist", pos: "v.", cn: "存在；生存", phonetic: "/ɪɡˈzɪst/", level: ["CET4"], example: { en: "Do ghosts exist?", cn: "鬼魂存在吗？" }, breakdown: "ex-(出) + sist(站) → 站出来" },
      { word: "resistance", pos: "n.", cn: "抵抗；阻力", phonetic: "/rɪˈzɪstəns/", level: ["CET6"], example: { en: "There was little resistance.", cn: "几乎没遇到抵抗。" }, breakdown: "resist + -ance" },
      { word: "assistant", pos: "n.", cn: "助理", phonetic: "/əˈsɪstənt/", level: ["CET4"], example: { en: "She's my personal assistant.", cn: "她是我的私人助理。" }, breakdown: "as-(旁) + sist(站) + -ant(人)" },
      { word: "persistence", pos: "n.", cn: "坚持；毅力", phonetic: "/pərˈsɪstəns/", level: ["TOEFL"], example: { en: "Persistence is the key to success.", cn: "坚持是成功的关键。" }, breakdown: "per-(一直) + sist(站) + -ence" }
    ]
  },
  rupt: {
    name: "rupt", cn: "破裂", color: "#c0392b",
    desc: "源自拉丁 rumpere(破)。与'打破、中断'相关",
    words: [
      { word: "rupture", pos: "n./v.", cn: "破裂；决裂", phonetic: "/ˈrʌptʃər/", level: ["TOEFL"], example: { en: "The pipe ruptured.", cn: "水管爆裂了。" }, breakdown: "rupt + -ure" },
      { word: "disrupt", pos: "v.", cn: "扰乱；中断", phonetic: "/dɪsˈrʌpt/", level: ["CET6", "IELTS"], example: { en: "The strike disrupted traffic.", cn: "罢工扰乱了交通。" }, breakdown: "dis-(分开) + rupt(破)" },
      { word: "interrupt", pos: "v.", cn: "打断；中断", phonetic: "/ˌɪntəˈrʌpt/", level: ["CET4"], example: { en: "Don't interrupt me.", cn: "别打断我。" }, breakdown: "inter-(中间) + rupt(破) → 从中间破" },
      { word: "abrupt", pos: "adj.", cn: "突然的；唐突的", phonetic: "/əˈbrʌpt/", level: ["CET6"], example: { en: "He made an abrupt turn.", cn: "他突然转弯。" }, breakdown: "ab-(离开) + rupt(破) → 突然断开" },
      { word: "corrupt", pos: "adj./v.", cn: "腐败的；腐蚀", phonetic: "/kəˈrʌpt/", level: ["CET6", "TOEFL"], example: { en: "The official was corrupt.", cn: "那个官员腐败了。" }, breakdown: "cor-(加强) + rupt(破) → 完全坏掉" },
      { word: "bankrupt", pos: "adj.", cn: "破产的", phonetic: "/ˈbæŋkrʌpt/", level: ["CET6"], example: { en: "The company went bankrupt.", cn: "公司破产了。" }, breakdown: "bank(银行) + rupt(破) → 钱断了" },
      { word: "erupt", pos: "v.", cn: "爆发；喷发", phonetic: "/ɪˈrʌpt/", level: ["CET6"], example: { en: "The volcano erupted.", cn: "火山爆发了。" }, breakdown: "e-(出) + rupt(破) → 破裂而出" },
      { word: "disruption", pos: "n.", cn: "中断；扰乱", phonetic: "/dɪsˈrʌpʃn/", level: ["IELTS"], example: { en: "The storm caused disruption.", cn: "暴风雨造成了混乱。" }, breakdown: "disrupt + -ion" }
    ]
  },
  bio: {
    name: "bio", cn: "生命 / 生物", color: "#27ae60",
    desc: "源自希腊 bios(生命)。与'生命、生物'相关",
    words: [
      { word: "biology", pos: "n.", cn: "生物学", phonetic: "/baɪˈɑːlədʒi/", level: ["CET4"], example: { en: "Biology is my favorite subject.", cn: "生物是我最喜欢的科目。" }, breakdown: "bio + -logy(学)" },
      { word: "biography", pos: "n.", cn: "传记", phonetic: "/baɪˈɑːɡrəfi/", level: ["CET6", "IELTS"], example: { en: "She wrote a biography of Einstein.", cn: "她写了爱因斯坦的传记。" }, breakdown: "bio + -graphy(写)" },
      { word: "antibiotic", pos: "n.", cn: "抗生素", phonetic: "/ˌæntibaɪˈɑːtɪk/", level: ["CET6", "TOEFL"], example: { en: "The doctor prescribed antibiotics.", cn: "医生开了抗生素。" }, breakdown: "anti-(反) + bio + -tic → 抗生物的" },
      { word: "biologist", pos: "n.", cn: "生物学家", phonetic: "/baɪˈɑːlədʒɪst/", level: ["CET6"], example: { en: "She's a famous biologist.", cn: "她是著名的生物学家。" }, breakdown: "bio + -logist(学者)" },
      { word: "symbiosis", pos: "n.", cn: "共生", phonetic: "/ˌsɪmbaɪˈoʊsɪs/", level: ["TOEFL"], example: { en: "Birds and flowers have symbiosis.", cn: "鸟和花有共生关系。" }, breakdown: "sym-(一起) + bio + -sis" },
      { word: "autobiography", pos: "n.", cn: "自传", phonetic: "/ˌɔːtəbaɪˈɑːɡrəfi/", level: ["CET6", "TOEFL"], example: { en: "He wrote his autobiography.", cn: "他写了自传。" }, breakdown: "auto-(自己) + bio + -graphy" },
      { word: "biodiversity", pos: "n.", cn: "生物多样性", phonetic: "/ˌbaɪoʊdaɪˈvɜːrsəti/", level: ["IELTS", "TOEFL"], example: { en: "We must protect biodiversity.", cn: "我们必须保护生物多样性。" }, breakdown: "bio + diversity(多样)" }
    ]
  },
  geo: {
    name: "geo", cn: "地球 / 土地", color: "#16a085",
    desc: "源自希腊 geo(土地)。与'地球、土地'相关",
    words: [
      { word: "geography", pos: "n.", cn: "地理学", phonetic: "/dʒiˈɑːɡrəfi/", level: ["CET4"], example: { en: "Geography class is interesting.", cn: "地理课很有趣。" }, breakdown: "geo + -graphy(写)" },
      { word: "geology", pos: "n.", cn: "地质学", phonetic: "/dʒiˈɑːlədʒi/", level: ["CET6", "IELTS"], example: { en: "He studies geology.", cn: "他研究地质学。" }, breakdown: "geo + -logy(学)" },
      { word: "geometry", pos: "n.", cn: "几何", phonetic: "/dʒiˈɑːmətri/", level: ["CET6"], example: { en: "Geometry is part of math.", cn: "几何是数学的一部分。" }, breakdown: "geo + -metry(测量)" },
      { word: "geologist", pos: "n.", cn: "地质学家", phonetic: "/dʒiˈɑːlədʒɪst/", level: ["IELTS"], example: { en: "The geologist studied the rocks.", cn: "地质学家研究了岩石。" }, breakdown: "geo + -logist(学者)" },
      { word: "geothermal", pos: "adj.", cn: "地热的", phonetic: "/ˌdʒiːoʊˈθɜːrml/", level: ["TOEFL"], example: { en: "Iceland uses geothermal energy.", cn: "冰岛利用地热能。" }, breakdown: "geo + thermal(热)" },
      { word: "geopolitics", pos: "n.", cn: "地缘政治", phonetic: "/ˌdʒiːoʊˈpɑːlətɪks/", level: ["TOEFL"], example: { en: "Geopolitics shapes world trade.", cn: "地缘政治塑造世界贸易。" }, breakdown: "geo + politics(政治)" }
    ]
  },
  tele: {
    name: "tele", cn: "远", color: "#8e44ad",
    desc: "源自希腊 tele(远)。与'远距离'相关",
    words: [
      { word: "telephone", pos: "n.", cn: "电话", phonetic: "/ˈtelɪfoʊn/", level: ["CET4"], example: { en: "The telephone is ringing.", cn: "电话响了。" }, breakdown: "tele + phone(声音) → 远处传声" },
      { word: "television", pos: "n.", cn: "电视", phonetic: "/ˈtelɪvɪʒn/", level: ["CET4"], example: { en: "Watch television after dinner.", cn: "晚饭后看电视。" }, breakdown: "tele + vis(看)" },
      { word: "telescope", pos: "n.", cn: "望远镜", phonetic: "/ˈtelɪskoʊp/", level: ["CET6"], example: { en: "I looked through the telescope.", cn: "我用望远镜看了。" }, breakdown: "tele + scope(看)" },
      { word: "telegraph", pos: "n.", cn: "电报", phonetic: "/ˈtelɪɡræf/", level: ["CET6", "TOEFL"], example: { en: "The telegraph was invented long ago.", cn: "电报是很久以前发明的。" }, breakdown: "tele + graph(写)" },
      { word: "telecommunication", pos: "n.", cn: "电信", phonetic: "/ˌtelikəˌmjuːnɪˈkeɪʃn/", level: ["IELTS", "TOEFL"], example: { en: "Telecommunication connects the world.", cn: "电信连接世界。" }, breakdown: "tele + communication(通信)" },
      { word: "telepathy", pos: "n.", cn: "心灵感应", phonetic: "/təˈlepəθi/", level: ["TOEFL"], example: { en: "The twins seem to share telepathy.", cn: "这对双胞胎似乎有心电感应。" }, breakdown: "tele + pathy(感受)" }
    ]
  },
  auto: {
    name: "auto", cn: "自己", color: "#e67e22",
    desc: "源自希腊 autos(自己)。与'自动、自己'相关",
    words: [
      { word: "automobile", pos: "n.", cn: "汽车", phonetic: "/ˈɔːtəməbiːl/", level: ["CET4"], example: { en: "He bought a new automobile.", cn: "他买了辆新车。" }, breakdown: "auto + mobile(移动)" },
      { word: "automatic", pos: "adj.", cn: "自动的", phonetic: "/ˌɔːtəˈmætɪk/", level: ["CET4"], example: { en: "This door is automatic.", cn: "这扇门是自动的。" }, breakdown: "auto + matic(动)" },
      { word: "autograph", pos: "n.", cn: "亲笔签名", phonetic: "/ˈɔːtəɡræf/", level: ["TOEFL"], example: { en: "I got the singer's autograph.", cn: "我拿到了歌手的签名。" }, breakdown: "auto + graph(写) → 亲笔写" },
      { word: "autonomous", pos: "adj.", cn: "自治的；自主的", phonetic: "/ɔːˈtɑːnəməs/", level: ["CET6", "IELTS"], example: { en: "Hong Kong is an autonomous region of China.", cn: "中国香港是中国的自治区。" }, breakdown: "auto + nom(法) + -ous" },
      { word: "autobiography", pos: "n.", cn: "自传", phonetic: "/ˌɔːtəbaɪˈɑːɡrəfi/", level: ["CET6"], example: { en: "She wrote an autobiography.", cn: "她写了一本自传。" }, breakdown: "auto + bio + graphy" },
      { word: "automation", pos: "n.", cn: "自动化", phonetic: "/ˌɔːtəˈmeɪʃn/", level: ["IELTS"], example: { en: "Automation replaces manual labor.", cn: "自动化取代了体力劳动。" }, breakdown: "auto + mat + -ion" },
      { word: "autopilot", pos: "n.", cn: "自动驾驶仪", phonetic: "/ˈɔːtoʊpaɪlət/", level: ["IELTS"], example: { en: "The plane flies on autopilot.", cn: "飞机自动驾驶。" }, breakdown: "auto + pilot(驾驶员)" }
    ]
  },
  micro: {
    name: "micro", cn: "小", color: "#3498db",
    desc: "源自希腊 mikros(小)。与'微小'相关",
    words: [
      { word: "microscope", pos: "n.", cn: "显微镜", phonetic: "/ˈmaɪkrəskoʊp/", level: ["CET6"], example: { en: "Look at the cell under the microscope.", cn: "用显微镜观察细胞。" }, breakdown: "micro + scope(看)" },
      { word: "microphone", pos: "n.", cn: "麦克风", phonetic: "/ˈmaɪkrəfoʊn/", level: ["CET4"], example: { en: "Speak into the microphone.", cn: "对着麦克风说话。" }, breakdown: "micro + phone(声)" },
      { word: "microwave", pos: "n.", cn: "微波炉", phonetic: "/ˈmaɪkroʊweɪv/", level: ["CET4"], example: { en: "Heat the food in the microwave.", cn: "用微波炉热饭。" }, breakdown: "micro + wave(波)" },
      { word: "microbe", pos: "n.", cn: "微生物", phonetic: "/ˈmaɪkroʊb/", level: ["TOEFL"], example: { en: "Microbes live everywhere.", cn: "微生物无处不在。" }, breakdown: "micro + be(生命)" },
      { word: "microcosm", pos: "n.", cn: "微观世界", phonetic: "/ˈmaɪkroʊkɑːzəm/", level: ["TOEFL"], example: { en: "The city is a microcosm of society.", cn: "城市是社会的缩影。" }, breakdown: "micro + cosm(世界)" }
    ]
  },
  man: {
    name: "man", cn: "手", color: "#d35400",
    desc: "源自拉丁 manus(手)。与'手、做'相关",
    words: [
      { word: "manual", pos: "adj./n.", cn: "手工的；手册", phonetic: "/ˈmænjuəl/", level: ["CET6"], example: { en: "Manual labor is hard work.", cn: "体力劳动很辛苦。" }, breakdown: "man + -ual" },
      { word: "manage", pos: "v.", cn: "管理；设法", phonetic: "/ˈmænɪdʒ/", level: ["CET4"], example: { en: "She manages a team of 20.", cn: "她管理20人的团队。" }, breakdown: "man + -age" },
      { word: "manufacture", pos: "v.", cn: "制造", phonetic: "/ˌmænjuˈfæktʃər/", level: ["CET6", "IELTS"], example: { en: "They manufacture toys.", cn: "他们制造玩具。" }, breakdown: "manu + fact(做) + -ure" },
      { word: "permanent", pos: "adj.", cn: "永久的", phonetic: "/ˈpɜːrmənənt/", level: ["CET4", "IELTS"], example: { en: "This is a permanent position.", cn: "这是个永久职位。" }, breakdown: "per-(一直) + man(留) + -ent → 不放手" },
      { word: "command", pos: "v./n.", cn: "命令；指挥", phonetic: "/kəˈmænd/", level: ["CET4"], example: { en: "The captain commanded the ship.", cn: "船长指挥船。" }, breakdown: "com-(加强) + mand(手) → 把手放在...上" },
      { word: "manner", pos: "n.", cn: "方式；礼貌", phonetic: "/ˈmænər/", level: ["CET4"], example: { en: "He has good manners.", cn: "他很有礼貌。" }, breakdown: "man + -er → 怎么用手" },
      { word: "manipulate", pos: "v.", cn: "操纵；操控", phonetic: "/məˈnɪpjuleɪt/", level: ["CET6", "TOEFL"], example: { en: "Don't let ads manipulate you.", cn: "别让广告操纵你。" }, breakdown: "man(手) + ipul + -ate → 用手摆弄" },
      { word: "manuscript", pos: "n.", cn: "手稿", phonetic: "/ˈmænjuskrɪpt/", level: ["TOEFL"], example: { en: "The manuscript is handwritten.", cn: "这份手稿是手写的。" }, breakdown: "manu(手) + script(写)" }
    ]
  },
  ped: {
    name: "ped", cn: "脚 / 儿童", color: "#27ae60",
    desc: "源自拉丁 pes(脚) 与希腊 pais(儿童)",
    words: [
      { word: "pedal", pos: "n./v.", cn: "踏板；踩", phonetic: "/ˈpedl/", level: ["CET6"], example: { en: "Pedal harder to go faster.", cn: "用力踩踏板才能更快。" }, breakdown: "ped + -al" },
      { word: "pedestrian", pos: "n.", cn: "行人", phonetic: "/pəˈdestriən/", level: ["CET6"], example: { en: "Watch out for pedestrians.", cn: "小心行人。" }, breakdown: "ped + -estrian" },
      { word: "expedition", pos: "n.", cn: "远征；探险队", phonetic: "/ˌekspəˈdɪʃn/", level: ["CET6", "TOEFL"], example: { en: "They went on an expedition to the North Pole.", cn: "他们去北极探险。" }, breakdown: "ex-(出) + ped(脚) + -ition → 迈步出去" },
      { word: "encyclopedia", pos: "n.", cn: "百科全书", phonetic: "/ɪnˌsaɪkləˈpiːdiə/", level: ["CET6"], example: { en: "Look it up in the encyclopedia.", cn: "查百科全书。" }, breakdown: "en-(在) + cyclo(圈) + ped(教育)" },
      { word: "impede", pos: "v.", cn: "阻碍", phonetic: "/ɪmˈpiːd/", level: ["TOEFL"], example: { en: "Bad weather impeded our progress.", cn: "坏天气阻碍了我们的进度。" }, breakdown: "im-(入) + ped(脚) → 绊脚" },
      { word: "pediatric", pos: "adj.", cn: "儿科的", phonetic: "/ˌpiːdiˈætrɪk/", level: ["TOEFL"], example: { en: "She's a pediatric doctor.", cn: "她是儿科医生。" }, breakdown: "ped(儿童) + iatric(医疗)" },
      { word: "biped", pos: "n.", cn: "两足动物", phonetic: "/ˈbaɪped/", level: ["TOEFL"], example: { en: "Humans are bipeds.", cn: "人类是两足动物。" }, breakdown: "bi-(两) + ped(脚)" }
    ]
  },
  phon: {
    name: "phon", cn: "声音", color: "#9b59b6",
    desc: "源自希腊 phone(声音)。与'声音、说话'相关",
    words: [
      { word: "microphone", pos: "n.", cn: "麦克风", phonetic: "/ˈmaɪkrəfoʊn/", level: ["CET4"], example: { en: "Test the microphone before speaking.", cn: "说话前先测试麦克风。" }, breakdown: "micro + phone(声)" },
      { word: "telephone", pos: "n.", cn: "电话", phonetic: "/ˈtelɪfoʊn/", level: ["CET4"], example: { en: "I called him on the telephone.", cn: "我打电话给他了。" }, breakdown: "tele + phone" },
      { word: "symphony", pos: "n.", cn: "交响乐", phonetic: "/ˈsɪmfəni/", level: ["CET6"], example: { en: "The symphony was beautiful.", cn: "交响乐很美。" }, breakdown: "sym-(一起) + phon(声) + -y" },
      { word: "phonetics", pos: "n.", cn: "语音学", phonetic: "/fəˈnetɪks/", level: ["TOEFL"], example: { en: "Phonetics studies how we speak.", cn: "语音学研究怎么说话。" }, breakdown: "phonet + -ics" },
      { word: "megaphone", pos: "n.", cn: "扩音器", phonetic: "/ˈmeɡəfoʊn/", level: ["TOEFL"], example: { en: "Use a megaphone at the concert.", cn: "演唱会上用扩音器。" }, breakdown: "mega(大) + phone" },
      { word: "cacophony", pos: "n.", cn: "刺耳的声音", phonetic: "/kəˈkɑːfəni/", level: ["TOEFL"], example: { en: "The street was full of cacophony.", cn: "街上满是刺耳的噪音。" }, breakdown: "caco(坏) + phon(声) + -y" }
    ]
  },
  graph: {
    name: "graph", cn: "写 / 画", color: "#2980b9",
    desc: "源自希腊 graphein(写、画)。与'写、画、记录'相关",
    words: [
      { word: "autograph", pos: "n.", cn: "亲笔签名", phonetic: "/ˈɔːtəɡræf/", level: ["TOEFL"], example: { en: "He asked for her autograph.", cn: "他要了她的签名。" }, breakdown: "auto + graph" },
      { word: "biography", pos: "n.", cn: "传记", phonetic: "/baɪˈɑːɡrəfi/", level: ["CET6"], example: { en: "She read his biography.", cn: "她读了他的传记。" }, breakdown: "bio + graphy" },
      { word: "photograph", pos: "n./v.", cn: "照片；拍照", phonetic: "/ˈfoʊtəɡræf/", level: ["CET4"], example: { en: "I took a photograph of the sunset.", cn: "我给日落拍了照。" }, breakdown: "photo(光) + graph" },
      { word: "paragraph", pos: "n.", cn: "段落", phonetic: "/ˈpærəɡræf/", level: ["CET4"], example: { en: "Read the first paragraph.", cn: "读第一段。" }, breakdown: "para-(旁) + graph(写)" },
      { word: "telegraph", pos: "n.", cn: "电报", phonetic: "/ˈtelɪɡræf/", level: ["CET6"], example: { en: "He sent a telegraph.", cn: "他发了电报。" }, breakdown: "tele + graph" },
      { word: "graphic", pos: "adj.", cn: "图形的；生动的", phonetic: "/ˈɡræfɪk/", level: ["CET6", "IELTS"], example: { en: "The graphic design is cool.", cn: "平面设计很酷。" }, breakdown: "graph + -ic" },
      { word: "calligraphy", pos: "n.", cn: "书法", phonetic: "/kəˈlɪɡrəfi/", level: ["TOEFL"], example: { en: "He practices Chinese calligraphy.", cn: "他练习中国书法。" }, breakdown: "calli(美丽) + graph(写) + -y" },
      { word: "typography", pos: "n.", cn: "排版；印刷术", phonetic: "/taɪˈpɑːɡrəfi/", level: ["TOEFL"], example: { en: "Good typography is readable.", cn: "好的排版易读。" }, breakdown: "typo(型) + graph(写) + -y" }
    ]
  },
  therm: {
    name: "therm", cn: "热", color: "#c0392b",
    desc: "源自希腊 thermos(热)。与'温度、热'相关",
    words: [
      { word: "thermometer", pos: "n.", cn: "温度计", phonetic: "/θərˈmɑːmɪtər/", level: ["CET6"], example: { en: "The thermometer reads 38 degrees.", cn: "温度计显示38度。" }, breakdown: "therm + meter(测量)" },
      { word: "thermal", pos: "adj.", cn: "热的；保暖的", phonetic: "/ˈθɜːrml/", level: ["CET6", "IELTS"], example: { en: "Wear thermal underwear in winter.", cn: "冬天穿保暖内衣。" }, breakdown: "therm + -al" },
      { word: "thermos", pos: "n.", cn: "保温瓶", phonetic: "/ˈθɜːrməs/", level: ["CET6"], example: { en: "He brought a thermos of coffee.", cn: "他带了个保温瓶装咖啡。" }, breakdown: "therm + -os" },
      { word: "hypothermia", pos: "n.", cn: "失温症", phonetic: "/ˌhaɪpəˈθɜːrmiə/", level: ["TOEFL"], example: { en: "Hypothermia is dangerous in cold water.", cn: "冷水里失温很危险。" }, breakdown: "hypo-(低) + therm(热) + -ia" },
      { word: "geothermal", pos: "adj.", cn: "地热的", phonetic: "/ˌdʒiːoʊˈθɜːrml/", level: ["TOEFL"], example: { en: "Geothermal energy is clean.", cn: "地热能是清洁能源。" }, breakdown: "geo(地) + thermal(热)" }
    ]
  },
  aqua: {
    name: "aqua", cn: "水", color: "#3498db",
    desc: "源自拉丁 aqua(水)。与水相关",
    words: [
      { word: "aquatic", pos: "adj.", cn: "水生的", phonetic: "/əˈkwætɪk/", level: ["CET6", "TOEFL"], example: { en: "Dolphins are aquatic animals.", cn: "海豚是水生动物。" }, breakdown: "aqua + -tic" },
      { word: "aquarium", pos: "n.", cn: "水族馆；鱼缸", phonetic: "/əˈkweriəm/", level: ["CET6"], example: { en: "We visited the aquarium.", cn: "我们去了水族馆。" }, breakdown: "aqua + -rium(场所)" },
      { word: "aqueduct", pos: "n.", cn: "引水渠", phonetic: "/ˈækwɪdʌkt/", level: ["TOEFL"], example: { en: "The Roman aqueduct still stands.", cn: "罗马引水渠还在。" }, breakdown: "aqua + duct(引)" },
      { word: "aquaculture", pos: "n.", cn: "水产养殖", phonetic: "/ˈækwəkʌltʃər/", level: ["TOEFL"], example: { en: "Aquaculture provides seafood.", cn: "水产养殖提供海鲜。" }, breakdown: "aqua + culture(养殖)" }
    ]
  },
  mort: {
    name: "mort", cn: "死", color: "#34495e",
    desc: "源自拉丁 mors(死)。与'死亡'相关",
    words: [
      { word: "mortal", pos: "adj.", cn: "终有一死的；致命的", phonetic: "/ˈmɔːrtl/", level: ["TOEFL"], example: { en: "All humans are mortal.", cn: "人终有一死。" }, breakdown: "mort + -al" },
      { word: "immortal", pos: "adj.", cn: "不朽的", phonetic: "/ɪˈmɔːrtl/", level: ["CET6", "TOEFL"], example: { en: "Her music is immortal.", cn: "她的音乐是不朽的。" }, breakdown: "im-(不) + mort + -al" },
      { word: "mortality", pos: "n.", cn: "死亡率", phonetic: "/mɔːrˈtæləti/", level: ["CET6", "IELTS"], example: { en: "The mortality rate has dropped.", cn: "死亡率下降了。" }, breakdown: "mort + -ality" },
      { word: "mortgage", pos: "n.", cn: "抵押贷款", phonetic: "/ˈmɔːrɡɪdʒ/", level: ["CET6", "IELTS"], example: { en: "They paid off the mortgage.", cn: "他们还清了房贷。" }, breakdown: "mort(死) + gage(抵押) → 抵押到死" }
    ]
  },
  scope: {
    name: "scope", cn: "看 / 范围", color: "#8e44ad",
    desc: "源自希腊 skopein(看)。与'看、范围'相关",
    words: [
      { word: "microscope", pos: "n.", cn: "显微镜", phonetic: "/ˈmaɪkrəskoʊp/", level: ["CET6"], example: { en: "Cells are visible under a microscope.", cn: "细胞在显微镜下可见。" }, breakdown: "micro + scope" },
      { word: "telescope", pos: "n.", cn: "望远镜", phonetic: "/ˈtelɪskoʊp/", level: ["CET6"], example: { en: "Stars are seen through a telescope.", cn: "用望远镜看星星。" }, breakdown: "tele + scope" },
      { word: "periscope", pos: "n.", cn: "潜望镜", phonetic: "/ˈperɪskoʊp/", level: ["TOEFL"], example: { en: "Submarines use a periscope.", cn: "潜艇用潜望镜。" }, breakdown: "peri-(周围) + scope" },
      { word: "scope", pos: "n.", cn: "范围；余地", phonetic: "/skoʊp/", level: ["CET6", "IELTS"], example: { en: "That's beyond the scope of this project.", cn: "那超出了这个项目的范围。" }, breakdown: "scope(看) → 能看到的范围" }
    ]
  },
  photo: {
    name: "photo", cn: "光", color: "#e67e22",
    desc: "源自希腊 photos(光)。与'光、照片'相关",
    words: [
      { word: "photograph", pos: "n./v.", cn: "照片；拍照", phonetic: "/ˈfoʊtəɡræf/", level: ["CET4"], example: { en: "I want to photograph the sunset.", cn: "我想拍日落。" }, breakdown: "photo + graph(写)" },
      { word: "photographer", pos: "n.", cn: "摄影师", phonetic: "/fəˈtɑːɡrəfər/", level: ["CET4"], example: { en: "She's a professional photographer.", cn: "她是专业摄影师。" }, breakdown: "photo + graph + -er" },
      { word: "photosynthesis", pos: "n.", cn: "光合作用", phonetic: "/ˌfoʊtoʊˈsɪnθəsɪs/", level: ["TOEFL"], example: { en: "Plants make food through photosynthesis.", cn: "植物通过光合作用制造食物。" }, breakdown: "photo + synthesis(合成)" },
      { word: "photon", pos: "n.", cn: "光子", phonetic: "/ˈfoʊtɑːn/", level: ["TOEFL"], example: { en: "Light is made of photons.", cn: "光由光子组成。" }, breakdown: "photo + -on" }
    ]
  },
  verse: {
    name: "verse", cn: "转", color: "#16a085",
    desc: "源自拉丁 vertere(转)。与'转、改变'相关",
    words: [
      { word: "reverse", pos: "v./n.", cn: "反转；倒车", phonetic: "/rɪˈvɜːrs/", level: ["CET4", "IELTS"], example: { en: "Reverse the car into the garage.", cn: "把车倒进车库。" }, breakdown: "re-(回) + verse(转)" },
      { word: "universe", pos: "n.", cn: "宇宙", phonetic: "/ˈjuːnɪvɜːrs/", level: ["CET4"], example: { en: "The universe is vast.", cn: "宇宙浩瀚。" }, breakdown: "uni-(统一) + verse(转) → 旋转的整体" },
      { word: "conversation", pos: "n.", cn: "对话", phonetic: "/ˌkɑːnvərˈseɪʃn/", level: ["CET4"], example: { en: "We had a long conversation.", cn: "我们进行了长谈。" }, breakdown: "con-(一起) + vers(转) + -ation" },
      { word: "diverse", pos: "adj.", cn: "多样的", phonetic: "/daɪˈvɜːrs/", level: ["CET6", "IELTS"], example: { en: "Our team is very diverse.", cn: "我们团队很多元。" }, breakdown: "di-(分开) + verse(转) → 转向不同" },
      { word: "advertise", pos: "v.", cn: "做广告", phonetic: "/ˈædvərtaɪz/", level: ["CET4"], example: { en: "They advertise on TV.", cn: "他们在电视上做广告。" }, breakdown: "ad-(向) + vert(转) + -ise → 把注意力转过来" },
      { word: "convert", pos: "v.", cn: "转换；皈依", phonetic: "/kənˈvɜːrt/", level: ["CET6", "IELTS"], example: { en: "Convert dollars to euros.", cn: "把美元换成欧元。" }, breakdown: "con-(一起) + vert(转)" },
      { word: "controversy", pos: "n.", cn: "争议；争论", phonetic: "/ˈkɑːntrəvɜːrsi/", level: ["CET6", "TOEFL"], example: { en: "The policy caused controversy.", cn: "这项政策引起了争议。" }, breakdown: "contro-(相反) + vers(转) + -y → 对着转" },
      { word: "vertical", pos: "adj.", cn: "垂直的", phonetic: "/ˈvɜːrtɪkl/", level: ["CET6"], example: { en: "Draw a vertical line.", cn: "画一条垂直线。" }, breakdown: "vert(转) + -ical → 向上转" }
    ]
  }
};

/* ============================================================
   🖼️ 场景数据库 (图片背单词)
   场景词未标注等级时默认 CET4
   ============================================================ */
const SCENES = {
  airport: {
    name: "机场", emoji: "✈️", color: "#3498db",
    keywords: ["airport", "plane", "flight", "terminal", "travel"],
    words: [
      { word: "airport", pos: "n.", cn: "机场", phonetic: "/ˈerpɔːrt/", example: { en: "I arrived at the airport early.", cn: "我早早到了机场。" } },
      { word: "flight", pos: "n.", cn: "航班；飞行", phonetic: "/flaɪt/", example: { en: "Flight 102 is boarding now.", cn: "102次航班正在登机。" } },
      { word: "terminal", pos: "n.", cn: "航站楼", phonetic: "/ˈtɜːrmɪnl/", example: { en: "Go to Terminal 3.", cn: "去3号航站楼。" } },
      { word: "runway", pos: "n.", cn: "跑道", phonetic: "/ˈrʌnweɪ/", example: { en: "The plane is on the runway.", cn: "飞机在跑道上。" } },
      { word: "passenger", pos: "n.", cn: "乘客", phonetic: "/ˈpæsɪndʒər/", example: { en: "All passengers must buckle up.", cn: "所有乘客必须系安全带。" } },
      { word: "ticket", pos: "n.", cn: "票", phonetic: "/ˈtɪkɪt/", example: { en: "Show me your ticket.", cn: "出示您的票。" } },
      { word: "boarding", pos: "n.", cn: "登机", phonetic: "/ˈbɔːrdɪŋ/", example: { en: "Boarding starts at 9 AM.", cn: "9点开始登机。" } },
      { word: "takeoff", pos: "n.", cn: "起飞", phonetic: "/ˈteɪkɔːf/", example: { en: "The takeoff was smooth.", cn: "起飞很平稳。" } },
      { word: "landing", pos: "n.", cn: "降落", phonetic: "/ˈlændɪŋ/", example: { en: "Wait for the landing gear.", cn: "等起落架放下。" } },
      { word: "pilot", pos: "n.", cn: "飞行员", phonetic: "/ˈpaɪlət/", example: { en: "The pilot announced the route.", cn: "机长通报了航线。" } },
      { word: "cabin", pos: "n.", cn: "机舱", phonetic: "/ˈkæbɪn/", example: { en: "The cabin is pressurized.", cn: "机舱是加压的。" } },
      { word: "luggage", pos: "n.", cn: "行李", phonetic: "/ˈlʌɡɪdʒ/", example: { en: "Don't forget your luggage.", cn: "别忘了行李。" } },
      { word: "security", pos: "n.", cn: "安检", phonetic: "/sɪˈkjʊrəti/", example: { en: "Go through security first.", cn: "先过安检。" } },
      { word: "gate", pos: "n.", cn: "登机口", phonetic: "/ɡeɪt/", example: { en: "Gate 25 is on the left.", cn: "25号登机口在左边。" } },
      { word: "delay", pos: "n./v.", cn: "延误", phonetic: "/dɪˈleɪ/", example: { en: "The flight is delayed.", cn: "航班延误了。" } },
      { word: "schedule", pos: "n.", cn: "时刻表", phonetic: "/ˈskedʒuːl/", example: { en: "Check the flight schedule.", cn: "查一下航班表。" } },
      { word: "departure", pos: "n.", cn: "出发", phonetic: "/dɪˈpɑːrtʃər/", example: { en: "Departure is at 10 AM.", cn: "10点出发。" } },
      { word: "arrival", pos: "n.", cn: "到达", phonetic: "/əˈraɪvl/", example: { en: "See you on arrival.", cn: "到达时见。" } }
    ]
  },
  seaport: {
    name: "海港", emoji: "🚢", color: "#2980b9",
    keywords: ["port", "ship", "harbor", "sea", "ocean", "dock"],
    words: [
      { word: "ship", pos: "n.", cn: "船", phonetic: "/ʃɪp/", example: { en: "The ship is in the harbor.", cn: "船在港口里。" } },
      { word: "anchor", pos: "n./v.", cn: "锚；抛锚", phonetic: "/ˈæŋkər/", example: { en: "Drop the anchor!", cn: "抛锚！" } },
      { word: "dock", pos: "n.", cn: "码头", phonetic: "/dɑːk/", example: { en: "The ship is at the dock.", cn: "船在码头。" } },
      { word: "harbor", pos: "n.", cn: "港口；海港", phonetic: "/ˈhɑːrbər/", example: { en: "The harbor is full of ships.", cn: "港口停满了船。" } },
      { word: "sailor", pos: "n.", cn: "水手", phonetic: "/ˈseɪlər/", example: { en: "He is an old sailor.", cn: "他是个老水手。" } },
      { word: "cargo", pos: "n.", cn: "货物", phonetic: "/ˈkɑːrɡoʊ/", example: { en: "The cargo is being loaded.", cn: "货物正在装载。" } },
      { word: "container", pos: "n.", cn: "集装箱", phonetic: "/kənˈteɪnər/", example: { en: "The container is heavy.", cn: "这个集装箱很重。" } },
      { word: "deck", pos: "n.", cn: "甲板", phonetic: "/dek/", example: { en: "Stand on the deck.", cn: "站在甲板上。" } },
      { word: "captain", pos: "n.", cn: "船长", phonetic: "/ˈkæptɪn/", example: { en: "The captain ordered to set sail.", cn: "船长命令起航。" } },
      { word: "voyage", pos: "n.", cn: "航行；航程", phonetic: "/ˈvɔɪɪdʒ/", example: { en: "The voyage took 30 days.", cn: "航程用了30天。" } },
      { word: "crew", pos: "n.", cn: "全体船员", phonetic: "/kruː/", example: { en: "The crew is ready.", cn: "船员准备就绪。" } },
      { word: "tide", pos: "n.", cn: "潮汐", phonetic: "/taɪd/", example: { en: "The tide is high.", cn: "涨潮了。" } },
      { word: "lighthouse", pos: "n.", cn: "灯塔", phonetic: "/ˈlaɪthaʊs/", example: { en: "The lighthouse guides ships.", cn: "灯塔为船引航。" } },
      { word: "pier", pos: "n.", cn: "码头", phonetic: "/pɪr/", example: { en: "Walk along the pier.", cn: "沿着码头走。" } },
      { word: "seaport", pos: "n.", cn: "海港", phonetic: "/ˈsiːpɔːrt/", example: { en: "Shanghai is a famous seaport.", cn: "上海是著名的海港。" } }
    ]
  },
  hospital: {
    name: "医院", emoji: "🏥", color: "#e74c3c",
    keywords: ["hospital", "doctor", "nurse", "medicine", "health"],
    words: [
      { word: "doctor", pos: "n.", cn: "医生", phonetic: "/ˈdɑːktər/", example: { en: "You should see a doctor.", cn: "你应该看医生。" } },
      { word: "nurse", pos: "n.", cn: "护士", phonetic: "/nɜːrs/", example: { en: "The nurse took my temperature.", cn: "护士给我量了体温。" } },
      { word: "patient", pos: "n.", cn: "病人", phonetic: "/ˈpeɪʃnt/", example: { en: "The patient is recovering.", cn: "病人在康复中。" } },
      { word: "surgery", pos: "n.", cn: "外科手术", phonetic: "/ˈsɜːrdʒəri/", example: { en: "The surgery was successful.", cn: "手术很成功。" } },
      { word: "medicine", pos: "n.", cn: "药；医学", phonetic: "/ˈmedsn/", example: { en: "Take this medicine after meals.", cn: "饭后吃这药。" } },
      { word: "prescription", pos: "n.", cn: "处方", phonetic: "/prɪˈskrɪpʃn/", level: ["CET6"], example: { en: "Here's your prescription.", cn: "这是您的处方。" } },
      { word: "injection", pos: "n.", cn: "注射", phonetic: "/ɪnˈdʒekʃn/", example: { en: "The injection doesn't hurt.", cn: "打针不疼。" } },
      { word: "ward", pos: "n.", cn: "病房", phonetic: "/wɔːrd/", example: { en: "She's in Ward 5.", cn: "她在5号病房。" } },
      { word: "emergency", pos: "n.", cn: "急诊；紧急情况", phonetic: "/iˈmɜːrdʒənsi/", example: { en: "Call the emergency number.", cn: "拨打急救电话。" } },
      { word: "ambulance", pos: "n.", cn: "救护车", phonetic: "/ˈæmbjələns/", example: { en: "The ambulance arrived quickly.", cn: "救护车很快到了。" } },
      { word: "diagnosis", pos: "n.", cn: "诊断", phonetic: "/ˌdaɪəɡˈnoʊsɪs/", level: ["CET6"], example: { en: "The diagnosis was cancer.", cn: "诊断结果是癌症。" } },
      { word: "treatment", pos: "n.", cn: "治疗", phonetic: "/ˈtriːtmənt/", example: { en: "The treatment is expensive.", cn: "这治疗很贵。" } },
      { word: "symptom", pos: "n.", cn: "症状", phonetic: "/ˈsɪmptəm/", level: ["CET6"], example: { en: "What are your symptoms?", cn: "你有什么症状？" } },
      { word: "vaccine", pos: "n.", cn: "疫苗", phonetic: "/vækˈsiːn/", level: ["CET6"], example: { en: "I got the flu vaccine.", cn: "我打了流感疫苗。" } }
    ]
  },
  restaurant: {
    name: "餐厅", emoji: "🍽️", color: "#e67e22",
    keywords: ["restaurant", "food", "dining", "menu", "chef"],
    words: [
      { word: "menu", pos: "n.", cn: "菜单", phonetic: "/ˈmenjuː/", example: { en: "May I see the menu?", cn: "我能看下菜单吗？" } },
      { word: "waiter", pos: "n.", cn: "服务员", phonetic: "/ˈweɪtər/", example: { en: "The waiter is friendly.", cn: "服务员很友好。" } },
      { word: "order", pos: "v./n.", cn: "点菜；订单", phonetic: "/ˈɔːrdər/", example: { en: "Are you ready to order?", cn: "准备好点菜了吗？" } },
      { word: "serve", pos: "v.", cn: "服务；端上", phonetic: "/sɜːrv/", example: { en: "Dinner is served.", cn: "晚餐准备好了。" } },
      { word: "dish", pos: "n.", cn: "菜肴；碟子", phonetic: "/dɪʃ/", example: { en: "This is my favorite dish.", cn: "这是我最爱的菜。" } },
      { word: "appetizer", pos: "n.", cn: "开胃菜", phonetic: "/ˈæpɪtaɪzər/", example: { en: "Try the appetizer first.", cn: "先尝尝开胃菜。" } },
      { word: "dessert", pos: "n.", cn: "甜点", phonetic: "/dɪˈzɜːrt/", example: { en: "I'll have dessert later.", cn: "我等会要甜点。" } },
      { word: "bill", pos: "n.", cn: "账单", phonetic: "/bɪl/", example: { en: "Can I have the bill?", cn: "买单。" } },
      { word: "reservation", pos: "n.", cn: "预订", phonetic: "/ˌrezərˈveɪʃn/", level: ["CET6"], example: { en: "I have a reservation at 7.", cn: "我7点订了位。" } },
      { word: "chef", pos: "n.", cn: "主厨", phonetic: "/ʃef/", example: { en: "The chef is famous.", cn: "主厨很有名。" } },
      { word: "cuisine", pos: "n.", cn: "菜系；烹饪", phonetic: "/kwɪˈziːn/", level: ["TOEFL"], example: { en: "I love Chinese cuisine.", cn: "我爱中餐。" } },
      { word: "delicious", pos: "adj.", cn: "美味的", phonetic: "/dɪˈlɪʃəs/", example: { en: "This soup is delicious.", cn: "这汤很美味。" } },
      { word: "tip", pos: "n.", cn: "小费", phonetic: "/tɪp/", example: { en: "Don't forget to leave a tip.", cn: "别忘了给小费。" } }
    ]
  },
  family: {
    name: "家庭", emoji: "👨‍👩‍👧", color: "#27ae60",
    keywords: ["family", "home", "people", "relatives"],
    words: [
      { word: "father", pos: "n.", cn: "父亲", phonetic: "/ˈfɑːðər/", example: { en: "My father is a teacher.", cn: "我父亲是老师。" } },
      { word: "mother", pos: "n.", cn: "母亲", phonetic: "/ˈmʌðər/", example: { en: "My mother cooks well.", cn: "我妈做菜很好吃。" } },
      { word: "brother", pos: "n.", cn: "兄弟", phonetic: "/ˈbrʌðər/", example: { en: "I have two brothers.", cn: "我有两个兄弟。" } },
      { word: "sister", pos: "n.", cn: "姐妹", phonetic: "/ˈsɪstər/", example: { en: "My sister is younger.", cn: "我妹妹小一些。" } },
      { word: "son", pos: "n.", cn: "儿子", phonetic: "/sʌn/", example: { en: "He has a son.", cn: "他有个儿子。" } },
      { word: "daughter", pos: "n.", cn: "女儿", phonetic: "/ˈdɔːtər/", example: { en: "Their daughter is 5.", cn: "他们女儿5岁。" } },
      { word: "grandfather", pos: "n.", cn: "祖父", phonetic: "/ˈɡrænfɑːðər/", example: { en: "My grandfather tells stories.", cn: "我爷爷讲故事。" } },
      { word: "grandmother", pos: "n.", cn: "祖母", phonetic: "/ˈɡrænmʌðər/", example: { en: "Grandmother bakes cookies.", cn: "奶奶烤饼干。" } },
      { word: "cousin", pos: "n.", cn: "堂/表兄弟姐妹", phonetic: "/ˈkʌzn/", example: { en: "I have five cousins.", cn: "我有5个表亲。" } },
      { word: "uncle", pos: "n.", cn: "叔叔；舅舅", phonetic: "/ˈʌŋkl/", example: { en: "My uncle lives in Beijing.", cn: "我叔叔住北京。" } },
      { word: "aunt", pos: "n.", cn: "阿姨；姑姑", phonetic: "/ænt/", example: { en: "Aunt Mary is kind.", cn: "玛丽阿姨很善良。" } },
      { word: "husband", pos: "n.", cn: "丈夫", phonetic: "/ˈhʌzbənd/", example: { en: "Her husband is a doctor.", cn: "她丈夫是医生。" } },
      { word: "wife", pos: "n.", cn: "妻子", phonetic: "/waɪf/", example: { en: "His wife is a teacher.", cn: "他妻子是老师。" } },
      { word: "baby", pos: "n.", cn: "婴儿", phonetic: "/ˈbeɪbi/", example: { en: "The baby is sleeping.", cn: "宝宝在睡觉。" } }
    ]
  },
  school: {
    name: "学校", emoji: "🎓", color: "#9b59b6",
    keywords: ["school", "classroom", "student", "teacher", "university"],
    words: [
      { word: "student", pos: "n.", cn: "学生", phonetic: "/ˈstuːdnt/", example: { en: "I'm a college student.", cn: "我是大学生。" } },
      { word: "teacher", pos: "n.", cn: "老师", phonetic: "/ˈtiːtʃər/", example: { en: "She's my English teacher.", cn: "她是我的英语老师。" } },
      { word: "class", pos: "n.", cn: "班级；课", phonetic: "/klæs/", example: { en: "Class begins at 8.", cn: "8点开始上课。" } },
      { word: "lesson", pos: "n.", cn: "课程；教训", phonetic: "/ˈlesn/", example: { en: "Today's lesson is about history.", cn: "今天讲历史。" } },
      { word: "exam", pos: "n.", cn: "考试", phonetic: "/ɪɡˈzæm/", example: { en: "I have an exam tomorrow.", cn: "我明天有考试。" } },
      { word: "grade", pos: "n.", cn: "成绩；年级", phonetic: "/ɡreɪd/", example: { en: "She got a good grade.", cn: "她成绩很好。" } },
      { word: "library", pos: "n.", cn: "图书馆", phonetic: "/ˈlaɪbreri/", example: { en: "Study in the library.", cn: "在图书馆学习。" } },
      { word: "classroom", pos: "n.", cn: "教室", phonetic: "/ˈklæsruːm/", example: { en: "The classroom is big.", cn: "教室很大。" } },
      { word: "subject", pos: "n.", cn: "学科", phonetic: "/ˈsʌbdʒɪkt/", example: { en: "Math is my favorite subject.", cn: "数学是我最喜欢的科目。" } },
      { word: "professor", pos: "n.", cn: "教授", phonetic: "/prəˈfesər/", example: { en: "Professor Li teaches physics.", cn: "李教授教物理。" } },
      { word: "homework", pos: "n.", cn: "家庭作业", phonetic: "/ˈhoʊmwɜːrk/", example: { en: "Do your homework first.", cn: "先做作业。" } },
      { word: "campus", pos: "n.", cn: "校园", phonetic: "/ˈkæmpəs/", example: { en: "The campus is beautiful.", cn: "校园很美。" } },
      { word: "diploma", pos: "n.", cn: "毕业文凭", phonetic: "/dɪˈploʊmə/", level: ["CET6"], example: { en: "He received his diploma.", cn: "他拿到了毕业证书。" } }
    ]
  },
  office: {
    name: "办公室", emoji: "💼", color: "#34495e",
    keywords: ["office", "work", "business", "meeting"],
    words: [
      { word: "desk", pos: "n.", cn: "书桌", phonetic: "/desk/", example: { en: "My desk is messy.", cn: "我的桌子很乱。" } },
      { word: "computer", pos: "n.", cn: "电脑", phonetic: "/kəmˈpjuːtər/", example: { en: "I work on the computer all day.", cn: "我一整天都用电脑。" } },
      { word: "printer", pos: "n.", cn: "打印机", phonetic: "/ˈprɪntər/", example: { en: "The printer is out of paper.", cn: "打印机没纸了。" } },
      { word: "meeting", pos: "n.", cn: "会议", phonetic: "/ˈmiːtɪŋ/", example: { en: "The meeting starts at 2.", cn: "会议2点开始。" } },
      { word: "boss", pos: "n.", cn: "老板；上司", phonetic: "/bɔːs/", example: { en: "My boss is strict.", cn: "我老板很严。" } },
      { word: "colleague", pos: "n.", cn: "同事", phonetic: "/ˈkɑːliːɡ/", example: { en: "My colleagues are friendly.", cn: "我的同事很友好。" } },
      { word: "project", pos: "n.", cn: "项目", phonetic: "/ˈprɑːdʒekt/", example: { en: "This project is important.", cn: "这项目很重要。" } },
      { word: "deadline", pos: "n.", cn: "截止日期", phonetic: "/ˈdedlaɪn/", example: { en: "The deadline is Friday.", cn: "截止日是周五。" } },
      { word: "report", pos: "n.", cn: "报告", phonetic: "/rɪˈpɔːrt/", example: { en: "Submit your report today.", cn: "今天交报告。" } },
      { word: "email", pos: "n.", cn: "电子邮件", phonetic: "/ˈiːmeɪl/", example: { en: "Send me an email.", cn: "给我发邮件。" } },
      { word: "schedule", pos: "n.", cn: "日程", phonetic: "/ˈskedʒuːl/", example: { en: "Check your schedule.", cn: "看看你的日程。" } },
      { word: "salary", pos: "n.", cn: "薪水", phonetic: "/ˈsæləri/", example: { en: "He has a high salary.", cn: "他薪水很高。" } }
    ]
  },
  nature: {
    name: "大自然", emoji: "🌄", color: "#16a085",
    keywords: ["nature", "mountain", "river", "forest", "beach", "landscape"],
    words: [
      { word: "mountain", pos: "n.", cn: "山", phonetic: "/ˈmaʊntn/", example: { en: "The mountain is covered in snow.", cn: "山上覆盖着雪。" } },
      { word: "river", pos: "n.", cn: "河流", phonetic: "/ˈrɪvər/", example: { en: "The river flows to the sea.", cn: "河水流入大海。" } },
      { word: "forest", pos: "n.", cn: "森林", phonetic: "/ˈfɔːrɪst/", example: { en: "We walked through the forest.", cn: "我们穿过森林。" } },
      { word: "ocean", pos: "n.", cn: "海洋", phonetic: "/ˈoʊʃn/", example: { en: "The ocean is vast.", cn: "海洋浩瀚。" } },
      { word: "valley", pos: "n.", cn: "山谷", phonetic: "/ˈvæli/", example: { en: "There's a village in the valley.", cn: "山谷里有个村庄。" } },
      { word: "desert", pos: "n.", cn: "沙漠", phonetic: "/ˈdezərt/", example: { en: "The desert is very dry.", cn: "沙漠非常干燥。" } },
      { word: "lake", pos: "n.", cn: "湖", phonetic: "/leɪk/", example: { en: "The lake is crystal clear.", cn: "湖水清澈。" } },
      { word: "island", pos: "n.", cn: "岛", phonetic: "/ˈaɪlənd/", example: { en: "We spent a week on the island.", cn: "我们在岛上待了一周。" } },
      { word: "beach", pos: "n.", cn: "海滩", phonetic: "/biːtʃ/", example: { en: "I love walking on the beach.", cn: "我喜欢在海滩散步。" } },
      { word: "sunset", pos: "n.", cn: "日落", phonetic: "/ˈsʌnset/", example: { en: "The sunset is beautiful.", cn: "日落很美。" } },
      { word: "meadow", pos: "n.", cn: "草地", phonetic: "/ˈmedoʊ/", level: ["CET6"], example: { en: "Cows graze in the meadow.", cn: "牛在草地上吃草。" } },
      { word: "waterfall", pos: "n.", cn: "瀑布", phonetic: "/ˈwɔːtərfɔːl/", example: { en: "The waterfall is impressive.", cn: "这瀑布很壮观。" } }
    ]
  },
  transport: {
    name: "交通", emoji: "🚗", color: "#d35400",
    keywords: ["traffic", "vehicle", "road", "transport"],
    words: [
      { word: "car", pos: "n.", cn: "汽车", phonetic: "/kɑːr/", example: { en: "He drives a car.", cn: "他开汽车。" } },
      { word: "bus", pos: "n.", cn: "公交车", phonetic: "/bʌs/", example: { en: "Take the bus to school.", cn: "坐公交去学校。" } },
      { word: "train", pos: "n.", cn: "火车", phonetic: "/treɪn/", example: { en: "The train is on time.", cn: "火车准时。" } },
      { word: "bicycle", pos: "n.", cn: "自行车", phonetic: "/ˈbaɪsɪkl/", example: { en: "I ride my bicycle to work.", cn: "我骑车上班。" } },
      { word: "taxi", pos: "n.", cn: "出租车", phonetic: "/ˈtæksi/", example: { en: "Call a taxi, please.", cn: "请叫辆出租车。" } },
      { word: "subway", pos: "n.", cn: "地铁", phonetic: "/ˈsʌbweɪ/", example: { en: "The subway is fast.", cn: "地铁很快。" } },
      { word: "traffic", pos: "n.", cn: "交通", phonetic: "/ˈtræfɪk/", example: { en: "There's a lot of traffic today.", cn: "今天交通很堵。" } },
      { word: "road", pos: "n.", cn: "道路", phonetic: "/roʊd/", example: { en: "The road is bumpy.", cn: "路很颠。" } },
      { word: "bridge", pos: "n.", cn: "桥", phonetic: "/brɪdʒ/", example: { en: "Cross the bridge carefully.", cn: "小心过桥。" } },
      { word: "vehicle", pos: "n.", cn: "车辆", phonetic: "/ˈviːəkl/", level: ["CET6"], example: { en: "All vehicles must stop.", cn: "所有车辆必须停下。" } },
      { word: "driver", pos: "n.", cn: "司机", phonetic: "/ˈdraɪvər/", example: { en: "He's a careful driver.", cn: "他开车很稳。" } },
      { word: "passenger", pos: "n.", cn: "乘客", phonetic: "/ˈpæsɪndʒər/", example: { en: "How many passengers?", cn: "几位乘客？" } },
      { word: "station", pos: "n.", cn: "车站", phonetic: "/ˈsteɪʃn/", example: { en: "The station is crowded.", cn: "车站很挤。" } }
    ]
  },
  sports: {
    name: "运动", emoji: "⚽", color: "#27ae60",
    keywords: ["sports", "game", "football", "basketball", "tennis"],
    words: [
      { word: "football", pos: "n.", cn: "足球", phonetic: "/ˈfʊtbɔːl/", example: { en: "Let's play football.", cn: "我们去踢球吧。" } },
      { word: "basketball", pos: "n.", cn: "篮球", phonetic: "/ˈbæskɪtbɔːl/", example: { en: "He plays basketball well.", cn: "他篮球打得很好。" } },
      { word: "tennis", pos: "n.", cn: "网球", phonetic: "/ˈtenɪs/", example: { en: "Do you play tennis?", cn: "你打网球吗？" } },
      { word: "swimming", pos: "n.", cn: "游泳", phonetic: "/ˈswɪmɪŋ/", example: { en: "Swimming is great exercise.", cn: "游泳是很好的运动。" } },
      { word: "running", pos: "n.", cn: "跑步", phonetic: "/ˈrʌnɪŋ/", example: { en: "I go running every morning.", cn: "我每天早上跑步。" } },
      { word: "training", pos: "n.", cn: "训练", phonetic: "/ˈtreɪnɪŋ/", example: { en: "Training is hard work.", cn: "训练很辛苦。" } },
      { word: "athlete", pos: "n.", cn: "运动员", phonetic: "/ˈæθliːt/", level: ["CET6"], example: { en: "He's a top athlete.", cn: "他是顶级运动员。" } },
      { word: "coach", pos: "n.", cn: "教练", phonetic: "/koʊtʃ/", example: { en: "The coach is strict.", cn: "教练很严格。" } },
      { word: "stadium", pos: "n.", cn: "体育场", phonetic: "/ˈsteɪdiəm/", example: { en: "The stadium is full.", cn: "体育场满了。" } },
      { word: "medal", pos: "n.", cn: "奖牌", phonetic: "/ˈmedl/", example: { en: "She won a gold medal.", cn: "她赢得了金牌。" } },
      { word: "tournament", pos: "n.", cn: "锦标赛", phonetic: "/ˈtʊrnəmənt/", level: ["CET6"], example: { en: "The tournament is in July.", cn: "锦标赛7月举行。" } },
      { word: "champion", pos: "n.", cn: "冠军", phonetic: "/ˈtʃæmpiən/", example: { en: "He's the world champion.", cn: "他是世界冠军。" } }
    ]
  },
  weather: {
    name: "天气", emoji: "🌤️", color: "#3498db",
    keywords: ["weather", "rain", "snow", "sun", "cloud"],
    words: [
      { word: "sunny", pos: "adj.", cn: "晴朗的", phonetic: "/ˈsʌni/", example: { en: "It's sunny today.", cn: "今天晴朗。" } },
      { word: "rainy", pos: "adj.", cn: "下雨的", phonetic: "/ˈreɪni/", example: { en: "It's a rainy day.", cn: "今天是雨天。" } },
      { word: "cloudy", pos: "adj.", cn: "多云的", phonetic: "/ˈklaʊdi/", example: { en: "The sky is cloudy.", cn: "天空多云。" } },
      { word: "windy", pos: "adj.", cn: "有风的", phonetic: "/ˈwɪndi/", example: { en: "It's too windy for a picnic.", cn: "风太大不适合野餐。" } },
      { word: "snowy", pos: "adj.", cn: "下雪的", phonetic: "/ˈsnoʊi/", example: { en: "The mountain is snowy.", cn: "山上白雪皑皑。" } },
      { word: "storm", pos: "n.", cn: "暴风雨", phonetic: "/stɔːrm/", example: { en: "A big storm is coming.", cn: "暴风雨要来了。" } },
      { word: "thunder", pos: "n.", cn: "雷", phonetic: "/ˈθʌndər/", example: { en: "I heard thunder.", cn: "我听到雷声。" } },
      { word: "lightning", pos: "n.", cn: "闪电", phonetic: "/ˈlaɪtnɪŋ/", example: { en: "Lightning struck the tree.", cn: "闪电击中了树。" } },
      { word: "temperature", pos: "n.", cn: "温度", phonetic: "/ˈtemprətʃər/", example: { en: "The temperature is dropping.", cn: "温度在下降。" } },
      { word: "humid", pos: "adj.", cn: "潮湿的", phonetic: "/ˈhjuːmɪd/", level: ["CET6"], example: { en: "It's very humid today.", cn: "今天很潮湿。" } }
    ]
  },
  shopping: {
    name: "购物", emoji: "🛍️", color: "#e67e22",
    keywords: ["shopping", "store", "mall", "buy", "shop"],
    words: [
      { word: "store", pos: "n.", cn: "商店", phonetic: "/stɔːr/", example: { en: "The store opens at 9.", cn: "商店9点开门。" } },
      { word: "customer", pos: "n.", cn: "顾客", phonetic: "/ˈkʌstəmər/", example: { en: "The customer is always right.", cn: "顾客永远是对的。" } },
      { word: "cashier", pos: "n.", cn: "收银员", phonetic: "/kæˈʃɪr/", example: { en: "Pay the cashier, please.", cn: "请到收银台付款。" } },
      { word: "discount", pos: "n.", cn: "折扣", phonetic: "/ˈdɪskaʊnt/", example: { en: "We have a 20% discount today.", cn: "今天打8折。" } },
      { word: "price", pos: "n.", cn: "价格", phonetic: "/praɪs/", example: { en: "What's the price?", cn: "多少钱？" } },
      { word: "sale", pos: "n.", cn: "促销；卖", phonetic: "/seɪl/", example: { en: "The sale is on.", cn: "促销中。" } },
      { word: "receipt", pos: "n.", cn: "收据", phonetic: "/rɪˈsiːt/", example: { en: "Keep your receipt.", cn: "收好您的收据。" } },
      { word: "refund", pos: "n.", cn: "退款", phonetic: "/ˈriːfʌnd/", level: ["CET6"], example: { en: "I'd like a refund.", cn: "我要退款。" } },
      { word: "cart", pos: "n.", cn: "购物车", phonetic: "/kɑːrt/", example: { en: "Get a cart at the entrance.", cn: "入口处取购物车。" } },
      { word: "basket", pos: "n.", cn: "购物篮", phonetic: "/ˈbæskɪt/", example: { en: "I have a basket of fruit.", cn: "我有一篮水果。" } },
      { word: "checkout", pos: "n.", cn: "结账", phonetic: "/ˈtʃekaʊt/", example: { en: "Go to the checkout.", cn: "去结账。" } },
      { word: "purchase", pos: "v./n.", cn: "购买", phonetic: "/ˈpɜːrtʃəs/", level: ["CET6"], example: { en: "Confirm your purchase.", cn: "确认购买。" } }
    ]
  },
  /* ===== v3 新增：租房 / 图书馆 / 银行 / 酒店 ===== */
  rental: {
    name: "租房", emoji: "🏠", color: "#1abc9c",
    keywords: ["apartment", "rent", "house", "lease", "landlord", "tenant"],
    words: [
      { word: "landlord", pos: "n.", cn: "房东", phonetic: "/ˈlændlɔːrd/", example: { en: "My landlord raised the rent.", cn: "我的房东涨了房租。" } },
      { word: "tenant", pos: "n.", cn: "房客", phonetic: "/ˈtenənt/", example: { en: "The tenant signed a one-year lease.", cn: "房客签了一年租约。" } },
      { word: "lease", pos: "n./v.", cn: "租约；出租", phonetic: "/liːs/", level: ["CET6"], example: { en: "We signed a 12-month lease.", cn: "我们签了12个月的租约。" } },
      { word: "deposit", pos: "n.", cn: "押金", phonetic: "/dɪˈpɑːzɪt/", example: { en: "I paid two months' deposit.", cn: "我付了两个月的押金。" } },
      { word: "rent", pos: "n./v.", cn: "租金；租用", phonetic: "/rent/", example: { en: "The rent is due on the 1st.", cn: "房租1号到期。" } },
      { word: "apartment", pos: "n.", cn: "公寓", phonetic: "/əˈpɑːrtmənt/", example: { en: "I share an apartment with two friends.", cn: "我和两个朋友合租一套公寓。" } },
      { word: "furnished", pos: "adj.", cn: "带家具的", phonetic: "/ˈfɜːrnɪʃt/", level: ["CET6"], example: { en: "The apartment is fully furnished.", cn: "这套公寓全配家具。" } },
      { word: "utilities", pos: "n.", cn: "水电气等费用", phonetic: "/juːˈtɪlətiz/", level: ["IELTS"], example: { en: "Utilities are not included.", cn: "水电费不包含。" } },
      { word: "suburb", pos: "n.", cn: "郊区", phonetic: "/ˈsʌbɜːrb/", level: ["CET6"], example: { en: "They live in the suburbs.", cn: "他们住在郊区。" } },
      { word: "downtown", pos: "n./adj.", cn: "市中心", phonetic: "/ˌdaʊnˈtaʊn/", example: { en: "Her office is downtown.", cn: "她的办公室在市中心。" } },
      { word: "spacious", pos: "adj.", cn: "宽敞的", phonetic: "/ˈspeɪʃəs/", level: ["IELTS"], example: { en: "The room is bright and spacious.", cn: "房间明亮宽敞。" } },
      { word: "maintenance", pos: "n.", cn: "维护；维修", phonetic: "/ˈmeɪntənəns/", level: ["CET6"], example: { en: "The landlord handles all maintenance.", cn: "房东负责所有维修。" } },
      { word: "contract", pos: "n.", cn: "合同", phonetic: "/ˈkɑːntrækt/", level: ["CET4"], example: { en: "Read the contract carefully.", cn: "仔细看合同。" } }
    ]
  },
  library: {
    name: "图书馆", emoji: "📚", color: "#3498db",
    keywords: ["library", "book", "study", "borrow", "reading"],
    words: [
      { word: "library", pos: "n.", cn: "图书馆", phonetic: "/ˈlaɪbreri/", example: { en: "I study at the library every day.", cn: "我每天在图书馆学习。" } },
      { word: "catalogue", pos: "n.", cn: "目录", phonetic: "/ˈkætəlɔːɡ/", level: ["CET6"], example: { en: "Search the online catalogue.", cn: "搜索在线目录。" } },
      { word: "borrow", pos: "v.", cn: "借（书）", phonetic: "/ˈbɑːroʊ/", example: { en: "Can I borrow this book?", cn: "我能借这本书吗？" } },
      { word: "renew", pos: "v.", cn: "续借", phonetic: "/rɪˈnuː/", level: ["CET6"], example: { en: "I need to renew my books.", cn: "我得续借这些书。" } },
      { word: "overdue", pos: "adj.", cn: "逾期的", phonetic: "/ˌoʊvərˈduː/", level: ["IELTS"], example: { en: "The book is overdue.", cn: "书逾期了。" } },
      { word: "shelves", pos: "n.", cn: "书架", phonetic: "/ʃelvz/", example: { en: "The shelves are full of books.", cn: "书架上摆满了书。" } },
      { word: "librarian", pos: "n.", cn: "图书管理员", phonetic: "/laɪˈbreriən/", example: { en: "Ask the librarian for help.", cn: "向图书管理员求助。" } },
      { word: "reference", pos: "n.", cn: "参考", phonetic: "/ˈrefrəns/", level: ["CET4"], example: { en: "This is a reference book.", cn: "这是本参考书。" } },
      { word: "periodical", pos: "n.", cn: "期刊", phonetic: "/ˌpɪriˈɑːdɪkl/", level: ["IELTS"], example: { en: "Periodicals are on the second floor.", cn: "期刊在二楼。" } },
      { word: "stack", pos: "n.", cn: "书库", phonetic: "/stæk/", example: { en: "The stacks are on level 3.", cn: "书库在三楼。" } },
      { word: "fine", pos: "n.", cn: "罚金", phonetic: "/faɪn/", example: { en: "I paid a $5 late fine.", cn: "我付了5美元逾期罚金。" } },
      { word: "membership", pos: "n.", cn: "会员资格", phonetic: "/ˈmembərʃɪp/", level: ["CET6"], example: { en: "Library membership is free.", cn: "图书馆会员免费。" } },
      { word: "study_room", pos: "n.", cn: "自习室", phonetic: "/ˈstʌdi ruːm/", example: { en: "The study room is quiet.", cn: "自习室很安静。" } }
    ]
  },
  bank: {
    name: "银行", emoji: "🏦", color: "#16a085",
    keywords: ["bank", "money", "account", "cash", "finance"],
    words: [
      { word: "account", pos: "n.", cn: "账户", phonetic: "/əˈkaʊnt/", example: { en: "I opened a savings account.", cn: "我开了个储蓄账户。" } },
      { word: "deposit", pos: "v./n.", cn: "存款；押金", phonetic: "/dɪˈpɑːzɪt/", example: { en: "I deposited $500 yesterday.", cn: "我昨天存了500美元。" } },
      { word: "withdraw", pos: "v.", cn: "取款", phonetic: "/wɪðˈdrɔː/", level: ["CET6"], example: { en: "I withdrew cash from the ATM.", cn: "我从ATM取了现金。" } },
      { word: "transfer", pos: "v./n.", cn: "转账", phonetic: "/trænsˈfɜːr/", level: ["CET4"], example: { en: "I transferred money online.", cn: "我在线转了账。" } },
      { word: "balance", pos: "n.", cn: "余额", phonetic: "/ˈbæləns/", example: { en: "Check your account balance.", cn: "查一下账户余额。" } },
      { word: "interest", pos: "n.", cn: "利息", phonetic: "/ˈɪntrəst/", example: { en: "The interest rate is low.", cn: "利率很低。" } },
      { word: "loan", pos: "n./v.", cn: "贷款；借出", phonetic: "/loʊn/", level: ["CET4"], example: { en: "I applied for a bank loan.", cn: "我申请了银行贷款。" } },
      { word: "mortgage", pos: "n.", cn: "房贷", phonetic: "/ˈmɔːrɡɪdʒ/", level: ["CET6"], example: { en: "They pay a monthly mortgage.", cn: "他们每月还房贷。" } },
      { word: "currency", pos: "n.", cn: "货币", phonetic: "/ˈkɜːrənsi/", level: ["CET6"], example: { en: "What's the local currency?", cn: "当地货币是什么？" } },
      { word: "exchange", pos: "v./n.", cn: "兑换", phonetic: "/ɪksˈtʃeɪndʒ/", example: { en: "I exchanged dollars for euros.", cn: "我把美元换成了欧元。" } },
      { word: "teller", pos: "n.", cn: "柜员", phonetic: "/ˈtelər/", example: { en: "Ask the teller at counter 3.", cn: "去3号柜台找柜员。" } },
      { word: "receipt", pos: "n.", cn: "收据", phonetic: "/rɪˈsiːt/", example: { en: "Keep your receipt safe.", cn: "收好您的收据。" } },
      { word: "savings", pos: "n.", cn: "存款", phonetic: "/ˈseɪvɪŋz/", example: { en: "My savings are in this account.", cn: "我的存款在这个账户里。" } }
    ]
  },
  hotel: {
    name: "酒店", emoji: "🏨", color: "#9b59b6",
    keywords: ["hotel", "room", "booking", "check-in", "guest"],
    words: [
      { word: "reservation", pos: "n.", cn: "预订", phonetic: "/ˌrezərˈveɪʃn/", level: ["CET6"], example: { en: "I have a reservation under Smith.", cn: "我有一个Smith名下的预订。" } },
      { word: "reception", pos: "n.", cn: "前台", phonetic: "/rɪˈsepʃn/", level: ["CET6"], example: { en: "Check in at reception.", cn: "在前台办理入住。" } },
      { word: "lobby", pos: "n.", cn: "大堂", phonetic: "/ˈlɑːbi/", example: { en: "Wait for me in the lobby.", cn: "在酒店大堂等我。" } },
      { word: "suite", pos: "n.", cn: "套房", phonetic: "/swiːt/", level: ["IELTS"], example: { en: "We booked a honeymoon suite.", cn: "我们订了一间蜜月套房。" } },
      { word: "amenities", pos: "n.", cn: "便利设施", phonetic: "/əˈmiːnətiz/", level: ["TOEFL"], example: { en: "The hotel has great amenities.", cn: "这家酒店设施很棒。" } },
      { word: "checkout", pos: "n.", cn: "退房", phonetic: "/ˈtʃekaʊt/", example: { en: "Checkout is at 11 AM.", cn: "11点退房。" } },
      { word: "concierge", pos: "n.", cn: "礼宾员", phonetic: "/ˌkɑːnsiˈerʒ/", level: ["TOEFL"], example: { en: "Ask the concierge for tips.", cn: "向礼宾员打听建议。" } },
      { word: "accommodation", pos: "n.", cn: "住宿", phonetic: "/əˌkɑːməˈdeɪʃn/", level: ["IELTS"], example: { en: "Accommodation is included.", cn: "住宿包含在内。" } },
      { word: "voucher", pos: "n.", cn: "代金券", phonetic: "/ˈvaʊtʃər/", level: ["CET6"], example: { en: "I have a meal voucher.", cn: "我有一张餐券。" } },
      { word: "wake-up call", pos: "n.", cn: "叫早电话", phonetic: "/ˈweɪk ʌp kɔːl/", example: { en: "I need a 6 AM wake-up call.", cn: "我需要6点的叫早电话。" } },
      { word: "receptionist", pos: "n.", cn: "前台接待员", phonetic: "/rɪˈsepʃənɪst/", example: { en: "The receptionist greeted me.", cn: "前台接待员向我问好。" } },
      { word: "view", pos: "n.", cn: "景色", phonetic: "/vjuː/", example: { en: "Our room has a sea view.", cn: "我们的房间是海景房。" } },
      { word: "single", pos: "adj./n.", cn: "单人间", phonetic: "/ˈsɪŋɡl/", example: { en: "I'd like a single room.", cn: "我想要一间单人间。" } }
    ]
  }
};

/* ============================================================
   📚 主题词包（雅思写作 10 大话题）
   每个词必带：collocations(2-3 词伙) + synonyms(2-3 同义替换)
   部分词带：additional_meaning(熟词僻义)
   ============================================================ */
const THEMES = {
  education: {
    name: "教育", emoji: "🎓", color: "#3498db",
    desc: "雅思写作教育类话题核心词汇",
    words: [
      { word: "education", pos: "n.", cn: "教育", phonetic: "/ˌedʒuˈkeɪʃn/", level: ["IELTS"], example: { en: "Education shapes the future.", cn: "教育塑造未来。" },
        collocations: ["receive education", "access to education", "compulsory education", "holistic education"],
        synonyms: [{word:"schooling", pos:"n.", cn:"学校教育"}, {word:"tuition", pos:"n.", cn:"教学/学费"}, {word:"instruction", pos:"n.", cn:"指导"}]
      },
      { word: "academic", pos: "adj.", cn: "学术的", phonetic: "/ˌækəˈdemɪk/", level: ["CET6", "IELTS"], example: { en: "She has strong academic performance.", cn: "她学业表现优秀。" },
        breakdown: "academ(学院) + -ic",
        collocations: ["academic performance", "academic background", "academic research", "academic year"],
        synonyms: [{word:"scholarly", pos:"adj.", cn:"学术的/学者气的"}, {word:"educational", pos:"adj.", cn:"教育的"}]
      },
      { word: "curriculum", pos: "n.", cn: "课程", phonetic: "/kəˈrɪkjələm/", level: ["IELTS", "TOEFL"], example: { en: "The curriculum needs reform.", cn: "课程需要改革。" },
        breakdown: "curr(跑) + -iculum → 学习的流程",
        collocations: ["curriculum design", "core curriculum", "revise the curriculum", "diversified curriculum"],
        synonyms: [{word:"syllabus", pos:"n.", cn:"教学大纲"}, {word:"course", pos:"n.", cn:"课程"}]
      },
      { word: "scholarship", pos: "n.", cn: "奖学金", phonetic: "/ˈskɑːlərʃɪp/", level: ["CET6"], example: { en: "She won a full scholarship.", cn: "她获得了全额奖学金。" },
        breakdown: "scholar(学者) + -ship",
        collocations: ["award a scholarship", "merit-based scholarship", "apply for a scholarship"],
        synonyms: [{word:"grant", pos:"n.", cn:"助学金/拨款"}, {word:"fellowship", pos:"n.", cn:"研究奖金"}]
      },
      { word: "graduate", pos: "v./n.", cn: "毕业；毕业生", phonetic: "/ˈɡrædʒuət/", level: ["CET4"], example: { en: "He graduated from Peking University.", cn: "他毕业于北大。" },
        breakdown: "grad(级) + -uate",
        collocations: ["graduate from", "fresh graduate", "graduate school", "graduate program"],
        synonyms: [{word:"alumnus", pos:"n.", cn:"校友"}, {word:"finishing student", pos:"n.", cn:"应届生"}]
      },
      { word: "literacy", pos: "n.", cn: "读写能力", phonetic: "/ˈlɪtərəsi/", level: ["IELTS"], example: { en: "Digital literacy is essential today.", cn: "如今数字素养很关键。" },
        breakdown: "liter(文字) + -acy",
        collocations: ["digital literacy", "media literacy", "literacy rate", "functional literacy"],
        synonyms: [{word:"reading ability", pos:"n.", cn:"阅读能力"}],
        additional_meaning: "常见义=读写能力；僻义=对某领域的了解（如 computer literacy = 电脑基础）"
      },
      { word: "compulsory", pos: "adj.", cn: "强制的；义务的", phonetic: "/kəmˈpʌlsəri/", level: ["IELTS"], example: { en: "Education is compulsory for children.", cn: "儿童义务教育。" },
        breakdown: "com-(加强) + puls(推) + -ory → 推着去做",
        collocations: ["compulsory education", "compulsory course", "compulsory retirement"],
        synonyms: [{word:"mandatory", pos:"adj.", cn:"强制的"}, {word:"required", pos:"adj.", cn:"必需的"}, {word:"obligatory", pos:"adj.", cn:"义务的"}]
      },
      { word: "dropout", pos: "n.", cn: "辍学者", phonetic: "/ˈdrɑːpaʊt/", level: ["IELTS"], example: { en: "High school dropout rates are dropping.", cn: "高中辍学率在下降。" },
        breakdown: "drop(掉) + out(出)",
        collocations: ["school dropout", "high school dropout", "dropout rate"],
        synonyms: [{word:"school-leaver", pos:"n.", cn:"辍学者"}]
      },
      { word: "pedagogy", pos: "n.", cn: "教育学；教学法", phonetic: "/ˈpedəɡɑːdʒi/", level: ["TOEFL"], example: { en: "Modern pedagogy focuses on critical thinking.", cn: "现代教学法注重批判性思维。" },
        breakdown: "ped(儿童) + agogy(引导) → 引导儿童",
        collocations: ["modern pedagogy", "pedagogy method", "innovative pedagogy"],
        synonyms: [{word:"teaching method", pos:"n.", cn:"教学方法"}, {word:"education theory", pos:"n.", cn:"教育理论"}]
      },
      { word: "tutorial", pos: "n.", cn: "辅导课", phonetic: "/tuːˈtɔːriəl/", level: ["CET6"], example: { en: "I have a tutorial on Friday.", cn: "我周五有辅导课。" },
        collocations: ["tutorial session", "one-on-one tutorial", "attend a tutorial"],
        synonyms: [{word:"seminar", pos:"n.", cn:"研讨课"}, {word:"workshop", pos:"n.", cn:"研讨会"}]
      },
      { word: "semester", pos: "n.", cn: "学期", phonetic: "/sɪˈmestər/", level: ["CET6"], example: { en: "The semester starts in September.", cn: "学期9月开始。" },
        collocations: ["fall semester", "spring semester", "semester break"],
        synonyms: [{word:"term", pos:"n.", cn:"学期/期限"}, {word:"session", pos:"n.", cn:"学期"}]
      },
      { word: "literature", pos: "n.", cn: "文学", phonetic: "/ˈlɪtərətʃər/", level: ["CET4"], example: { en: "She majors in English literature.", cn: "她主修英国文学。" },
        collocations: ["English literature", "world literature", "contemporary literature"],
        synonyms: [{word:"writings", pos:"n.", cn:"作品"}, {word:"fiction", pos:"n.", cn:"小说"}],
        additional_meaning: "常见义=文学；僻义=文献/资料（medical literature = 医学文献）"
      },
      { word: "vocational", pos: "adj.", cn: "职业的", phonetic: "/voʊˈkeɪʃənl/", level: ["IELTS"], example: { en: "Vocational training helps people get jobs.", cn: "职业培训帮人们就业。" },
        collocations: ["vocational training", "vocational education", "vocational school"],
        synonyms: [{word:"professional", pos:"adj.", cn:"职业的"}, {word:"occupational", pos:"adj.", cn:"职业的"}]
      },
      { word: "discipline", pos: "n.", cn: "学科；纪律", phonetic: "/ˈdɪsəplɪn/", level: ["CET4"], example: { en: "Math is a hard discipline.", cn: "数学是门难学科。" },
        collocations: ["academic discipline", "cross-discipline", "strict discipline"],
        synonyms: [{word:"subject", pos:"n.", cn:"学科"}, {word:"field", pos:"n.", cn:"领域"}],
        additional_meaning: "常见义=纪律；僻义=学科（academic discipline = 学术学科）"
      }
    ]
  },
  environment: {
    name: "环境", emoji: "🌍", color: "#27ae60",
    desc: "环境/气候类话题核心词汇",
    words: [
      { word: "environment", pos: "n.", cn: "环境", phonetic: "/ɪnˈvaɪrənmənt/", level: ["CET4", "IELTS"], example: { en: "We must protect the environment.", cn: "我们必须保护环境。" },
        collocations: ["protect the environment", "harm the environment", "natural environment", "working environment"],
        synonyms: [{word:"surroundings", pos:"n.", cn:"周围环境"}, {word:"setting", pos:"n.", cn:"环境/背景"}]
      },
      { word: "pollution", pos: "n.", cn: "污染", phonetic: "/pəˈluːʃn/", level: ["CET4"], example: { en: "Air pollution is a serious issue.", cn: "空气污染是个严重问题。" },
        collocations: ["air pollution", "water pollution", "reduce pollution", "combat pollution"],
        synonyms: [{word:"contamination", pos:"n.", cn:"污染/玷污"}]
      },
      { word: "sustainable", pos: "adj.", cn: "可持续的", phonetic: "/səˈsteɪnəbl/", level: ["IELTS", "TOEFL"], example: { en: "We need sustainable development.", cn: "我们需要可持续发展。" },
        breakdown: "sus-(上) + tain(持) + -able",
        collocations: ["sustainable development", "sustainable growth", "sustainable energy"],
        synonyms: [{word:"renewable", pos:"adj.", cn:"可再生的"}, {word:"eco-friendly", pos:"adj.", cn:"环保的"}]
      },
      { word: "emission", pos: "n.", cn: "排放", phonetic: "/iˈmɪʃn/", level: ["IELTS", "TOEFL"], example: { en: "Reduce carbon emissions.", cn: "减少碳排放。" },
        collocations: ["carbon emission", "reduce emissions", "zero emissions", "vehicle emissions"],
        synonyms: [{word:"discharge", pos:"n.", cn:"排放/释放"}]
      },
      { word: "biodiversity", pos: "n.", cn: "生物多样性", phonetic: "/ˌbaɪoʊdaɪˈvɜːrsəti/", level: ["IELTS", "TOEFL"], example: { en: "Deforestation threatens biodiversity.", cn: "砍伐森林威胁生物多样性。" },
        collocations: ["protect biodiversity", "loss of biodiversity", "rich biodiversity"],
        synonyms: [{word:"ecological variety", pos:"n.", cn:"生态多样性"}]
      },
      { word: "ecosystem", pos: "n.", cn: "生态系统", phonetic: "/ˈiːkoʊsɪstəm/", level: ["IELTS", "TOEFL"], example: { en: "Coral reefs are rich ecosystems.", cn: "珊瑚礁是丰富的生态系统。" },
        breakdown: "eco(生态) + system(系统)",
        collocations: ["marine ecosystem", "fragile ecosystem", "ecosystem balance"],
        synonyms: [{word:"habitat", pos:"n.", cn:"栖息地"}]
      },
      { word: "deforestation", pos: "n.", cn: "砍伐森林", phonetic: "/diːˌfɔːrɪˈsteɪʃn/", level: ["IELTS", "TOEFL"], example: { en: "Deforestation harms wildlife.", cn: "砍伐森林伤害野生动物。" },
        breakdown: "de-(去掉) + forest(森林) + -ation",
        collocations: ["combat deforestation", "rapid deforestation", "tropical deforestation"],
        synonyms: [{word:"logging", pos:"n.", cn:"伐木"}]
      },
      { word: "conservation", pos: "n.", cn: "保护", phonetic: "/ˌkɑːnsərˈveɪʃn/", level: ["CET6", "IELTS"], example: { en: "Wildlife conservation is important.", cn: "野生动物保护很重要。" },
        breakdown: "con-(加强) + serv(保持) + -ation",
        collocations: ["wildlife conservation", "energy conservation", "conservation efforts"],
        synonyms: [{word:"preservation", pos:"n.", cn:"保护/保存"}, {word:"protection", pos:"n.", cn:"保护"}]
      },
      { word: "renewable", pos: "adj.", cn: "可再生的", phonetic: "/rɪˈnuːəbl/", level: ["IELTS"], example: { en: "Solar energy is renewable.", cn: "太阳能是可再生的。" },
        breakdown: "re-(再) + new(新) + -able",
        collocations: ["renewable energy", "renewable resources", "renewable fuel"],
        synonyms: [{word:"sustainable", pos:"adj.", cn:"可持续的"}]
      },
      { word: "carbon", pos: "n.", cn: "碳", phonetic: "/ˈkɑːrbən/", level: ["CET6"], example: { en: "Reduce your carbon footprint.", cn: "减少你的碳足迹。" },
        collocations: ["carbon footprint", "carbon emission", "low-carbon", "carbon neutral"],
        synonyms: [{word:"carbon dioxide", pos:"n.", cn:"二氧化碳(CO2)"}]
      },
      { word: "climate", pos: "n.", cn: "气候", phonetic: "/ˈklaɪmət/", level: ["CET4"], example: { en: "Climate change affects everyone.", cn: "气候变化影响每个人。" },
        collocations: ["climate change", "global climate", "climate action"],
        synonyms: [{word:"weather", pos:"n.", cn:"天气"}]
      },
      { word: "habitat", pos: "n.", cn: "栖息地", phonetic: "/ˈhæbɪtæt/", level: ["IELTS"], example: { en: "We must protect wildlife habitats.", cn: "我们必须保护野生动物栖息地。" },
        breakdown: "habit(住) + -at",
        collocations: ["natural habitat", "wildlife habitat", "habitat destruction"],
        synonyms: [{word:"environment", pos:"n.", cn:"环境"}, {word:"home", pos:"n.", cn:"家/栖息地"}]
      },
      { word: "ecological", pos: "adj.", cn: "生态的", phonetic: "/ˌiːkəˈlɑːdʒɪkl/", level: ["IELTS", "TOEFL"], example: { en: "The dam caused ecological damage.", cn: "大坝造成了生态破坏。" },
        collocations: ["ecological damage", "ecological balance", "ecological system"],
        synonyms: [{word:"environmental", pos:"adj.", cn:"环境的"}]
      }
    ]
  },
  technology: {
    name: "科技", emoji: "💻", color: "#2980b9",
    desc: "科技/数字化话题核心词汇",
    words: [
      { word: "technology", pos: "n.", cn: "技术", phonetic: "/tekˈnɑːlədʒi/", level: ["CET4"], example: { en: "Technology changes our lives.", cn: "科技改变生活。" },
        collocations: ["information technology", "advanced technology", "adopt technology", "leverage technology"],
        synonyms: [{word:"tech", pos:"n.", cn:"技术(缩写)"}, {word:"innovation", pos:"n.", cn:"创新"}]
      },
      { word: "innovation", pos: "n.", cn: "创新", phonetic: "/ˌɪnəˈveɪʃn/", level: ["IELTS", "TOEFL"], example: { en: "Innovation drives progress.", cn: "创新推动进步。" },
        collocations: ["technological innovation", "foster innovation", "drive innovation"],
        synonyms: [{word:"novelty", pos:"n.", cn:"新颖/新鲜事物"}, {word:"invention", pos:"n.", cn:"发明"}]
      },
      { word: "artificial", pos: "adj.", cn: "人工的；人造的", phonetic: "/ˌɑːrtɪˈfɪʃl/", level: ["CET6", "IELTS"], example: { en: "Artificial intelligence is changing the world.", cn: "人工智能正在改变世界。" },
        collocations: ["artificial intelligence", "artificial selection"],
        synonyms: [{word:"synthetic", pos:"adj.", cn:"合成的"}, {word:"man-made", pos:"adj.", cn:"人造的"}]
      },
      { word: "automation", pos: "n.", cn: "自动化", phonetic: "/ˌɔːtəˈmeɪʃn/", level: ["IELTS"], example: { en: "Automation replaces manual labor.", cn: "自动化取代体力劳动。" },
        collocations: ["industrial automation", "automation system", "automation technology"],
        synonyms: [{word:"mechanization", pos:"n.", cn:"机械化"}]
      },
      { word: "algorithm", pos: "n.", cn: "算法", phonetic: "/ˈælɡərɪðəm/", level: ["IELTS", "TOEFL"], example: { en: "Algorithms decide what we see online.", cn: "算法决定我们在网上看到什么。" },
        collocations: ["machine learning algorithm", "search algorithm", "design an algorithm"],
        synonyms: [{word:"procedure", pos:"n.", cn:"程序/步骤"}]
      },
      { word: "virtual", pos: "adj.", cn: "虚拟的", phonetic: "/ˈvɜːrtʃuəl/", level: ["CET6", "IELTS"], example: { en: "Virtual reality is becoming popular.", cn: "虚拟现实越来越流行。" },
        collocations: ["virtual reality", "virtual meeting", "virtual world"],
        synonyms: [{word:"digital", pos:"adj.", cn:"数字的"}, {word:"online", pos:"adj.", cn:"在线的"}]
      },
      { word: "digital", pos: "adj.", cn: "数字的", phonetic: "/ˈdɪdʒɪtl/", level: ["CET4", "IELTS"], example: { en: "We live in a digital age.", cn: "我们生活在数字时代。" },
        collocations: ["digital age", "digital divide", "digital transformation"],
        synonyms: [{word:"electronic", pos:"adj.", cn:"电子的"}, {word:"online", pos:"adj.", cn:"在线的"}]
      },
      { word: "breakthrough", pos: "n.", cn: "突破", phonetic: "/ˈbreɪkθruː/", level: ["CET6", "IELTS"], example: { en: "This is a scientific breakthrough.", cn: "这是科学突破。" },
        breakdown: "break(破) + through(穿过)",
        collocations: ["major breakthrough", "scientific breakthrough", "make a breakthrough"],
        synonyms: [{word:"advancement", pos:"n.", cn:"进步"}, {word:"innovation", pos:"n.", cn:"创新"}]
      },
      { word: "obsolete", pos: "adj.", cn: "过时的；废弃的", phonetic: "/ˌɑːbsəˈliːt/", level: ["IELTS", "TOEFL"], example: { en: "These phones are obsolete.", cn: "这些手机已经过时了。" },
        collocations: ["become obsolete", "obsolete technology", "render obsolete"],
        synonyms: [{word:"outdated", pos:"adj.", cn:"过时的"}, {word:"outdated", pos:"adj.", cn:"落伍的"}]
      },
      { word: "cyber", pos: "adj.", cn: "网络的", phonetic: "/ˈsaɪbər/", level: ["IELTS"], example: { en: "Cyber security is critical.", cn: "网络安全至关重要。" },
        collocations: ["cyber security", "cyber attack", "cyber crime"],
        synonyms: [{word:"online", pos:"adj.", cn:"在线的"}]
      },
      { word: "sophisticated", pos: "adj.", cn: "复杂的；精密的", phonetic: "/səˈfɪstɪkeɪtɪd/", level: ["CET6", "IELTS"], example: { en: "This is sophisticated equipment.", cn: "这是精密设备。" },
        collocations: ["sophisticated technology", "sophisticated system"],
        synonyms: [{word:"advanced", pos:"adj.", cn:"先进的"}, {word:"complex", pos:"adj.", cn:"复杂的"}]
      },
      { word: "data", pos: "n.", cn: "数据", phonetic: "/ˈdeɪtə/", level: ["CET4"], example: { en: "We collect user data.", cn: "我们收集用户数据。" },
        collocations: ["data analysis", "big data", "data privacy", "collect data"],
        synonyms: [{word:"information", pos:"n.", cn:"信息"}]
      }
    ]
  },
  health: {
    name: "健康", emoji: "🏥", color: "#e74c3c",
    desc: "健康/医疗类话题核心词汇",
    words: [
      { word: "health", pos: "n.", cn: "健康", phonetic: "/helθ/", level: ["CET4"], example: { en: "Health is more important than wealth.", cn: "健康比财富更重要。" },
        collocations: ["public health", "mental health", "maintain health", "health condition"],
        synonyms: [{word:"wellness", pos:"n.", cn:"健康/安康"}]
      },
      { word: "epidemic", pos: "n./adj.", cn: "流行病；流行的", phonetic: "/ˌepɪˈdemɪk/", level: ["IELTS", "TOEFL"], example: { en: "The epidemic spread quickly.", cn: "疫情迅速蔓延。" },
        breakdown: "epi-(在...中) + dem(人) + -ic",
        collocations: ["epidemic prevention", "epidemic outbreak", "global epidemic"],
        synonyms: [{word:"pandemic", pos:"n.", cn:"大流行"}, {word:"outbreak", pos:"n.", cn:"爆发"}]
      },
      { word: "vaccine", pos: "n.", cn: "疫苗", phonetic: "/vækˈsiːn/", level: ["CET6", "IELTS"], example: { en: "The vaccine is safe.", cn: "这疫苗安全。" },
        collocations: ["develop a vaccine", "flu vaccine", "vaccine rollout"],
        synonyms: [{word:"immunization", pos:"n.", cn:"免疫接种"}]
      },
      { word: "immune", pos: "adj.", cn: "免疫的", phonetic: "/ɪˈmjuːn/", level: ["IELTS", "TOEFL"], example: { en: "A healthy diet boosts the immune system.", cn: "健康饮食增强免疫系统。" },
        collocations: ["immune system", "immune response", "immune to"],
        synonyms: [{word:"resistant", pos:"adj.", cn:"抵抗的"}]
      },
      { word: "chronic", pos: "adj.", cn: "慢性的", phonetic: "/ˈkrɑːnɪk/", level: ["IELTS", "TOEFL"], example: { en: "He has chronic back pain.", cn: "他有慢性背痛。" },
        collocations: ["chronic disease", "chronic illness", "chronic pain"],
        synonyms: [{word:"persistent", pos:"adj.", cn:"持续的"}, {word:"long-term", pos:"adj.", cn:"长期的"}]
      },
      { word: "therapy", pos: "n.", cn: "治疗；疗法", phonetic: "/ˈθerəpi/", level: ["CET6", "IELTS"], example: { en: "She is in physical therapy.", cn: "她在做理疗。" },
        collocations: ["physical therapy", "speech therapy", "undergo therapy"],
        synonyms: [{word:"treatment", pos:"n.", cn:"治疗"}]
      },
      { word: "nutrition", pos: "n.", cn: "营养", phonetic: "/nuːˈtrɪʃn/", level: ["IELTS"], example: { en: "Good nutrition is vital.", cn: "良好营养至关重要。" },
        collocations: ["good nutrition", "poor nutrition", "balanced nutrition"],
        synonyms: [{word:"diet", pos:"n.", cn:"饮食"}]
      },
      { word: "obesity", pos: "n.", cn: "肥胖", phonetic: "/oʊˈbiːsəti/", level: ["IELTS", "TOEFL"], example: { en: "Obesity is a growing problem.", cn: "肥胖问题日益严重。" },
        collocations: ["childhood obesity", "combat obesity", "obesity rate"],
        synonyms: [{word:"overweight", pos:"n.", cn:"超重"}]
      },
      { word: "mental", pos: "adj.", cn: "心理的；精神的", phonetic: "/ˈmentl/", level: ["CET4"], example: { en: "Mental health matters.", cn: "心理健康很重要。" },
        collocations: ["mental health", "mental illness", "mental pressure"],
        synonyms: [{word:"psychological", pos:"adj.", cn:"心理的"}]
      },
      { word: "fitness", pos: "n.", cn: "健康；健身", phonetic: "/ˈfɪtnəs/", level: ["CET4"], example: { en: "Fitness is a lifestyle.", cn: "健身是一种生活方式。" },
        collocations: ["physical fitness", "fitness center", "maintain fitness"],
        synonyms: [{word:"health", pos:"n.", cn:"健康"}]
      },
      { word: "well-being", pos: "n.", cn: "幸福；安康", phonetic: "/ˌwel ˈbiːɪŋ/", level: ["IELTS", "TOEFL"], example: { en: "Yoga improves well-being.", cn: "瑜伽促进健康。" },
        collocations: ["mental well-being", "physical well-being", "sense of well-being"],
        synonyms: [{word:"welfare", pos:"n.", cn:"幸福/福利"}]
      },
      { word: "rehabilitation", pos: "n.", cn: "康复", phonetic: "/ˌriːəˌbɪlɪˈteɪʃn/", level: ["IELTS", "TOEFL"], example: { en: "He's in rehabilitation after the surgery.", cn: "术后他在康复中。" },
        breakdown: "re-(再) + habil(能力) + -itation → 恢复能力",
        collocations: ["rehabilitation program", "physical rehabilitation"],
        synonyms: [{word:"recovery", pos:"n.", cn:"恢复"}]
      }
    ]
  },
  society: {
    name: "社会文化", emoji: "🏘️", color: "#8e44ad",
    desc: "社会/文化/家庭话题核心词汇",
    words: [
      { word: "community", pos: "n.", cn: "社区；社会", phonetic: "/kəˈmjuːnəti/", level: ["CET4"], example: { en: "We live in a small community.", cn: "我们住在一个小社区。" },
        collocations: ["local community", "sense of community", "community service"],
        synonyms: [{word:"society", pos:"n.", cn:"社会"}, {word:"neighborhood", pos:"n.", cn:"社区/邻里"}]
      },
      { word: "inequality", pos: "n.", cn: "不平等", phonetic: "/ˌɪnɪˈkwɑːləti/", level: ["IELTS", "TOEFL"], example: { en: "Wealth inequality is growing.", cn: "贫富差距在扩大。" },
        collocations: ["social inequality", "income inequality", "reduce inequality"],
        synonyms: [{word:"disparity", pos:"n.", cn:"差异/悬殊"}, {word:"gap", pos:"n.", cn:"差距"}]
      },
      { word: "poverty", pos: "n.", cn: "贫困", phonetic: "/ˈpɑːvərti/", level: ["CET6", "IELTS"], example: { en: "Many children live in poverty.", cn: "很多孩子生活在贫困中。" },
        collocations: ["poverty line", "alleviate poverty", "poverty rate"],
        synonyms: [{word:"hardship", pos:"n.", cn:"困苦"}, {word:"deprivation", pos:"n.", cn:"匮乏"}]
      },
      { word: "welfare", pos: "n.", cn: "福利；幸福", phonetic: "/ˈwelfeər/", level: ["CET6", "IELTS"], example: { en: "Child welfare is a priority.", cn: "儿童福利是优先事项。" },
        collocations: ["welfare system", "social welfare", "public welfare"],
        synonyms: [{word:"well-being", pos:"n.", cn:"安康"}]
      },
      { word: "urbanization", pos: "n.", cn: "城市化", phonetic: "/ˌɜːrbənəˈzeɪʃn/", level: ["IELTS", "TOEFL"], example: { en: "Rapid urbanization strains resources.", cn: "快速城市化让资源吃紧。" },
        breakdown: "urban(城市) + -ization",
        collocations: ["rapid urbanization", "urbanization process"],
        synonyms: [{word:"city growth", pos:"n.", cn:"城市发展"}]
      },
      { word: "migration", pos: "n.", cn: "移民；迁徙", phonetic: "/maɪˈɡreɪʃn/", level: ["IELTS", "TOEFL"], example: { en: "Rural migration is increasing.", cn: "农村人口迁移在增加。" },
        collocations: ["mass migration", "rural migration", "migration pattern"],
        synonyms: [{word:"immigration", pos:"n.", cn:"移居入境"}]
      },
      { word: "diversity", pos: "n.", cn: "多样性", phonetic: "/daɪˈvɜːrsəti/", level: ["CET6", "IELTS"], example: { en: "We celebrate cultural diversity.", cn: "我们庆祝文化多样性。" },
        collocations: ["cultural diversity", "ethnic diversity", "embrace diversity"],
        synonyms: [{word:"variety", pos:"n.", cn:"多样"}, {word:"multiformity", pos:"n.", cn:"多种形式"}]
      },
      { word: "heritage", pos: "n.", cn: "遗产；传统", phonetic: "/ˈherɪtɪdʒ/", level: ["IELTS", "TOEFL"], example: { en: "We should protect cultural heritage.", cn: "我们应保护文化遗产。" },
        collocations: ["cultural heritage", "world heritage", "heritage site"],
        synonyms: [{word:"legacy", pos:"n.", cn:"遗产/传承"}, {word:"tradition", pos:"n.", cn:"传统"}]
      },
      { word: "identity", pos: "n.", cn: "身份；特征", phonetic: "/aɪˈdentəti/", level: ["CET6", "IELTS"], example: { en: "Language shapes our identity.", cn: "语言塑造我们的身份。" },
        breakdown: "ident(相同) + -ity",
        collocations: ["cultural identity", "national identity", "sense of identity"],
        synonyms: [{word:"selfhood", pos:"n.", cn:"自我"}]
      },
      { word: "tradition", pos: "n.", cn: "传统", phonetic: "/trəˈdɪʃn/", level: ["CET4"], example: { en: "It's a Chinese tradition.", cn: "这是中国传统。" },
        collocations: ["cultural tradition", "long tradition", "carry on tradition"],
        synonyms: [{word:"custom", pos:"n.", cn:"习俗"}, {word:"convention", pos:"n.", cn:"惯例"}]
      },
      { word: "ritual", pos: "n.", cn: "仪式；惯例", phonetic: "/ˈrɪtʃuəl/", level: ["IELTS", "TOEFL"], example: { en: "Tea ceremony is a Japanese ritual.", cn: "茶道是日本仪式。" },
        collocations: ["religious ritual", "daily ritual", "ancient ritual"],
        synonyms: [{word:"ceremony", pos:"n.", cn:"仪式"}, {word:"rite", pos:"n.", cn:"礼仪"}]
      },
      { word: "inevitable", pos: "adj.", cn: "必然的", phonetic: "/ɪnˈevɪtəbl/", level: ["IELTS", "TOEFL"], example: { en: "Change is inevitable.", cn: "变化是必然的。" },
        breakdown: "in-(不) + evit(避免) + -able",
        collocations: ["inevitable result", "inevitable consequence", "seem inevitable"],
        synonyms: [{word:"unavoidable", pos:"adj.", cn:"不可避免的"}, {word:"certain", pos:"adj.", cn:"必然的"}]
      }
    ]
  },
  work: {
    name: "工作职业", emoji: "💼", color: "#d35400",
    desc: "就业/职业话题核心词汇",
    words: [
      { word: "career", pos: "n.", cn: "职业；事业", phonetic: "/kəˈrɪr/", level: ["CET4", "IELTS"], example: { en: "She has a successful career.", cn: "她事业有成。" },
        collocations: ["career path", "career development", "career opportunity", "pursue a career"],
        synonyms: [{word:"profession", pos:"n.", cn:"职业"}, {word:"vocation", pos:"n.", cn:"职业/使命"}]
      },
      { word: "profession", pos: "n.", cn: "职业；行业", phonetic: "/prəˈfeʃn/", level: ["CET6"], example: { en: "Teaching is a noble profession.", cn: "教书是崇高职业。" },
        collocations: ["medical profession", "legal profession", "enter a profession"],
        synonyms: [{word:"occupation", pos:"n.", cn:"职业"}, {word:"career", pos:"n.", cn:"职业"}]
      },
      { word: "salary", pos: "n.", cn: "薪水", phonetic: "/ˈsæləri/", level: ["CET4"], example: { en: "The salary is competitive.", cn: "薪水很有竞争力。" },
        collocations: ["annual salary", "high salary", "negotiate salary"],
        synonyms: [{word:"wage", pos:"n.", cn:"工资"}, {word:"pay", pos:"n.", cn:"报酬"}, {word:"income", pos:"n.", cn:"收入"}]
      },
      { word: "promotion", pos: "n.", cn: "晋升；促销", phonetic: "/prəˈmoʊʃn/", level: ["CET4"], example: { en: "She got a promotion.", cn: "她升职了。" },
        collocations: ["get a promotion", "promotion opportunity", "sales promotion"],
        synonyms: [{word:"advancement", pos:"n.", cn:"晋升/进步"}],
        additional_meaning: "常见义=晋升/推广；僻义=促销（商品的推广活动）"
      },
      { word: "employee", pos: "n.", cn: "雇员", phonetic: "/ɪmˈplɔɪiː/", level: ["CET4"], example: { en: "The company has 500 employees.", cn: "公司有500名员工。" },
        collocations: ["full-time employee", "former employee", "loyal employee"],
        synonyms: [{word:"worker", pos:"n.", cn:"工人/工作者"}, {word:"staff", pos:"n.", cn:"员工"}]
      },
      { word: "recruit", pos: "v.", cn: "招聘", phonetic: "/rɪˈkruːt/", level: ["CET6", "IELTS"], example: { en: "We need to recruit more staff.", cn: "我们需要招聘更多员工。" },
        collocations: ["recruit new staff", "recruit talent", "actively recruit"],
        synonyms: [{word:"hire", pos:"v.", cn:"雇用"}, {word:"employ", pos:"v.", cn:"雇用"}]
      },
      { word: "workforce", pos: "n.", cn: "劳动力", phonetic: "/ˈwɜːrkfɔːrs/", level: ["IELTS", "TOEFL"], example: { en: "The workforce is aging.", cn: "劳动力在老龄化。" },
        collocations: ["skilled workforce", "workforce diversity", "local workforce"],
        synonyms: [{word:"labor force", pos:"n.", cn:"劳动力"}, {word:"personnel", pos:"n.", cn:"人员"}]
      },
      { word: "freelance", pos: "adj./v.", cn: "自由职业的", phonetic: "/ˈfriːlæns/", level: ["IELTS"], example: { en: "She works as a freelance writer.", cn: "她做自由撰稿人。" },
        collocations: ["freelance work", "freelance designer", "go freelance"],
        synonyms: [{word:"self-employed", pos:"adj.", cn:"自雇的"}]
      },
      { word: "retire", pos: "v.", cn: "退休", phonetic: "/rɪˈtaɪər/", level: ["CET4"], example: { en: "He retired at 60.", cn: "他60岁退休。" },
        collocations: ["retire from", "retire early", "retire comfortably"],
        synonyms: [{word:"step down", pos:"v.", cn:"退下来"}]
      },
      { word: "maternity", pos: "adj.", cn: "产科的；孕妇的", phonetic: "/məˈtɜːrnəti/", level: ["IELTS"], example: { en: "She took maternity leave.", cn: "她休了产假。" },
        collocations: ["maternity leave", "maternity ward", "maternity care"],
        synonyms: [{word:"parental", pos:"adj.", cn:"父母的"}]
      },
      { word: "overtime", pos: "n.", cn: "加班", phonetic: "/ˈoʊvərtaɪm/", level: ["CET6"], example: { en: "I worked overtime last night.", cn: "我昨晚加班了。" },
        breakdown: "over(超过) + time(时间)",
        collocations: ["work overtime", "overtime pay", "overtime hours"],
        synonyms: [{word:"extra hours", pos:"n.", cn:"加班"}]
      },
      { word: "productivity", pos: "n.", cn: "生产力", phonetic: "/ˌprɑːdʌkˈtɪvəti/", level: ["IELTS"], example: { en: "Tech boosts productivity.", cn: "科技提升生产力。" },
        breakdown: "product(生产) + -ivity",
        collocations: ["increase productivity", "labor productivity", "productivity growth"],
        synonyms: [{word:"efficiency", pos:"n.", cn:"效率"}]
      }
    ]
  },
  government: {
    name: "政府政策", emoji: "🏛️", color: "#34495e",
    desc: "政府/政策话题核心词汇",
    words: [
      { word: "government", pos: "n.", cn: "政府", phonetic: "/ˈɡʌvərnmənt/", level: ["CET4"], example: { en: "The government announced a new policy.", cn: "政府宣布了新政。" },
        collocations: ["local government", "federal government", "government policy"],
        synonyms: [{word:"administration", pos:"n.", cn:"政府/管理"}]
      },
      { word: "policy", pos: "n.", cn: "政策", phonetic: "/ˈpɑːləsi/", level: ["CET4", "IELTS"], example: { en: "The new policy takes effect today.", cn: "新政策今日生效。" },
        collocations: ["government policy", "public policy", "policy maker", "implement policy"],
        synonyms: [{word:"strategy", pos:"n.", cn:"策略"}]
      },
      { word: "legislation", pos: "n.", cn: "立法；法规", phonetic: "/ˌledʒɪsˈleɪʃn/", level: ["IELTS", "TOEFL"], example: { en: "New legislation protects privacy.", cn: "新立法保护隐私。" },
        breakdown: "leg(法律) + -islation",
        collocations: ["enact legislation", "environmental legislation", "draft legislation"],
        synonyms: [{word:"law", pos:"n.", cn:"法律"}, {word:"statute", pos:"n.", cn:"法令"}]
      },
      { word: "regulation", pos: "n.", cn: "法规；规章", phonetic: "/ˌreɡjuˈleɪʃn/", level: ["CET6", "IELTS"], example: { en: "Strict regulations apply.", cn: "严格的法规适用。" },
        breakdown: "regul(规则) + -ation",
        collocations: ["government regulation", "strict regulation", "deregulation"],
        synonyms: [{word:"rule", pos:"n.", cn:"规则"}, {word:"law", pos:"n.", cn:"法律"}]
      },
      { word: "implement", pos: "v.", cn: "实施；执行", phonetic: "/ˈɪmplɪment/", level: ["CET6", "IELTS"], example: { en: "Implement the new plan.", cn: "实施新计划。" },
        breakdown: "im-(入) + ple(填) + -ment → 填入 → 落实",
        collocations: ["implement policy", "implement reform", "fully implement"],
        synonyms: [{word:"enforce", pos:"v.", cn:"执行"}, {word:"execute", pos:"v.", cn:"执行"}, {word:"carry out", pos:"v.", cn:"开展"}]
      },
      { word: "authority", pos: "n.", cn: "权威；当局", phonetic: "/əˈθɔːrəti/", level: ["CET4", "IELTS"], example: { en: "Local authorities are investigating.", cn: "当局正在调查。" },
        breakdown: "author(创造者) + -ity",
        collocations: ["local authority", "government authority", "have authority over"],
        synonyms: [{word:"power", pos:"n.", cn:"权力"}, {word:"jurisdiction", pos:"n.", cn:"管辖权"}]
      },
      { word: "bureaucracy", pos: "n.", cn: "官僚机构", phonetic: "/bjʊˈrɑːkrəsi/", level: ["IELTS", "TOEFL"], example: { en: "Bureaucracy slows things down.", cn: "官僚作风拖慢效率。" },
        breakdown: "bureau(局) + cracy(统治)",
        collocations: ["government bureaucracy", "cut bureaucracy", "bloated bureaucracy"],
        synonyms: [{word:"red tape", pos:"n.", cn:"繁文缛节"}]
      },
      { word: "democracy", pos: "n.", cn: "民主", phonetic: "/dɪˈmɑːkrəsi/", level: ["IELTS", "TOEFL"], example: { en: "Democracy requires participation.", cn: "民主需要参与。" },
        breakdown: "demo(人民) + cracy(统治)",
        collocations: ["representative democracy", "promote democracy"],
        synonyms: [{word:"self-government", pos:"n.", cn:"自治"}]
      },
      { word: "parliament", pos: "n.", cn: "议会", phonetic: "/ˈpɑːrləmənt/", level: ["IELTS", "TOEFL"], example: { en: "Parliament passed the bill.", cn: "议会通过了该法案。" },
        collocations: ["member of parliament", "dissolve parliament"],
        synonyms: [{word:"congress", pos:"n.", cn:"国会"}, {word:"legislature", pos:"n.", cn:"立法机构"}]
      },
      { word: "election", pos: "n.", cn: "选举", phonetic: "/iˈlekʃn/", level: ["CET4"], example: { en: "The election is in November.", cn: "选举在11月。" },
        collocations: ["general election", "presidential election", "win an election"],
        synonyms: [{word:"vote", pos:"n.", cn:"投票"}]
      },
      { word: "subsidy", pos: "n.", cn: "补贴", phonetic: "/ˈsʌbsədi/", level: ["IELTS", "TOEFL"], example: { en: "The government gives subsidies to farmers.", cn: "政府给农民补贴。" },
        collocations: ["government subsidy", "provide subsidy", "cut subsidy"],
        synonyms: [{word:"grant", pos:"n.", cn:"拨款"}, {word:"allowance", pos:"n.", cn:"津贴"}]
      },
      { word: "reform", pos: "v./n.", cn: "改革", phonetic: "/rɪˈfɔːrm/", level: ["CET4", "IELTS"], example: { en: "We need educational reform.", cn: "我们需要教育改革。" },
        collocations: ["economic reform", "political reform", "carry out reform"],
        synonyms: [{word:"transform", pos:"v.", cn:"转变"}, {word:"revamp", pos:"v.", cn:"翻新"}]
      }
    ]
  },
  media: {
    name: "媒体传播", emoji: "📺", color: "#16a085",
    desc: "媒体/广告/舆论话题核心词汇",
    words: [
      { word: "media", pos: "n.", cn: "媒体", phonetic: "/ˈmiːdiə/", level: ["CET4", "IELTS"], example: { en: "Social media shapes opinions.", cn: "社交媒体影响舆论。" },
        collocations: ["social media", "mass media", "media coverage"],
        synonyms: [{word:"press", pos:"n.", cn:"媒体/新闻界"}]
      },
      { word: "journalism", pos: "n.", cn: "新闻业", phonetic: "/ˈdʒɜːrnəlɪzəm/", level: ["IELTS"], example: { en: "She works in journalism.", cn: "她从事新闻工作。" },
        breakdown: "journal(日报) + -ism",
        collocations: ["investigative journalism", "citizen journalism"],
        synonyms: [{word:"reporting", pos:"n.", cn:"报道"}]
      },
      { word: "broadcast", pos: "v./n.", cn: "广播；播出", phonetic: "/ˈbrɔːdkæst/", level: ["CET6"], example: { en: "The match is broadcast live.", cn: "比赛正在直播。" },
        collocations: ["live broadcast", "broadcast news"],
        synonyms: [{word:"transmit", pos:"v.", cn:"传输"}, {word:"air", pos:"v.", cn:"播出"}]
      },
      { word: "headline", pos: "n.", cn: "标题；头条", phonetic: "/ˈhedlaɪn/", level: ["CET6"], example: { en: "It made the headlines.", cn: "它上了头条。" },
        collocations: ["make headlines", "grab headlines", "headline news"],
        synonyms: [{word:"title", pos:"n.", cn:"标题"}]
      },
      { word: "coverage", pos: "n.", cn: "报道；覆盖", phonetic: "/ˈkʌvərɪdʒ/", level: ["CET6", "IELTS"], example: { en: "The story got wide media coverage.", cn: "这新闻被广泛报道。" },
        breakdown: "cover(覆盖) + -age",
        collocations: ["media coverage", "news coverage", "extensive coverage"],
        synonyms: [{word:"reporting", pos:"n.", cn:"报道"}]
      },
      { word: "biased", pos: "adj.", cn: "有偏见的", phonetic: "/ˈbaɪəst/", level: ["IELTS", "TOEFL"], example: { en: "The report is biased.", cn: "这份报告有偏见。" },
        collocations: ["biased toward", "biased against", "biased opinion"],
        synonyms: [{word:"prejudiced", pos:"adj.", cn:"有偏见的"}, {word:"partial", pos:"adj.", cn:"偏袒的"}]
      },
      { word: "objective", pos: "adj.", cn: "客观的", phonetic: "/əbˈdʒektɪv/", level: ["CET6", "IELTS"], example: { en: "Journalists should be objective.", cn: "记者应保持客观。" },
        breakdown: "ob-(对) + ject(投) + -ive",
        collocations: ["objective analysis", "remain objective", "objective view"],
        synonyms: [{word:"impartial", pos:"adj.", cn:"公正的"}, {word:"neutral", pos:"adj.", cn:"中立的"}],
        additional_meaning: "作名词=目标（career objective = 职业目标）"
      },
      { word: "propaganda", pos: "n.", cn: "宣传", phonetic: "/ˌprɑːpəˈɡændə/", level: ["IELTS", "TOEFL"], example: { en: "The film is political propaganda.", cn: "这部电影是政治宣传。" },
        collocations: ["political propaganda", "anti-war propaganda"],
        synonyms: [{word:"publicity", pos:"n.", cn:"宣传"}]
      },
      { word: "censorship", pos: "n.", cn: "审查", phonetic: "/ˈsensərʃɪp/", level: ["IELTS", "TOEFL"], example: { en: "Internet censorship is debated.", cn: "网络审查存在争议。" },
        breakdown: "censor(审查) + -ship",
        collocations: ["government censorship", "media censorship", "strict censorship"],
        synonyms: [{word:"restriction", pos:"n.", cn:"限制"}]
      },
      { word: "audience", pos: "n.", cn: "观众；受众", phonetic: "/ˈɔːdiəns/", level: ["CET4"], example: { en: "The show has a huge audience.", cn: "这节目有大量观众。" },
        collocations: ["target audience", "live audience", "wide audience"],
        synonyms: [{word:"viewers", pos:"n.", cn:"观众"}]
      },
      { word: "viral", pos: "adj.", cn: "病毒式的；爆红的", phonetic: "/ˈvaɪrəl/", level: ["IELTS"], example: { en: "The video went viral.", cn: "这段视频爆红了。" },
        collocations: ["go viral", "viral video", "viral content"],
        synonyms: [{word:"widely shared", pos:"adj.", cn:"广为分享的"}]
      },
      { word: "advertise", pos: "v.", cn: "做广告", phonetic: "/ˈædvərtaɪz/", level: ["CET4"], example: { en: "They advertise on TV.", cn: "他们在电视上做广告。" },
        breakdown: "ad-(向) + vert(转) + -ise → 把注意力转过来",
        collocations: ["advertise online", "advertise on TV", "advertise for"],
        synonyms: [{word:"promote", pos:"v.", cn:"推广"}, {word:"market", pos:"v.", cn:"营销"}]
      }
    ]
  },
  globalization: {
    name: "全球化", emoji: "🌐", color: "#1abc9c",
    desc: "全球化/经济话题核心词汇",
    words: [
      { word: "globalization", pos: "n.", cn: "全球化", phonetic: "/ˌɡloʊbələˈzeɪʃn/", level: ["IELTS", "TOEFL"], example: { en: "Globalization brings opportunities.", cn: "全球化带来机遇。" },
        breakdown: "global(全球) + -ization",
        collocations: ["economic globalization", "cultural globalization"],
        synonyms: [{word:"internationalization", pos:"n.", cn:"国际化"}]
      },
      { word: "international", pos: "adj.", cn: "国际的", phonetic: "/ˌɪntərˈnæʃnəl/", level: ["CET4"], example: { en: "It's an international company.", cn: "这是家国际公司。" },
        breakdown: "inter-(之间) + nation(国家) + -al",
        collocations: ["international trade", "international community", "international cooperation"],
        synonyms: [{word:"global", pos:"adj.", cn:"全球的"}]
      },
      { word: "multinational", pos: "adj.", cn: "跨国的", phonetic: "/ˌmʌltiˈnæʃnəl/", level: ["IELTS", "TOEFL"], example: { en: "Multinational companies dominate the market.", cn: "跨国公司主导市场。" },
        breakdown: "multi-(多) + nation(国家) + -al",
        collocations: ["multinational corporation", "multinational enterprise"],
        synonyms: [{word:"transnational", pos:"adj.", cn:"跨国的"}]
      },
      { word: "trade", pos: "n./v.", cn: "贸易", phonetic: "/treɪd/", level: ["CET4"], example: { en: "International trade is growing.", cn: "国际贸易在增长。" },
        collocations: ["free trade", "trade agreement", "trade deficit", "foreign trade"],
        synonyms: [{word:"commerce", pos:"n.", cn:"商业"}]
      },
      { word: "tariff", pos: "n.", cn: "关税", phonetic: "/ˈtærɪf/", level: ["IELTS", "TOEFL"], example: { en: "Tariffs hurt imports.", cn: "关税打击进口。" },
        collocations: ["import tariff", "raise tariffs", "eliminate tariffs"],
        synonyms: [{word:"duty", pos:"n.", cn:"税/关税"}]
      },
      { word: "outsource", pos: "v.", cn: "外包", phonetic: "/ˌaʊtˈsɔːrs/", level: ["IELTS", "TOEFL"], example: { en: "They outsource to India.", cn: "他们外包给印度。" },
        breakdown: "out-(外) + source(来源)",
        collocations: ["outsource to", "outsource production", "outsource services"],
        synonyms: [{word:"subcontract", pos:"v.", cn:"分包"}]
      },
      { word: "interdependence", pos: "n.", cn: "相互依赖", phonetic: "/ˌɪntərdɪˈpendəns/", level: ["IELTS", "TOEFL"], example: { en: "Global interdependence is growing.", cn: "全球相互依存加深。" },
        breakdown: "inter-(之间) + depend(依赖) + -ence",
        collocations: ["mutual interdependence", "economic interdependence"],
        synonyms: [{word:"mutual dependence", pos:"n.", cn:"相互依赖"}]
      },
      { word: "integrate", pos: "v.", cn: "整合；融入", phonetic: "/ˈɪntɪɡreɪt/", level: ["CET6", "IELTS"], example: { en: "Help immigrants integrate.", cn: "帮助移民融入社会。" },
        breakdown: "integr(完整) + -ate",
        collocations: ["integrate into", "fully integrate", "integrate with"],
        synonyms: [{word:"unite", pos:"v.", cn:"联合"}, {word:"combine", pos:"v.", cn:"结合"}]
      },
      { word: "exploit", pos: "v.", cn: "剥削；利用", phonetic: "/ɪkˈsplɔɪt/", level: ["CET6", "IELTS"], example: { en: "Companies exploit cheap labor.", cn: "公司剥削廉价劳动力。" },
        collocations: ["exploit workers", "exploit resources", "fully exploit"],
        synonyms: [{word:"take advantage of", pos:"v.", cn:"利用"}],
        additional_meaning: "作褒义=开发利用（exploit resources 开发利用资源），贬义=剥削"
      },
      { word: "prosperity", pos: "n.", cn: "繁荣", phonetic: "/prɑːˈsperəti/", level: ["IELTS", "TOEFL"], example: { en: "Trade brings prosperity.", cn: "贸易带来繁荣。" },
        breakdown: "prosper(繁荣) + -ity",
        collocations: ["economic prosperity", "shared prosperity", "long-term prosperity"],
        synonyms: [{word:"wealth", pos:"n.", cn:"财富"}, {word:"affluence", pos:"n.", cn:"富裕"}]
      },
      { word: "inequality", pos: "n.", cn: "不平等", phonetic: "/ˌɪnɪˈkwɑːləti/", level: ["IELTS", "TOEFL"], example: { en: "Global inequality is severe.", cn: "全球不平等严重。" },
        collocations: ["wealth inequality", "social inequality"],
        synonyms: [{word:"disparity", pos:"n.", cn:"差异"}, {word:"imbalance", pos:"n.", cn:"不平衡"}]
      },
      { word: "monopoly", pos: "n.", cn: "垄断", phonetic: "/məˈnɑːpəli/", level: ["IELTS", "TOEFL"], example: { en: "The company has a monopoly.", cn: "这家公司垄断了市场。" },
        breakdown: "mono-(单一) + poly(卖)",
        collocations: ["break monopoly", "state monopoly", "monopoly power"],
        synonyms: [{word:"domination", pos:"n.", cn:"主宰"}]
      }
    ]
  },
  city: {
    name: "城市生活", emoji: "🏙️", color: "#e67e22",
    desc: "城市化/交通/居住话题核心词汇",
    words: [
      { word: "metropolitan", pos: "adj.", cn: "大都市的", phonetic: "/ˌmetrəˈpɑːlɪtən/", level: ["IELTS", "TOEFL"], example: { en: "He works in a metropolitan area.", cn: "他在大都市工作。" },
        breakdown: "metro(母) + polit(城) + -an",
        collocations: ["metropolitan area", "metropolitan city", "metropolitan life"],
        synonyms: [{word:"urban", pos:"adj.", cn:"城市的"}]
      },
      { word: "suburban", pos: "adj.", cn: "郊区的", phonetic: "/səˈbɜːrbən/", level: ["IELTS"], example: { en: "Suburban life is quieter.", cn: "郊区生活更安静。" },
        collocations: ["suburban area", "suburban life", "suburban residents"],
        synonyms: [{word:"outskirts", pos:"n.", cn:"市郊"}]
      },
      { word: "infrastructure", pos: "n.", cn: "基础设施", phonetic: "/ˈɪnfrəstrʌktʃər/", level: ["IELTS", "TOEFL"], example: { en: "The city lacks infrastructure.", cn: "城市基础设施不足。" },
        breakdown: "infra-(下) + structure(结构)",
        collocations: ["transport infrastructure", "public infrastructure", "improve infrastructure"],
        synonyms: [{word:"facilities", pos:"n.", cn:"设施"}]
      },
      { word: "congestion", pos: "n.", cn: "拥堵", phonetic: "/kənˈdʒestʃən/", level: ["IELTS", "TOEFL"], example: { en: "Traffic congestion is serious.", cn: "交通拥堵严重。" },
        breakdown: "con-(一起) + gest(带) + -ion",
        collocations: ["traffic congestion", "reduce congestion"],
        synonyms: [{word:"jam", pos:"n.", cn:"堵塞"}]
      },
      { word: "commute", pos: "v./n.", cn: "通勤", phonetic: "/kəˈmjuːt/", level: ["IELTS"], example: { en: "I commute two hours a day.", cn: "我每天通勤两小时。" },
        collocations: ["daily commute", "long commute", "commute time"],
        synonyms: [{word:"travel", pos:"v.", cn:"旅行"}]
      },
      { word: "affordable", pos: "adj.", cn: "可负担的", phonetic: "/əˈfɔːrdəbl/", level: ["IELTS", "TOEFL"], example: { en: "We need affordable housing.", cn: "我们需要可负担住房。" },
        breakdown: "af-(向) + ford(供应) + -able",
        collocations: ["affordable housing", "affordable price"],
        synonyms: [{word:"reasonable", pos:"adj.", cn:"合理的"}]
      },
      { word: "resident", pos: "n.", cn: "居民", phonetic: "/ˈrezɪdənt/", level: ["CET4", "IELTS"], example: { en: "Local residents complained.", cn: "当地居民投诉了。" },
        breakdown: "resid(坐) + -ent",
        collocations: ["local resident", "permanent resident", "urban resident"],
        synonyms: [{word:"inhabitant", pos:"n.", cn:"居民"}]
      },
      { word: "amenity", pos: "n.", cn: "便利设施", phonetic: "/əˈmiːnəti/", level: ["IELTS", "TOEFL"], example: { en: "The neighborhood has good amenities.", cn: "这个社区设施齐全。" },
        collocations: ["local amenities", "public amenities"],
        synonyms: [{word:"facility", pos:"n.", cn:"设施"}]
      },
      { word: "pedestrian", pos: "n.", cn: "行人", phonetic: "/pəˈdestriən/", level: ["CET6"], example: { en: "Pedestrians have right of way.", cn: "行人有优先通行权。" },
        collocations: ["pedestrian zone", "pedestrian crossing"],
        synonyms: [{word:"walker", pos:"n.", cn:"步行者"}]
      },
      { word: "sustainable", pos: "adj.", cn: "可持续的", phonetic: "/səˈsteɪnəbl/", level: ["IELTS", "TOEFL"], example: { en: "Sustainable cities are the future.", cn: "可持续城市是未来。" },
        collocations: ["sustainable city", "sustainable development"],
        synonyms: [{word:"renewable", pos:"adj.", cn:"可再生的"}]
      },
      { word: "renewable", pos: "adj.", cn: "可再生的", phonetic: "/rɪˈnuːəbl/", level: ["IELTS"], example: { en: "Renewable energy is key.", cn: "可再生能源是关键。" },
        collocations: ["renewable energy", "renewable resources"],
        synonyms: [{word:"sustainable", pos:"adj.", cn:"可持续的"}]
      },
      { word: "deteriorate", pos: "v.", cn: "恶化", phonetic: "/dɪˈtɪriəreɪt/", level: ["IELTS", "TOEFL"], example: { en: "Air quality is deteriorating.", cn: "空气质量在恶化。" },
        collocations: ["rapidly deteriorate", "deteriorate into"],
        synonyms: [{word:"worsen", pos:"v.", cn:"变糟"}, {word:"decline", pos:"v.", cn:"下降"}]
      }
    ]
  }
};
