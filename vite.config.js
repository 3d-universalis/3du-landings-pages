import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const base = '/3du-landings-pages/';

export default defineConfig({
  plugins: [react()],
  base,
  build: {
    outDir: 'build',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$asset-base: '${base}';\n`,
        silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin', 'color-functions'],
      },
    },
  },
});
