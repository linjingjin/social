<template>
  <div class="container">
    <div class="waterfall" ref="waterfallRef">
      <div class="waterfall-column" v-for="(column, index) in columns" :key="index">
        <PostItem 
          v-for="post in column" 
          :key="post.id" 
          :post="post" 
        />
      </div>
    </div>
    
    <!-- <InfiniteLoading 
      @infinite="loadMore" 
      :distance="200"
    >
      <template #spinner>
        <div class="loading">加载中...</div>
      </template>
      <template #complete>
        <div class="loading">没有更多内容了</div>
      </template>
      <template #error>
        <div class="loading">加载失败，请重试</div>
      </template>
    </InfiniteLoading> -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useWindowSize } from '@vueuse/core'
// import InfiniteLoading from 'vue-infinite-loading'

// import { InfiniteLoading } from 'vue-infinite-loading'
import { Post } from '../composables/useMockData'
import PostItem from './PostItem.vue'
import { useMockData } from '../composables/useMockData'

interface Props {
  theme?: string
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'default'
})

const { loadMorePosts } = useMockData(props.theme)
const posts = ref<Post[]>([])
const columns = ref<Post[][]>([[], []])
const waterfallRef = ref<HTMLElement | null>(null)
const { width: windowWidth } = useWindowSize()

// 初始加载
const loadInitialPosts = () => {
  posts.value = loadMorePosts([], 10)
  distributePosts()
}

// 加载更多
const loadMore = ($state: any) => {
  setTimeout(() => {
    const newPosts = loadMorePosts(posts.value, 5)
    posts.value = [...posts.value, ...newPosts]
    distributePosts()
    $state.loaded()
    
    if (posts.value.length > 30) {
      $state.complete()
    }
  }, 1000)
}

// 分配帖子到列
const distributePosts = () => {
  const newColumns: Post[][] = [[], []]
  
  posts.value.forEach((post, index) => {
    const columnIndex = getShortestColumnIndex(newColumns)
    newColumns[columnIndex].push(post)
  })
  
  columns.value = newColumns
}

// 获取当前最短的列
const getShortestColumnIndex = (cols: Post[][]) => {
  if (cols[0].length === 0 && cols[1].length === 0) return 0
  if (cols[0].length === 0) return 0
  if (cols[1].length === 0) return 1
  return cols[0].length <= cols[1].length ? 0 : 1
}

// 响应式调整列数
const columnCount = computed(() => {
  return windowWidth.value < 768 ? 1 : 2
})

watch(columnCount, () => {
  distributePosts()
})

onMounted(() => {
  loadInitialPosts()
})
</script>