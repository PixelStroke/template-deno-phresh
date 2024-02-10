// This is a simple example of a Fresh handler that returns a random joke.
// It demonstrates how to use the FreshContext and the Request and Response classes.
// If it is not required, you can delete the api folder and any references to it.

import { FreshContext } from "$fresh/server.ts";

const JOKES = [
  "Why do PhaserJS developers make great partners? Because they're always game for anything!",
  "Why did the PhaserJS sprite go to therapy? It had too many unresolved collisions.",
  'How do PhaserJS developers break up with their significant others? They say, "I think we need to set our relationship to null."',
  "Why did the PhaserJS game object get kicked out of class? It kept calling this.destroy() on the lesson plan",
  "What's a PhaserJS developer's favorite meal? \"Sprite\" and chips!",
  "Why did the PhaserJS developer go broke? Because they used too many AssetManager.load() calls without checking their budget first.",
  "How do PhaserJS developers stay in shape? By running in endless game loops.",
  'What did the PhaserJS developer say to the WebGL renderer? "You transform my world."',
  "Why was the PhaserJS developer always calm? Because they understood that every problem has a callback.",
  "What's a PhaserJS developer's favorite movie? \"Game of Frames.\"",
];

export const handler = (_req: Request, _ctx: FreshContext): Response => {
  const randomIndex = Math.floor(Math.random() * JOKES.length);
  const body = JOKES[randomIndex];
  return new Response(body);
};
