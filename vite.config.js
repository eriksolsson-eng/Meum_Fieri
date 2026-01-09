import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

export default defineConfig({
  plugins: [svelte()],
  publicDir: 'assets',
  base: '/Meum_Fieri/',
  resolve: {
    alias: {
      '$lib': path.resolve('./src/lib'),
      '$stores': path.resolve('./src/stores')
    }
  }
})
