# Capacitor Phaser Template

This is a reusable template for developing mobile-friendly games using **Phaser 3**, **TypeScript**, and **Capacitor**.
It supports **native deployment (Android/iOS)** and **fast local development via Vite**.

---

## 🔧 Tech Stack

- [Phaser 3](https://phaser.io/) – 2D HTML5 game framework
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) – Fast bundler & dev server
- [Capacitor](https://capacitorjs.com/) – Native runtime to build mobile apps

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start local development

```bash
npm run build
npm run preview
```

App will be available at: http://localhost:5173

### 3. Sync with Capacitor

```bash
npx run sync
```

### 4. Build the mobile app

```bash
npm run build:android
npm run build:ios
```

Then run via Android Studio or Xcode.

## Project Structure

```text
├── public/ # Static assets (images, sounds)
│ └── assets/
├── src/ # TypeScript game code
│ ├── main.ts # Entry point
│ ├── game.ts # Phaser.Game config
│ └── scenes/ # Modular game scenes
├── capacitor.config.ts # Capacitor settings
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Features

✅ Phaser + TypeScript game loop
✅ Fullscreen immersive mode (Android)
✅ StatusBar hidden
✅ Obfuscated build (optional)
✅ Cross-platform mobile deployment

## Distribution

Android: Export .aab from Android Studio → Google Play
iOS: Archive in Xcode → App Store Connect

## License

MIT License
