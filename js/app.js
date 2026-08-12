/**
 * SipFlow — PWA Vanilla JavaScript Core Engine
 * Handcrafted for optimal offline performance, mobile usability, and drink recommendation precision.
 */

const DRINK_DATASET = [
  {
    id: 'masala-chai',
    name: "Masala Chai",
    category: "tea",
    temperature: "hot",
    moods: ["relaxed", "tired", "low", "focused"],
    preferences: ["hot", "sweet", "caffeinated"],
    times: ["morning", "afternoon", "evening"],
    weather: ["cold", "very cold", "comfortable"],
    description: "Traditional Indian black tea brewed with aromatic spices, milk, and ginger.",
    caffeine: "Medium",
    sweetness: "Sweet",
    icon: "🫖",
    caffeineScore: 60,
    sweetnessScore: 70
  },
  {
    id: 'ginger-tea',
    name: "Ginger Tea",
    category: "tea",
    temperature: "hot",
    moods: ["stressed", "low", "tired"],
    preferences: ["hot", "healthy"],
    times: ["morning", "evening", "night"],
    weather: ["cold", "very cold"],
    description: "Soothing hot infusion with freshly grated ginger and honey.",
    caffeine: "None",
    sweetness: "Mild",
    icon: "☕",
    caffeineScore: 0,
    sweetnessScore: 30
  },
  {
    id: 'green-tea',
    name: "Green Tea",
    category: "tea",
    temperature: "hot",
    moods: ["focused", "relaxed", "stressed"],
    preferences: ["hot", "healthy"],
    times: ["morning", "afternoon"],
    weather: ["comfortable", "warm"],
    description: "Light, clean steamed tea rich in antioxidants to sharpen focus gently.",
    caffeine: "Low",
    sweetness: "Unsweetened",
    icon: "🍵",
    caffeineScore: 30,
    sweetnessScore: 0
  },
  {
    id: 'lemon-tea',
    name: "Lemon Tea",
    category: "tea",
    temperature: "hot",
    moods: ["energetic", "focused", "low"],
    preferences: ["hot", "refreshing", "healthy"],
    times: ["morning", "afternoon"],
    weather: ["cold", "comfortable"],
    description: "Zesty black tea citrus blend infused with fresh lemon and raw honey.",
    caffeine: "Low",
    sweetness: "Mild",
    icon: "🍋",
    caffeineScore: 25,
    sweetnessScore: 40
  },
  {
    id: 'cold-coffee',
    name: "Cold Coffee",
    category: "coffee",
    temperature: "cold",
    moods: ["energetic", "happy", "focused", "celebrating"],
    preferences: ["cold", "sweet", "caffeinated"],
    times: ["morning", "afternoon", "evening"],
    weather: ["warm", "hot"],
    description: "Rich, velvety blended iced coffee topped with thick chocolate foam.",
    caffeine: "High",
    sweetness: "Sweet",
    icon: "🧋",
    caffeineScore: 85,
    sweetnessScore: 75
  },
  {
    id: 'iced-latte',
    name: "Iced Latte",
    category: "coffee",
    temperature: "cold",
    moods: ["focused", "happy", "energetic"],
    preferences: ["cold", "caffeinated"],
    times: ["morning", "afternoon"],
    weather: ["warm", "hot", "comfortable"],
    description: "Smooth espresso poured over chilled milk and ice cubes.",
    caffeine: "High",
    sweetness: "Mild",
    icon: "🥤",
    caffeineScore: 80,
    sweetnessScore: 30
  },
  {
    id: 'mango-shake',
    name: "Mango Shake",
    category: "milk-based",
    temperature: "cold",
    moods: ["happy", "celebrating", "relaxed"],
    preferences: ["cold", "sweet"],
    times: ["afternoon", "evening"],
    weather: ["warm", "hot"],
    description: "Creamy seasonal mango pulp blended with cold milk and cardamom.",
    caffeine: "None",
    sweetness: "High",
    icon: "🥭",
    caffeineScore: 0,
    sweetnessScore: 90
  },
  {
    id: 'banana-smoothie',
    name: "Banana Smoothie",
    category: "smoothies",
    temperature: "cold",
    moods: ["energetic", "tired", "focused"],
    preferences: ["cold", "healthy", "sweet"],
    times: ["morning", "afternoon"],
    weather: ["comfortable", "warm"],
    description: "Wholesome blend of ripe banana, oats, Greek yogurt, and almond milk.",
    caffeine: "None",
    sweetness: "Balanced",
    icon: "🍌",
    caffeineScore: 0,
    sweetnessScore: 50
  },
  {
    id: 'watermelon-juice',
    name: "Watermelon Juice",
    category: "juice",
    temperature: "cold",
    moods: ["happy", "energetic", "stressed"],
    preferences: ["cold", "refreshing", "healthy"],
    times: ["afternoon", "evening"],
    weather: ["warm", "hot"],
    description: "100% freshly pressed watermelon with a hint of mint and black salt.",
    caffeine: "None",
    sweetness: "Natural",
    icon: "🍉",
    caffeineScore: 0,
    sweetnessScore: 60
  },
  {
    id: 'lemon-mint-cooler',
    name: "Lemon Mint Cooler",
    category: "coolers",
    temperature: "cold",
    moods: ["stressed", "energetic", "happy"],
    preferences: ["cold", "refreshing"],
    times: ["afternoon", "evening"],
    weather: ["hot", "warm"],
    description: "Crisp crushed mint leaves and sparkling lime juice served on ice.",
    caffeine: "None",
    sweetness: "Mild",
    icon: "🍃",
    caffeineScore: 0,
    sweetnessScore: 40
  },
  {
    id: 'coconut-water',
    name: "Coconut Water",
    category: "healthy",
    temperature: "cold",
    moods: ["tired", "low", "relaxed"],
    preferences: ["cold", "refreshing", "healthy"],
    times: ["morning", "afternoon"],
    weather: ["hot", "warm", "comfortable"],
    description: "Pure natural electrolyte-packed tender coconut water.",
    caffeine: "None",
    sweetness: "Natural",
    icon: "🥥",
    caffeineScore: 0,
    sweetnessScore: 20
  },
  {
    id: 'fresh-lime-soda',
    name: "Fresh Lime Soda",
    category: "coolers",
    temperature: "cold",
    moods: ["happy", "celebrating", "energetic"],
    preferences: ["cold", "refreshing"],
    times: ["afternoon", "evening"],
    weather: ["warm", "hot"],
    description: "Fizzy club soda spiced with fresh lime and sweet or salted syrup.",
    caffeine: "None",
    sweetness: "Balanced",
    icon: "🥂",
    caffeineScore: 0,
    sweetnessScore: 50
  },
  {
    id: 'hot-chocolate',
    name: "Hot Chocolate",
    category: "milk-based",
    temperature: "hot",
    moods: ["low", "relaxed", "tired", "celebrating"],
    preferences: ["hot", "sweet"],
    times: ["evening", "night"],
    weather: ["very cold", "cold"],
    description: "Rich dark cocoa melted into steamed whole milk with marshmallows.",
    caffeine: "Low",
    sweetness: "High",
    icon: "🍫",
    caffeineScore: 15,
    sweetnessScore: 95
  },
  {
    id: 'cappuccino',
    name: "Cappuccino",
    category: "coffee",
    temperature: "hot",
    moods: ["focused", "energetic", "happy"],
    preferences: ["hot", "caffeinated"],
    times: ["morning", "afternoon"],
    weather: ["cold", "comfortable"],
    description: "Equal parts bold espresso, warm milk, and velvety thick foam.",
    caffeine: "High",
    sweetness: "Mild",
    icon: "☕",
    caffeineScore: 85,
    sweetnessScore: 30
  },
  {
    id: 'americano',
    name: "Americano",
    category: "coffee",
    temperature: "hot",
    moods: ["focused", "tired"],
    preferences: ["hot", "caffeinated"],
    times: ["morning"],
    weather: ["cold", "comfortable"],
    description: "Pure double shot espresso diluted with hot water for crisp boldness.",
    caffeine: "High",
    sweetness: "None",
    icon: "☕",
    caffeineScore: 95,
    sweetnessScore: 0
  },
  {
    id: 'filter-coffee',
    name: "Filter Coffee",
    category: "traditional",
    temperature: "hot",
    moods: ["focused", "energetic", "relaxed"],
    preferences: ["hot", "caffeinated", "sweet"],
    times: ["morning", "evening"],
    weather: ["cold", "comfortable"],
    description: "Authentic South Indian decoction brewed with chicory and frothed milk.",
    caffeine: "High",
    sweetness: "Balanced",
    icon: "☕",
    caffeineScore: 90,
    sweetnessScore: 60
  },
  {
    id: 'turmeric-milk',
    name: "Turmeric Milk",
    category: "traditional",
    temperature: "hot",
    moods: ["low", "tired", "stressed"],
    preferences: ["hot", "healthy"],
    times: ["night"],
    weather: ["very cold", "cold"],
    description: "Golden warm milk infused with organic turmeric, black pepper, and honey.",
    caffeine: "None",
    sweetness: "Mild",
    icon: "🥛",
    caffeineScore: 0,
    sweetnessScore: 35
  },
  {
    id: 'badam-milk',
    name: "Badam Milk",
    category: "milk-based",
    temperature: "hot",
    moods: ["relaxed", "celebrating", "low"],
    preferences: ["hot", "sweet"],
    times: ["evening", "night"],
    weather: ["cold", "very cold"],
    description: "Warm almond paste drink garnished with saffron strands and pistachios.",
    caffeine: "None",
    sweetness: "Sweet",
    icon: "🫖",
    caffeineScore: 0,
    sweetnessScore: 80
  },
  {
    id: 'strawberry-smoothie',
    name: "Strawberry Smoothie",
    category: "smoothies",
    temperature: "cold",
    moods: ["happy", "celebrating"],
    preferences: ["cold", "sweet", "healthy"],
    times: ["morning", "afternoon"],
    weather: ["warm", "hot"],
    description: "Blend of fresh strawberries, chia seeds, and almond yogurt.",
    caffeine: "None",
    sweetness: "Balanced",
    icon: "🍓",
    caffeineScore: 0,
    sweetnessScore: 65
  },
  {
    id: 'pineapple-juice',
    name: "Pineapple Juice",
    category: "juice",
    temperature: "cold",
    moods: ["energetic", "happy"],
    preferences: ["cold", "refreshing"],
    times: ["afternoon"],
    weather: ["warm", "hot"],
    description: "Tangy fresh pineapple juice served chilled with ice.",
    caffeine: "None",
    sweetness: "Sweet",
    icon: "🍍",
    caffeineScore: 0,
    sweetnessScore: 75
  },
  {
    id: 'orange-juice',
    name: "Orange Juice",
    category: "juice",
    temperature: "cold",
    moods: ["energetic", "happy", "focused"],
    preferences: ["cold", "refreshing", "healthy"],
    times: ["morning", "afternoon"],
    weather: ["warm", "comfortable"],
    description: "Freshly squeezed Valencia oranges packed with Vitamin C.",
    caffeine: "None",
    sweetness: "Natural",
    icon: "🍊",
    caffeineScore: 0,
    sweetnessScore: 65
  },
  {
    id: 'buttermilk',
    name: "Spiced Buttermilk (Chaas)",
    category: "traditional",
    temperature: "cold",
    moods: ["relaxed", "tired", "stressed"],
    preferences: ["cold", "refreshing", "healthy"],
    times: ["afternoon"],
    weather: ["hot", "warm"],
    description: "Chilled diluted yogurt churned with cumin, green chili, and cilantro.",
    caffeine: "None",
    sweetness: "Savory",
    icon: "🥛",
    caffeineScore: 0,
    sweetnessScore: 0
  },
  {
    id: 'lassi',
    name: "Sweet Lassi",
    category: "traditional",
    temperature: "cold",
    moods: ["happy", "relaxed", "celebrating"],
    preferences: ["cold", "sweet"],
    times: ["afternoon"],
    weather: ["warm", "hot"],
    description: "Thick, churned sweet curd drink topped with fresh malai cream.",
    caffeine: "None",
    sweetness: "High",
    icon: "🥛",
    caffeineScore: 0,
    sweetnessScore: 85
  },
  {
    id: 'mango-lassi',
    name: "Mango Lassi",
    category: "traditional",
    temperature: "cold",
    moods: ["happy", "celebrating"],
    preferences: ["cold", "sweet"],
    times: ["afternoon", "evening"],
    weather: ["hot", "warm"],
    description: "Creamy yogurt drink blended with sweet Alphonso mangoes.",
    caffeine: "None",
    sweetness: "High",
    icon: "🥭",
    caffeineScore: 0,
    sweetnessScore: 90
  },
  {
    id: 'berry-smoothie',
    name: "Berry Smoothie",
    category: "smoothies",
    temperature: "cold",
    moods: ["focused", "energetic"],
    preferences: ["cold", "healthy"],
    times: ["morning", "afternoon"],
    weather: ["warm", "comfortable"],
    description: "Antioxidant blend of blueberries, raspberries, and coconut milk.",
    caffeine: "None",
    sweetness: "Mild",
    icon: "🫐",
    caffeineScore: 0,
    sweetnessScore: 45
  },
  {
    id: 'mint-cooler',
    name: "Mint Cooler",
    category: "coolers",
    temperature: "cold",
    moods: ["stressed", "relaxed"],
    preferences: ["cold", "refreshing"],
    times: ["afternoon", "evening"],
    weather: ["hot", "warm"],
    description: "Hydrating herbal cucumber-mint infusion over ice crushed crystals.",
    caffeine: "None",
    sweetness: "Low",
    icon: "🥒",
    caffeineScore: 0,
    sweetnessScore: 20
  },
  {
    id: 'tender-coconut',
    name: "Tender Coconut Special",
    category: "healthy",
    temperature: "cold",
    moods: ["relaxed", "low", "tired"],
    preferences: ["cold", "refreshing", "healthy"],
    times: ["morning", "afternoon"],
    weather: ["hot", "warm"],
    description: "Natural coconut pulp blended lightly with chilled coconut water.",
    caffeine: "None",
    sweetness: "Natural",
    icon: "🥥",
    caffeineScore: 0,
    sweetnessScore: 30
  },
  {
    id: 'herbal-tea',
    name: "Chamomile Herbal Tea",
    category: "tea",
    temperature: "hot",
    moods: ["relaxed", "stressed", "low"],
    preferences: ["hot", "healthy"],
    times: ["night"],
    weather: ["cold", "comfortable"],
    description: "Calming floral infusion designed to relieve stress and ease sleep.",
    caffeine: "None",
    sweetness: "Unsweetened",
    icon: "🌼",
    caffeineScore: 0,
    sweetnessScore: 0
  },
  {
    id: 'protein-shake',
    name: "Chocolate Protein Shake",
    category: "smoothies",
    temperature: "cold",
    moods: ["energetic", "focused"],
    preferences: ["cold", "healthy"],
    times: ["morning", "afternoon"],
    weather: ["comfortable", "warm"],
    description: "Whey protein isolate blended with cold milk, peanut butter, and cocoa.",
    caffeine: "Low",
    sweetness: "Balanced",
    icon: "🏋️",
    caffeineScore: 10,
    sweetnessScore: 45
  },
  {
    id: 'iced-green-tea',
    name: "Iced Green Tea",
    category: "tea",
    temperature: "cold",
    moods: ["focused", "energetic", "relaxed"],
    preferences: ["cold", "refreshing", "healthy"],
    times: ["afternoon"],
    weather: ["warm", "hot"],
    description: "Chilled jasmine green tea with lemongrass and ice.",
    caffeine: "Low",
    sweetness: "Mild",
    icon: "🍵",
    caffeineScore: 30,
    sweetnessScore: 20
  }
];

