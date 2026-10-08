<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const navItems = [
  { name: '首页', path: '/' },
  { name: '寻光团队', path: '/team' },
  { name: '琢石纪事', path: '/chronicles' },
  { name: '灵石文化', path: '/culture' },
  { name: '山海传音', path: '/voice' },
]

const go = (path: string) => {
  router.push(path)
}
</script>

<template>
  <!-- 桌面端：右上角横向胶囊导航（保持原样，勿动） -->
  <nav class="fixed top-4 left-4 right-4 z-50 hidden md:flex md:justify-end">
    <div class="flex bg-white/80 rounded-full px-4 py-2 shadow-lg backdrop-blur">
      <button
        v-for="item in navItems"
        :key="item.path"
        @click="go(item.path)"
        class="px-5 py-2 rounded-full text-blue-600 font-bold transition-all duration-300 hover:bg-green-200"
        :class="{ 'text-green-600 font-extrabold': item.path === route.path }"
      >
        {{ item.name }}
      </button>
    </div>
  </nav>

  <!-- 移动端：单个胶囊容器内五等分，保留完整名称，缩小字号一行铺满，不滑动 -->
  <nav class="fixed top-3 left-3 right-3 z-50 md:hidden">
    <div class="flex gap-1 rounded-full bg-white/85 p-1 shadow-lg backdrop-blur">
      <button
        v-for="item in navItems"
        :key="item.path"
        @click="go(item.path)"
        class="flex-1 min-w-0 overflow-hidden whitespace-nowrap rounded-full py-2 text-[clamp(10px,3.1vw,12px)] font-bold leading-none transition-colors duration-300"
        :class="
          item.path === route.path
            ? 'bg-green-500 font-extrabold text-white'
            : 'text-blue-600'
        "
      >
        {{ item.name }}
      </button>
    </div>
  </nav>
</template>
