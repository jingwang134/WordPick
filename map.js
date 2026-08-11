/* ============================================================
   🧠 场景思维导图数据（DEMO）
   每个场景 = 中心 + 4 个维度（词汇/动作/句型/贴士）
   每个表达 = 图标 + 英文 + 中文 卡片节点，可点击
   风格：4 种视觉主题（糖果/手账/线条/涂鸦）
   ============================================================ */
const SCENE_MAPS = {
  egg: {
    name: "煮鸡蛋", en: "Boiling Eggs", emoji: "🥚",
    dims: [
      { key: "vocab", label: "词汇", emoji: "📦", color: "#3498db", items: [
        { en: "boiled egg", cn: "煮鸡蛋", icon: "🥚", tip: "soft-boiled egg = 溏心蛋" },
        { en: "fried egg", cn: "煎鸡蛋", icon: "🍳" },
        { en: "scrambled eggs", cn: "炒鸡蛋", icon: "🍳" },
        { en: "egg white", cn: "蛋清", icon: "⚪" },
        { en: "yolk", cn: "蛋黄", icon: "🟡" },
        { en: "shell", cn: "蛋壳", icon: "🐚" }
      ]},
      { key: "actions", label: "动作", emoji: "👆", color: "#e67e22", items: [
        { en: "Crack the egg", cn: "敲开鸡蛋", icon: "💥" },
        { en: "Roll it a bit", cn: "滚一下", icon: "🔄" },
        { en: "Remove the shell", cn: "剥蛋壳", icon: "✂️" },
        { en: "Boil the eggs", cn: "煮鸡蛋", icon: "♨️" },
        { en: "Beat the eggs", cn: "打鸡蛋", icon: "🥄" }
      ]},
      { key: "sentences", label: "句型", emoji: "💬", color: "#27ae60", items: [
        { en: "Crack two eggs into the bowl.", cn: "往碗里敲两个鸡蛋。", icon: "🥣" },
        { en: "Beat the eggs until smooth.", cn: "把蛋打匀。", icon: "🥄" },
        { en: "Cook the eggs in the pan.", cn: "在平底锅里煎。", icon: "🍳" },
        { en: "Season with a little salt.", cn: "加点盐调味。", icon: "🧂" }
      ]},
      { key: "tips", label: "贴士", emoji: "⚠️", color: "#9b59b6", items: [
        { en: "Don't choke on the yolk!", cn: "小心别噎到蛋黄！", icon: "🚨" },
        { en: "The egg is very hot. Cool it.", cn: "鸡蛋很烫，先放凉。", icon: "🌡️" },
        { en: "Soft-boiled: cook 6-7 min.", cn: "溏心蛋煮 6-7 分钟。", icon: "⏱️" }
      ]}
    ]
  },
  watermelon: {
    name: "切西瓜", en: "Cutting Watermelon", emoji: "🍉",
    dims: [
      { key: "vocab", label: "词汇", emoji: "📦", color: "#3498db", items: [
        { en: "rind", cn: "西瓜皮", icon: "🟢" },
        { en: "seed", cn: "西瓜籽", icon: "⚫" },
        { en: "flesh", cn: "瓜瓤", icon: "🔴" },
        { en: "seedless", cn: "无籽的", icon: "🚫" },
        { en: "juice", cn: "西瓜汁", icon: "🧃" }
      ]},
      { key: "actions", label: "动作", emoji: "👆", color: "#e67e22", items: [
        { en: "Cut it in half", cn: "对半切开", icon: "🔪" },
        { en: "Cut into small pieces", cn: "切成小块", icon: "🍴" },
        { en: "Scoop with a spoon", cn: "用勺子挖", icon: "🥄" },
        { en: "Use toothpicks to eat", cn: "用牙签吃", icon: "🪥" },
        { en: "Spit out the seeds", cn: "把籽吐掉", icon: "🗑️" }
      ]},
      { key: "sentences", label: "句型", emoji: "💬", color: "#27ae60", items: [
        { en: "Cut it in half first.", cn: "先对半切开。", icon: "🔪" },
        { en: "Use toothpicks to eat.", cn: "用牙签扎着吃。", icon: "🪥" },
        { en: "Scoop with a spoon.", cn: "用勺子挖瓜瓤。", icon: "🥄" }
      ]},
      { key: "tips", label: "贴士", emoji: "⚠️", color: "#9b59b6", items: [
        { en: "Don't eat the rind!", cn: "别吃西瓜皮！", icon: "🚨" },
        { en: "Juice on your chin!", cn: "你下巴有西瓜汁！", icon: "💧" },
        { en: "Chilled is better.", cn: "冰镇更好吃。", icon: "🧊" }
      ]}
    ]
  },
  order_coffee: {
    name: "去咖啡店点单", en: "Ordering Coffee", emoji: "☕",
    dims: [
      { key: "vocab", label: "词汇", emoji: "📦", color: "#3498db", items: [
        { en: "tall", cn: "小杯", icon: "🥤" },
        { en: "grande", cn: "中杯", icon: "🥤" },
        { en: "venti", cn: "大杯", icon: "🧋" },
        { en: "barista", cn: "咖啡师", icon: "🧑‍🍳" },
        { en: "latte", cn: "拿铁", icon: "☕" },
        { en: "mocha", cn: "摩卡", icon: "🍫" }
      ]},
      { key: "actions", label: "动作", emoji: "👆", color: "#e67e22", items: [
        { en: "Order at the counter", cn: "柜台点单", icon: "🛎️" },
        { en: "Choose the size", cn: "选杯型", icon: "📏" },
        { en: "Pay for the coffee", cn: "付款", icon: "💳" },
        { en: "Wait for your name", cn: "等叫名字", icon: "⏳" }
      ]},
      { key: "sentences", label: "句型", emoji: "💬", color: "#27ae60", items: [
        { en: "I'd like a tall latte, please.", cn: "请给我小杯拿铁。", icon: "🙋" },
        { en: "Can I get a venti iced mocha?", cn: "大杯冰摩卡可以吗？", icon: "🧊" },
        { en: "Name for the order?", cn: "订单用什么名字？", icon: "🏷️" }
      ]},
      { key: "tips", label: "贴士", emoji: "⚠️", color: "#9b59b6", items: [
        { en: "Size first, then flavor.", cn: "先选杯型再选口味。", icon: "📏" },
        { en: "Sugar packets at the counter.", cn: "糖包在取餐台。", icon: "🧂" },
        { en: "Sizes: Tall, Grande, Venti.", cn: "杯型：小、中、大。", icon: "🥤" }
      ]}
    ]
  },
  teeth: {
    name: "刷牙", en: "Brushing Teeth", emoji: "🪥",
    dims: [
      { key: "vocab", label: "词汇", emoji: "📦", color: "#3498db", items: [
        { en: "toothbrush", cn: "牙刷", icon: "🪥" },
        { en: "toothpaste", cn: "牙膏", icon: "🧴" },
        { en: "toothbrush cup", cn: "牙杯", icon: "🥛" },
        { en: "dental floss", cn: "牙线", icon: "🧵" },
        { en: "gums", cn: "牙龈", icon: "😬" }
      ]},
      { key: "actions", label: "动作", emoji: "👆", color: "#e67e22", items: [
        { en: "Squeeze the toothpaste", cn: "挤牙膏", icon: "🧴" },
        { en: "Brush your teeth", cn: "刷牙", icon: "🪥" },
        { en: "Brush up and down", cn: "上下刷", icon: "↕️" },
        { en: "Rinse your mouth", cn: "漱口", icon: "💦" },
        { en: "Spit it out", cn: "吐掉", icon: "🗑️" }
      ]},
      { key: "sentences", label: "句型", emoji: "💬", color: "#27ae60", items: [
        { en: "Brush twice a day.", cn: "每天刷两次。", icon: "📅" },
        { en: "Rinse after brushing.", cn: "刷完要漱口。", icon: "💦" },
        { en: "Floss between teeth.", cn: "用牙线清牙缝。", icon: "🧵" }
      ]},
      { key: "tips", label: "贴士", emoji: "⚠️", color: "#9b59b6", items: [
        { en: "Brush for 2 minutes.", cn: "每次刷 2 分钟。", icon: "⏱️" },
        { en: "New brush every 3 months.", cn: "每 3 个月换牙刷。", icon: "🔄" },
        { en: "Don't swallow toothpaste!", cn: "别把牙膏咽下去！", icon: "🚨" }
      ]}
    ]
  },
  tea: {
    name: "泡茶", en: "Making Tea", emoji: "🍵",
    dims: [
      { key: "vocab", label: "词汇", emoji: "📦", color: "#3498db", items: [
        { en: "teapot", cn: "茶壶", icon: "🫖" },
        { en: "teacup", cn: "茶杯", icon: "🍵" },
        { en: "teabag", cn: "茶包", icon: "🫖" },
        { en: "kettle", cn: "水壶", icon: "⚗️" },
        { en: "loose tea", cn: "散装茶叶", icon: "🍃" }
      ]},
      { key: "actions", label: "动作", emoji: "👆", color: "#e67e22", items: [
        { en: "Boil the water", cn: "烧水", icon: "♨️" },
        { en: "Steep the tea", cn: "泡茶", icon: "🫖" },
        { en: "Pour the tea", cn: "倒茶", icon: "🫗" },
        { en: "Add some sugar", cn: "加点糖", icon: "🧂" },
        { en: "Sip it slowly", cn: "慢慢喝", icon: "🥤" }
      ]},
      { key: "sentences", label: "句型", emoji: "💬", color: "#27ae60", items: [
        { en: "The tea is ready now.", cn: "茶泡好了。", icon: "🫖" },
        { en: "Let it steep for 3 min.", cn: "泡 3 分钟。", icon: "⏱️" },
        { en: "Some sugar for you?", cn: "要加点糖吗？", icon: "🧂" }
      ]},
      { key: "tips", label: "贴士", emoji: "⚠️", color: "#9b59b6", items: [
        { en: "Green tea: 80°C water.", cn: "绿茶用 80°C 水。", icon: "🌡️" },
        { en: "Don't over-steep.", cn: "茶包别泡太久。", icon: "⏱️" },
        { en: "Handle faces right.", cn: "杯柄朝右放。", icon: "🍵" }
      ]}
    ]
  }
};