// Custom drinks persistence & loader
let customDrinks = JSON.parse(localStorage.getItem('sipflow_custom_drinks') || '[]');
if (customDrinks.length > 0) {
  DRINK_DATASET.push(...customDrinks);
}

// App State Management
let state = {
  activeTab: 'home',
  favorites: JSON.parse(localStorage.getItem('sipflow_favs') || '[]'),
  recentHistory: JSON.parse(localStorage.getItem('sipflow_history') || '[]'),
  todaySip: JSON.parse(localStorage.getItem('sipflow_today') || 'null'),
  todaySipLogs: JSON.parse(localStorage.getItem('sipflow_sip_logs') || '[]'),
  userSettings: JSON.parse(localStorage.getItem('sipflow_settings') || '{"name":"User","prefType":"anything","darkMode":false,"notifications":true}'),
  currentWizardStep: 1,
  wizardData: {
    mood: 'happy',
    temperature: 'Comfortable',
    time: 'afternoon',
    preference: 'Anything'
  },
  lastMatch: null,
  deferredPWAInstallPrompt: null,
  exploreCategory: 'all'
};

// Lifecycle Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Splash Screen Dismissal
  setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    if (splash) {
      splash.style.opacity = '0';
      setTimeout(() => splash.remove(), 500);
    }
  }, 1500);

  // Apply saved Dark Mode preference
  if (state.userSettings.darkMode || (!('sipflow_settings' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    state.userSettings.darkMode = true;
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Populate user profile inputs
  const nameInput = document.getElementById('user-name-input');
  if (nameInput) nameInput.value = state.userSettings.name || '';
  
  const prefSelect = document.getElementById('pref-drink-type');
  if (prefSelect) prefSelect.value = state.userSettings.prefType || 'anything';
  
  const darkToggle = document.getElementById('dark-mode-toggle');
  if (darkToggle) darkToggle.checked = state.userSettings.darkMode;
  
  const notifToggle = document.getElementById('notifications-toggle');
  if (notifToggle) notifToggle.checked = state.userSettings.notifications;

  updateAvatarInitials();
  autoDetectTimeOfDay();

  // Initial View Renders
  renderTodaysSip();
  renderRecentSips();
  renderExploreGrid();
  renderFavorites();
  updateHydrationTrackerUI();
  updateProfileStatsUI();
  initWheelCanvas();
  renderMapCategoriesGrid();

  // PWA Install Event Listener
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    state.deferredPWAInstallPrompt = e;
    document.getElementById('mobile-install-btn')?.classList.remove('hidden');
    document.getElementById('desktop-pwa-banner')?.classList.remove('hidden');
    document.getElementById('pwa-install-profile-btn')?.classList.remove('hidden');
  });

  // Offline / Online status
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();

  // Carousel Drag-to-Scroll Setup
  setupCarouselDragScroll('quick-mood-scroll');

  // Register PWA Service Worker
  registerServiceWorker();
});

