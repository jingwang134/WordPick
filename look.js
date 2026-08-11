/* ============================================================
   📷 看图学词（真实生活场景图，玩游戏学习）
   名词：一张场景照片展示所有物品
   动词/短语：动作照片 + 提问 → 点一下显示答案
   图片 = ImageGen 写实照片风，每张角度/道具不同
   ============================================================ */
const LOOK_LEARN = {
  watermelon: {
    name: "切西瓜", en: "Cutting Watermelon", emoji: "🍉",
    sceneImg: "images/look/watermelon_scene.jpg",
    nouns: [
      { en: "watermelon", cn: "西瓜" }, { en: "rind", cn: "瓜皮" },
      { en: "flesh", cn: "瓜瓤" }, { en: "seed", cn: "西瓜籽" },
      { en: "spoon", cn: "勺子" }, { en: "toothpick", cn: "牙签" },
      { en: "plate", cn: "盘子" }, { en: "knife", cn: "刀" }
    ],
    verbs: [
      { img: "images/look/watermelon_cut_half.jpg", q: "把西瓜对半切开，怎么说？", en: "Cut the watermelon in half", cn: "把西瓜对半切开", ex: { en: "Cut the watermelon in half first.", cn: "先把西瓜对半切开。" }, tip: "先对半切，再切小块" },
      { img: "images/look/watermelon_cut_pieces.jpg", q: "切成小块，怎么说？", en: "Cut it into small pieces", cn: "切成小块", ex: { en: "Cut it into small pieces for the kids.", cn: "切成小块给孩子们吃。" }, tip: "small pieces = 小块" },
      { img: "images/look/watermelon_scoop.jpg", q: "用勺子挖着吃，怎么说？", en: "Scoop the watermelon with a spoon", cn: "用勺子挖西瓜", ex: { en: "Scoop the flesh with a spoon.", cn: "用勺子挖瓜瓤。" }, tip: "scoop = 挖/舀" },
      { img: "images/look/watermelon_toothpicks.jpg", q: "用牙签扎着吃，怎么说？", en: "Use toothpicks to eat them", cn: "用牙签扎着吃", ex: { en: "Use toothpicks to eat them.", cn: "用牙签扎着吃。" }, tip: "toothpick = 牙签" },
      { img: "images/look/watermelon_seeds.jpg", q: "把籽吐掉，怎么说？", en: "Spit out the seeds", cn: "把籽吐掉", ex: { en: "Spit out the seeds!", cn: "把籽吐掉！" }, tip: "spit out = 吐出" }
    ]
  },
  egg: {
    name: "煮鸡蛋", en: "Boiling Eggs", emoji: "🥚",
    sceneImg: "images/look/egg_scene.jpg",
    nouns: [
      { en: "boiled egg", cn: "煮鸡蛋" }, { en: "fried egg", cn: "煎鸡蛋" },
      { en: "scrambled eggs", cn: "炒鸡蛋" }, { en: "egg white", cn: "蛋清" },
      { en: "yolk", cn: "蛋黄" }, { en: "shell", cn: "蛋壳" },
      { en: "frying pan", cn: "平底锅" }, { en: "bowl", cn: "碗" }
    ],
    verbs: [
      { img: "images/look/egg_crack.jpg", q: "敲开鸡蛋，怎么说？", en: "Crack the egg", cn: "敲开鸡蛋", ex: { en: "Crack two eggs into the bowl.", cn: "往碗里敲两个鸡蛋。" }, tip: "crack = 敲裂" },
      { img: "images/look/egg_roll.jpg", q: "滚一下（剥壳前），怎么说？", en: "Roll it a bit", cn: "滚一下", ex: { en: "Roll it a bit to loosen the shell.", cn: "滚一下让壳松掉。" }, tip: "roll = 滚动" },
      { img: "images/look/egg_remove_shell.jpg", q: "剥蛋壳，怎么说？", en: "Remove the shell", cn: "剥蛋壳", ex: { en: "Remove the shell carefully.", cn: "小心地剥壳。" }, tip: "remove = 移除" },
      { img: "images/look/egg_boil.jpg", q: "煮鸡蛋，怎么说？", en: "Boil the eggs", cn: "煮鸡蛋", ex: { en: "Boil the eggs for 8 minutes.", cn: "把鸡蛋煮 8 分钟。" }, tip: "boil = 煮沸" },
      { img: "images/look/egg_beat.jpg", q: "打鸡蛋，怎么说？", en: "Beat the eggs", cn: "打鸡蛋", ex: { en: "Beat the eggs until smooth.", cn: "把蛋打匀。" }, tip: "beat = 搅打" }
    ]
  },
  order_coffee: {
    name: "去咖啡店点单", en: "Ordering Coffee at Starbucks", emoji: "☕",
    sceneImg: "images/look/coffee_types.jpg",
    nouns: [
      { en: "americano", cn: "美式（2份浓缩+热水）" }, { en: "latte", cn: "拿铁（浓缩+热牛奶+奶泡）" },
      { en: "cappuccino", cn: "卡布奇诺（奶泡更多）" }, { en: "mocha", cn: "摩卡（浓缩+巧克力）" },
      { en: "frappuccino", cn: "星冰乐（冰+搅拌机打）" }, { en: "iced coffee", cn: "冰咖啡" },
      { en: "coffee bean", cn: "咖啡豆" }, { en: "roast", cn: "烘焙" }
    ],
    verbs: [
      { img: "images/look/coffee_order.jpg", q: "\"我想要一杯小杯拿铁\"，怎么说？", en: "I'd like a tall latte, please", cn: "我想要一杯小杯拿铁", ex: { en: "I'd like a tall white chocolate mocha.", cn: "我想要一杯小杯白巧克力摩卡（语料原句）。" }, tip: "点单万能句式：I'd like a + 杯型 + 咖啡" },
      { img: "images/look/coffee_size.jpg", q: "星巴克的小杯、中杯、大杯，怎么说？", en: "Tall, Grande, Venti", cn: "小杯、中杯、大杯", ex: { en: "This small cup is a tall. Grande means large in Spanish!", cn: "小杯叫 tall，grande 在西班牙语里其实是\"大\"的意思！" }, tip: "别被骗了：Grande 是\"中杯\"，Venti 才是大杯" },
      { img: "images/look/coffee_wait.jpg", q: "\"可以告诉我你的名字吗？\"怎么说？", en: "May I have your name?", cn: "可以告诉我你的名字吗？", ex: { en: "What name should I put on the order? Then wait for your name to be called.", cn: "订单上写什么名字？然后等叫到你的名字。" }, tip: "报名字等叫号：May I have your name? / Name for the order?" },
      { img: "images/look/coffee_pay.jpg", q: "\"需要收据吗？\"怎么说？", en: "Do you need a receipt?", cn: "需要收据吗？", ex: { en: "It's going to be $9.43. Do you need a receipt?", cn: "一共 9.43 美元。需要收据吗？（语料原对话）" }, tip: "receipt = 收据；付款问句常用" },
      { img: "images/look/coffee_sweet.jpg", q: "\"要加热一下吗？\"怎么说？", en: "Do you want it warmed up?", cn: "要加热一下吗？", ex: { en: "Did you want it warmed up? Yes, warmed up please.", cn: "你想加热吗？是的，请加热一下。（语料原对话）" }, tip: "warm up = 加热；点甜点/面包时的标配问答" },
      { img: "images/look/coffee_roast.jpg", q: "浅度烘焙、中度烘焙、深度烘焙，怎么说？", en: "Light, medium and dark roast", cn: "浅度/中度/深度烘焙", ex: { en: "Scan the barcode on the bag to trace where your coffee beans are from.", cn: "扫袋子上的条形码，就能追踪咖啡豆的产地。" }, tip: "roast = 烘焙；星巴克可以扫码溯源" },
      { img: "images/look/coffee_stopper.jpg", q: "防溢的咖啡塞怎么说？", en: "Coffee stopper", cn: "咖啡塞", ex: { en: "Put the stopper in your drink to keep it warm and stop it from spilling.", cn: "插上咖啡塞，保温又防溢。" }, tip: "stopper 还能当搅拌棒 stirrer 用；杯套叫 sleeve" }
    ]
  }
};

