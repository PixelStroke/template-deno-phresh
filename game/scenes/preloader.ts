/// <reference types="../phaser.d.ts" />

import { Scene } from "phaser";
import { sceneConfig } from "../config/index.ts";

export class Preloader extends Scene {
  constructor() {
    super(sceneConfig.Preloader);
  }

  init() {
    // Any previously loaded assets can be created here
  }

  preload() {
    // Any other assets requiring loading should be done here
  }

  create() {
    // Once the assets have been loaded, the game can start
    this.scene.start(sceneConfig.MainMenu);
  }
}
