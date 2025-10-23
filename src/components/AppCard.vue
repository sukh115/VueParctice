<template>
  <div>
    <div class="card">
      <div v-if="hasHeader" class="card-header">
        <slot name="header" header-message="헤더 메시지"></slot>
      </div>
      <div v-if="$slots.default" class="card-body">
        <slot :childMessage="childMessage" hello-message="안녕하세요"></slot>
      </div>
      <div v-if="hasFooter" class="card-footer text-body-secondary">
        <slot name="footer" footer-message="푸터 메시지"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  setup(props, { slots }) {
    const childMessage = ref('자식 컴포넌트 메시지')
    const hasFooter = computed(() => !!slots.footer)
    const hasHeader = computed(() => !!slots.header)
    return {
      childMessage,
      hasFooter,
      hasHeader,
    }
  },
}
</script>

<style lang="scss" scoped></style>
