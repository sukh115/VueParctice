<template>
  <div class="card">
    <div class="card-header">Child Component</div>
    <div class="card-body"><DeepChildCard></DeepChildCard></div>
  </div>
</template>

<script>
import { inject } from 'vue'
import DeepChildCard from './DeepChildCard.vue'
export default {
  components: {
    DeepChildCard,
  },
  setup() {
    const appMessage = inject('appMessage')

    return {
      appMessage,
    }
  },
}
</script>

<style lang="scss" scoped></style>
