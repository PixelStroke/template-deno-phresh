import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

// This is the Fresh configuration file. It is used to configure the Fresh server and its plugins.
export default defineConfig({
  plugins: [tailwind()],
});
