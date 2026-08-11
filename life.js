/* ============================================================
   🍳 生活微场景 v2
   一级分类（LIFE_CATEGORIES 28 个）+ 二级场景（LIFE_SCENES 100+）
   每个二级场景：nouns(名词词块) + actions(动作短语)
   ============================================================ */
const LIFE_CATEGORIES = [
  { key: "cooking", name: "厨房烹饪", emoji: "🍳" },
  { key: "cooking2", name: "烹饪进阶", emoji: "🍜" },
  { key: "breakfast", name: "早餐时光", emoji: "🥐" },
  { key: "dining", name: "餐厅用餐", emoji: "🍽️" },
  { key: "home", name: "居家日常", emoji: "🏠" },
  { key: "hygiene", name: "洗漱清洁", emoji: "🧼" },
  { key: "dressing", name: "穿衣打扮", emoji: "👕" },
  { key: "laundry", name: "洗衣家务", emoji: "🧺" },
  { key: "transport", name: "出行交通", emoji: "🚇" },
  { key: "travel", name: "旅行度假", emoji: "✈️" },
  { key: "shopping", name: "购物消费", emoji: "🛒" },
  { key: "school", name: "校园学习", emoji: "🎒" },
  { key: "office", name: "办公工作", emoji: "💼" },
  { key: "hospital", name: "医院就医", emoji: "🏥" },
  { key: "health", name: "健康养生", emoji: "💊" },
  { key: "fitness", name: "运动健身", emoji: "🏋️" },
  { key: "garden", name: "花园园艺", emoji: "🌱" },
  { key: "pets", name: "宠物日常", emoji: "🐶" },
  { key: "weather", name: "天气季节", emoji: "🌦️" },
  { key: "festival", name: "节日庆祝", emoji: "🎉" },
  { key: "entertainment", name: "影音娱乐", emoji: "🎬" },
  { key: "digital", name: "数码设备", emoji: "📱" },
  { key: "organizing", name: "收纳整理", emoji: "📦" },
  { key: "beauty", name: "美容美发", emoji: "💇" },
  { key: "car", name: "汽车养护", emoji: "🚗" },
  { key: "courier", name: "快递物流", emoji: "📮" },
  { key: "social", name: "社交聚会", emoji: "🎊" },
  { key: "repair", name: "修理DIY", emoji: "🛠️" }
];

const LIFE_SCENES = {};

/* ============ 🍳 厨房烹饪 ============ */
LIFE_SCENES.egg = {
  parent: "cooking", name: "煮鸡蛋", en: "Boiling Eggs", emoji: "🥚", color: "#fde8c8",
  nouns: [
    { en: "boiled egg", cn: "煮鸡蛋" }, { en: "fried egg", cn: "煎鸡蛋" },
    { en: "scrambled eggs", cn: "炒鸡蛋" }, { en: "egg white", cn: "蛋清" },
    { en: "yolk", cn: "蛋黄" }, { en: "shell", cn: "蛋壳" }
  ],
  actions: [
    { en: "Crack the egg", cn: "敲开鸡蛋" }, { en: "Roll it a bit", cn: "滚一下" },
    { en: "Remove the shell", cn: "剥蛋壳" }, { en: "Boil the eggs", cn: "煮鸡蛋" },
    { en: "Beat the eggs", cn: "打鸡蛋" }
  ]
};
LIFE_SCENES.watermelon = {
  parent: "cooking", name: "切西瓜", en: "Cutting Watermelon", emoji: "🍉", color: "#fde8e0",
  nouns: [
    { en: "rind", cn: "西瓜皮" }, { en: "seed", cn: "西瓜籽" },
    { en: "flesh", cn: "瓜瓤" }, { en: "seedless", cn: "无籽的" },
    { en: "melon knife", cn: "切瓜刀" }
  ],
  actions: [
    { en: "Cut it into small pieces", cn: "切成小块" }, { en: "Cut it in half", cn: "对半切开" },
    { en: "Scoop it with a spoon", cn: "用勺子挖" }, { en: "Use toothpicks to eat", cn: "用牙签吃" },
    { en: "Spit out the seeds", cn: "把籽吐掉" }
  ]
};
LIFE_SCENES.tea = {
  parent: "cooking", name: "泡茶", en: "Making Tea", emoji: "🍵", color: "#dff0d8",
  nouns: [
    { en: "teapot", cn: "茶壶" }, { en: "teacup", cn: "茶杯" },
    { en: "teabag", cn: "茶包" }, { en: "kettle", cn: "水壶" },
    { en: "loose tea", cn: "散装茶叶" }
  ],
  actions: [
    { en: "Boil the water", cn: "烧水" }, { en: "Steep the tea", cn: "泡茶" },
    { en: "Pour the tea", cn: "倒茶" }, { en: "Add some sugar", cn: "加点糖" },
    { en: "Sip the tea", cn: "小口喝茶" }
  ]
};
LIFE_SCENES.coffee = {
  parent: "cooking", name: "冲咖啡", en: "Making Coffee", emoji: "☕", color: "#e8d8c8",
  nouns: [
    { en: "coffee beans", cn: "咖啡豆" }, { en: "espresso", cn: "浓缩咖啡" },
    { en: "milk foam", cn: "奶泡" }, { en: "mug", cn: "马克杯" },
    { en: "coffee maker", cn: "咖啡机" }
  ],
  actions: [
    { en: "Grind the beans", cn: "磨咖啡豆" }, { en: "Brew the coffee", cn: "冲咖啡" },
    { en: "Add some milk", cn: "加牛奶" }, { en: "Stir it well", cn: "搅拌均匀" },
    { en: "Take a sip", cn: "喝一口" }
  ]
};
LIFE_SCENES.rice = {
  parent: "cooking", name: "煮米饭", en: "Cooking Rice", emoji: "🍚", color: "#f5f0e0",
  nouns: [
    { en: "rice cooker", cn: "电饭煲" }, { en: "steamer", cn: "蒸锅" },
    { en: "measuring cup", cn: "量杯" }, { en: "water", cn: "水" },
    { en: "bowl of rice", cn: "一碗米饭" }
  ],
  actions: [
    { en: "Wash the rice", cn: "淘米" }, { en: "Measure the water", cn: "量水" },
    { en: "Press the button", cn: "按下按钮" }, { en: "Let it steam", cn: "蒸一会儿" },
    { en: "Fluff it up", cn: "打散米饭" }
  ]
};
LIFE_SCENES.vegetables = {
  parent: "cooking", name: "切菜", en: "Chopping Vegetables", emoji: "🥕", color: "#e8f5e8",
  nouns: [
    { en: "cutting board", cn: "菜板" }, { en: "knife", cn: "菜刀" },
    { en: "carrot", cn: "胡萝卜" }, { en: "onion", cn: "洋葱" },
    { en: "garlic", cn: "大蒜" }, { en: "cabbage", cn: "卷心菜" }
  ],
  actions: [
    { en: "Chop the onion", cn: "切洋葱" }, { en: "Dice the carrot", cn: "胡萝卜切丁" },
    { en: "Peel the garlic", cn: "剥蒜" }, { en: "Slice it thin", cn: "切薄片" },
    { en: "Mince the garlic", cn: "剁蒜末" }
  ]
};
LIFE_SCENES.fruit = {
  parent: "cooking", name: "洗水果", en: "Washing Fruit", emoji: "🍎", color: "#fde8e8",
  nouns: [
    { en: "apple", cn: "苹果" }, { en: "banana", cn: "香蕉" },
    { en: "grape", cn: "葡萄" }, { en: "peach", cn: "桃子" },
    { en: "strawberry", cn: "草莓" }
  ],
  actions: [
    { en: "Wash the fruit", cn: "洗水果" }, { en: "Peel the banana", cn: "剥香蕉" },
    { en: "Cut the apple", cn: "切苹果" }, { en: "Remove the pits", cn: "去核" },
    { en: "Eat it fresh", cn: "新鲜吃" }
  ]
};
LIFE_SCENES.dinner = {
  parent: "cooking", name: "做晚饭", en: "Cooking Dinner", emoji: "🍳", color: "#fff0e0",
  nouns: [
    { en: "frying pan", cn: "平底锅" }, { en: "stove", cn: "炉灶" },
    { en: "chopsticks", cn: "筷子" }, { en: "bowl", cn: "碗" },
    { en: "plate", cn: "盘子" }
  ],
  actions: [
    { en: "Chop the vegetables", cn: "切菜" }, { en: "Stir-fry the dish", cn: "翻炒" },
    { en: "Boil the noodles", cn: "煮面" }, { en: "Serve the dishes", cn: "上菜" },
    { en: "Season it with salt", cn: "加盐调味" }
  ]
};
LIFE_SCENES.soup = {
  parent: "cooking", name: "煲汤", en: "Making Soup", emoji: "🍲", color: "#fff3e0",
  nouns: [
    { en: "soup pot", cn: "汤锅" }, { en: "ladle", cn: "汤勺" },
    { en: "chicken", cn: "鸡肉" }, { en: "mushroom", cn: "蘑菇" },
    { en: "green onion", cn: "葱" }
  ],
  actions: [
    { en: "Add the ingredients", cn: "加入食材" }, { en: "Fill with water", cn: "加水" },
    { en: "Simmer on low heat", cn: "小火慢炖" }, { en: "Skim the foam", cn: "撇去浮沫" },
    { en: "Season to taste", cn: "按口味调味" }
  ]
};