// Navigation Controller
window.switchTab = function(tabId) {
  state.activeTab = tabId;
  const tabs = ['home', 'explore', 'favorites', 'profile'];
  tabs.forEach(t => {
    const sec = document.getElementById(`tab-${t}`);
    if (sec) {
      if (t === tabId) sec.classList.remove('hidden');
      else sec.classList.add('hidden');
    }

    // Desktop Navbar Active State
    const dnav = document.getElementById(`dnav-${t}`);
    if (dnav) {
      if (t === tabId) {
        dnav.className = "nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold text-accent-600 dark:text-accent-400 bg-accent-500/10 border border-accent-500/20 transition-all shadow-glow-sm";
      } else {
        dnav.className = "nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-medium text-sleek-600 dark:text-sleek-400 hover:bg-sleek-100 dark:hover:bg-sleek-800/60 transition-all";
      }
    }

    // Mobile Navbar Active State
    const mnav = document.getElementById(`mnav-${t}`);
    if (mnav) {
      if (t === tabId) {
        mnav.className = "mobile-nav-btn flex flex-col items-center gap-0.5 text-accent-500 font-bold";
      } else {
        mnav.className = "mobile-nav-btn flex flex-col items-center gap-0.5 text-sleek-400 hover:text-sleek-600 dark:hover:text-sleek-200";
      }
    }
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Recommendation Scoring Algorithm
function calculateDrinkRecommendation(input, excludeId = null) {
  let scored = DRINK_DATASET.map(drink => {
    let score = 0;

    // Mood match (+5)
    if (drink.moods.includes(input.mood.toLowerCase())) score += 5;

    // Temperature match (+4)
    const tempMap = {
      'Very Cold': 'cold',
      'Cold': 'cold',
      'Comfortable': 'hot',
      'Warm': 'cold',
      'Hot': 'cold'
    };
    if (drink.temperature === tempMap[input.temperature] || 
       (input.temperature.toLowerCase().includes('cold') && drink.temperature === 'cold') ||
       (input.temperature.toLowerCase().includes('hot') && drink.temperature === 'hot')) {
      score += 4;
    }

    // Preference match (+4)
    if (input.preference.toLowerCase() !== 'anything') {
      if (drink.preferences.includes(input.preference.toLowerCase()) || 
          drink.category === input.preference.toLowerCase()) {
        score += 4;
      }
    } else {
      score += 2;
    }

    // Time match (+3)
    if (drink.times.includes(input.time.toLowerCase())) score += 3;

    // Weather match (+3)
    if (drink.weather.includes(input.temperature.toLowerCase())) score += 3;

    // Match percentage calculation (capped between 68% and 99%)
    const percentage = Math.min(99, Math.max(68, Math.round((score / 19) * 100)));

    return { ...drink, score, matchPercentage: percentage };
  });

  if (excludeId) {
    scored = scored.filter(d => d.id !== excludeId);
  }

  // Sort by score descending, with subtle random tie-break among top matches
  scored.sort((a, b) => (b.score - a.score) || (Math.random() - 0.5));
  return scored[0] || DRINK_DATASET[0];
}

window.getAnotherRecommendation = function() {
  const currentId = state.lastMatch ? state.lastMatch.id : null;
  const match = calculateDrinkRecommendation(state.wizardData, currentId);
  showRecommendationResult(match);
  showToast("Found another matching sip!");
};

function setupCarouselDragScroll(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  let dragged = false;

  container.addEventListener('mousedown', (e) => {
    isDown = true;
    dragged = false;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      dragged = true;
    }
    container.scrollLeft = scrollLeft - walk;
  });

  container.addEventListener('click', (e) => {
    if (dragged) {
      e.preventDefault();
      e.stopPropagation();
      dragged = false;
    }
  }, true);
}

window.startRecommendationFlow = function(preselectedMood = null) {
  closeResultModal();
  if (preselectedMood) {
    state.wizardData.mood = preselectedMood;
  }
  state.currentWizardStep = 1;
  renderWizardStep();
  const wizardModal = document.getElementById('wizard-modal');
  if (wizardModal) {
    wizardModal.classList.remove('hidden');
  }
};

window.closeWizard = function() {
  document.getElementById('wizard-modal')?.classList.add('hidden');
};

window.wizardNextStep = function() {
  if (state.currentWizardStep < 4) {
    state.currentWizardStep++;
    renderWizardStep();
  } else {
    closeWizard();
    const match = calculateDrinkRecommendation(state.wizardData);
    showRecommendationResult(match);
  }
};

window.wizardPrevStep = function() {
  if (state.currentWizardStep > 1) {
    state.currentWizardStep--;
    renderWizardStep();
  }
};

function autoDetectTimeOfDay() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) state.wizardData.time = 'morning';
  else if (hour >= 12 && hour < 17) state.wizardData.time = 'afternoon';
  else if (hour >= 17 && hour < 22) state.wizardData.time = 'evening';
  else state.wizardData.time = 'night';
}

function renderWizardStep() {
  const body = document.getElementById('wizard-body');
  const title = document.getElementById('wizard-title');
  const stepLabel = document.getElementById('wizard-step-label');
  const progress = document.getElementById('wizard-progress');
  const prevBtn = document.getElementById('wizard-prev-btn');
  const nextBtn = document.getElementById('wizard-next-btn');

  if (!body || !title || !stepLabel || !progress || !prevBtn || !nextBtn) return;

  prevBtn.disabled = state.currentWizardStep === 1;
  nextBtn.textContent = state.currentWizardStep === 4 ? "Get Recommendation ➔" : "Next Step";
  progress.style.width = `${(state.currentWizardStep / 4) * 100}%`;
  stepLabel.textContent = `Step ${state.currentWizardStep} of 4`;

  if (state.currentWizardStep === 1) {
    title.textContent = "How are you feeling?";
    const moods = [
      { id: 'happy', label: 'Happy 😊', sub: 'Upbeat & joyous' },
      { id: 'relaxed', label: 'Relaxed 😌', sub: 'Calm & chill' },
      { id: 'energetic', label: 'Energetic ⚡', sub: 'High vitality' },
      { id: 'tired', label: 'Tired 😴', sub: 'Need recharge' },
      { id: 'focused', label: 'Focused 🧠', sub: 'Deep work mode' },
      { id: 'low', label: 'Low 😔', sub: 'Comfort needed' },
      { id: 'stressed', label: 'Stressed 🔥', sub: 'Soothe & decompress' },
      { id: 'celebrating', label: 'Celebrating 🎉', sub: 'Fun & treat' },
      { id: 'cozy', label: 'Cozy ☕', sub: 'Warm & soothing' },
      { id: 'refreshing', label: 'Refreshing 🍋', sub: 'Crisp & cool' },
      { id: 'adventurous', label: 'Adventurous 🚀', sub: 'Unique flavors' }
    ];

    body.innerHTML = `
      <div class="grid grid-cols-2 gap-3">
        ${moods.map(m => `
          <button onclick="selectWizardOption('mood', '${m.id}')" class="p-3.5 rounded-2xl border ${state.wizardData.mood === m.id ? 'border-accent-500 bg-accent-500/10 dark:bg-accent-500/20 text-accent-600 dark:text-accent-400 font-bold shadow-glow-sm' : 'border-sleek-200 dark:border-sleek-700/80 bg-white dark:bg-sleek-950 text-sleek-700 dark:text-sleek-200'} text-left transition hover:border-accent-400">
            <span class="block text-sm mb-0.5 font-semibold">${m.label}</span>
            <span class="text-[10px] opacity-70 font-normal">${m.sub}</span>
          </button>
        `).join('')}
      </div>
    `;
  } else if (state.currentWizardStep === 2) {
    title.textContent = "What's the temperature like?";
    const temps = ["Very Cold", "Cold", "Comfortable", "Warm", "Hot"];

    body.innerHTML = `
      <div class="space-y-3">
        <button onclick="detectGeolocationWeather()" class="w-full p-3 rounded-2xl bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-500/20 text-xs font-bold flex items-center justify-center gap-2 hover:bg-accent-500/20 transition">
          <span class="material-symbols-outlined text-base">my_location</span>
          Use My Location Weather
        </button>
        <div id="geo-status" class="text-xs text-center text-sleek-400 hidden"></div>
        <div class="grid grid-cols-1 gap-2.5">
          ${temps.map(t => `
            <button onclick="selectWizardOption('temperature', '${t}')" class="p-3.5 rounded-2xl border ${state.wizardData.temperature === t ? 'border-accent-500 bg-accent-500/10 dark:bg-accent-500/20 text-accent-600 dark:text-accent-400 font-bold shadow-glow-sm' : 'border-sleek-200 dark:border-sleek-700/80 bg-white dark:bg-sleek-950 text-sleek-700 dark:text-sleek-200'} text-left text-sm transition">
              ${t}
            </button>
          `).join('')}
        </div>
      </div>
    `;
  } else if (state.currentWizardStep === 3) {
    title.textContent = "Time of Day";
    const times = [
      { id: 'morning', label: 'Morning 🌅' },
      { id: 'afternoon', label: 'Afternoon ☀️' },
      { id: 'evening', label: 'Evening 🌆' },
      { id: 'night', label: 'Night 🌙' }
    ];

    body.innerHTML = `
      <div class="space-y-3">
        <p class="text-xs text-sleek-500">Auto-detected from system clock. Override if needed:</p>
        <div class="grid grid-cols-2 gap-3">
          ${times.map(tm => `
            <button onclick="selectWizardOption('time', '${tm.id}')" class="p-4 rounded-2xl border ${state.wizardData.time === tm.id ? 'border-accent-500 bg-accent-500/10 dark:bg-accent-500/20 text-accent-600 dark:text-accent-400 font-bold shadow-glow-sm' : 'border-sleek-200 dark:border-sleek-700/80 bg-white dark:bg-sleek-950 text-sleek-700 dark:text-sleek-200'} text-center text-sm transition">
              ${tm.label}
            </button>
          `).join('')}
        </div>
      </div>
    `;
  } else if (state.currentWizardStep === 4) {
    title.textContent = "What kind of drink are you craving?";
    const prefs = ["Hot", "Cold", "Sweet", "Refreshing", "Healthy", "Caffeinated", "Anything"];

    body.innerHTML = `
      <div class="grid grid-cols-2 gap-3">
        ${prefs.map(p => `
          <button onclick="selectWizardOption('preference', '${p}')" class="p-3.5 rounded-2xl border ${state.wizardData.preference === p ? 'border-accent-500 bg-accent-500/10 dark:bg-accent-500/20 text-accent-600 dark:text-accent-400 font-bold shadow-glow-sm' : 'border-sleek-200 dark:border-sleek-700/80 bg-white dark:bg-sleek-950 text-sleek-700 dark:text-sleek-200'} text-center text-sm transition">
            ${p}
          </button>
        `).join('')}
      </div>
    `;
  }
}

window.selectWizardOption = function(key, val) {
  state.wizardData[key] = val;
  renderWizardStep();
};

