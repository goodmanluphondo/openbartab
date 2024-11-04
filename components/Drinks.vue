<template>
  <div class="md:col-span-2">
    <div v-if="status === 'pending'">Loading...</div>
    <div v-else-if="status === 'error'">An error occurred: {{error.message}}</div>
    <div v-else class="flex flex-col justify-between space-y-4">
      <p>Menu</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <BeverageCard v-for="drink in drinks" :key="drink.id" :drink="drink" v-model="roundOfDrinks[drink.id]" />
      </div>
      <div>
        <Button type="button" @click="addToTab" :class="{'motion-preset-shake' : noDrinksSelected}">
          Add to tab
        </Button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {useTabStore} from "~/stores/tab";

const roundOfDrinks = ref({})
const noDrinksSelected = ref(false)
const store = useTabStore();
const { data, status, error } = await useAsyncData('menu', () => queryContent('menu').findOne());

const drinks = computed(() => {
  return data.value.drinks ? data.value.drinks.map(drink => ({
    ...drink,
    displayPrice: formatPrice(drink.price)
  })) : []
});

const addToTab = () => {
  const newRoundOfDrinks = []

  for (let drink of data.value.drinks) {
    const quantity = roundOfDrinks.value[drink.id] || 0
    if (quantity > 0) newRoundOfDrinks.push({name: drink.name, price: drink.price, quantity: quantity})
  }

  if (newRoundOfDrinks.length > 0) {
    store.addToTab(newRoundOfDrinks)
  } else {
    noDrinksSelected.value = true
  }

  roundOfDrinks.value = {}
  setTimeout(() => {
    noDrinksSelected.value = false
  }, 500)
}
</script>