/* ============ 🍜 烹饪进阶 ============ */
LIFE_SCENES.stir_fry = {
  parent: "cooking2", name: "炒菜", en: "Stir-frying", emoji: "🍳", color: "#ffe8d0",
  nouns: [
    { en: "wok", cn: "炒锅" }, { en: "spatula", cn: "锅铲" },
    { en: "oil", cn: "油" }, { en: "soy sauce", cn: "酱油" },
    { en: "meat", cn: "肉" }
  ],
  actions: [
    { en: "Heat up the wok", cn: "热锅" }, { en: "Add the oil", cn: "倒油" },
    { en: "Toss the ingredients", cn: "翻炒食材" }, { en: "Add the sauce", cn: "加酱汁" },
    { en: "Serve it hot", cn: "趁热上桌" }
  ]
};
LIFE_SCENES.steam = {
  parent: "cooking2", name: "蒸菜", en: "Steaming Food", emoji: "🥟", color: "#e8f0e8",
  nouns: [
    { en: "steamer basket", cn: "蒸笼" }, { en: "bun", cn: "包子" },
    { en: "fish", cn: "鱼" }, { en: "ginger", cn: "姜" },
    { en: "steam", cn: "蒸汽" }
  ],
  actions: [
    { en: "Set up the steamer", cn: "架好蒸笼" }, { en: "Steam for 15 minutes", cn: "蒸15分钟" },
    { en: "Check if it is cooked", cn: "检查熟没熟" }, { en: "Serve with ginger", cn: "配姜上桌" }
  ]
};
LIFE_SCENES.bake = {
  parent: "cooking2", name: "烘焙蛋糕", en: "Baking a Cake", emoji: "🎂", color: "#fde8f0",
  nouns: [
    { en: "oven", cn: "烤箱" }, { en: "flour", cn: "面粉" },
    { en: "egg", cn: "鸡蛋" }, { en: "sugar", cn: "糖" },
    { en: "butter", cn: "黄油" }, { en: "cake mold", cn: "蛋糕模具" }
  ],
  actions: [
    { en: "Preheat the oven", cn: "预热烤箱" }, { en: "Mix the flour", cn: "混合面粉" },
    { en: "Pour into the mold", cn: "倒入模具" }, { en: "Bake for 30 minutes", cn: "烤30分钟" },
    { en: "Let it cool", cn: "放凉" }
  ]
};
LIFE_SCENES.salad = {
  parent: "cooking2", name: "做沙拉", en: "Making a Salad", emoji: "🥗", color: "#e0f0d8",
  nouns: [
    { en: "lettuce", cn: "生菜" }, { en: "tomato", cn: "西红柿" },
    { en: "cucumber", cn: "黄瓜" }, { en: "salad dressing", cn: "沙拉酱" },
    { en: "salad bowl", cn: "沙拉碗" }
  ],
  actions: [
    { en: "Wash the lettuce", cn: "洗生菜" }, { en: "Chop the tomato", cn: "切西红柿" },
    { en: "Toss the salad", cn: "拌匀沙拉" }, { en: "Drizzle the dressing", cn: "淋上沙拉酱" },
    { en: "Garnish with nuts", cn: "撒坚果点缀" }
  ]
};
LIFE_SCENES.dumplings = {
  parent: "cooking2", name: "包饺子", en: "Making Dumplings", emoji: "🥟", color: "#f0e8d8",
  nouns: [
    { en: "dough", cn: "面团" }, { en: "filling", cn: "馅料" },
    { en: "rolling pin", cn: "擀面杖" }, { en: "dumpling wrapper", cn: "饺子皮" },
    { en: "dipping sauce", cn: "蘸料" }
  ],
  actions: [
    { en: "Knead the dough", cn: "揉面" }, { en: "Roll out the wrapper", cn: "擀皮" },
    { en: "Fill the wrapper", cn: "包馅" }, { en: "Pinch the edges", cn: "捏边" },
    { en: "Boil the dumplings", cn: "煮饺子" }
  ]
};
LIFE_SCENES.bbq = {
  parent: "cooking2", name: "烧烤", en: "Barbecuing", emoji: "🍢", color: "#f0e0d0",
  nouns: [
    { en: "grill", cn: "烤架" }, { en: "charcoal", cn: "木炭" },
    { en: "skewer", cn: "烤串签" }, { en: "beef", cn: "牛肉" },
    { en: "seasoning", cn: "调味料" }
  ],
  actions: [
    { en: "Light the charcoal", cn: "点燃木炭" }, { en: "Skewer the meat", cn: "串肉" },
    { en: "Brush with sauce", cn: "刷酱" }, { en: "Flip the skewers", cn: "翻串" },
    { en: "Sprinkle the seasoning", cn: "撒调料" }
  ]
};
LIFE_SCENES.noodles = {
  parent: "cooking2", name: "煮面", en: "Cooking Noodles", emoji: "🍜", color: "#fff0e0",
  nouns: [
    { en: "noodles", cn: "面条" }, { en: "pot", cn: "锅" },
    { en: "broth", cn: "汤底" }, { en: "egg drop", cn: "蛋花" },
    { en: "green vegetables", cn: "青菜" }
  ],
  actions: [
    { en: "Boil the water", cn: "烧水" }, { en: "Drop in the noodles", cn: "下面条" },
    { en: "Stir gently", cn: "轻轻搅拌" }, { en: "Add the vegetables", cn: "加青菜" },
    { en: "Drain the noodles", cn: "捞面" }
  ]
};

/* ============ 🥐 早餐时光 ============ */
LIFE_SCENES.breakfast = {
  parent: "breakfast", name: "做早餐", en: "Making Breakfast", emoji: "🥐", color: "#fdf3d0",
  nouns: [
    { en: "toast", cn: "吐司" }, { en: "cereal", cn: "麦片" },
    { en: "milk", cn: "牛奶" }, { en: "jam", cn: "果酱" },
    { en: "bacon", cn: "培根" }, { en: "oatmeal", cn: "燕麦粥" }
  ],
  actions: [
    { en: "Pour the milk", cn: "倒牛奶" }, { en: "Spread the jam", cn: "抹果酱" },
    { en: "Toast the bread", cn: "烤面包" }, { en: "Stir the cereal", cn: "搅拌麦片" },
    { en: "Butter the toast", cn: "涂黄油" }
  ]
};
LIFE_SCENES.juice = {
  parent: "breakfast", name: "榨果汁", en: "Making Juice", emoji: "🧃", color: "#e8f8e8",
  nouns: [
    { en: "juicer", cn: "榨汁机" }, { en: "orange", cn: "橙子" },
    { en: "blender", cn: "搅拌机" }, { en: "pulp", cn: "果肉" },
    { en: "glass", cn: "玻璃杯" }
  ],
  actions: [
    { en: "Peel the orange", cn: "剥橙子" }, { en: "Put it in the juicer", cn: "放入榨汁机" },
    { en: "Blend it well", cn: "搅打均匀" }, { en: "Pour into a glass", cn: "倒进杯子" },
    { en: "Add some ice", cn: "加点冰块" }
  ]
};
LIFE_SCENES.toast = {
  parent: "breakfast", name: "烤吐司", en: "Toasting Bread", emoji: "🍞", color: "#fdf0d0",
  nouns: [
    { en: "bread slice", cn: "面包片" }, { en: "toaster", cn: "烤面包机" },
    { en: "butter", cn: "黄油" }, { en: "peanut butter", cn: "花生酱" },
    { en: "honey", cn: "蜂蜜" }
  ],
  actions: [
    { en: "Put in the toaster", cn: "放入烤面包机" }, { en: "Set the timer", cn: "定时" },
    { en: "Pop it up", cn: "弹出来" }, { en: "Spread the butter", cn: "抹黄油" },
    { en: "Drizzle some honey", cn: "淋点蜂蜜" }
  ]
};

/* ============ 🍽️ 餐厅用餐 ============ */
LIFE_SCENES.order = {
  parent: "dining", name: "点餐", en: "Ordering Food", emoji: "📋", color: "#f0e8e0",
  nouns: [
    { en: "menu", cn: "菜单" }, { en: "waiter", cn: "服务员" },
    { en: "appetizer", cn: "开胃菜" }, { en: "main course", cn: "主菜" },
    { en: "dessert", cn: "甜点" }
  ],
  actions: [
    { en: "Look at the menu", cn: "看菜单" }, { en: "Order the special", cn: "点招牌菜" },
    { en: "Ask for a recommendation", cn: "请推荐" }, { en: "Tell the waiter", cn: "告诉服务员" },
    { en: "Wait for the food", cn: "等餐" }
  ]
};
LIFE_SCENES.pay_bill = {
  parent: "dining", name: "买单", en: "Paying the Bill", emoji: "💳", color: "#e8f0e0",
  nouns: [
    { en: "bill", cn: "账单" }, { en: "cash", cn: "现金" },
    { en: "credit card", cn: "信用卡" }, { en: "change", cn: "找零" },
    { en: "receipt", cn: "收据" }
  ],
  actions: [
    { en: "Ask for the bill", cn: "要账单" }, { en: "Check the total", cn: "核对总额" },
    { en: "Pay by card", cn: "刷卡支付" }, { en: "Keep the change", cn: "不用找零" },
    { en: "Sign the receipt", cn: "签收据" }
  ]
};
LIFE_SCENES.reserve = {
  parent: "dining", name: "订座位", en: "Reserving a Table", emoji: "📞", color: "#e0e8f0",
  nouns: [
    { en: "reservation", cn: "预订" }, { en: "table for two", cn: "双人桌" },
    { en: "window seat", cn: "靠窗座位" }, { en: "party of four", cn: "四人用餐" },
    { en: "guest", cn: "宾客" }
  ],
  actions: [
    { en: "Book a table", cn: "订桌" }, { en: "Confirm the time", cn: "确认时间" },
    { en: "Request a window seat", cn: "要求靠窗" }, { en: "Show up on time", cn: "准时到" },
    { en: "Check in at the door", cn: "门口登记" }
  ]
};
LIFE_SCENES.hotpot = {
  parent: "dining", name: "吃火锅", en: "Eating Hotpot", emoji: "🍲", color: "#f0e0d0",
  nouns: [
    { en: "hotpot pot", cn: "火锅锅" }, { en: "mushroom soup base", cn: "菌汤锅底" },
    { en: "spicy soup base", cn: "辣锅底" }, { en: "lamb slices", cn: "羊肉卷" },
    { en: "dipped sauce", cn: "蘸料" }
  ],
  actions: [
    { en: "Pick the soup base", cn: "选锅底" }, { en: "Dip the lamb", cn: "涮羊肉" },
    { en: "Let it cook", cn: "煮一会儿" }, { en: "Dip it in the sauce", cn: "蘸酱" },
    { en: "Blow it cool", cn: "吹凉" }
  ]
};

