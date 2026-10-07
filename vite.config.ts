import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ command }) => {
  // 生产构建不注入开发调试器，也不做图片二次压缩（CI 上耗时且收益低）
  const isDev = command === 'serve'
  const plugins: any[] = [vue()]

  if (isDev) {
    const { default: Inspector } = await import('unplugin-vue-dev-locator/vite')
    const { ViteImageOptimizer } = await import('vite-plugin-image-optimizer')
    plugins.push(
      Inspector(),
      ViteImageOptimizer({
        png: { quality: 60 },
        jpeg: { quality: 60 },
        webp: { quality: 60 },
        avif: { quality: 60 },
        convertImages: ['webp'],
      }),
    )
  }

  return {
    base: '/',
    build: {
      sourcemap: 'hidden',
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'vue-router'],
          },
        },
      },
    },
    plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
