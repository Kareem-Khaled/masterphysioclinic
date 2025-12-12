import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Skilled_Healer_Clinic/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
