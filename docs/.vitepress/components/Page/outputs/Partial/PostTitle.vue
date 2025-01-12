<script setup>
import { format, parse } from "@formkit/tempo"
import { useData } from 'vitepress'
const { frontmatter } = useData()
const created = computed(() => {
  return frontmatter.value.created_at 
    ? format(parse(frontmatter.value.created_at), "YYYY/MM/DD") 
    : ""
})

const updated = computed(() => {
  return frontmatter.value.updated_at 
    ? format(parse(frontmatter.value.updated_at), "YYYY/MM/DD") 
    : ""
})

const showUpdated = computed(() => {
  const updatedAt = frontmatter.value.updated_at
  const createdAt = frontmatter.value.created_at
  return !!updatedAt && updatedAt !== createdAt
})
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
      <span>{{ created }}</span>
      <iconify-icon
        v-if="showUpdated"
        icon="mdi:update"
        class="text-lg"
      />
      <span v-if="showUpdated">{{ updated }}</span>
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
