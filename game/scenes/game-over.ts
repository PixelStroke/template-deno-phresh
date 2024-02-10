/// <reference types="../phaser.d.ts" />

import { Scene } from "phaser";
import { assetsConfig, sceneConfig } from "../config/index.ts";
import { GameObjectFactory } from "../utils/index.ts";

export class GameOver extends Scene {
  private camera: Phaser.Cameras.Scene2D.Camera | undefined;
  private background: Phaser.GameObjects.Image | undefined;
  private gameObjectFactory: GameObjectFactory;

  constructor() {
    super(sceneConfig.GameOver);

    // The GameObjectFactory is a utility class that creates game objects
    // and adds them to the scene. It is used to avoid cluttering the scene with object creation logic.
    this.gameObjectFactory = new GameObjectFactory(this);
  }

  create() {
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor(assetsConfig.background.backgroundColor);

    this.background = this.gameObjectFactory.createImage(
      assetsConfig.background,
    );
    this.background.setAlpha(0.5);

    this.add.text(512, 384, "Game Over", {
      fontFamily: "Arial Black",
      fontSize: 64,
      color: "#ffffff",
      stroke: "#000000",
      strokeThickness: 8,
      align: "center",
    }).setOrigin(0.5);

    this.input.once("pointerdown", () => {
      this.scene.start(sceneConfig.MainMenu);
    });
  }
}
