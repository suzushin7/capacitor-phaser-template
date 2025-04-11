import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  create() {
    this.add.image(640, 360, "logo");
  }
}
