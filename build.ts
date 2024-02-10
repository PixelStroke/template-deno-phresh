import { build } from "esbuild";

/**
 * Build the Phaser code using esbuild
 * @returns {void}
 */
export function buildPhaser() {
  build({
    entryPoints: ["game/main.ts"],
    bundle: true,
    outfile: "static/game.js",
    write: true,
    format: "esm",
    minify: true,
    treeShaking: true,
    resolveExtensions: [".ts", ".js"],
    alias: {
      "phaser":
        "https://cdnjs.cloudflare.com/ajax/libs/phaser/3.70.0/phaser.esm.min.js",
    },
    target: ["esnext"],
  });
}

buildPhaser();
