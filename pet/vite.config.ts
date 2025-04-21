import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: [
      'react',
      'react-dom',
      '@emotion/react',
      '@emotion/styled'
    ]
  },
  resolve: {
    dedupe: ['react', 'react-dom', '@mui/material']
  }
});
