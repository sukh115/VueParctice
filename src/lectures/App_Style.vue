<template>
  <div>
    <div :style="styleObject">아무말이나 적어보세요</div>
    <button v-on:click="fontSize--">-</button>
    <button v-on:click="fontSize++">+</button>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  setup() {
    const fontSize = ref(13)
    const styleObject = computed(() => {
      return {
        color: 'blue',
        fontSize: fontSize.value + 'px',
        border: '1px solid black',
        padding: '10px',
      }
    })

    return {
      styleObject,
      fontSize,
    }
  },
}
</script>

<style lang="scss" scoped></style>