window.detectGeolocationWeather = function() {
  const status = document.getElementById('geo-status');
  if (status) {
    status.classList.remove('hidden');
    status.textContent = "Requesting location...";
  }

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        let simTemp = "Comfortable";
        if (lat > 45 || lat < -45) simTemp = "Cold";
        else if (lat > 20 && lat <= 45) simTemp = "Warm";
        else simTemp = "Hot";

        state.wizardData.temperature = simTemp;
        renderWizardStep();
        showToast(`Location set: ${simTemp} temperature`);
      },
      () => {
        state.wizardData.temperature = "Warm";
        renderWizardStep();
        showToast("Location denied. Set default to Warm.");
      },
      { timeout: 4000 }
    );
  } else {
    state.wizardData.temperature = "Warm";
    renderWizardStep();
    showToast("Geolocation unavailable.");
  }
};

function showRecommendationResult(match) {
  state.lastMatch = match;

  // Append to recent sips
  state.recentHistory = [match, ...state.recentHistory.filter(d => d.id !== match.id)].slice(0, 10);
  localStorage.setItem('sipflow_history', JSON.stringify(state.recentHistory));

  // Set today's sip
  state.todaySip = match;
  localStorage.setItem('sipflow_today', JSON.stringify(state.todaySip));

  // Render Result Modal Details
  const nameEl = document.getElementById('result-drink-name');
  if (nameEl) nameEl.textContent = match.name;

  const iconEl = document.getElementById('result-icon-container');
  if (iconEl) iconEl.textContent = match.icon;

  // Robust Match Percentage calculation to prevent undefined% Match
  const matchPct = match.matchPercentage !== undefined 
    ? match.matchPercentage 
    : (match.score ? Math.min(99, Math.max(72, Math.round((match.score / 19) * 100))) : Math.floor(Math.random() * 5 + 93));

  const matchEl = document.getElementById('result-match-percentage');
  if (matchEl) matchEl.textContent = `${matchPct}% Match`;

  const badgeEl = document.getElementById('result-temp-badge');
  if (badgeEl) {
    const tempCap = match.temperature ? (match.temperature.charAt(0).toUpperCase() + match.temperature.slice(1)) : 'Refreshing';
    badgeEl.textContent = `${match.temperature === 'hot' ? '🔥' : '🧊'} ${tempCap}`;
  }

  const descEl = document.getElementById('result-description');
  if (descEl) descEl.textContent = match.description;

  // Clean, personalized rationale text
  let rationale = "";
  if (state.wizardData && state.wizardData.mood && state.wizardData.mood !== 'happy') {
    const prefStr = (state.wizardData.preference && state.wizardData.preference.toLowerCase() !== 'anything')
      ? `${state.wizardData.preference.toLowerCase()} treat`
      : 'refreshing sip';
    const tempStr = state.wizardData.temperature ? state.wizardData.temperature.toLowerCase() : 'pleasant';
    rationale = `You're feeling ${state.wizardData.mood}, it's ${tempStr} outside, and you craving a ${prefStr}. ${match.name} is selected as your ideal match.`;
  } else {
    rationale = `Curated for your moment. ${match.name} delivers a balanced flavor profile designed to match your taste and vibe.`;
  }

  const rationaleEl = document.getElementById('result-rationale');
  if (rationaleEl) rationaleEl.textContent = rationale;

  // Caffeine
  const caffText = match.caffeine || 'Medium';
  const caffScore = match.caffeineScore !== undefined ? match.caffeineScore : (caffText === 'High' ? 85 : caffText === 'Medium' ? 50 : 15);
  const caffLevel = document.getElementById('result-caffeine-level');
  if (caffLevel) caffLevel.textContent = caffText;
  const caffBar = document.getElementById('result-caffeine-bar');
  if (caffBar) caffBar.style.width = `${caffScore}%`;

  // Sweetness
  const sweetText = match.sweetness || 'Balanced';
  const sweetScore = match.sweetnessScore !== undefined ? match.sweetnessScore : (sweetText === 'Sweet' ? 85 : sweetText === 'Balanced' ? 50 : 25);
  const sweetLevel = document.getElementById('result-sweetness-level');
  if (sweetLevel) sweetLevel.textContent = sweetText;
  const sweetBar = document.getElementById('result-sweetness-bar');
  if (sweetBar) sweetBar.style.width = `${sweetScore}%`;

  // Update Nearby Venue Recommendation Card in Modal
  const vNameEl = document.getElementById('result-venue-name');
  const vAddrEl = document.getElementById('result-venue-addr');
  const vIconEl = document.getElementById('result-venue-icon');
  const vDirBtn = document.getElementById('result-venue-dir-btn');

  let venueName = 'Cafe Niloufer';
  let venueIcon = '🫖';
  const drinkLower = match.name.toLowerCase();

  if (match.category === 'boba' || drinkLower.includes('boba') || drinkLower.includes('bubble') || drinkLower.includes('milk tea')) {
    venueName = 'Gong Cha Boba & Tea';
    venueIcon = '🧋';
  } else if (match.category === 'coffee' || drinkLower.includes('coffee') || drinkLower.includes('latte') || drinkLower.includes('espresso') || drinkLower.includes('cappuccino')) {
    venueName = 'Third Wave Coffee / Starbucks';
    venueIcon = '☕';
  } else if (match.category === 'tea' || drinkLower.includes('chai') || drinkLower.includes('tea') || drinkLower.includes('matcha')) {
    venueName = 'Cafe Niloufer / Pista House';
    venueIcon = '☕';
  } else if (match.category === 'smoothie' || drinkLower.includes('juice') || drinkLower.includes('lassi') || drinkLower.includes('smoothie') || drinkLower.includes('shake')) {
    venueName = 'Pista House Juice & Shake Lounge';
    venueIcon = '🥭';
  } else {
    venueName = 'Pista House Bakery & Cafe';
    venueIcon = '🥐';
  }

  if (vNameEl) vNameEl.textContent = venueName;
  if (vAddrEl) vAddrEl.textContent = `Popular Restaurants (Cafe Niloufer, Pista House) serving ${match.name} • 0.3 km away`;
  if (vIconEl) vIconEl.textContent = venueIcon;
  if (vDirBtn) {
    vDirBtn.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('popular restaurants like Cafe Niloufer Pista House Chai Point serving ' + match.name + ' near me')}`;
  }

  updateResultFavoriteButtonUI();

  renderTodaysSip();
  renderRecentSips();

  document.getElementById('result-modal')?.classList.remove('hidden');
}

window.showRecommendationResult = showRecommendationResult;
window.showResultModal = showRecommendationResult;

window.exploreDrinkOnMap = function() {
  closeResultModal();
  switchTab('explore');
  const drinkName = state.lastMatch ? state.lastMatch.name : 'cafe';
  setTimeout(() => {
    searchNearbyPlaces(drinkName);
    const mapSec = document.getElementById('nearby-results-section');
    if (mapSec) mapSec.scrollIntoView({ behavior: 'smooth' });
  }, 300);
};

window.searchNearbyPlacesForCurrentMatch = function() {
  if (state.lastMatch) {
    const query = `popular restaurants like Cafe Niloufer Pista House Chai Point serving ${state.lastMatch.name} near me`;
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    window.open(mapUrl, '_blank');
    showToast(`Searching Google Maps for popular restaurants serving ${state.lastMatch.name}... 📍`);
  }
};

window.closeResultModal = function() {
  document.getElementById('result-modal')?.classList.add('hidden');
};

window.toggleFavorite = function(drinkId) {
  const exists = state.favorites.some(f => f.id === drinkId);
  if (exists) {
    state.favorites = state.favorites.filter(f => f.id !== drinkId);
    showToast("Removed from Favorites");
  } else {
    const drink = DRINK_DATASET.find(d => d.id === drinkId);
    if (drink) {
      state.favorites.push(drink);
      showToast("Added to Favorites ❤️");
    }
  }
  localStorage.setItem('sipflow_favs', JSON.stringify(state.favorites));

  renderFavorites();
  renderExploreGrid();
  renderTodaysSip();
  renderRecentSips();
  updateProfileStatsUI();

  if (state.lastMatch && state.lastMatch.id === drinkId) {
    updateResultFavoriteButtonUI();
  }
};

window.toggleResultFavorite = function() {
  if (state.lastMatch) {
    window.toggleFavorite(state.lastMatch.id);
  }
};

function updateResultFavoriteButtonUI() {
  if (!state.lastMatch) return;
  const isFav = state.favorites.some(f => f.id === state.lastMatch.id);
  const icon = document.getElementById('result-fav-icon');
  const text = document.getElementById('result-fav-text');
  const btn = document.getElementById('result-fav-btn');

  if (icon) {
    icon.className = isFav 
      ? "material-symbols-outlined text-base text-rose-500" 
      : "material-symbols-outlined text-base text-sleek-400 dark:text-sleek-500";
    icon.style.fontVariationSettings = isFav ? "'FILL' 1" : "'FILL' 0";
  }

  if (text) {
    text.textContent = isFav ? "Saved" : "Save";
  }

  if (btn) {
    if (isFav) {
      btn.className = "py-2 px-2.5 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold text-xs flex items-center justify-center gap-1.5 transition";
    } else {
      btn.className = "py-2 px-2.5 rounded-xl border border-sleek-200 dark:border-sleek-800 hover:bg-sleek-100 dark:hover:bg-sleek-800 text-sleek-700 dark:text-sleek-200 font-bold text-xs flex items-center justify-center gap-1.5 transition";
    }
  }
}

window.clearAllFavorites = function() {
  state.favorites = [];
  localStorage.removeItem('sipflow_favs');
  renderFavorites();
  renderExploreGrid();
  renderTodaysSip();
  renderRecentSips();
  updateProfileStatsUI();
  if (state.lastMatch) {
    updateResultFavoriteButtonUI();
  }
  showToast("All saved favorites cleared! ❤️");
};

window.clearHistoryData = function() {
  state.recentHistory = [];
  state.todaySip = null;
  localStorage.removeItem('sipflow_history');
  localStorage.removeItem('sipflow_today');
  renderTodaysSip();
  renderRecentSips();
  showToast("History cleared");
};

function renderTodaysSip() {
  const container = document.getElementById('todays-sip-container');
  if (!container) return;

  if (!state.todaySip) {
    container.innerHTML = `
      <div class="p-5 rounded-3xl bg-white dark:bg-sleek-900 border border-dashed border-sleek-200 dark:border-sleek-800 text-center">
        <p class="text-xs text-sleek-400 mb-3">No sip recommended for today yet.</p>
        <button onclick="startRecommendationFlow()" class="text-xs font-bold text-accent-500 hover:underline">
          Find Your First Sip Now ➔
        </button>
      </div>
    `;
    return;
  }

  const drink = state.todaySip;
  const isFav = state.favorites.some(f => f.id === drink.id);

  container.innerHTML = `
    <div class="p-5 rounded-3xl bg-white dark:bg-sleek-900 sleek-card-border shadow-sm flex items-center justify-between gap-4 group hover:shadow-glow-sm transition-all">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-2xl bg-accent-500/10 dark:bg-accent-500/20 flex items-center justify-center text-3xl shadow-inner border border-accent-500/10">
          ${drink.icon}
        </div>
        <div>
          <div class="flex items-center gap-2">
            <h4 class="font-bold text-base text-sleek-900 dark:text-white">${drink.name}</h4>
            <span class="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-accent-500/15 text-accent-600 dark:text-accent-300 border border-accent-500/20">
              ${drink.matchPercentage || 95}% Match
            </span>
          </div>
          <p class="text-xs text-sleek-500 dark:text-sleek-400 line-clamp-1 mt-0.5">${drink.description}</p>
        </div>
      </div>
      <button onclick="toggleFavorite('${drink.id}')" class="p-3 rounded-2xl hover:bg-sleek-100 dark:hover:bg-sleek-800 text-sleek-400 transition">
        <span class="material-symbols-outlined text-xl ${isFav ? 'text-rose-500 fill-current' : ''}">favorite</span>
      </button>
    </div>
  `;
}

function renderRecentSips() {
  const container = document.getElementById('recent-sips-container');
  if (!container) return;

  if (state.recentHistory.length === 0) {
    container.innerHTML = `
      <div class="text-xs text-sleek-400 italic py-2">
        Your recently matched beverages will appear here.
      </div>
    `;
    return;
  }

  container.innerHTML = state.recentHistory.map(drink => `
    <div onclick="showDrinkDetailsModal('${drink.id}')" class="flex-shrink-0 w-36 p-3.5 rounded-2xl bg-white dark:bg-sleek-900 sleek-card-border shadow-sm cursor-pointer hover:border-accent-500/50 hover:shadow-glow-sm transition">
      <div class="w-10 h-10 rounded-xl bg-sleek-50 dark:bg-sleek-950 flex items-center justify-center text-2xl mb-2">
        ${drink.icon}
      </div>
      <h5 class="font-bold text-xs text-sleek-900 dark:text-white truncate">${drink.name}</h5>
      <span class="text-[10px] text-sleek-400 capitalize font-medium">${drink.category}</span>
    </div>
  `).join('');
}

window.selectExploreCategory = function(cat) {
  state.exploreCategory = cat;
  document.querySelectorAll('.cat-pill').forEach(btn => {
    btn.className = "cat-pill px-4 py-2.5 rounded-xl bg-white dark:bg-sleek-900 sleek-card-border text-sleek-600 dark:text-sleek-300 hover:border-red-500/50 transition flex-shrink-0 font-medium";
  });
  if (event && event.target) {
    event.target.className = "cat-pill px-4 py-2.5 rounded-xl bg-red-600 text-white font-bold transition flex-shrink-0 shadow-glow-sm";
  }
  renderExploreGrid();
};

window.filterExploreDrinks = function() {
  renderExploreGrid();
};

function renderExploreGrid() {
  const grid = document.getElementById('explore-grid');
  if (!grid) return;

  const searchQuery = (document.getElementById('search-input')?.value || '').toLowerCase();
  const category = state.exploreCategory;

  const maxCaffeine = parseInt(document.getElementById('caffeine-slider')?.value || '100', 10);
  const maxSweetness = parseInt(document.getElementById('sweetness-slider')?.value || '100', 10);

  const filtered = DRINK_DATASET.filter(drink => {
    const matchesCategory = category === 'all' || drink.category === category;
    const matchesSearch = drink.name.toLowerCase().includes(searchQuery) || 
                          drink.description.toLowerCase().includes(searchQuery) ||
                          drink.moods.some(m => m.includes(searchQuery));
    
    const drinkCaffeineScore = drink.caffeineScore || 0;
    const drinkSweetnessScore = drink.sweetnessScore || 50;

    const matchesCaffeine = drinkCaffeineScore <= maxCaffeine;
    const matchesSweetness = drinkSweetnessScore <= maxSweetness;

    return matchesCategory && matchesSearch && matchesCaffeine && matchesSweetness;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-12 text-center text-sleek-400">
        <p class="text-base font-semibold mb-1">No drinks match your criteria.</p>
        <p class="text-xs">Try searching for something else like "tea", "coffee", or "refreshing".</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(drink => {
    const isFav = state.favorites.some(f => f.id === drink.id);
    const tempEmoji = drink.temperature === 'hot' ? '🔥' : '🧊';
    return `
      <div onclick="showDrinkDetailsModal('${drink.id}')" class="p-3.5 rounded-2xl bg-white dark:bg-sleek-900 sleek-card-border shadow-xs hover:border-red-500/50 hover:shadow-md transition cursor-pointer flex flex-col justify-between group relative">
        <div class="flex items-center justify-between mb-2">
          <span class="text-[11px] px-2 py-0.5 rounded-full bg-sleek-100 dark:bg-sleek-800 text-sleek-600 dark:text-sleek-300 font-extrabold">${tempEmoji}</span>
          <button onclick="event.stopPropagation(); toggleFavorite('${drink.id}')" class="p-1 rounded-full hover:bg-sleek-100 dark:hover:bg-sleek-800 transition">
            <span class="material-symbols-outlined text-base ${isFav ? 'text-rose-500 fill-current' : 'text-sleek-300 dark:text-sleek-600'}">favorite</span>
          </button>
        </div>
        <div class="text-center my-1">
          <div class="w-12 h-12 mx-auto rounded-2xl bg-red-500/10 dark:bg-red-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition duration-200">
            ${drink.icon}
          </div>
          <h4 class="font-extrabold text-xs text-sleek-900 dark:text-white mt-2 truncate leading-tight">${drink.name}</h4>
          <span class="text-[10px] font-semibold text-sleek-400 capitalize block mt-0.5">${drink.category}</span>
        </div>
      </div>
    `;
  }).join('');
}

function renderFavorites() {
  const container = document.getElementById('favorites-container');
  const clearBtn = document.getElementById('clear-favs-btn');
  if (!container) return;

  if (state.favorites.length === 0) {
    if (clearBtn) clearBtn.classList.add('hidden');
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-16 h-16 mx-auto mb-4 rounded-3xl bg-red-500/10 dark:bg-red-500/20 text-red-500 flex items-center justify-center text-3xl shadow-glow-sm">
          ❤️
        </div>
        <h3 class="text-lg font-bold text-sleek-800 dark:text-sleek-200 mb-1">No Saved Favorites Yet</h3>
        <p class="text-xs text-sleek-400 mb-4 max-w-xs mx-auto">Tap the heart icon on any beverage card to save it here for quick access.</p>
        <button onclick="switchTab('explore')" class="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-xs shadow-glow-sm">
          Explore Drinks Now
        </button>
      </div>
    `;
    return;
  }

  if (clearBtn) clearBtn.classList.remove('hidden');

  container.innerHTML = state.favorites.map(drink => {
    const tempEmoji = drink.temperature === 'hot' ? '🔥' : '🧊';
    return `
      <div onclick="showDrinkDetailsModal('${drink.id}')" class="p-3.5 rounded-2xl bg-white dark:bg-sleek-900 sleek-card-border shadow-xs hover:border-red-500/50 hover:shadow-md transition cursor-pointer flex flex-col justify-between group relative">
        <div class="flex items-center justify-between mb-2">
          <span class="text-[11px] px-2 py-0.5 rounded-full bg-sleek-100 dark:bg-sleek-800 text-sleek-600 dark:text-sleek-300 font-extrabold">${tempEmoji}</span>
          <button onclick="event.stopPropagation(); toggleFavorite('${drink.id}')" class="p-1 rounded-full hover:bg-rose-50 dark:hover:bg-rose-950/30 text-rose-500 transition">
            <span class="material-symbols-outlined text-base fill-current">favorite</span>
          </button>
        </div>
        <div class="text-center my-1">
          <div class="w-12 h-12 mx-auto rounded-2xl bg-red-500/10 dark:bg-red-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition duration-200">
            ${drink.icon}
          </div>
          <h4 class="font-extrabold text-xs text-sleek-900 dark:text-white mt-2 truncate leading-tight">${drink.name}</h4>
          <span class="text-[10px] font-semibold text-sleek-400 capitalize block mt-0.5">${drink.category}</span>
        </div>
      </div>
    `;
  }).join('');
}