/* ============ 🏠 居家日常 ============ */
LIFE_SCENES.bed = {
  parent: "home", name: "整理床铺", en: "Making the Bed", emoji: "🛏️", color: "#f8e8f0",
  nouns: [
    { en: "pillow", cn: "枕头" }, { en: "blanket", cn: "毯子" },
    { en: "sheet", cn: "床单" }, { en: "quilt", cn: "被子" },
    { en: "mattress", cn: "床垫" }
  ],
  actions: [
    { en: "Fluff the pillow", cn: "拍松枕头" }, { en: "Smooth the sheet", cn: "抹平床单" },
    { en: "Fold the blanket", cn: "叠毯子" }, { en: "Tuck in the corners", cn: "塞好边角" },
    { en: "Lay the quilt flat", cn: "铺平被子" }
  ]
};
LIFE_SCENES.fold_clothes = {
  parent: "home", name: "叠衣服", en: "Folding Clothes", emoji: "👔", color: "#e0e8f0",
  nouns: [
    { en: "t-shirt", cn: "T恤" }, { en: "sweater", cn: "毛衣" },
    { en: "socks", cn: "袜子" }, { en: "closet", cn: "衣柜" },
    { en: "drawer", cn: "抽屉" }
  ],
  actions: [
    { en: "Lay it flat", cn: "铺平" }, { en: "Fold it in half", cn: "对折" },
    { en: "Fold the sleeves", cn: "折袖子" }, { en: "Stack them up", cn: "叠放" },
    { en: "Put them away", cn: "收起来" }
  ]
};
LIFE_SCENES.sweep = {
  parent: "home", name: "扫地拖地", en: "Sweeping and Mopping", emoji: "🧹", color: "#f0f0e8",
  nouns: [
    { en: "broom", cn: "扫帚" }, { en: "dustpan", cn: "簸箕" },
    { en: "mop", cn: "拖把" }, { en: "bucket", cn: "水桶" },
    { en: "dust", cn: "灰尘" }
  ],
  actions: [
    { en: "Sweep the floor", cn: "扫地" }, { en: "Collect the dust", cn: "收垃圾" },
    { en: "Fill the bucket", cn: "接水" }, { en: "Mop the floor", cn: "拖地" },
    { en: "Squeeze out the mop", cn: "拧干拖把" }
  ]
};
LIFE_SCENES.trash = {
  parent: "home", name: "倒垃圾", en: "Taking Out the Trash", emoji: "🗑️", color: "#e8f0e8",
  nouns: [
    { en: "trash bag", cn: "垃圾袋" }, { en: "trash can", cn: "垃圾桶" },
    { en: "recycling bin", cn: "回收桶" }, { en: "kitchen waste", cn: "厨余垃圾" },
    { en: "garbage room", cn: "垃圾房" }
  ],
  actions: [
    { en: "Tie up the bag", cn: "系紧袋子" }, { en: "Take out the trash", cn: "倒垃圾" },
    { en: "Sort the recycling", cn: "分类回收" }, { en: "Throw it away", cn: "扔掉" },
    { en: "Put in a new bag", cn: "换新袋子" }
  ]
};
LIFE_SCENES.parcel = {
  parent: "home", name: "收快递", en: "Receiving a Parcel", emoji: "📦", color: "#f0e8d8",
  nouns: [
    { en: "parcel", cn: "包裹" }, { en: "courier", cn: "快递员" },
    { en: "tracking number", cn: "运单号" }, { en: "signature", cn: "签名" },
    { en: "delivery note", cn: "快递单" }
  ],
  actions: [
    { en: "Track the parcel", cn: "查物流" }, { en: "Answer the door", cn: "开门" },
    { en: "Sign for it", cn: "签收" }, { en: "Check the item", cn: "检查物品" },
    { en: "Keep the box", cn: "留箱子" }
  ]
};
LIFE_SCENES.water_plants = {
  parent: "home", name: "浇花", en: "Watering Plants", emoji: "🪴", color: "#e8f5e8",
  nouns: [
    { en: "potted plant", cn: "盆栽" }, { en: "watering can", cn: "浇水壶" },
    { en: "soil", cn: "土壤" }, { en: "leaf", cn: "叶子" },
    { en: "flower pot", cn: "花盆" }
  ],
  actions: [
    { en: "Fill the can", cn: "装水" }, { en: "Water the roots", cn: "浇根部" },
    { en: "Mist the leaves", cn: "喷叶子" }, { en: "Check the soil", cn: "检查土壤" },
    { en: "Move to the sun", cn: "移到阳光下" }
  ]
};
/* ============================================================
   🍳 生活微场景 v2 · 第二批（追加到 LIFE_SCENES）
   ============================================================ */
