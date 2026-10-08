import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ command }) => {
  const isDev = command === 'serve'

  return {
    // 本地开发用根路径，打包部署用 /zsxg/（GitHub Pages 项目站点规则）
    base: isDev ? '/' : '/zsxg/',
    server: {
      host: '0.0.0.0',
      port: 5173,
    },
    optimizeDeps: {
      // lucide-vue-next 包的 .map 文件为空，dev 预打包会解析失败，交给浏览器原生 ESM 处理
      exclude: ['lucide-vue-next'],
    },
    build: {
      sourcemap: false,
      assetsInlineLimit: 4096,
      chunkSizeWarningLimit: 800,
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'vue-router'],
          },
        },
      },
    },
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})