<template>
  <div></div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    // ref -> object
    const count = ref(0)
    const state = reactive({
      count,
    })

    console.log(count.value)
    console.log(state.count)

    // ref -> Array
    const message = ref('Hello')
    const arr = reactive([message])
    console.log(arr[0].value)

    return {
      count,
      state,
    }
  },
}
</script>

<style lang="scss" scoped></style>
