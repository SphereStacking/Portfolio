<script lang="ts" setup>
type Props = {
  tag: string
}

const props = defineProps<Props>()
</script>

<template>
  <span
    class="flex items-center gap-1 rounded-full bg-teal-500/10 px-2 py-1 text-xs font-semibold "
  >
    <iconify-icon
      icon="mdi:tag"
      class="text-sm"
    />
    <span>{{ props.tag }}</span>
  </span>
</template>

