<template>
  <div class="container py-4">
    {{ message }}
    <input v-model="message2" type="text" />
    <button @click="sayHello">Click!</button>
    <PostItem type="news" title="제목" contents="내용" :is-liked="true" />
    <hr />
    <TemplateRefsChild ref="child" />
    <template v-if="child">{{ child.message }}</template>
    <hr />
    <MyBase class="parent-class" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import PostItem from './PostItem.vue'
import TemplateRefsChild from './setup/TemplateRefsChild.vue'
import MyBase from './setup/MyBase.vue'

const message = 'Hello Vue3!'
const message2 = ref('')
const sayHello = () => {
  alert('Hello Vue3!')
}
const child = ref(null)
defineExpose({
  message,
})
const response = await axios('https://dummy.restapiexample.com/api/v1/employees')
console.log('response: ', response)
</script>

<style lang="scss" scoped></style>
