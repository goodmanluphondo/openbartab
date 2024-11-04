<template>
  <div class="flex items-center space-x-2">
    <button
        type="button"
        class="w-4 h-4 flex-shrink-0 rounded-md border border-white overflow-hidden"
        @click="toggleCheckbox"
    >
      <span v-if="modelValue" class="h-full flex items-center justify-between text-black bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </span>
    </button>
    <label class="text-sm font-medium text-gray-200 leading-none">
      <slot/>
    </label>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: [Boolean],
    default: true,
    required: true,
  }
})

const emit = defineEmits(['update:modelValue']);

const toggleCheckbox = () => {
  emit('update:modelValue', !props.modelValue);
}
</script>
