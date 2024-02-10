/// <reference types="../phaser.d.ts" />

import { Cameras, GameObjects, Input, Scene } from "phaser";
import { assetsConfig, sceneConfig } from "../config/index.ts";
import { GameObjectFactory } from "../utils/index.ts";
import {
  AnimationStrategy,
  HeartbeatAnimation,
  OscillationAnimation,
} from "../utils/index.ts";
import {
  HeartbeatAnimationProps,
  OscillationAnimationProps,
} from "../types.ts";
export class MainMenu extends Scene {
  private camera: Cameras.Scene2D.Camera | undefined;
  private gameObjectFactory: GameObjectFactory;
  private animatedLogos: GameObjects.Image[] = [];

  constructor() {
    super({ key: sceneConfig.MainMenu });

    // The GameObjectFactory is a utility class that creates game objects
    // and adds them to the scene. It is used to avoid cluttering the scene with object creation logic.
    this.gameObjectFactory = new GameObjectFactory(this);
  }

  create() {
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor(assetsConfig.background.backgroundColor);
    this.gameObjectFactory.createImage(assetsConfig.background);

    // Construct each animation property
    const denoLogoAnimationProps = assetsConfig.denoLogo
      .animationProps as OscillationAnimationProps;
    const phaserLogoAnimationProps = assetsConfig.phaserLogo
      .animationProps as OscillationAnimationProps;
    const heartLogoAnimationProps = assetsConfig.heartLogo
      .animationProps as HeartbeatAnimationProps;

    // Create the animated logos and store them in the array
    const animatedLogos = [
      this.gameObjectFactory.createAnimatedLogo(
        assetsConfig.denoLogo,
        new OscillationAnimation({
          ...denoLogoAnimationProps,
          position: assetsConfig.denoLogo.position,
        }),
      ),
      this.gameObjectFactory.createAnimatedLogo(
        assetsConfig.phaserLogo,
        new OscillationAnimation({
          ...phaserLogoAnimationProps,
          position: assetsConfig.phaserLogo.position,
        }),
      ),
      this.gameObjectFactory.createAnimatedLogo(
        assetsConfig.heartLogo,
        new HeartbeatAnimation({ ...heartLogoAnimationProps }),
      ),
    ];

    // Store the animated logos in the class property for updating
    this.animatedLogos = animatedLogos;

    // Setup for title, input listeners, etc.
    this.add.text(512, 600, "Main Menu", {
      fontFamily: "Arial Black",
      fontSize: 38,
      color: "#ffffff",
      stroke: "#000000",
      strokeThickness: 8,
      align: "center",
    }).setOrigin(0.5);

    // Input listener to start the next scene
    this.input.once(Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
      this.scene.start(sceneConfig.MainGame);
    });
  }

  update(time: number) {
    // For each animated logo, apply the animation strategy
    this.animatedLogos.forEach((logo) => {
      const animation = logo.getData("animation") as AnimationStrategy;
      animation.apply(logo, time);
    });
  }
}
