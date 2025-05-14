import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Type assertion to avoid TypeScript errors
  const modeStr = mode as string;
  
  return {
    plugins: [react()],
    base: modeStr === 'production' ? '/font-helper/' : '/',
  };
})
