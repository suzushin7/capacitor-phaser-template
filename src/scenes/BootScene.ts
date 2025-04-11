import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  preload() {
    this.load.image(
      "logo",
      "https://labs.phaser.io/assets/sprites/phaser3-logo.png"
    );
  }

  create() {
    this.scene.start("GameScene");
  }
}