/* 导图视觉风格（不用 AI 插画，纯 CSS/SVG 主题） */
const MAP_STYLES = {
  candy: {
    name: "🍬 糖果扁平", bg: "#fff8f0", line: "#e8d5c0",
    centerFill: "#ffd5d0", centerText: "#c0392b",
    nodeFill: "white", nodeStroke: "#d8c9b8", nodeText: "#2c3e50",
    font: "600 13px 'PingFang SC', sans-serif", radius: 44
  },
  notebook: {
    name: "📓 手账便签", bg: "#fdf6e3", line: "#d4c5a0",
    centerFill: "#fae5d3", centerText: "#8a5a2b",
    nodeFill: "#fffbe8", nodeStroke: "#c9b897", nodeText: "#4a3c28",
    font: "13px 'Comic Sans MS', 'PingFang SC', cursive", radius: 44
  },
  line: {
    name: "✏️ 简约线条", bg: "#ffffff", line: "#b0bec5",
    centerFill: "#eceff1", centerText: "#37474f",
    nodeFill: "#fafafa", nodeStroke: "#bdbdbd", nodeText: "#424242",
    font: "13px 'Helvetica Neue', 'PingFang SC', sans-serif", radius: 42
  },
  graffiti: {
    name: "🖍️ 涂鸦风", bg: "#fef9ef", line: "#ff9800",
    centerFill: "#ffe082", centerText: "#e65100",
    nodeFill: "#fff8e1", nodeStroke: "#ffb300", nodeText: "#3e2723",
    font: "700 13px 'Chalkboard SE', 'PingFang SC', sans-serif", radius: 46
  }
};
