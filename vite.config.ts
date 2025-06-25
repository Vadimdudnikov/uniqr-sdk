import { defineConfig } from 'vite';
import inject from '@rollup/plugin-inject';

export default defineConfig({
  // ① Полифилл Buffer
  resolve: { alias: { buffer: 'buffer' } },
  plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],

  // ② Кладём сборку прямо в dist
  publicDir: 'demo',           // всё из demo/ → копируется в dist/
  build: {
    outDir: 'dist',            // <-- было 'dist/web'
    emptyOutDir: true,
    lib: {
      entry: 'src/web/uni-qr-code.ts',
      name: 'UniQrCode',
      formats: ['es'],
      fileName: () => 'uni-qr-code.js'   // окажется dist/uni-qr-code.js
    }
  }
});

