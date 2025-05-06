<template>
  <div class="post-card">
    <div v-if="post.media.type === 'image'">
      <img :src="post.media.url" :alt="post.title" class="post-media">
    </div>
    <div v-else class="video-wrapper">
      <video 
        :src="post.media.url" 
        controls
        muted
        playsinline
        preload="metadata"
        class="post-media"
      ></video>
    </div>
    <div class="post-content">
      <div class="post-title">{{ post.title }}</div>
      <div class="post-tag">{{ post.tag }}</div>
      <div class="post-user">
        <img :src="post.avatar" :alt="post.username" class="post-avatar">
        <span class="post-username">{{ post.username }}</span>
      </div>
      <div class="post-stats">
        <span><i>♥</i> {{ post.likes }}</span>
        <span><i>💬</i> {{ post.comments }}</span>
        <span><i>↗</i> {{ post.shares }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Post } from '../composables/useMockData'

defineProps<{
  post: Post
}>()
</script>