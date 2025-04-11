import Phaser from "phaser";
import BootScene from "@scenes/BootScene";
import GameScene from "@scenes/GameScene";
import { ScreenOrientation } from "@capacitor/screen-orientation";

ScreenOrientation.lock({ orientation: "landscape" })
  .then(() => {
    console.log("Orientation locked to landscape");
  })
  .catch((error: any) => {
    console.error("Error locking orientation:", error);
  });

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [BootScene, GameScene],
};

new Phaser.Game(config);
