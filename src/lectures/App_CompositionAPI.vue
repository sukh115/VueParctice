<template>
  <div>
    <button v-on:click="increament">Counter: {{ counter }}</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const counter = ref(0)
    const increament = () => {
      counter.value++
    }
    return {
      counter,
      increament,
    }
  },
}
</script>

<style lang="scss" scoped></style>
