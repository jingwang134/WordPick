/* ============================================================
   🖼️ 场景图片资源映射
   来源：ImageGen AI 生成（v6 真实插画）
   老板选"先做 10 张示例"方案，约 50-100 积分
   ============================================================ */
const SCENE_IMAGES = {
  egg: "images/egg.jpg",
  watermelon: "images/watermelon.jpg",
  tea: "images/tea.jpg",
  teeth: "images/teeth.jpg",
  order_coffee: "images/order_coffee.jpg",
  makeup: "images/makeup.jpg",
  haircut: "images/haircut.jpg",
  supermarket: "images/supermarket.jpg",
  daily_routine: "images/daily_routine.jpg",
  gym: "images/gym.jpg"
};

/* 空间场景（SCENES）→ 一级分类映射，让老板的 16 个空间场景也纳入 28 大分类浏览 */
const SCENE_TO_CATEGORY = {
  airport: "travel",
  seaport: "travel",
  hotel_checkin: "travel",
  boarding: "travel",
  customs: "travel",
  luggage: "travel",
  rent_car: "travel",
  restaurant: "dining",
  hotpot: "dining",
  order: "dining",
  pay_bill: "dining",
  reserve: "dining",
  family: "home",
  rental: "home",
  library: "school",
  school: "school",
  office: "office",
  meeting: "office",
  email: "office",
  hospital: "hospital",
  register: "hospital",
  see_doctor: "hospital",
  medicine: "hospital",
  checkup: "hospital",
  supermarket_space: "shopping",
  shopping: "shopping",
  transport: "transport",
  subway: "transport",
  bus: "transport",
  taxi: "transport",
  bike: "transport",
  cross_road: "transport",
  sports: "fitness",
  gym: "fitness",
  weather: "weather",
  nature: "weather"
};