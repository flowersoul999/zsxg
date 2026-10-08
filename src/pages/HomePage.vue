<script setup lang="ts">
import SiteNav from '@/components/SiteNav.vue'
</script>

<template>
  <div class="min-h-screen relative">
    <!-- 背景：移动端用竖版新图，桌面端用原横版图（样式与原先一致） -->
    <div class="home-bg absolute inset-0"></div>
    <div class="absolute inset-0 bg-black/10"></div>

    <SiteNav />

    <!-- 移动端书法标题（桌面端原图已烤入标题，故仅移动端显示） -->
    <div class="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center pt-[15vh] md:hidden">
      <h1 class="title-brush">琢石寻光</h1>
    </div>

    <div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'ZhuoshiBrush';
  src: url('../assets/fonts/zhuoshi.woff2') format('woff2');
  font-display: swap;
}

/* 移动端背景 */
.home-bg {
  background-image: url('../assets/bg-mobile.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* 桌面端背景：与原 img object-cover object-top 等效 */
@media (min-width: 768px) {
  .home-bg {
    background-image: url('../assets/2FFE719FFBEE0B741F111AFE8590520C.webp');
    background-position: top center;
  }
}

/* 毛笔质感标题：青蓝渐变 + 深色投影，压在深绿树冠上 */
.title-brush {
  font-family: 'ZhuoshiBrush', 'KaiTi', 'STKaiti', 'SimSun', serif;
  font-weight: 400;
  font-size: clamp(3.25rem, 21vw, 5.5rem);
  line-height: 1.15;
  letter-spacing: 0.04em;
  padding-left: 0.04em;
  background-image: linear-gradient(
    180deg,
    #f4ffff 0%,
    #c3f6fc 26%,
    #6fdff2 58%,
    #24a9da 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 3px 12px rgba(0, 58, 78, 0.6));
}
</style>
