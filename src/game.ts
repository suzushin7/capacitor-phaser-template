import Phaser from "phaser";
import BootScene from "@scenes/BootScene";
import GameScene from "@scenes/GameScene";
import { ScreenOrientation } from "@capacitor/screen-orientation";
import { StatusBar } from "@capacitor/status-bar";

// Set the background color for the game
const backgroundColor: string = "#000000";

// Lock the screen orientation to landscape mode
ScreenOrientation.lock({ orientation: "landscape" })
  .then(() => {
    console.log("Orientation locked to landscape");
  })
  .catch((error: any) => {
    console.error("Error locking orientation:", error);
  });

// Hide the status bar
StatusBar.hide();
StatusBar.setOverlaysWebView({ overlay: true })
  .then(() => {
    console.log("Status bar overlays web view");
  })
  .catch((error: any) => {
    console.error("Error setting status bar overlay:", error);
  });

// Set the game configuration
const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  backgroundColor: backgroundColor,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [BootScene, GameScene],
};

// Create a new Phaser game instance
new Phaser.Game(config);
