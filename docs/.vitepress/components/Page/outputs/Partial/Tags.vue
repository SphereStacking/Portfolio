<script lang="ts" setup>
type Props = {
  tags: string[]
}

const props = defineProps<Props>()
</script>

<template>
  <div class="flex flex-wrap gap-1">
    <Tag
      v-for="tag in props.tags"
      :key="tag"
      :tag="tag"
    />
  </div>
</template>