Object.assign(LIFE_SCENES, {

/* ============ 🧼 洗漱清洁 ============ */
handwash: {
  parent: "hygiene", name: "洗手", en: "Washing Hands", emoji: "🧼", color: "#e0f0f8",
  nouns: [
    { en: "soap", cn: "肥皂" }, { en: "tap", cn: "水龙头" },
    { en: "towel", cn: "毛巾" }, { en: "sink", cn: "洗手池" },
    { en: "foam", cn: "泡沫" }
  ],
  actions: [
    { en: "Wet your hands", cn: "打湿双手" }, { en: "Apply the soap", cn: "抹肥皂" },
    { en: "Scrub your hands", cn: "搓搓手" }, { en: "Rinse it off", cn: "冲干净" },
    { en: "Dry your hands", cn: "擦干手" }
  ]
},
teeth: {
  parent: "hygiene", name: "刷牙", en: "Brushing Teeth", emoji: "🪥", color: "#e8f5fc",
  nouns: [
    { en: "toothbrush", cn: "牙刷" }, { en: "toothpaste", cn: "牙膏" },
    { en: "toothbrush cup", cn: "牙杯" }, { en: "dental floss", cn: "牙线" },
    { en: "gums", cn: "牙龈" }
  ],
  actions: [
    { en: "Squeeze the toothpaste", cn: "挤牙膏" }, { en: "Brush your teeth", cn: "刷牙" },
    { en: "Brush up and down", cn: "上下刷" }, { en: "Rinse your mouth", cn: "漱口" },
    { en: "Spit it out", cn: "吐掉" }
  ]
},
wash_face: {
  parent: "hygiene", name: "洗脸", en: "Washing the Face", emoji: "🧴", color: "#e8f0f8",
  nouns: [
    { en: "facial cleanser", cn: "洗面奶" }, { en: "washcloth", cn: "洗脸巾" },
    { en: "lukewarm water", cn: "温水" }, { en: "mirror", cn: "镜子" },
    { en: "moisturizer", cn: "保湿霜" }
  ],
  actions: [
    { en: "Wet your face", cn: "打湿脸" }, { en: "Lather the cleanser", cn: "搓洗面奶" },
    { en: "Massage your face", cn: "按摩脸部" }, { en: "Rinse well", cn: "冲干净" },
    { en: "Pat it dry", cn: "轻拍擦干" }
  ]
},
shower: {
  parent: "hygiene", name: "洗澡", en: "Taking a Shower", emoji: "🚿", color: "#d8e8f8",
  nouns: [
    { en: "shampoo", cn: "洗发水" }, { en: "shower gel", cn: "沐浴露" },
    { en: "showerhead", cn: "花洒" }, { en: "bathtub", cn: "浴缸" },
    { en: "bath towel", cn: "浴巾" }
  ],
  actions: [
    { en: "Turn on the water", cn: "打开水" }, { en: "Adjust the temperature", cn: "调水温" },
    { en: "Lather up", cn: "抹泡泡" }, { en: "Wash your hair", cn: "洗头发" },
    { en: "Dry off", cn: "擦干身体" }
  ]
},
comb_hair: {
  parent: "hygiene", name: "梳头发", en: "Combing Hair", emoji: "💇", color: "#f0e8f0",
  nouns: [
    { en: "comb", cn: "梳子" }, { en: "hairbrush", cn: "发刷" },
    { en: "hair tie", cn: "发圈" }, { en: "hair clip", cn: "发夹" },
    { en: "fringe", cn: "刘海" }
  ],
  actions: [
    { en: "Comb your hair", cn: "梳头发" }, { en: "Tie it up", cn: "扎起来" },
    { en: "Clip it back", cn: "夹到后面" }, { en: "Smooth the frizz", cn: "抚平毛躁" },
    { en: "Style it", cn: "做个造型" }
  ]
},

/* ============ 👕 穿衣打扮 ============ */
get_dressed: {
  parent: "dressing", name: "穿衣服", en: "Getting Dressed", emoji: "👕", color: "#e0e8f8",
  nouns: [
    { en: "shirt", cn: "衬衫" }, { en: "pants", cn: "裤子" },
    { en: "socks", cn: "袜子" }, { en: "shoes", cn: "鞋子" },
    { en: "jacket", cn: "夹克" }
  ],
  actions: [
    { en: "Put on your shirt", cn: "穿上衬衫" }, { en: "Button it up", cn: "扣扣子" },
    { en: "Zip up your jacket", cn: "拉拉链" }, { en: "Tie your shoes", cn: "系鞋带" },
    { en: "Look in the mirror", cn: "照镜子" }
  ]
},
iron: {
  parent: "dressing", name: "熨衣服", en: "Ironing Clothes", emoji: "👗", color: "#f0e0e8",
  nouns: [
    { en: "iron", cn: "熨斗" }, { en: "ironing board", cn: "烫衣板" },
    { en: "wrinkle", cn: "褶皱" }, { en: "steam iron", cn: "蒸汽熨斗" },
    { en: "hanger", cn: "衣架" }
  ],
  actions: [
    { en: "Set up the board", cn: "架好烫衣板" }, { en: "Fill with water", cn: "加水" },
    { en: "Iron the wrinkles", cn: "熨平褶皱" }, { en: "Go over it twice", cn: "来回熨两遍" },
    { en: "Hang it up", cn: "挂起来" }
  ]
},
tie_tie: {
  parent: "dressing", name: "打领带", en: "Tying a Tie", emoji: "🎀", color: "#e8e0f0",
  nouns: [
    { en: "tie", cn: "领带" }, { en: "collar", cn: "衣领" },
    { en: "knot", cn: "领带结" }, { en: "shirt", cn: "衬衫" },
    { en: "suit", cn: "西装" }
  ],
  actions: [
    { en: "Put it around your neck", cn: "绕过脖子" }, { en: "Cross the ends", cn: "交叉两端" },
    { en: "Loop it through", cn: "穿过去" }, { en: "Tighten the knot", cn: "收紧领结" },
    { en: "Adjust the length", cn: "调整长度" }
  ]
},

/* ============ 🧺 洗衣家务 ============ */
laundry: {
  parent: "laundry", name: "洗衣服", en: "Doing Laundry", emoji: "🧺", color: "#f0e8f8",
  nouns: [
    { en: "washing machine", cn: "洗衣机" }, { en: "detergent", cn: "洗衣液" },
    { en: "laundry basket", cn: "洗衣篮" }, { en: "dryer", cn: "烘干机" },
    { en: "fabric softener", cn: "柔顺剂" }
  ],
  actions: [
    { en: "Sort the clothes", cn: "分拣衣服" }, { en: "Load the machine", cn: "放进洗衣机" },
    { en: "Add the detergent", cn: "加洗衣液" }, { en: "Set the cycle", cn: "设置程序" },
    { en: "Press start", cn: "按启动" }
  ]
},
hang: {
  parent: "laundry", name: "晾衣服", en: "Hanging Clothes", emoji: "🪣", color: "#e8f0e8",
  nouns: [
    { en: "clothesline", cn: "晾衣绳" }, { en: "clothespin", cn: "晾衣夹" },
    { en: "drying rack", cn: "晾衣架" }, { en: "wet clothes", cn: "湿衣服" },
    { en: "sunlight", cn: "阳光" }
  ],
  actions: [
    { en: "Shake out the clothes", cn: "抖开衣服" }, { en: "Clip them on", cn: "夹上去" },
    { en: "Spread them out", cn: "摊开" }, { en: "Dry in the sun", cn: "阳光下晾干" },
    { en: "Take them in", cn: "收进来" }
  ]
},
sew: {
  parent: "laundry", name: "缝扣子", en: "Sewing a Button", emoji: "🧵", color: "#f0e0e0",
  nouns: [
    { en: "needle", cn: "针" }, { en: "thread", cn: "线" },
    { en: "button", cn: "纽扣" }, { en: "thimble", cn: "顶针" },
    { en: "scissors", cn: "剪刀" }
  ],
  actions: [
    { en: "Thread the needle", cn: "穿针引线" }, { en: "Knot the thread", cn: "打结" },
    { en: "Sew it on", cn: "缝上去" }, { en: "Pull it tight", cn: "拉紧" },
    { en: "Cut the thread", cn: "剪线" }
  ]
},

/* ============ 🚇 出行交通 ============ */
subway: {
  parent: "transport", name: "坐地铁", en: "Taking the Subway", emoji: "🚇", color: "#e8e8f8",
  nouns: [
    { en: "subway map", cn: "地铁线路图" }, { en: "ticket machine", cn: "售票机" },
    { en: "platform", cn: "站台" }, { en: "escalator", cn: "扶梯" },
    { en: "exit", cn: "出口" }
  ],
  actions: [
    { en: "Scan the code", cn: "扫码进站" }, { en: "Go through the gate", cn: "过闸机" },
    { en: "Wait on the platform", cn: "站台等车" }, { en: "Get off the train", cn: "下车" },
    { en: "Mind the gap", cn: "小心缝隙" }
  ]
},
bus: {
  parent: "transport", name: "坐公交", en: "Taking the Bus", emoji: "🚌", color: "#e8f0f0",
  nouns: [
    { en: "bus stop", cn: "公交站" }, { en: "bus card", cn: "公交卡" },
    { en: "front door", cn: "前门" }, { en: "back door", cn: "后门" },
    { en: "bus route", cn: "公交线路" }
  ],
  actions: [
    { en: "Wait at the stop", cn: "在站台等" }, { en: "Board the bus", cn: "上车" },
    { en: "Tap your card", cn: "刷卡" }, { en: "Ring the bell", cn: "按铃" },
    { en: "Get off at the stop", cn: "到站下车" }
  ]
},
taxi: {
  parent: "transport", name: "打出租车", en: "Taking a Taxi", emoji: "🚕", color: "#f0e8e0",
  nouns: [
    { en: "taxi rank", cn: "出租车候客点" }, { en: "taxi meter", cn: "计价器" },
    { en: "destination", cn: "目的地" }, { en: "fare", cn: "车费" },
    { en: "passenger", cn: "乘客" }
  ],
  actions: [
    { en: "Hail a taxi", cn: "拦出租车" }, { en: "Tell the destination", cn: "说目的地" },
    { en: "Buckle up", cn: "系安全带" }, { en: "Pay the fare", cn: "付车费" },
    { en: "Ask for a receipt", cn: "要发票" }
  ]
},
bike: {
  parent: "transport", name: "骑自行车", en: "Riding a Bike", emoji: "🚲", color: "#e8f0e8",
  nouns: [
    { en: "bicycle", cn: "自行车" }, { en: "helmet", cn: "头盔" },
    { en: "handlebar", cn: "车把" }, { en: "pedal", cn: "脚踏板" },
    { en: "bike lane", cn: "自行车道" }
  ],
  actions: [
    { en: "Wear the helmet", cn: "戴头盔" }, { en: "Get on the bike", cn: "上车" },
    { en: "Pedal forward", cn: "踩踏板前进" }, { en: "Turn the handlebar", cn: "转车把" },
    { en: "Ring the bell", cn: "按铃" }
  ]
},
cross_road: {
  parent: "transport", name: "过马路", en: "Crossing the Road", emoji: "🚦", color: "#f0f0e8",
  nouns: [
    { en: "crosswalk", cn: "斑马线" }, { en: "traffic light", cn: "红绿灯" },
    { en: "pedestrian", cn: "行人" }, { en: "zebra crossing", cn: "人行横道" },
    { en: "sidewalk", cn: "人行道" }
  ],
  actions: [
    { en: "Wait for the green light", cn: "等绿灯" }, { en: "Look both ways", cn: "左右看" },
    { en: "Walk on the crosswalk", cn: "走斑马线" }, { en: "Watch the cars", cn: "注意车辆" },
    { en: "Keep to the sidewalk", cn: "走人行道" }
  ]
},

/* ============ ✈️ 旅行度假 ============ */
hotel_checkin: {
  parent: "travel", name: "酒店入住", en: "Hotel Check-in", emoji: "🏨", color: "#e8e0f0",
  nouns: [
    { en: "reservation", cn: "预订" }, { en: "reception desk", cn: "前台" },
    { en: "room key", cn: "房卡" }, { en: "passport", cn: "护照" },
    { en: "room number", cn: "房间号" }
  ],
  actions: [
    { en: "Show your reservation", cn: "出示预订" }, { en: "Fill in the form", cn: "填表" },
    { en: "Take the key", cn: "拿房卡" }, { en: "Go to your room", cn: "去房间" },
    { en: "Check the facilities", cn: "检查设施" }
  ]
},
boarding: {
  parent: "travel", name: "办理登机", en: "Airport Check-in", emoji: "🛫", color: "#e0e8f8",
  nouns: [
    { en: "boarding pass", cn: "登机牌" }, { en: "check-in counter", cn: "值机柜台" },
    { en: "baggage", cn: "行李" }, { en: "boarding gate", cn: "登机口" },
    { en: "departure board", cn: "出发信息屏" }
  ],
  actions: [
    { en: "Check in online", cn: "网上值机" }, { en: "Print the pass", cn: "打印登机牌" },
    { en: "Drop off the baggage", cn: "托运行李" }, { en: "Go through security", cn: "过安检" },
    { en: "Find your gate", cn: "找登机口" }
  ]
},
customs: {
  parent: "travel", name: "过海关", en: "Going Through Customs", emoji: "🛃", color: "#e0e8e8",
  nouns: [
    { en: "customs", cn: "海关" }, { en: "immigration", cn: "入境检查" },
    { en: "declaration form", cn: "申报单" }, { en: "visa", cn: "签证" },
    { en: "stamp", cn: "印章" }
  ],
  actions: [
    { en: "Fill in the form", cn: "填申报单" }, { en: "Hand over your passport", cn: "递护照" },
    { en: "Answer the questions", cn: "回答问题" }, { en: "Show your visa", cn: "出示签证" },
    { en: "Get the stamp", cn: "盖章放行" }
  ]
},
luggage: {
  parent: "travel", name: "取行李", en: "Collecting Luggage", emoji: "🧳", color: "#f0e8e0",
  nouns: [
    { en: "baggage claim", cn: "行李提取处" }, { en: "carousel", cn: "行李转盘" },
    { en: "suitcase", cn: "行李箱" }, { en: "luggage tag", cn: "行李牌" },
    { en: "trolley", cn: "行李推车" }
  ],
  actions: [
    { en: "Find the carousel", cn: "找转盘" }, { en: "Wait for your bag", cn: "等行李" },
    { en: "Pull it off", cn: "搬下来" }, { en: "Check the tag", cn: "核对行李牌" },
    { en: "Take a trolley", cn: "推车" }
  ]
},
rent_car: {
  parent: "travel", name: "租车", en: "Renting a Car", emoji: "🚙", color: "#e0e0f0",
  nouns: [
    { en: "rental company", cn: "租车公司" }, { en: "driver's license", cn: "驾照" },
    { en: "fuel", cn: "油" }, { en: "insurance", cn: "保险" },
    { en: "key fob", cn: "车钥匙" }
  ],
  actions: [
    { en: "Show your license", cn: "出示驾照" }, { en: "Choose a car", cn: "选车" },
    { en: "Sign the contract", cn: "签合同" }, { en: "Check the car", cn: "检查车况" },
    { en: "Return it on time", cn: "按时还车" }
  ]
},

/* ============ 🛒 购物消费 ============ */
supermarket: {
  parent: "shopping", name: "逛超市", en: "At the Supermarket", emoji: "🛒", color: "#e8f8e8",
  nouns: [
    { en: "shopping cart", cn: "购物车" }, { en: "aisle", cn: "货架过道" },
    { en: "checkout", cn: "收银台" }, { en: "barcode", cn: "条形码" },
    { en: "plastic bag", cn: "塑料袋" }
  ],
  actions: [
    { en: "Make a shopping list", cn: "列购物清单" }, { en: "Pick out the fruit", cn: "挑选水果" },
    { en: "Weigh the produce", cn: "给蔬果称重" }, { en: "Pay at the checkout", cn: "收银台结账" },
    { en: "Scan the barcode", cn: "扫条形码" }
  ]
},
online: {
  parent: "shopping", name: "网购", en: "Online Shopping", emoji: "📱", color: "#e0e0f0",
  nouns: [
    { en: "online store", cn: "网店" }, { en: "shopping cart", cn: "购物车" },
    { en: "coupon", cn: "优惠券" }, { en: "delivery fee", cn: "运费" },
    { en: "review", cn: "评价" }
  ],
  actions: [
    { en: "Browse the products", cn: "浏览商品" }, { en: "Compare prices", cn: "比价" },
    { en: "Add to cart", cn: "加入购物车" }, { en: "Apply the coupon", cn: "用优惠券" },
    { en: "Place the order", cn: "下单" }
  ]
},
try_on: {
  parent: "shopping", name: "试衣服", en: "Trying on Clothes", emoji: "👗", color: "#f0e0e8",
  nouns: [
    { en: "fitting room", cn: "试衣间" }, { en: "mirror", cn: "镜子" },
    { en: "size", cn: "尺码" }, { en: "dress", cn: "连衣裙" },
    { en: "waist", cn: "腰围" }
  ],
  actions: [
    { en: "Pick your size", cn: "选尺码" }, { en: "Try it on", cn: "试穿" },
    { en: "Check the fit", cn: "看合不合身" }, { en: "Move around", cn: "走动看看" },
    { en: "Buy or pass", cn: "决定买不买" }
  ]
},
refund: {
  parent: "shopping", name: "退货", en: "Returning an Item", emoji: "↩️", color: "#e8f0e0",
  nouns: [
    { en: "receipt", cn: "收据" }, { en: "refund", cn: "退款" },
    { en: "return policy", cn: "退货政策" }, { en: "exchange", cn: "换货" },
    { en: "original package", cn: "原包装" }
  ],
  actions: [
    { en: "Bring the receipt", cn: "带收据" }, { en: "Explain the issue", cn: "说明问题" },
    { en: "Fill in the form", cn: "填单" }, { en: "Get the refund", cn: "拿退款" },
    { en: "Keep the receipt", cn: "留好收据" }
  ]
},
bargain: {
  parent: "shopping", name: "砍价", en: "Bargaining", emoji: "🤝", color: "#f0e8e0",
  nouns: [
    { en: "price", cn: "价格" }, { en: "discount", cn: "折扣" },
    { en: "stall", cn: "摊位" }, { en: "vendor", cn: "摊主" },
    { en: "deal", cn: "划算的交易" }
  ],
  actions: [
    { en: "Ask the price", cn: "问价格" }, { en: "Make an offer", cn: "出价" },
    { en: "Ask for a discount", cn: "要折扣" }, { en: "Walk away", cn: "假装走开" },
    { en: "Agree on a price", cn: "谈成价格" }
  ]
},

/* ============ 🎒 校园学习 ============ */
class_lesson: {
  parent: "school", name: "去上课", en: "Going to Class", emoji: "🎒", color: "#e0e8f0",
  nouns: [
    { en: "classroom", cn: "教室" }, { en: "backpack", cn: "书包" },
    { en: "notebook", cn: "笔记本" }, { en: "desk", cn: "课桌" },
    { en: "teacher", cn: "老师" }
  ],
  actions: [
    { en: "Get to class on time", cn: "准时到课" }, { en: "Take notes", cn: "记笔记" },
    { en: "Ask a question", cn: "提问" }, { en: "Raise your hand", cn: "举手" },
    { en: "Do the exercises", cn: "做练习" }
  ]
},
library_borrow: {
  parent: "school", name: "图书馆借书", en: "Borrowing Books", emoji: "📚", color: "#e8e8f0",
  nouns: [
    { en: "library card", cn: "借书证" }, { en: "catalogue", cn: "目录" },
    { en: "bookshelf", cn: "书架" }, { en: "due date", cn: "到期日" },
    { en: "renewal", cn: "续借" }
  ],
  actions: [
    { en: "Search the catalogue", cn: "查目录" }, { en: "Find the shelf", cn: "找书架" },
    { en: "Check out the book", cn: "借书" }, { en: "Scan the card", cn: "扫码" },
    { en: "Return it on time", cn: "按时还书" }
  ]
},
homework: {
  parent: "school", name: "写作业", en: "Doing Homework", emoji: "📝", color: "#f0f0e8",
  nouns: [
    { en: "assignment", cn: "作业任务" }, { en: "exercise book", cn: "练习本" },
    { en: "deadline", cn: "截止日期" }, { en: "dictionary", cn: "字典" },
    { en: "study desk", cn: "书桌" }
  ],
  actions: [
    { en: "Read the questions", cn: "读题" }, { en: "Plan your time", cn: "规划时间" },
    { en: "Write the answers", cn: "写答案" }, { en: "Check your work", cn: "检查作业" },
    { en: "Hand it in", cn: "交作业" }
  ]
},
exam: {
  parent: "school", name: "考试", en: "Taking an Exam", emoji: "📄", color: "#f0e0e0",
  nouns: [
    { en: "exam paper", cn: "试卷" }, { en: "answer sheet", cn: "答题卡" },
    { en: "multiple choice", cn: "选择题" }, { en: "essay question", cn: "论述题" },
    { en: "time limit", cn: "时间限制" }
  ],
  actions: [
    { en: "Read the instructions", cn: "读说明" }, { en: "Manage your time", cn: "分配时间" },
    { en: "Fill in the answers", cn: "填写答案" }, { en: "Double-check", cn: "复查" },
    { en: "Hand in the paper", cn: "交卷" }
  ]
},

/* ============ 💼 办公工作 ============ */
meeting: {
  parent: "office", name: "开早会", en: "Morning Meeting", emoji: "📊", color: "#e0e0f0",
  nouns: [
    { en: "meeting room", cn: "会议室" }, { en: "agenda", cn: "议程" },
    { en: "whiteboard", cn: "白板" }, { en: "projector", cn: "投影仪" },
    { en: "minutes", cn: "会议纪要" }
  ],
  actions: [
    { en: "Set the agenda", cn: "定议程" }, { en: "Present the report", cn: "汇报" },
    { en: "Take notes", cn: "做记录" }, { en: "Discuss the plan", cn: "讨论方案" },
    { en: "Assign the tasks", cn: "分配任务" }
  ]
},
email: {
  parent: "office", name: "写邮件", en: "Writing an Email", emoji: "✉️", color: "#e0e8f8",
  nouns: [
    { en: "subject line", cn: "主题行" }, { en: "attachment", cn: "附件" },
    { en: "recipient", cn: "收件人" }, { en: "signature", cn: "签名" },
    { en: "inbox", cn: "收件箱" }
  ],
  actions: [
    { en: "Write the subject", cn: "写主题" }, { en: "Draft the body", cn: "起草正文" },
    { en: "Attach the file", cn: "添加附件" }, { en: "Check the grammar", cn: "检查语法" },
    { en: "Hit send", cn: "发送" }
  ]
},
ppt: {
  parent: "office", name: "做PPT", en: "Making a PPT", emoji: "🖥️", color: "#e8e0e8",
  nouns: [
    { en: "slide", cn: "幻灯片" }, { en: "template", cn: "模板" },
    { en: "chart", cn: "图表" }, { en: "bullet point", cn: "要点" },
    { en: "animation", cn: "动画" }
  ],
  actions: [
    { en: "Choose a template", cn: "选模板" }, { en: "Add the slides", cn: "加幻灯片" },
    { en: "Insert the charts", cn: "插入图表" }, { en: "Add the bullets", cn: "加要点" },
    { en: "Practice the speech", cn: "练习演讲" }
  ]
},
print: {
  parent: "office", name: "打印文件", en: "Printing Files", emoji: "🖨️", color: "#f0e0e0",
  nouns: [
    { en: "printer", cn: "打印机" }, { en: "paper tray", cn: "纸盒" },
    { en: "toner", cn: "墨粉" }, { en: "document", cn: "文档" },
    { en: "copy", cn: "复印件" }
  ],
  actions: [
    { en: "Open the file", cn: "打开文件" }, { en: "Click print", cn: "点打印" },
    { en: "Choose the printer", cn: "选打印机" }, { en: "Set the pages", cn: "设置页数" },
    { en: "Collect the paper", cn: "取纸" }
  ]
},

/* ============ 🏥 医院就医 ============ */
register: {
  parent: "hospital", name: "挂号", en: "Registering at the Hospital", emoji: "🩺", color: "#f0e0e8",
  nouns: [
    { en: "registration desk", cn: "挂号处" }, { en: "medical card", cn: "就诊卡" },
    { en: "queue number", cn: "排队号" }, { en: "department", cn: "科室" },
    { en: "clinic", cn: "门诊" }
  ],
  actions: [
    { en: "Take a number", cn: "取号" }, { en: "Choose the department", cn: "选科室" },
    { en: "Show your card", cn: "出示就诊卡" }, { en: "Pay the fee", cn: "交费" },
    { en: "Wait for your turn", cn: "等叫号" }
  ]
},
see_doctor: {
  parent: "hospital", name: "看医生", en: "Seeing the Doctor", emoji: "👨‍⚕️", color: "#e8f0f0",
  nouns: [
    { en: "doctor", cn: "医生" }, { en: "symptom", cn: "症状" },
    { en: "diagnosis", cn: "诊断" }, { en: "prescription", cn: "处方" },
    { en: "stethoscope", cn: "听诊器" }
  ],
  actions: [
    { en: "Describe the symptoms", cn: "描述症状" }, { en: "Answer the questions", cn: "回答问题" },
    { en: "Get examined", cn: "做检查" }, { en: "Hear the diagnosis", cn: "听诊断" },
    { en: "Ask about the medicine", cn: "问用药" }
  ]
},
medicine: {
  parent: "hospital", name: "取药", en: "Getting Medicine", emoji: "💊", color: "#f0e8e0",
  nouns: [
    { en: "pharmacy", cn: "药房" }, { en: "pill", cn: "药片" },
    { en: "dosage", cn: "剂量" }, { en: "pharmacist", cn: "药剂师" },
    { en: "medicine bag", cn: "药袋" }
  ],
  actions: [
    { en: "Hand over the prescription", cn: "递处方" }, { en: "Check the dosage", cn: "核对剂量" },
    { en: "Take it after meals", cn: "饭后服用" }, { en: "Read the label", cn: "读标签" },
    { en: "Store it properly", cn: "妥善保存" }
  ]
},
checkup: {
  parent: "hospital", name: "做检查", en: "Health Check-up", emoji: "🧪", color: "#e0e8f8",
  nouns: [
    { en: "blood test", cn: "抽血化验" }, { en: "X-ray", cn: "X光" },
    { en: "ultrasound", cn: "B超" }, { en: "result", cn: "结果" },
    { en: "lab report", cn: "化验单" }
  ],
  actions: [
    { en: "Roll up your sleeve", cn: "卷起袖子" }, { en: "Get the blood drawn", cn: "抽血" },
    { en: "Wait for the result", cn: "等结果" }, { en: "Check the report", cn: "看报告" },
    { en: "Follow the advice", cn: "遵医嘱" }
  ]
},

/* ============ 💊 健康养生 ============ */
temperature: {
  parent: "health", name: "量体温", en: "Taking Temperature", emoji: "🌡️", color: "#f0e8e0",
  nouns: [
    { en: "thermometer", cn: "体温计" }, { en: "fever", cn: "发烧" },
    { en: "degree", cn: "度数" }, { en: "forehead", cn: "额头" },
    { en: "temperature gun", cn: "额温枪" }
  ],
  actions: [
    { en: "Shake the thermometer", cn: "甩体温计" }, { en: "Place it under the tongue", cn: "放舌下" },
    { en: "Wait a minute", cn: "等一分钟" }, { en: "Read the number", cn: "读数" },
    { en: "Record it down", cn: "记下来" }
  ]
},
sleep_early: {
  parent: "health", name: "早睡", en: "Sleeping Early", emoji: "😴", color: "#e0e0f0",
  nouns: [
    { en: "bedtime", cn: "就寝时间" }, { en: "alarm", cn: "闹钟" },
    { en: "sleep mask", cn: "眼罩" }, { en: "bedside lamp", cn: "床头灯" },
    { en: "dream", cn: "梦" }
  ],
  actions: [
    { en: "Put away the phone", cn: "放下手机" }, { en: "Turn off the light", cn: "关灯" },
    { en: "Lie down", cn: "躺下" }, { en: "Close your eyes", cn: "闭上眼睛" },
    { en: "Set the alarm", cn: "定闹钟" }
  ]
},
vitamin: {
  parent: "health", name: "吃维生素", en: "Taking Vitamins", emoji: "🍊", color: "#f0e8e0",
  nouns: [
    { en: "vitamin C", cn: "维生素C" }, { en: "supplement", cn: "补充剂" },
    { en: "capsule", cn: "胶囊" }, { en: "daily intake", cn: "每日摄入量" },
    { en: "nutrition", cn: "营养" }
  ],
  actions: [
    { en: "Read the label", cn: "读标签" }, { en: "Take one a day", cn: "一天一粒" },
    { en: "Swallow with water", cn: "用水吞服" }, { en: "Keep it dry", cn: "保持干燥" },
    { en: "Check the expiry", cn: "看保质期" }
  ]
}
});
/* ============================================================
   🍳 生活微场景 v2 · 第三批（追加到 LIFE_SCENES）
   ============================================================ */
