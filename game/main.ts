/// <reference types="./phaser.d.ts" />

import { AUTO, Game, Scale, Types } from "phaser";

import {
  Boot,
  GameOver,
  MainGame,
  MainMenu,
  Preloader,
} from "./scenes/index.ts";

const gameConfig: Types.Core.GameConfig = {
  type: AUTO,
  width: 1024,
  height: 768,
  parent: "game-container", // The ID of the DOM element to which the game canvas will be appended
  backgroundColor: "#FFDE94",
  scale: {
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH,
  },
  scene: [
    Boot,
    Preloader,
    MainMenu,
    MainGame,
    GameOver,
  ],
};

export default new Game(gameConfig);
