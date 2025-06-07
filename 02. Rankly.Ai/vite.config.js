import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        exportType: "default",
      },
      // esbuild options, to transform jsx to js
      esbuildOptions: {
        loader: "jsx",
      },
      // A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should include.
      include: "**/*.svg?react",
    }),
  ],
});