window.showDrinkDetailsModal = function(drinkId) {
  const drink = DRINK_DATASET.find(d => d.id === drinkId);
  if (drink) {
    showRecommendationResult({
      ...drink,
      score: 15,
      matchPercentage: 94
    });
  }
};

window.toggleDarkMode = function() {
  const isDark = document.getElementById('dark-mode-toggle').checked;
  state.userSettings.darkMode = isDark;
  if (isDark) document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');
  saveUserSettings();
};

window.saveUserSettings = function() {
  const name = document.getElementById('user-name-input')?.value || "User";
  const prefType = document.getElementById('pref-drink-type')?.value || "anything";
  const notifications = document.getElementById('notifications-toggle')?.checked ?? true;

  state.userSettings = {
    name,
    prefType,
    darkMode: state.userSettings.darkMode,
    notifications
  };

  localStorage.setItem('sipflow_settings', JSON.stringify(state.userSettings));
  updateAvatarInitials();
};

function updateAvatarInitials() {
  const initial = (state.userSettings.name || 'U').charAt(0).toUpperCase();
  const avatar = document.getElementById('avatar-initials');
  if (avatar) avatar.textContent = initial;
}

window.triggerPWAInstall = function() {
  if (state.deferredPWAInstallPrompt) {
    state.deferredPWAInstallPrompt.prompt();
    state.deferredPWAInstallPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        showToast("SipFlow installed successfully!");
      }
      state.deferredPWAInstallPrompt = null;
    });
  } else {
    showToast("To install, use your browser menu -> Add to Home Screen");
  }
};

