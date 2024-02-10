/// <reference types="../phaser.d.ts" />

import { Input, Scene } from "phaser";
import { assetsConfig, sceneConfig } from "../config/index.ts";
import { GameObjectFactory } from "../utils/index.ts";

export class MainGame extends Scene {
  private camera: Phaser.Cameras.Scene2D.Camera | undefined;
  private background: Phaser.GameObjects.Image | undefined;
  private gameObjectFactory: GameObjectFactory;
  constructor() {
    super(sceneConfig.MainGame);

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

    this.add.text(
      512,
      384,
      "Make something fun!\nand share it with:\nsupport@phaser.io",
      {
        fontFamily: "Arial Black",
        fontSize: 38,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      },
    ).setOrigin(0.5);

    this.input.once(Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
      this.scene.start(sceneConfig.GameOver);
    });
  }
}
