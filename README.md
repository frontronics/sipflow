# SipFlow — PWA Beverage Recommendation Engine

> **"Your mood. Your moment. Your sip."**

SipFlow is a lightweight, mobile-first **Progressive Web App (PWA)** that provides personalized beverage recommendations based on your current mood, ambient weather, time of day, and craving preferences.

---

## 🌟 Key Features

* **Instant Recommendation Engine**: Local scoring algorithm that matches 30+ handcrafted beverage profiles to your current state without any server latency.
* **Multi-Step Guided Flow**: 4-step wizard collecting Mood, Weather (with Geolocation estimation), Time of Day, and Taste Preference.
* **Offline First & PWA Ready**: Fully cached via Service Worker (`service-worker.js`) and installable natively on iOS, Android, and Desktop via standard `manifest.json`.
* **Explore & Search**: Browse drinks across 8 categories (Coffee, Tea, Juice, Smoothies, Coolers, Healthy, Milk-based, Traditional) with instant real-time filtering.
* **Favorites & Persistence**: Save your top sips and view recommendation history persisted in `localStorage`.
* **Dark Mode & Personalization**: Customize dark mode styling and beverage style preferences.

---

## 📁 Project File Structure

```text
sipflow/
│
├── index.html          # Main HTML5 App Shell
├── manifest.json       # PWA Web App Manifest
├── service-worker.js   # Offline caching & App Shell Service Worker
├── README.md           # Documentation & Setup guide
│
├── js/
│   └── app.js          # Core Vanilla JavaScript application logic & dataset
│
└── assets/
    └── icons/
        ├── icon-192.png # PWA 192x192 Icon
        └── icon-512.png # PWA 512x512 Icon
```

---

## 🚀 Setup & Local Execution Instructions

Because SipFlow is built entirely with static HTML5, Tailwind CSS, and Vanilla JavaScript, it requires zero build steps or backend servers!

### Option A: Local Dev Server
1. Clone or download the repository.
2. Run any static file server:
   ```bash
   npx serve .
   ```
   or using Python:
   ```bash
   python -m http.server 3000
   ```
3. Open `http://localhost:3000` in your browser.

---

## 📲 PWA Installation Guide

1. **On Mobile (Chrome / Android)**:
   * Open SipFlow in Chrome.
   * Tap the **"Install"** button in the app header or prompt banner, or open the browser menu (⋮) and tap **"Add to Home screen"**.

2. **On Mobile (Safari / iOS)**:
   * Open SipFlow in Safari.
   * Tap the **Share** button at the bottom of Safari.
   * Scroll down and select **"Add to Home Screen"**.

3. **On Desktop (Chrome / Edge / Brave)**:
   * Click the install icon in the URL bar or click the **"Install Now"** banner in the SipFlow sidebar.
