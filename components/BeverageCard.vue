<template>
  <div class="p-4 text-gray-800 flex flex-col justify-between space-y-8 bg-white rounded-lg shadow-sm">
    <div>{{drink.name}}</div>
    <div class="text-lg font-bold">{{drink.displayPrice}}</div>
    <div class="flex items-center justify-between">
      <button type="button" @click="decrement">-</button>
      <label class="text-2xl">{{modelValue}}</label>
      <button type="button" @click="increment">+</button>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  drink: {
    type: Object,
    required: true,
  }
})

const emit = defineEmits(['update:modelValue'])

const decrement = () => {
  if (props.modelValue > 0) emit('update:modelValue', props.modelValue - 1);
}

const increment = () => {
  emit('update:modelValue', props.modelValue + 1);
}
</script>
<style scoped>
button {
  @apply h-12 w-12 text-2xl font-extrabold flex items-center justify-center rounded-full text-white bg-black;
}
</style>
