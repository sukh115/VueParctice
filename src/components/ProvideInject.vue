<template>
  <div class="container py-4"></div>
  <div class="card">
    <div class="card-header">ProvideInject Component</div>
    <div class="card-body">
      <button @click="count++">Click</button>
      <ChildCard></ChildCard>
    </div>
  </div>
</template>

<script>
import { inject, provide, readonly, ref } from 'vue'
import ChildCard from './ChildCard.vue'

export default {
  components: {
    ChildCard,
  },
  setup() {
    const staticMessage = 'static message'
    const message = ref('message')
    const updateMessage = (appenMessage) => {
      message.value = message.value + appenMessage
    }
    const count = ref(10)
    provide('staticMessage', staticMessage)
    provide('message', { message: readonly(message), updateMessage })
    provide('count', count)

    const appMessage = inject('appMessage')
    return {
      staticMessage,
      message,
      count,
      updateMessage,
      appMessage,
    }
  },
}
</script>

<style lang="scss" scoped></style>