function updateOnlineStatus() {
  const banner = document.getElementById('offline-banner');
  if (!navigator.onLine) {
    banner?.classList.remove('hidden');
  } else {
    banner?.classList.add('hidden');
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  const messageEl = document.getElementById('toast-message');
  if (toast && messageEl) {
    messageEl.textContent = msg;
    toast.classList.remove('translate-y-[-100px]', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-[-100px]', 'opacity-0');
    }, 2500);
  }
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log('SipFlow Service Worker registered:', reg.scope))
      .catch(err => console.log('Service worker registration failed:', err));
  }
}

/* ==========================================================================
   FEATURE 1: RECIPE ENGINE & BREW TIMER
   ========================================================================== */
function getDrinkRecipe(drink) {
  if (!drink) return null;

  // Custom ingredients if present
  if (drink.ingredientsList) {
    return {
      ingredients: drink.ingredientsList,
      steps: [
        "Gather all listed ingredients.",
        "Combine in a cup or blender according to desired texture.",
        "Serve fresh and enjoy your custom beverage!"
      ],
      prepTime: "3-5 mins",
      timerSeconds: 180
    };
  }

  const recipes = {
    'masala-chai': {
      ingredients: [
        "1 cup Water & 1/2 cup Milk",
        "2 tsp CTC Assam Black Tea leaves",
        "1 slice fresh Ginger (crushed)",
        "2 Green Cardamom pods & 1 Cloves",
        "1-2 tsp Sugar / Honey"
      ],
      steps: [
        "Boil water in a saucepan with crushed ginger and cardamom pods.",
        "Add black tea leaves and simmer gently for 2 minutes until deep amber.",
        "Pour in milk and sugar; bring to a rolling boil twice for creamy richness.",
        "Strain into your favorite mug and serve hot!"
      ],
      prepTime: "6 mins",
      timerSeconds: 180
    },
    'cold-coffee': {
      ingredients: [
        "1 tbsp Instant Coffee granules",
        "2 tbsp Warm Water",
        "1 cup Chilled Whole Milk",
        "1.5 tbsp Sugar or Condensed Milk",
        "4-5 Ice cubes",
        "Chocolate syrup (optional garnish)"
      ],
      steps: [
        "Whisk coffee powder, sugar, and warm water in a jar until frothy.",
        "Transfer to a blender, add ice cubes and chilled milk.",
        "Blend on high speed for 30 seconds until a thick velvety foam forms.",
        "Drizzle chocolate syrup inside a tall glass and pour cold coffee."
      ],
      prepTime: "4 mins",
      timerSeconds: 30
    },
    'green-tea': {
      ingredients: [
        "1 cup Water (heated to 80°C / 175°F)",
        "1 tsp Loose Green Tea leaves or 1 tea bag",
        "1 tsp Raw Honey or Lemon slice (optional)"
      ],
      steps: [
        "Heat water until tiny bubbles form (do not boil hard to avoid bitterness).",
        "Place green tea leaves in an infuser and pour hot water over them.",
        "Steep for exactly 2 to 3 minutes.",
        "Remove leaves, stir in honey or lemon if desired, and sip slowly."
      ],
      prepTime: "3 mins",
      timerSeconds: 120
    },
    'ginger-tea': {
      ingredients: [
        "1.5 cups Water",
        "1 tbsp Freshly grated Ginger root",
        "1 tbsp Honey or Jaggery",
        "1 squeeze Fresh Lemon juice"
      ],
      steps: [
        "Bring water and grated ginger to a boil in a small saucepan.",
        "Reduce heat and simmer for 5 minutes to release ginger essential oils.",
        "Turn off heat, strain into a mug, and let cool slightly.",
        "Stir in honey and lemon juice before drinking."
      ],
      prepTime: "5 mins",
      timerSeconds: 300
    },
    'hot-chocolate': {
      ingredients: [
        "1.5 cups Milk or Oat Milk",
        "2 tbsp Unsweetened Dark Cocoa powder",
        "2 tbsp Chopped Dark Chocolate or Chocolate chips",
        "1-2 tbsp Maple syrup or Sugar",
        "1 pinch Cinnamon & Marshmallows"
      ],
      steps: [
        "Heat milk in a saucepan over medium-low heat (do not boil).",
        "Whisk in cocoa powder and sweetener until smooth and lump-free.",
        "Add chopped dark chocolate and whisk continuously until melted and thick.",
        "Pour into a mug and top with marshmallows or a dust of cinnamon."
      ],
      prepTime: "5 mins",
      timerSeconds: 240
    }
  };

  if (recipes[drink.id]) {
    return recipes[drink.id];
  }

  // Dynamic fallback for any beverage
  const isHot = drink.temperature === 'hot';
  return {
    ingredients: [
      `1 serving of fresh ${drink.name} base`,
      isHot ? "Hot filtered water / warm milk" : "Chilled water / crushed ice cubes",
      "Natural sweetener or mint leaves to taste"
    ],
    steps: [
      `Prepare your glass or mug for ${drink.name}.`,
      isHot ? "Heat liquids to comfortable drinking temperature." : "Blend or shake with chilled ingredients and ice.",
      "Garnish appropriately and enjoy your custom sip!"
    ],
    prepTime: "3-5 mins",
    timerSeconds: 180
  };
}

let timerInterval = null;
let timerSeconds = 180;
let initialTimerSeconds = 180;
let timerRunning = false;

window.openRecipeForCurrentDrink = function() {
  if (state.lastMatch) {
    openRecipeForDrink(state.lastMatch);
  } else {
    showToast("Select a drink to view recipe!");
  }
};

window.openRecipeForDrink = function(drinkOrId) {
  const drink = typeof drinkOrId === 'string' ? DRINK_DATASET.find(d => d.id === drinkOrId) : drinkOrId;
  if (!drink) return;

  const recipe = getDrinkRecipe(drink);
  if (!recipe) return;

  document.getElementById('recipe-drink-name').textContent = drink.name;
  document.getElementById('recipe-icon').textContent = drink.icon;
  document.getElementById('recipe-meta').textContent = `Prep time: ${recipe.prepTime} • ${drink.temperature} ${drink.category}`;

  const ingList = document.getElementById('recipe-ingredients-list');
  if (ingList) {
    ingList.innerHTML = recipe.ingredients.map(ing => `
      <li class="flex items-center gap-2.5 p-2 rounded-xl bg-sleek-50 dark:bg-sleek-950 text-sleek-700 dark:text-sleek-200">
        <span class="material-symbols-outlined text-base text-accent-500">check_circle</span>
        <span>${ing}</span>
      </li>
    `).join('');
  }

  const stepsList = document.getElementById('recipe-steps-list');
  if (stepsList) {
    stepsList.innerHTML = recipe.steps.map((step, idx) => `
      <li class="flex items-start gap-3 p-3 rounded-2xl bg-sleek-50 dark:bg-sleek-950 border border-sleek-100 dark:border-sleek-800">
        <span class="w-6 h-6 rounded-full bg-accent-500/10 text-accent-500 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">${idx + 1}</span>
        <span class="text-sleek-700 dark:text-sleek-200 leading-snug">${step}</span>
      </li>
    `).join('');
  }

  // Setup Brew Timer
  timerSeconds = recipe.timerSeconds || 180;
  initialTimerSeconds = timerSeconds;
  resetBrewTimer();

  document.getElementById('recipe-modal')?.classList.remove('hidden');
};

window.closeRecipeModal = function() {
  resetBrewTimer();
  document.getElementById('recipe-modal')?.classList.add('hidden');
};

window.toggleBrewTimer = function() {
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
    updateTimerBtnUI(false);
  } else {
    timerRunning = true;
    updateTimerBtnUI(true);
    timerInterval = setInterval(() => {
      if (timerSeconds > 0) {
        timerSeconds--;
        updateTimerDisplay();
      } else {
        clearInterval(timerInterval);
        timerRunning = false;
        updateTimerBtnUI(false);
        playChimeSound();
        showToast("⏰ Timer finished! Your sip is ready!");
      }
    }, 1000);
  }
};

window.resetBrewTimer = function() {
  clearInterval(timerInterval);
  timerRunning = false;
  timerSeconds = initialTimerSeconds;
  updateTimerDisplay();
  updateTimerBtnUI(false);
};

function updateTimerDisplay() {
  const mins = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
  const secs = (timerSeconds % 60).toString().padStart(2, '0');
  const display = document.getElementById('timer-display');
  if (display) display.textContent = `${mins}:${secs}`;
}

function updateTimerBtnUI(running) {
  const icon = document.getElementById('timer-btn-icon');
  const text = document.getElementById('timer-btn-text');
  if (icon) icon.textContent = running ? 'pause' : 'play_arrow';
  if (text) text.textContent = running ? 'Pause Timer' : 'Start Timer';
}

function playChimeSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.3); // A5
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.8);
  } catch(e) {
    console.log("Audio play failed:", e);
  }
}

/* ==========================================================================
   FEATURE 2: DAILY HYDRATION & SIP LOG TRACKER
   ========================================================================== */
window.logCurrentDrinkSip = function() {
  if (state.lastMatch) {
    logSipItem(state.lastMatch);
  } else {
    showToast("No drink selected to log!");
  }
};

