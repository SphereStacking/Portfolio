<script setup>
import { computed } from 'vue'
import { format, parse } from "@formkit/tempo"
import { useData } from 'vitepress'
import Thumbnail from './Partial/Thumbnail.vue'
import Tag from '../Tag.vue'
const { frontmatter } = useData()
const date = computed(() => format(parse(frontmatter.value.date), "YYYY年MM月DD日"));
</script>

<template>
  <div class="flex flex-col gap-3">
    <Thumbnail
      :thumbnail="frontmatter.thumbnail"
      class="my-10"
    />
    <h1 class="mt-2 text-4xl font-bold">
      {{ frontmatter.title }}
    </h1>
    <p class="flex items-center gap-1 text-sm text-gray-500/70">
      <iconify-icon
        icon="mdi:calendar"
        class="text-lg"
      />
      <span>{{ date }}</span>
    </p>
    <p class="flex items-center gap-2">
      <Tag
        v-for="tag in frontmatter.tags"
        :key="tag"
        :tag="tag"
      />
    </p>
  </div>
</template>
