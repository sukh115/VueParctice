<template>
  <div class="container py-4">
    <input ref="inputRef" type="text" value="hello world" />
    <hr />
    <button @click="visible = !visible">Toggle</button>
    <LifeCycleChild v-if="visible"></LifeCycleChild>
    <p id="message">{{ message }}</p>
  </div>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue'
import LifeCycleChild from './LifeCycleChild.vue'
export default {
  components: {
    LifeCycleChild,
  },
  setup() {
    console.log('setup')
    const inputRef = ref(null)
    const message = ref('')
    const visible = ref(false)

    onBeforeMount(() => {
      console.log('beforeMount', inputRef.value)
    })
    onMounted(() => {
      console.log('mounted', inputRef.value)
    })
    onBeforeUpdate(() => {
      console.log('beforeUpdate', message.value)
      console.log('DOM Content', document.querySelector('#message').textContent)
    })
    onUpdated(() => {
      console.log('updated', message.value)
      console.log('DOM Content', document.querySelector('#message').textContent)
    })
    return {
      inputRef,
      message,
      visible,
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
}
</script>

<style lang="scss" scoped></style>