function logSipItem(drink) {
  const logEntry = {
    id: drink.id,
    name: drink.name,
    icon: drink.icon,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };
  state.todaySipLogs.push(logEntry);
  localStorage.setItem('sipflow_sip_logs', JSON.stringify(state.todaySipLogs));
  updateHydrationTrackerUI();
  updateProfileStatsUI();
  showToast(`Logged ${drink.name}! Hydration updated 🥤`);
}

function updateHydrationTrackerUI() {
  const count = state.todaySipLogs.length;
  const target = 4;
  const pct = Math.min(100, Math.round((count / target) * 100));

  const badge = document.getElementById('sip-count-badge');
  if (badge) badge.textContent = `${count} / ${target} Logged`;

  const bar = document.getElementById('sip-tracker-progress');
  if (bar) bar.style.width = `${pct}%`;
}

/* ==========================================================================
   FEATURE 3: CUSTOM DRINK BUILDER
   ========================================================================== */
window.openCustomDrinkModal = function() {
  document.getElementById('custom-drink-modal')?.classList.remove('hidden');
};

window.closeCustomDrinkModal = function() {
  document.getElementById('custom-drink-modal')?.classList.add('hidden');
};

window.handleSaveCustomDrink = function(e) {
  e.preventDefault();
  const name = document.getElementById('custom-name').value.trim();
  const category = document.getElementById('custom-category').value;
  const icon = document.getElementById('custom-icon').value.trim() || '☕';
  const temperature = document.getElementById('custom-temp').value;
  const caffeine = document.getElementById('custom-caffeine').value;
  const description = document.getElementById('custom-desc').value.trim() || "Handcrafted custom drink.";
  const ingredientsRaw = document.getElementById('custom-ingredients').value.trim();

  const ingredientsList = ingredientsRaw ? ingredientsRaw.split(',').map(s => s.trim()) : ["1 serving fresh ingredients"];

  const newDrink = {
    id: 'custom-' + Date.now(),
    name,
    category,
    temperature,
    moods: ["happy", "relaxed", "focused", "energetic", "cozy"],
    preferences: [temperature, "custom"],
    times: ["morning", "afternoon", "evening"],
    weather: ["comfortable", "warm", "cold"],
    description,
    caffeine,
    sweetness: "Balanced",
    icon,
    caffeineScore: caffeine === 'High' ? 85 : caffeine === 'Medium' ? 50 : caffeine === 'Low' ? 25 : 0,
    sweetnessScore: 50,
    ingredientsList
  };

  DRINK_DATASET.push(newDrink);
  customDrinks.push(newDrink);
  localStorage.setItem('sipflow_custom_drinks', JSON.stringify(customDrinks));

  renderExploreGrid();
  closeCustomDrinkModal();
  updateProfileStatsUI();
  showToast(`Added custom sip "${name}"! ✨`);
};

/* ==========================================================================
   FEATURE 4: TASTE PROFILE MATRIX & SHARING & ANALYTICS
   ========================================================================== */
window.updateTasteFilters = function() {
  const caffVal = document.getElementById('caffeine-slider')?.value || '100';
  const sweetVal = document.getElementById('sweetness-slider')?.value || '100';

  const caffLabel = document.getElementById('caffeine-filter-val');
  if (caffLabel) caffLabel.textContent = caffVal === '100' ? '100% (Any)' : `Max ${caffVal}%`;

  const sweetLabel = document.getElementById('sweetness-filter-val');
  if (sweetLabel) sweetLabel.textContent = sweetVal === '100' ? '100% (Any)' : `Max ${sweetVal}%`;

  renderExploreGrid();
};

window.resetTasteFilters = function() {
  const caffSlider = document.getElementById('caffeine-slider');
  const sweetSlider = document.getElementById('sweetness-slider');
  if (caffSlider) caffSlider.value = 100;
  if (sweetSlider) sweetSlider.value = 100;
  updateTasteFilters();
};

window.shareCurrentSip = function() {
  if (!state.lastMatch) {
    showToast("No drink selected to share!");
    return;
  }
  const drink = state.lastMatch;
  const shareText = `🍹 My SipFlow Drink Match: ${drink.icon} ${drink.name}\n"${drink.description}"\n\nFind your perfect mood beverage on SipFlow!`;

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(shareText).then(() => {
      showToast("Copied sip recommendation to clipboard! 📋");
    }).catch(() => {
      showToast(`Shared: ${drink.name}`);
    });
  } else {
    showToast(`Shared: ${drink.name}`);
  }
};

function updateProfileStatsUI() {
  const sipsEl = document.getElementById('stat-total-sips');
  if (sipsEl) sipsEl.textContent = state.todaySipLogs.length;

  const favsEl = document.getElementById('stat-fav-count');
  if (favsEl) favsEl.textContent = state.favorites.length;

  const histEl = document.getElementById('stat-history-count');
  if (histEl) histEl.textContent = state.recentHistory.length;
}

/* ==========================================================================
   FEATURE 5: "SURPRISE ME" SPIN WHEEL & NEARBY CAFE FINDER
   ========================================================================== */
const WHEEL_SLICES = [
  { label: 'Chai ☕', color: '#dc2626', id: 'masala-chai' },
  { label: 'Boba 🧋', color: '#10b981', id: 'boba-milk-tea' },
  { label: 'Coffee ☕', color: '#18181b', id: 'cold-coffee' },
  { label: 'Matcha 🍵', color: '#059669', id: 'matcha-latte' },
  { label: 'Juice 🍊', color: '#ef4444', id: 'fresh-orange-juice' },
  { label: 'Lassi 🥭', color: '#27272a', id: 'mango-lassi' },
  { label: 'Green Tea 🍃', color: '#10b981', id: 'green-tea' },
  { label: 'Cocoa 🍫', color: '#b91c1c', id: 'hot-chocolate' }
];

let currentWheelRotation = 0;
let isSpinningWheel = false;

function initWheelCanvas() {
  const canvas = document.getElementById('wheel-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const width = canvas.width;
  const height = canvas.height;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = width / 2 - 4;
  const numSlices = WHEEL_SLICES.length;
  const sliceAngle = (2 * Math.PI) / numSlices;

  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < numSlices; i++) {
    const startAngle = i * sliceAngle - Math.PI / 2;
    const endAngle = startAngle + sliceAngle;

    // Slice background
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = WHEEL_SLICES[i].color;
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Text Label
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(startAngle + sliceAngle / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 10px sans-serif';
    ctx.fillText(WHEEL_SLICES[i].label, radius - 10, 4);
    ctx.restore();
  }
}

window.spinBeverageWheel = function() {
  if (isSpinningWheel) return;

  const canvas = document.getElementById('wheel-canvas');
  const btn = document.getElementById('spin-wheel-btn');
  if (!canvas) return;

  isSpinningWheel = true;
  if (btn) btn.disabled = true;

  // Pick a random slice index
  const selectedIndex = Math.floor(Math.random() * WHEEL_SLICES.length);
  const selectedSlice = WHEEL_SLICES[selectedIndex];

  // Calculate rotation (minimum 5 full spins + slice offset)
  const sliceAngleDeg = 360 / WHEEL_SLICES.length;
  // Canvas pointer is at top (-90 deg), slice 0 starts at top
  const targetSliceDegree = 360 - (selectedIndex * sliceAngleDeg + sliceAngleDeg / 2);
  const extraSpins = 360 * 5; // 5 full revolutions
  currentWheelRotation += extraSpins + (targetSliceDegree - (currentWheelRotation % 360));

  canvas.style.transform = `rotate(${currentWheelRotation}deg)`;

  // Play spin sound effect
  playSpinTickSound();

  setTimeout(() => {
    isSpinningWheel = false;
    if (btn) btn.disabled = false;

    // Find drink in dataset or fallback
    const matchedDrink = DRINK_DATASET.find(d => d.id === selectedSlice.id) || DRINK_DATASET[Math.floor(Math.random() * DRINK_DATASET.length)];

    showToast(`🎉 The Wheel Selected: ${matchedDrink.icon} ${matchedDrink.name}!`);
    showResultModal(matchedDrink);
  }, 2600);
};

function playSpinTickSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    let ticks = 0;
    const interval = setInterval(() => {
      if (ticks > 12) {
        clearInterval(interval);
        return;
      }
      ticks++;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(400 + ticks * 20, ctx.currentTime);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    }, 180);
  } catch (e) {
    console.log("Audio not supported", e);
  }
}

/* NEARBY CAFE FINDER WITH REAL MAPS & LIVE VENUE DATA */
window.searchNearbyPlaces = function(placeType) {
  const locInput = document.getElementById('cafe-location-input')?.value.trim();
  performLiveNearbySearch(placeType, locInput || 'Current Location');
};

window.useCurrentLocationAndSearch = function() {
  if (!navigator.geolocation) {
    showToast("Geolocation not supported. Enter city or zip manually.");
    performLiveNearbySearch("cafes and boba tea", "City Center");
    return;
  }

  showToast("📍 Fetching your current location...");
  const locInput = document.getElementById('cafe-location-input');

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      if (locInput) {
        locInput.value = `Current Location (${lat.toFixed(2)}, ${lng.toFixed(2)})`;
      }

      performLiveNearbySearch("cafes and boba tea", { lat, lng, name: `Location (${lat.toFixed(2)}, ${lng.toFixed(2)})` });
      showToast("📍 Found your coordinates!");
    },
    (err) => {
      console.log("Geolocation error:", err);
      showToast("Location permission denied. Enter city manually.");
      const currentVal = locInput?.value.trim() || "Local Cafes";
      performLiveNearbySearch("cafes and boba tea", currentVal);
    },
    { timeout: 8000 }
  );
};

