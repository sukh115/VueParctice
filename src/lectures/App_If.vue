<template>
  <div>
    <h2 v-if="visible">Hello Vue3!</h2>
    <h2 v-else>false 입니다!</h2>
    <button v-on:click="visible = !visible">toggle</button>
    <ht />
    <button v-on:click="type = 'A'">A</button>
    <button v-on:click="type = 'B'">B</button>
    <button v-on:click="type = 'C'">C</button>
    <button v-on:click="type = 'D'">D</button>

    <div v-if="type === 'A'">A 타입입니다.</div>
    <div v-else-if="type === 'B'">B 타입입니다.</div>
    <div v-else-if="type === 'C'">C 타입입니다.</div>
    <div v-else>A,B,C가 아닙니다!</div>

    <h1 v-show="show">Title입니다</h1>
    <button v-on:click="show = !show">toggle</button>
  </div>
  <ht />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const visible = ref(true)
    const type = ref('A')
    const show = ref(true)
    return {
      visible,
      type,
      show,
    }
  },
}
</script>

<style lang="scss" scoped></style>
