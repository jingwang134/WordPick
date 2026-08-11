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
