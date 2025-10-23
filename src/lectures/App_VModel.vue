<template>
  <div>
    <h2>input Value</h2>
    <!-- <input type="text" v-model.lazy="inputValue" /> -->
    <input type="text" v-model.lazy.number="inputValue" />
    <div>{{ inputValue }}</div>
    <div>{{ typeof inputValue }}</div>

    <h2>textarea Value</h2>
    <textarea v-model="textareaValue"></textarea>
    <div>{{ textareaValue }}</div>

    <h2>checkbox Value</h2>
    <label for="cehckbox">{{ checkboxValue }}</label>
    <input type="checkbox" id="checbox" v-model="checkboxValue" />

    <h2>radio Value</h2>
    <label>
      <input type="radio" name="type" value="O" v-model="radioValue" /> O형
      <input type="radio" name="type" value="A" v-model="radioValue" /> A형
    </label>
    <div>{{ radioValue }}</div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const inputValue = ref('')
    const textareaValue = ref('')
    const checkboxValue = ref(true)
    const radioValue = ref('O')
    return {
      inputValue,
      textareaValue,
      checkboxValue,
      radioValue,
    }
  },
}
</script>

<style lang="scss" scoped></style>
