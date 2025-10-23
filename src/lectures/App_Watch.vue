<template>
  <div></div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  setup() {
    const message = ref('')
    watch(message, (newVal, oldVal) => {
      console.log('newVal:', newVal)
      console.log('oldVal:', oldVal)
    })
    return {
      message,
    }
  },
}
</script>

<style lang="scss" scoped></style>
