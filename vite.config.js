import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/courseraCourseReact/', // Nombre de tu repositorio
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[jt]sx?$/,
  }
})