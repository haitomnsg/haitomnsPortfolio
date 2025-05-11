import { defineConfig, Plugin, HtmlTagDescriptor } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

export function devErrorAndNavigationPlugin(): Plugin {
  let stacktraceJsContent: string | null = null;
  let dyadShimContent: string | null = null;

  return {
    name: "dev-error-and-navigation-handler",
    apply: "serve",

    configResolved() {
      const stackTraceLibPath = path.join(
        "node_modules",
        "stacktrace-js",
        "dist",
        "stacktrace.min.js"
      );
      if (stackTraceLibPath) {
        try {
          stacktraceJsContent = fs.readFileSync(stackTraceLibPath, "utf-8");
        } catch (error) {
          console.error(
            `[dyad-shim] Failed to read stacktrace.js from ${stackTraceLibPath}:`,
            error
          );
          stacktraceJsContent = null;
        }
      } else {
        console.error(`[dyad-shim] stacktrace.js not found.`);
      }

      const dyadShimPath = path.join("dyad-shim.js");
      if (dyadShimPath) {
        try {
          dyadShimContent = fs.readFileSync(dyadShimPath, "utf-8");
        } catch (error) {
          console.error(
            `[dyad-shim] Failed to read dyad-shim from ${dyadShimPath}:`,
            error
          );
          dyadShimContent = null;
        }
      } else {
        console.error(`[dyad-shim] stacktrace.js not found.`);
      }
    },

    transformIndexHtml(html) {
      const tags: HtmlTagDescriptor[] = [];

      if (stacktraceJsContent) {
        tags.push({
          tag: "script",
          injectTo: "head-prepend",
          children: stacktraceJsContent,
        });
      } else {
        tags.push({
          tag: "script",
          injectTo: "head-prepend",
          children:
            "console.warn('[dyad-shim] stacktrace.js library was not injected.');",
        });
      }

      if (dyadShimContent) {
        tags.push({
          tag: "script",
          injectTo: "head-prepend",
          children: dyadShimContent,
        });
      } else {
        tags.push({
          tag: "script",
          injectTo: "head-prepend",
          children: "console.warn('[dyad-shim] dyad shim was not injected.');",
        });
      }

      return { html, tags };
    },
  };
}

// Configure this if you are deploying to a specific subdirectory.
// For root deployment (e.g., www.yourdomain.com), it should be '/'.
// For a subdirectory (e.g., www.yourdomain.com/portfolio/), it should be '/portfolio/'.
const deploymentBase = '/'; // Assuming root deployment. Change if needed.

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? deploymentBase : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), devErrorAndNavigationPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));