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
