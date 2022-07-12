import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://jonaScriptCPU33.github.io/react-rickAndMorty/",
  plugins: [react()]
})
