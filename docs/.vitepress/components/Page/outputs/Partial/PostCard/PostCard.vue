<script setup lang="ts">
import { format, parse } from "@formkit/tempo"
import { withBase } from 'vitepress'
import { computed } from 'vue'
import Thumbnail, { type ThumbnailProps  } from '@/components/Page/outputs/Partial/PostCard/Thumbnail.vue'

type Props = {
  data: {
    frontmatter: {
      title: string,
      description: string,
      tags: string[],
      created_at: string,
      updated_at?: string,
      thumbnail: ThumbnailProps,
    },
    url: string,
  },
}

const props = defineProps<Props>()

const created = computed(() => {
  return props.data.frontmatter.created_at 
    ? format(parse(props.data.frontmatter.created_at), "YYYY/MM/DD") 
    : ""
})

const updated = computed(() => {
  return props.data.frontmatter.updated_at 
    ? format(parse(props.data.frontmatter.updated_at), "YYYY/MM/DD") 
    : ""
})

const showUpdated = computed(() => {
  const updatedAt = props.data.frontmatter.updated_at
  const createdAt = props.data.frontmatter.created_at
  return !!updatedAt && updatedAt !== createdAt
})
</script>

<template>
  <div class="group flex flex-row overflow-hidden rounded-xl border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-teal-200">
    <Thumbnail
      :thumbnail="props.data.frontmatter.thumbnail"
      class="w-40 bg-gray-500/10"
    />
    <div class="flex w-full flex-col px-6 py-4 gap-1">
      <span class="flex items-center text-center gap-1 text-xs text-gray-500/90">
        <iconify-icon icon="mdi:calendar" class="ml-1" />
        {{ created }}
        <template v-if="showUpdated">
          <iconify-icon icon="mdi:sync" class="ml-1" />
          {{ updated }}
        </template>
      </span>
      <div class="text-xl font-bold">
        {{ props.data.frontmatter.title }}
      </div>
      <div class="h-16 text-base text-gray-500/90">
        {{ props.data.frontmatter.description }}
      </div>
      <div class="flex w-full items-center justify-between gap-1 text-xs">
        <Tags :tags="props.data.frontmatter.tags" />
        <div class="overflow-hidden">
          <div class="translate-x-4 transition-transform duration-300 group-hover:translate-x-0">
            <a
              :href="withBase(props.data.url)"
              class="flex items-center"
            >
              Read more >>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
