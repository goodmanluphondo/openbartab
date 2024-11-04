export const useTabStore = defineStore('tab', () => {
  const rounds = ref([])
  const sharing = ref(0)

  const openTab = computed(() => rounds.value)
  const tabTotal = computed(() => {
    return rounds.value.reduce((totalSum, round) => {
      const roundTotal = round.reduce((sum, drink) => {
        return sum + drink.price * drink.quantity;
      }, 0);
      return totalSum + roundTotal;
    }, 0);
  })
  const peopleSharing = computed(() => sharing.value)

  function addToTab(drink) {
    rounds.value.push(drink)
  }

  function removeFromTab(drink) {
    // code
  }

  function setSharing(people) {
    sharing.value = people
  }

  function clearTab() {
    rounds.value = []
    sharing.value = 0
  }

  return { rounds, sharing, openTab, tabTotal, peopleSharing, addToTab, setSharing, clearTab }
})
