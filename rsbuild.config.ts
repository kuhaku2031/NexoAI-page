// rsbuild.config.ts
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { tanstackRouter, TanStackRouterRspack } from '@tanstack/router-plugin/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: {
      plugins: [
        TanStackRouterRspack({
          routesDirectory: './src/app',
          generatedRouteTree: './src/routeTree.gen.ts',
        }),
        tanstackRouter({
          target: 'react',
          autoCodeSplitting: true,
        }),
      ],
    },
  },
  dev: {
    watchFiles: {
      paths: ['src/**/*.{ts,tsx,css}'],
    },
  },
});