/* ============================================================
   🗺️ 场景探索（一张真实大图 + 可点热点 + 层层延伸）
   - 热点：图上的物品/区域，点开弹名词
   - 延伸：👆怎么用（动词短语）｜💬例句｜🔁相关词（可跳转）｜💡贴士
   - 词网：相关词可点跳转到另一个热点
   ============================================================ */
LOOK_LEARN.order_coffee.explore = {
  img: "images/look/coffee_scene.jpg",
  hotspots: [
    { x: 65, y: 58, en: "latte", cn: "拿铁", emoji: "☕",
      extend: {
        use: [
          { en: "I'd like a tall latte, please", cn: "我想要一杯小杯拿铁", img: "images/look/coffee_order.jpg" },
          { en: "Order a latte at the counter", cn: "在柜台点一杯拿铁", img: "images/look/coffee_order.jpg" }
        ],
        examples: [
          { en: "I'd like a tall white chocolate mocha.", cn: "我想要一杯小杯白巧克力摩卡（语料原句）。" },
          { en: "A latte is espresso with steamed milk and a little foam on top.", cn: "拿铁是浓缩+热牛奶+顶部一点奶泡。" }
        ],
        related: ["espresso machine", "paper cup"],
        tip: "拿铁 = espresso + steamed milk + 奶泡；顶上的图案叫 latte art（拉花）。" }
    },
    { x: 78, y: 50, en: "coffee bean jar", cn: "咖啡豆罐", emoji: "🫙",
      extend: {
        use: [
          { en: "Fill the grinder with beans", cn: "把豆子填进磨豆机", img: null },
          { en: "Store the beans in a jar", cn: "把豆子存进罐子里", img: null }
        ],
        examples: [
          { en: "The glass jar keeps the coffee beans fresh.", cn: "玻璃罐让咖啡豆保持新鲜。" }
        ],
        related: ["coffee bean", "espresso machine"],
        tip: "whole bean = 整豆；ground coffee = 粉；密封罐避光保存。" }
    },
    { x: 44, y: 80, en: "coffee bean", cn: "咖啡豆", emoji: "🫘",
      extend: {
        use: [
          { en: "Grind the beans", cn: "磨咖啡豆", img: null },
          { en: "Brew coffee beans", cn: "冲泡咖啡豆", img: null }
        ],
        examples: [
          { en: "A coffee bean is a seed from a coffee plant.", cn: "咖啡豆是咖啡树的种子（语料原句）。" },
          { en: "Scan the barcode on the bag to trace where your coffee beans are from.", cn: "扫袋子上的条码，就能追踪豆子产地。" }
        ],
        related: ["coffee bean jar", "espresso machine"],
        tip: "产地常见：Colombia / Brazil / Ethiopia / Honduras / Guatemala；星巴克可扫码溯源。" }
    },
    { x: 24, y: 70, en: "sugar packet", cn: "糖包", emoji: "🍬",
      extend: {
        use: [
          { en: "Add a sugar packet", cn: "加一包糖", img: "images/look/coffee_stopper.jpg" },
          { en: "Stir it with the stirrer", cn: "用搅拌棒搅一搅", img: "images/look/coffee_stopper.jpg" }
        ],
        examples: [
          { en: "I didn't want a sugar packet because the drink is already sweet.", cn: "我不要糖包，因为饮料已经很甜了（语料原句）。" }
        ],
        related: ["paper cup"],
        tip: "糖包三种：brown sugar 红糖 / white sugar 白糖 / stevia 甜叶菊（代糖）；用 stopper 当 stirrer 搅拌。" }
    },
    { x: 25, y: 35, en: "espresso machine", cn: "咖啡机", emoji: "⚙️",
      extend: {
        use: [
          { en: "Pull a shot of espresso", cn: "萃取一份浓缩咖啡", img: null },
          { en: "Steam the milk", cn: "蒸牛奶", img: null }
        ],
        examples: [
          { en: "The barista makes espresso with this machine.", cn: "咖啡师用这台机器做浓缩。" }
        ],
        related: ["latte", "coffee bean"],
        tip: "美式=2 份浓缩+热水；latte / cappuccino / mocha 都基于 espresso + 奶。" }
    },
    { x: 66, y: 32, en: "paper cup", cn: "纸杯", emoji: "🥤",
      extend: {
        use: [
          { en: "Take a paper cup", cn: "拿一个纸杯", img: null },
          { en: "Put a sleeve on the cup", cn: "给杯子套上杯套", img: "images/look/coffee_stopper.jpg" }
        ],
        examples: [
          { en: "Hot drinks come with a sleeve to protect your fingers.", cn: "热饮配杯套防烫（语料原句）。" }
        ],
        related: ["sugar packet"],
        tip: "热饮配 sleeve 杯套防烫；外带盖 lid 上的小孔塞 stopper 防溢。" }
    }
  ]
};