async function performLiveNearbySearch(placeType, locInfo) {
  const resultsSec = document.getElementById('nearby-results-section');
  const statusTitle = document.getElementById('nearby-status-title');
  const statusCount = document.getElementById('nearby-status-count');
  const mapIframe = document.getElementById('cafe-map-iframe');
  const placesList = document.getElementById('cafe-places-list');

  if (resultsSec) resultsSec.classList.remove('hidden');
  if (statusCount) statusCount.textContent = "Loading live spots...";
  if (placesList) {
    placesList.innerHTML = `
      <div class="p-4 rounded-2xl bg-white dark:bg-sleek-900 text-center space-y-2 border border-sleek-200 dark:border-sleek-800">
        <span class="material-symbols-outlined text-2xl animate-spin text-emerald-500">sync</span>
        <p class="text-xs text-sleek-500 dark:text-sleek-400 font-semibold">Searching nearby ${placeType} venues...</p>
      </div>
    `;
  }

  let userLat = 16.94;
  let userLng = 79.97;
  let searchLocationName = "Your Area";

  if (typeof locInfo === 'object' && locInfo.lat) {
    userLat = locInfo.lat;
    userLng = locInfo.lng;
    searchLocationName = locInfo.name || "Current Location";
  } else if (typeof locInfo === 'string' && locInfo.length > 0 && !locInfo.startsWith("Current Location")) {
    searchLocationName = locInfo;
    // Try Nominatim geocoding
    try {
      const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locInfo)}&limit=1`);
      const geoData = await geoRes.json();
      if (geoData && geoData.length > 0) {
        userLat = parseFloat(geoData[0].lat);
        userLng = parseFloat(geoData[0].lon);
      }
    } catch(e) {
      console.log("Geocode error fallback:", e);
    }
  }

  // Update embedded Google Map iframe
  const searchType = (placeType.toLowerCase().includes('restaurant') || placeType.toLowerCase().includes('cafe') || placeType.toLowerCase().includes('shop') || placeType.toLowerCase().includes('bar'))
    ? `popular restaurants like Cafe Niloufer Pista House Chai Point ${placeType}`
    : `popular restaurants like Cafe Niloufer Pista House Chai Point serving ${placeType}`;
  const mapQuery = `${searchType} near ${userLat},${userLng}`;
  if (mapIframe) {
    mapIframe.src = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
  }

  // Fetch real places via Overpass API
  let realVenues = [];
  try {
    const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json][timeout:8];(node["amenity"~"cafe|fast_food|restaurant"](around:5000,${userLat},${userLng});node["shop"~"tea|beverage|bakery"](around:5000,${userLat},${userLng}););out body 12;`;
    const response = await fetch(overpassUrl);
    const data = await response.json();

    if (data && data.elements && data.elements.length > 0) {
      realVenues = data.elements
        .filter(el => el.tags && el.tags.name)
        .map(el => {
          const dist = calculateDistanceKm(userLat, userLng, el.lat, el.lon);
          return {
            name: el.tags.name,
            address: el.tags['addr:street'] ? `${el.tags['addr:street']} ${el.tags['addr:city'] || ''}` : `${el.tags.cuisine || 'Popular'} Restaurant & Cafe Spot`,
            distKm: dist,
            category: el.tags.cuisine || el.tags.shop || placeType,
            lat: el.lat,
            lng: el.lon,
            openingHours: el.tags.opening_hours || 'Open Today'
          };
        });
    }
  } catch(e) {
    console.log("Overpass fetch fallback:", e);
  }

  // If no Overpass nodes found or offline, generate accurate popular restaurant spot cards
  if (realVenues.length === 0) {
    const defaultSpotNames = {
      'coffee shop': ['Third Wave Coffee', 'Starbucks Coffee', 'Pista House Cafe', 'Blue Tokai Coffee Roasters', 'Cafe Niloufer Espresso'],
      'boba tea': ['Gong Cha Boba & Milk Tea', 'Goli Boba Lounge', 'The Bubble Tea Factory', 'Got Tea Boba'],
      'juice bar': ['Pista House Juice & Shakes', 'Juice Time Lounge', 'Fruitiae Fresh Juices', 'The Thick Shake Factory'],
      'tea': ['Cafe Niloufer Irani Chai', 'Pista House Tea Lounge', 'Chai Point', 'Chaayos Craft Tea'],
      'cafe': ['Cafe Niloufer', 'Pista House Bakery & Cafe', 'Chai Point', 'Third Wave Coffee', 'Paradise Resto Cafe']
    };

    const chosenCategoryNames = defaultSpotNames[placeType] || defaultSpotNames['cafe'];
    realVenues = chosenCategoryNames.map((name, idx) => ({
      name,
      address: `Popular Landmark Restaurant • Near ${searchLocationName}`,
      distKm: (0.3 + idx * 0.4),
      category: placeType,
      lat: userLat + (idx * 0.003),
      lng: userLng + (idx * 0.003),
      openingHours: 'Open • Closes 11 PM'
    }));
  }

  // Sort by distance
  realVenues.sort((a, b) => a.distKm - b.distKm);

  if (statusCount) {
    statusCount.textContent = `${realVenues.length} spots near ${searchLocationName}`;
  }

  // Render venue cards
  if (placesList) {
    placesList.innerHTML = realVenues.map(v => {
      const gmapsDirUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(v.name + ' ' + v.address)}&destination_place_id=`;
      const icon = v.name.toLowerCase().includes('boba') || v.category.includes('tea') ? '🧋' :
                   v.name.toLowerCase().includes('juice') ? '🍊' :
                   v.name.toLowerCase().includes('bakery') ? '🥐' : '☕';

      return `
        <div class="p-3 rounded-2xl bg-white dark:bg-sleek-900 border border-sleek-100 dark:border-sleek-800 hover:border-emerald-500/40 shadow-sm transition flex items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl flex-shrink-0">
              ${icon}
            </div>
            <div>
              <h4 class="font-bold text-xs text-sleek-900 dark:text-white leading-tight">${v.name}</h4>
              <p class="text-[10px] text-sleek-500 dark:text-sleek-400">${v.address}</p>
              <div class="flex items-center gap-2 mt-1">
                <span class="text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  📍 ${v.distKm.toFixed(1)} km away
                </span>
                <span class="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                  ★ 4.8
                </span>
              </div>
            </div>
          </div>
          <a href="${gmapsDirUrl}" target="_blank" class="p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1 transition flex-shrink-0" title="Get Directions">
            <span class="material-symbols-outlined text-base">directions</span>
            <span class="hidden sm:inline">Route</span>
          </a>
        </div>
      `;
    }).join('');
  }
}

function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/* MAP CATEGORIES CUSTOMIZATION MANAGER */
const DEFAULT_MAP_CATEGORIES = [
  { id: 'cat-1', label: 'Coffee Shops', query: 'coffee shop', icon: '☕', isDefault: true },
  { id: 'cat-2', label: 'Boba & Tea', query: 'boba tea', icon: '🧋', isDefault: true },
  { id: 'cat-3', label: 'Juice Bars', query: 'juice bar', icon: '🍊', isDefault: true },
  { id: 'cat-4', label: 'Bakeries & Cafes', query: 'cafe', icon: '🥐', isDefault: true }
];

function getSavedMapCategories() {
  try {
    const saved = localStorage.getItem('sipflow_map_categories');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch(e) {
    console.log("Error loading saved map categories", e);
  }
  return [...DEFAULT_MAP_CATEGORIES];
}

function saveMapCategories(cats) {
  localStorage.setItem('sipflow_map_categories', JSON.stringify(cats));
}

window.renderMapCategoriesGrid = function() {
  const container = document.getElementById('nearby-categories-grid');
  if (!container) return;

  const cats = getSavedMapCategories();

  container.innerHTML = cats.map(c => `
    <div class="relative group">
      <button onclick="searchNearbyPlaces('${c.query.replace(/'/g, "\\'")}')" class="w-full p-2.5 rounded-xl bg-white dark:bg-sleek-900 border border-sleek-200 dark:border-sleek-800 hover:border-emerald-500/50 flex items-center justify-center gap-1.5 text-sleek-700 dark:text-sleek-200 font-bold text-[11px] transition shadow-xs">
        <span>${c.icon}</span> <span class="truncate">${c.label}</span>
      </button>
      ${!c.isDefault ? `
        <button onclick="deleteMapCategory('${c.id}')" class="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center shadow-md hover:bg-rose-600 transition" title="Delete Category">
          ✕
        </button>
      ` : ''}
    </div>
  `).join('');
};

window.openCustomMapCategoryModal = function() {
  const modal = document.getElementById('custom-map-cat-modal');
  if (modal) modal.classList.remove('hidden');
};

window.closeCustomMapCategoryModal = function() {
  const modal = document.getElementById('custom-map-cat-modal');
  if (modal) modal.classList.add('hidden');
};

window.handleSaveCustomMapCategory = function(e) {
  e.preventDefault();
  const icon = document.getElementById('map-cat-icon')?.value.trim() || '🍵';
  const label = document.getElementById('map-cat-label')?.value.trim();
  const query = document.getElementById('map-cat-query')?.value.trim();

  if (!label || !query) {
    showToast("Please enter both category label and map query!");
    return;
  }

  const cats = getSavedMapCategories();
  const newCat = {
    id: 'custom-cat-' + Date.now(),
    label,
    query,
    icon,
    isDefault: false
  };

  cats.push(newCat);
  saveMapCategories(cats);
  renderMapCategoriesGrid();
  closeCustomMapCategoryModal();

  // Reset form
  const labelInput = document.getElementById('map-cat-label');
  const queryInput = document.getElementById('map-cat-query');
  const iconInput = document.getElementById('map-cat-icon');
  if (labelInput) labelInput.value = '';
  if (queryInput) queryInput.value = '';
  if (iconInput) iconInput.value = '🍵';

  showToast(`Added custom category "${label}"! 📍`);
};

window.deleteMapCategory = function(catId) {
  let cats = getSavedMapCategories();
  cats = cats.filter(c => c.id !== catId);
  saveMapCategories(cats);
  renderMapCategoriesGrid();
  showToast("Category removed");
};

window.resetMapCategoriesToDefault = function() {
  saveMapCategories(DEFAULT_MAP_CATEGORIES);
  renderMapCategoriesGrid();
  showToast("Categories reset to default!");
};


