import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      reportsDirectory: "./coverage",
      include: ["src/**/*.ts"],
      exclude: [
        "node_modules/",
        "src/types/**",
        "src/config/**",
        "src/vite-env.d.ts",
        "src/main.tsx",
        "**/*.test.*",
      ],
    },
    globals: true,
  },
});
