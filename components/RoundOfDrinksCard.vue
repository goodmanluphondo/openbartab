<template>
  <div
      class="py-2 px-4 my-1 text-gray-800 bg-white rounded-lg"
      :class="[containsPremix ? 'motion-preset-confetti' : 'motion-preset-bounce ']"
  >
    <div v-for="(drink, index) in roundOfDrinks" :key="index" class="flex justify-between">
      <div>
        <div><span class="w-5 inline">{{drink.quantity}}</span> x {{drink.name}}</div>
      </div>
      <div>
        <div>{{formatPrice(drink.price * drink.quantity)}}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {onMounted, defineProps} from "vue";
import formatPrice from "../utils/format-price";

const props = defineProps({
  roundOfDrinks: Object,
});

const containsPremix = computed(() => {
  return props.roundOfDrinks.some((drink) => drink.name === "Premix");
})

onMounted(() => {
  console.log("RoundOfDrinksCard: mounted", props.roundOfDrinks);
})
</script>
