#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";
import { buildPhaser } from "./build.ts";

import "$std/dotenv/load.ts";

// You can also directly call the buildPhaser function through a deno task and comment out the line below
buildPhaser();
await dev(import.meta.url, "./main.ts", config);
