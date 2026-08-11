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
