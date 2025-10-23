<template>
  <div>
    <h2>보간법</h2>
    <p>{{ message }}</p>
    <p v-once>{{ message }}</p>
    <button v-on:click="message = message + '!'">Click!</button>
    <h2>v-html</h2>
    <p>{{ rawHtml }}</p>
    <p v-html="rawHtml"></p>
    <h2>속성 바인딩</h2>
    <div v-bind:title="dynamicTitle">마우스를 올려보세요!</div>
    <input type="text" value="홍길동" v-bind:disabled="isInputDisabled" />
    <input v-bind="attrs" />
    <h2>JavaScript</h2>
    {{ message.split(' ').reverse().join(' ') }}<br />
    {{ isInputDisabled ? '입력이 비활성화되었습니다.' : '입력이 활성화되었습니다.' }}
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const message = ref('안녕하세요 Vue 3!')
    const rawHtml = ref('<strong>안녕하세요</strong>')

    const dynamicTitle = ref('동적 타이틀입니다!')
    const isInputDisabled = ref(true)
    const attrs = ref({
      type: 'text',
      value: '1234',
      disabled: false,
    })
    return {
      message,
      rawHtml,
      dynamicTitle,
      isInputDisabled,
      attrs,
    }
  },
}
</script>

<style lang="scss" scoped></style>
