import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact()],
  dev: {
    watchFiles: {
      paths: [
        'src/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.css',
        'src/**/*.scss',
        'src/**/*.less',
        'src/**/*.sass',
        'src/**/*.js',
        'src/**/*.jsx',
        'src/**/*.json',
      ],
    },
  },
});
