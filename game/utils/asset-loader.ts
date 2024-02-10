/// <reference types="../phaser.d.ts" />

import { Scene } from "phaser";
import { assetsConfig } from "../config/index.ts";

// The structured asset configuration
type AssetImages = Array<{
  name: string;
  path: string;
}>;

/**
 * Iterates over the asset configuration and returns an array of image assets.
 * @param {Object} config - The structured asset configuration.
 * @returns An array of image assets.
 */
function createImageAssetsArray(config: typeof assetsConfig): AssetImages {
  return Object.values(config).map((asset) => ({
    name: asset.name,
    path: asset.path,
  }));
}

/**
 * Load assets into a Phaser scene based on a structured configuration.
 * @param {Scene} scene - The Phaser scene in which to load assets.
 * @param {Object} config - The structured asset configuration.
 */
export function loadAssets(
  scene: Scene,
  config: typeof assetsConfig,
): void {
  const images = createImageAssetsArray(config);

  images.forEach((image) => {
    scene.load.image(image.name, image.path);
  });
}
