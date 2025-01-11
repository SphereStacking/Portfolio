<script lang="ts" setup>
type Props = {
  tags: string[]
}

const props = defineProps<Props>()
</script>

<template>
  <div class="flex flex-wrap gap-1">
    <span
      v-for="tag in props.tags"
      :key="tag"
      class="rounded-full bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-700"
    >#{{ tag }}</span>
  </div>
</template>
