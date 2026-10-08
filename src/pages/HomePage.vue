<script setup lang="ts">
import SiteNav from '@/components/SiteNav.vue'
</script>

<template>
  <div class="min-h-screen relative">
    <!-- 背景：移动端用竖版新图，桌面端用原横版图（样式与原先一致） -->
    <div class="home-bg absolute inset-0"></div>
    <div class="absolute inset-0 bg-black/10"></div>

    <SiteNav />

    <!-- 移动端顶部压暗层：为标题提供干净底衬，避免与碎叶糊在一起 -->
    <div class="home-scrim absolute inset-x-0 top-0 z-10 h-[42vh] md:hidden"></div>

    <!-- 移动端书法标题（桌面端原图已烤入标题，故仅移动端显示） -->
    <div
      class="pointer-events-none absolute inset-x-0 top-0 z-20 flex flex-col items-center px-6 pt-[13vh] text-center md:hidden"
    >
      <h1 class="title-brush">琢石寻光</h1>
      <span class="title-rule"></span>
      <p class="title-sub">社会实践团</p>
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

/* 顶部压暗：由深墨绿逐渐过渡到透明，字压在干净的暗底上 */
.home-scrim {
  background: linear-gradient(
    180deg,
    rgba(9, 40, 33, 0.86) 0%,
    rgba(9, 40, 33, 0.72) 36%,
    rgba(9, 40, 33, 0.32) 70%,
    rgba(9, 40, 33, 0) 100%
  );
}

/* 毛笔质感标题：暖金渐变（与青绿背景形成互补），呼应画面中的金色逆光 */
.title-brush {
  font-family: 'ZhuoshiBrush', 'KaiTi', 'STKaiti', 'SimSun', serif;
  font-weight: 400;
  font-size: clamp(2.9rem, 18vw, 4.6rem);
  line-height: 1.15;
  letter-spacing: 0.06em;
  padding-left: 0.06em;
  background-image: linear-gradient(
    180deg,
    #fffaf0 0%,
    #ffeeb8 30%,
    #f7d167 62%,
    #e0a92c 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 10px rgba(4, 26, 20, 0.6));
}

/* 标题与副标题之间的细分隔线，左右渐隐 */
.title-rule {
  display: block;
  width: 2.75rem;
  height: 1px;
  margin: 0.85rem 0 0.7rem;
  background: linear-gradient(90deg, transparent, rgba(255, 232, 180, 0.6), transparent);
}

/* 副标题：宽字距的落款感小字 */
.title-sub {
  font-family: 'ZhuoshiBrush', 'KaiTi', 'STKaiti', 'SimSun', serif;
  font-size: 0.8125rem;
  line-height: 1.4;
  letter-spacing: 0.42em;
  padding-left: 0.42em;
  color: rgba(255, 240, 205, 0.74);
}
</style>
