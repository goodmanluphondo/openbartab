<template>
  <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="flex h-10 w-full rounded-md border py-2 px-3"
  />
</template>
<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  modelValue: {
    type: [String, Number],
    required: true,
  }
})
</script>
