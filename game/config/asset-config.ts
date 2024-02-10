// This file contains asset configurations for the game images. It is useful for
// keeping track of the assets used in the game, as well as provides a central location
// for configuring the animations and properties for each asset.
import { AssetConfig } from "../types.ts";
import {
  HeartbeatAnimationProps,
  OscillationAnimationProps,
} from "../types.ts";

export const assetsConfig: Record<string, AssetConfig> = {
  background: {
    name: "background",
    path: "assets/bg.png",
    position: { x: 512, y: 384 },
    backgroundColor: 0xFFDE94,
  },
  denoLogo: {
    name: "deno-logo",
    path: "assets/deno-logo.png",
    position: { x: 390, y: 195 },
    animationProps: {
      amplitude: 1,
      fastFrequency: 0.006,
      frequency: 0.004,
      smallAmplitude: 8,
    } as OscillationAnimationProps,
  },
  phaserLogo: {
    name: "phaser-logo",
    path: "assets/phaser-logo.png",
    position: { x: 512, y: 400 },
    animationProps: {
      amplitude: 1,
      fastFrequency: 0.006,
      frequency: 0.004,
      smallAmplitude: 5,
    } as OscillationAnimationProps,
  },
  heartLogo: {
    name: "heart-logo",
    path: "assets/heart.png",
    position: { x: 600, y: 195 },
    animationProps: {
      baseScale: 1,
      frequency: 0.004,
      scaleRange: 0.15,
    } as HeartbeatAnimationProps,
  },
};
