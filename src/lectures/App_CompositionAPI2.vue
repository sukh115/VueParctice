<template>
  <div>
    <h2>반응형 메시지</h2>
    <p>{{ reactiveMessage }}</p>
    <button v-on:click="addReactiveMessage()">Add message</button>
    <h2>일반 메시지</h2>
    <p>{{ normalMessage }}</p>
    <button v-on:click="addNormalMessage()">Add message</button>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, ref } from 'vue'
export default {
  setup() {
    const reactiveMessage = ref('hello Reactive vue3')
    const addReactiveMessage = () => {
      reactiveMessage.value = reactiveMessage.value + '!'
    }
    // console.log('isRef(reactiveMessage):', isRef(reactiveMessage))
    let normalMessage = 'hello normal vue3'
    const addNormalMessage = () => {
      normalMessage = normalMessage + '!'
    }
    // console.log('isRef(normalMessage):', isRef(normalMessage))
    onMounted(() => {
      console.log('컴포넌트가 마운트되었습니다.')
    })
    onBeforeMount(() => {
      console.log('컴포넌트가 마운트되기 전입니다.')
    })
    return {
      reactiveMessage,
      addReactiveMessage,
      normalMessage,
      addNormalMessage,
    }
  },
}
</script>

<style lang="scss" scoped></style>
