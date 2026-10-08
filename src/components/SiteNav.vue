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

  <!-- 移动端：顶部横排按钮，尺寸与桌面端一致，放不下横向滑动 -->
  <nav class="site-nav-mobile fixed top-3 left-0 right-0 z-50 md:hidden">
    <div class="nav-scroll flex gap-2 overflow-x-auto px-4 py-1">
      <button
        v-for="item in navItems"
        :key="item.path"
        @click="go(item.path)"
        class="shrink-0 whitespace-nowrap rounded-full bg-white/85 px-5 py-2 font-bold text-blue-600 shadow-lg backdrop-blur transition-all duration-300"
        :class="{ 'text-green-600 font-extrabold ring-1 ring-green-400/60': item.path === route.path }"
      >
        {{ item.name }}
      </button>
    </div>
  </nav>
</template>

<style scoped>
/* 左右渐隐，暗示这一排可以横向滑动 */
.site-nav-mobile {
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0,
    #000 18px,
    #000 calc(100% - 30px),
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0,
    #000 18px,
    #000 calc(100% - 30px),
    transparent 100%
  );
}

.nav-scroll {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.nav-scroll::-webkit-scrollbar {
  display: none;
}
</style>
