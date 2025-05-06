<template>
  <div id="app">
    <!-- 模拟顶部导航栏 -->
    <div style="height: 50px; background: white; display: flex; justify-content: center; align-items: center;">
      <h2>发现</h2>
    </div>
    
    <!-- 内容区域 -->
    <WaterfallFlow :theme="theme" />
    
    <!-- 模拟底部导航栏 -->
    <div style="height: 60px; background: white; display: flex; justify-content: space-around; align-items: center; position: fixed; bottom: 0; width: 100%;">
      <div>首页</div>
      <div>社区</div>
      <div>创作</div>
      <div>找游戏</div>
      <div>我的</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import WaterfallFlow from './components/WaterfallFlow.vue'

const getThemeFromURL = (): string => {
  const params = new URLSearchParams(window.location.search)
  return params.get('theme') || 'default'
}

const theme = ref<string>(getThemeFromURL())

onMounted(() => {
  window.addEventListener('popstate', () => {
    theme.value = getThemeFromURL()
  })
})
</script>

<style>
#app {
  padding-bottom: 60px;
}
</style>