/// <reference types="../phaser.d.ts" />

import Phaser from "phaser";
import { AssetConfig } from "../types.ts";
import { AnimationStrategy } from "./index.ts";

// The GameObjectFactory class is a utility class that creates game objects.
// It is used to avoid cluttering the scene with object creation logic.
export class GameObjectFactory {
  constructor(private scene: Phaser.Scene) {}

  createImage(config: AssetConfig): Phaser.GameObjects.Image {
    const image = this.scene.add.image(
      config.position.x,
      config.position.y,
      config.name,
    );
    return image;
  }

  createAnimatedLogo(
    config: AssetConfig,
    animationStrategy: AnimationStrategy,
  ): Phaser.GameObjects.Image {
    const logo = this.createImage(config);
    logo.setData("animation", animationStrategy);
    return logo;
  }

  // Other game object implementations such as audio, sprite, etc..
}
