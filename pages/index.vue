<template>
  <div class="w-full max-w-4xl mx-auto">
    <div class="text-center mb-8">
      <h1 class="text-7xl font-bold font-custom text-transparent bg-gradient-to-l from-black to-violet-300 bg-clip-text">
        Open Bar Tab
      </h1>
      <p v-if="store.openTab?.length === 0" class="text-xl text-gray-200 mt-4">Start your new tab with a round below</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Drinks />
      <Tab />
    </div>
  </div>
</template>
<script setup lang="ts">
import {useTabStore} from "~/stores/tab";

const store = useTabStore()
</script>
