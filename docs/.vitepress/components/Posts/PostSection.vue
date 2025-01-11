<script setup>
import { data as contents } from './posts.data.mts'
import PostCard from './PostCard.vue'
</script>


<template>
  <div class="flex flex-col gap-8">
    <div
      v-for="(post, index) in contents"
      :key="index"
    >
      <div class="mb-2 text-2xl font-bold">
        {{ post.year }}
      </div>
      <div class=" flex flex-col gap-6">
        <PostCard
          v-for="content in post.contents"
          :key="content.url"
          :data="content"
        />
      </div>
    </div>  
  </div>
</template>
