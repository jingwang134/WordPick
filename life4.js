/* ============================================================
   🎬 真实语料版场景（v6 · 来自老板下载的 YouTube 双语字幕）
   来源：C:\Users\15869\Desktop\文件\WJ\en\生活场景\*.srt
   每个场景 source: "youtube" 标记为真实语料提炼
   覆盖同名手写场景（makeup/haircut/supermarket），更真实详细
   ============================================================ */
Object.assign(LIFE_SCENES, {

/* ============ ☕ 点咖啡（ORDER COFFEE.srt · 星巴克） ============ */
order_coffee: {
  parent: "dining", source: "youtube", name: "去咖啡店点单", en: "Ordering Coffee", emoji: "☕", color: "#e8d8c8",
  nouns: [
    { en: "coffee bean", cn: "咖啡豆" },
    { en: "light roast", cn: "浅度烘焙" },
    { en: "dark roast", cn: "深度烘焙" },
    { en: "espresso", cn: "浓缩咖啡" },
    { en: "americano", cn: "美式咖啡" },
    { en: "latte", cn: "拿铁" },
    { en: "cappuccino", cn: "卡布奇诺" },
    { en: "mocha", cn: "摩卡咖啡" },
    { en: "steamed milk", cn: "热牛奶/奶泡" },
    { en: "barista", cn: "咖啡师" },
    { en: "tall", cn: "小杯" },
    { en: "grande", cn: "中杯" },
    { en: "venti", cn: "大杯" },
    { en: "coffee cup", cn: "咖啡杯" },
    { en: "lid", cn: "杯盖" },
    { en: "straw", cn: "吸管" },
    { en: "sugar packet", cn: "糖包" }
  ],
  actions: [
    { en: "Walk into the coffee shop", cn: "走进咖啡店" },
    { en: "Order at the counter", cn: "在柜台点单" },
    { en: "Choose the roast", cn: "选择烘焙度" },
    { en: "Pick a size", cn: "选择杯型" },
    { en: "Give your name for the order", cn: "报出订单位的名字" },
    { en: "Wait for your name to be called", cn: "等待叫名字" },
    { en: "Pay for the coffee", cn: "付款" },
    { en: "Take off the lid", cn: "掀开杯盖" },
    { en: "Stir the coffee", cn: "搅拌咖啡" },
    { en: "Take a sip", cn: "喝一口" }
  ]
},

/* ============ 💄 化妆（MAKEUP.srt · 真实步骤） ============ */
makeup: {
  parent: "beauty", source: "youtube", name: "化妆", en: "Applying Makeup", emoji: "💄", color: "#fde8f0",
  nouns: [
    { en: "primer", cn: "妆前乳" },
    { en: "foundation", cn: "粉底液" },
    { en: "concealer", cn: "遮瑕膏" },
    { en: "powder", cn: "散粉" },
    { en: "blush", cn: "腮红" },
    { en: "mascara", cn: "睫毛膏" },
    { en: "eyeshadow", cn: "眼影" },
    { en: "eyeliner", cn: "眼线笔" },
    { en: "highlighter", cn: "高光笔" },
    { en: "lipstick", cn: "口红" },
    { en: "makeup remover", cn: "卸妆水" },
    { en: "beauty sponge", cn: "美妆蛋" }
  ],
  actions: [
    { en: "Apply the primer", cn: "涂抹妆前乳" },
    { en: "Apply the foundation", cn: "上粉底" },
    { en: "Conceal the dark spots", cn: "遮盖暗斑" },
    { en: "Set it with powder", cn: "用散粉定妆" },
    { en: "Brush on the blush", cn: "刷腮红" },
    { en: "Put on the mascara", cn: "刷睫毛膏" },
    { en: "Draw the eyeliner", cn: "画眼线" },
    { en: "Apply the lipstick", cn: "涂口红" },
    { en: "Blend with a sponge", cn: "用美妆蛋晕开" },
    { en: "Remove your makeup", cn: "卸妆" }
  ]
},

/* ============ 💇 理发（haircut.srt · 男士/女士） ============ */
haircut: {
  parent: "beauty", source: "youtube", name: "理发", en: "Getting a Haircut", emoji: "💈", color: "#f0e0e8",
  nouns: [
    { en: "hair salon", cn: "美发沙龙" },
    { en: "barber shop", cn: "男士理发店" },
    { en: "barber", cn: "理发师" },
    { en: "hairstylist", cn: "发型师" },
    { en: "shampoo", cn: "洗发水" },
    { en: "conditioner", cn: "护发素" },
    { en: "comb", cn: "梳子" },
    { en: "scissors", cn: "剪刀" },
    { en: "beard", cn: "胡子" },
    { en: "fade", cn: "渐变发型" },
    { en: "trim", cn: "修剪" },
    { en: "blow dryer", cn: "吹风机" },
    { en: "curling iron", cn: "卷发棒" }
  ],
  actions: [
    { en: "Get a haircut", cn: "去理发" },
    { en: "Ask for a trim", cn: "要求修剪" },
    { en: "Shampoo your hair", cn: "洗头发" },
    { en: "Condition the hair", cn: "用护发素" },
    { en: "Comb through the hair", cn: "梳顺头发" },
    { en: "Cut the ends", cn: "剪发尾" },
    { en: "Blow dry the hair", cn: "吹干头发" },
    { en: "Style with a curling iron", cn: "用卷发棒造型" }
  ]
},

/* ============ 🛒 超市购物（grocery SHOPPING.srt） ============ */
supermarket: {
  parent: "shopping", source: "youtube", name: "超市购物", en: "Grocery Shopping", emoji: "🛒", color: "#e8f8e8",
  nouns: [
    { en: "shopping cart", cn: "购物车" },
    { en: "shopping basket", cn: "购物篮" },
    { en: "grocery list", cn: "购物清单" },
    { en: "produce section", cn: "农产品区" },
    { en: "organic produce", cn: "有机农产品" },
    { en: "green bell pepper", cn: "青椒" },
    { en: "avocado", cn: "牛油果" },
    { en: "deli counter", cn: "熟食柜台" },
    { en: "checkout counter", cn: "收银台" },
    { en: "aisle", cn: "货架过道" },
    { en: "unit price", cn: "单价" },
    { en: "frozen food", cn: "冷冻食品" },
    { en: "laundry detergent", cn: "洗衣液" }
  ],
  actions: [
    { en: "Grab a shopping cart", cn: "拿一辆购物车" },
    { en: "Make a grocery list", cn: "列购物清单" },
    { en: "Push the cart", cn: "推购物车" },
    { en: "Find the right aisle", cn: "找到对的过道" },
    { en: "Pick out the produce", cn: "挑选蔬果" },
    { en: "Weigh the fruit", cn: "称重水果" },
    { en: "Order at the deli counter", cn: "在熟食柜台点单" },
    { en: "Check out at the counter", cn: "在收银台结账" },
    { en: "Pay for the groceries", cn: "付款" }
  ]
},

/* ============ 🍎 苹果店（APPLE store.srt） ============ */
apple_store: {
  parent: "shopping", source: "youtube", name: "逛苹果店", en: "At the Apple Store", emoji: "🍎", color: "#e0e8f0",
  nouns: [
    { en: "smartphone", cn: "智能手机" },
    { en: "laptop", cn: "笔记本电脑" },
    { en: "touch screen", cn: "触摸屏" },
    { en: "lock screen", cn: "锁屏" },
    { en: "home screen", cn: "主屏幕" },
    { en: "camera", cn: "摄像头" },
    { en: "USB port", cn: "充电接口" },
    { en: "app", cn: "应用程序" },
    { en: "text message", cn: "短信" },
    { en: "phone call", cn: "电话" },
    { en: "apple pencil", cn: "手写笔" },
    { en: "apple watch", cn: "智能手表" },
    { en: "keyboard", cn: "键盘" }
  ],
  actions: [
    { en: "Walk into the store", cn: "走进店里" },
    { en: "Browse the products", cn: "浏览商品" },
    { en: "Touch the screen", cn: "触屏操作" },
    { en: "Lock the screen", cn: "锁定屏幕" },
    { en: "Swipe up to unlock", cn: "上滑解锁" },
    { en: "Charge the phone", cn: "给手机充电" },
    { en: "Send a text message", cn: "发短信" },
    { en: "Make a phone call", cn: "打电话" },
    { en: "Install an app", cn: "安装应用" }
  ]
},

/* ============ 🏠 日常生活（DAILY LIFE.srt） ============ */
daily_routine: {
  parent: "home", source: "youtube", name: "日常生活", en: "Daily Routine", emoji: "🌅", color: "#f0e8d8",
  nouns: [
    { en: "daily routine", cn: "日常作息" },
    { en: "alarm clock", cn: "闹钟" },
    { en: "snooze button", cn: "贪睡键" },
    { en: "pajamas", cn: "睡衣" },
    { en: "shower", cn: "淋浴" },
    { en: "breakfast", cn: "早餐" },
    { en: "lunch", cn: "午餐" },
    { en: "gym", cn: "健身房" },
    { en: "litter box", cn: "猫砂盆" },
    { en: "puppy", cn: "小狗" },
    { en: "sidewalk", cn: "人行道" }
  ],
  actions: [
    { en: "Wake up", cn: "醒来" },
    { en: "Hit the snooze button", cn: "按贪睡键" },
    { en: "Get out of bed", cn: "起床" },
    { en: "Wash your face", cn: "洗脸" },
    { en: "Brush your teeth", cn: "刷牙" },
    { en: "Take a shower", cn: "洗澡" },
    { en: "Take the dog for a walk", cn: "遛狗" },
    { en: "Clean the litter box", cn: "清理猫砂盆" },
    { en: "Eat breakfast", cn: "吃早餐" },
    { en: "Pack your lunch", cn: "打包午餐" },
    { en: "Go to the gym", cn: "去健身房" }
  ]
},

/* ============ 💪 高频动作动词（20 VERBS.srt） ============ */
action_verbs: {
  parent: "home", source: "youtube", name: "高频动作动词", en: "Action Verbs", emoji: "💪", color: "#e0e0f0",
  nouns: [
    { en: "walk", cn: "走路" },
    { en: "throw", cn: "扔" },
    { en: "buy", cn: "买" },
    { en: "open", cn: "打开" },
    { en: "jump", cn: "跳" },
    { en: "push", cn: "推" },
    { en: "pull", cn: "拉" },
    { en: "drink", cn: "喝" },
    { en: "smell", cn: "闻" },
    { en: "ride", cn: "骑" },
    { en: "run", cn: "跑" },
    { en: "eat", cn: "吃" },
    { en: "sleep", cn: "睡" },
    { en: "study", cn: "学习" },
    { en: "remember", cn: "记住" },
    { en: "give", cn: "给" }
  ],
  actions: [
    { en: "Walk on the sidewalk", cn: "在人行道上走" },
    { en: "Throw the ball", cn: "扔球" },
    { en: "Buy some groceries", cn: "买些杂货" },
    { en: "Open the door", cn: "开门" },
    { en: "Jump over the puddle", cn: "跳过水坑" },
    { en: "Push the cart", cn: "推车" },
    { en: "Pull the door", cn: "拉门" },
    { en: "Drink some water", cn: "喝水" },
    { en: "Smell the flower", cn: "闻花" },
    { en: "Ride a bike", cn: "骑自行车" },
    { en: "Run in the park", cn: "在公园跑步" },
    { en: "Eat breakfast", cn: "吃早餐" },
    { en: "Sleep early", cn: "早睡" },
    { en: "Study English", cn: "学英语" },
    { en: "Remember the words", cn: "记住单词" },
    { en: "Give a gift", cn: "送礼物" }
  ]
}
});
