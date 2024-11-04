<template>
  <div class="flex flex-col justify-between space-y-4">
    <div class="space-y-4">
      <p>Your Tab</p>
      <div>
        <div v-for="(tg, index) in openTab" :key="index">
          <RoundOfDrinksCard :roundOfDrinks="tg" />
        </div>
      </div>
    </div>
    <div class="space-y-2 text-right">
      <div>
        <label for="sharing" class="block">Split bill</label>
        <Input
            id="sharing"
            type="number"
            v-model="sharing"
            @input="updateSharing"
            placeholder="0"
            min="0"
            class="mt-1 text-right"
        />
      </div>
      <div class="py-2">
        <div class="text-white font-bold">
          Total Due: {{formatPrice(store.tabTotal)}}
        </div>
        <div v-if="store.sharing > 1" class="text-sm text-gray-200">
          {{formatPrice(store.tabTotal / store.sharing)}} per person
        </div>
      </div>
    </div>
    <div>
      <div class="py-2 space-y-2">
        <Checkbox v-model="printToCsv">Print to CSV</Checkbox>
        <Checkbox v-model="printToPdf">Print to PDF</Checkbox>
      </div>
      <Button @click="settleTab" class="block w-full" :class="{'motion-preset-shake' : tabIsEmpty}">Settle Tab</Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import {useTabStore} from "~/stores/tab"
import formatPrice from "../utils/format-price";
import generatePdf from "~/utils/generate-pdf";
import generateCsv from "~/utils/generate-csv";

const store = useTabStore()
const sharing = ref(store.sharing)
const openTab = computed(() => store.openTab)
const printToCsv = ref(false)
const printToPdf = ref(false)

const updateSharing = () => {
  store.setSharing(Number(sharing.value))
}

const tabIsEmpty = ref(false)

const settleTab = () => {
  if (store.openTab?.length > 0) {
    if (printToPdf.value == true) {
      generatePdf(store.openTab, store.tabTotal, sharing.value)
    }

    if (printToCsv.value == true) {
      generateCsv(store.openTab, store.tabTotal, sharing.value)
    }

    clearSelections()
    store.clearTab()
  } else {
    tabIsEmpty.value = true
  }

  setTimeout(() => {
    tabIsEmpty.value = false
  }, 500)
}

const clearSelections = () => {
  printToCsv.value = false
  printToPdf.value = false
  sharing.value = 0

  updateSharing()
}
</script>
