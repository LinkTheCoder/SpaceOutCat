import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
 
export default defineConfig({
  plugins: [react()],
  test: {
    include: ['test/**/*.test.{js,ts,jsx,tsx}'], // Include only test files in the 'test' folder
    exclude: ['e2e/**/*'], // Exclude the e2e folder
    environment: 'jsdom',
  },
})