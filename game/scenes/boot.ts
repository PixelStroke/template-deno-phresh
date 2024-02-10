/// <reference types="../phaser.d.ts" />

import { Scene } from "phaser";
import { assetsConfig, sceneConfig } from "../config/index.ts";
import { loadAssets } from "../utils/index.ts";

export class Boot extends Scene {
  constructor() {
    super(sceneConfig.Boot);
  }

  preload() {
    //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
    //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.
    loadAssets(this, assetsConfig);
  }

  create() {
    this.scene.start(sceneConfig.Preloader);
  }
}
