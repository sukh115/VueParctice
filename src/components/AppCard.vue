<template>
  <div>
    <div class="card">
      <div class="card-header">
        <slot name="header">#Header</slot>
      </div>
      <div class="card-body">
        <slot :childMessage="childMessage">#Body</slot>
      </div>
      <div class="card-footer text-body-secondary">
        <slot name="footer">#Footer</slot>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const childMessage = ref('자식 컴포넌트 메시지')
    return {
      childMessage,
    }
  },
}
</script>

<style lang="scss" scoped></style>