Object.assign(LIFE_SCENES, {

/* ============ 🏋️ 运动健身 ============ */
gym: {
  parent: "fitness", name: "去健身房", en: "At the Gym", emoji: "🏋️", color: "#f0e8e0",
  nouns: [
    { en: "treadmill", cn: "跑步机" }, { en: "dumbbell", cn: "哑铃" },
    { en: "yoga mat", cn: "瑜伽垫" }, { en: "water bottle", cn: "水瓶" },
    { en: "sweat towel", cn: "汗巾" }
  ],
  actions: [
    { en: "Warm up first", cn: "先热身" }, { en: "Run on the treadmill", cn: "跑步机跑步" },
    { en: "Lift some weights", cn: "举铁" }, { en: "Stretch out", cn: "拉伸" },
    { en: "Cool down slowly", cn: "慢慢放松" }
  ]
},
run: {
  parent: "fitness", name: "晨跑", en: "Morning Run", emoji: "🏃", color: "#e8f0e0",
  nouns: [
    { en: "running shoes", cn: "跑鞋" }, { en: "park", cn: "公园" },
    { en: "pace", cn: "配速" }, { en: "sports watch", cn: "运动手表" },
    { en: "breath", cn: "呼吸" }
  ],
  actions: [
    { en: "Warm up first", cn: "先热身" }, { en: "Start at a slow pace", cn: "慢速起步" },
    { en: "Keep your rhythm", cn: "保持节奏" }, { en: "Breathe deeply", cn: "深呼吸" },
    { en: "Stretch after running", cn: "跑后拉伸" }
  ]
},
swim: {
  parent: "fitness", name: "游泳", en: "Swimming", emoji: "🏊", color: "#d8e8f8",
  nouns: [
    { en: "swimming pool", cn: "游泳池" }, { en: "swimming cap", cn: "泳帽" },
    { en: "goggles", cn: "泳镜" }, { en: "lane", cn: "泳道" },
    { en: "lifeguard", cn: "救生员" }
  ],
  actions: [
    { en: "Warm up in the water", cn: "水中热身" }, { en: "Do a warm-up lap", cn: "热身游一圈" },
    { en: "Breathe on the side", cn: "侧边换气" }, { en: "Kick your legs", cn: "蹬腿" },
    { en: "Rest at the edge", cn: "池边休息" }
  ]
},
yoga: {
  parent: "fitness", name: "练瑜伽", en: "Doing Yoga", emoji: "🧘", color: "#e8e8f0",
  nouns: [
    { en: "yoga pose", cn: "瑜伽姿势" }, { en: "breathing", cn: "呼吸" },
    { en: "balance", cn: "平衡" }, { en: "mats", cn: "瑜伽垫" },
    { en: "flexibility", cn: "柔韧性" }
  ],
  actions: [
    { en: "Start with breathing", cn: "从呼吸开始" }, { en: "Do the downward dog", cn: "做下犬式" },
    { en: "Hold the pose", cn: "保持姿势" }, { en: "Balance on one leg", cn: "单腿平衡" },
    { en: "End with relaxation", cn: "放松结束" }
  ]
},

/* ============ 🌱 花园园艺 ============ */
plant: {
  parent: "garden", name: "种花", en: "Planting Flowers", emoji: "🌷", color: "#e8f5e8",
  nouns: [
    { en: "seed", cn: "种子" }, { en: "flowerpot", cn: "花盆" },
    { en: "shovel", cn: "小铲子" }, { en: "compost", cn: "堆肥" },
    { en: "sprout", cn: "嫩芽" }
  ],
  actions: [
    { en: "Fill the pot with soil", cn: "装土" }, { en: "Plant the seeds", cn: "播种子" },
    { en: "Cover them lightly", cn: "轻轻盖土" }, { en: "Water gently", cn: "轻轻浇水" },
    { en: "Wait for sprouts", cn: "等发芽" }
  ]
},
water_garden: {
  parent: "garden", name: "给花园浇水", en: "Watering the Garden", emoji: "💧", color: "#e0f0e8",
  nouns: [
    { en: "garden hose", cn: "水管" }, { en: "sprinkler", cn: "洒水器" },
    { en: "flower bed", cn: "花坛" }, { en: "lawn", cn: "草坪" },
    { en: "morning dew", cn: "晨露" }
  ],
  actions: [
    { en: "Turn on the hose", cn: "打开水管" }, { en: "Water the flower beds", cn: "浇花坛" },
    { en: "Spray the lawn", cn: "喷草坪" }, { en: "Water in the morning", cn: "早晨浇水" },
    { en: "Turn it off", cn: "关掉水" }
  ]
},
prune: {
  parent: "garden", name: "修剪枝叶", en: "Pruning Plants", emoji: "✂️", color: "#e8f0e0",
  nouns: [
    { en: "pruning shears", cn: "修枝剪" }, { en: "branch", cn: "树枝" },
    { en: "leaves", cn: "叶子" }, { en: "hedge", cn: "树篱" },
    { en: "garden gloves", cn: "园艺手套" }
  ],
  actions: [
    { en: "Wear the gloves", cn: "戴手套" }, { en: "Cut the dead leaves", cn: "剪枯叶" },
    { en: "Trim the branches", cn: "修剪枝条" }, { en: "Shape the hedge", cn: "修树篱形状" },
    { en: "Collect the cuttings", cn: "收集剪下的枝" }
  ]
},

/* ============ 🐶 宠物日常 ============ */
walk_dog: {
  parent: "pets", name: "遛狗", en: "Walking the Dog", emoji: "🐕", color: "#f0e8e0",
  nouns: [
    { en: "leash", cn: "牵引绳" }, { en: "collar", cn: "项圈" },
    { en: "dog park", cn: "狗公园" }, { en: "poop bag", cn: "拾便袋" },
    { en: "treat", cn: "零食" }
  ],
  actions: [
    { en: "Attach the leash", cn: "拴绳" }, { en: "Go for a walk", cn: "出去散步" },
    { en: "Let it sniff", cn: "让它闻闻" }, { en: "Pick up after it", cn: "清理便便" },
    { en: "Give it a treat", cn: "给零食奖励" }
  ]
},
feed_cat: {
  parent: "pets", name: "喂猫", en: "Feeding the Cat", emoji: "🐈", color: "#f0e8f0",
  nouns: [
    { en: "cat food", cn: "猫粮" }, { en: "food bowl", cn: "食盆" },
    { en: "water bowl", cn: "水碗" }, { en: "wet food", cn: "猫罐头" },
    { en: "cat treats", cn: "猫零食" }
  ],
  actions: [
    { en: "Fill the bowl", cn: "装满食盆" }, { en: "Refresh the water", cn: "换水" },
    { en: "Open the can", cn: "开罐头" }, { en: "Call the cat over", cn: "叫猫来" },
    { en: "Clean the bowl", cn: "洗食盆" }
  ]
},
pet_bath: {
  parent: "pets", name: "给宠物洗澡", en: "Bathing the Pet", emoji: "🛁", color: "#e0e8f0",
  nouns: [
    { en: "pet shampoo", cn: "宠物香波" }, { en: "bath towel", cn: "浴巾" },
    { en: "fur", cn: "毛发" }, { en: "bathtub", cn: "浴缸" },
    { en: "brush", cn: "刷子" }
  ],
  actions: [
    { en: "Brush the fur first", cn: "先梳毛" }, { en: "Wet the fur", cn: "打湿毛发" },
    { en: "Apply the shampoo", cn: "抹香波" }, { en: "Rinse thoroughly", cn: "彻底冲洗" },
    { en: "Dry it with a towel", cn: "用毛巾擦干" }
  ]
},
clean_litter: {
  parent: "pets", name: "清理猫砂", en: "Cleaning the Litter Box", emoji: "🐾", color: "#e8e8e0",
  nouns: [
    { en: "litter box", cn: "猫砂盆" }, { en: "cat litter", cn: "猫砂" },
    { en: "scoop", cn: "猫砂铲" }, { en: "odor", cn: "异味" },
    { en: "litter mat", cn: "防砂垫" }
  ],
  actions: [
    { en: "Scoop the waste", cn: "铲猫砂" }, { en: "Add fresh litter", cn: "加新猫砂" },
    { en: "Dispose of the waste", cn: "扔垃圾" }, { en: "Wash the box", cn: "清洗猫砂盆" },
    { en: "Dry it completely", cn: "彻底晾干" }
  ]
},

/* ============ 🌦️ 天气季节 ============ */
rain: {
  parent: "weather", name: "下雨天", en: "A Rainy Day", emoji: "🌧️", color: "#d8e0f0",
  nouns: [
    { en: "umbrella", cn: "雨伞" }, { en: "raincoat", cn: "雨衣" },
    { en: "rain boots", cn: "雨靴" }, { en: "puddle", cn: "水坑" },
    { en: "raindrop", cn: "雨滴" }
  ],
  actions: [
    { en: "Open the umbrella", cn: "撑伞" }, { en: "Put on the raincoat", cn: "穿雨衣" },
    { en: "Avoid the puddles", cn: "避开积水" }, { en: "Wipe the wet shoes", cn: "擦湿鞋" },
    { en: "Dry the umbrella", cn: "晾干雨伞" }
  ]
},
snow: {
  parent: "weather", name: "下雪天", en: "A Snowy Day", emoji: "❄️", color: "#e0e8f8",
  nouns: [
    { en: "snowflake", cn: "雪花" }, { en: "snowman", cn: "雪人" },
    { en: "snowball", cn: "雪球" }, { en: "scarf", cn: "围巾" },
    { en: "gloves", cn: "手套" }
  ],
  actions: [
    { en: "Bundle up warm", cn: "穿暖和" }, { en: "Make a snowman", cn: "堆雪人" },
    { en: "Throw snowballs", cn: "打雪仗" }, { en: "Slip on the ice", cn: "小心地滑" },
    { en: "Come inside to warm up", cn: "进屋取暖" }
  ]
},
forecast: {
  parent: "weather", name: "看天气预报", en: "Checking the Weather", emoji: "📱", color: "#e8e8f0",
  nouns: [
    { en: "weather forecast", cn: "天气预报" }, { en: "temperature", cn: "温度" },
    { en: "humidity", cn: "湿度" }, { en: "wind speed", cn: "风速" },
    { en: "weather app", cn: "天气应用" }
  ],
  actions: [
    { en: "Check the forecast", cn: "看预报" }, { en: "Check the temperature", cn: "看温度" },
    { en: "Check the humidity", cn: "看湿度" }, { en: "Dress accordingly", cn: "按天气穿衣" },
    { en: "Bring an umbrella", cn: "带伞" }
  ]
},

/* ============ 🎉 节日庆祝 ============ */
gift: {
  parent: "festival", name: "包礼物", en: "Wrapping a Gift", emoji: "🎁", color: "#fde8e8",
  nouns: [
    { en: "gift wrap", cn: "礼品包装纸" }, { en: "ribbon", cn: "丝带" },
    { en: "tape", cn: "胶带" }, { en: "scissors", cn: "剪刀" },
    { en: "gift tag", cn: "礼品标签" }
  ],
  actions: [
    { en: "Measure the paper", cn: "量纸" }, { en: "Wrap the box", cn: "包盒子" },
    { en: "Fold the edges", cn: "折边角" }, { en: "Tie the ribbon", cn: "系丝带" },
    { en: "Add the tag", cn: "挂标签" }
  ]
},
candle: {
  parent: "festival", name: "吹蜡烛", en: "Blowing Out Candles", emoji: "🕯️", color: "#fff0e0",
  nouns: [
    { en: "birthday cake", cn: "生日蛋糕" }, { en: "candle", cn: "蜡烛" },
    { en: "wish", cn: "愿望" }, { en: "flame", cn: "火焰" },
    { en: "cake knife", cn: "蛋糕刀" }
  ],
  actions: [
    { en: "Light the candles", cn: "点蜡烛" }, { en: "Make a wish", cn: "许愿" },
    { en: "Take a deep breath", cn: "深呼吸" }, { en: "Blow out the candles", cn: "吹蜡烛" },
    { en: "Cut the cake", cn: "切蛋糕" }
  ]
},
firework: {
  parent: "festival", name: "放烟花", en: "Setting off Fireworks", emoji: "🎆", color: "#f0e0f8",
  nouns: [
    { en: "firework", cn: "烟花" }, { en: "sparkler", cn: "仙女棒" },
    { en: "sky", cn: "天空" }, { en: "lighter", cn: "打火机" },
    { en: "crowd", cn: "人群" }
  ],
  actions: [
    { en: "Light the fuse", cn: "点引线" }, { en: "Step back", cn: "退后" },
    { en: "Look up at the sky", cn: "抬头看天" }, { en: "Watch the sparks", cn: "看火花" },
    { en: "Clean up the remains", cn: "清理残留" }
  ]
},
reunion: {
  parent: "festival", name: "吃团圆饭", en: "Family Reunion Dinner", emoji: "🍊", color: "#f0e0d0",
  nouns: [
    { en: "family dinner", cn: "家庭聚餐" }, { en: "hot pot", cn: "火锅" },
    { en: "dumplings", cn: "饺子" }, { en: "red envelope", cn: "红包" },
    { en: "festival", cn: "节日" }
  ],
  actions: [
    { en: "Set the table", cn: "摆桌" }, { en: "Serve the dishes", cn: "上菜" },
    { en: "Toast to the family", cn: "举杯敬家人" }, { en: "Share the stories", cn: "分享故事" },
    { en: "Give red envelopes", cn: "发红包" }
  ]
},

/* ============ 🎬 影音娱乐 ============ */
movie: {
  parent: "entertainment", name: "看电影", en: "Watching a Movie", emoji: "🎬", color: "#e8e0f0",
  nouns: [
    { en: "movie theater", cn: "电影院" }, { en: "popcorn", cn: "爆米花" },
    { en: "ticket", cn: "电影票" }, { en: "screen", cn: "银幕" },
    { en: "trailer", cn: "预告片" }
  ],
  actions: [
    { en: "Book the tickets", cn: "订票" }, { en: "Pick the seats", cn: "选座" },
    { en: "Buy the snacks", cn: "买零食" }, { en: "Find your seat", cn: "找座位" },
    { en: "Watch the film", cn: "看电影" }
  ]
},
music: {
  parent: "entertainment", name: "听音乐", en: "Listening to Music", emoji: "🎵", color: "#e0e8f0",
  nouns: [
    { en: "playlist", cn: "歌单" }, { en: "headphones", cn: "耳机" },
    { en: "speaker", cn: "音箱" }, { en: "song", cn: "歌曲" },
    { en: "lyrics", cn: "歌词" }
  ],
  actions: [
    { en: "Put on the headphones", cn: "戴耳机" }, { en: "Pick a playlist", cn: "选歌单" },
    { en: "Turn up the volume", cn: "调大音量" }, { en: "Sing along", cn: "跟着唱" },
    { en: "Shuffle the songs", cn: "随机播放" }
  ]
},
game: {
  parent: "entertainment", name: "玩游戏", en: "Playing Games", emoji: "🎮", color: "#e0e0f0",
  nouns: [
    { en: "game console", cn: "游戏机" }, { en: "controller", cn: "手柄" },
    { en: "level", cn: "关卡" }, { en: "avatar", cn: "角色" },
    { en: "high score", cn: "高分" }
  ],
  actions: [
    { en: "Start the game", cn: "开始游戏" }, { en: "Choose the character", cn: "选角色" },
    { en: "Follow the instructions", cn: "按指引操作" }, { en: "Beat the level", cn: "过关" },
    { en: "Save the progress", cn: "保存进度" }
  ]
},

/* ============ 📱 数码设备 ============ */
charge: {
  parent: "digital", name: "手机充电", en: "Charging the Phone", emoji: "🔋", color: "#e0f0e0",
  nouns: [
    { en: "charger", cn: "充电器" }, { en: "charging cable", cn: "充电线" },
    { en: "power bank", cn: "充电宝" }, { en: "socket", cn: "插座" },
    { en: "battery", cn: "电池" }
  ],
  actions: [
    { en: "Plug in the charger", cn: "插上充电器" }, { en: "Connect the cable", cn: "接数据线" },
    { en: "Check the battery", cn: "看电量" }, { en: "Wait for it to charge", cn: "等充电" },
    { en: "Unplug when full", cn: "充满拔掉" }
  ]
},
install_app: {
  parent: "digital", name: "安装APP", en: "Installing an App", emoji: "📲", color: "#e0e8f0",
  nouns: [
    { en: "app store", cn: "应用商店" }, { en: "app icon", cn: "应用图标" },
    { en: "update", cn: "更新" }, { en: "permission", cn: "权限" },
    { en: "storage", cn: "存储空间" }
  ],
  actions: [
    { en: "Search the app", cn: "搜索应用" }, { en: "Read the reviews", cn: "看评价" },
    { en: "Tap install", cn: "点安装" }, { en: "Allow the permissions", cn: "允许权限" },
    { en: "Open the app", cn: "打开应用" }
  ]
},
take_photo: {
  parent: "digital", name: "拍照", en: "Taking Photos", emoji: "📷", color: "#f0e8e0",
  nouns: [
    { en: "camera", cn: "相机" }, { en: "photo album", cn: "相册" },
    { en: "selfie", cn: "自拍" }, { en: "filter", cn: "滤镜" },
    { en: "flash", cn: "闪光灯" }
  ],
  actions: [
    { en: "Open the camera", cn: "打开相机" }, { en: "Frame the shot", cn: "构图" },
    { en: "Focus the lens", cn: "对焦" }, { en: "Press the shutter", cn: "按快门" },
    { en: "Apply a filter", cn: "加滤镜" }
  ]
},

/* ============ 📦 收纳整理 ============ */
suitcase: {
  parent: "organizing", name: "收拾行李箱", en: "Packing a Suitcase", emoji: "🧳", color: "#f0e0d0",
  nouns: [
    { en: "suitcase", cn: "行李箱" }, { en: "packing cubes", cn: "收纳袋" },
    { en: "toiletries", cn: "洗漱用品" }, { en: "charger", cn: "充电器" },
    { en: "travel bag", cn: "旅行包" }
  ],
  actions: [
    { en: "Make a packing list", cn: "列清单" }, { en: "Fold the clothes", cn: "叠衣服" },
    { en: "Roll the t-shirts", cn: "卷T恤" }, { en: "Pack the toiletries", cn: "装洗漱用品" },
    { en: "Zip it up", cn: "拉上拉链" }
  ]
},
desk_organize: {
  parent: "organizing", name: "整理书桌", en: "Organizing the Desk", emoji: "🗂️", color: "#f0e8e8",
  nouns: [
    { en: "paper stack", cn: "文件堆" }, { en: "pen holder", cn: "笔筒" },
    { en: "drawer", cn: "抽屉" }, { en: "sticky note", cn: "便利贴" },
    { en: "laptop", cn: "笔记本电脑" }
  ],
  actions: [
    { en: "Sort the papers", cn: "整理文件" }, { en: "Tidy the pens", cn: "收好笔" },
    { en: "Wipe the desk", cn: "擦桌子" }, { en: "Arrange the notes", cn: "摆放便利贴" },
    { en: "Keep it clean", cn: "保持整洁" }
  ]
},
wardrobe: {
  parent: "organizing", name: "收拾衣柜", en: "Tidying the Wardrobe", emoji: "🚪", color: "#f0e0e8",
  nouns: [
    { en: "wardrobe", cn: "衣柜" }, { en: "hanger", cn: "衣架" },
    { en: "seasonal clothes", cn: "换季衣服" }, { en: "shelf", cn: "隔板" },
    { en: "storage box", cn: "收纳箱" }
  ],
  actions: [
    { en: "Take everything out", cn: "全拿出来" }, { en: "Sort by season", cn: "按季节分类" },
    { en: "Fold the sweaters", cn: "叠毛衣" }, { en: "Hang the dresses", cn: "挂裙子" },
    { en: "Put the boxes up", cn: "放收纳箱" }
  ]
},

/* ============ 💇 美容美发 ============ */
haircut: {
  parent: "beauty", name: "理发", en: "Getting a Haircut", emoji: "💈", color: "#f0e0e8",
  nouns: [
    { en: "barber", cn: "理发师" }, { en: "scissors", cn: "剪刀" },
    { en: "hair clipper", cn: "推子" }, { en: "hair style", cn: "发型" },
    { en: "mirror", cn: "镜子" }
  ],
  actions: [
    { en: "Show a picture", cn: "给看照片" }, { en: "Explain the style", cn: "描述发型" },
    { en: "Wash your hair", cn: "洗头" }, { en: "Cut the ends", cn: "修发尾" },
    { en: "Check the result", cn: "看效果" }
  ]
},
makeup: {
  parent: "beauty", name: "化妆", en: "Applying Makeup", emoji: "💄", color: "#fde8f0",
  nouns: [
    { en: "foundation", cn: "粉底" }, { en: "lipstick", cn: "口红" },
    { en: "eyeliner", cn: "眼线笔" }, { en: "blush", cn: "腮红" },
    { en: "makeup brush", cn: "化妆刷" }
  ],
  actions: [
    { en: "Apply the foundation", cn: "上粉底" }, { en: "Draw the eyeliner", cn: "画眼线" },
    { en: "Put on the lipstick", cn: "涂口红" }, { en: "Add some blush", cn: "打腮红" },
    { en: "Check in the mirror", cn: "照镜子检查" }
  ]
},
skincare: {
  parent: "beauty", name: "护肤", en: "Skincare Routine", emoji: "🧴", color: "#e8f0f8",
  nouns: [
    { en: "toner", cn: "爽肤水" }, { en: "serum", cn: "精华液" },
    { en: "lotion", cn: "乳液" }, { en: "sunscreen", cn: "防晒霜" },
    { en: "face mask", cn: "面膜" }
  ],
  actions: [
    { en: "Clean your face", cn: "清洁面部" }, { en: "Apply the toner", cn: "拍爽肤水" },
    { en: "Use the serum", cn: "涂精华" }, { en: "Moisturize the skin", cn: "保湿" },
    { en: "Apply sunscreen", cn: "涂防晒" }
  ]
},

/* ============ 🚗 汽车养护 ============ */
gas: {
  parent: "car", name: "加油", en: "Refueling the Car", emoji: "⛽", color: "#f0f0e8",
  nouns: [
    { en: "gas station", cn: "加油站" }, { en: "gas pump", cn: "加油机" },
    { en: "fuel tank", cn: "油箱" }, { en: "gas cap", cn: "油箱盖" },
    { en: "fuel type", cn: "油品类型" }
  ],
  actions: [
    { en: "Pull up to the pump", cn: "开到加油机旁" }, { en: "Open the gas cap", cn: "开油箱盖" },
    { en: "Insert the nozzle", cn: "插入油枪" }, { en: "Squeeze the handle", cn: "按手柄" },
    { en: "Pay at the counter", cn: "柜台付款" }
  ]
},
car_wash: {
  parent: "car", name: "洗车", en: "Washing the Car", emoji: "🫧", color: "#e0e8f0",
  nouns: [
    { en: "car wash", cn: "洗车场" }, { en: "soap foam", cn: "泡沫" },
    { en: "sponge", cn: "海绵" }, { en: "water gun", cn: "水枪" },
    { en: "microfiber cloth", cn: "麂皮布" }
  ],
  actions: [
    { en: "Rinse the car", cn: "先冲水" }, { en: "Apply the foam", cn: "打泡沫" },
    { en: "Scrub the body", cn: "擦洗车身" }, { en: "Rinse it off", cn: "冲干净" },
    { en: "Dry the surface", cn: "擦干" }
  ]
},

/* ============ 📮 快递物流 ============ */
receive: {
  parent: "courier", name: "收快递", en: "Receiving a Delivery", emoji: "📦", color: "#f0e8d8",
  nouns: [
    { en: "delivery man", cn: "快递员" }, { en: "parcel", cn: "包裹" },
    { en: "tracking code", cn: "取件码" }, { en: "locker", cn: "快递柜" },
    { en: "express", cn: "快递" }
  ],
  actions: [
    { en: "Get the tracking code", cn: "获取取件码" }, { en: "Go to the locker", cn: "去快递柜" },
    { en: "Enter the code", cn: "输入取件码" }, { en: "Take out the parcel", cn: "取出包裹" },
    { en: "Check the item", cn: "检查物品" }
  ]
},
unbox: {
  parent: "courier", name: "拆快递", en: "Unboxing a Parcel", emoji: "🎊", color: "#f0e8f0",
  nouns: [
    { en: "packing tape", cn: "封箱胶带" }, { en: "bubble wrap", cn: "气泡膜" },
    { en: "cardboard box", cn: "纸箱" }, { en: "product", cn: "商品" },
    { en: "gift box", cn: "礼盒" }
  ],
  actions: [
    { en: "Cut the tape", cn: "划开胶带" }, { en: "Open the box", cn: "打开纸箱" },
    { en: "Remove the bubble wrap", cn: "拆气泡膜" }, { en: "Take out the item", cn: "取出商品" },
    { en: "Recycle the box", cn: "回收纸箱" }
  ]
},

/* ============ 🎊 社交聚会 ============ */
greet: {
  parent: "social", name: "打招呼", en: "Greeting Someone", emoji: "👋", color: "#e8f0e0",
  nouns: [
    { en: "handshake", cn: "握手" }, { en: "smile", cn: "微笑" },
    { en: "greeting", cn: "问候语" }, { en: "eye contact", cn: "眼神交流" },
    { en: "bow", cn: "鞠躬" }
  ],
  actions: [
    { en: "Wave your hand", cn: "挥手" }, { en: "Smile warmly", cn: "微笑" },
    { en: "Say hello", cn: "问好" }, { en: "Shake hands", cn: "握手" },
    { en: "Introduce yourself", cn: "自我介绍" }
  ]
},
introduce: {
  parent: "social", name: "介绍朋友", en: "Introducing Friends", emoji: "🤝", color: "#e0e8f0",
  nouns: [
    { en: "mutual friend", cn: "共同朋友" }, { en: "name card", cn: "名片" },
    { en: "first meeting", cn: "初次见面" }, { en: "small talk", cn: "寒暄" },
    { en: "connection", cn: "人脉" }
  ],
  actions: [
    { en: "Make the introduction", cn: "做介绍" }, { en: "Share a bit about them", cn: "介绍背景" },
    { en: "Break the ice", cn: "破冰" }, { en: "Exchange numbers", cn: "交换号码" },
    { en: "Say nice to meet you", cn: "说很高兴认识" }
  ]
},
party: {
  parent: "social", name: "开派对", en: "Hosting a Party", emoji: "🎉", color: "#fde8f0",
  nouns: [
    { en: "balloon", cn: "气球" }, { en: "snacks", cn: "零食" },
    { en: "drinks", cn: "饮料" }, { en: "music", cn: "音乐" },
    { en: "guest", cn: "客人" }
  ],
  actions: [
    { en: "Send the invitations", cn: "发邀请" }, { en: "Decorate the room", cn: "装饰房间" },
    { en: "Prepare the snacks", cn: "准备零食" }, { en: "Turn on the music", cn: "放音乐" },
    { en: "Welcome the guests", cn: "迎接客人" }
  ]
},

/* ============ 🛠️ 修理DIY ============ */
bulb: {
  parent: "repair", name: "换灯泡", en: "Changing a Bulb", emoji: "💡", color: "#fff0d0",
  nouns: [
    { en: "light bulb", cn: "灯泡" }, { en: "lamp", cn: "台灯" },
    { en: "ceiling light", cn: "顶灯" }, { en: "ladder", cn: "梯子" },
    { en: "switch", cn: "开关" }
  ],
  actions: [
    { en: "Turn off the light", cn: "关灯" }, { en: "Use a ladder", cn: "用梯子" },
    { en: "Unscrew the bulb", cn: "拧下灯泡" }, { en: "Screw in the new one", cn: "拧上新灯泡" },
    { en: "Turn it back on", cn: "重新开灯" }
  ]
},
furniture: {
  parent: "repair", name: "拼家具", en: "Assembling Furniture", emoji: "🪚", color: "#f0e8e0",
  nouns: [
    { en: "screwdriver", cn: "螺丝刀" }, { en: "screw", cn: "螺丝" },
    { en: "instruction manual", cn: "说明书" }, { en: "parts", cn: "零件" },
    { en: "wrench", cn: "扳手" }
  ],
  actions: [
    { en: "Read the manual", cn: "看说明书" }, { en: "Sort the parts", cn: "分类零件" },
    { en: "Attach the legs", cn: "装桌腿" }, { en: "Tighten the screws", cn: "拧紧螺丝" },
    { en: "Test the stability", cn: "测试稳固性" }
  ]
}
});
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
