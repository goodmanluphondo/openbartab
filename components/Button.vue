<template>
  <button type="type" class="inline-flex items-center justify-center h-10 py-2 px-4 font-medium text-white rounded-md bg-black">
    <slot/>
  </button>
</template>
<script setup lang="ts">
defineProps({
  type: {
    default: 'button',
  }
})
</script>
